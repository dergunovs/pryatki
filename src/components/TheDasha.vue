<template>
  <div :class="$style.dasha">
    <img src="/images/dasha/body.png" :class="$style.body" />
    <img src="/images/dasha/axe.png" :class="$style.axe" />
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
  animation: body 1s infinite;
}

.axe {
  position: absolute;
  width: 128px;
  height: auto;
  right: -24px;
  top: 26%;
  animation: axe 1s infinite;
}

@keyframes axe {
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

@keyframes body {
  from {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: rotate(8deg);
    animation-timing-function: ease-out;
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
