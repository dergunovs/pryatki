<template>
  <div
    :class="[
      $style.player,
      props.isHidden && $style.hidden,
      props.isSearch && $style.search,
      props.isFound && $style.found,
    ]"
  >
    <img :src="PLAYER_ITEMS[currentItem].image" :class="$style.body" alt="player" width="900" height="1200" />
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
  z-index: 2;
  transition: all 300ms;
}

.body {
  width: 160px;
  height: auto;
  transition: all 300ms;
  animation: rotate 1s infinite;
}

.found {
  filter: brightness(0.2) var(--shadow-red);
}

.hidden {
  top: 0;
  z-index: 1;
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

@media (min-width: 480px) {
  .body {
    width: 240px;
  }

  .hidden {
    left: 30%;
  }
}
</style>
