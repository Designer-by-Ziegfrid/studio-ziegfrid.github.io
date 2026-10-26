<template>
  <ConceptFrame
    slug="fold"
    brand="fold."
    tagline="Fresh clothes, zero friction."
    :nav="nav"
    cta="Schedule a pickup"
    cta-href="#schedule"
    :palette="concept.palette"
    :next="next"
  >
    <section class="fold-hero">
      <span class="fold-blob fold-blob--one" aria-hidden="true"></span>
      <span class="fold-blob fold-blob--two" aria-hidden="true"></span>
      <span class="fold-blob fold-blob--three" aria-hidden="true"></span>

      <div class="fold-inner fold-hero__grid">
        <div class="fold-hero__copy">
          <p class="fold-kicker">Makati · Same-day pickup · 7 days a week</p>
          <h1 class="fold-title">Fresh clothes.<br /><em>Zero friction.</em></h1>
          <p class="fold-lead">
            Pickup, wash, fold, delivered. A laundry service that fits into your week instead of
            taking it over. Track every step from your phone.
          </p>
          <div class="fold-actions">
            <a href="#schedule" class="fold-btn fold-btn--blue">Schedule a pickup <span>→</span></a>
            <a href="#how" class="fold-link">See how it works <span>→</span></a>
          </div>
          <div class="fold-hero__trust">
            <span>Free pickup &amp; delivery</span>
            <span>48-hour turnaround</span>
            <span>No minimum order</span>
          </div>
        </div>

        <div class="fold-hero__art">
          <div class="fold-tracker">
            <div class="fold-tracker__top">
              <span>Order #204</span>
              <span class="fold-live">Live</span>
            </div>
            <h2>Out for delivery</h2>
            <p>Arriving between 4–6pm today.</p>

            <div class="fold-progress">
              <span class="is-done"></span>
              <span class="is-done"></span>
              <span class="is-active"></span>
              <span></span>
            </div>
            <div class="fold-progress__labels">
              <span>Picked up</span>
              <span>Washed</span>
              <span>On the way</span>
              <span>Delivered</span>
            </div>

            <div class="fold-tracker__items">
              <span>2 shirts</span>
              <span>1 dress</span>
              <span>3 towels</span>
            </div>

            <div class="fold-tracker__foot">
              <span>8.4 kg · Wash &amp; fold</span>
              <span class="fold-tracker__avatar">R</span>
            </div>
          </div>

          <div class="fold-chip">
            <span class="fold-chip__dot"></span>
            <div>
              <span>Next pickup</span>
              <strong>Tomorrow · 9–11am</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="fold-section fold-services">
      <div class="fold-inner">
        <div class="fold-section-head">
          <div>
            <p class="fold-kicker">Services</p>
            <h2 class="fold-h2">Choose your<br /><em>kind of clean.</em></h2>
          </div>
          <p class="fold-copy">
            Everyday laundry, delicate pieces, and the linen cupboard you have been avoiding. Pick
            what you need; we will handle the rest.
          </p>
        </div>

        <div class="fold-services__grid">
          <article class="fold-service">
            <span class="fold-service__icon"
              ><q-icon name="local_laundry_service" size="22px"
            /></span>
            <span class="fold-service__label">Everyday</span>
            <h3>Wash &amp; fold</h3>
            <p>Clothes washed, dried, folded, and returned ready for the drawer.</p>
            <ul>
              <li>48-hour turnaround</li>
              <li>Gentle detergent</li>
              <li>Separate lights &amp; darks</li>
            </ul>
          </article>

          <article class="fold-service fold-service--featured">
            <span class="fold-service__icon"><q-icon name="dry_cleaning" size="22px" /></span>
            <span class="fold-service__label">Careful</span>
            <h3>Dry clean</h3>
            <p>For the pieces that need a gentler pair of hands and a little more attention.</p>
            <ul>
              <li>Delicate fabrics</li>
              <li>Stain treatment</li>
              <li>Pressed &amp; bagged</li>
            </ul>
          </article>

          <article class="fold-service">
            <span class="fold-service__icon"><q-icon name="bed" size="22px" /></span>
            <span class="fold-service__label">Home</span>
            <h3>Linen &amp; home</h3>
            <p>Sheets, duvets, and towels collected, refreshed, and returned neatly.</p>
            <ul>
              <li>Bedding &amp; towels</li>
              <li>Bulk-friendly</li>
              <li>Weekly options</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="how" class="fold-section fold-how">
      <div class="fold-inner">
        <div class="fold-section-head">
          <div>
            <p class="fold-kicker">How it works</p>
            <h2 class="fold-h2">Four steps.<br /><em>Then it's done.</em></h2>
          </div>
          <p class="fold-copy">
            No bags to buy, no counters to visit, no wondering where your favourite shirt went.
          </p>
        </div>

        <div class="fold-steps">
          <div class="fold-step">
            <span class="fold-step__number">01</span>
            <h3>Bag it</h3>
            <p>Put your laundry in any bag. We will bring a proper one on the first pickup.</p>
          </div>
          <div class="fold-step">
            <span class="fold-step__number">02</span>
            <h3>Book it</h3>
            <p>Choose a pickup window and service. Two taps, no phone call.</p>
          </div>
          <div class="fold-step">
            <span class="fold-step__number">03</span>
            <h3>We collect</h3>
            <p>A real person arrives on time, weighs your bag, and sends a confirmation.</p>
          </div>
          <div class="fold-step">
            <span class="fold-step__number">04</span>
            <h3>Delivered</h3>
            <p>Fresh, folded, and back at your door. Track every step in between.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="fold-habit">
      <div class="fold-inner fold-habit__grid">
        <div>
          <p class="fold-kicker">The weekly habit</p>
          <h2 class="fold-h2">Set it once.<br /><em>Keep the rhythm.</em></h2>
          <p class="fold-copy fold-copy--light">
            Choose a recurring pickup and forget the laundry pile exists. Pause, skip, or change the
            schedule whenever life changes.
          </p>
          <a href="#schedule" class="fold-btn fold-btn--light"
            >Set up a recurring pickup <span>→</span></a
          >
        </div>

        <div class="fold-calendar" aria-hidden="true">
          <div class="fold-calendar__top">
            <span>This week</span>
            <span>Oct 12–18</span>
          </div>
          <div class="fold-calendar__grid">
            <span v-for="day in days" :key="day.label" :class="{ 'is-active': day.active }">
              <small>{{ day.label }}</small>
              <strong>{{ day.date }}</strong>
              <i v-if="day.active"></i>
            </span>
          </div>
          <div class="fold-calendar__foot">
            <span class="fold-calendar__dot"></span>
            Pickup · Wednesday, 9–11am
          </div>
        </div>
      </div>
    </section>

    <section id="areas" class="fold-section fold-areas">
      <div class="fold-inner fold-areas__grid">
        <div>
          <p class="fold-kicker">Areas</p>
          <h2 class="fold-h2">Close to<br /><em>your doorstep.</em></h2>
          <p class="fold-copy">
            Currently serving Makati, BGC, and the neighborhoods in between. Expanding outward as
            the bags come in.
          </p>
          <a href="#schedule" class="fold-link">Check your area <span>→</span></a>
        </div>

        <div class="fold-areas__list">
          <span>Makati CBD</span>
          <span>Legazpi Village</span>
          <span>Salcedo Village</span>
          <span>Poblacion</span>
          <span>BGC</span>
          <span>Rockwell</span>
          <span>San Lorenzo</span>
          <span>Bel-Air</span>
        </div>
      </div>
    </section>

    <section id="schedule" class="fold-section fold-schedule">
      <div class="fold-inner fold-schedule__grid">
        <div>
          <p class="fold-kicker">Schedule</p>
          <h2 class="fold-h2">Let's take<br /><em>the pile.</em></h2>
          <p class="fold-copy">
            Tell us when to come by. We will confirm the window and send a reminder before pickup.
          </p>
          <div class="fold-schedule__note">
            <span class="fold-chip__dot"></span>
            Same-day pickup available before 10am.
          </div>
        </div>

        <form class="fold-form" @submit.prevent="showNotice">
          <div class="fold-form__row">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" autocomplete="name" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" placeholder="+63 9XX XXX XXXX" autocomplete="tel" />
            </label>
          </div>
          <label>
            <span>Address</span>
            <input type="text" placeholder="Street, barangay, city" autocomplete="street-address" />
          </label>
          <div class="fold-form__row">
            <label>
              <span>Pickup date</span>
              <input type="text" placeholder="Tomorrow" />
            </label>
            <label>
              <span>Service</span>
              <select>
                <option>Wash &amp; fold</option>
                <option>Dry clean</option>
                <option>Linen &amp; home</option>
              </select>
            </label>
          </div>
          <label>
            <span>Anything we should know?</span>
            <textarea
              rows="3"
              placeholder="A gate code, a delicate item, a preferred window..."
            ></textarea>
          </label>
          <button type="submit" class="fold-btn fold-btn--blue">
            Request pickup <span>→</span>
          </button>
          <p class="fold-form__note">This is a concept study. Pickups are not live.</p>
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

