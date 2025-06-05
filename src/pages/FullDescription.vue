<template>
  <Header :darkTheme="darkTheme" @color-theme="colorTheme" />
  <h1>222</h1>
  <router-link to="/">Назад</router-link>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";

const darkTheme = ref(true);

const colorTheme = () => {
  console.log("fdg");
};
</script>
