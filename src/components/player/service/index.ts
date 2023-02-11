import { ref } from 'vue';

export const currentMap = ref(0);
export const coins = ref(0);

export function setCurrentMap(mapId: number) {
  currentMap.value = mapId;
}

export function addCoins(coinsToAdd: number) {
  coins.value += coinsToAdd;
}
