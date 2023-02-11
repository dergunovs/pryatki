<template>
  <div :class="$style.background">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import backgroundImage from '@/components/layout/images/background.jpg';

const background = ref(`url(${backgroundImage})`);
</script>

<style module>
.background {
  background-image: v-bind(background);
  background-size: cover;
  background-position: center;
}
</style>
