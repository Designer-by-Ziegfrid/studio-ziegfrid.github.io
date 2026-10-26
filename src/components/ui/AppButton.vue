<template>
  <router-link v-if="to" :to="to" class="sz-btn" :class="variantClass">
    <span
      ><slot>{{ label }}</slot></span
    >
    <span v-if="arrow" class="sz-btn__arrow" aria-hidden="true">→</span>
  </router-link>

  <a
    v-else-if="href"
    :href="href"
    class="sz-btn"
    :class="variantClass"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <span
      ><slot>{{ label }}</slot></span
    >
    <span v-if="arrow" class="sz-btn__arrow" aria-hidden="true">→</span>
  </a>

  <button v-else class="sz-btn" :class="variantClass" :type="type">
    <span
      ><slot>{{ label }}</slot></span
    >
    <span v-if="arrow" class="sz-btn__arrow" aria-hidden="true">→</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    label?: string;
    variant?: 'primary' | 'ghost' | 'light' | 'text';
    arrow?: boolean;
    external?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }>(),
  {
    variant: 'primary',
    arrow: false,
    external: false,
    type: 'button',
  },
);

const variantClass = computed(() => `sz-btn--${props.variant}`);
</script>
