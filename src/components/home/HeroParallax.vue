<template>
  <section ref="parallaxRoot" class="hero">
    <q-parallax :height="900" :speed="0.32" class="hero__parallax">
      <template #media>
        <div class="hero__media" aria-hidden="true">
          <span class="hero__grid"></span>
          <span class="hero__glow"></span>
          <span class="hero__arc"></span>
          <span class="hero__type">MADE TO MEASURE</span>
          <span class="hero__measure hero__measure--top"></span>
          <span class="hero__measure hero__measure--bottom"></span>
        </div>
      </template>

      <template #content>
        <div class="hero__content sz-container">
          <div class="hero__copy">
            <p class="sz-eyebrow">Independent design &amp; build studio · PH / Worldwide</p>

            <h1 class="hero__title">
              Your business doesn't fit a template.<br />
              <em class="sz-italic">Neither should your website.</em>
            </h1>

            <p class="hero__lead">
              We design and code bespoke websites for resorts, rentals, shops, and services — around
              your brand, your customers, and the way you actually work.
            </p>

            <div class="hero__actions">
              <AppButton to="/contact" label="Start a project" arrow />
              <AppButton to="/work" label="See the concept work" variant="ghost" />
            </div>

            <div class="hero__status">
              <span class="sz-status-dot" aria-hidden="true"></span>
              <span>{{ SITE.availability }}</span>
              <span class="hero__status-rule" aria-hidden="true"></span>
              <span>No themes. No page-builder ceilings.</span>
            </div>
          </div>

          <div class="hero__cards sz-only-desktop" aria-hidden="true">
            <article class="hero-card hero-card--resort" data-parallax="34">
              <span class="hero-card__label">Aster Bay · Resort</span>
              <p class="hero-card__serif">A slower kind of luxury.</p>
              <div class="hero-card__row">
                <span>12 — 16 Oct</span>
                <span>2 guests</span>
                <span class="hero-card__pill">Book</span>
              </div>
            </article>

            <article class="hero-card hero-card--drift" data-parallax="-46">
              <span class="hero-card__label">Drift · Car rental</span>
              <p class="hero-card__sans">Drive something<br />worth remembering.</p>
              <div class="hero-card__row">
                <span>Cebu City</span>
                <span class="hero-card__dot"></span>
                <span>Open road</span>
              </div>
            </article>

            <article class="hero-card hero-card--fold" data-parallax="58">
              <span class="hero-card__label">Fold · Laundry</span>
              <p class="hero-card__status">Order #204 · On the way</p>
              <div class="hero-card__progress">
                <i class="is-done"></i>
                <i class="is-done"></i>
                <i class="is-active"></i>
                <i></i>
              </div>
            </article>

            <article class="hero-card hero-card--market" data-parallax="-30">
              <span class="hero-card__label">Market Day · Grocery</span>
              <p class="hero-card__serif">Good food,<br />close to home.</p>
              <div class="hero-card__produce">
                <i class="is-tomato"></i>
                <i class="is-lemon"></i>
                <i class="is-leaf"></i>
              </div>
            </article>
          </div>
        </div>
      </template>
    </q-parallax>

    <div class="hero__foot">
      <div class="sz-container hero__foot-inner">
        <span class="hero__foot-item"><b>01</b> Strategy &amp; UX</span>
        <span class="hero__foot-item"><b>02</b> Design &amp; build</span>
        <span class="hero__foot-item"><b>03</b> Launch &amp; care</span>
        <a href="#the-fit" class="hero__scroll">
          Scroll to explore
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import { useParallaxLayers } from '@/composables/useParallaxLayers';
import { SITE } from '@/data/site';

const parallaxRoot = useParallaxLayers(1);
</script>

<style scoped>
.hero {
  position: relative;
  background: var(--sz-paper);
}

.hero__parallax {
  border-bottom: 1px solid var(--sz-line);
}

.hero__parallax :deep(.q-parallax__content) {
  align-items: center;
  justify-content: flex-start;
  padding-top: var(--sz-header-height);
}

.hero__parallax :deep(.q-parallax__media) {
  overflow: hidden;
}

.hero__content {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  width: min(100% - (var(--sz-gutter) * 2), var(--sz-container));
  padding-block: 4rem;
}

.hero__copy {
  position: relative;
  z-index: 2;
}

