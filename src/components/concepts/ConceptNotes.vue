<template>
  <section class="concept-notes">
    <div class="concept-notes__inner">
      <div class="concept-notes__head">
        <div>
          <p class="concept-notes__eyebrow">Studio notes · {{ concept.index }} / 04</p>
          <h2 class="concept-notes__title">
            What this concept<br />
            <em>is doing.</em>
          </h2>
        </div>
        <p class="concept-notes__intro">{{ concept.metaDescription }}</p>
      </div>

      <div class="concept-notes__grid">
        <div class="concept-notes__block">
          <h3>Brief</h3>
          <p>{{ concept.designNotes.brief }}</p>
        </div>
        <div class="concept-notes__block">
          <h3>Direction</h3>
          <p>{{ concept.designNotes.direction }}</p>
        </div>
        <div class="concept-notes__block">
          <h3>Details that matter</h3>
          <ul>
            <li v-for="detail in concept.designNotes.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
        <div class="concept-notes__block">
          <h3>Build notes</h3>
          <ul>
            <li v-for="item in concept.designNotes.build" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="concept-notes__foot">
        <router-link to="/work" class="concept-notes__link">← All concepts</router-link>
        <router-link :to="`/work/${next.slug}`" class="concept-notes__next">
          <span>Next concept</span>
          <strong>{{ next.name }} →</strong>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { nextConcept, type Concept } from '@/data/concepts';

const props = defineProps<{ concept: Concept }>();
const next = computed(() => nextConcept(props.concept.slug));
</script>

<style scoped>
.concept-notes {
  padding-block: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid var(--sz-line);
  background: var(--sz-paper);
  color: var(--sz-ink);
}

.concept-notes__inner {
  width: min(100% - (var(--sz-gutter) * 2), var(--sz-container));
  margin-inline: auto;
}

.concept-notes__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.concept-notes__eyebrow {
  margin: 0 0 1rem;
  color: var(--sz-ink-faint);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.concept-notes__title {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.98;
}

.concept-notes__title em {
  color: var(--sz-accent-strong);
  font-weight: 400;
}

.concept-notes__intro {
  max-width: 56ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.95rem;
  line-height: 1.65;
}

.concept-notes__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--sz-line-strong);
}

.concept-notes__block {
  padding: 1.5rem 2rem 1.75rem 0;
  border-bottom: 1px solid var(--sz-line);
}

.concept-notes__block:nth-child(odd) {
  padding-right: 3rem;
  border-right: 1px solid var(--sz-line);
}

.concept-notes__block:nth-child(even) {
  padding-left: 3rem;
}

.concept-notes__block h3 {
  margin: 0 0 0.7rem;
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.concept-notes__block p,
.concept-notes__block li {
  max-width: 64ch;
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.85rem;
  line-height: 1.6;
}

.concept-notes__block ul {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.concept-notes__block li {
  position: relative;
  padding-left: 1rem;
}

.concept-notes__block li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--sz-accent-strong);
}

.concept-notes__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 2rem;
}

.concept-notes__link {
  color: var(--sz-ink-soft);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.concept-notes__next {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-end;
  text-align: right;
}

.concept-notes__next span {
  color: var(--sz-ink-faint);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.concept-notes__next strong {
  font-family: var(--sz-font-display);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

@media (max-width: 900px) {
  .concept-notes__head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }
}

@media (max-width: 700px) {
  .concept-notes__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .concept-notes__block:nth-child(odd) {
    padding-right: 0;
    border-right: 0;
  }

  .concept-notes__block:nth-child(even) {
    padding-left: 0;
  }
}
</style>
