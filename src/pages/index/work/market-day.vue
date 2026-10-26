<template>
  <ConceptFrame
    slug="market-day"
    brand="Market Day"
    tagline="The market, at your door."
    :nav="nav"
    cta="Shop the aisles"
    cta-href="#shop"
    :palette="concept.palette"
    :next="next"
  >
    <section class="market-hero">
      <span class="market-leaf market-leaf--one" aria-hidden="true"></span>
      <span class="market-leaf market-leaf--two" aria-hidden="true"></span>

      <div class="market-inner market-hero__grid">
        <div class="market-hero__copy">
          <p class="market-kicker">Quezon City · Delivered today · 5–7pm</p>
          <h1 class="market-title">Good food,<br /><em>close to home.</em></h1>
          <p class="market-lead">
            A neighborhood grocery with the good stuff picked this morning, packed with care, and
            brought to your door in the slot you choose.
          </p>
          <div class="market-actions">
            <a href="#shop" class="market-btn market-btn--ink">Shop the aisles <span>→</span></a>
            <a href="#delivery" class="market-link">Check delivery <span>→</span></a>
          </div>
          <div class="market-hero__trust">
            <span>Local first</span>
            <span>No plastic bags</span>
            <span>Human pickers</span>
          </div>
        </div>

        <div class="market-hero__art" aria-hidden="true">
          <div class="market-collage">
            <div class="market-card market-card--tomato">
              <span class="market-produce market-produce--tomato"></span>
              <strong>Tomatoes</strong>
              <small>Sweet &amp; ripe</small>
            </div>
            <div class="market-card market-card--lemon">
              <span class="market-produce market-produce--lemon"></span>
              <strong>Lemons</strong>
              <small>New season</small>
            </div>
            <div class="market-card market-card--greens">
              <span class="market-produce market-produce--leaf"></span>
              <strong>Greens</strong>
              <small>Picked today</small>
            </div>
            <div class="market-card market-card--note">
              <span>From the market</span>
              <strong>Picked this morning.<br />Delivered tonight.</strong>
            </div>
          </div>

          <div class="market-slot">
            <span class="market-slot__dot"></span>
            <div>
              <span>Next delivery</span>
              <strong>Today · 5–7pm</strong>
            </div>
            <span class="market-slot__count">3 slots left</span>
          </div>
        </div>
      </div>
    </section>

    <section id="shop" class="market-section market-categories">
      <div class="market-inner">
        <div class="market-section-head">
          <div>
            <p class="market-kicker">Shop by aisle</p>
            <h2 class="market-h2">A little bit<br /><em>of everything.</em></h2>
          </div>
          <p class="market-copy">
            The everyday essentials, the nice-to-haves, and the things you did not know you needed
            until you saw them.
          </p>
        </div>

        <div class="market-categories__grid">
          <a
            v-for="category in categories"
            :key="category.label"
            href="#products"
            class="market-cat"
          >
            <span class="market-cat__icon"><q-icon :name="category.icon" size="22px" /></span>
            <span class="market-cat__label">{{ category.label }}</span>
            <span class="market-cat__note">{{ category.note }}</span>
            <span class="market-cat__arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <section id="products" class="market-section market-products">
      <div class="market-inner">
        <div class="market-section-head">
          <div>
            <p class="market-kicker">This week</p>
            <h2 class="market-h2">What looks<br /><em>good right now.</em></h2>
          </div>
          <p class="market-copy">
            A small rotating selection from the people who grow and make our food. If it is not good
            enough for our own table, it does not make the list.
          </p>
        </div>

        <div class="market-products__grid">
          <article v-for="product in products" :key="product.name" class="market-product">
            <div class="market-product__art">
              <span class="market-produce" :class="`market-produce--${product.art}`"></span>
              <span class="market-product__tag">{{ product.tag }}</span>
            </div>
            <div class="market-product__meta">
              <span>{{ product.unit }}</span>
              <span>{{ product.farm }}</span>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.note }}</p>
            <button type="button" class="market-add" @click="showNotice">
              Add to basket <span aria-hidden="true">+</span>
            </button>
          </article>
        </div>
      </div>
    </section>

    <section class="market-story">
      <div class="market-inner market-story__grid">
        <div class="market-story__art" aria-hidden="true">
          <span class="market-story__ring market-story__ring--one"></span>
          <span class="market-story__ring market-story__ring--two"></span>
          <span class="market-story__text">Eat<br />well.<br /><em>Stay.</em></span>
        </div>
        <div>
          <p class="market-kicker">Why Market Day</p>
          <h2 class="market-h2">The market,<br /><em>without the trip.</em></h2>
          <p class="market-copy market-copy--light">
            We started Market Day because the best food in the city was scattered across a dozen
            stalls, three traffic jams, and one very early Saturday. So we built a better way to
            bring it home.
          </p>
          <div class="market-values">
            <div>
              <span>01</span>
              <strong>Local first</strong>
              <p>We buy from growers and makers within reach whenever we can.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Packed with care</strong>
              <p>Reusable crates, paper bags, and no plastic where we can avoid it.</p>
            </div>
            <div>
              <span>03</span>
              <strong>No mystery</strong>
              <p>If something is not right, tell us. We will make it right.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="delivery" class="market-section market-delivery">
      <div class="market-inner market-delivery__grid">
        <div>
          <p class="market-kicker">Delivery</p>
          <h2 class="market-h2">Your Saturday,<br /><em>sorted.</em></h2>
          <p class="market-copy">
            Choose a slot that works for you. We pack in reusable crates and send a message when the
            rider is on the way.
          </p>
          <div class="market-slots">
            <button
              v-for="slot in slots"
              :key="slot.time"
              type="button"
              class="market-slot-option"
              :class="{ 'is-active': slot.active }"
            >
              <span>{{ slot.day }}</span>
              <strong>{{ slot.time }}</strong>
              <small>{{ slot.note }}</small>
            </button>
          </div>
        </div>

        <form class="market-form" @submit.prevent="showNotice">
          <div class="market-form__top">
            <span>Check your area</span>
            <span class="market-form__basket">Basket · 3</span>
          </div>
          <label>
            <span>Postal code or barangay</span>
            <input type="text" placeholder="e.g. 1103 or Poblacion" />
          </label>
          <label>
            <span>Email or phone</span>
            <input type="text" placeholder="Where should we confirm?" />
          </label>
          <label>
            <span>Notes for the rider</span>
            <textarea rows="3" placeholder="Gate code, landmark, preferred drop-off..."></textarea>
          </label>
          <button type="submit" class="market-btn market-btn--ink">
            Find my slot <span>→</span>
          </button>
          <p class="market-form__note">This is a concept study. Deliveries are not live.</p>
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

