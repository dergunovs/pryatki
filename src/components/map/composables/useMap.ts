import { ref } from 'vue';

export function useMap() {
  const isInit = ref(false);
  const isCount = ref(false);

  function init() {
    setTimeout(() => {
      isInit.value = true;
    }, 500);

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
    }, 10000);
  }

  init();
  count();

  return { isInit, isCount };
}
