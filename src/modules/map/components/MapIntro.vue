<template>
  <div :class="$style.container">
    <div :class="$style.title">{{ props.title }}</div>
    <div>Скорее выбирай место,<br />где будешь прятаться!</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: var(--shadow-text);
  height: 100%;
  gap: 32px;
  animation: scale 3s;
}

.title {
  font-size: var(--font-l);
  font-weight: 700;
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
