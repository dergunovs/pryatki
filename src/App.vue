<template>
  <LayoutBase v-show="isLoaded">
    <router-view :class="$style.content" @restart="key++" :key="key" />
  </LayoutBase>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import LayoutBase from '@/layout/components/LayoutBase.vue';

import { initLS } from '@/player/service';

const isLoaded = ref(false);
const key = ref(0);

onMounted(() => {
  setTimeout(() => {
    initLS();
    isLoaded.value = true;
  }, 300);
});
</script>

<style module>
.content {
  flex: 1;
  padding: 0 16px;
}
</style>