const concept = conceptBySlug('market-day')!;
const next = nextConcept('market-day');

const nav = [
  { label: 'Produce', href: '#products' },
  { label: 'Shop', href: '#shop' },
  { label: 'Delivery', href: '#delivery' },
];

const categories = [
  { label: 'Produce', note: 'Fruit & vegetables', icon: 'eco' },
  { label: 'Pantry', note: 'Rice, oil & staples', icon: 'shopping_basket' },
  { label: 'Dairy', note: 'Milk, eggs & cheese', icon: 'egg' },
  { label: 'Bakery', note: 'Bread & pastries', icon: 'bakery_dining' },
];

const products = [
  {
    name: 'Heirloom tomatoes',
    art: 'tomato',
    tag: 'Peak season',
    unit: '1 kg',
    farm: 'Local grower',
    note: 'Sweet, a little tart, and good enough to eat like an apple.',
  },
  {
    name: 'Meyer lemons',
    art: 'lemon',
    tag: 'New season',
    unit: '6 pcs',
    farm: 'Highland farm',
    note: 'Thin-skinned, floral, and made for everything from tea to roast chicken.',
  },
  {
    name: 'Market greens',
    art: 'leaf',
    tag: 'Picked today',
    unit: '1 bunch',
    farm: 'Neighborhood plot',
    note: 'A loose bunch of whatever is happiest right now. Wash, dress, done.',
  },
  {
    name: 'Chestnut mushrooms',
    art: 'mushroom',
    tag: 'Good with everything',
    unit: '250 g',
    farm: 'Small-batch grower',
    note: 'Meaty, earthy, and better than you expect from a Tuesday.',
  },
];

