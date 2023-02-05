<template>
  <div :class="[$style.dasha, props.isSearching && $style.searching]">
    <img :src="imageBody" :class="$style.body" alt="Body" width="904" height="1413" loading="lazy" />
    <img :src="imageAxe" :class="$style.axe" alt="Axe" width="398" height="424" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
import imageBody from '@/components/dasha/images/body.png';
import imageAxe from '@/components/dasha/images/axe.png';

interface IProps {
  isSearching?: boolean;
}

const props = defineProps<IProps>();
</script>

<style module>
.dasha {
  position: relative;
  max-width: 80%;
  z-index: 1;
}

.body {
  max-width: 80%;
  height: auto;
  animation: rotate 1s infinite;
}

.axe {
  position: absolute;
  width: 128px;
  height: auto;
  right: -24px;
  top: 26%;
  animation: rotate 1s infinite;
}

.searching {
  position: absolute;
  width: 100px;
  animation: walk 3s;
}

.searching .axe {
  width: 64px;
  top: 16%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: rotate(-4deg);
    animation-timing-function: ease-out;
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes walk {
  from {
    top: -140px;
  }
  to {
    top: 304px;
  }
}
</style>
