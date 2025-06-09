<template>
  <Header :darkTheme="darkTheme.isDarkTheme" @click="darkTheme.changeTheme" />
  <h1>222</h1>
  <router-link to="/">Назад</router-link>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { darkThemeStore } from "@/stores/common";

const darkTheme = darkThemeStore();
</script>
