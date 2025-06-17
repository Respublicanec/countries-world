<template>
  <div class="header" :class="{ white: !isDarkTheme }">
    <header class="header-container full">
      <span class="title">Where in the world?</span>
      <div class="theme" @click="$emit('changeTheme')">
        <img
          class="icon"
          :class="{ 'icon-black': isDarkTheme }"
          src="/images/moon.svg"
        />
        <p>Dark Mode</p>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const emit = defineEmits(["click", "changeTheme"]);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #2b3743;
  color: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22px 78px;
}

.title {
  font-size: 26px;
}

.header.white .header-container,
.header.white .title,
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
</style>
