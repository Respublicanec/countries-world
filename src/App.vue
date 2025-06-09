<template>
  <div id="app">
    <Header @click="changeTheme" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useDarkThemeStore } from "@/stores/common";

const darkTheme = useDarkThemeStore();

const { changeTheme } = darkTheme;
</script>

<style scoped></style>
