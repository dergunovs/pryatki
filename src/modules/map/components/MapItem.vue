<template>
  <button :class="$style.item" @click="emit('choise', props.index)">
    <img
      :src="props.item"
      :class="[
        $style.itemImage,
        props.index === props.choosenItem && $style.itemChoosen,
        props.foundItems.includes(props.index) && $style.found,
      ]"
      alt="Место"
    />

    <ThePlayer
      v-if="props.index === props.choosenItem"
      isHidden
      :isSearch="props.isSearch"
      :isFound="props.foundItems.includes(props.index)"
    />
  </button>
</template>

<script setup lang="ts">
import ThePlayer from '@/player/components/ThePlayer.vue';

const props = defineProps<{
  item: string;
  index: number;
  choosenItem?: number;
  foundItems: number[];
  isSearch: boolean;
}>();

const emit = defineEmits(['choise']);
</script>

<style module>
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

@media (min-width: 480px) {
  .item {
    display: flex;
    justify-content: center;
  }

  .itemImage {
    width: 60%;
  }
}
</style>
