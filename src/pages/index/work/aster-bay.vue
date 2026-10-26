<template>
  <ConceptFrame
    slug="aster-bay"
    brand="Aster Bay"
    tagline="A slower kind of luxury."
    :nav="nav"
    cta="Book a stay"
    cta-href="#stay"
    :palette="concept.palette"
    :next="next"
  >
    <section class="aster-hero">
      <div class="aster-inner aster-hero__inner">
        <div class="aster-hero__copy">
          <p class="aster-kicker">Siargao · 12 suites · Adults only</p>
          <h1 class="aster-title">A slower kind <em>of luxury.</em></h1>
          <p class="aster-lead">
            A small resort on the edge of the Pacific, built for people who want to hear the water
            more than the world. Twelve suites, one long horizon, and no reason to hurry.
          </p>
          <div class="aster-actions">
            <a href="#stay" class="aster-btn aster-btn--solid">Check availability</a>
            <a href="#suites" class="aster-link">Explore the suites <span>→</span></a>
          </div>
        </div>

        <div class="aster-hero__art" aria-hidden="true">
          <div class="aster-window">
            <span class="aster-sun"></span>
            <span class="aster-sea"></span>
            <span class="aster-wave"></span>
            <span class="aster-window__label">12° N · Pacific</span>
            <span class="aster-window__caption">The horizon, from suite 06.</span>
          </div>
          <p class="aster-note">A quiet edge of the world. <span>Est. 2026</span></p>
        </div>
      </div>

      <form class="aster-booking" @submit.prevent="showNotice">
        <div class="aster-booking__field">
          <span>Arrive</span>
          <strong>12 October</strong>
        </div>
        <div class="aster-booking__field">
          <span>Depart</span>
          <strong>16 October</strong>
        </div>
        <div class="aster-booking__field">
          <span>Guests</span>
          <strong>2 adults</strong>
        </div>
        <button type="submit" class="aster-btn aster-btn--solid">
          Check availability <span>→</span>
        </button>
      </form>
    </section>

    <section id="stay" class="aster-section">
      <div class="aster-inner">
        <div class="aster-section-head">
          <div>
            <p class="aster-kicker">The stay</p>
            <h2 class="aster-h2">Twelve suites.<br /><em>One long horizon.</em></h2>
          </div>
          <p class="aster-section-copy">
            Each suite opens to the same view, but the light changes all day. Choose the one that
            matches the pace you are looking for.
          </p>
        </div>

        <div class="aster-suites">
          <article class="aster-suite">
            <div class="aster-suite__art aster-suite__art--one">
              <span class="aster-suite__sun"></span>
              <span class="aster-suite__horizon"></span>
            </div>
            <div class="aster-suite__meta">
              <span>01 · 42 sqm</span>
              <span>Ocean front</span>
            </div>
            <h3>Ocean Suite</h3>
            <p>A wide room, a deeper bath, and a terrace that makes breakfast last longer.</p>
            <a href="#book" class="aster-link">View suite <span>→</span></a>
          </article>

          <article class="aster-suite">
            <div class="aster-suite__art aster-suite__art--two">
              <span class="aster-suite__arch"></span>
              <span class="aster-suite__plant"></span>
            </div>
            <div class="aster-suite__meta">
              <span>02 · 58 sqm</span>
              <span>Garden</span>
            </div>
            <h3>Garden Suite</h3>
            <p>Shaded by old trees, with an outdoor shower and a private patch of green.</p>
            <a href="#book" class="aster-link">View suite <span>→</span></a>
          </article>

          <article class="aster-suite">
            <div class="aster-suite__art aster-suite__art--three">
              <span class="aster-suite__moon"></span>
              <span class="aster-suite__stars"></span>
            </div>
            <div class="aster-suite__meta">
              <span>03 · 76 sqm</span>
              <span>Cliff edge</span>
            </div>
            <h3>Cliff Suite</h3>
            <p>The last room before the water. A plunge pool, a long view, and very little else.</p>
            <a href="#book" class="aster-link">View suite <span>→</span></a>
          </article>
        </div>
      </div>
    </section>

    <section class="aster-day">
      <div class="aster-inner">
        <div class="aster-day__intro">
          <p class="aster-kicker">A day here</p>
          <h2 class="aster-h2">Nothing to do.<br /><em>Everything to notice.</em></h2>
        </div>

        <div class="aster-day__list">
          <div class="aster-day__item">
            <span>06:40</span>
            <h3>First light</h3>
            <p>Coffee on the terrace before the water gets bright. No schedule, no soundtrack.</p>
          </div>
          <div class="aster-day__item">
            <span>13:10</span>
            <h3>The long lunch</h3>
            <p>Whatever the kitchen found that morning, served slowly under the trees.</p>
          </div>
          <div class="aster-day__item">
            <span>18:20</span>
            <h3>Salt &amp; dusk</h3>
            <p>A short walk to the point, a cold drink, and the last of the light.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="aster-quote">
      <div class="aster-inner aster-quote__inner">
        <span class="aster-quote__mark" aria-hidden="true">“</span>
        <blockquote>
          We built Aster Bay for the kind of holiday where you forget what day it is — and do not
          mind finding out.
        </blockquote>
        <p>— The fictional owners</p>
      </div>
    </section>

    <section id="suites" class="aster-book">
      <div class="aster-inner aster-book__grid">
        <div>
          <p class="aster-kicker">Plan your stay</p>
          <h2 class="aster-h2">Come for the quiet.<br /><em>Stay for the light.</em></h2>
          <p class="aster-section-copy">
            Tell us when you would like to arrive. We will reply with what is open, what is not, and
            the best way to spend your days here.
          </p>
          <div class="aster-book__direct">
            <span>Prefer to write?</span>
            <a href="mailto:stay@asterbay.example">stay@asterbay.example</a>
          </div>
        </div>

        <form id="book" class="aster-form" @submit.prevent="showNotice">
          <label>
            <span>Your name</span>
            <input type="text" placeholder="Name" autocomplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" autocomplete="email" />
          </label>
          <div class="aster-form__row">
            <label>
              <span>Arrive</span>
              <input type="text" placeholder="12 Oct" />
            </label>
            <label>
              <span>Depart</span>
              <input type="text" placeholder="16 Oct" />
            </label>
          </div>
          <label>
            <span>Anything we should know?</span>
            <textarea rows="3" placeholder="A quiet room, a late arrival, a birthday..."></textarea>
          </label>
          <button type="submit" class="aster-btn aster-btn--solid">
            Request availability <span>→</span>
          </button>
          <p class="aster-form__note">This is a concept study. Bookings are not live.</p>
        </form>
      </div>
    </section>

    <ConceptNotes :concept="concept" />
  </ConceptFrame>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';
