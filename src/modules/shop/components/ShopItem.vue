<template>
  <div :class="$style.item">
    <img
      @click="buyItem(props.item.id)"
      :src="props.item.image"
      :alt="props.item.title"
      :class="[$style.image, props.item.id === currentItem && $style.current]"
    />

    <div :class="[$style.title, items.includes(props.item.id) && $style.bought]">
      {{ props.item.title }}
    </div>

    <TheCoins :coins="props.item.price" :isRed="!items.includes(props.item.id) && coins < props.item.price" />
  </div>
</template>

<script setup lang="ts">
import TheCoins from '@/player/components/TheCoins.vue';

import { buyItem } from '@/shop/service';
import { items, coins, currentItem } from '@/player/service';
import { IPlayerItem } from '@/player/interface';

const props = defineProps<{ item: IPlayerItem }>();
</script>

<style module>
.item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 50%;
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
  line-height: 1.2;
}

.bought {
  color: var(--color-primary);
  opacity: 1;
}
</style>
