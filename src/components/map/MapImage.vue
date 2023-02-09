<template>
  <div :class="$style.container">
    <img :src="props.map" :class="$style.map" alt="Карта" />

    <MapItems
      v-if="props.isCount || props.isSearch || props.isDecision"
      :items="props.items"
      :choosenItem="choosenItem"
      :foundItems="props.foundItems"
      :isSearch="props.isSearch"
      :isDecision="props.isDecision"
      @choise="setItem"
    />

    <ThePlayer v-if="choosenItem === undefined" />

    <MapSearch v-if="props.isSearch" />

    <TheDasha v-if="props.isSearch || props.isDecision" isSearch />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import MapItems from '@/components/map/MapItems.vue';
import MapSearch from '@/components/map/MapSearch.vue';

import ThePlayer from '@/components/player/ThePlayer.vue';
import TheDasha from '@/components/dasha/TheDasha.vue';

const props = defineProps<{
  map: string;
  items: string[];
  foundItems: number[];
  isCount: boolean;
  isSearch: boolean;
  isDecision: boolean;
}>();

const emit = defineEmits(['decision']);

const choosenItem = ref<number>();

function setItem(item: number) {
  choosenItem.value = item;
}

watch(
  () => props.isSearch,
  () => {
    if (!choosenItem.value && props.isSearch) choosenItem.value = 0;
  }
);

watch(
  () => props.foundItems,
  () => {
    if (props.foundItems && choosenItem.value !== undefined) {
      const isPlayerWon = !props.foundItems.includes(choosenItem.value);
      emit('decision', isPlayerWon);
    }
  }
);
</script>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -16px;
}

.map {
  width: 100%;
  height: 100%;
}
</style>
