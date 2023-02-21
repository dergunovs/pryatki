<template>
  <div :class="$style.items">
    <ShopItem v-for="item in PLAYER_ITEMS" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import ShopItem from '@/shop/components/ShopItem.vue';

import { PLAYER_ITEMS } from '@/player/constants';
</script>

<style module>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: 12px;
}

@media (min-width: 480px) {
  .items {
    gap: 32px;
  }
}
</style>
