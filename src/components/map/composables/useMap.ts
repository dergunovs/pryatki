import { ref } from 'vue';

export function useMap() {
  const isInit = ref(true);
  const isCount = ref(false);
  const isSearching = ref(false);

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
      isSearching.value = true;
    }, 11000);
  }

  init();
  count();
  search();

  return { isInit, isCount, isSearching };
}
