<template>
  <q-layout view="hHh lpR fff">
    <a class="sz-skip-link" href="#main-content">Skip to content</a>

    <SiteHeader v-if="!isConcept" />

    <q-page-container
      id="main-content"
      :class="{ 'sz-page-container--flush': flush }"
      tabindex="-1"
    >
      <router-view />
    </q-page-container>

    <SiteFooter v-if="!isConcept" />
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SiteFooter from '@/components/site/SiteFooter.vue';
import SiteHeader from '@/components/site/SiteHeader.vue';

const route = useRoute();

const isHome = computed(() => route.path === '/');
const isConcept = computed(() => /^\/work\/[^/]+\/?$/.test(route.path));
const flush = computed(() => isHome.value || isConcept.value);
</script>

<style scoped>
.sz-page-container--flush {
  padding-top: 0 !important;
}
</style>
