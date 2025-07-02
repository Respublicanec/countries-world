import { ref, watchEffect, toValue } from "vue";

export function useFetch(url) {
  const isLoading = ref(true);
  const data = ref(null);
  const error = ref(null);

  async function fetchData() {
    data.value = null;
    error.value = null;
    isLoading.value = true;

    try {
      const res = await fetch(url.value);
      data.value = await res.json();
      isLoading.value = false;
    } catch (err) {
      error.value = err;
    }
  }

  watchEffect(() => {
    fetchData();
  });

  return { data, error, isLoading };
}
