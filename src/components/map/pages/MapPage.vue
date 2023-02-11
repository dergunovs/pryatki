<template>
  <div v-if="map" :class="map">
    <MapIntro v-if="isIntro" :title="map.title" />

    <MapCounter v-if="isCount" />

    <MapImage
      v-if="!isIntro"
      :background="map.background"
      :items="map.items"
      :foundItems="foundItems"
      :isCount="isCount"
      :isSearch="isSearch"
      :isDecision="isDecision"
      @decision="setPlayerState"
    />

    <MapOutro v-if="isOutro" :isPlayerWon="isPlayerWonMap" @nextMap="handleNextPage" @restart="emit('restart')" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import MapIntro from '@/components/map/MapIntro.vue';
import MapCounter from '@/components/map/MapCounter.vue';
import MapImage from '@/components/map/MapImage.vue';
import MapOutro from '@/components/map/MapOutro.vue';

import { useMap } from '@/components/map/composables/useMap';
import { setCurrentMap, addCoins } from '@/components/player/service';
import { IMap } from '@/components/map/interface';
import { MAP_LIST, MAP_URL } from '@/components/map/constants';
import { CREDITS_URL } from '@/components/credits/constants';

const emit = defineEmits(['restart']);

const route = useRoute();
const router = useRouter();

const isPlayerWonMap = ref(false);

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === Number(route.params.id)));

const { isIntro, isCount, isSearch, isDecision, isOutro, foundItems } = useMap(map);

watch(
  () => route.params.id,
  () => {
    if (route.params.id) emit('restart');
  }
);

function setPlayerState(state: boolean) {
  isPlayerWonMap.value = state;

  if (isPlayerWonMap.value) addCoins(map.value?.coins as number);
}

function handleNextPage() {
  const currentId = map.value?.id as number;

  if (currentId < MAP_LIST.length - 1) {
    setCurrentMap(currentId + 1);
    router.push(`${MAP_URL}/${currentId + 1}`);
  } else {
    router.push(CREDITS_URL);
  }
}
</script>

<style module>
.map {
  position: relative;
}
</style>
