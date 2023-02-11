<template>
  <div :class="$style.maps">
    <RouterLink
      :to="`${MAP_URL}/${map.id}`"
      v-for="map in MAP_LIST"
      :key="map.id"
      :class="[$style.map, currentMap < map.id && $style.disabled]"
    >
      <img :src="map.icon" :class="$style.icon" width="512" height="512" :alt="map.title" />
      <div :class="$style.title">{{ map.title }}</div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { currentMap } from '@/components/player/service';
import { MAP_URL, MAP_LIST } from '@/components/map/constants';
</script>

<style module>
.maps {
  display: flex;
  flex-wrap: wrap;
  gap: 48px 32px;
}

.map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: calc(50% - 16px);
  text-align: center;
  text-decoration: none;
  color: var(--color-black);
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
  filter: grayscale(0.4);
}

.icon {
  width: 80%;
  height: auto;
  animation: rotate 2s infinite;
  filter: drop-shadow(0px 0px 8px var(--color-black));
}

.title {
  font-weight: 700;
  text-shadow: 2px 2px var(--color-white);
}

@keyframes rotate {
  from {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  to {
    transform: rotate(-2deg);
  }
}
</style>
