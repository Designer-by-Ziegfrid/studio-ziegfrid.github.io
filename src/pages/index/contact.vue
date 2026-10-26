<template>
  <q-page class="contact-page">
    <section class="sz-section contact-hero">
      <span class="contact-hero__measure" aria-hidden="true"></span>
      <div class="sz-container contact-hero__grid">
        <RevealOnScroll>
          <SectionLabel number="01" label="Contact" />
          <h1 class="sz-h1 contact-hero__title">
            Tell us what<br />
            <em class="sz-italic">you're building.</em>
          </h1>
          <p class="sz-lead contact-hero__lead">
            A new website, a redesign, a booking flow that should work better, or something you have
            not quite named yet. Start with the useful details — we will take it from there.
          </p>
          <p class="contact-hero__note">
            <span class="sz-status-dot" aria-hidden="true"></span>
            {{ SITE.availability }} · {{ SITE.responseTime }}
          </p>
        </RevealOnScroll>

        <RevealOnScroll class="contact-direct" :delay="100">
          <div class="contact-direct__top">
            <span>Direct line</span>
            <span>No gatekeepers</span>
          </div>
          <a
            v-for="channel in CONTACT_CHANNELS"
            :key="channel.label"
            :href="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener noreferrer' : undefined"
            class="contact-direct__channel"
          >
            <span class="contact-direct__label">
              <q-icon :name="channel.icon" size="15px" aria-hidden="true" />
              {{ channel.label }}
            </span>
            <strong>{{ channel.value }}</strong>
            <span class="contact-direct__arrow" aria-hidden="true">↗</span>
          </a>
          <div class="contact-direct__foot">
            <span>Based in the Philippines</span>
            <span>Working worldwide</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section id="brief" class="sz-section contact-brief">
      <div class="sz-container contact-brief__grid">
        <RevealOnScroll class="contact-brief__main">
          <div class="contact-brief__head">
            <SectionLabel number="02" label="Project brief" />
            <h2 class="sz-h2 contact-brief__title">
              Start with<br />
              <em class="sz-italic">the useful details.</em>
            </h2>
            <p class="sz-lead">
              This is not a lead form that disappears into a database. It prepares a message you can
              send through your own email or WhatsApp.
            </p>
          </div>

          <q-form ref="formRef" class="brief-form" @submit.prevent="prepareBrief">
            <div class="brief-form__row">
              <q-input
                v-model="form.name"
                outlined
                class="sz-field"
                label="Your name"
                autocomplete="name"
                :rules="[required]"
              />
              <q-input
                v-model="form.email"
                outlined
                class="sz-field"
                label="Email"
                type="email"
                autocomplete="email"
                :rules="[required, validEmail]"
              />
            </div>

            <div class="brief-form__row">
              <q-input
                v-model="form.business"
                outlined
                class="sz-field"
                label="Business name (optional)"
                autocomplete="organization"
              />
              <q-input
                v-model="form.website"
                outlined
                class="sz-field"
                label="Current website (optional)"
                type="url"
                autocomplete="url"
              />
            </div>

            <div class="brief-form__row">
              <q-select
                v-model="form.projectType"
                outlined
                class="sz-field"
                label="What do you need?"
                :options="projectTypes"
                :rules="[required]"
              />
              <q-select
                v-model="form.timeline"
                outlined
                class="sz-field"
                label="Timeline (optional)"
                :options="timelines"
              />
            </div>

            <q-select
              v-model="form.budget"
              outlined
              class="sz-field"
              label="Budget range in PHP (optional)"
              :options="budgetRanges"
              hint="A range helps us tell you what is possible. It is not a commitment."
            />

            <q-input
              v-model="form.building"
              outlined
              class="sz-field"
              label="What are you building?"
              type="textarea"
              rows="4"
              hint="The business, the website, and what it needs to do."
              :rules="[required]"
            />

            <q-input
              v-model="form.problem"
              outlined
              class="sz-field"
              label="What is not working right now? (optional)"
              type="textarea"
              rows="3"
              hint="The current site, a manual process, a bottleneck — anything useful."
            />

            <q-input
              v-model="form.outcome"
              outlined
              class="sz-field"
              label="What does a good outcome look like? (optional)"
              type="textarea"
              rows="3"
            />

            <q-input
              v-model="form.notes"
              outlined
              class="sz-field"
              label="Anything else we should know? (optional)"
              type="textarea"
              rows="3"
            />

            <div class="brief-form__footer">
              <AppButton type="submit" label="Prepare my brief" arrow />
              <p>
                Nothing is sent automatically. You choose email or WhatsApp after your brief is
                ready.
              </p>
            </div>
          </q-form>

          <div
            v-if="briefReady"
            ref="readyRef"
            class="brief-ready"
            tabindex="-1"
            aria-live="polite"
          >
            <div class="brief-ready__top">
              <span>Brief ready</span>
              <span>Choose how to send</span>
            </div>
            <h3>Your message is ready.</h3>
            <p>
              Open it in your email app or WhatsApp. If nothing opens, copy the brief and paste it
              wherever you like.
            </p>
            <div class="brief-ready__actions">
              <AppButton :href="mailtoHref" label="Open email" variant="light" arrow />
              <AppButton :href="whatsappHref" label="Open WhatsApp" variant="light" external />
              <button class="brief-ready__copy" type="button" @click="copyBrief">Copy brief</button>
            </div>
            <details class="brief-ready__preview">
              <summary>Preview the message</summary>
              <pre>{{ messageBody }}</pre>
            </details>
            <button class="brief-ready__edit" type="button" @click="editBrief">
              Edit the brief
            </button>
          </div>
        </RevealOnScroll>

        <aside class="contact-brief__aside">
          <RevealOnScroll>
            <div class="contact-next">
              <SectionLabel label="What happens next" />
              <ol class="contact-next__list">
                <li v-for="step in nextSteps" :key="step.number">
                  <span>{{ step.number }}</span>
                  <div>
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.copy }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </RevealOnScroll>

          <RevealOnScroll :delay="100">
            <div class="contact-include">
              <p class="contact-include__label">A useful brief includes</p>
              <ul>
                <li>The business and who it serves</li>
                <li>What the website needs to do</li>
                <li>A range and a rough timeline</li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll :delay="160">
            <div class="contact-budget">
              <span class="contact-budget__mark" aria-hidden="true">✳</span>
              <p>
                <strong>Not sure about the budget?</strong> Tell us that too. We will tell you what
                is possible at your range — and what can wait until later.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll :delay="220">
            <div class="contact-talk">
              <p>Prefer to skip the brief?</p>
              <div class="contact-talk__actions">
                <AppButton :href="`mailto:${SITE.email}`" label="Email us" variant="ghost" />
                <AppButton :href="SITE.whatsappUrl" label="WhatsApp" variant="ghost" external />
              </div>
            </div>
          </RevealOnScroll>
        </aside>
      </div>
    </section>

    <section class="sz-section--tight contact-end">
      <div class="sz-container contact-end__inner">
        <p>
          <span class="contact-end__mark" aria-hidden="true">✳</span>
          Not sure what you need yet? That is normal. A short conversation is enough to find out.
        </p>
        <AppButton to="/services" label="See what we do" variant="text" arrow />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue';
