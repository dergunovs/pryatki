<template>
  <div :class="$style.menu">
    <UiButton tag="RouterLink" :label="link.title" v-for="link in menuItems" :key="link.title" :to="link.url" />
  </div>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue';

const menuItems = [
  { title: 'Играть', url: '/map' },
  { title: 'Магазин', url: '/shop' },
];
</script>

<style module>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 1;
}
</style>
