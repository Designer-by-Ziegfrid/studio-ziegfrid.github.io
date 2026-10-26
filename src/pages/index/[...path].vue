<template>
  <q-page class="not-found-page">
    <section class="sz-section not-found">
      <span class="not-found__number" aria-hidden="true">404</span>
      <div class="sz-container not-found__grid">
        <RevealOnScroll>
          <SectionLabel number="404" label="Off the pattern" />
          <h1 class="sz-h1 not-found__title">
            This page went<br />
            <em class="sz-italic">off the cutting table.</em>
          </h1>
          <p class="sz-lead not-found__lead">
            The link is broken, the page moved, or it never existed in the first place. No drama —
            let's get you back to something useful.
          </p>
          <div class="not-found__actions">
            <AppButton to="/" label="Back to home" arrow />
            <AppButton to="/work" label="Browse the work" variant="ghost" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll class="not-found__links" :delay="100">
          <p class="not-found__links-label">Try one of these</p>
          <router-link
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="not-found__link"
          >
            <span class="not-found__link-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ link.label }}</strong>
            <span class="not-found__link-arrow" aria-hidden="true">→</span>
          </router-link>
          <div class="not-found__foot">
            <span aria-hidden="true">✳</span>
            Still stuck? Email
            <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { SITE } from '@/data/site';
import { useSeo } from '@/composables/useSeo';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Concept work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About the studio', to: '/about' },
  { label: 'Start a project', to: '/contact' },
];

useSeo({
  title: 'Page not found — Studio Ziegfrid',
  description: 'The page you are looking for is not here. Browse the studio work or get in touch.',
  path: '/404',
  noindex: true,
});
</script>

<style scoped>
.not-found-page {
  background: var(--sz-paper);
}

.not-found {
  position: relative;
  overflow: hidden;
  min-height: 68vh;
  border-bottom: 1px solid var(--sz-line);
}

.not-found__number {
  position: absolute;
  top: 50%;
  right: -0.06em;
  color: transparent;
  font-family: var(--sz-font-display);
  font-size: clamp(18rem, 42vw, 42rem);
  font-weight: 500;
  letter-spacing: -0.1em;
  line-height: 0.7;
  opacity: 0.08;
  -webkit-text-stroke: 1px var(--sz-ink);
  transform: translateY(-50%);
  user-select: none;
}

.not-found__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.not-found__title {
  max-width: 12ch;
}

.not-found__lead {
  margin-top: 1.5rem;
}

.not-found__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.not-found__links {
  border-top: 1px solid var(--sz-line-strong);
}

.not-found__links-label {
  margin: 0 0 0.8rem;
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.not-found__link {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
  padding-block: 1rem;
  border-bottom: 1px solid var(--sz-line);
  transition:
    color var(--sz-dur-fast) var(--sz-ease),
    background var(--sz-dur-fast) var(--sz-ease);
}

.not-found__link:hover {
  background: var(--sz-paper-warm);
  color: var(--sz-accent-strong);
}

.not-found__link-number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.6rem;
}

.not-found__link strong {
  font-family: var(--sz-font-display);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.not-found__link-arrow {
  color: var(--sz-accent-strong);
}

.not-found__foot {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 1.2rem;
  color: var(--sz-ink-faint);
  font-size: 0.7rem;
  line-height: 1.5;
}

.not-found__foot > span {
  color: var(--sz-accent-strong);
}

.not-found__foot a {
  color: var(--sz-ink);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

@media (max-width: 1023px) {
  .not-found__grid {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }

  .not-found__links {
    max-width: 40rem;
  }
}

@media (max-width: 600px) {
  .not-found {
    min-height: 0;
  }

  .not-found__number {
    top: 30%;
    font-size: 18rem;
    opacity: 0.06;
  }
}
</style>
