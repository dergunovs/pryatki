<template>
  <button @click="exit" type="button" :class="$style.exit">
    {{ backIcon }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

import { MAIN_URL } from '@/main/constants';
import { MAP_URL } from '@/map/constants';
import { CREDITS_URL } from '@/credits/constants';

const route = useRoute();
const router = useRouter();

const isMainPage = computed(() => route.path === MAIN_URL);
const isCreditsPage = computed(() => route.path === CREDITS_URL);
const isMapsPage = computed(() => route.path === MAP_URL);
const isMapPage = computed(() => route.name === 'Map');

const backIcon = computed(() => (isMainPage.value ? '×' : '←'));

function exit() {
  if (isMainPage.value) {
    Capacitor.isNativePlatform() ? App.exitApp() : alert('Выход');
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
  width: 36px;
  height: 36px;
  font-size: var(--font-l);
  background: var(--color-black-transparent);
  color: var(--color-white);
  border: none;
  border-radius: 50%;
}
</style>
