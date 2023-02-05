<template>
  <Transition>
    <div :class="$style.count">{{ count }}</div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';

const count = ref(10);

const counter = setInterval(() => count.value--, 1000);

onBeforeUnmount(() => clearInterval(counter));
</script>

<style module>
.count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px var(--color-white);
  padding-top: 12px;
}
</style>
