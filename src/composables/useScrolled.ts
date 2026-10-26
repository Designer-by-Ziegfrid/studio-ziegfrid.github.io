import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

export function useScrolled(threshold = 24): Ref<boolean> {
  const scrolled = ref(false);
  let raf = 0;

  const update = () => {
    raf = 0;
    scrolled.value = window.scrollY > threshold;
  };

  const onScroll = () => {
    if (!raf) raf = window.requestAnimationFrame(update);
  };

  onMounted(() => {
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    if (raf) window.cancelAnimationFrame(raf);
  });

  return scrolled;
}
