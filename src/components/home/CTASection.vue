<template>
  <section class="sz-section sz-section--paper-deep cta">
    <span class="cta__ring cta__ring--one" aria-hidden="true"></span>
    <span class="cta__ring cta__ring--two" aria-hidden="true"></span>

    <div class="sz-container cta__grid">
      <RevealOnScroll class="cta__copy">
        <SectionLabel :number="number" label="Start here" />
        <h2 class="cta__title">
          Let's make<br />
          <em class="sz-italic">something that fits.</em>
        </h2>
        <p class="sz-lead cta__lead">
          Tell us what you are building, what is not working, and what a good outcome looks like. We
          will tell you honestly whether we are the right studio for it.
        </p>
        <div class="cta__actions">
          <AppButton to="/contact" label="Start a project" arrow />
          <AppButton
            :href="SITE.whatsappUrl"
            label="Message on WhatsApp"
            variant="ghost"
            external
          />
        </div>
        <p class="cta__note">No pressure. No automated sales sequence. {{ SITE.responseTime }}.</p>
      </RevealOnScroll>

      <RevealOnScroll class="cta__card" :delay="100">
        <div class="cta__card-top">
          <span>Direct line</span>
          <span class="cta__live"><span class="sz-status-dot" aria-hidden="true"></span> Open</span>
        </div>

        <a :href="`mailto:${SITE.email}`" class="cta__channel">
          <span>Email</span>
          <strong>{{ SITE.email }}</strong>
          <i aria-hidden="true">↗</i>
        </a>

        <a :href="SITE.whatsappUrl" target="_blank" rel="noopener noreferrer" class="cta__channel">
          <span>WhatsApp</span>
          <strong>{{ SITE.phoneDisplay }}</strong>
          <i aria-hidden="true">↗</i>
        </a>

        <div class="cta__card-rule"></div>

        <p class="cta__card-copy">
          Prefer to write it down first? The brief builder asks a few useful questions, then opens a
          ready-to-send email or WhatsApp message.
        </p>

        <AppButton to="/contact" label="Open the brief builder" variant="text" arrow />
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
import { SITE } from '@/data/site';

withDefaults(defineProps<{ number?: string }>(), {
  number: '',
});
</script>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--sz-line);
}

.cta__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: center;
}

.cta__title {
  max-width: 12ch;
  margin: 0;
  font-family: var(--sz-font-display);
  font-size: clamp(3.2rem, 7vw, 7.8rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.92;
}

.cta__title em {
  color: var(--sz-accent-strong);
  font-weight: 400;
}

.cta__lead {
  margin-top: 1.5rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.cta__note {
  margin: 1.2rem 0 0;
  color: var(--sz-ink-faint);
  font-size: 0.72rem;
}

.cta__card {
  padding: clamp(1.4rem, 2.6vw, 2.2rem);
  border: 1px solid var(--sz-line-strong);
  background: var(--sz-paper-warm);
  box-shadow: 0 30px 70px -55px rgba(22, 21, 19, 0.6);
}

.cta__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--sz-line);
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.cta__live {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--sz-moss);
}

.cta__channel {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
  padding-block: 1rem;
  border-bottom: 1px solid var(--sz-line);
}

.cta__channel span {
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.cta__channel strong {
  overflow: hidden;
  font-family: var(--sz-font-display);
  font-size: clamp(1rem, 1.7vw, 1.3rem);
  font-weight: 500;
  letter-spacing: -0.015em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cta__channel i {
  color: var(--sz-accent-strong);
  font-style: normal;
}

.cta__card-rule {
  height: 1.5rem;
}

.cta__card-copy {
  margin: 0 0 1.1rem;
  color: var(--sz-ink-soft);
  font-size: 0.82rem;
  line-height: 1.55;
}

.cta__ring {
  position: absolute;
  border: 1px solid var(--sz-line-strong);
  border-radius: 50%;
  opacity: 0.3;
}

.cta__ring--one {
  top: -20rem;
  right: -12rem;
  width: 46rem;
  height: 46rem;
}

.cta__ring--two {
  top: -10rem;
  right: -2rem;
  width: 26rem;
  height: 26rem;
}

@media (max-width: 1023px) {
  .cta__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cta__card {
    max-width: 34rem;
  }
}

@media (max-width: 600px) {
  .cta__channel {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .cta__channel span {
    grid-column: 1 / -1;
  }

  .cta__channel strong {
    font-size: 1.05rem;
  }
}
</style>
