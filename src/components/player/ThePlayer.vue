<template>
  <div :class="[$style.player, props.isHidden && $style.hidden, props.isSearch && $style.search]">
    <img :src="imageBody" :class="$style.body" alt="Body" width="904" height="1413" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
import imageBody from '@/components/player/images/body.png';

interface IProps {
  isHidden?: boolean;
  isSearch?: boolean;
}

const props = defineProps<IProps>();
</script>

<style module>
.player {
  position: absolute;
  z-index: 1;
  transition: all 300ms;
}

.body {
  width: 192px;
  height: auto;
  transition: all 300ms;
  animation: rotate 1s infinite;
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
