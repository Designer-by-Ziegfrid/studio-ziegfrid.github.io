<template>
  <section id="work" class="sz-section concept-grid">
    <div class="sz-container">
      <RevealOnScroll class="concept-grid__head">
        <div>
          <SectionLabel number="01" label="Concept work" />
          <h2 class="sz-h2 concept-grid__title">
            Four businesses.<br />
            <em class="sz-italic">Four different answers.</em>
          </h2>
        </div>

        <div class="concept-grid__intro">
          <p class="sz-lead">
            A resort should feel like a deep breath. A car rental should feel like an open road. A
            grocery should feel like a Saturday morning. The design has to change with the business.
          </p>
          <AppButton to="/work" label="Explore the full concepts" variant="text" arrow />
        </div>
      </RevealOnScroll>

      <div class="concept-grid__list">
        <RevealOnScroll
          v-for="(concept, index) in concepts"
          :key="concept.slug"
          as="div"
          class="concept-grid__item"
          :delay="index * 90"
        >
          <ConceptCard :concept="concept" />
        </RevealOnScroll>
      </div>

      <RevealOnScroll class="concept-grid__foot">
        <p>
          <span class="concept-grid__foot-mark" aria-hidden="true">✳</span>
          These are self-directed concept studies, not client claims. The brands are fictional; the
          design and code are real.
        </p>
        <router-link to="/about" class="sz-link-arrow">
          Why concepts?
          <span class="sz-btn__arrow" aria-hidden="true">→</span>
        </router-link>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import ConceptCard from '@/components/concepts/ConceptCard.vue';
import { concepts } from '@/data/concepts';
</script>

<style scoped>
.concept-grid {
  scroll-margin-top: var(--sz-header-height);
}

.concept-grid__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.concept-grid__title {
  max-width: 13ch;
}

.concept-grid__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding-bottom: 0.25rem;
}

.concept-grid__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(3rem, 6vw, 5.5rem) clamp(2rem, 4vw, 4rem);
}

.concept-grid__item {
  min-width: 0;
}

.concept-grid__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--sz-line);
}

.concept-grid__foot p {
  max-width: 70ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.8rem;
  line-height: 1.55;
}

.concept-grid__foot-mark {
  margin-right: 0.4rem;
  color: var(--sz-accent-strong);
}

@media (min-width: 1024px) {
  .concept-grid__item:nth-child(even) {
    padding-top: 3.5rem;
  }
}

@media (max-width: 1023px) {
  .concept-grid__head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .concept-grid__intro {
    max-width: 48rem;
  }
}

@media (max-width: 767px) {
  .concept-grid__list {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
