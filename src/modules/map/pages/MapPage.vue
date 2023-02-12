<template>
  <div v-if="map">
    <MapIntro v-if="isIntro" :title="map.title" />

    <MapCounter v-if="isCount" />

    <MapImage
      v-if="!isIntro"
      :map="map"
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

import MapIntro from '@/map/components/MapIntro.vue';
import MapCounter from '@/map/components/MapCounter.vue';
import MapImage from '@/map/components/MapImage.vue';
import MapOutro from '@/map/components/MapOutro.vue';

import { useMap } from '@/map/composables/useMap';
import { setCurrentMap, addCoins, currentMap } from '@/player/service';
import { MAP_LIST, MAP_URL } from '@/map/constants';
import { CREDITS_URL } from '@/credits/constants';

const emit = defineEmits(['restart']);

const route = useRoute();
const router = useRouter();

const isPlayerWonMap = ref(false);

const map = computed(() => MAP_LIST[Number(route.params.id)]);

const { isIntro, isCount, isSearch, isDecision, isOutro, foundItems } = useMap(map);

watch(
  () => route.params.id,
  () => {
    if (route.params.id) emit('restart');
  }
);

function setPlayerState(state: boolean) {
  isPlayerWonMap.value = state;

  if (isPlayerWonMap.value) {
    addCoins(map.value?.coins as number);

    if (map.value.id === currentMap.value && map.value.id !== Object.keys(MAP_LIST).length - 1)
      setCurrentMap(map.value.id + 1);
  }
}

function handleNextPage() {
  const nextPage = map.value.id < Object.keys(MAP_LIST).length - 1 ? `${MAP_URL}/${map.value.id + 1}` : CREDITS_URL;

  router.push(nextPage);
}
</script>
