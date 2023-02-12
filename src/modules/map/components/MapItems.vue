<template>
  <div :class="$style.items">
    <button
      @click="emit('choise', i)"
      v-for="(item, i) in props.items"
      :key="`item${i}`"
      :disabled="props.isSearch || props.isDecision"
      :class="$style.item"
    >
      <img
        :src="item"
        :class="[
          $style.itemImage,
          i === props.choosenItem && $style.itemChoosen,
          props.foundItems.includes(i) && $style.found,
        ]"
        alt="Место"
      />

      <ThePlayer
        v-if="i === props.choosenItem"
        isHidden
        :isSearch="props.isSearch"
        :isFound="props.foundItems.includes(i)"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import ThePlayer from '@/player/components/ThePlayer.vue';

const props = defineProps<{
  items: string[];
  choosenItem?: number;
  foundItems: number[];
  isSearch: boolean;
  isDecision: boolean;
}>();

const emit = defineEmits(['choise']);
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

.item {
  position: relative;
  max-width: 50%;
  background: none;
  border: 0;
  z-index: 2;
}

.itemImage {
  display: flex;
  width: 100%;
  height: auto;
}

.itemChoosen {
  position: relative;
  filter: var(--shadow-primary);
  z-index: 2;
}

.found {
  filter: brightness(0.2) var(--shadow-red);
}
</style>
