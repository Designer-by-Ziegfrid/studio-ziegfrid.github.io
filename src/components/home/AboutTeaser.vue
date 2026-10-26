<template>
  <section class="sz-section about-teaser">
    <div class="sz-container about-teaser__grid">
      <RevealOnScroll class="about-teaser__art">
        <div class="pattern-card" aria-hidden="true">
          <div class="pattern-card__top">
            <span>Pattern no. 001</span>
            <span>STUDIO ZIEGFRID</span>
          </div>
          <span class="pattern-card__letter">Z</span>
          <div class="pattern-card__arc pattern-card__arc--one"></div>
          <div class="pattern-card__arc pattern-card__arc--two"></div>
          <div class="pattern-card__lines"></div>
          <div class="pattern-card__foot">
            <span>Cut for the business</span>
            <span>Made to measure</span>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll class="about-teaser__copy" :delay="100">
        <SectionLabel label="The studio" />
        <h2 class="sz-h2 about-teaser__title">
          Small studio.<br />
          <em class="sz-italic">Senior hands.</em>
        </h2>
        <p class="sz-lead">
          Studio Ziegfrid is the independent practice of Ziegfrid Gualberto. We keep the team small
          on purpose: the person who designs your website is the person who builds it.
        </p>
        <p class="about-teaser__body">
          That means fewer handoffs, fewer misunderstandings, and a site that is actually finished
          the way it was designed. When a project needs ongoing care, it is handled through
          SiteMedic, our maintenance arm.
        </p>

        <div class="about-teaser__facts">
          <div>
            <span>Design</span>
            <strong>Strategy, UX, visual systems</strong>
          </div>
          <div>
            <span>Build</span>
            <strong>Vue, Quasar, TypeScript, CMS</strong>
          </div>
          <div>
            <span>Care</span>
            <strong>SiteMedic maintenance</strong>
          </div>
        </div>

        <AppButton to="/about" label="More about the studio" variant="ghost" arrow />
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import SectionLabel from '@/components/ui/SectionLabel.vue';
</script>

<style scoped>
.about-teaser {
  border-top: 1px solid var(--sz-line);
}

.about-teaser__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(3rem, 8vw, 8rem);
  align-items: center;
}

.about-teaser__art {
  min-width: 0;
}

.pattern-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  padding: clamp(1.25rem, 2.5vw, 2rem);
  border: 1px solid var(--sz-dark);
  background: var(--sz-dark);
  color: var(--sz-cream);
}

.pattern-card__top,
.pattern-card__foot {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: rgba(247, 242, 232, 0.5);
  font-family: var(--sz-font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pattern-card__foot {
  position: absolute;
  right: clamp(1.25rem, 2.5vw, 2rem);
  bottom: clamp(1.25rem, 2.5vw, 2rem);
  left: clamp(1.25rem, 2.5vw, 2rem);
}

.pattern-card__letter {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  color: #ff8a6e;
  font-family: var(--sz-font-display);
  font-size: clamp(13rem, 26vw, 25rem);
  font-weight: 500;
  letter-spacing: -0.08em;
  line-height: 0.7;
  opacity: 0.92;
  transform: translate(-50%, -52%);
}

.pattern-card__arc {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(247, 242, 232, 0.18);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.pattern-card__arc--one {
  width: 74%;
  aspect-ratio: 1;
}

.pattern-card__arc--two {
  width: 106%;
  aspect-ratio: 1;
  border-color: rgba(247, 242, 232, 0.1);
}

.pattern-card__lines {
  position: absolute;
  inset: 12% 0 auto;
  height: 9px;
  opacity: 0.28;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(247, 242, 232, 0.6) 0,
    rgba(247, 242, 232, 0.6) 1px,
    transparent 1px,
    transparent 26px
  );
}

.about-teaser__title {
  max-width: 11ch;
}

.about-teaser__copy .sz-lead {
  margin-top: 1.5rem;
}

.about-teaser__body {
  max-width: 60ch;
  margin: 1rem 0 0;
  color: var(--sz-ink-soft);
  font-size: 0.9rem;
  line-height: 1.65;
}

.about-teaser__facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  padding-block: 1.1rem;
  border-block: 1px solid var(--sz-line);
}

.about-teaser__facts div {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.about-teaser__facts span {
  color: var(--sz-ink-faint);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-teaser__facts strong {
  font-size: 0.78rem;
  font-weight: 550;
  line-height: 1.35;
}

@media (max-width: 1023px) {
  .about-teaser__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .pattern-card {
    max-width: 28rem;
    aspect-ratio: 5 / 4;
  }
}

@media (max-width: 600px) {
  .about-teaser__facts {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.8rem;
  }
}
</style>
