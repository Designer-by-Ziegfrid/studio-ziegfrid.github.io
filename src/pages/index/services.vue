<template>
  <q-page class="services-page">
    <section class="sz-section services-hero">
      <span class="services-hero__rule" aria-hidden="true"></span>
      <div class="sz-container services-hero__grid">
        <RevealOnScroll>
          <SectionLabel number="01" label="Services" />
          <h1 class="sz-h1 services-hero__title">
            Built around<br />
            <em class="sz-italic">your business.</em>
          </h1>
          <p class="sz-lead services-hero__lead">
            Strategy, design, and front-end engineering for businesses that have outgrown the
            template aisle. We shape the website around how you actually work — then build it
            properly.
          </p>
          <div class="services-hero__actions">
            <AppButton to="/contact" label="Start a project" arrow />
            <AppButton to="/work" label="See concept work" variant="ghost" />
          </div>
          <p class="services-hero__note">
            <span class="sz-status-dot" aria-hidden="true"></span>
            {{ SITE.availability }} · {{ SITE.responseTime }}
          </p>
        </RevealOnScroll>

        <RevealOnScroll class="services-index" :delay="100">
          <div class="services-index__top">
            <span>Capability index</span>
            <span>08 areas</span>
          </div>
          <div class="services-index__list">
            <div
              v-for="(service, index) in services"
              :key="service.title"
              class="services-index__row"
            >
              <span class="services-index__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <q-icon
                :name="service.icon"
                size="16px"
                class="services-index__icon"
                aria-hidden="true"
              />
              <span class="services-index__name">{{ service.title }}</span>
            </div>
          </div>
          <div class="services-index__foot">
            <span aria-hidden="true">✳</span>
            Most projects combine two to four of these. We will tell you what can wait.
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="sz-section services-list">
      <div class="sz-container">
        <RevealOnScroll class="services-list__head">
          <div>
            <SectionLabel number="02" label="Capabilities" />
            <h2 class="sz-h2">What we can<br /><em class="sz-italic">design and build.</em></h2>
          </div>
          <p class="sz-lead">
            Pick the pieces that make sense for your business. A focused site might need two. A
            growing operation might need all of them — eventually.
          </p>
        </RevealOnScroll>

        <div class="services-list__grid">
          <RevealOnScroll
            v-for="(service, index) in services"
            :key="service.title"
            as="article"
            class="service-card"
            :delay="(index % 2) * 70"
          >
            <div class="service-card__top">
              <span class="service-card__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <q-icon
                :name="service.icon"
                size="22px"
                class="service-card__icon"
                aria-hidden="true"
              />
            </div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__copy">{{ service.description }}</p>
            <ul class="service-card__items">
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="sz-section sz-section--dark services-engagements">
      <div class="sz-container">
        <RevealOnScroll class="services-engagements__head">
          <div>
            <SectionLabel number="03" label="Engagements" light />
            <h2 class="sz-h2">Four ways to<br /><em class="sz-italic">work together.</em></h2>
          </div>
          <p class="sz-lead">
            New site, considered redesign, a build that breaks the template ceiling, or ongoing care
            after launch. Every engagement is scoped after a conversation, not picked from a menu.
          </p>
        </RevealOnScroll>

        <div class="services-engagements__grid">
          <RevealOnScroll
            v-for="(engagement, index) in engagements"
            :key="engagement.name"
            as="article"
            class="engagement-card"
            :delay="index * 70"
          >
            <div class="engagement-card__top">
              <span class="engagement-card__name">{{ engagement.name }}</span>
              <span class="engagement-card__label">{{ engagement.label }}</span>
            </div>
            <p class="engagement-card__copy">{{ engagement.description }}</p>
            <div class="engagement-card__fit">
              <span>Best for</span>
              <strong>{{ engagement.bestFor }}</strong>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll class="services-engagements__foot">
          <p>
            <span aria-hidden="true">✳</span>
            No fixed packages. No surprise retainers. We will tell you what is possible at your
            budget, and what can wait until later.
          </p>
          <AppButton to="/contact" label="Talk through your project" variant="light" arrow />
        </RevealOnScroll>
      </div>
    </section>

    <section class="sz-section services-scope">
      <div class="sz-container services-scope__grid">
        <RevealOnScroll class="services-scope__intro">
          <SectionLabel number="04" label="Scoping" />
          <h2 class="sz-h2">The right size,<br /><em class="sz-italic">not the biggest.</em></h2>
          <p class="sz-lead">
            A website should be an investment, not an obligation. We scope around the outcome you
            need now, then plan the rest for when it makes sense.
          </p>
          <AppButton to="/contact" label="Talk about your budget" variant="ghost" arrow />
        </RevealOnScroll>

        <div class="services-scope__principles">
          <RevealOnScroll
            v-for="(principle, index) in scopingPrinciples"
            :key="principle.number"
            class="scope-principle"
            :delay="index * 80"
          >
            <span class="scope-principle__number">{{ principle.number }}</span>
            <div>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.description }}</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="sz-section sz-section--warm services-addons">
      <div class="sz-container services-addons__grid">
        <RevealOnScroll>
          <SectionLabel number="05" label="Add-ons" />
          <h2 class="sz-h2">Plug in<br /><em class="sz-italic">when it earns it.</em></h2>
          <p class="sz-lead services-addons__lead">
            These are not packages. They are capabilities we bring in when the business needs them,
            and leave out when it does not.
          </p>
          <p class="services-addons__note">
            <span aria-hidden="true">✳</span>
            If a feature does not help a customer or save you time, it does not belong in version
            one.
          </p>
        </RevealOnScroll>

        <RevealOnScroll class="services-addons__tags" :delay="100">
          <span v-for="(addOn, index) in addOns" :key="addOn" class="services-addons__tag">
            <span class="services-addons__tag-number">{{
              String(index + 1).padStart(2, '0')
            }}</span>
            {{ addOn }}
          </span>
        </RevealOnScroll>
      </div>
    </section>

    <CTASection />
  </q-page>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import CTASection from '@/components/home/CTASection.vue';
