<template>
  <router-link to="/" class="sz-wordmark" :class="{ 'sz-wordmark--light': light }">
    <span>Studio Ziegfrid</span>
    <span class="sz-wordmark__mark" aria-hidden="true"></span>
  </router-link>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean }>(), { light: false });
</script>

<style scoped>
.sz-wordmark--light {
  color: var(--sz-cream);
}
</style>