import ConceptFrame from '@/components/concepts/ConceptFrame.vue';
import ConceptNotes from '@/components/concepts/ConceptNotes.vue';
import { conceptBySlug, nextConcept } from '@/data/concepts';
import { breadcrumbJsonLd, conceptJsonLd, useSeo } from '@/composables/useSeo';

const concept = conceptBySlug('aster-bay')!;
const next = nextConcept('aster-bay');

const nav = [
  { label: 'Stay', href: '#stay' },
  { label: 'Suites', href: '#suites' },
  { label: 'Reserve', href: '#book' },
];

function showNotice() {
  Notify.create({
    message: 'Aster Bay is a concept study — bookings are not live.',
    color: 'dark',
    position: 'bottom',
    timeout: 3500,
  });
}

useSeo({
  title: concept.metaTitle,
  description: concept.metaDescription,
  path: '/work/aster-bay',
  jsonLd: [
    conceptJsonLd(concept),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'Aster Bay', path: '/work/aster-bay' },
    ]),
  ],
});
</script>

<style scoped>
.aster-hero,
.aster-section,
.aster-book {
  background: var(--cp-bg);
}

.aster-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(3.5rem, 7vw, 7rem) clamp(2.5rem, 5vw, 4rem);
  background:
    radial-gradient(circle at 78% 12%, rgba(216, 106, 74, 0.16), transparent 30%),
    linear-gradient(150deg, #f7efe2 0%, var(--cp-bg) 58%, #e6d6bc 100%);
}

.aster-inner {
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin-inline: auto;
}

.aster-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.aster-kicker {
  margin: 0 0 0.9rem;
  color: var(--cp-accent);
  font-size: 0.64rem;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.aster-title {
  max-width: 10ch;
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(3.2rem, 6.7vw, 6.8rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.92;
}

.aster-title em,
.aster-h2 em {
  color: var(--cp-accent);
  font-weight: 400;
}

.aster-lead {
  max-width: 50ch;
  margin: 1.5rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 72%, transparent);
  font-size: clamp(0.98rem, 1.2vw, 1.1rem);
  line-height: 1.7;
}

.aster-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  align-items: center;
  margin-top: 2rem;
}

.aster-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0.8rem 1.3rem;
  border: 1px solid var(--cp-ink);
  border-radius: 999px;
  background: transparent;
  color: var(--cp-ink);
  cursor: pointer;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease),
    transform var(--sz-dur-fast) var(--sz-ease);
}