const concept = conceptBySlug('fold')!;
const next = nextConcept('fold');

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'Areas', href: '#areas' },
  { label: 'Schedule', href: '#schedule' },
];

const days = [
  { label: 'Mon', date: '12', active: false },
  { label: 'Tue', date: '13', active: false },
  { label: 'Wed', date: '14', active: true },
  { label: 'Thu', date: '15', active: false },
  { label: 'Fri', date: '16', active: false },
  { label: 'Sat', date: '17', active: false },
  { label: 'Sun', date: '18', active: false },
];

function showNotice() {
  Notify.create({
    message: 'Fold is a concept study — pickups are not live.',
    color: 'dark',
    position: 'bottom',
    timeout: 3500,
  });
}

useSeo({
  title: concept.metaTitle,
  description: concept.metaDescription,
  path: '/work/fold',
  jsonLd: [
    conceptJsonLd(concept),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'Fold', path: '/work/fold' },
    ]),
  ],
});
</script>

<style scoped>
.fold-inner {
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin-inline: auto;
}

.fold-kicker {
  margin: 0 0 0.9rem;
  color: var(--cp-accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.fold-btn {
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

.fold-btn:hover {
  transform: translateY(-1px);
}

.fold-btn--blue {
  background: var(--cp-accent);
  color: #fff;
}

.fold-btn--blue:hover {
  background: #1e55dc;
}

.fold-btn--light {
  border-color: rgba(255, 255, 255, 0.34);
  color: #fff;
}

.fold-btn--light:hover {
  background: #fff;
  color: var(--cp-ink);
}

.fold-link {
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

.fold-link span {
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.fold-link:hover span {
  transform: translateX(3px);
}

.fold-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(3.5rem, 7vw, 6.5rem);
  background:
    radial-gradient(circle at 82% 16%, rgba(201, 238, 228, 0.72), transparent 28%),
    linear-gradient(160deg, #fbfdfe 0%, var(--cp-bg) 100%);
}

.fold-blob {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  background: var(--cp-soft);
  opacity: 0.55;
}

.fold-blob--one {
  top: 12%;
  right: 8%;
  width: 12rem;
  height: 12rem;
}

.fold-blob--two {
  right: 30%;
  bottom: 8%;
  width: 5rem;
  height: 5rem;
  opacity: 0.4;
}

.fold-blob--three {
  top: 44%;
  left: 6%;
  width: 3rem;
  height: 3rem;
  opacity: 0.3;
}

.fold-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.fold-title {
  max-width: 11ch;
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(3.1rem, 6.8vw, 7rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.92;
}

.fold-title em {
  color: var(--cp-accent);
  font-weight: 400;
}

.fold-lead {
  max-width: 50ch;
  margin: 1.5rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 66%, transparent);
  font-size: clamp(0.98rem, 1.2vw, 1.1rem);
  line-height: 1.7;
}

.fold-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  align-items: center;
  margin-top: 2rem;
}

.fold-hero__trust {
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

.fold-hero__trust span::before {
  content: '✓';
  margin-right: 0.35rem;
  color: var(--cp-accent);
}

.fold-hero__art {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.fold-tracker {
  width: min(100%, 380px);
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid rgba(18, 50, 92, 0.14);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 30px 70px -55px rgba(18, 50, 92, 0.6);
  backdrop-filter: blur(8px);
}

.fold-tracker__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.fold-live {
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  background: var(--cp-soft);
  color: var(--cp-ink);
  font-size: 0.52rem;
}

.fold-tracker h2 {
  margin: 1.3rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.8rem, 3.4vw, 2.7rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.fold-tracker > p {
  margin: 0.45rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 58%, transparent);
  font-size: 0.82rem;
}

.fold-progress {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.35rem;
  margin-top: 1.5rem;
}

.fold-progress span {
  display: block;
  height: 5px;
  border-radius: 999px;
  background: rgba(18, 50, 92, 0.12);
}

.fold-progress .is-done {
  background: var(--cp-ink);
}

.fold-progress .is-active {
  background: var(--cp-accent);
}

.fold-progress__labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.55rem;
  color: color-mix(in srgb, var(--cp-ink) 42%, transparent);
  font-size: 0.52rem;
}

.fold-tracker__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(18, 50, 92, 0.1);
}

.fold-tracker__items span {
  padding: 0.28rem 0.5rem;
  border: 1px solid rgba(18, 50, 92, 0.14);
  border-radius: 999px;
  color: color-mix(in srgb, var(--cp-ink) 64%, transparent);
  font-size: 0.56rem;
}

.fold-tracker__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.6rem;
}

.fold-tracker__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: var(--cp-accent);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 700;
}

.fold-chip {
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(18, 50, 92, 0.12);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 18px 40px -32px rgba(18, 50, 92, 0.55);
}

.fold-chip__dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cp-accent);
  box-shadow: 0 0 0 4px rgba(47, 108, 255, 0.12);
}