import { Notify } from 'quasar';
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { CONTACT_CHANNELS, SITE } from '@/data/site';
import { breadcrumbJsonLd, professionalServiceJsonLd, useSeo } from '@/composables/useSeo';

interface BriefForm {
  name: string;
  email: string;
  business: string;
  website: string;
  projectType: string;
  timeline: string;
  budget: string;
  building: string;
  problem: string;
  outcome: string;
  notes: string;
}

const form = reactive<BriefForm>({
  name: '',
  email: '',
  business: '',
  website: '',
  projectType: '',
  timeline: '',
  budget: '',
  building: '',
  problem: '',
  outcome: '',
  notes: '',
});

const projectTypes = [
  'A new website',
  'A redesign',
  'A custom build or web app',
  'Booking or e-commerce',
  'Care and maintenance',
  'Not sure yet',
];

const timelines = [
  'As soon as possible',
  'In the next 1–2 months',
  'In 2–3 months',
  '3+ months out',
  'Not sure yet',
];

const budgetRanges = [
  'Under ₱25,000',
  '₱25,000 – ₱50,000',
  '₱50,000 – ₱100,000',
  '₱100,000 – ₱200,000',
  '₱200,000+',
  'Not sure yet',
  'Prefer not to say',
];

const nextSteps = [
  {
    number: '01',
    title: 'You send the brief',
    copy: 'Email or WhatsApp, whichever is easier. No account, no form database.',
  },
  {
    number: '02',
    title: 'We read it properly',
    copy: 'Usually within one to two business days. If we are not the right fit, we will say so.',
  },
  {
    number: '03',
    title: 'We talk it through',
    copy: 'A short conversation about the business, the scope, the budget, and the next useful step.',
  },
];

