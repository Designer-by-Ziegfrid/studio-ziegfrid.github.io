<template>
  <p class="sz-eyebrow" :class="{ 'sz-eyebrow--light': light }">
    <span v-if="number" class="sz-eyebrow__number">{{ number }}</span>
    <slot>{{ label }}</slot>
  </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string; number?: string; light?: boolean }>(), {
  light: false,
});
</script>

<style scoped>
.sz-eyebrow--light {
  color: rgba(247, 242, 232, 0.62);
}

.sz-eyebrow__number {
  color: var(--sz-accent-strong);
  font-family: var(--sz-font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}
</style>
