<template>
  <div id="app">
    <Header @click="darkTheme.changeTheme" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useDarkThemeStore } from "@/stores/common";

const darkTheme = useDarkThemeStore();
</script>

<style scoped></style>
