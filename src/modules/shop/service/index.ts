import { PLAYER_ITEMS } from '@/player/constants';
import { addItem, coins, items, removeCoins, setCurrentItem } from '@/player/service';

export function buyItem(id: number) {
  const item = PLAYER_ITEMS[id];
  const isPlayerHasItem = items.value.includes(id);
  const isBuyAvaliable = item.price <= coins.value && !isPlayerHasItem;

  if (isBuyAvaliable) {
    removeCoins(item.price);
    addItem(item.id);
  }

  if (isPlayerHasItem) setCurrentItem(item.id);
}
