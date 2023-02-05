<template>
  <h1 :class="$style.title"><slot></slot></h1>
</template>

<style module lang="scss">
.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: var(--color-black);
  text-shadow: 2px 2px var(--color-white);
  margin: 32px 0;
}
</style>