const slots = [
  { day: 'Today', time: '5–7pm', note: '3 slots left', active: true },
  { day: 'Tomorrow', time: '9–11am', note: '6 slots left', active: false },
  { day: 'Tomorrow', time: '2–4pm', note: '4 slots left', active: false },
];

function showNotice() {
  Notify.create({
    message: 'Market Day is a concept study — ordering is not live.',
    color: 'dark',
    position: 'bottom',
    timeout: 3500,
  });
}

useSeo({
  title: concept.metaTitle,
  description: concept.metaDescription,
  path: '/work/market-day',
  jsonLd: [
    conceptJsonLd(concept),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'Market Day', path: '/work/market-day' },
    ]),
  ],
});
</script>

<style scoped>
.market-inner {
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin-inline: auto;
}

.market-kicker {
  margin: 0 0 0.9rem;
  color: var(--cp-accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.market-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0.8rem 1.3rem;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease),
    transform var(--sz-dur-fast) var(--sz-ease);
}

.market-btn:hover {
  transform: translateY(-1px);
}

.market-btn--ink {
  background: var(--cp-ink);
  color: var(--cp-bg);
}

.market-btn--ink:hover {
  background: var(--cp-accent);
  color: #fff;
}

.market-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-bottom: 1px solid color-mix(in srgb, var(--cp-ink) 36%, transparent);
  padding-bottom: 0.15rem;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.market-link span {
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.market-link:hover span {
  transform: translateX(3px);
}

.market-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(3.5rem, 7vw, 6.5rem);
  background:
    radial-gradient(circle at 80% 16%, rgba(217, 79, 43, 0.1), transparent 28%),
    linear-gradient(160deg, #fbf5e9 0%, var(--cp-bg) 100%);
}

.market-leaf {
  position: absolute;
  border: 1px solid rgba(36, 59, 42, 0.14);
  border-radius: 60% 10% 60% 10%;
}

.market-leaf--one {
  top: 8%;
  right: 4%;
  width: 14rem;
  height: 14rem;
  transform: rotate(18deg);
}

.market-leaf--two {
  bottom: -2rem;
  left: -2rem;
  width: 10rem;
  height: 10rem;
  opacity: 0.6;
  transform: rotate(-24deg);
}

.market-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.market-title {
  max-width: 10ch;
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(3.1rem, 6.8vw, 7rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.92;
}

.market-title em {
  color: var(--cp-accent);
  font-weight: 400;
}

.market-lead {
  max-width: 50ch;
  margin: 1.5rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 66%, transparent);
  font-size: clamp(0.98rem, 1.2vw, 1.1rem);
  line-height: 1.7;
}

.market-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  align-items: center;
  margin-top: 2rem;
}

.market-hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
  margin-top: 2rem;
  color: color-mix(in srgb, var(--cp-ink) 56%, transparent);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.market-hero__trust span::before {
  content: '✓';
  margin-right: 0.35rem;
  color: var(--cp-accent);
}

.market-hero__art {
  position: relative;
}

.market-collage {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  padding: 1.2rem;
}

.market-card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 10rem;
  padding: 1rem;
  border: 1px solid rgba(36, 59, 42, 0.14);
  border-radius: 10px;
  background: #fffaf0;
  box-shadow: 0 22px 50px -42px rgba(36, 59, 42, 0.45);
}

.market-card:nth-child(1) {
  transform: rotate(-2deg);
}

.market-card:nth-child(2) {
  transform: rotate(2deg) translateY(1rem);
}

.market-card:nth-child(3) {
  transform: rotate(1.5deg) translateY(-0.5rem);
}

.market-card:nth-child(4) {
  transform: rotate(-1.5deg) translateY(0.7rem);
}

