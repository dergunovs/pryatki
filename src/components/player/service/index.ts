import { ref } from 'vue';

export const currentMap = ref(0);
export const currentImage = ref(0);
export const coins = ref(0);

export function checkLS() {
  const lsCurrentMap = localStorage.getItem('pryatki_currentMap');
  const lsCoins = localStorage.getItem('pryatki_coins');

  if (lsCurrentMap && lsCoins) {
    setCurrentMap(Number(lsCurrentMap));
    setCoins(Number(lsCoins));
  }
}

export function setCurrentMap(mapToSet: number) {
  currentMap.value = mapToSet;
  localStorage.setItem('pryatki_currentMap', currentMap.value.toString());
}

export function setCoins(coinsToSet: number) {
  coins.value = coinsToSet;
  localStorage.setItem('pryatki_coins', coins.value.toString());
}

export function addCoins(coinsToAdd: number) {
  coins.value += coinsToAdd;
  localStorage.setItem('pryatki_coins', coins.value.toString());
}
