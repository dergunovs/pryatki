<template>
  <div v-if="map">
    <MapInit v-show="isInit" :title="map.title" />
    <MapCount v-show="isCount" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import MapInit from '@/components/map/MapInit.vue';
import MapCount from '@/components/map/MapCount.vue';

import { useMap } from '@/components/map/composables/useMap';
import { MAP_LIST } from '@/components/map/constants';
import { IMap } from '@/components/map/interface';

const route = useRoute();
const { isInit, isCount } = useMap();

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === route.params.id));
</script>
