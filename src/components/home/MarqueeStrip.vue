<template>
  <div class="marquee-wrap" aria-label="Types of businesses we design for">
    <div class="sz-container marquee-wrap__inner">
      <span class="marquee-wrap__label">Made for</span>
      <div class="sz-marquee marquee-wrap__track">
        <div class="sz-marquee__track">
          <div class="marquee-group">
            <span v-for="item in items" :key="item" class="sz-marquee__item">{{ item }}</span>
          </div>
          <div class="marquee-group" aria-hidden="true">
            <span v-for="item in items" :key="`${item}-copy`" class="sz-marquee__item">{{
              item
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  'Boutique resorts',
  'Car rentals',
  'Laundry services',
  'Neighborhood groceries',
  'Cafés & restaurants',
  'Clinics & studios',
  'Property managers',
  'Small teams with big plans',
];
</script>

<style scoped>
.marquee-wrap {
  border-bottom: 1px solid var(--sz-line);
  background: var(--sz-paper);
}

.marquee-wrap__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-block: 0.55rem;
}

.marquee-wrap__label {
  flex: 0 0 auto;
  color: var(--sz-ink-faint);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.marquee-wrap__track {
  flex: 1 1 auto;
  min-width: 0;
  border: 0;
  padding-block: 0.2rem;
}

.marquee-group {
  display: flex;
  gap: 2.5rem;
}

@media (max-width: 767px) {
  .marquee-wrap__label {
    display: none;
  }

  .marquee-wrap__inner {
    padding-block: 0.35rem;
  }
}
</style>
