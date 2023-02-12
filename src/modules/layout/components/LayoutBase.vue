<template>
  <div :class="$style.layout">
    <HeaderCoins />
    <HeaderExit />

    <component :is="background" :class="$style.background">
      <slot></slot>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import HeaderCoins from '@/layout/components/HeaderCoins.vue';
import HeaderExit from '@/layout/components/HeaderExit.vue';
import BackgroundAnimated from '@/layout/components/BackgroundAnimated.vue';
import BackgroundBase from '@/layout/components/BackgroundBase.vue';

import { MAIN_URL } from '@/main/constants';

const route = useRoute();

const background = computed(() => (route.path === MAIN_URL ? BackgroundAnimated : BackgroundBase));
</script>

<style module>
.layout {
  position: relative;
  overflow: hidden;
}

.background {
  display: flex;
  height: 100vh;
  margin: 0 auto;
}
</style>