const formRef = ref<{ validate: () => Promise<boolean> } | null>(null);
const readyRef = ref<HTMLElement | null>(null);
const briefReady = ref(false);

const required = (value: unknown): true | string => {
  return typeof value === 'string' && value.trim().length > 0 ? true : 'Please add this.';
};

const validEmail = (value: unknown): true | string => {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? true
    : 'Please use a valid email.';
};

const subject = computed(() => {
  const name = form.name.trim() || 'New project';
  const business = form.business.trim();
  return `Project enquiry — ${name}${business ? ` / ${business}` : ''}`;
});

const messageBody = computed(() => {
  const lines = [
    'Hi Ziegfrid,',
    '',
    "I'd like to talk about a project.",
    '',
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
  ];

  if (form.business.trim()) lines.push(`Business: ${form.business.trim()}`);
  if (form.website.trim()) lines.push(`Website: ${form.website.trim()}`);
  if (form.projectType) lines.push(`Project type: ${form.projectType}`);
  if (form.timeline) lines.push(`Timeline: ${form.timeline}`);
  if (form.budget) lines.push(`Budget range: ${form.budget}`);

  lines.push('', 'What I am building:', form.building.trim() || '—');
  lines.push('', 'What is not working:', form.problem.trim() || '—');
  lines.push('', 'What a good outcome looks like:', form.outcome.trim() || '—');
  lines.push('', 'Anything else:', form.notes.trim() || '—');

  return lines.join('\n');
});

const mailtoHref = computed(
  () =>
    `mailto:${SITE.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(messageBody.value)}`,
);

const whatsappHref = computed(() => {
  const separator = SITE.whatsappUrl.includes('?') ? '&' : '?';
  return `${SITE.whatsappUrl}${separator}text=${encodeURIComponent(messageBody.value)}`;
});

async function prepareBrief() {
  const valid = await formRef.value?.validate();
  if (!valid) return;

  briefReady.value = true;
  await nextTick();
  readyRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  readyRef.value?.focus({ preventScroll: true });

  Notify.create({
    message: 'Your brief is ready. Choose email or WhatsApp to send it.',
    color: 'dark',
    position: 'bottom',
    timeout: 3200,
  });
}

async function copyBrief() {
  try {
    await navigator.clipboard.writeText(messageBody.value);
    Notify.create({
      message: 'Brief copied. Paste it wherever you like.',
      color: 'dark',
      position: 'bottom',
      timeout: 2600,
    });
  } catch {
    Notify.create({
      message: 'Copy failed. Open the preview and copy it manually.',
      color: 'negative',
      position: 'bottom',
      timeout: 3200,
    });
  }
}

