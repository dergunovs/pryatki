<template>
  <div :class="$style.container">
    <img :src="props.map" :class="$style.map" alt="Карта" loading="lazy" />

    <ThePlayer v-if="!choosenItem" />

    <MapItems :items="props.items" :choosenItem="choosenItem" :isSearching="props.isSearching" @choose="setItem" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import MapItems from '@/components/map/MapItems.vue';
import ThePlayer from '@/components/player/ThePlayer.vue';

interface IProps {
  map: string;
  items: string[];
  isSearching?: boolean;
}

const props = defineProps<IProps>();

const choosenItem = ref(0);

function setItem(item: number) {
  choosenItem.value = item;
}

watch(
  () => props.isSearching,
  () => {
    if (!choosenItem.value && props.isSearching) choosenItem.value = 1;
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
