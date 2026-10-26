<template>
  <q-page class="home-page">
    <HeroParallax />
    <MarqueeStrip />
    <ConceptGrid />
    <ComparisonPanel />
    <BudgetSection />
    <ProcessTimeline />
    <AboutTeaser />
    <StandardsStrip />
    <FaqList />
    <CTASection number="07" />
  </q-page>
</template>

<script setup lang="ts">
import AboutTeaser from '@/components/home/AboutTeaser.vue';
import BudgetSection from '@/components/home/BudgetSection.vue';
import CTASection from '@/components/home/CTASection.vue';
import ComparisonPanel from '@/components/home/ComparisonPanel.vue';
import ConceptGrid from '@/components/home/ConceptGrid.vue';
import FaqList from '@/components/home/FaqList.vue';
import HeroParallax from '@/components/home/HeroParallax.vue';
import MarqueeStrip from '@/components/home/MarqueeStrip.vue';
import ProcessTimeline from '@/components/home/ProcessTimeline.vue';
import StandardsStrip from '@/components/home/StandardsStrip.vue';
import { faqs } from '@/data/faqs';
import { useSeo, faqJsonLd, professionalServiceJsonLd, websiteJsonLd } from '@/composables/useSeo';

useSeo({
  title: 'Studio Ziegfrid — Bespoke Websites for Business',
  description:
    'Independent design and build studio making bespoke websites for resorts, car rentals, laundry services, grocery stores, and businesses that do not fit a template.',
  path: '/',
  jsonLd: [websiteJsonLd(), professionalServiceJsonLd(), faqJsonLd(faqs)],
});
</script>

<style scoped>
.home-page {
  background: var(--sz-paper);
}
</style>
