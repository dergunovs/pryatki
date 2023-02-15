<template>
  <div :class="$style.main">
    <UiTitle>Спрячься<br />от Даши!</UiTitle>
    <TheDasha />
    <MainMenu />
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/main/components/MainMenu.vue';
import TheDasha from '@/dasha/components/TheDasha.vue';

import { UiTitle } from '@/ui';
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