.fold-chip div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.fold-chip span {
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.5rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.fold-chip strong {
  font-size: 0.72rem;
  font-weight: 650;
}

.fold-section {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.fold-section-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.fold-h2 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.fold-h2 em {
  color: var(--cp-accent);
  font-weight: 400;
}

.fold-copy {
  max-width: 54ch;
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 64%, transparent);
  font-size: 0.92rem;
  line-height: 1.7;
}

.fold-copy--light {
  color: rgba(255, 255, 255, 0.62);
}

.fold-services {
  background: var(--cp-bg);
}

.fold-services__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.fold-service {
  display: flex;
  flex-direction: column;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid rgba(18, 50, 92, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.62);
}

.fold-service--featured {
  background: var(--cp-ink);
  color: #fff;
}

.fold-service__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--cp-soft);
  color: var(--cp-ink);
}

.fold-service--featured .fold-service__icon {
  background: var(--cp-accent);
  color: #fff;
}

.fold-service__label {
  margin-top: 1.5rem;
  color: color-mix(in srgb, var(--cp-ink) 48%, transparent);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.fold-service--featured .fold-service__label {
  color: rgba(255, 255, 255, 0.5);
}

.fold-service h3 {
  margin: 0.4rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.7rem, 2.6vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.fold-service p {
  margin: 0.65rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 62%, transparent);
  font-size: 0.84rem;
  line-height: 1.6;
}

.fold-service--featured p {
  color: rgba(255, 255, 255, 0.6);
}

.fold-service ul {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 1.2rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid rgba(18, 50, 92, 0.12);
  list-style: none;
}

.fold-service--featured ul {
  border-color: rgba(255, 255, 255, 0.14);
}

.fold-service li {
  position: relative;
  padding-left: 0.9rem;
  color: color-mix(in srgb, var(--cp-ink) 56%, transparent);
  font-size: 0.68rem;
}

.fold-service--featured li {
  color: rgba(255, 255, 255, 0.56);
}

.fold-service li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--cp-accent);
}