.aster-btn:hover {
  transform: translateY(-1px);
}

.aster-btn--solid {
  border-color: var(--cp-ink);
  background: var(--cp-ink);
  color: var(--cp-bg);
}

.aster-btn--solid:hover {
  border-color: var(--cp-accent);
  background: var(--cp-accent);
  color: #fff8f1;
}

.aster-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-bottom: 1px solid color-mix(in srgb, var(--cp-ink) 40%, transparent);
  padding-bottom: 0.15rem;
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.aster-link span {
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.aster-link:hover span {
  transform: translateX(3px);
}

.aster-hero__art {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.aster-window {
  position: relative;
  overflow: hidden;
  width: min(100%, 370px);
  aspect-ratio: 3 / 4;
  border: 1px solid rgba(25, 59, 57, 0.2);
  border-radius: 50% 50% 3px 3px / 28% 28% 3px 3px;
  background: linear-gradient(180deg, #f4c4a0 0%, #e7a17d 42%, #b35d4b 68%, #173b3b 100%);
  box-shadow: 0 35px 80px -55px rgba(16, 44, 43, 0.7);
}

.aster-sun {
  position: absolute;
  top: 19%;
  left: 50%;
  width: 36%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ffe7c4;
  box-shadow: 0 0 40px rgba(255, 231, 196, 0.5);
  transform: translateX(-50%);
}

.aster-sea {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 38%;
  background: linear-gradient(180deg, rgba(25, 59, 57, 0.35), #102c2b 78%);
}

.aster-wave {
  position: absolute;
  right: 0;
  bottom: 30%;
  left: 0;
  height: 1px;
  background: rgba(255, 240, 220, 0.55);
  box-shadow:
    0 12px 0 rgba(255, 240, 220, 0.25),
    0 24px 0 rgba(255, 240, 220, 0.14);
}

.aster-window__label,
.aster-window__caption {
  position: absolute;
  z-index: 2;
  color: rgba(255, 248, 238, 0.78);
  font-family: var(--sz-font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.aster-window__label {
  top: 1.1rem;
  left: 1.2rem;
}

.aster-window__caption {
  right: 1.2rem;
  bottom: 1.1rem;
  text-align: right;
}

.aster-note {
  width: min(100%, 370px);
  margin: 0.8rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 56%, transparent);
  font-family: var(--sz-font-display);
  font-size: 0.9rem;
  font-style: italic;
  text-align: right;
}

.aster-note span {
  font-family: var(--sz-font-mono);
  font-size: 0.55rem;
  font-style: normal;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.aster-booking {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
  gap: 1.5rem;
  align-items: center;
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin: clamp(2.5rem, 5vw, 4rem) auto 0;
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(25, 59, 57, 0.16);
  background: rgba(255, 250, 241, 0.82);
  backdrop-filter: blur(10px);
}

.aster-booking__field {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-right: 1rem;
  border-right: 1px solid rgba(25, 59, 57, 0.14);
}

.aster-booking__field span {
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.56rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.aster-booking__field strong {
  font-family: var(--sz-font-display);
  font-size: 1.1rem;
  font-weight: 500;
}

.aster-section {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.aster-section-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.aster-h2 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.aster-section-copy {
  max-width: 52ch;
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 64%, transparent);
  font-size: 0.92rem;
  line-height: 1.7;
}

.aster-suites {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 2.5vw, 2rem);
}

.aster-suite {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.aster-suite__art {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  margin-bottom: 1rem;
  border: 1px solid rgba(25, 59, 57, 0.16);
}

.aster-suite__art--one {
  background: linear-gradient(170deg, #f6d3b3, #dc8b68 58%, #173b3b 58.2%);
}

.aster-suite__sun {
  position: absolute;
  top: 18%;
  left: 50%;
  width: 32%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ffe9c9;
  transform: translateX(-50%);
}

.aster-suite__horizon {
  position: absolute;
  right: 0;
  bottom: 30%;
  left: 0;
  height: 1px;
  background: rgba(255, 244, 230, 0.55);
}

.aster-suite__art--two {
  background:
    radial-gradient(circle at 40% 32%, rgba(217, 199, 169, 0.9), transparent 30%),
    linear-gradient(150deg, #e8dcc7, #c6b08b);
}

.aster-suite__arch {
  position: absolute;
  top: 14%;
  left: 50%;
  width: 60%;
  height: 72%;
  border: 1px solid rgba(25, 59, 57, 0.4);
  border-radius: 50% 50% 0 0 / 38% 38% 0 0;
  transform: translateX(-50%);
}

.aster-suite__plant {
  position: absolute;
  right: 14%;
  bottom: 0;
  width: 1px;
  height: 46%;
  background: rgba(25, 59, 57, 0.5);
  box-shadow:
    -12px -8px 0 -8px rgba(25, 59, 57, 0.5),
    14px -18px 0 -8px rgba(25, 59, 57, 0.5);
}

.aster-suite__art--three {
  background: linear-gradient(180deg, #102c2b, #193b39 62%, #0b2221);
}

.aster-suite__moon {
  position: absolute;
  top: 20%;
  right: 18%;
  width: 28%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #f7e7c8;
  box-shadow: 0 0 30px rgba(247, 231, 200, 0.25);
}

.aster-suite__stars {
  position: absolute;
  inset: 12% 12% auto auto;
  width: 40%;
  height: 40%;
  opacity: 0.6;
  background-image:
    radial-gradient(circle, #fff 0 1px, transparent 1.5px),
    radial-gradient(circle, #fff 0 1px, transparent 1.5px);
  background-position:
    0 0,
    17px 23px;
  background-size: 34px 34px;
}

.aster-suite__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.5rem;
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.aster-suite h3 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.aster-suite p {
  margin: 0.45rem 0 0.8rem;
  color: color-mix(in srgb, var(--cp-ink) 62%, transparent);
  font-size: 0.82rem;
  line-height: 1.6;
}

.aster-day {
  padding-block: clamp(4rem, 8vw, 7rem);
  background: var(--cp-dark);
  color: var(--cp-bg);
}

.aster-day .aster-inner {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.aster-day .aster-kicker {
  color: #ff9b7f;
}

.aster-day__list {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.aster-day__item {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  gap: 1rem;
  padding-block: 1.35rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.aster-day__item > span {
  color: #ff9b7f;
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

.aster-day__item h3 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.aster-day__item p {
  grid-column: 2;
  margin: -0.3rem 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.82rem;
  line-height: 1.6;
}

.aster-quote {
  padding-block: clamp(4rem, 9vw, 8rem);
  background: #efdfc6;
}

.aster-quote__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.aster-quote__mark {
  color: var(--cp-accent);
  font-family: var(--sz-font-display);
  font-size: 5rem;
  line-height: 0.6;
}

.aster-quote blockquote {
  max-width: 22ch;
  margin: 1.5rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2rem, 4.4vw, 4rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.04;
}

.aster-quote p {
  margin: 1.5rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 52%, transparent);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.aster-book {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.aster-book__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.aster-book__direct {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1rem;
  margin-top: 1.5rem;
  font-size: 0.72rem;
}

.aster-book__direct span {
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.aster-book__direct a {
  border-bottom: 1px solid currentColor;
  font-family: var(--sz-font-display);
  font-size: 1rem;
}

.aster-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(25, 59, 57, 0.16);
  background: rgba(255, 250, 241, 0.55);
}

.aster-form label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.aster-form label > span {
  color: color-mix(in srgb, var(--cp-ink) 56%, transparent);
  font-size: 0.56rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.aster-form input,
.aster-form textarea {
  width: 100%;
  padding: 0.65rem 0.7rem;
  border: 1px solid rgba(25, 59, 57, 0.2);
  border-radius: 0;
  background: rgba(255, 255, 255, 0.45);
  color: var(--cp-ink);
  font: inherit;
  font-size: 0.85rem;
  outline: none;
}

.aster-form input:focus,
.aster-form textarea:focus {
  border-color: var(--cp-accent);
}

.aster-form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.aster-form .aster-btn {
  margin-top: 0.3rem;
}

.aster-form__note {
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 46%, transparent);
  font-size: 0.62rem;
}

@media (max-width: 1023px) {
  .aster-hero__inner,
  .aster-book__grid,
  .aster-day .aster-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .aster-hero__art {
    align-items: flex-start;
  }

  .aster-window {
    width: min(100%, 330px);
  }

  .aster-booking {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .aster-booking .aster-btn {
    grid-column: 1 / -1;
  }

  .aster-section-head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }
}

@media (max-width: 767px) {
  .aster-suites {
    grid-template-columns: minmax(0, 1fr);
  }

  .aster-suite__art {
    aspect-ratio: 5 / 4;
  }

  .aster-booking {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .aster-booking__field:nth-child(3) {
    grid-column: 1 / -1;
    border-right: 0;
  }

  .aster-booking__field {
    padding-bottom: 0.6rem;
  }

  .aster-form__row {
    grid-template-columns: minmax(0, 1fr);
  }

  .aster-quote blockquote {
    max-width: 20ch;
  }
}
</style>
