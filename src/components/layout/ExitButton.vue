<template>
  <button @click="exit" type="button" :class="$style.exit">{{ backIcon }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isMainPage = computed(() => route.path === '/');
const backIcon = computed(() => (isMainPage.value ? '×' : '⤺'));

function exit() {
  isMainPage.value ? alert('exit') : router.go(-1);
}
</script>

<style module>
.exit {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 36px;
  height: 36px;
  padding-top: 4px;
  font-size: 2rem;
  top: 16px;
  right: 16px;
  background: var(--color-black-transparent);
  color: var(--color-white);
  border: none;
  border-radius: 50%;
  z-index: 2;
}
</style>
