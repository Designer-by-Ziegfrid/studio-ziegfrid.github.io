<template>
  <router-link
    :to="`/work/${concept.slug}`"
    class="concept-card"
    :aria-label="`View ${concept.name} concept`"
  >
    <div class="concept-card__frame">
      <BrowserFrame :label="`${concept.slug}.studio-ziegfrid.github.io`">
        <ConceptPreview :concept="concept" />
      </BrowserFrame>
      <span class="concept-card__view">View concept <span aria-hidden="true">↗</span></span>
    </div>

    <div class="concept-card__meta">
      <span class="concept-card__index">{{ concept.index }}</span>
      <div class="concept-card__copy">
        <div class="concept-card__title-row">
          <h3 class="concept-card__name">{{ concept.name }}</h3>
          <span class="concept-card__category">{{ concept.category }}</span>
        </div>
        <p class="concept-card__tagline">{{ concept.tagline }}</p>
      </div>
      <span class="concept-card__arrow" aria-hidden="true">↗</span>
    </div>

    <div class="concept-card__swatches" aria-hidden="true">
      <span
        v-for="(color, key) in concept.palette"
        :key="key"
        class="concept-card__swatch"
        :style="{ background: color }"
      ></span>
      <span class="concept-card__swatch-label"
        >{{ concept.designNotes.direction.split('.')[0] }}.</span
      >
    </div>
  </router-link>
</template>

<script setup lang="ts">
import BrowserFrame from '@/components/ui/BrowserFrame.vue';
import ConceptPreview from '@/components/concepts/ConceptPreview.vue';
import type { Concept } from '@/data/concepts';

defineProps<{ concept: Concept }>();
</script>

<style scoped>
.concept-card {
  display: block;
  min-width: 0;
}

.concept-card__frame {
  position: relative;
  transition: transform var(--sz-dur-base) var(--sz-ease);
}

.concept-card:hover .concept-card__frame {
  transform: translateY(-5px);
}

.concept-card__frame :deep(.browser-frame) {
  transition: box-shadow var(--sz-dur-base) var(--sz-ease);
}

.concept-card:hover .concept-card__frame :deep(.browser-frame) {
  box-shadow: 0 30px 70px -42px rgba(22, 21, 19, 0.55);
}

.concept-card__view {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border-radius: var(--sz-radius-pill);
  background: var(--sz-ink);
  color: var(--sz-cream);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  opacity: 0;
  text-transform: uppercase;
  transform: translateY(4px);
  transition:
    opacity var(--sz-dur-base) var(--sz-ease),
    transform var(--sz-dur-base) var(--sz-ease);
}

.concept-card:hover .concept-card__view,
.concept-card:focus-visible .concept-card__view {
  opacity: 1;
  transform: none;
}

.concept-card__meta {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 1.1rem;
}

.concept-card__index {
  padding-top: 0.15rem;
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.concept-card__copy {
  flex: 1;
  min-width: 0;
}

.concept-card__title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 0.9rem;
}

.concept-card__name {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.65rem, 2.5vw, 2.3rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.concept-card__category {
  color: var(--sz-ink-faint);
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.concept-card__tagline {
  margin: 0.35rem 0 0;
  color: var(--sz-ink-soft);
  font-family: var(--sz-font-display);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.3;
}

.concept-card__arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--sz-line);
  border-radius: 50%;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease),
    transform var(--sz-dur-fast) var(--sz-ease);
}

.concept-card:hover .concept-card__arrow {
  background: var(--sz-ink);
  color: var(--sz-cream);
  transform: rotate(45deg);
}

.concept-card__swatches {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.9rem;
  padding-left: 2rem;
}

.concept-card__swatch {
  width: 16px;
  height: 16px;
  border: 1px solid rgba(22, 21, 19, 0.08);
  border-radius: 50%;
}

.concept-card__swatch-label {
  overflow: hidden;
  margin-left: 0.5rem;
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (hover: none) {
  .concept-card__view {
    display: none;
  }
}

@media (max-width: 767px) {
  .concept-card__swatch-label {
    display: none;
  }
}
</style>
