<template>
  <button :class="$style.button" type="button">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<style module>
.button {
  padding: 12px 48px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 32px;
  text-align: center;
  text-decoration: none;
  font-size: var(--font-l);
  font-weight: 700;
  background: none;
}
</style>
