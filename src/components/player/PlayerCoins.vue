<template>
  <div :class="$style.coins">
    <img :src="IconCoin" width="16" height="16" alt="Монеты" />
    <span :class="$style.coinsValue">{{ coins }}</span>
  </div>
</template>

<script setup lang="ts">
import IconCoin from '@/components/player/icons/coin.svg';
import { coins } from '@/components/player/service';
</script>

<style module>
.coins {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-white-transparent);
  padding: 4px 12px;
  border-radius: 16px;
  box-shadow: 0 0 4px 0 var(--color-black-transparent);
}

.coinsValue {
  height: 22px;
}
</style>
