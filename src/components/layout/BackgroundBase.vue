<template>
  <div :class="$style.background">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.background {
  --u: 3vmin;
  --c1: var(--color-background-transparent);
  --c2: var(--color-background-dark-transparent);
  --s1: var(--color-black-transparent);
  --gp: 50% / calc(var(--u) * 10) calc(var(--u) * 10);
  height: 100vh;
  background: repeating-conic-gradient(
        from 0deg at 50% 13.75%,
        var(--s1) 0 20.55%,
        #fff0 21.05% 79.13%,
        var(--s1) 79.63% 100%
      )
      var(--gp),
    repeating-conic-gradient(
        from 0deg at 50% 50%,
        #fff0 0 25%,
        var(--s1) 25% 29%,
        #fff0 30% 70%,
        var(--s1) 71% 75%,
        #fff0 75% 100%
      )
      var(--gp),
    repeating-conic-gradient(
        from 0deg at 50% 50%,
        var(--c1) 0 25%,
        var(--c2) 0% 50%,
        var(--c1) 0 75%,
        var(--c2) 0% 100%
      )
      var(--gp);
}
</style>