.market-card strong {
  margin-top: auto;
  font-family: var(--sz-font-display);
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.market-card small {
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.6rem;
}

.market-card--note {
  justify-content: flex-end;
  background: var(--cp-ink);
  color: var(--cp-bg);
}

.market-card--note span {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.market-card--note strong {
  font-size: 1.35rem;
  line-height: 1.05;
}

.market-produce {
  display: block;
  width: 3.8rem;
  height: 3.8rem;
}

.market-produce--tomato {
  border-radius: 50%;
  background: var(--cp-accent);
  box-shadow: inset -0.5rem -0.5rem 0 rgba(0, 0, 0, 0.1);
}

.market-produce--lemon {
  border-radius: 50% 45% 50% 45%;
  background: #e8c84a;
  transform: rotate(-12deg);
}

.market-produce--leaf {
  border: 2px solid var(--cp-ink);
  border-radius: 60% 10% 60% 10%;
  background: var(--cp-soft);
  transform: rotate(12deg);
}

.market-produce--mushroom {
  position: relative;
  width: 4.2rem;
  height: 3.4rem;
}

.market-produce--mushroom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 3.8rem;
  height: 1.8rem;
  border-radius: 50% 50% 18% 18%;
  background: #b58a63;
  transform: translateX(-50%);
}

.market-produce--mushroom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 1.4rem;
  height: 1.8rem;
  border-radius: 0 0 0.4rem 0.4rem;
  background: #efe0c8;
  transform: translateX(-50%);
}

.market-slot {
  position: absolute;
  right: -0.5rem;
  bottom: -1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(36, 59, 42, 0.14);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 18px 40px -32px rgba(36, 59, 42, 0.55);
}

.market-slot__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cp-accent);
  box-shadow: 0 0 0 4px rgba(217, 79, 43, 0.12);
}

.market-slot div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.market-slot span {
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.5rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.market-slot strong {
  font-size: 0.72rem;
  font-weight: 650;
}

.market-slot__count {
  margin-left: 0.5rem;
  padding-left: 0.7rem;
  border-left: 1px solid rgba(36, 59, 42, 0.14);
  color: var(--cp-accent) !important;
}

.market-section {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.market-section-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.market-h2 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.market-h2 em {
  color: var(--cp-accent);
  font-weight: 400;
}

.market-copy {
  max-width: 54ch;
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 64%, transparent);
  font-size: 0.92rem;
  line-height: 1.7;
}

.market-copy--light {
  color: rgba(255, 255, 255, 0.62);
}

.market-categories {
  background: var(--cp-bg);
}

.market-categories__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(36, 59, 42, 0.16);
}

.market-cat {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 12rem;
  padding: 1.3rem;
  border-right: 1px solid rgba(36, 59, 42, 0.12);
  transition: background var(--sz-dur-fast) var(--sz-ease);
}

.market-cat:first-child {
  padding-left: 0;
}

.market-cat:last-child {
  border-right: 0;
}

.market-cat:hover {
  background: rgba(255, 250, 240, 0.62);
}

.market-cat__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--cp-soft);
  color: var(--cp-ink);
}

.market-cat__label {
  margin-top: auto;
  font-family: var(--sz-font-display);
  font-size: clamp(1.5rem, 2.3vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.03em;
}

.market-cat__note {
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.68rem;
}

.market-cat__arrow {
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
  color: var(--cp-accent);
  font-size: 0.9rem;
}

.market-products {
  background: #fffaf0;
}

.market-products__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.market-product {
  display: flex;
  flex-direction: column;
  padding: 0.9rem;
  border: 1px solid rgba(36, 59, 42, 0.12);
  background: var(--cp-bg);
}

.market-product__art {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(36, 59, 42, 0.1);
  background:
    radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.7), transparent 40%), var(--cp-soft);
}

