<template>
  <div class="cp" :class="`cp--${concept.slug}`" :style="paletteStyle">
    <!-- Aster Bay -->
    <template v-if="concept.slug === 'aster-bay'">
      <header class="cp-nav">
        <span class="cp-brand cp-brand--serif">Aster Bay</span>
        <span class="cp-navlinks">Stay · Dine · Explore</span>
        <span class="cp-pill cp-pill--ink">Book</span>
      </header>

      <div class="aster-hero">
        <span class="aster-sun" aria-hidden="true"></span>
        <span class="aster-horizon" aria-hidden="true"></span>
        <span class="aster-hill aster-hill--one" aria-hidden="true"></span>
        <span class="aster-hill aster-hill--two" aria-hidden="true"></span>

        <p class="cp-kicker">{{ concept.preview.kicker }}</p>
        <h4 class="cp-headline">{{ concept.preview.headline }}</h4>
        <p class="cp-sub">{{ concept.preview.sub }}</p>
        <span class="cp-pill cp-pill--accent">{{ concept.preview.cta }} →</span>
      </div>

      <div class="aster-booking">
        <div>
          <span>Arrive</span>
          <strong>12 Oct</strong>
        </div>
        <div>
          <span>Depart</span>
          <strong>16 Oct</strong>
        </div>
        <div>
          <span>Guests</span>
          <strong>2 adults</strong>
        </div>
        <span class="cp-pill cp-pill--ink">Check</span>
      </div>
    </template>

    <!-- Drift -->
    <template v-else-if="concept.slug === 'drift'">
      <header class="cp-nav">
        <span class="cp-brand">DRIFT</span>
        <span class="cp-navlinks">Fleet · Locations · Support</span>
        <span class="cp-pill cp-pill--red">Book</span>
      </header>

      <div class="drift-hero">
        <p class="cp-kicker">Cebu · Philippines</p>
        <h4 class="cp-headline">Drive<br /><span>something</span><br />worth remembering.</h4>
        <p class="cp-sub">{{ concept.preview.sub }}</p>

        <div class="drift-search">
          <div>
            <span>Pick-up</span>
            <strong>Cebu City</strong>
          </div>
          <div>
            <span>From</span>
            <strong>12 Oct</strong>
          </div>
          <div>
            <span>To</span>
            <strong>16 Oct</strong>
          </div>
          <span class="cp-pill cp-pill--red">{{ concept.preview.cta }} →</span>
        </div>

        <svg class="drift-car" viewBox="0 0 260 86" fill="none" aria-hidden="true">
          <path
            d="M10 58h16l13-19h43l18-14h46l23 14h40l23 19h18v13H10V58Z"
            fill="currentColor"
            opacity=".18"
          />
          <path
            d="M36 58h32l9-14h41l14-11h34l18 11h31l18 14h24"
            stroke="currentColor"
            stroke-width="2"
            opacity=".55"
          />
          <circle cx="75" cy="72" r="11" fill="currentColor" opacity=".8" />
          <circle cx="187" cy="72" r="11" fill="currentColor" opacity=".8" />
        </svg>
      </div>

      <div class="drift-chips">
        <span v-for="chip in concept.preview.chips" :key="chip">{{ chip }}</span>
      </div>
    </template>

    <!-- Fold -->
    <template v-else-if="concept.slug === 'fold'">
      <header class="cp-nav">
        <span class="cp-brand">fold<span class="fold-dot">.</span></span>
        <span class="cp-navlinks">Services · Pricing · Track</span>
        <span class="cp-pill cp-pill--blue">{{ concept.preview.cta }}</span>
      </header>

      <span class="fold-bubble fold-bubble--one" aria-hidden="true"></span>
      <span class="fold-bubble fold-bubble--two" aria-hidden="true"></span>
      <span class="fold-bubble fold-bubble--three" aria-hidden="true"></span>

      <div class="fold-hero">
        <div class="fold-copy">
          <p class="cp-kicker">{{ concept.preview.kicker }}</p>
          <h4 class="cp-headline">Fresh clothes.<br /><span>Zero friction.</span></h4>
          <p class="cp-sub">{{ concept.preview.sub }}</p>
          <span class="cp-pill cp-pill--blue">{{ concept.preview.cta }} →</span>
        </div>

        <div class="fold-status">
          <div class="fold-status__top">
            <span>Order #204</span>
            <span class="fold-live">Live</span>
          </div>
          <strong>Out for delivery</strong>
          <p>Arriving between 4–6pm</p>
          <div class="fold-progress">
            <i class="is-done"></i>
            <i class="is-done"></i>
            <i class="is-active"></i>
            <i></i>
          </div>
          <div class="fold-steps">
            <span>Picked up</span>
            <span>Washed</span>
            <span>On the way</span>
            <span>Delivered</span>
          </div>
        </div>
      </div>

      <div class="fold-chips">
        <span v-for="chip in concept.preview.chips" :key="chip">{{ chip }}</span>
      </div>
    </template>

    <!-- Market Day -->
    <template v-else>
      <header class="cp-nav">
        <span class="cp-brand cp-brand--serif">Market Day</span>
        <span class="cp-navlinks">Produce · Pantry · Dairy</span>
        <span class="cp-pill cp-pill--green">Basket · 3</span>
      </header>

      <div class="market-hero">
        <div class="market-copy">
          <p class="cp-kicker">{{ concept.preview.kicker }}</p>
          <h4 class="cp-headline">Good food,<br /><span>close to home.</span></h4>
          <p class="cp-sub">{{ concept.preview.sub }}</p>
          <span class="cp-pill cp-pill--green">{{ concept.preview.cta }} →</span>
        </div>

        <div class="market-produce">
          <div class="produce-card">
            <span class="produce produce--tomato"></span>
            <strong>Tomatoes</strong>
            <small>Vine-ripened</small>
          </div>
          <div class="produce-card">
            <span class="produce produce--lemon"></span>
            <strong>Lemons</strong>
            <small>Sweet · tart</small>
          </div>
          <div class="produce-card">
            <span class="produce produce--leaf"></span>
            <strong>Greens</strong>
            <small>Leafy mix</small>
          </div>
        </div>
      </div>

      <div class="market-slots">
        <div>
          <span>Next delivery</span>
          <strong>Today · 5–7pm</strong>
        </div>
        <div>
          <span>Delivery</span>
          <strong>Same day</strong>
        </div>
        <span class="cp-pill cp-pill--ink">Choose slot</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Concept } from '@/data/concepts';

