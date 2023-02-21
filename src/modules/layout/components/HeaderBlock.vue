<template>
  <header :class="$style.header">
    <HeaderCoins />
    <HeaderExit />
  </header>
</template>

<script setup lang="ts">
import HeaderCoins from '@/layout/components/HeaderCoins.vue';
import HeaderExit from '@/layout/components/HeaderExit.vue';
</script>

<style module>
.header {
  position: absolute;
  left: 16px;
  right: 16px;
  top: 12px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
}
</style>
