import { ComputedRef, ref } from 'vue';

import { IMap } from '@/components/map/interface';

export function useMap(map: ComputedRef<IMap | undefined>) {
  const isInit = ref(true);
  const isCount = ref(false);
  const isSearch = ref(false);
  const isDecision = ref(false);

  const foundItems = ref<number[]>([]);

  function init() {
    setTimeout(() => {
      isInit.value = false;
    }, 3000);
  }

  function count() {
    setTimeout(() => {
      isCount.value = true;
    }, 3000);

    setTimeout(() => {
      isCount.value = false;
    }, 10900);
  }

  function search() {
    setTimeout(() => {
      isSearch.value = true;
    }, 11000);

    setTimeout(() => {
      isSearch.value = false;
    }, 20000);
  }

  function decision() {
    setTimeout(() => {
      isDecision.value = true;

      if (!map.value) return;

      let items = [...Array(map.value.items.length).keys()];

      for (let i = 0; i < map.value.itemsToFind; i++) {
        const foundItem = items[Math.floor(Math.random() * items.length)];
        items = items.filter((item: number) => item !== foundItem);

        foundItems.value = [...foundItems.value, foundItem];
      }
    }, 19900);
  }

  init();
  count();
  search();
  decision();

  return { isInit, isCount, isSearch, isDecision, foundItems };
}
