<template>
  <h1>{{}}</h1>
  <div v-if="isLoading">Загрузка данных...</div>
  <Country v-else :country="country" v-for="country in allCountries" />
  <router-link :to="`/${id}`">Вперед</router-link>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Country from "@/components/country.vue";

const id = ref(1);

const isLoading = ref(true);

const allCountries = ref([]);

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await fetch(
      `https://restcountries.com/v3.1/independent?status=true`
    );
    if (!response.ok) {
      throw new Error(`Ошибка`);
    }
    const data = await response.json();
    allCountries.value = data;
    isLoading.value = false;
  } catch (err) {
    console.log(err);
  }
});
</script>
