<template>
  <section id="process" class="sz-section process">
    <div class="sz-container process__grid">
      <div class="process__aside">
        <RevealOnScroll>
          <SectionLabel number="04" label="The process" />
          <h2 class="sz-h2 process__title">
            The process,<br />
            <em class="sz-italic">without the mystery.</em>
          </h2>
          <p class="sz-lead process__lead">
            Five clear steps. You always know what we are doing, why it matters, and what happens
            next.
          </p>
          <AppButton to="/contact" label="Talk through your project" variant="ghost" arrow />
        </RevealOnScroll>

        <RevealOnScroll class="process__aside-note" :delay="120">
          <span class="process__aside-mark" aria-hidden="true">✳</span>
          <p>
            Most focused sites take 3–6 weeks. Larger builds with booking or e-commerce run longer —
            and we will tell you that upfront.
          </p>
        </RevealOnScroll>
      </div>

      <div class="process__steps">
        <RevealOnScroll
          v-for="(step, index) in processSteps"
          :key="step.number"
          as="article"
          class="process__step"
          :delay="index * 60"
        >
          <div class="process__step-head">
            <span class="process__number">{{ step.number }}</span>
            <h3 class="process__step-title">{{ step.title }}</h3>
            <span class="process__subtitle">{{ step.subtitle }}</span>
          </div>
          <p class="process__step-copy">{{ step.description }}</p>
          <div class="process__deliverables">
            <span v-for="item in step.deliverables" :key="item">{{ item }}</span>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { processSteps } from '@/data/process';
</script>

<style scoped>
.process {
  scroll-margin-top: var(--sz-header-height);
}

.process__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.process__aside {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
}

.process__title {
  max-width: 11ch;
}

.process__lead {
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
}

.process__aside-note {
  display: flex;
  gap: 0.75rem;
  max-width: 34ch;
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding-top: 1rem;
  border-top: 1px solid var(--sz-line);
}

.process__aside-mark {
  color: var(--sz-accent-strong);
  font-size: 0.9rem;
}

.process__aside-note p {
  margin: 0;
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
  line-height: 1.55;
}

.process__steps {
  border-top: 1px solid var(--sz-line-strong);
}

.process__step {
  padding-block: clamp(1.5rem, 3.2vw, 2.5rem);
  border-bottom: 1px solid var(--sz-line);
  transition: background var(--sz-dur-base) var(--sz-ease);
}

.process__step:hover {
  background: rgba(247, 242, 232, 0.55);
}

.process__step-head {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
}

.process__number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.process__step-title {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.process__subtitle {
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.process__step-copy {
  max-width: 62ch;
  margin: 0.75rem 0 0 4rem;
  color: var(--sz-ink-soft);
  font-size: 0.88rem;
  line-height: 1.6;
}

.process__deliverables {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0 0 4rem;
}

.process__deliverables span {
  padding: 0.3rem 0.55rem;
  border: 1px solid var(--sz-line);
  border-radius: var(--sz-radius-pill);
  color: var(--sz-ink-soft);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  .process__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .process__aside {
    position: static;
  }

  .process__aside-note {
    max-width: 48rem;
  }
}

@media (max-width: 600px) {
  .process__step-head {
    grid-template-columns: 2.2rem minmax(0, 1fr);
  }

  .process__subtitle {
    display: none;
  }

  .process__step-copy,
  .process__deliverables {
    margin-left: 3.2rem;
  }
}
</style>
