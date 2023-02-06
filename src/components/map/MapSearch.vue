<template>
  <div :class="$style.background">
    <div
      v-if="isShowFlashlight"
      :class="[$style.flashlight, isShowSearch && $style.search, isShowMagnify && $style.magnify]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShowFlashlight = ref(false);
const isShowSearch = ref(false);
const isShowMagnify = ref(false);

setTimeout(() => {
  isShowFlashlight.value = true;
  isShowSearch.value = true;
}, 3000);

setTimeout(() => {
  isShowMagnify.value = true;
}, 6000);

setTimeout(() => {
  isShowFlashlight.value = false;
}, 9000);
</script>

<style module>
.background {
  position: absolute;
  background-color: var(--color-black-transparent);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.flashlight {
  width: 160px;
  height: 160px;
  border: 8px solid var(--color-black-transparent);
  border-radius: 50%;
  background-color: var(--color-white-transparent);
  z-index: 2;
}

.search {
  animation: search 3s;
}

.magnify {
  animation: magnify 3s;
}

@keyframes search {
  from {
    transform: translate(-50%, -150%);
  }
  25% {
    transform: translate(50%, -150%);
  }
  50% {
    transform: translate(50%, 150%);
  }
  75% {
    transform: translate(-50%, 150%);
  }
  to {
    transform: translate(-50%, -150%);
  }
}

@keyframes magnify {
  from {
    transform: translate(-50%, -150%);
  }
  50% {
    transform: translate(0, 0);
  }
  to {
    transform: scale(6);
  }
}
</style>
