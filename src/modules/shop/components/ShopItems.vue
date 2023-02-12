<template>
  <div :class="$style.items">
    <div v-for="item in PLAYER_ITEMS" :key="item.id" :class="$style.item">
      <img :src="item.image" :alt="item.title" :class="$style.image" />

      <div :class="$style.title">
        {{ item.title }}
      </div>

      <TheCoins :coins="item.price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheCoins from '@/player/components/TheCoins.vue';

import { PLAYER_ITEMS } from '@/player/constants';
</script>

<style module>
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 12px;
}

.item {
  width: calc(50% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: auto;
}

.title {
  font-weight: 700;
  text-shadow: 2px 2px var(--color-white);
}
</style>
