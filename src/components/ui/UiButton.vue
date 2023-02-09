<template>
  <component :is="props.tag" :class="$style.link">{{ props.label }}</component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ tag: 'button' | 'RouterLink'; label: string }>(), {
  tag: 'button',
});
</script>

<style module>
.link {
  padding: 12px 48px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 32px;
  text-align: center;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
