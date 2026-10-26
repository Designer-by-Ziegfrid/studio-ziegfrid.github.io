<template>
  <div class="browser-frame" :class="{ 'browser-frame--dark': tone === 'dark' }">
    <div class="browser-frame__bar">
      <span class="browser-frame__dots" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span class="browser-frame__label">{{ label }}</span>
      <span class="browser-frame__meta">Concept</span>
    </div>
    <div class="browser-frame__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string; tone?: 'light' | 'dark' }>(), {
  label: 'studio-ziegfrid.github.io',
  tone: 'light',
});
</script>

<style scoped>
.browser-frame {
  overflow: hidden;
  border: 1px solid var(--sz-line-strong);
  border-radius: var(--sz-radius-md);
  background: var(--sz-paper-warm);
  box-shadow: 0 24px 60px -42px rgba(22, 21, 19, 0.45);
}

.browser-frame--dark {
  border-color: rgba(247, 242, 232, 0.2);
  background: var(--sz-dark);
}

.browser-frame__bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 38px;
  padding-inline: 0.85rem;
  border-bottom: 1px solid var(--sz-line);
  background: rgba(255, 255, 255, 0.32);
}

.browser-frame--dark .browser-frame__bar {
  border-color: rgba(247, 242, 232, 0.14);
  background: rgba(255, 255, 255, 0.04);
}

.browser-frame__dots {
  display: flex;
  gap: 0.3rem;
}

.browser-frame__dots i {
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sz-line-strong);
}

.browser-frame__dots i:first-child {
  background: #d86a5a;
}

.browser-frame__dots i:nth-child(2) {
  background: #d8ad5a;
}

.browser-frame__dots i:nth-child(3) {
  background: #6faa7a;
}

.browser-frame__label {
  overflow: hidden;
  color: var(--sz-ink-soft);
  font-family: var(--sz-font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.browser-frame--dark .browser-frame__label {
  color: rgba(247, 242, 232, 0.56);
}

.browser-frame__meta {
  margin-left: auto;
  color: var(--sz-ink-faint);
  font-size: 0.56rem;
  font-weight: 650;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.browser-frame--dark .browser-frame__meta {
  color: rgba(247, 242, 232, 0.42);
}

.browser-frame__body {
  position: relative;
}
</style>
