<template>
  <LayoutBase v-show="isLoaded">
    <router-view :class="$style.content" />
  </LayoutBase>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import LayoutBase from '@/components/layout/LayoutBase.vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
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
