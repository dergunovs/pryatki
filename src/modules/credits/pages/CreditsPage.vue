<template>
  <div :class="$style.credits">
    <UiTitle>Вы прошли игру!</UiTitle>

    <div>Автор игры: Дарья Дергунова</div>

    <img :src="ImageCredits" :class="$style.image" />

    <UiButton label="Поиграть ещё" @click="$router.push(MAIN_URL)" />
  </div>
</template>

<script setup lang="ts">
import ImageCredits from '@/credits/images/credits.jpg';

import { UiTitle, UiButton } from '@/ui';

import { MAIN_URL } from '@/main/constants';
</script>

<style module>
.credits {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 16px;
}
</style>
