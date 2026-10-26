<template>
  <section id="faq" class="sz-section faq">
    <div class="sz-container faq__grid">
      <div class="faq__aside">
        <RevealOnScroll>
          <SectionLabel number="06" label="FAQ" />
          <h2 class="sz-h2 faq__title">
            Questions,<br />
            <em class="sz-italic">answered.</em>
          </h2>
          <p class="sz-lead faq__lead">
            The things business owners usually ask before we start. If yours is not here, ask us
            directly.
          </p>
          <AppButton to="/contact" label="Ask us directly" variant="ghost" arrow />
        </RevealOnScroll>
      </div>

      <RevealOnScroll class="faq__list" :delay="80">
        <q-expansion-item
          v-for="(faq, index) in faqs"
          :key="faq.question"
          :label="faq.question"
          :default-opened="index === 0"
          expand-icon="add"
          expanded-icon="remove"
          class="faq__item"
        >
          <div class="faq__answer">{{ faq.answer }}</div>
        </q-expansion-item>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { faqs } from '@/data/faqs';
</script>

<style scoped>
.faq__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.faq__aside {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
}

.faq__title {
  max-width: 10ch;
}

.faq__lead {
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
}

.faq__list {
  border-top: 1px solid var(--sz-line-strong);
}

.faq__item {
  transition: background var(--sz-dur-base) var(--sz-ease);
}

.faq__item:hover {
  background: rgba(247, 242, 232, 0.55);
}

.faq__answer {
  max-width: 66ch;
  padding: 0 2rem 1.35rem 0;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  line-height: 1.65;
}

.faq__item :deep(.q-item__label) {
  line-height: 1.3;
}

.faq__item :deep(.q-item__section--side) {
  color: var(--sz-ink-faint);
}

.faq__item :deep(.q-expansion-item__content) {
  padding: 0;
}

@media (max-width: 1023px) {
  .faq__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .faq__aside {
    position: static;
  }
}

@media (max-width: 600px) {
  .faq__answer {
    padding-right: 0;
  }
}
</style>
