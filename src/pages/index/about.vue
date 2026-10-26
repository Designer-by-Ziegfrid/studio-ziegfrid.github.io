<template>
  <q-page class="about-page">
    <section class="sz-section about-hero">
      <span class="about-hero__measure" aria-hidden="true"></span>
      <div class="sz-container about-hero__grid">
        <RevealOnScroll class="about-hero__copy">
          <SectionLabel number="01" label="About" />
          <h1 class="sz-h1 about-hero__title">
            A small studio<br />
            <em class="sz-italic">for work that doesn't fit.</em>
          </h1>
          <p class="sz-lead about-hero__lead">
            Studio Ziegfrid is the independent design and build practice of Ziegfrid Gualberto — a
            designer and front-end developer working from the Philippines with businesses anywhere.
          </p>
          <p class="about-hero__body">
            We make websites for resorts, rentals, shops, and services that have outgrown the
            template aisle. The work is personal, direct, and built to be owned — not rented.
          </p>
          <div class="about-hero__actions">
            <AppButton to="/contact" label="Start a project" arrow />
            <AppButton to="/work" label="See the concept work" variant="ghost" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll class="about-record" :delay="100">
          <div class="about-record__top">
            <span>Studio record</span>
            <span>001 / ZG</span>
          </div>

          <div class="about-record__mark" aria-hidden="true">
            <span class="about-record__letter">Z</span>
            <span class="about-record__ring about-record__ring--one"></span>
            <span class="about-record__ring about-record__ring--two"></span>
            <span class="about-record__rule"></span>
            <span class="about-record__label">Made to measure</span>
          </div>

          <dl class="about-record__facts">
            <div>
              <dt>Principal</dt>
              <dd>Ziegfrid Gualberto</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Design &amp; front-end</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>Philippines / worldwide</dd>
            </div>
            <div>
              <dt>Care</dt>
              <dd>SiteMedic</dd>
            </div>
          </dl>

          <p class="about-record__quote">
            “The person who designs it is the person who builds it.”
          </p>
        </RevealOnScroll>
      </div>
    </section>

    <section class="sz-section sz-section--warm about-story">
      <div class="sz-container about-story__grid">
        <RevealOnScroll class="about-story__aside">
          <SectionLabel number="02" label="The studio" />
          <p class="about-story__kicker">Small on purpose.</p>
          <p class="about-story__body">
            The studio stays deliberately small. No account managers, no junior handoffs, no
            telephone game between the person who sold the project and the person doing the work.
          </p>
          <div class="about-story__signature">
            <span>Ziegfrid</span>
            <small>Designer &amp; builder</small>
          </div>
        </RevealOnScroll>

        <RevealOnScroll class="about-story__main" :delay="100">
          <h2 class="sz-h2 about-story__title">
            One person.<br />
            <em class="sz-italic">Fewer handoffs.</em>
          </h2>
          <p class="sz-lead">
            The businesses we work with rarely fit a theme. They have a particular booking flow, a
            product that needs explaining, or a way of serving customers that no page builder
            anticipated.
          </p>
          <p class="about-story__copy">
            So we start with the business, not the layout. We look at how customers find you, what
            they need to decide, and what happens after they get in touch. Then we design the
            interface and build it properly — with clean components, sensible content models, and no
            mystery plugins waiting to break.
          </p>
          <blockquote class="about-story__quote">
            “A website is not a logo on a theme. It is how your business behaves online.”
          </blockquote>
          <div class="about-story__facts">
            <div>
              <span>Design</span>
              <strong>Strategy, UX, visual systems</strong>
            </div>
            <div>
              <span>Build</span>
              <strong>Vue, Quasar, TypeScript, CMS</strong>
            </div>
            <div>
              <span>Care</span>
              <strong>SiteMedic maintenance</strong>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="sz-section sz-section--dark about-principles">
      <div class="sz-container">
        <RevealOnScroll class="about-principles__head">
          <div>
            <SectionLabel number="03" label="Beliefs" light />
            <h2 class="sz-h2">What we<br /><em class="sz-italic">won't compromise.</em></h2>
          </div>
          <p class="sz-lead">
            These are not promises invented for a services page. They are the decisions that keep
            the work honest — and the reason the studio stays small.
          </p>
        </RevealOnScroll>

        <div class="about-principles__grid">
          <RevealOnScroll
            v-for="(principle, index) in principles"
            :key="principle.number"
            as="article"
            class="about-principle"
            :delay="index * 70"
          >
            <span class="about-principle__number">{{ principle.number }}</span>
            <h3 class="about-principle__title">{{ principle.title }}</h3>
            <p class="about-principle__copy">{{ principle.copy }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <ProcessTimeline />

    <section class="sz-section about-elsewhere">
      <div class="sz-container about-elsewhere__grid">
        <RevealOnScroll>
          <SectionLabel number="05" label="Elsewhere" />
          <h2 class="sz-h2 about-elsewhere__title">
            Built here.<br />
            <em class="sz-italic">Cared for there.</em>
          </h2>
          <p class="sz-lead about-elsewhere__lead">
            When a launched site needs ongoing updates, fixes, backups, or a reliable pair of hands,
            it is handled through SiteMedic — the maintenance arm of the studio.
          </p>
          <p class="about-elsewhere__note">
            You can also find the studio's wider work, code, and professional history below.
          </p>
        </RevealOnScroll>

        <RevealOnScroll class="about-elsewhere__links" :delay="100">
          <a
            v-for="link in elsewhere"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="about-elsewhere__link"
          >
            <span class="about-elsewhere__link-label">{{ link.label }}</span>
            <span class="about-elsewhere__link-copy">{{ link.copy }}</span>
            <span class="about-elsewhere__link-arrow" aria-hidden="true">↗</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>

    <CTASection />
  </q-page>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import ProcessTimeline from '@/components/home/ProcessTimeline.vue';
import CTASection from '@/components/home/CTASection.vue';
import { SITE } from '@/data/site';
import {
  breadcrumbJsonLd,
  personJsonLd,
  professionalServiceJsonLd,
  useSeo,
} from '@/composables/useSeo';

const principles = [
  {
    number: '01',
    title: 'The business comes first',
    copy: 'We start with how you make money, serve customers, and run the day. The website follows the business — not the other way around.',
  },
  {
    number: '02',
    title: 'Design is a decision',
    copy: 'Every layout, label, and interaction should help someone decide or act. If it is only decoration, it has to earn its place.',
  },
  {
    number: '03',
    title: 'Build it to be maintained',
    copy: 'Clean components, readable code, and a content model you can live with. A website should not become a mystery after launch.',
  },
  {
    number: '04',
    title: 'You own the thing',
    copy: 'Your domain, your content, your accounts, your code. You should be able to leave with everything — and know how it works.',
  },
];

const elsewhere = [
  {
    label: 'SiteMedic',
    copy: 'Fixes, maintenance, and care after launch.',
    href: SITE.sitemedicUrl,
  },
  {
    label: 'Portfolio',
    copy: 'A wider record of design and development work.',
    href: SITE.portfolioUrl,
  },
  {
    label: 'LinkedIn',
    copy: 'Professional history and a direct line.',
    href: SITE.linkedinUrl,
  },
];

useSeo({
  title: 'About — Studio Ziegfrid',
  description:
    'Studio Ziegfrid is the independent design and build practice of Ziegfrid Gualberto, making bespoke websites for businesses that do not fit a template.',
  path: '/about',
  jsonLd: [
    professionalServiceJsonLd(),
    personJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  ],
});
</script>

<style scoped>
.about-hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--sz-line);
}