.market-product__tag {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  padding: 0.25rem 0.45rem;
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.8);
  color: var(--cp-ink);
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.market-product__meta {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  margin-top: 0.8rem;
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.52rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.market-product h3 {
  margin: 0.4rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.05;
}

.market-product p {
  margin: 0.45rem 0 1rem;
  color: color-mix(in srgb, var(--cp-ink) 60%, transparent);
  font-size: 0.74rem;
  line-height: 1.5;
}

.market-add {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.7rem;
  border: 0;
  border-top: 1px solid rgba(36, 59, 42, 0.14);
  background: transparent;
  color: var(--cp-ink);
  cursor: pointer;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.market-add span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: var(--cp-accent);
  color: #fff;
  font-size: 0.8rem;
  line-height: 1;
}

.market-story {
  padding-block: clamp(4rem, 8vw, 7rem);
  background: var(--cp-dark);
  color: var(--cp-bg);
}

.market-story__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.market-story__art {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.market-story__ring {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 50%;
}

.market-story__ring--one {
  width: 62%;
  height: 62%;
}

.market-story__ring--two {
  width: 96%;
  height: 96%;
}

.market-story__text {
  position: relative;
  z-index: 1;
  font-family: var(--sz-font-display);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.82;
  text-align: center;
}

.market-story__text em {
  color: #f0a58d;
  font-weight: 400;
}

.market-story .market-copy {
  margin-bottom: 2rem;
}

.market-values {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding-top: 1.25rem;
}

.market-values div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.market-values span {
  color: #f0a58d;
  font-family: var(--sz-font-mono);
  font-size: 0.6rem;
}

.market-values strong {
  font-family: var(--sz-font-display);
  font-size: 1.15rem;
  font-weight: 500;
}

.market-values p {
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  line-height: 1.5;
}

.market-delivery {
  background: var(--cp-bg);
}

.market-delivery__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.market-slots {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.6rem;
  margin-top: 1.8rem;
}

.market-slot-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem;
  border: 1px solid rgba(36, 59, 42, 0.16);
  border-radius: 8px;
  background: transparent;
  color: var(--cp-ink);
  cursor: pointer;
  text-align: left;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    border-color var(--sz-dur-fast) var(--sz-ease);
}

.market-slot-option.is-active,
.market-slot-option:hover {
  border-color: var(--cp-ink);
  background: var(--cp-soft);
}

.market-slot-option span {
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.market-slot-option strong {
  font-family: var(--sz-font-display);
  font-size: 1.15rem;
  font-weight: 500;
}

.market-slot-option small {
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.55rem;
}

.market-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(36, 59, 42, 0.14);
  border-radius: 12px;
  background: #fffaf0;
}

.market-form__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid rgba(36, 59, 42, 0.12);
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.market-form__basket {
  color: var(--cp-accent);
}

.market-form label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.market-form label > span {
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.market-form input,
.market-form textarea {
  width: 100%;
  padding: 0.65rem 0.7rem;
  border: 1px solid rgba(36, 59, 42, 0.16);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.6);
  color: var(--cp-ink);
  font: inherit;
  font-size: 0.85rem;
  outline: none;
}

.market-form input:focus,
.market-form textarea:focus {
  border-color: var(--cp-accent);
}

.market-form .market-btn {
  margin-top: 0.3rem;
}

.market-form__note {
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 44%, transparent);
  font-size: 0.62rem;
}

@media (max-width: 1023px) {
  .market-hero__grid,
  .market-story__grid,
  .market-delivery__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .market-hero__art {
    max-width: 34rem;
  }

  .market-section-head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .market-categories__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .market-cat:nth-child(2) {
    border-right: 0;
  }

  .market-cat:nth-child(3),
  .market-cat:nth-child(4) {
    border-top: 1px solid rgba(36, 59, 42, 0.12);
  }

  .market-cat:nth-child(3) {
    padding-left: 0;
  }

  .market-products__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .market-values {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.9rem;
  }
}

@media (max-width: 600px) {
  .market-collage {
    gap: 0.6rem;
    padding: 0.5rem;
  }

  .market-card {
    min-height: 8.5rem;
    padding: 0.8rem;
  }

  .market-card strong {
    font-size: 1.05rem;
  }

  .market-slot {
    right: 0;
    bottom: -1.5rem;
  }

  .market-categories__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .market-cat {
    min-height: 0;
    padding: 1rem 0;
    border-right: 0;
    border-top: 1px solid rgba(36, 59, 42, 0.12);
  }

  .market-cat:first-child {
    border-top: 0;
  }

  .market-products__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .market-slots {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
