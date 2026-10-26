import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

/**
 * Moves elements marked with `data-parallax="<speed>"` inside the returned
 * container. Speeds are small pixel offsets; keep them subtle.
 */
export function useParallaxLayers(strength = 1): Ref<HTMLElement | null> {
  const root = ref<HTMLElement | null>(null);
  let raf = 0;
  let enabled = false;

  const update = () => {
    raf = 0;
    const el = root.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;

    el.querySelectorAll<HTMLElement>('[data-parallax]').forEach((layer) => {
      const speed = Number(layer.dataset.parallax ?? 0);
      layer.style.translate = `0 ${(progress * speed * strength).toFixed(2)}px`;
    });
  };

  const onScroll = () => {
    if (!raf) raf = window.requestAnimationFrame(update);
  };

  onMounted(() => {
    enabled =
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      window.matchMedia('(min-width: 1024px)').matches;

    if (!enabled) return;

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (raf) window.cancelAnimationFrame(raf);
  });

  return root;
}
