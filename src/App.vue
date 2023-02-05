<template>
  <LayoutBase>
    <router-view :class="$style.content" />
  </LayoutBase>
</template>

<script setup lang="ts">
import LayoutBase from '@/components/layout/LayoutBase.vue';
</script>

<style module>
.content {
  flex: 1;
  padding: 0 16px;
}
</style>
