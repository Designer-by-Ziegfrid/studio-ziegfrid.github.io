<template>
  <section id="the-fit" class="sz-section sz-section--paper-deep comparison">
    <div class="sz-container">
      <RevealOnScroll class="comparison__head">
        <div>
          <SectionLabel number="02" label="The difference" />
          <h2 class="sz-h2 comparison__title">
            Templates give you a starting point.<br />
            <em class="sz-italic">We start from your business.</em>
          </h2>
        </div>
        <p class="sz-lead">
          Wix and Squarespace are useful tools. They become a ceiling when your business needs a
          custom booking flow, a specific content model, or an interface that does not look like
          everyone else's.
        </p>
      </RevealOnScroll>

      <div class="comparison__panel">
        <RevealOnScroll as="article" class="comparison__card comparison__card--template">
          <div class="comparison__card-top">
            <span class="comparison__kicker">Template builder</span>
            <span class="comparison__badge comparison__badge--muted">A ceiling</span>
          </div>
          <h3 class="comparison__card-title">Off the rack</h3>
          <p class="comparison__card-copy">
            Pick a theme, drag some blocks, and hope the business fits the layout.
          </p>
          <ul class="comparison__list">
            <li v-for="row in templateRows" :key="row">
              <span class="comparison__icon comparison__icon--x" aria-hidden="true">×</span>
              {{ row }}
            </li>
          </ul>
          <div class="comparison__ceiling" aria-hidden="true">
            <span>template ceiling</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="article" class="comparison__card comparison__card--custom" :delay="120">
          <span class="comparison__orb" aria-hidden="true"></span>
          <div class="comparison__card-top">
            <span class="comparison__kicker">Studio Ziegfrid</span>
            <span class="comparison__badge">Made to measure</span>
          </div>
          <h3 class="comparison__card-title">Cut for you</h3>
          <p class="comparison__card-copy">
            Start with the customer journey, design the right interface, then build the features
            that earn their place.
          </p>
          <ul class="comparison__list">
            <li v-for="row in customRows" :key="row">
              <span class="comparison__icon comparison__icon--check" aria-hidden="true">✓</span>
              {{ row }}
            </li>
          </ul>
          <div class="comparison__custom-foot">
            <span>You own the design, code, content, and domain.</span>
            <router-link to="/services" class="sz-link-arrow">
              How we work
              <span class="sz-btn__arrow" aria-hidden="true">→</span>
            </router-link>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll class="comparison__note">
        <span class="comparison__note-mark" aria-hidden="true">✳</span>
        No hate for page builders. They are simply not built for every business — and we are.
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';

const templateRows = [
  'Choose a theme that is almost right',
  'Fight the layout to fit your content',
  'Pay monthly for plugins and add-ons',
  'Look like the business next door',
  'Rent your website, forever',
];

const customRows = [
  'Start with your customers and operations',
  'Design around the way you actually work',
  'Build only the features that earn their place',
  'Connect the tools you already use',
  'Own the design, code, and content',
];
</script>

<style scoped>
.comparison {
  scroll-margin-top: var(--sz-header-height);
}

.comparison__head {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.75fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.comparison__title {
  max-width: 15ch;
}

.comparison__panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  align-items: stretch;
}

.comparison__card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--sz-line);
}

.comparison__card--template {
  background: rgba(247, 242, 232, 0.45);
  border-style: dashed;
  border-color: var(--sz-line-strong);
}

.comparison__card--custom {
  border-color: var(--sz-dark);
  background: var(--sz-dark);
  color: var(--sz-cream);
}

.comparison__card-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.comparison__kicker {
  color: var(--sz-ink-soft);
  font-size: 0.64rem;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.comparison__card--custom .comparison__kicker {
  color: rgba(247, 242, 232, 0.56);
}

.comparison__badge {
  display: inline-flex;
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(247, 242, 232, 0.28);
  border-radius: var(--sz-radius-pill);
  color: #ffb7a3;
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.comparison__badge--muted {
  border-color: var(--sz-line);
  color: var(--sz-ink-faint);
}

.comparison__card-title {
  margin: 1.8rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2rem, 3.6vw, 3.4rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.98;
}

.comparison__card-copy {
  max-width: 38ch;
  margin: 0.9rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  line-height: 1.55;
}

.comparison__card--custom .comparison__card-copy {
  color: rgba(247, 242, 232, 0.64);
}

.comparison__list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 1.8rem 0 0;
  padding: 0;
  border-top: 1px solid var(--sz-line);
  list-style: none;
}

.comparison__card--custom .comparison__list {
  border-color: rgba(247, 242, 232, 0.16);
}

.comparison__list li {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--sz-line);
  color: var(--sz-ink-soft);
  font-size: 0.84rem;
  line-height: 1.4;
}

.comparison__card--custom .comparison__list li {
  border-color: rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.8);
}

.comparison__icon {
  flex: 0 0 auto;
  font-family: var(--sz-font-mono);
  font-size: 0.78rem;
  line-height: 1;
}

.comparison__icon--x {
  color: #b8b1a4;
}

.comparison__icon--check {
  color: #ff8a6e;
}

.comparison__ceiling {
  position: relative;
  height: 2.1rem;
  margin-top: auto;
  padding-top: 1.2rem;
  border-top: 1px dashed var(--sz-line-strong);
  color: var(--sz-ink-faint);
  font-family: var(--sz-font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.comparison__ceiling::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  width: 42%;
  height: 3px;
  background: var(--sz-ink-soft);
  opacity: 0.3;
}

.comparison__orb {
  position: absolute;
  right: -4rem;
  bottom: -4rem;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background: var(--sz-accent);
  opacity: 0.16;
  filter: blur(2px);
}

.comparison__custom-foot {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.3rem;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.56);
  font-size: 0.7rem;
}

.comparison__custom-foot .sz-link-arrow {
  color: var(--sz-cream);
  font-size: 0.64rem;
}

.comparison__note {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 1.4rem;
  color: var(--sz-ink-soft);
  font-size: 0.74rem;
}

.comparison__note-mark {
  color: var(--sz-accent-strong);
}

@media (max-width: 1023px) {
  .comparison__head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }
}

@media (max-width: 767px) {
  .comparison__panel {
    grid-template-columns: minmax(0, 1fr);
  }

  .comparison__card-title {
    margin-top: 1.4rem;
  }
}
</style>
