<template>
  <button @click="exit" type="button" :class="$style.exit">{{ backIcon }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { MAIN_URL } from '@/components/main/constants';
import { MAP_URL } from '@/components/map/constants';
import { CREDITS_URL } from '@/components/credits/constants';

const route = useRoute();
const router = useRouter();

const isMainPage = computed(() => route.path === MAIN_URL);
const isCreditsPage = computed(() => route.path === CREDITS_URL);
const isMapsPage = computed(() => route.path === MAP_URL);
const isMapPage = computed(() => route.name === 'Map');

const backIcon = computed(() => (isMainPage.value ? '×' : '⤺'));

function exit() {
  if (isMainPage.value) {
    alert('exit');
  } else if (isMapPage.value) {
    router.push(MAP_URL);
  } else if (isCreditsPage.value || isMapsPage.value) {
    router.push(MAIN_URL);
  } else {
    router.go(-1);
  }
}
</script>

<style module>
.exit {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  top: 12px;
  right: 16px;
  background: var(--color-black-transparent);
  color: var(--color-white);
  border: none;
  border-radius: 50%;
  z-index: 3;
}
</style>
