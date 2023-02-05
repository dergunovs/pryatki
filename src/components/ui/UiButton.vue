<template>
  <component :is="props.tag" :class="$style.link">{{ props.label }}</component>
</template>

<script setup lang="ts">
interface IProps {
  tag: 'button' | 'RouterLink';
  label: string;
}

const props = withDefaults(defineProps<IProps>(), {
  tag: 'button',
});
</script>

<style module lang="scss">
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
