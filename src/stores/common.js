import { defineStore } from "pinia";
import { ref } from "vue";

export const useDarkThemeStore = defineStore("theme", () => {
  const isDarkTheme = ref(true);

  function changeTheme() {
    isDarkTheme.value = !isDarkTheme.value;
  }

  return { isDarkTheme, changeTheme };
});
