<template>
  <div :class="$style.shop">
    <UiTitle>Магазин</UiTitle>

    <div :class="$style.player">
      <ThePlayer isRelativePosition />
    </div>

    <div :class="$style.subTitle">Поменять внешность</div>

    <ShopItems />
  </div>
</template>

<script setup lang="ts">
import ThePlayer from '@/components/player/ThePlayer.vue';
import ShopItems from '@/components/shop/ShopItems.vue';
import UiTitle from '@/components/ui/UiTitle.vue';
</script>

<style module>
.shop {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player {
  display: flex;
  justify-content: center;
}

.subTitle {
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px var(--color-white);
}
</style>
