<template>
  <div :class="$style.count">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';

const count = ref(7);
const interval = setInterval(() => count.value--, 1000);

onBeforeUnmount(() => clearInterval(interval));
</script>

<style module>
.count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xl);
  font-weight: 700;
  text-shadow: var(--shadow-text);
  padding-top: 48px;
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-left: -16px;
}
</style>
