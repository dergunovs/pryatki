<template>
  <h1 :class="$style.title">
    <slot></slot>
  </h1>
</template>

<style module>
.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: var(--color-black);
  text-shadow: 4px 4px var(--color-white);
  margin-top: 56px;
  margin-bottom: 24px;
}
</style>
