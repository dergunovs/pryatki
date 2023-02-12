<template>
  <h1 :class="$style.title">
    <slot></slot>
  </h1>
</template>

<style module>
.title {
  font-size: var(--font-xl);
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: var(--color-black);
  text-shadow: var(--shadow-text);
  margin-top: 56px;
  margin-bottom: 16px;
}
</style>