const props = defineProps<{ concept: Concept }>();

const paletteStyle = computed(() => ({
  '--cp-bg': props.concept.palette.bg,
  '--cp-ink': props.concept.palette.ink,
  '--cp-accent': props.concept.palette.accent,
  '--cp-soft': props.concept.palette.soft,
  '--cp-dark': props.concept.palette.dark,
}));
</script>

<style scoped>
.cp {
  position: relative;
  container-type: inline-size;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  padding: 4.5cqw;
  background: var(--cp-bg);
  color: var(--cp-ink);
  font-family: var(--sz-font-sans);
}

.cp-nav {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2cqw;
  font-size: 1.9cqw;
}

.cp-brand {
  font-size: 2.4cqw;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
}

.cp-brand--serif {
  font-family: var(--sz-font-display);
  font-size: 3.1cqw;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-transform: none;
}

.cp-navlinks {
  opacity: 0.62;
  font-size: 1.7cqw;
  letter-spacing: 0.04em;
}

.cp-kicker {
  margin: 0 0 1.2cqw;
  font-size: 1.65cqw;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cp-headline {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: 7.4cqw;
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.94;
}

.cp-sub {
  max-width: 58%;
  margin: 1.6cqw 0 0;
  font-size: 2.05cqw;
  line-height: 1.45;
  opacity: 0.76;
}

.cp-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 1.05cqw 1.7cqw;
  border-radius: 999px;
  font-size: 1.55cqw;
  font-weight: 650;
  letter-spacing: 0.02em;
  line-height: 1;
  white-space: nowrap;
}

.cp-pill--ink {
  background: var(--cp-ink);
  color: var(--cp-bg);
}

.cp-pill--accent {
  background: var(--cp-accent);
  color: #fff8f1;
}

.cp-pill--red {
  background: var(--cp-accent);
  color: #fff;
}

.cp-pill--blue {
  background: var(--cp-accent);
  color: #fff;
}

.cp-pill--green {
  background: var(--cp-ink);
  color: var(--cp-bg);
}

