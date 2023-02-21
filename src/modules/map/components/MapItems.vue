<template>
  <div :class="$style.items">
    <MapItem
      v-for="(item, index) in props.items"
      :key="`item${index}`"
      :item="item"
      :index="index"
      :choosenItem="props.choosenItem"
      :foundItems="props.foundItems"
      :isSearch="props.isSearch"
      :disabled="props.isSearch || props.isDecision"
      @choise="handleChoise"
    />
  </div>
</template>

<script setup lang="ts">
import MapItem from '@/map/components/MapItem.vue';

const props = defineProps<{
  items: string[];
  choosenItem?: number;
  foundItems: number[];
  isSearch: boolean;
  isDecision: boolean;
}>();

const emit = defineEmits(['choise']);

function handleChoise(index: number) {
  emit('choise', index);
}
</script>

<style module>
.items {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>
