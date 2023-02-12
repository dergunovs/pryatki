<template>
  <div :class="[$style.dasha, props.isSearch && $style.search]">
    <img :src="imageBody" :class="$style.body" alt="Body" width="904" height="1413" />
    <img :src="imageAxe" :class="$style.axe" alt="Axe" width="398" height="424" />
  </div>
</template>

<script setup lang="ts">
import imageBody from '@/dasha/images/body.png';
import imageAxe from '@/dasha/images/axe.png';

const props = defineProps<{ isSearch?: boolean }>();
</script>

<style module>
.dasha {
  position: relative;
  max-width: 80%;
  z-index: 3;
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

.search {
  position: absolute;
  width: 128px;
  height: 160px;
  animation: walk 3s;
}

.search .axe {
  width: 64px;
  top: 20%;
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
    top: calc(50% - 80px);
  }
}
</style>
