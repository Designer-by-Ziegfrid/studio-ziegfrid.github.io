<template>
  <section class="sz-section sz-section--warm standards">
    <div class="sz-container">
      <RevealOnScroll class="standards__head">
        <div>
          <SectionLabel number="05" label="Standards" />
          <h2 class="sz-h2 standards__title">
            The things we<br />
            <em class="sz-italic">won't compromise.</em>
          </h2>
        </div>
        <p class="sz-lead standards__lead">
          These are not premium add-ons. They are the baseline for every project, whether it is four
          pages or forty.
        </p>
      </RevealOnScroll>

      <div class="standards__grid">
        <RevealOnScroll
          v-for="(standard, index) in standards"
          :key="standard.title"
          as="article"
          class="standard"
          :delay="index * 70"
        >
          <div class="standard__top">
            <span class="standard__label">{{ standard.label }}</span>
            <q-icon :name="standard.icon" size="18px" class="standard__icon" aria-hidden="true" />
          </div>
          <h3 class="standard__title">{{ standard.title }}</h3>
          <p class="standard__copy">{{ standard.description }}</p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll class="standards__foot">
        <span class="standards__foot-mark" aria-hidden="true">✳</span>
        If a project cannot meet this baseline, we will tell you before we start.
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { standards } from '@/data/standards';
</script>

<style scoped>
.standards__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.standards__title {
  max-width: 12ch;
}

.standards__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--sz-line-strong);
}

.standard {
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  padding: 1.4rem 1.25rem 1.6rem;
  border-right: 1px solid var(--sz-line);
}

.standard:first-child {
  padding-left: 0;
}

.standard:last-child {
  border-right: 0;
}

.standard__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.standard__label {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-display);
  font-size: clamp(2rem, 3.4vw, 3.2rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.standard__icon {
  color: var(--sz-ink-faint);
}

.standard__title {
  margin: 2rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.2rem, 1.7vw, 1.5rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.08;
}

.standard__copy {
  margin: 0.65rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.8rem;
  line-height: 1.55;
}

.standards__foot {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 1.6rem;
  color: var(--sz-ink-faint);
  font-size: 0.72rem;
}

.standards__foot-mark {
  color: var(--sz-accent-strong);
}

@media (max-width: 1023px) {
  .standards__head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .standards__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .standard:nth-child(2) {
    border-right: 0;
  }

  .standard:nth-child(3),
  .standard:nth-child(4) {
    border-top: 1px solid var(--sz-line);
  }

  .standard:nth-child(3) {
    padding-left: 0;
  }
}

@media (max-width: 600px) {
  .standards__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .standard {
    min-height: 0;
    padding-inline: 0;
    border-right: 0;
    border-top: 1px solid var(--sz-line);
  }

  .standard:first-child {
    border-top: 0;
  }

  .standard__title {
    margin-top: 1.2rem;
  }
}
</style>
