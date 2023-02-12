import { ComputedRef, ref } from 'vue';

import { IMap } from '@/map/interface';

export function useMap(map: ComputedRef<IMap | undefined>) {
  const isIntro = ref(true);
  const isCount = ref(false);
  const isSearch = ref(false);
  const isDecision = ref(false);
  const isOutro = ref(false);

  const foundItems = ref<number[]>([]);

  function intro() {
    setTimeout(() => {
      isIntro.value = false;
    }, 3000);
  }

  function count() {
    setTimeout(() => {
      isCount.value = true;
    }, 3000);

    setTimeout(() => {
      isCount.value = false;
    }, 10990);
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
        setTimeout(() => {
          const foundItem = items[Math.floor(Math.random() * items.length)];
          items = items.filter((item: number) => item !== foundItem);

          foundItems.value = [...foundItems.value, foundItem];
        }, (i + 1) * 400);
      }
    }, 19990);

    setTimeout(() => {
      isDecision.value = false;
    }, 23990);
  }

  function outro() {
    setTimeout(() => {
      isOutro.value = true;
    }, 24000);
  }

  intro();
  count();
  search();
  decision();
  outro();

  return { isIntro, isCount, isSearch, isDecision, isOutro, foundItems };
}
