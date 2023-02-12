<template>
  <div :class="$style.menu">
    <UiButton tag="RouterLink" :label="link.title" v-for="link in MENU_LINKS" :key="link.title" :to="link.url" />
  </div>
</template>

<script setup lang="ts">
import UiButton from '@/ui/components/UiButton.vue';

import { MENU_LINKS } from '@/main/constants';
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
