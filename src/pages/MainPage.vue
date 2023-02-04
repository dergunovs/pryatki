<template>
  <div :class="$style.main">
    <MainBackground />

    <div :class="$style.title">Спрячься<br />от Даши!</div>

    <TheDasha />

    <MainMenu />
  </div>
</template>

<script setup lang="ts">
import MainBackground from '@/components/layout/MainBackground.vue';
import MainMenu from '@/components/layout/MainMenu.vue';
import TheDasha from '@/components/TheDasha.vue';
</script>

<style module lang="scss">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  background: -webkit-linear-gradient(var(--color-black), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
}
</style>
