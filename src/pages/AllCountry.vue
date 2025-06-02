<template>
  <h1>111</h1>
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref } from "vue";
const id = ref(1);
</script>
