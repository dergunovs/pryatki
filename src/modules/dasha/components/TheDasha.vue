<template>
  <div :class="[$style.dasha, props.isSearch && $style.search]">
    <img :src="ImageDasha" :class="$style.body" alt="Dasha" width="600" height="1200" />
  </div>
</template>

<script setup lang="ts">
import ImageDasha from '@/dasha/images/image.png';

const props = defineProps<{ isSearch?: boolean }>();
</script>

<style module>
.dasha {
  position: relative;
  z-index: 3;
  max-width: 50%;
}

.body {
  width: 100%;
  height: auto;
  animation: rotate 1s infinite;
}

.search {
  position: absolute;
  width: 100px;
  height: 200px;
  animation: walk 3s;
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
    top: -200px;
  }
  to {
    top: calc(50% - 100px);
  }
}

@media (min-width: 480px) {
  .body {
    max-height: 800px;
  }

  .search {
    width: 200px;
    height: 400px;
  }

  @keyframes walk {
    from {
      top: -400px;
    }
    to {
      top: calc(50% - 200px);
    }
  }
}
</style>
