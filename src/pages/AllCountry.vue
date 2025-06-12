<template>
  <h1>{{}}</h1>
  <Countries :countries="countries" v-for="countries in allCountries" />
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Countries from "@/components/Countries.vue";

const id = ref(1);

const allCountries = ref([]);

onMounted(async () => {
  const response = await fetch(
    `https://restcountries.com/v3.1/independent?status=true`
  );
  const data = await response.json();
  allCountries.value = data;
});
</script>
