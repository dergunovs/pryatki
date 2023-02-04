<template>
  <div :class="$style.main">
    <ExitButton />

    <Suspense>
      <router-view :class="$style.content" />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import ExitButton from '@/components/layout/ExitButton.vue';
</script>

<style module lang="scss">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.content {
  flex: 1;
}
</style>