.hero__title {
  max-width: 11ch;
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(3.15rem, 6.6vw, 7.2rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.93;
}

.hero__title em {
  color: var(--sz-accent-strong);
  font-weight: 400;
}

.hero__lead {
  max-width: 48ch;
  margin: 1.6rem 0 0;
  color: var(--sz-ink-soft);
  font-size: clamp(1rem, 1.35vw, 1.16rem);
  line-height: 1.65;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero__status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.4rem;
  color: var(--sz-ink-soft);
  font-size: 0.72rem;
  font-weight: 550;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero__status-rule {
  width: 2rem;
  height: 1px;
  background: var(--sz-line-strong);
}

.hero__cards {
  position: relative;
  height: 590px;
}

.hero-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: clamp(210px, 18vw, 270px);
  padding: 1rem 1.1rem;
  border: 1px solid var(--sz-line-strong);
  border-radius: var(--sz-radius-md);
  background: rgba(247, 242, 232, 0.86);
  box-shadow: 0 24px 60px -42px rgba(22, 21, 19, 0.45);
  backdrop-filter: blur(10px);
  will-change: translate;
}

.hero-card--resort {
  top: 2rem;
  right: 3rem;
  z-index: 3;
  transform: rotate(2deg);
}

.hero-card--drift {
  top: 12.2rem;
  right: 13rem;
  z-index: 2;
  border-color: rgba(247, 242, 232, 0.18);
  background: #181818;
  color: var(--sz-cream);
  transform: rotate(-3deg);
}

.hero-card--fold {
  top: 23rem;
  right: 1rem;
  z-index: 4;
  transform: rotate(1.5deg);
}

.hero-card--market {
  top: 30.5rem;
  right: 14.5rem;
  z-index: 3;
  background: #fbf4e6;
  transform: rotate(-1.5deg);
}

.hero-card__label {
  color: var(--sz-ink-soft);
  font-size: 0.56rem;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero-card--drift .hero-card__label {
  color: rgba(247, 242, 232, 0.56);
}

.hero-card__serif {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: 1.45rem;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.02;
}

.hero-card__sans {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.98;
  text-transform: uppercase;
}

.hero-card__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  padding-top: 0.7rem;
  border-top: 1px solid var(--sz-line);
  color: var(--sz-ink-soft);
  font-size: 0.6rem;
  font-weight: 550;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-card--drift .hero-card__row {
  border-color: rgba(247, 242, 232, 0.16);
  color: rgba(247, 242, 232, 0.66);
}

.hero-card__pill {
  margin-left: auto;
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
  background: var(--sz-accent);
  color: #fff8f1;
  font-size: 0.52rem;
  letter-spacing: 0.08em;
}

.hero-card__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e13a2d;
}

.hero-card__status {
  margin: 0;
  font-size: 0.84rem;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.hero-card__progress {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
}

.hero-card__progress i {
  display: block;
  height: 4px;
  border-radius: 999px;
  background: rgba(18, 50, 92, 0.12);
}

.hero-card__progress .is-done {
  background: #12325c;
}

.hero-card__progress .is-active {
  background: #2f6cff;
}

.hero-card__produce {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.7rem;
  border-top: 1px solid var(--sz-line);
}

.hero-card__produce i {
  display: block;
  width: 18px;
  height: 18px;
}

.hero-card__produce .is-tomato {
  border-radius: 50%;
  background: #d94f2b;
}

.hero-card__produce .is-lemon {
  border-radius: 50% 45% 50% 45%;
  background: #e8c84a;
  transform: rotate(-12deg);
}

.hero-card__produce .is-leaf {
  border: 1.5px solid #243b2a;
  border-radius: 60% 10% 60% 10%;
  background: #dbe6c9;
  transform: rotate(12deg);
}

/* Background art */
.hero__media {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 74% 18%, rgba(226, 73, 42, 0.11), transparent 28%),
    linear-gradient(135deg, #f7f2e8 0%, var(--sz-paper) 55%, #e9e0d1 100%);
}

.hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.45;
  background-image:
    linear-gradient(var(--sz-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--sz-line) 1px, transparent 1px);
  background-size: 84px 84px;
  mask-image: linear-gradient(to bottom, transparent, #000 24%, #000 76%, transparent);
}

.hero__glow {
  position: absolute;
  top: 18%;
  right: 10%;
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  background: var(--sz-accent-soft);
  filter: blur(80px);
  opacity: 0.34;
}

.hero__arc {
  position: absolute;
  top: 13%;
  right: -10%;
  width: 46rem;
  height: 46rem;
  border: 1px solid var(--sz-line-strong);
  border-radius: 50%;
  opacity: 0.28;
}

.hero__type {
  position: absolute;
  right: -2.5rem;
  bottom: 9%;
  color: transparent;
  font-family: var(--sz-font-display);
  font-size: clamp(4rem, 9vw, 10rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 0.82;
  opacity: 0.24;
  text-align: right;
  transform: rotate(-90deg) translateX(30%);
  transform-origin: right bottom;
  -webkit-text-stroke: 1px var(--sz-ink-soft);
  white-space: nowrap;
}

.hero__measure {
  position: absolute;
  right: 0;
  left: 0;
  height: 9px;
  opacity: 0.35;
  background-image: repeating-linear-gradient(
    90deg,
    var(--sz-ink-soft) 0,
    var(--sz-ink-soft) 1px,
    transparent 1px,
    transparent 32px
  );
}

.hero__measure--top {
  top: var(--sz-header-height);
}

.hero__measure--bottom {
  bottom: 0;
}

.hero__foot {
  border-bottom: 1px solid var(--sz-line);
  background: var(--sz-paper);
}

.hero__foot-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;
  padding-block: 0.95rem;
  color: var(--sz-ink-soft);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__foot-item b {
  margin-right: 0.35rem;
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
}

.hero__scroll {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  transition: color var(--sz-dur-fast) var(--sz-ease);
}

.hero__scroll:hover {
  color: var(--sz-ink);
}

.hero__scroll span {
  display: inline-block;
  animation: hero-bob 1.8s ease-in-out infinite;
}

@keyframes hero-bob {
  50% {
    transform: translateY(3px);
  }
}

@media (max-width: 1199px) {
  .hero__content {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero__cards {
    display: none;
  }

  .hero__title {
    max-width: 12ch;
  }
}

@media (max-width: 767px) {
  .hero__parallax {
    height: 780px !important;
  }

  .hero__content {
    padding-block: 2.5rem;
  }

  .hero__title {
    font-size: clamp(2.8rem, 12vw, 4.2rem);
  }

  .hero__lead {
    font-size: 0.98rem;
  }

  .hero__status {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.45rem;
  }

  .hero__status-rule {
    display: none;
  }

  .hero__foot-inner {
    gap: 0.6rem 1.25rem;
  }

  .hero__scroll {
    width: 100%;
    margin-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll span {
    animation: none;
  }
}
</style>
