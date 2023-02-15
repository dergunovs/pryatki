<template>
  <div :class="$style.items">
    <div v-for="item in PLAYER_ITEMS" :key="item.id" :class="$style.item">
      <img
        @click="buyItem(item.id)"
        :src="item.image"
        :alt="item.title"
        :class="[$style.image, item.id === currentItem && $style.current]"
      />

      <div :class="[$style.title, items.includes(item.id) && $style.bought]">
        {{ item.title }}
      </div>

      <TheCoins :coins="item.price" :isRed="!items.includes(item.id) && coins < item.price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheCoins from '@/player/components/TheCoins.vue';

import { buyItem } from '@/shop/service';
import { items, coins, currentItem } from '@/player/service';
import { PLAYER_ITEMS } from '@/player/constants';
</script>

<style module>
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.item {
  width: calc(50% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: auto;
}

.current {
  filter: var(--shadow-black);
}

.title {
  font-weight: 700;
  text-shadow: var(--shadow-text);
  color: var(--color-black);
  opacity: 0.4;
}

.bought {
  color: var(--color-primary);
  opacity: 1;
}
</style>
