<template>
  <div :class="$style.shop">
    <UiTitle>Магазин</UiTitle>

    <div :class="$style.player">
      <ThePlayer isRelativePosition />
    </div>

    <div :class="$style.subTitle">Предметы игрока</div>

    <PlayerItems />
  </div>
</template>

<script setup lang="ts">
import ThePlayer from '@/components/player/ThePlayer.vue';
import PlayerItems from '@/components/player/PlayerItems.vue';
import UiTitle from '@/components/ui/UiTitle.vue';
</script>

<style module>
.shop {
  display: flex;
  flex-direction: column;
  gap: 32px;
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
