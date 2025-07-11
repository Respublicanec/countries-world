import { defineStore } from "pinia";
import { ref } from "vue";

export const useDarkThemeStore = defineStore("theme", () => {
  const isDarkTheme = ref(true);

  function changeTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    if (isDarkTheme.value) {
      document.body.style.backgroundColor = "#212E37";
    } else {
      document.body.style.backgroundColor = "#FAFAFA";
    }
  }

  return { isDarkTheme, changeTheme };
});
