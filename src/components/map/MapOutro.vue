<template>
  <div :class="$style.container">
    <div :class="$style.message">{{ message }}</div>

    <template v-if="props.isPlayerWon">
      <UiButton @click="emit('nextMap')" label="Дальше" />
      <ThePlayer isRelativePosition />
    </template>

    <template v-else>
      <UiButton @click="emit('restart')" label="Переиграть" />
      <TheDasha />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ThePlayer from '@/components/player/ThePlayer.vue';
import TheDasha from '@/components/dasha/TheDasha.vue';
import UiButton from '@/components/ui/UiButton.vue';

const props = defineProps<{ isPlayerWon: boolean }>();
const emit = defineEmits(['nextMap', 'restart']);

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