import { addOns, engagements, scopingPrinciples, services } from '@/data/services';
import { SITE } from '@/data/site';
import { breadcrumbJsonLd, professionalServiceJsonLd, useSeo } from '@/composables/useSeo';

useSeo({
  title: 'Services — Studio Ziegfrid',
  description:
    'Custom UI/UX design, front-end engineering, CMS, booking flows, e-commerce, integrations, performance, and care for businesses that do not fit a template.',
  path: '/services',
  jsonLd: [
    professionalServiceJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.url,
      },
      areaServed: 'Worldwide',
    })),
  ],
});
</script>

<style scoped>
.services-hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--sz-line);
}

.services-hero__rule {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 10px;
  opacity: 0.35;
  background-image: repeating-linear-gradient(
    90deg,
    var(--sz-line-strong) 0,
    var(--sz-line-strong) 1px,
    transparent 1px,
    transparent 28px
  );
}

.services-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.services-hero__title {
  max-width: 10ch;
}

.services-hero__lead {
  margin-top: 1.5rem;
}

.services-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.services-hero__note {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin: 1.6rem 0 0;
  color: var(--sz-ink-faint);
  font-size: 0.68rem;
  font-weight: 550;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.services-index {
  border: 1px solid var(--sz-line-strong);
  background: var(--sz-paper-warm);
  box-shadow: 0 30px 70px -60px rgba(22, 21, 19, 0.55);
}

.services-index__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid var(--sz-line);
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.services-index__list {
  display: flex;
  flex-direction: column;
}

.services-index__row {
  display: grid;
  grid-template-columns: 2rem 1.3rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: center;
  padding: 0.6rem 1.1rem;
  border-bottom: 1px solid var(--sz-line);
  transition:
    background var(--sz-dur-fast) var(--sz-ease),
    color var(--sz-dur-fast) var(--sz-ease);
}

.services-index__row:hover {
  background: var(--sz-paper-deep);
  color: var(--sz-accent-strong);
}

.services-index__number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.58rem;
}

.services-index__icon {
  color: var(--sz-ink-faint);
}

.services-index__name {
  font-family: var(--sz-font-display);
  font-size: clamp(1rem, 1.55vw, 1.25rem);
  font-weight: 500;
  letter-spacing: -0.02em;
}

.services-index__foot {
  padding: 0.9rem 1.1rem;
  color: var(--sz-ink-soft);
  font-size: 0.68rem;
  line-height: 1.5;
}

.services-index__foot span {
  margin-right: 0.35rem;
  color: var(--sz-accent-strong);
}

.services-list__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.services-list__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--sz-line-strong);
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.4rem, 3vw, 2.2rem) clamp(1.2rem, 3vw, 2.4rem);
  border-bottom: 1px solid var(--sz-line);
  transition: background var(--sz-dur-base) var(--sz-ease);
}

