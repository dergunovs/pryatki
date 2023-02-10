import { ref } from 'vue';

export const currentMap = ref(0);

export function setMap(mapId: number) {
  currentMap.value = mapId;
}
