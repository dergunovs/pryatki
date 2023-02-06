<template>
  <div :class="$style.items">
    <button
      @click="emit('choise', i.toString())"
      v-for="(item, i) in props.items"
      :key="`item${i}`"
      :disabled="props.isSearch || props.isDecision"
      :class="$style.item"
    >
      <img
        :src="item"
        :class="[$style.itemImage, i.toString() === props.choosenItem && $style.itemChoosen]"
        alt="Место"
        loading="lazy"
      />

      <ThePlayer v-if="i.toString() === props.choosenItem" isHidden :isSearch="props.isSearch" />
    </button>
  </div>
</template>

<script setup lang="ts">
import ThePlayer from '@/components/player/ThePlayer.vue';

interface IProps {
  items: string[];
  choosenItem?: string;
  isSearch: boolean;
  isDecision: boolean;
}

const props = defineProps<IProps>();
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
  filter: drop-shadow(0 0 8px var(--color-primary));
  z-index: 2;
}
</style>
