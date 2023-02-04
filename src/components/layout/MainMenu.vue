<template>
  <div :class="$style.menu">
    <RouterLink v-for="link in menuItems" :key="link.title" :to="link.url" :class="$style.link">
      {{ link.title }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Играть', url: '/map' },
  { title: 'Магазин', url: '/shop' },
];
</script>

<style module lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 1;
}

.link {
  padding: 12px 48px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 32px;
  text-align: center;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
