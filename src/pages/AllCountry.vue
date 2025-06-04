<template>
  <Layout />
  <h1>111</h1>
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref } from "vue";
import Layout from "@/components/Layout.vue";
const id = ref(1);
</script>
