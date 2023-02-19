<template>
  <div :class="$style.coins">
    <TheCoins :coins="coins" />
  </div>
</template>

<script setup lang="ts">
import TheCoins from '@/player/components/TheCoins.vue';

import { coins } from '@/player/service';
</script>

<style module>
.coins {
  display: flex;
  background-color: var(--color-white-transparent);
  padding: 4px 12px;
  border-radius: 16px;
  box-shadow: 0 0 4px 0 var(--color-black-transparent);
}
</style>
