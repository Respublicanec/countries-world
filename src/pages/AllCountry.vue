<template>
  <Header />
  <h1>111</h1>
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
const id = ref(1);
</script>