async function editBrief() {
  briefReady.value = false;
  await nextTick();
  document.querySelector('.brief-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

useSeo({
  title: 'Contact — Studio Ziegfrid',
  description:
    'Start a project with Studio Ziegfrid. Tell us what you are building, what is not working, and what a good outcome looks like. Email or WhatsApp, no backend form.',
  path: '/contact',
  jsonLd: [
    professionalServiceJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ],
});
</script>

<style scoped>
.contact-hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--sz-line);
}

.contact-hero__measure {
  position: absolute;
  top: 0;
  right: clamp(1rem, 4vw, 3.5rem);
  bottom: 0;
  width: 10px;
  opacity: 0.35;
  background-image: repeating-linear-gradient(
    180deg,
    var(--sz-line-strong) 0,
    var(--sz-line-strong) 1px,
    transparent 1px,
    transparent 28px
  );
}

.contact-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.contact-hero__title {
  max-width: 11ch;
}

.contact-hero__lead {
  margin-top: 1.5rem;
}

.contact-hero__note {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin: 1.6rem 0 0;
  color: var(--sz-ink-faint);
  font-size: 0.68rem;
  font-weight: 550;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-direct {
  border: 1px solid var(--sz-dark);
  background: var(--sz-dark);
  color: var(--sz-cream);
  box-shadow: 0 35px 80px -55px rgba(22, 21, 19, 0.7);
}

.contact-direct__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.48);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-direct__channel {
  display: grid;
  grid-template-columns: 5.8rem minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: baseline;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
  transition: background var(--sz-dur-fast) var(--sz-ease);
}

.contact-direct__channel:hover {
  background: rgba(247, 242, 232, 0.08);
}

.contact-direct__label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(247, 242, 232, 0.44);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-direct__channel strong {
  overflow: hidden;
  color: rgba(247, 242, 232, 0.86);
  font-family: var(--sz-font-display);
  font-size: clamp(0.95rem, 1.7vw, 1.2rem);
  font-weight: 500;
  letter-spacing: -0.015em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-direct__arrow {
  color: #ff8a6e;
  font-size: 1rem;
}

.contact-direct__foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding: 0.9rem 1.1rem;
  color: rgba(247, 242, 232, 0.4);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-brief {
  border-top: 1px solid var(--sz-line);
}

.contact-brief__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: start;
}

.contact-brief__main {
  padding: clamp(1.2rem, 3vw, 2.4rem);
  border: 1px solid var(--sz-line);
  background: var(--sz-paper-warm);
}

.contact-brief__head {
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--sz-line);
}

.contact-brief__title {
  max-width: 12ch;
}

.contact-brief__head .sz-lead {
  margin-top: 1.2rem;
  font-size: 0.96rem;
}

.brief-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.brief-form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.brief-form :deep(.q-field--outlined .q-field__control) {
  background: rgba(255, 255, 255, 0.36);
}

.brief-form__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem 1.5rem;
  margin-top: 0.4rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--sz-line);
}

.brief-form__footer p {
  max-width: 38ch;
  margin: 0;
  color: var(--sz-ink-faint);
  font-size: 0.68rem;
  line-height: 1.5;
}

.brief-ready {
  margin-top: 1.5rem;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid var(--sz-dark);
  background: var(--sz-dark);
  color: var(--sz-cream);
  outline: none;
}

.brief-ready__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.48);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.brief-ready h3 {
  margin: 1.3rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.brief-ready > p {
  max-width: 58ch;
  margin: 0.7rem 0 0;
  color: rgba(247, 242, 232, 0.64);
  font-size: 0.84rem;
  line-height: 1.6;
}

.brief-ready__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.3rem;
}

.brief-ready__copy {
  min-height: 46px;
  padding: 0.8rem 1.1rem;
  border: 1px solid rgba(247, 242, 232, 0.28);
  border-radius: var(--sz-radius-pill);
  background: transparent;
  color: rgba(247, 242, 232, 0.78);
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease);
}

