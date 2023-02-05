<template>
  <div :class="$style.background">
    <div v-if="isShowFlashlight" :class="$style.flashlight"></div>
    <TheDasha isSearching />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import TheDasha from '@/components/dasha/TheDasha.vue';

const isShowFlashlight = ref(false);

setTimeout(() => {
  isShowFlashlight.value = true;
}, 3000);
</script>

<style module>
.background {
  position: absolute;
  background-color: var(--color-black-transparent);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.flashlight {
  width: 160px;
  height: 160px;
  border: 8px solid var(--color-white);
  border-radius: 50%;
  background-color: var(--color-white-transparent);
  z-index: 2;
}
</style>
