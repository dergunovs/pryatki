<template>
  <div
    :class="[
      $style.player,
      props.isHidden && $style.hidden,
      props.isSearch && $style.search,
      props.isFound && $style.found,
    ]"
  >
    <img :src="PLAYER_ITEMS[currentItem].image" :class="$style.body" alt="player" width="904" height="1413" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { currentItem } from '@/player/service';
import { PLAYER_ITEMS } from '@/player/constants';

const props = defineProps<{
  isHidden?: boolean;
  isSearch?: boolean;
  isFound?: boolean;
  isRelativePosition?: boolean;
}>();

const position = computed(() => (props.isRelativePosition ? 'relative' : 'absolute'));
</script>

<style module>
.player {
  position: v-bind(position);
  z-index: 1;
  transition: all 300ms;
}

.body {
  width: 192px;
  height: auto;
  transition: all 300ms;
  animation: rotate 1s infinite;
}

.found {
  filter: brightness(0.2) drop-shadow(0 0 8px var(--color-red));
}

.hidden {
  top: 0;
}

.hidden .body {
  width: 96px;
  animation: rotate 100ms infinite;
}

.search {
  top: 16px;
  left: 16px;
}

.search .body {
  animation: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: rotate(-2deg);
    animation-timing-function: ease-out;
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
