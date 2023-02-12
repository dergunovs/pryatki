<template>
  <div :class="$style.coins">
    <img :src="IconCoin" width="16" height="16" alt="Монеты" />
    <span :class="$style.coinsValue">{{ props.coins }}</span>
  </div>
</template>

<script setup lang="ts">
import IconCoin from '@/components/player/icons/coin.svg';

const props = defineProps<{ coins: number }>();
</script>

<style module>
.coins {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coinsValue {
  height: 22px;
}
</style>
