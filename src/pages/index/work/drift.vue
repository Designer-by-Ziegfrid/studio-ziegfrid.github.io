<template>
  <ConceptFrame
    slug="drift"
    brand="Drift"
    tagline="The open road, simplified."
    :nav="nav"
    cta="Book a car"
    cta-href="#fleet"
    :palette="concept.palette"
    :next="next"
  >
    <section class="drift-hero">
      <div class="drift-hero__grid" aria-hidden="true"></div>
      <div class="drift-inner drift-hero__inner">
        <div class="drift-hero__copy">
          <p class="drift-kicker">Cebu · Philippines · Est. 2026</p>
          <h1 class="drift-title">Drive<br /><span>something</span><br />worth remembering.</h1>
          <p class="drift-lead">
            A small fleet of well-kept cars, a booking flow that takes less than a minute, and no
            counter queue at the end of it.
          </p>
          <div class="drift-hero__meta">
            <span>Free cancellation</span>
            <span>Unlimited miles</span>
            <span>24/7 support</span>
          </div>
        </div>

        <div class="drift-hero__art">
          <span class="drift-road"></span>
          <span class="drift-glow"></span>
          <svg class="drift-car" viewBox="0 0 800 300" fill="none">
            <path
              d="M80 210h70l40-50h120l80-40h130l70 40h100l50 50h30v28H80v-28Z"
              fill="currentColor"
              opacity=".14"
            />
            <path
              d="M90 210h66l42-52h118l78-39h128l68 39h102l50 52h28"
              stroke="currentColor"
              stroke-width="2.5"
              opacity=".7"
            />
            <path
              d="M320 120h40v42h-76l36-42Zm82-1h118l36 43H402v-43Z"
              fill="currentColor"
              opacity=".22"
            />
            <path d="M220 238h330" stroke="currentColor" stroke-width="2" opacity=".35" />
            <circle
              cx="232"
              cy="228"
              r="34"
              fill="#0b0b0b"
              stroke="currentColor"
              stroke-width="2"
            />
            <circle cx="232" cy="228" r="13" fill="currentColor" opacity=".5" />
            <circle
              cx="612"
              cy="228"
              r="34"
              fill="#0b0b0b"
              stroke="currentColor"
              stroke-width="2"
            />
            <circle cx="612" cy="228" r="13" fill="currentColor" opacity=".5" />
          </svg>
          <p class="drift-art-label">The long way home · 2026</p>
        </div>
      </div>

      <form class="drift-search" @submit.prevent="showNotice">
        <div class="drift-search__field">
          <span>Pick-up</span>
          <strong>Cebu City</strong>
        </div>
        <div class="drift-search__field">
          <span>From</span>
          <strong>12 October</strong>
        </div>
        <div class="drift-search__field">
          <span>To</span>
          <strong>16 October</strong>
        </div>
        <button type="submit" class="drift-btn drift-btn--red">Find your car <span>→</span></button>
      </form>
    </section>

    <section id="fleet" class="drift-section drift-fleet">
      <div class="drift-inner">
        <div class="drift-section-head">
          <div>
            <p class="drift-kicker drift-kicker--dark">The fleet</p>
            <h2 class="drift-h2">Pick your<br /><em>character.</em></h2>
          </div>
          <p class="drift-copy">
            Small enough to feel personal. Big enough to have a car for every kind of trip. Every
            vehicle is under three years old and cleaned between every booking.
          </p>
        </div>

        <div class="drift-vehicles">
          <article class="drift-vehicle">
            <div class="drift-vehicle__top">
              <span class="drift-vehicle__number">01</span>
              <span class="drift-vehicle__type">City</span>
            </div>
            <div class="drift-vehicle__art drift-vehicle__art--city">
              <svg viewBox="0 0 220 90" fill="none" aria-hidden="true">
                <path
                  d="M20 66h18l12-18h36l16-12h42l15 12h31l16 18h14v10H20V66Z"
                  fill="currentColor"
                  opacity=".16"
                />
                <path
                  d="M24 66h16l13-19h35l15-11h40l15 11h30l16 19h16"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="63"
                  cy="76"
                  r="9"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="166"
                  cy="76"
                  r="9"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>Cebu City</h3>
            <p>
              The easy one. Compact, automatic, and built for narrow streets and quick weekends.
            </p>
            <div class="drift-specs">
              <span>4 seats</span>
              <span>Automatic</span>
              <span>Petrol</span>
            </div>
            <a href="#reserve" class="drift-link">Choose this car <span>→</span></a>
          </article>

          <article class="drift-vehicle">
            <div class="drift-vehicle__top">
              <span class="drift-vehicle__number">02</span>
              <span class="drift-vehicle__type">Coast</span>
            </div>
            <div class="drift-vehicle__art drift-vehicle__art--coast">
              <svg viewBox="0 0 220 90" fill="none" aria-hidden="true">
                <path
                  d="M18 64h20l14-20h40l18-14h38l18 14h30l18 20h16v12H18V64Z"
                  fill="currentColor"
                  opacity=".16"
                />
                <path
                  d="M22 64h18l15-21h40l17-13h36l17 13h29l18 21h18"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M86 42h56l14 16H72l14-16Z" fill="currentColor" opacity=".22" />
                <circle
                  cx="64"
                  cy="76"
                  r="10"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="166"
                  cy="76"
                  r="10"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>Coast</h3>
            <p>
              An SUV for the road south. More room, more clearance, and a boot that fits the boards.
            </p>
            <div class="drift-specs">
              <span>5 seats</span>
              <span>Automatic</span>
              <span>Diesel</span>
            </div>
            <a href="#reserve" class="drift-link">Choose this car <span>→</span></a>
          </article>

          <article class="drift-vehicle">
            <div class="drift-vehicle__top">
              <span class="drift-vehicle__number">03</span>
              <span class="drift-vehicle__type">Open</span>
            </div>
            <div class="drift-vehicle__art drift-vehicle__art--open">
              <svg viewBox="0 0 220 90" fill="none" aria-hidden="true">
                <path
                  d="M20 68h30l18-18h40l20-10h28l20 10h34l16 18h10v8H20v-8Z"
                  fill="currentColor"
                  opacity=".16"
                />
                <path
                  d="M24 68h28l19-19h39l20-10h26l20 10h32l17 19h12"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M110 39h32l8 18H98l12-18Z" fill="currentColor" opacity=".26" />
                <circle
                  cx="66"
                  cy="78"
                  r="9"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="166"
                  cy="78"
                  r="9"
                  fill="#0b0b0b"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>Open</h3>
            <p>
              The one you book for the photos. A convertible for the coastal road and the long
              sunset.
            </p>
            <div class="drift-specs">
              <span>2 seats</span>
              <span>Manual</span>
              <span>Petrol</span>
            </div>
            <a href="#reserve" class="drift-link">Choose this car <span>→</span></a>
          </article>
        </div>
      </div>
    </section>

    <section id="how" class="drift-section drift-how">
      <div class="drift-inner drift-how__grid">
        <div>
          <p class="drift-kicker">How it works</p>
          <h2 class="drift-h2">Keys in<br /><em>three steps.</em></h2>
          <p class="drift-copy drift-copy--light">
            No counters. No queues. No “the system is down.” Just a clear path from your phone to
            the driver's seat.
          </p>
        </div>

        <div class="drift-steps">
          <div class="drift-step">
            <span>01</span>
            <h3>Choose your car</h3>
            <p>Pick a vehicle and a time. See what is included before you commit.</p>
          </div>
          <div class="drift-step">
            <span>02</span>
            <h3>We meet you</h3>
            <p>Airport, hotel, or the office. A real person, a quick check, and the keys.</p>
          </div>
          <div class="drift-step">
            <span>03</span>
            <h3>Go</h3>
            <p>Unlimited miles, 24/7 support, and a simple return when the trip is done.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="locations" class="drift-section drift-locations">
      <div class="drift-inner drift-locations__grid">
        <div>
          <p class="drift-kicker drift-kicker--dark">Locations</p>
          <h2 class="drift-h2">Three doors.<br /><em>One island.</em></h2>
          <p class="drift-copy">
            Pick up in the city, the airport, or the south. Drop off somewhere else if the road
            takes you further.
          </p>
          <a href="#reserve" class="drift-btn drift-btn--ink">Find a location <span>→</span></a>
        </div>

        <div class="drift-map" aria-hidden="true">
          <span class="drift-map__grid"></span>
          <span class="drift-map__coast"></span>
          <span class="drift-map__pin drift-map__pin--one"><i></i>Cebu City</span>
          <span class="drift-map__pin drift-map__pin--two"><i></i>Mactan</span>
          <span class="drift-map__pin drift-map__pin--three"><i></i>Moalboal</span>
          <span class="drift-map__route"></span>
          <span class="drift-map__label">12° N · 123° E</span>
        </div>
      </div>
    </section>

    <section id="reserve" class="drift-section drift-reserve">
      <div class="drift-inner drift-reserve__grid">
        <div>
          <p class="drift-kicker">Reserve</p>
          <h2 class="drift-h2">Tell us<br /><em>where you're going.</em></h2>
          <p class="drift-copy drift-copy--light">
            Send a few details and we will confirm availability. If the car you want is gone, we
            will tell you what else is on the lot.
          </p>
        </div>

        <form class="drift-form" @submit.prevent="showNotice">
          <div class="drift-form__row">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" autocomplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@example.com" autocomplete="email" />
            </label>
          </div>
          <div class="drift-form__row">
            <label>
              <span>Pick-up</span>
              <input type="text" placeholder="Cebu City" />
            </label>
            <label>
              <span>Drop-off</span>
              <input type="text" placeholder="Moalboal" />
            </label>
          </div>
          <div class="drift-form__row">
            <label>
              <span>From</span>
              <input type="text" placeholder="12 Oct" />
            </label>
            <label>
              <span>To</span>
              <input type="text" placeholder="16 Oct" />
            </label>
          </div>
          <label>
            <span>Anything else?</span>
            <textarea
              rows="3"
              placeholder="A child seat, an airport pickup, a long playlist..."
            ></textarea>
          </label>
          <button type="submit" class="drift-btn drift-btn--red">
            Request this car <span>→</span>
          </button>
          <p class="drift-form__note">This is a concept study. Reservations are not live.</p>
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

