<template>
  <section class="sz-section sz-section--dark budget">
    <div class="sz-container">
      <div class="budget__grid">
        <RevealOnScroll class="budget__intro">
          <SectionLabel number="03" label="Right-sized" light />
          <h2 class="sz-h2 budget__title">
            The right size,<br />
            <em class="sz-italic">not the biggest.</em>
          </h2>
          <p class="sz-lead budget__lead">
            A website should be an investment, not an obligation. We scope around the outcome you
            need now, then plan the rest for when it makes sense.
          </p>

          <div class="budget__scale" aria-hidden="true">
            <div class="budget__scale-track">
              <span class="budget__scale-marker"></span>
            </div>
            <div class="budget__scale-labels">
              <span>Starter</span>
              <span class="is-active">Right-sized</span>
              <span>Overbuilt</span>
            </div>
          </div>
        </RevealOnScroll>

        <div class="budget__principles">
          <RevealOnScroll
            v-for="(principle, index) in scopingPrinciples"
            :key="principle.number"
            class="budget__principle"
            :delay="index * 80"
          >
            <span class="budget__number">{{ principle.number }}</span>
            <div>
              <h3 class="budget__principle-title">{{ principle.title }}</h3>
              <p class="budget__principle-copy">{{ principle.description }}</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <RevealOnScroll class="budget__foot">
        <p>
          <strong>Have a range in mind?</strong> Tell us. We will tell you what is possible — and
          what can wait until later.
        </p>
        <AppButton to="/contact" label="Talk about your budget" variant="light" arrow />
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { scopingPrinciples } from '@/data/services';
</script>

<style scoped>
.budget__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.budget__title {
  max-width: 12ch;
}

.budget__lead {
  margin-top: 1.5rem;
}

.budget__scale {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding-top: 0.5rem;
}

.budget__scale-track {
  position: relative;
  height: 1px;
  background: rgba(247, 242, 232, 0.22);
}

.budget__scale-track::before {
  content: '';
  position: absolute;
  inset: -0.45rem 0 auto;
  height: 0.9rem;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(247, 242, 232, 0.3) 0,
    rgba(247, 242, 232, 0.3) 1px,
    transparent 1px,
    transparent 8.333%
  );
}

.budget__scale-marker {
  position: absolute;
  top: 50%;
  left: 58%;
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ff8a6e;
  box-shadow: 0 0 0 6px rgba(255, 138, 110, 0.16);
  transform: translate(-50%, -50%);
}

.budget__scale-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.9rem;
  color: rgba(247, 242, 232, 0.42);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.budget__scale-labels .is-active {
  color: #ff8a6e;
}

.budget__principles {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
}

.budget__principle {
  display: grid;
  grid-template-columns: 2.4rem minmax(0, 1fr);
  gap: 1.2rem;
  padding-block: clamp(1.4rem, 2.8vw, 2.1rem);
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
}

.budget__number {
  color: #ff8a6e;
  font-family: var(--sz-font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.06em;
}

.budget__principle-title {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.05;
}

.budget__principle-copy {
  max-width: 44ch;
  margin: 0.55rem 0 0;
  color: rgba(247, 242, 232, 0.62);
  font-size: 0.86rem;
  line-height: 1.55;
}

.budget__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding-top: 1.4rem;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
}

.budget__foot p {
  max-width: 58ch;
  margin: 0;
  color: rgba(247, 242, 232, 0.64);
  font-size: 0.86rem;
}

.budget__foot strong {
  color: var(--sz-cream);
  font-weight: 600;
}

@media (max-width: 1023px) {
  .budget__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
}
</style>
