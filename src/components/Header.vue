<template>
  <header class="header" :class="{ white: !darkTheme }">
    <h1 class="title" :class="{ white: !darkTheme }">Where in the world?</h1>
    <div class="theme" @click="colorTheme()">
      <img
        class="icon"
        :class="{ 'icon-black': darkTheme }"
        src="/images/moon.svg"
      />
      <p class="theme-text">Dark Mode</p>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const darkTheme = ref(true);

const colorTheme = () => {
  darkTheme.value = !darkTheme.value;
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-family: sans-serif;
}

.header {
  display: flex;
  background-color: #2b3743;
  color: #ffffff;
  padding: 10px 78px;
  align-items: center;
}

.white {
  background-color: #ffffff;
  color: #000000;
}

.theme {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 8px;
  gap: 10px;
}

.icon {
  height: 18px;
}

.icon-black {
  filter: brightness(0) invert(1);
}

.theme-text {
  font-family: "NunitoSans", sans-serif;
  font-size: 16px;
}
</style>