.fold-how {
  background: #eef8fb;
}

.fold-steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid rgba(18, 50, 92, 0.16);
}

.fold-step {
  position: relative;
  padding: 1.5rem 1.5rem 0 0;
}

.fold-step:not(:last-child) {
  border-right: 1px solid rgba(18, 50, 92, 0.12);
}

.fold-step:not(:first-child) {
  padding-left: 1.5rem;
}

.fold-step__number {
  color: var(--cp-accent);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
}

.fold-step h3 {
  margin: 1.1rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 500;
  letter-spacing: -0.03em;
}

.fold-step p {
  margin: 0.5rem 0 0;
  color: color-mix(in srgb, var(--cp-ink) 60%, transparent);
  font-size: 0.78rem;
  line-height: 1.55;
}

.fold-habit {
  padding-block: clamp(4rem, 8vw, 7rem);
  background: var(--cp-dark);
  color: #fff;
}

.fold-habit__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.fold-habit .fold-copy {
  margin-bottom: 1.5rem;
}

.fold-calendar {
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
}

.fold-calendar__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.fold-calendar__grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.35rem;
  margin-top: 1rem;
}

.fold-calendar__grid > span {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.55rem 0.2rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.58);
}

.fold-calendar__grid > span.is-active {
  background: var(--cp-accent);
  color: #fff;
}

