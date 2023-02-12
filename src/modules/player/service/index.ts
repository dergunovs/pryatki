import { ref } from 'vue';

export const currentMap = ref(0);
export const coins = ref(0);
export const currentItem = ref(0);
export const items = ref<number[]>([0]);

export function initLS() {
  const lsCurrentMap = localStorage.getItem('pryatki_currentMap');
  const lsCoins = localStorage.getItem('pryatki_coins');
  const lsItems = localStorage.getItem('pryatki_items');

  const isLsEmpty = lsCurrentMap !== null && lsCoins !== null && lsItems !== null ? false : true;

  setCurrentMap(isLsEmpty ? currentMap.value : Number(lsCurrentMap));
  setCoins(isLsEmpty ? coins.value : Number(lsCoins));
  setItems(isLsEmpty ? items.value : lsItems!.split(',').map(Number));
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

export function setItems(itemsToSet: number[]) {
  items.value = [...itemsToSet];
  localStorage.setItem('pryatki_items', items.value.toString());
}
