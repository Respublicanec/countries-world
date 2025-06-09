<template>
  <Header :darkTheme="darkTheme.isDarkTheme" @click="darkTheme.changeTheme" />
  <h1>111</h1>
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import { darkThemeStore } from "@/stores/common";

const id = ref(1);

const darkTheme = darkThemeStore();
</script>
