import { ref } from 'vue';

export const currentMap = ref(0);
export const coins = ref(0);
export const coinsDifference = ref('');
export const currentItem = ref(0);
export const items = ref<number[]>([0]);

export function initLS() {
  const lsCurrentMap = localStorage.getItem('pryatki_currentMap');
  const lsCoins = localStorage.getItem('pryatki_coins');
  const lsItems = localStorage.getItem('pryatki_items');
  const lsCurrentItem = localStorage.getItem('pryatki_currentItem');

  const isLsEmpty =
    lsCurrentMap !== null && lsCoins !== null && lsItems !== null && lsCurrentItem !== null ? false : true;

  setCurrentMap(isLsEmpty ? currentMap.value : Number(lsCurrentMap));
  setCoins(isLsEmpty ? coins.value : Number(lsCoins));
  setItems(isLsEmpty ? items.value : lsItems!.split(',').map(Number));
  setCurrentItem(isLsEmpty ? currentItem.value : Number(lsCurrentItem));
}

export function setCurrentMap(map: number) {
  currentMap.value = map;
  localStorage.setItem('pryatki_currentMap', currentMap.value.toString());
}

export function setCoins(coinsToSet: number) {
  coins.value = coinsToSet;
  localStorage.setItem('pryatki_coins', coins.value.toString());
}

export function addCoins(coinsToAdd: number) {
  coinsDifference.value = `+${coinsToAdd}`;
  setTimeout(() => {
    coinsDifference.value = '';
  }, 3000);

  coins.value += coinsToAdd;
  localStorage.setItem('pryatki_coins', coins.value.toString());
}

export function removeCoins(coinsToRemove: number) {
  coinsDifference.value = `-${coinsToRemove}`;
  setTimeout(() => {
    coinsDifference.value = '';
  }, 3000);

  coins.value -= coinsToRemove;
  localStorage.setItem('pryatki_coins', coins.value.toString());
}

export function setCurrentItem(item: number) {
  currentItem.value = item;
  localStorage.setItem('pryatki_currentItem', currentItem.value.toString());
}

export function setItems(itemsToSet: number[]) {
  items.value = [...itemsToSet];
  localStorage.setItem('pryatki_items', items.value.toString());
}

export function addItem(item: number) {
  items.value = [...items.value, item];
  localStorage.setItem('pryatki_items', items.value.toString());
}
