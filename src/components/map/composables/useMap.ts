import { ref } from 'vue';

export function useMap() {
  const isInit = ref(true);
  const isCount = ref(false);
  const isSearch = ref(false);
  const isDecision = ref(false);

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
    }, 19900);
  }

  init();
  count();
  search();
  decision();

  return { isInit, isCount, isSearch, isDecision };
}
