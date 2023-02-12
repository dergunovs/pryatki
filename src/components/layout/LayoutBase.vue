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

import HeaderCoins from '@/components/layout/HeaderCoins.vue';
import HeaderExit from '@/components/layout/HeaderExit.vue';
import BackgroundAnimated from '@/components/layout/BackgroundAnimated.vue';
import BackgroundBase from '@/components/layout/BackgroundBase.vue';

import { MAIN_URL } from '@/components/main/constants';

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
