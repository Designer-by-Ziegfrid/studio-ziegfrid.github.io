<template>
  <q-page class="work-index">
    <section class="sz-section work-hero">
      <div class="sz-container work-hero__grid">
        <RevealOnScroll>
          <SectionLabel label="Concept work" number="01" />
          <h1 class="sz-h1 work-hero__title">
            Four businesses.<br />
            <em class="sz-italic">Four complete worlds.</em>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll class="work-hero__intro" :delay="100">
          <p class="sz-lead">
            Self-directed concept studies for the kinds of businesses we love working with. Each one
            has its own voice, its own interface, and its own reasons for being.
          </p>
          <div class="work-hero__tags">
            <span class="sz-tag">Self-directed</span>
            <span class="sz-tag">Fictional brands</span>
            <span class="sz-tag">Real design &amp; code</span>
          </div>
          <p class="work-hero__note">
            No fake client claims. No invented metrics. These are design exercises, not case studies
            with borrowed logos.
          </p>
        </RevealOnScroll>
      </div>
    </section>

    <section class="sz-section sz-section--paper-deep work-list">
      <div class="sz-container">
        <div class="work-list__desktop">
          <div class="work-list__items" @mouseleave="active = 0">
            <router-link
              v-for="(concept, index) in concepts"
              :key="concept.slug"
              :to="`/work/${concept.slug}`"
              class="work-item"
              :class="{ 'is-active': active === index }"
              @mouseenter="active = index"
              @focus="active = index"
            >
              <span class="work-item__index">{{ concept.index }}</span>
              <span class="work-item__name">{{ concept.name }}</span>
              <span class="work-item__category">{{ concept.category }}</span>
              <span class="work-item__arrow" aria-hidden="true">↗</span>
            </router-link>
          </div>

          <div class="work-list__preview">
            <BrowserFrame :label="`${activeConcept.slug}.studio-ziegfrid.github.io`">
              <ConceptPreview :concept="activeConcept" />
            </BrowserFrame>

            <div class="work-list__meta">
              <div>
                <span class="work-list__meta-label">Current concept</span>
                <p class="work-list__meta-name">{{ activeConcept.name }}</p>
                <p class="work-list__meta-tagline">{{ activeConcept.tagline }}</p>
              </div>
              <div class="work-list__swatches" aria-hidden="true">
                <span
                  v-for="(color, key) in activeConcept.palette"
                  :key="key"
                  :style="{ background: color }"
                ></span>
              </div>
            </div>

            <div class="work-list__preview-foot">
              <p>{{ activeConcept.designNotes.direction }}</p>
              <router-link :to="`/work/${activeConcept.slug}`" class="sz-link-arrow">
                Open concept
                <span class="sz-btn__arrow" aria-hidden="true">→</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="work-list__mobile">
          <RevealOnScroll
            v-for="(concept, index) in concepts"
            :key="concept.slug"
            class="work-list__mobile-item"
            :delay="index * 70"
          >
            <ConceptCard :concept="concept" />
          </RevealOnScroll>
        </div>

        <RevealOnScroll class="work-list__foot">
          <p>
            <span aria-hidden="true">✳</span>
            Every concept is a real front-end build. The businesses are fictional; the design
            decisions are not.
          </p>
          <AppButton to="/contact" label="Start your own project" variant="text" arrow />
        </RevealOnScroll>
      </div>
    </section>

    <CTASection />
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import BrowserFrame from '@/components/ui/BrowserFrame.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import CTASection from '@/components/home/CTASection.vue';
import ConceptCard from '@/components/concepts/ConceptCard.vue';
import ConceptPreview from '@/components/concepts/ConceptPreview.vue';
import { concepts, type Concept } from '@/data/concepts';
import { breadcrumbJsonLd, useSeo } from '@/composables/useSeo';

const active = ref(0);
const activeConcept = computed<Concept>(() => concepts[active.value] ?? concepts[0]!);

useSeo({
  title: 'Concept Work — Studio Ziegfrid',
  description:
    'Four self-directed website concepts for a boutique resort, a car rental, a laundry service, and a neighborhood grocery. Fictional brands, real design and code.',
  path: '/work',
  jsonLd: [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
    ]),
  ],
});
</script>

<style scoped>
.work-hero {
  padding-top: clamp(3.5rem, 7vw, 6rem);
  border-bottom: 1px solid var(--sz-line);
}

.work-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(2rem, 7vw, 7rem);
  align-items: end;
}

.work-hero__title {
  max-width: 13ch;
}

.work-hero__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  padding-bottom: 0.35rem;
}

.work-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.work-hero__note {
  max-width: 46ch;
  margin: 0;
  color: var(--sz-ink-faint);
  font-size: 0.72rem;
  line-height: 1.55;
}

.work-list__desktop {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.work-list__items {
  border-top: 1px solid var(--sz-line-strong);
}

.work-item {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr) auto auto;
  gap: 1rem;
  align-items: baseline;
  padding-block: clamp(1.2rem, 2.5vw, 1.8rem);
  border-bottom: 1px solid var(--sz-line);
  transition:
    color var(--sz-dur-fast) var(--sz-ease),
    background var(--sz-dur-fast) var(--sz-ease);
}

.work-item:hover,
.work-item.is-active {
  background: rgba(247, 242, 232, 0.65);
  color: var(--sz-accent-strong);
}

.work-item__index {
  color: var(--sz-ink-faint);
  font-family: var(--sz-font-mono);
  font-size: 0.64rem;
}

.work-item__name {
  font-family: var(--sz-font-display);
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.work-item__category {
  color: var(--sz-ink-faint);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.11em;
  text-align: right;
  text-transform: uppercase;
}

.work-item__arrow {
  font-size: 0.9rem;
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.work-item:hover .work-item__arrow,
.work-item.is-active .work-item__arrow {
  transform: translate(2px, -2px);
}

.work-list__preview {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
}

.work-list__meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1.1rem;
}

.work-list__meta-label {
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.work-list__meta-name {
  margin: 0.2rem 0 0;
  font-family: var(--sz-font-display);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1;
}

.work-list__meta-tagline {
  margin: 0.25rem 0 0;
  color: var(--sz-ink-soft);
  font-family: var(--sz-font-display);
  font-size: 0.9rem;
  font-style: italic;
}

.work-list__swatches {
  display: flex;
  gap: 0.35rem;
}

.work-list__swatches span {
  width: 18px;
  height: 18px;
  border: 1px solid rgba(22, 21, 19, 0.08);
  border-radius: 50%;
}

.work-list__preview-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--sz-line);
}

.work-list__preview-foot p {
  max-width: 52ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
  line-height: 1.55;
}

.work-list__preview-foot .sz-link-arrow {
  font-size: 0.64rem;
}

.work-list__mobile {
  display: none;
}

.work-list__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--sz-line);
}

.work-list__foot p {
  max-width: 68ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
}

.work-list__foot p span {
  margin-right: 0.35rem;
  color: var(--sz-accent-strong);
}

@media (max-width: 1023px) {
  .work-hero__grid {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .work-list__desktop {
    display: none;
  }

  .work-list__mobile {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem 2rem;
  }
}

@media (max-width: 767px) {
  .work-list__mobile {
    grid-template-columns: minmax(0, 1fr);
  }

  .work-item {
    grid-template-columns: 2rem minmax(0, 1fr) auto;
  }

  .work-item__category {
    display: none;
  }
}
</style>
