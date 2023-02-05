<template>
  <div :class="$style.dasha">
    <img src="/images/dasha/body.png" :class="$style.body" alt="Body" width="904" height="1413" loading="lazy" />
    <img src="/images/dasha/axe.png" :class="$style.axe" alt="Axe" width="398" height="424" loading="lazy" />
  </div>
</template>

<style module lang="scss">
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
</style>