.brief-ready__copy:hover {
  background: rgba(247, 242, 232, 0.12);
  color: var(--sz-cream);
}

.brief-ready__preview {
  margin-top: 1.2rem;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
}

.brief-ready__preview summary {
  padding: 0.8rem 0;
  color: rgba(247, 242, 232, 0.52);
  cursor: pointer;
  font-size: 0.64rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.brief-ready__preview pre {
  overflow: auto;
  max-height: 18rem;
  margin: 0;
  padding: 0.9rem;
  border: 1px solid rgba(247, 242, 232, 0.14);
  color: rgba(247, 242, 232, 0.68);
  font-family: var(--sz-font-mono);
  font-size: 0.7rem;
  line-height: 1.55;
  white-space: pre-wrap;
}

.brief-ready__edit {
  margin-top: 0.9rem;
  padding: 0;
  border: 0;
  border-bottom: 1px solid rgba(247, 242, 232, 0.36);
  background: transparent;
  color: rgba(247, 242, 232, 0.6);
  cursor: pointer;
  font-size: 0.66rem;
  letter-spacing: 0.06em;
}

.brief-ready__edit:hover {
  color: var(--sz-cream);
}

.contact-brief__aside {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-next {
  padding-top: 0.2rem;
}

.contact-next__list {
  margin: 0.4rem 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--sz-line-strong);
}

.contact-next__list li {
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr);
  gap: 0.9rem;
  padding-block: 1rem;
  border-bottom: 1px solid var(--sz-line);
}

.contact-next__list li > span {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.6rem;
}

.contact-next__list h3 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.contact-next__list p {
  margin: 0.35rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
  line-height: 1.5;
}

.contact-include {
  padding: 1.1rem;
  border: 1px solid var(--sz-line);
  background: var(--sz-paper-warm);
}

.contact-include__label {
  margin: 0;
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-include ul {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0.7rem 0 0;
  padding: 0;
  list-style: none;
}

.contact-include li {
  display: flex;
  gap: 0.5rem;
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
  line-height: 1.45;
}

.contact-include li::before {
  content: '✓';
  color: var(--sz-accent-strong);
  font-size: 0.7rem;
}

.contact-budget {
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--sz-line);
}

.contact-budget__mark {
  color: var(--sz-accent-strong);
  font-size: 0.8rem;
}

.contact-budget p {
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.74rem;
  line-height: 1.55;
}

.contact-budget strong {
  color: var(--sz-ink);
  font-weight: 600;
}

.contact-talk {
  padding: 1.1rem;
  border: 1px solid var(--sz-line);
  background: var(--sz-paper-deep);
}

.contact-talk p {
  margin: 0 0 0.8rem;
  font-family: var(--sz-font-display);
  font-size: 1.1rem;
  font-style: italic;
}

.contact-talk__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact-end {
  border-top: 1px solid var(--sz-line);
  background: var(--sz-paper-deep);
}

.contact-end__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
}

.contact-end__inner p {
  display: flex;
  gap: 0.5rem;
  max-width: 58ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.82rem;
  line-height: 1.55;
}

.contact-end__mark {
  color: var(--sz-accent-strong);
}

@media (max-width: 1023px) {
  .contact-hero__grid,
  .contact-brief__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-direct {
    max-width: 38rem;
  }

  .contact-brief__aside {
    position: static;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
}

@media (max-width: 767px) {
  .contact-hero__measure {
    display: none;
  }

  .brief-form__row,
  .contact-brief__aside {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-direct__channel {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .contact-direct__label {
    grid-column: 1 / -1;
  }

  .contact-direct__channel strong {
    font-size: 0.95rem;
  }

  .contact-brief__main {
    padding-inline: 0;
    border-inline: 0;
    background: transparent;
  }

  .contact-end__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
