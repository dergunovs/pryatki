<template>
  <div :class="$style.maps">
    <MapLink v-for="map in MAP_LIST" :key="map.id" :map="map" />
  </div>
</template>

<script setup lang="ts">
import MapLink from '@/map/components/MapLink.vue';

import { MAP_LIST } from '@/map/constants';
</script>

<style module>
.maps {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
