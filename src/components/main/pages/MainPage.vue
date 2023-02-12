<template>
  <div :class="$style.main">
    <UiTitle>Спрячься<br />от Даши!</UiTitle>
    <TheDasha />
    <MainMenu />
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main/MainMenu.vue';
import TheDasha from '@/components/dasha/TheDasha.vue';

import UiTitle from '@/components/ui/UiTitle.vue';
</script>

<style module>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding-bottom: 24px;
}
</style>
