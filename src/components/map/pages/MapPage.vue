<template>
  <div v-if="map" :class="map">
    <MapInit v-if="isInit" :title="map.title" />
    <MapCounter v-if="isCount" />

    <MapImage
      v-if="!isInit"
      :map="map.map"
      :items="map.items"
      :foundItems="foundItems"
      :isSearch="isSearch"
      :isDecision="isDecision"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import MapInit from '@/components/map/MapInit.vue';
import MapCounter from '@/components/map/MapCounter.vue';
import MapImage from '@/components/map/MapImage.vue';

import { useMap } from '@/components/map/composables/useMap';
import { IMap } from '@/components/map/interface';
import { MAP_LIST } from '@/components/map/constants';

const route = useRoute();

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === route.params.id));

const { isInit, isCount, isSearch, isDecision, foundItems } = useMap(map);
</script>

<style module>
.map {
  position: relative;
}
</style>
