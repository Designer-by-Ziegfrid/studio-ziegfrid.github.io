<template>
  <div id="top" class="concept-page" :data-concept="slug" :style="styleVars">
    <div class="concept-utility">
      <router-link to="/work" class="concept-utility__back">← All concepts</router-link>
      <span class="concept-utility__note">Concept study · Studio Ziegfrid · Fictional brand</span>
      <router-link to="/contact" class="concept-utility__studio">Start a project</router-link>
    </div>

    <header class="concept-nav">
      <a :href="`#${slug}-top`" class="concept-nav__brand">{{ brand }}</a>

      <nav class="concept-nav__links" aria-label="Concept navigation">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <a :href="ctaHref" class="concept-nav__cta">{{ cta }}</a>

      <button
        class="concept-nav__menu"
        type="button"
        aria-label="Open concept menu"
        @click="menuOpen = true"
      >
        <span></span>
        <span></span>
      </button>
    </header>

    <q-dialog v-model="menuOpen" position="top" class="concept-menu-dialog">
      <div class="concept-menu">
        <div class="concept-menu__top">
          <span class="concept-menu__brand">{{ brand }}</span>
          <button type="button" class="concept-menu__close" @click="menuOpen = false">Close</button>
        </div>
        <nav class="concept-menu__links" aria-label="Concept mobile navigation">
          <a v-for="item in nav" :key="item.href" :href="item.href" @click="menuOpen = false">{{
            item.label
          }}</a>
        </nav>
        <a :href="ctaHref" class="concept-menu__cta" @click="menuOpen = false">{{ cta }}</a>
        <router-link to="/work" class="concept-menu__back" @click="menuOpen = false"
          >← Back to Studio Ziegfrid</router-link
        >
      </div>
    </q-dialog>

    <main :id="`${slug}-top`">
      <slot />
    </main>

    <footer class="concept-footer">
      <div class="concept-footer__top">
        <span class="concept-footer__brand">{{ brand }}</span>
        <span class="concept-footer__tagline">{{ tagline }}</span>
      </div>

      <div class="concept-footer__grid">
        <p class="concept-footer__note">
          This is a self-directed concept study. The brand is fictional; the design and front-end
          build are real.
        </p>
        <div class="concept-footer__links">
          <router-link to="/work">All concepts</router-link>
          <router-link :to="`/work/${next.slug}`">Next: {{ next.name }} →</router-link>
          <router-link to="/contact">Start a project</router-link>
        </div>
      </div>

      <div class="concept-footer__bottom">
        <span>Concept by Studio Ziegfrid</span>
        <span>Made to measure · Not a template</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Concept, ConceptPalette } from '@/data/concepts';

const props = defineProps<{
  slug: string;
  brand: string;
  tagline: string;
  nav: Array<{ label: string; href: string }>;
  cta: string;
  ctaHref: string;
  palette: ConceptPalette;
  next: Concept;
}>();

const menuOpen = ref(false);

const styleVars = computed(() => ({
  '--cp-bg': props.palette.bg,
  '--cp-ink': props.palette.ink,
  '--cp-accent': props.palette.accent,
  '--cp-soft': props.palette.soft,
  '--cp-dark': props.palette.dark,
}));
</script>

<style scoped>
.concept-page {
  min-height: 100vh;
  background: var(--cp-bg);
  color: var(--cp-ink);
}

.concept-utility {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem var(--sz-gutter);
  background: var(--cp-dark);
  color: rgba(255, 255, 255, 0.62);
  font-family: var(--sz-font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.concept-utility a {
  color: rgba(255, 255, 255, 0.82);
  transition: color var(--sz-dur-fast) var(--sz-ease);
}

.concept-utility a:hover {
  color: #fff;
}

.concept-utility__note {
  text-align: center;
}

.concept-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 70px;
  padding-inline: var(--sz-gutter);
  border-bottom: 1px solid color-mix(in srgb, var(--cp-ink) 14%, transparent);
  background: color-mix(in srgb, var(--cp-bg) 90%, transparent);
  backdrop-filter: blur(12px);
}

.concept-nav__brand {
  flex: 0 0 auto;
  font-size: 1.45rem;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1;
}

.concept-nav__links {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2rem);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.concept-nav__links a {
  position: relative;
  padding-block: 0.35rem;
  opacity: 0.66;
  transition: opacity var(--sz-dur-fast) var(--sz-ease);
}

.concept-nav__links a:hover {
  opacity: 1;
}

.concept-nav__links a::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--sz-dur-base) var(--sz-ease);
}

