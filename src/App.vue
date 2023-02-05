<template>
  <div :class="$style.layout">
    <ExitButton />

    <component :is="background" :class="$style.background">
      <Suspense>
        <router-view :class="$style.content" />
      </Suspense>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ExitButton from '@/components/layout/ExitButton.vue';
import BackgroundAnimated from '@/components/layout/BackgroundAnimated.vue';
import BackgroundBase from '@/components/layout/BackgroundBase.vue';

const route = useRoute();

const background = computed(() => (route.path === '/' ? BackgroundAnimated : BackgroundBase));
</script>

<style module>
.layout {
  position: relative;
  overflow: hidden;
}

.background {
  display: flex;
  height: 100vh;
  margin: 0 auto;
}

.content {
  flex: 1;
  padding: 0 16px;
}
</style>
