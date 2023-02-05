<template>
  <div :class="$style.main">
    <UiTitle>Спрячься<br />от Даши!</UiTitle>
    <TheDasha />
    <MainMenu />
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/MainMenu.vue';
import TheDasha from '@/components/TheDasha.vue';

import UiTitle from '@/components/ui/UiTitle.vue';
</script>

<style module lang="scss">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
}
</style>