.concept-nav__links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.concept-nav__cta {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--cp-accent);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.concept-nav__menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: 1px solid color-mix(in srgb, var(--cp-ink) 24%, transparent);
  border-radius: 50%;
  background: transparent;
  color: inherit;
}

.concept-nav__menu span {
  display: block;
  width: 14px;
  height: 1px;
  margin-inline: auto;
  background: currentColor;
}

/* Brand-specific nav typography */
.concept-page[data-concept='aster-bay'] .concept-nav__brand {
  font-family: var(--sz-font-display);
}

.concept-page[data-concept='drift'] .concept-nav__brand {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.concept-page[data-concept='drift'] .concept-nav__cta {
  background: var(--cp-accent);
  color: #fff;
}

.concept-page[data-concept='fold'] .concept-nav__brand {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-transform: lowercase;
}

.concept-page[data-concept='fold'] .concept-nav__cta {
  background: var(--cp-accent);
  color: #fff;
}

.concept-page[data-concept='market-day'] .concept-nav__brand {
  font-family: var(--sz-font-display);
}

.concept-page[data-concept='aster-bay'] .concept-nav__cta,
.concept-page[data-concept='market-day'] .concept-nav__cta {
  background: var(--cp-ink);
  color: var(--cp-bg);
}

/* Mobile menu */
.concept-menu-dialog :deep(.q-dialog__inner) {
  padding: 0;
}

.concept-menu {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.25rem var(--sz-gutter) 2rem;
  background: var(--cp-bg);
  color: var(--cp-ink);
}

.concept-menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid color-mix(in srgb, var(--cp-ink) 16%, transparent);
}

.concept-menu__brand {
  font-family: var(--sz-font-display);
  font-size: 1.4rem;
}

.concept-menu__close {
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 0.7rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.concept-menu__links {
  display: flex;
  flex-direction: column;
  margin-block: auto;
}

.concept-menu__links a {
  padding-block: 0.7rem;
  border-bottom: 1px solid color-mix(in srgb, var(--cp-ink) 14%, transparent);
  font-family: var(--sz-font-display);
  font-size: clamp(2.3rem, 10vw, 4rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.concept-menu__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: var(--cp-accent);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.concept-menu__back {
  margin-top: 1.5rem;
  color: color-mix(in srgb, var(--cp-ink) 60%, transparent);
  font-size: 0.7rem;
}

/* Footer */
.concept-footer {
  padding: clamp(2.5rem, 5vw, 4rem) var(--sz-gutter) 1.25rem;
  background: var(--cp-dark);
  color: var(--cp-bg);
}

.concept-footer__top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.concept-footer__brand {
  font-family: var(--sz-font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.concept-footer__tagline {
  max-width: 28ch;
  color: rgba(255, 255, 255, 0.52);
  font-family: var(--sz-font-display);
  font-size: 0.95rem;
  font-style: italic;
  text-align: right;
}

.concept-footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: end;
  padding-block: 1.5rem;
}

.concept-footer__note {
  max-width: 44ch;
  margin: 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.72rem;
  line-height: 1.55;
}

.concept-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.concept-footer__links a:hover {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.concept-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.38);
  font-family: var(--sz-font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .concept-nav__links {
    display: none;
  }

  .concept-nav__menu {
    display: flex;
  }

  .concept-nav__cta {
    margin-left: auto;
  }

  .concept-footer__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
  }

  .concept-footer__tagline {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .concept-utility__note {
    display: none;
  }

  .concept-nav {
    min-height: 62px;
  }

  .concept-nav__cta {
    min-height: 34px;
    padding: 0.5rem 0.8rem;
    font-size: 0.56rem;
  }

  .concept-nav__menu {
    width: 36px;
    height: 36px;
  }
}
</style>