.about-hero__measure {
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

.about-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.about-hero__title {
  max-width: 12ch;
}

.about-hero__lead {
  margin-top: 1.5rem;
}

.about-hero__body {
  max-width: 54ch;
  margin: 1rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  line-height: 1.65;
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.about-record {
  position: relative;
  overflow: hidden;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid var(--sz-dark);
  background: var(--sz-dark);
  color: var(--sz-cream);
  box-shadow: 0 35px 80px -55px rgba(22, 21, 19, 0.7);
}

.about-record__top {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.48);
  font-family: var(--sz-font-mono);
  font-size: 0.56rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-record__mark {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(16rem, 35vw, 24rem);
}

.about-record__letter {
  position: relative;
  z-index: 1;
  color: #ff8a6e;
  font-family: var(--sz-font-display);
  font-size: clamp(13rem, 28vw, 24rem);
  font-weight: 500;
  letter-spacing: -0.09em;
  line-height: 0.7;
}

.about-record__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(247, 242, 232, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.about-record__ring--one {
  width: 58%;
  aspect-ratio: 1;
}

.about-record__ring--two {
  width: 86%;
  aspect-ratio: 1;
  border-color: rgba(247, 242, 232, 0.1);
}

.about-record__rule {
  position: absolute;
  inset: 18% 0 auto;
  height: 8px;
  opacity: 0.25;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(247, 242, 232, 0.6) 0,
    rgba(247, 242, 232, 0.6) 1px,
    transparent 1px,
    transparent 28px
  );
}

.about-record__label {
  position: absolute;
  right: 0;
  bottom: 0;
  color: rgba(247, 242, 232, 0.44);
  font-family: var(--sz-font-mono);
  font-size: 0.54rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}

.about-record__facts {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
  border-left: 1px solid rgba(247, 242, 232, 0.16);
}

.about-record__facts div {
  padding: 0.7rem 0.8rem;
  border-right: 1px solid rgba(247, 242, 232, 0.16);
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
}

.about-record__facts dt {
  color: rgba(247, 242, 232, 0.4);
  font-size: 0.54rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-record__facts dd {
  margin: 0.25rem 0 0;
  color: rgba(247, 242, 232, 0.82);
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1.35;
}

.about-record__quote {
  position: relative;
  z-index: 2;
  margin: 1.2rem 0 0;
  color: rgba(247, 242, 232, 0.6);
  font-family: var(--sz-font-display);
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  font-style: italic;
  line-height: 1.3;
}

.about-story__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.about-story__aside {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
}

.about-story__kicker {
  margin: 0;
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-display);
  font-size: clamp(1.8rem, 3.6vw, 3.2rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.about-story__body {
  max-width: 36ch;
  margin: 1rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.86rem;
  line-height: 1.6;
}

.about-story__signature {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--sz-line);
}

.about-story__signature span {
  font-family: var(--sz-font-display);
  font-size: 1.3rem;
  font-style: italic;
}

.about-story__signature small {
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-story__title {
  max-width: 11ch;
}

.about-story__main .sz-lead {
  margin-top: 1.5rem;
}

.about-story__copy {
  max-width: 62ch;
  margin: 1rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  line-height: 1.65;
}

.about-story__quote {
  max-width: 30ch;
  margin: clamp(2rem, 4vw, 3rem) 0;
  padding-left: 1.25rem;
  border-left: 2px solid var(--sz-accent);
  color: var(--sz-ink);
  font-family: var(--sz-font-display);
  font-size: clamp(1.4rem, 2.6vw, 2.1rem);
  font-style: italic;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.about-story__facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--sz-line);
}

.about-story__facts div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.about-story__facts span {
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-story__facts strong {
  font-size: 0.76rem;
  font-weight: 550;
  line-height: 1.35;
}

.about-principles__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.about-principles__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(247, 242, 232, 0.16);
}

.about-principle {
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  padding: 1.35rem 1.25rem 1.5rem;
  border-right: 1px solid rgba(247, 242, 232, 0.16);
}

.about-principle:first-child {
  padding-left: 0;
}

.about-principle:last-child {
  border-right: 0;
}

.about-principle__number {
  color: #ff8a6e;
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
}

.about-principle__title {
  margin: 2.2rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.05;
}

.about-principle__copy {
  margin: 0.65rem 0 0;
  color: rgba(247, 242, 232, 0.6);
  font-size: 0.8rem;
  line-height: 1.55;
}

.about-elsewhere {
  border-top: 1px solid var(--sz-line);
}

.about-elsewhere__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.about-elsewhere__title {
  max-width: 11ch;
}

.about-elsewhere__lead {
  margin-top: 1.5rem;
}

.about-elsewhere__note {
  max-width: 42ch;
  margin: 1rem 0 0;
  color: var(--sz-ink-faint);
  font-size: 0.74rem;
  line-height: 1.55;
}

.about-elsewhere__links {
  border-top: 1px solid var(--sz-line-strong);
}

.about-elsewhere__link {
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
  padding-block: 1.1rem;
  border-bottom: 1px solid var(--sz-line);
  transition:
    color var(--sz-dur-fast) var(--sz-ease),
    background var(--sz-dur-fast) var(--sz-ease);
}

.about-elsewhere__link:hover {
  background: rgba(247, 242, 232, 0.55);
  color: var(--sz-accent-strong);
}

.about-elsewhere__link-label {
  font-family: var(--sz-font-display);
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  font-weight: 500;
  letter-spacing: -0.02em;
}

.about-elsewhere__link-copy {
  color: var(--sz-ink-soft);
  font-size: 0.78rem;
  line-height: 1.5;
}

.about-elsewhere__link-arrow {
  color: var(--sz-accent-strong);
  font-size: 1rem;
}

@media (max-width: 1023px) {
  .about-hero__grid,
  .about-story__grid,
  .about-principles__head,
  .about-elsewhere__grid {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .about-story__aside {
    position: static;
  }

  .about-principles__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-principle:nth-child(2) {
    border-right: 0;
  }

  .about-principle:nth-child(3),
  .about-principle:nth-child(4) {
    border-top: 1px solid rgba(247, 242, 232, 0.16);
  }

  .about-principle:nth-child(3) {
    padding-left: 0;
  }

  .about-record {
    max-width: 38rem;
  }

  .about-elsewhere__links {
    max-width: 48rem;
  }
}

@media (max-width: 767px) {
  .about-hero__measure {
    display: none;
  }

  .about-record__facts,
  .about-story__facts {
    grid-template-columns: minmax(0, 1fr);
  }

  .about-principles__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .about-principle {
    min-height: 0;
    padding-inline: 0;
    border-right: 0;
    border-top: 1px solid rgba(247, 242, 232, 0.16);
  }

  .about-principle:first-child {
    border-top: 0;
  }

  .about-principle__title {
    margin-top: 1.2rem;
  }

  .about-elsewhere__link {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .about-elsewhere__link-copy {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}
</style>