.fold-calendar__grid small {
  font-size: 0.48rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.fold-calendar__grid strong {
  font-family: var(--sz-font-display);
  font-size: 1rem;
  font-weight: 500;
}

.fold-calendar__grid i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
}

.fold-calendar__foot {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.62rem;
}

.fold-calendar__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8be0c4;
}

.fold-areas {
  background: var(--cp-bg);
}

.fold-areas__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.fold-areas .fold-copy {
  margin-bottom: 1.2rem;
}

.fold-areas__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.fold-areas__list span {
  padding: 0.6rem 0.9rem;
  border: 1px solid rgba(18, 50, 92, 0.14);
  border-radius: 999px;
  color: color-mix(in srgb, var(--cp-ink) 68%, transparent);
  font-size: 0.7rem;
  font-weight: 550;
}

.fold-areas__list span::before {
  content: '✓';
  margin-right: 0.4rem;
  color: var(--cp-accent);
}

.fold-schedule {
  background: #eef8fb;
}

.fold-schedule__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.fold-schedule .fold-copy {
  margin-bottom: 1.4rem;
}

.fold-schedule__note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.75rem;
  border: 1px solid rgba(18, 50, 92, 0.12);
  border-radius: 999px;
  background: #fff;
  font-size: 0.62rem;
  font-weight: 600;
}

.fold-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(18, 50, 92, 0.12);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 30px 70px -60px rgba(18, 50, 92, 0.55);
}

.fold-form label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.fold-form label > span {
  color: color-mix(in srgb, var(--cp-ink) 54%, transparent);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.fold-form input,
.fold-form textarea,
.fold-form select {
  width: 100%;
  padding: 0.65rem 0.7rem;
  border: 1px solid rgba(18, 50, 92, 0.14);
  border-radius: 8px;
  background: #fbfdfe;
  color: var(--cp-ink);
  font: inherit;
  font-size: 0.85rem;
  outline: none;
}

.fold-form input:focus,
.fold-form textarea:focus,
.fold-form select:focus {
  border-color: var(--cp-accent);
}

.fold-form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.fold-form .fold-btn {
  margin-top: 0.3rem;
}

.fold-form__note {
  margin: 0;
  color: color-mix(in srgb, var(--cp-ink) 44%, transparent);
  font-size: 0.62rem;
}

@media (max-width: 1023px) {
  .fold-hero__grid,
  .fold-habit__grid,
  .fold-areas__grid,
  .fold-schedule__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .fold-hero__art {
    justify-content: flex-start;
  }

  .fold-tracker {
    max-width: 380px;
  }

  .fold-chip {
    left: 1.5rem;
  }

  .fold-section-head {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .fold-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fold-step:nth-child(2) {
    border-right: 0;
  }

  .fold-step:nth-child(3),
  .fold-step:nth-child(4) {
    border-top: 1px solid rgba(18, 50, 92, 0.12);
  }

  .fold-step:nth-child(3) {
    padding-left: 0;
  }
}

@media (max-width: 767px) {
  .fold-services__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .fold-steps {
    grid-template-columns: minmax(0, 1fr);
  }

  .fold-step {
    padding: 1.2rem 0;
    border-right: 0;
    border-top: 1px solid rgba(18, 50, 92, 0.12);
  }

  .fold-step:first-child {
    border-top: 0;
  }

  .fold-step:not(:first-child) {
    padding-left: 0;
  }

  .fold-calendar__grid {
    gap: 0.2rem;
  }

  .fold-calendar__grid strong {
    font-size: 0.82rem;
  }

  .fold-form__row {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
