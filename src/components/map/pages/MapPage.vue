<template>
  <div v-if="map" :class="map">
    <MapIntro v-if="isIntro" :title="map.title" />

    <MapCounter v-if="isCount" />

    <MapImage
      v-if="!isIntro"
      :map="map.map"
      :items="map.items"
      :foundItems="foundItems"
      :isCount="isCount"
      :isSearch="isSearch"
      :isDecision="isDecision"
      @decision="setPlayerState"
    />

    <MapOutro v-if="isOutro" :isPlayerWon="isPlayerWon" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import MapIntro from '@/components/map/MapIntro.vue';
import MapCounter from '@/components/map/MapCounter.vue';
import MapImage from '@/components/map/MapImage.vue';
import MapOutro from '@/components/map/MapOutro.vue';

import { useMap } from '@/components/map/composables/useMap';
import { IMap } from '@/components/map/interface';
import { MAP_LIST } from '@/components/map/constants';

const route = useRoute();

const isPlayerWon = ref(false);

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === route.params.id));

const { isIntro, isCount, isSearch, isDecision, isOutro, foundItems } = useMap(map);

function setPlayerState(state: boolean) {
  isPlayerWon.value = state;
}
</script>

<style module>
.map {
  position: relative;
}
</style>
