<template>
  <div :class="$style.container">{{ message }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ isPlayerWon: boolean }>();

const message = computed(() => (props.isPlayerWon ? 'Вы выйграли!' : 'Вы проиграли!'));
</script>

<style module>
.container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  height: 100%;
  text-align: center;
  font-size: 1.75rem;
}
</style>