const concept = conceptBySlug('drift')!;
const next = nextConcept('drift');

const nav = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'How it works', href: '#how' },
  { label: 'Locations', href: '#locations' },
  { label: 'Reserve', href: '#reserve' },
];

function showNotice() {
  Notify.create({
    message: 'Drift is a concept study — reservations are not live.',
    color: 'dark',
    position: 'bottom',
    timeout: 3500,
  });
}

useSeo({
  title: concept.metaTitle,
  description: concept.metaDescription,
  path: '/work/drift',
  jsonLd: [
    conceptJsonLd(concept),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'Drift', path: '/work/drift' },
    ]),
  ],
});
</script>

<style scoped>
.drift-inner {
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin-inline: auto;
}

.drift-kicker {
  margin: 0 0 0.9rem;
  color: var(--cp-accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.drift-kicker--dark {
  color: var(--cp-accent);
}

.drift-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0.8rem 1.3rem;
  border: 1px solid transparent;
  border-radius: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease),
    border-color var(--sz-dur-fast) var(--sz-ease);
}

.drift-btn span {
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.drift-btn:hover span {
  transform: translateX(3px);
}

.drift-btn--red {
  background: var(--cp-accent);
  color: #fff;
}

.drift-btn--red:hover {
  background: #c62c21;
}

.drift-btn--ink {
  border-color: var(--cp-ink);
  background: var(--cp-ink);
  color: var(--cp-bg);
}

.drift-btn--ink:hover {
  background: var(--cp-accent);
  border-color: var(--cp-accent);
  color: #fff;
}

.drift-hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(3.5rem, 7vw, 6.5rem) clamp(2.5rem, 5vw, 4rem);
  background:
    radial-gradient(circle at 78% 18%, rgba(225, 58, 45, 0.2), transparent 30%),
    linear-gradient(160deg, #191919 0%, #101010 100%);
  color: #f3f0e8;
}

.drift-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.26;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 90px 90px;
  mask-image: linear-gradient(to bottom, #000, transparent 86%);
}

.drift-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.drift-title {
  max-width: 9ch;
  margin: 0;
  font-size: clamp(3.5rem, 8.4vw, 9rem);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 0.83;
  text-transform: uppercase;
}

.drift-title span {
  color: var(--cp-accent);
}

.drift-lead {
  max-width: 50ch;
  margin: 1.6rem 0 0;
  color: rgba(243, 240, 232, 0.66);
  font-size: clamp(0.98rem, 1.2vw, 1.1rem);
  line-height: 1.65;
}

.drift-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.drift-hero__meta span {
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(243, 240, 232, 0.2);
  color: rgba(243, 240, 232, 0.62);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.drift-hero__art {
  position: relative;
  min-height: 20rem;
  color: #f3f0e8;
}

.drift-road {
  position: absolute;
  right: -10%;
  bottom: 12%;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
}

.drift-glow {
  position: absolute;
  top: 22%;
  right: 8%;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background: var(--cp-accent);
  filter: blur(80px);
  opacity: 0.25;
}

.drift-car {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 32rem;
  margin-top: 3rem;
  color: #f3f0e8;
  transform: translateX(-6%);
}

.drift-art-label {
  position: relative;
  z-index: 1;
  margin: 0.4rem 0 0;
  color: rgba(243, 240, 232, 0.42);
  font-family: var(--sz-font-mono);
  font-size: 0.56rem;
  letter-spacing: 0.12em;
  text-align: right;
  text-transform: uppercase;
}

.drift-search {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr auto;
  gap: 1rem;
  align-items: center;
  width: min(100% - (var(--sz-gutter) * 2), 1180px);
  margin: clamp(2.5rem, 5vw, 4rem) auto 0;
  padding: 1rem 1.1rem;
  background: #f3f0e8;
  color: #181818;
}

.drift-search__field {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-right: 1rem;
  border-right: 1px solid rgba(24, 24, 24, 0.16);
}

.drift-search__field span {
  opacity: 0.48;
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.drift-search__field strong {
  font-size: 0.95rem;
  font-weight: 700;
}

.drift-section {
  padding-block: clamp(4rem, 8vw, 7rem);
}

.drift-section-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.drift-h2 {
  margin: 0;
  font-size: clamp(2.4rem, 5.6vw, 5.4rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 0.9;
  text-transform: uppercase;
}

.drift-h2 em {
  color: var(--cp-accent);
  font-style: normal;
}

.drift-copy {
  max-width: 54ch;
  margin: 0;
  color: rgba(24, 24, 24, 0.62);
  font-size: 0.92rem;
  line-height: 1.7;
}

.drift-copy--light {
  color: rgba(243, 240, 232, 0.62);
}

.drift-fleet {
  background: var(--cp-bg);
  color: var(--cp-ink);
}

.drift-vehicles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.drift-vehicle {
  display: flex;
  flex-direction: column;
  padding: 1.1rem;
  border: 1px solid rgba(24, 24, 24, 0.18);
  background: #f8f6f0;
}

.drift-vehicle__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(24, 24, 24, 0.12);
}

.drift-vehicle__number {
  color: var(--cp-accent);
  font-family: var(--sz-font-mono);
  font-size: 0.64rem;
}

.drift-vehicle__type {
  color: rgba(24, 24, 24, 0.48);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.drift-vehicle__art {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 10;
  margin-block: 1rem;
  border: 1px solid rgba(24, 24, 24, 0.1);
  color: #181818;
}

.drift-vehicle__art--city {
  background: linear-gradient(145deg, #e7e2d7, #d2c9b8);
}

.drift-vehicle__art--coast {
  background: linear-gradient(145deg, #dedbd2, #c5c1b5);
}

.drift-vehicle__art--open {
  background: linear-gradient(145deg, #e8c9c3, #dba49a);
}

.drift-vehicle__art svg {
  width: 84%;
}

.drift-vehicle h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
  text-transform: uppercase;
}

.drift-vehicle p {
  margin: 0.55rem 0 0.9rem;
  color: rgba(24, 24, 24, 0.62);
  font-size: 0.82rem;
  line-height: 1.55;
}

.drift-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.drift-specs span {
  padding: 0.28rem 0.5rem;
  border: 1px solid rgba(24, 24, 24, 0.16);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.drift-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(24, 24, 24, 0.16);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.drift-link span {
  color: var(--cp-accent);
  transition: transform var(--sz-dur-fast) var(--sz-ease);
}

.drift-link:hover span {
  transform: translateX(3px);
}

.drift-how {
  background: var(--cp-dark);
  color: #f3f0e8;
}

.drift-how__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.drift-steps {
  border-top: 1px solid rgba(243, 240, 232, 0.18);
}

.drift-step {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: 0.5rem 1rem;
  padding-block: 1.4rem;
  border-bottom: 1px solid rgba(243, 240, 232, 0.18);
}

.drift-step > span {
  color: var(--cp-accent);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
}

.drift-step h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.drift-step p {
  grid-column: 2;
  margin: -0.1rem 0 0;
  color: rgba(243, 240, 232, 0.6);
  font-size: 0.82rem;
  line-height: 1.55;
}

.drift-locations {
  background: var(--cp-bg);
  color: var(--cp-ink);
}

.drift-locations__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.drift-locations .drift-btn {
  margin-top: 1.5rem;
}

.drift-map {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid rgba(24, 24, 24, 0.18);
  background: #e4dfd4;
}

.drift-map__grid {
  position: absolute;
  inset: 0;
  opacity: 0.45;
  background-image:
    linear-gradient(rgba(24, 24, 24, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(24, 24, 24, 0.08) 1px, transparent 1px);
  background-size: 48px 48px;
}

.drift-map__coast {
  position: absolute;
  top: 10%;
  right: -12%;
  width: 74%;
  height: 120%;
  border: 1px solid rgba(24, 24, 24, 0.22);
  border-radius: 50%;
  background: #d4cfc3;
}

.drift-map__route {
  position: absolute;
  top: 32%;
  left: 28%;
  width: 46%;
  height: 34%;
  border-bottom: 1px dashed var(--cp-accent);
  border-left: 1px dashed var(--cp-accent);
  transform: skewX(-12deg);
}

.drift-map__pin {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #181818;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.drift-map__pin i {
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--cp-accent);
  box-shadow: 0 0 0 4px rgba(225, 58, 45, 0.15);
}

.drift-map__pin--one {
  top: 30%;
  left: 20%;
}

.drift-map__pin--two {
  top: 46%;
  right: 16%;
}

.drift-map__pin--three {
  bottom: 22%;
  left: 42%;
}

.drift-map__label {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: rgba(24, 24, 24, 0.4);
  font-family: var(--sz-font-mono);
  font-size: 0.56rem;
  letter-spacing: 0.1em;
}

.drift-reserve {
  background: var(--cp-dark);
  color: #f3f0e8;
}

.drift-reserve__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: start;
}

.drift-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(243, 240, 232, 0.18);
  background: rgba(255, 255, 255, 0.03);
}

.drift-form label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.drift-form label > span {
  color: rgba(243, 240, 232, 0.5);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.drift-form input,
.drift-form textarea {
  width: 100%;
  padding: 0.65rem 0.7rem;
  border: 1px solid rgba(243, 240, 232, 0.2);
  border-radius: 0;
  background: rgba(255, 255, 255, 0.04);
  color: #f3f0e8;
  font: inherit;
  font-size: 0.85rem;
  outline: none;
}

.drift-form input:focus,
.drift-form textarea:focus {
  border-color: var(--cp-accent);
}

.drift-form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.drift-form .drift-btn {
  margin-top: 0.3rem;
}

.drift-form__note {
  margin: 0;
  color: rgba(243, 240, 232, 0.42);
  font-size: 0.62rem;
}

@media (max-width: 1023px) {
  .drift-hero__inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .drift-hero__art {
    min-height: 15rem;
  }

  .drift-car {
    min-width: 0;
    margin-top: 1rem;
    transform: none;
  }

  .drift-section-head,
  .drift-how__grid,
  .drift-locations__grid,
  .drift-reserve__grid {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .drift-search {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .drift-search .drift-btn {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .drift-vehicles {
    grid-template-columns: minmax(0, 1fr);
  }

  .drift-search {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .drift-search__field:nth-child(3) {
    grid-column: 1 / -1;
    border-right: 0;
  }

  .drift-search__field {
    padding-bottom: 0.6rem;
  }

  .drift-form__row {
    grid-template-columns: minmax(0, 1fr);
  }

  .drift-title {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .drift-map {
    aspect-ratio: 1 / 1;
  }
}
</style>
