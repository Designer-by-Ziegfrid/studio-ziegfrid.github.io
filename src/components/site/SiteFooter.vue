<template>
  <footer class="sz-footer">
    <div class="sz-container">
      <div class="sz-footer__grid">
        <div>
          <BrandMark light />
          <p class="sz-footer__title">Websites made to measure. Built around your business.</p>
          <AppButton to="/contact" label="Start a project" variant="light" arrow />
        </div>

        <div>
          <p class="sz-footer__label">Studio</p>
          <div class="sz-footer__links">
            <router-link
              v-for="link in NAV_LINKS"
              :key="link.to"
              :to="link.to"
              class="sz-footer__link"
            >
              {{ link.label }}
            </router-link>
            <router-link to="/work" class="sz-footer__link">Concept work</router-link>
          </div>
        </div>

        <div>
          <p class="sz-footer__label">Elsewhere</p>
          <div class="sz-footer__links">
            <a
              :href="SITE.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="sz-footer__link"
              >LinkedIn ↗</a
            >
            <a
              :href="SITE.portfolioUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="sz-footer__link"
              >Portfolio ↗</a
            >
          </div>
        </div>

        <div>
          <p class="sz-footer__label">Care</p>
          <div class="sz-footer__links">
            <a :href="`mailto:${SITE.email}`" class="sz-footer__link">{{ SITE.email }}</a>
            <a
              :href="SITE.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="sz-footer__link"
              >WhatsApp ↗</a
            >
            <a
              :href="SITE.sitemedicUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="sz-footer__link"
              >SiteMedic — fixes &amp; care ↗</a
            >
          </div>
        </div>
      </div>

      <div class="sz-footer__bottom">
        <span>© {{ year }} Studio Ziegfrid. All rights reserved.</span>
        <span class="sz-footer__status">
          <span class="sz-status-dot" aria-hidden="true"></span>
          {{ SITE.availability }}
        </span>
        <span>Concept studies are fictional brands · Real design and code.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NAV_LINKS, SITE } from '@/data/site';
import AppButton from '@/components/ui/AppButton.vue';
import BrandMark from '@/components/ui/BrandMark.vue';

const year = computed(() => new Date().getFullYear());
</script>