.service-card:nth-child(odd) {
  border-right: 1px solid var(--sz-line);
}

.service-card:hover {
  background: var(--sz-paper-warm);
}

.service-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.service-card__number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
}

.service-card__icon {
  color: var(--sz-ink-faint);
  transition: color var(--sz-dur-fast) var(--sz-ease);
}

.service-card:hover .service-card__icon {
  color: var(--sz-accent-strong);
}

.service-card__title {
  margin: 1.4rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.55rem, 2.7vw, 2.3rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.02;
}

.service-card__copy {
  max-width: 50ch;
  margin: 0.65rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.88rem;
  line-height: 1.6;
}

.service-card__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.service-card__items li {
  padding: 0.28rem 0.5rem;
  border: 1px solid var(--sz-line);
  border-radius: var(--sz-radius-pill);
  color: var(--sz-ink-faint);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.services-engagements__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.services-engagements__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  border: 1px solid rgba(247, 242, 232, 0.16);
  background: rgba(247, 242, 232, 0.16);
}

.engagement-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.5rem, 3vw, 2.4rem);
  background: var(--sz-dark);
}

.engagement-card__top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(247, 242, 232, 0.16);
}

.engagement-card__name {
  color: #ff8a6e;
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.engagement-card__label {
  color: rgba(247, 242, 232, 0.46);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.engagement-card h3 {
  margin: 1.5rem 0 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.8rem, 3.2vw, 2.8rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.engagement-card__copy {
  max-width: 52ch;
  margin: 0.75rem 0 0;
  color: rgba(247, 242, 232, 0.62);
  font-size: 0.88rem;
  line-height: 1.6;
}

.engagement-card__fit {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: auto;
  padding-top: 1.5rem;
}

.engagement-card__fit span {
  color: rgba(247, 242, 232, 0.4);
  font-size: 0.56rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.engagement-card__fit strong {
  color: rgba(247, 242, 232, 0.78);
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1.45;
}

.services-engagements__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding-top: 1.3rem;
  border-top: 1px solid rgba(247, 242, 232, 0.16);
}

.services-engagements__foot p {
  max-width: 62ch;
  margin: 0;
  color: rgba(247, 242, 232, 0.6);
  font-size: 0.78rem;
  line-height: 1.55;
}

.services-engagements__foot p span {
  margin-right: 0.35rem;
  color: #ff8a6e;
}

.services-scope__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.services-scope__intro {
  position: sticky;
  top: calc(var(--sz-header-height) + 2rem);
}

.services-scope__intro .sz-btn {
  margin-top: 1.6rem;
}

.services-scope__principles {
  border-top: 1px solid var(--sz-line-strong);
}

.scope-principle {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: 1rem;
  padding-block: clamp(1.4rem, 3vw, 2.2rem);
  border-bottom: 1px solid var(--sz-line);
}

.scope-principle__number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.68rem;
}

.scope-principle h3 {
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.02;
}

.scope-principle p {
  max-width: 58ch;
  margin: 0.5rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.88rem;
  line-height: 1.6;
}

.services-addons__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: start;
}

.services-addons__lead {
  margin-top: 1.5rem;
}

.services-addons__note {
  display: flex;
  gap: 0.4rem;
  max-width: 44ch;
  margin: 1.5rem 0 0;
  color: var(--sz-ink-faint);
  font-size: 0.74rem;
  line-height: 1.55;
}

.services-addons__note span {
  color: var(--sz-accent-strong);
}

.services-addons__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-content: flex-start;
}

.services-addons__tag {
  display: inline-flex;
  align-items: baseline;
  gap: 0.55rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid var(--sz-line);
  background: var(--sz-paper);
  color: var(--sz-ink-soft);
  font-size: 0.76rem;
}

.services-addons__tag-number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.55rem;
}

@media (max-width: 1023px) {
  .services-hero__grid,
  .services-list__head,
  .services-engagements__head,
  .services-scope__grid,
  .services-addons__grid {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .services-scope__intro {
    position: static;
  }

  .services-index {
    max-width: 38rem;
  }
}

@media (max-width: 767px) {
  .services-list__grid,
  .services-engagements__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .service-card:nth-child(odd) {
    border-right: 0;
  }

  .service-card {
    padding-inline: 0;
  }
}
</style>