/* Aster Bay */
.cp--aster-bay {
  background: linear-gradient(160deg, #f4ead9 0%, var(--cp-bg) 52%, #e7d7bd 100%);
}

.aster-hero {
  position: relative;
  z-index: 2;
  margin-top: 5.5cqw;
  max-width: 66%;
}

.aster-sun {
  position: absolute;
  top: -1cqw;
  right: -34cqw;
  z-index: -1;
  width: 26cqw;
  height: 26cqw;
  border-radius: 50%;
  background: var(--cp-accent);
  opacity: 0.9;
}

.aster-horizon {
  position: absolute;
  top: 24cqw;
  right: -4.5cqw;
  width: 58cqw;
  height: 1px;
  background: var(--cp-ink);
  opacity: 0.22;
}

.aster-hill {
  position: absolute;
  right: -16cqw;
  z-index: -1;
  display: block;
  border-radius: 50%;
  background: var(--cp-soft);
}

.aster-hill--one {
  top: 27cqw;
  width: 40cqw;
  height: 16cqw;
  opacity: 0.8;
}

.aster-hill--two {
  top: 32cqw;
  right: -25cqw;
  width: 52cqw;
  height: 22cqw;
  background: var(--cp-dark);
  opacity: 0.14;
}

.aster-hero .cp-headline {
  max-width: 9ch;
  font-size: 7.8cqw;
}

.aster-hero .cp-pill {
  margin-top: 2.4cqw;
}

.aster-booking {
  position: absolute;
  right: 4.5cqw;
  bottom: 4.5cqw;
  left: 4.5cqw;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 2.4cqw;
  align-items: center;
  padding: 2.2cqw 2.6cqw;
  border: 1px solid rgba(25, 59, 57, 0.16);
  background: rgba(255, 250, 241, 0.82);
  backdrop-filter: blur(8px);
}

.aster-booking div {
  display: flex;
  flex-direction: column;
  gap: 0.35cqw;
}

.aster-booking span:not(.cp-pill) {
  opacity: 0.58;
  font-size: 1.35cqw;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.aster-booking strong {
  font-family: var(--sz-font-display);
  font-size: 2.3cqw;
  font-weight: 500;
}

/* Drift */
.cp--drift {
  background:
    linear-gradient(120deg, rgba(225, 58, 45, 0.16), transparent 42%),
    linear-gradient(160deg, #191919 0%, var(--cp-dark) 100%);
  color: #f3f0e8;
}

.cp--drift .cp-navlinks,
.cp--drift .cp-kicker,
.cp--drift .cp-sub {
  opacity: 0.58;
}

.cp--drift .cp-kicker {
  color: var(--cp-accent);
  opacity: 1;
}

.drift-hero {
  position: relative;
  z-index: 2;
  margin-top: 5cqw;
  max-width: 72%;
}

.drift-hero .cp-headline {
  font-family: var(--sz-font-sans);
  font-size: 7.2cqw;
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 0.88;
  text-transform: uppercase;
}

.drift-hero .cp-headline span {
  color: var(--cp-accent);
}

.drift-search {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr auto;
  gap: 1.8cqw;
  align-items: center;
  margin-top: 2.6cqw;
  padding: 1.8cqw 2cqw;
  background: #f3f0e8;
  color: #181818;
}

.drift-search div {
  display: flex;
  flex-direction: column;
  gap: 0.35cqw;
}

.drift-search span:not(.cp-pill) {
  opacity: 0.52;
  font-size: 1.25cqw;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.drift-search strong {
  font-size: 1.8cqw;
  font-weight: 700;
}

.drift-car {
  position: absolute;
  right: -4cqw;
  bottom: -2cqw;
  width: 42cqw;
  color: var(--cp-accent);
}

.drift-chips {
  position: absolute;
  right: 4.5cqw;
  bottom: 4.5cqw;
  z-index: 2;
  display: flex;
  gap: 1.2cqw;
}

.drift-chips span,
.fold-chips span {
  padding: 0.8cqw 1.4cqw;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 1.3cqw;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.68;
}

/* Fold */
.cp--fold {
  background:
    radial-gradient(circle at 78% 18%, rgba(201, 238, 228, 0.8), transparent 28%),
    linear-gradient(160deg, #fbfdfe 0%, var(--cp-bg) 100%);
}

.fold-dot {
  color: var(--cp-accent);
}

.fold-bubble {
  position: absolute;
  display: block;
  border-radius: 50%;
  background: var(--cp-soft);
  opacity: 0.6;
}

.fold-bubble--one {
  top: 14cqw;
  right: 10cqw;
  width: 16cqw;
  height: 16cqw;
}

.fold-bubble--two {
  top: 27cqw;
  right: 28cqw;
  width: 7cqw;
  height: 7cqw;
  opacity: 0.4;
}

.fold-bubble--three {
  bottom: 10cqw;
  left: 42cqw;
  width: 11cqw;
  height: 11cqw;
  opacity: 0.25;
}

.fold-hero {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  gap: 4cqw;
  align-items: center;
  margin-top: 4cqw;
}

.fold-copy .cp-headline {
  font-size: 6.6cqw;
}

.fold-copy .cp-sub {
  max-width: 100%;
  margin-bottom: 2.2cqw;
}

.fold-status {
  padding: 2.4cqw;
  border: 1px solid rgba(18, 50, 92, 0.14);
  border-radius: 1.2cqw;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 2.4cqw 5cqw -3.5cqw rgba(18, 50, 92, 0.35);
}

.fold-status__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4cqw;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.fold-live {
  padding: 0.45cqw 0.9cqw;
  border-radius: 999px;
  background: var(--cp-soft);
  color: var(--cp-ink);
  font-size: 1.2cqw;
}

.fold-status strong {
  display: block;
  margin-top: 1.8cqw;
  font-family: var(--sz-font-display);
  font-size: 3.1cqw;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.fold-status p {
  margin: 0.6cqw 0 0;
  opacity: 0.58;
  font-size: 1.6cqw;
}

.fold-progress {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.7cqw;
  margin-top: 2.2cqw;
}

.fold-progress i {
  display: block;
  height: 0.55cqw;
  border-radius: 999px;
  background: rgba(18, 50, 92, 0.12);
}

.fold-progress .is-done {
  background: var(--cp-ink);
}

.fold-progress .is-active {
  background: var(--cp-accent);
}

.fold-steps {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8cqw;
  opacity: 0.5;
  font-size: 1.15cqw;
}

.fold-chips {
  position: absolute;
  bottom: 4.5cqw;
  left: 4.5cqw;
  z-index: 2;
  display: flex;
  gap: 1.2cqw;
}

/* Market Day */
.cp--market-day {
  background:
    radial-gradient(circle at 14% 88%, rgba(219, 230, 201, 0.7), transparent 32%),
    linear-gradient(160deg, #faf4e8 0%, var(--cp-bg) 100%);
}

.market-hero {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 3cqw;
  align-items: center;
  margin-top: 4cqw;
}

.market-copy .cp-headline {
  font-size: 7.2cqw;
}

.market-copy .cp-sub {
  max-width: 100%;
  margin-bottom: 2.2cqw;
}

.market-produce {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2cqw;
}

.produce-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6cqw;
  padding: 1.6cqw;
  border: 1px solid rgba(36, 59, 42, 0.14);
  border-radius: 1.2cqw;
  background: rgba(255, 253, 247, 0.72);
}

.produce {
  display: block;
  width: 5.2cqw;
  height: 5.2cqw;
  margin-bottom: 0.4cqw;
}

.produce--tomato {
  border-radius: 50%;
  background: var(--cp-accent);
  box-shadow: inset -0.7cqw -0.7cqw 0 rgba(0, 0, 0, 0.12);
}

.produce--lemon {
  border-radius: 50% 45% 50% 45%;
  background: #e8c84a;
  transform: rotate(-12deg);
}

.produce--leaf {
  border-radius: 60% 10% 60% 10%;
  background: var(--cp-soft);
  border: 0.35cqw solid var(--cp-ink);
  transform: rotate(12deg);
}

.produce-card strong {
  font-family: var(--sz-font-display);
  font-size: 1.8cqw;
  font-weight: 500;
}

.produce-card small {
  opacity: 0.58;
  font-size: 1.3cqw;
}

.market-slots {
  position: absolute;
  right: 4.5cqw;
  bottom: 4.5cqw;
  left: 4.5cqw;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 3cqw;
  padding: 1.8cqw 2.2cqw;
  border: 1px solid rgba(36, 59, 42, 0.14);
  background: rgba(255, 253, 247, 0.78);
}

.market-slots div {
  display: flex;
  flex-direction: column;
  gap: 0.3cqw;
}

.market-slots span:not(.cp-pill) {
  opacity: 0.56;
  font-size: 1.25cqw;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.market-slots strong {
  font-family: var(--sz-font-display);
  font-size: 2cqw;
  font-weight: 500;
}

.market-slots .cp-pill {
  margin-left: auto;
}
</style>
