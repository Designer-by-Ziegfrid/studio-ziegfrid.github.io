<template>
  <component :is="as" ref="el" class="sz-reveal" :style="delayStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{ as?: string; delay?: number }>(), {
  as: 'div',
  delay: 0,
});

const el = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const delayStyle = computed(() => ({ '--reveal-delay': `${props.delay}ms` }));

onMounted(() => {
  if (!el.value) return;

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    typeof IntersectionObserver === 'undefined'
  ) {
    el.value.classList.add('is-visible');
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;
      el.value?.classList.add('is-visible');
      observer?.disconnect();
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );

  observer.observe(el.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
