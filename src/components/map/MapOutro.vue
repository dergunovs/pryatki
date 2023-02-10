<template>
  <div :class="$style.container">
    <div :class="$style.message">{{ message }}</div>

    <UiButton @click="emit('restart')" v-if="!props.isPlayerWon" label="Переиграть" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import UiButton from '@/components/ui/UiButton.vue';

const props = defineProps<{ isPlayerWon: boolean }>();
const emit = defineEmits(['restart']);

const message = computed(() => (props.isPlayerWon ? 'Вы выйграли!' : 'Вы проиграли!'));
</script>

<style module>
.container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  height: 100%;
  gap: 32px;
}

.message {
  text-align: center;
  font-size: 1.75rem;
}
</style>
