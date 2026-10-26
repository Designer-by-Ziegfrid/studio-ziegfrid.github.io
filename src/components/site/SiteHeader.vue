<template>
  <q-header class="sz-header" :class="headerClass">
    <div class="sz-container sz-header__inner">
      <BrandMark />

      <nav class="sz-nav sz-only-desktop" aria-label="Primary navigation">
        <router-link v-for="link in NAV_LINKS" :key="link.to" :to="link.to" class="sz-nav__link">
          {{ link.label }}
        </router-link>
      </nav>

      <div class="sz-header__actions">
        <AppButton to="/contact" label="Start a project" arrow class="sz-only-desktop" />
        <button
          class="sz-menu-btn sz-only-mobile"
          type="button"
          aria-label="Open menu"
          @click="menuOpen = true"
        >
          <q-icon name="menu" size="20px" />
        </button>
      </div>
    </div>
  </q-header>

  <q-dialog v-model="menuOpen" full-width class="sz-menu-dialog">
    <div class="sz-menu-panel">
      <div class="sz-menu-panel__top">
        <BrandMark />
        <button class="sz-menu-btn" type="button" aria-label="Close menu" @click="menuOpen = false">
          <q-icon name="close" size="20px" />
        </button>
      </div>

      <nav class="sz-menu-panel__links" aria-label="Mobile navigation">
        <router-link
          v-for="link in mobileLinks"
          :key="link.to"
          :to="link.to"
          class="sz-menu-panel__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="sz-menu-panel__foot">
        <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>
        <a :href="SITE.whatsappUrl" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useScrolled } from '@/composables/useScrolled';
import { NAV_LINKS, SITE } from '@/data/site';
import AppButton from '@/components/ui/AppButton.vue';
import BrandMark from '@/components/ui/BrandMark.vue';

const route = useRoute();
const scrolled = useScrolled(30);
const menuOpen = ref(false);

const mobileLinks = [{ label: 'Home', to: '/' }, ...NAV_LINKS];

const isHome = computed(() => route.path === '/');

const headerClass = computed(() => ({
  'sz-header--scrolled': scrolled.value || !isHome.value,
}));
</script>
