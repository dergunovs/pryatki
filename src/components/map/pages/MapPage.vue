<template>
  <div v-if="map" :class="map">
    <MapInit v-if="isInit" :title="map.title" />
    <MapCount v-if="isCount" />

    <MapImage v-if="!isInit" :map="map.map" :items="map.items" :isSearching="isSearching" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import MapInit from '@/components/map/MapInit.vue';
import MapCount from '@/components/map/MapCount.vue';
import MapImage from '@/components/map/MapImage.vue';

import { useMap } from '@/components/map/composables/useMap';
import { MAP_LIST } from '@/components/map/constants';
import { IMap } from '@/components/map/interface';

const route = useRoute();
const { isInit, isCount, isSearching } = useMap();

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === route.params.id));
</script>

<style module>
.map {
  position: relative;
}
</style>
