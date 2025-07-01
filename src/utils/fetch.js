import { ref, watchEffect, toValue } from "vue";

export function useFetch(url) {
  const isLoading = ref(true);
  const data = ref(null);
  const error = ref(null);

  const fetchData = () => {
    data.value = null;
    error.value = null;
    isLoading.value = true;

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => {
        data.value = json;
        isLoading.value = false;
      })
      .catch((err) => (error.value = err));
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error, isLoading };
}
