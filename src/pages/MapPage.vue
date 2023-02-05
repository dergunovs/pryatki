<template>
  <div>
    <UiTitle>{{ map?.title }}</UiTitle>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import UiTitle from '@/components/ui/UiTitle.vue';

import { MAP_LIST } from '@/components/map/constants';
import { IMap } from '@/components/map/interface';

const route = useRoute();

const map = computed(() => MAP_LIST.find((map: IMap) => map.id === route.params.id));
</script>
