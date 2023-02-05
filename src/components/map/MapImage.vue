<template>
  <div :class="$style.container">
    <img :src="props.map" :class="$style.map" alt="Карта" loading="lazy" />

    <ThePlayer v-if="!choosenItem" />

    <div :class="$style.items">
      <button
        @click="chooseItem(i + 1)"
        v-for="(item, i) in items"
        :key="`item${i}`"
        :disabled="props.isSearching"
        :class="$style.item"
      >
        <img
          :src="item"
          :class="[$style.itemImage, i + 1 === choosenItem && $style.itemChoosen]"
          alt="Место"
          loading="lazy"
        />

        <ThePlayer v-if="i + 1 === choosenItem" isHidden :isSearching="props.isSearching" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ThePlayer from '@/components/player/ThePlayer.vue';

interface IProps {
  map: string;
  items: string[];
  isSearching?: boolean;
}

const props = defineProps<IProps>();

const choosenItem = ref(0);

function chooseItem(item: number) {
  choosenItem.value = item;
}
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

.items {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.item {
  position: relative;
  max-width: 50%;
  background: none;
  border: 0;
}

.itemImage {
  display: flex;
  width: 100%;
  height: auto;
}

.itemChoosen {
  position: relative;
  filter: drop-shadow(0 0 8px var(--color-primary));
  z-index: 2;
}
</style>
