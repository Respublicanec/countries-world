<template>
  <div class="block" :class="{ white: !isDarkTheme }">
    <div class="container-1440" :class="{ white: !isDarkTheme }">
      <div class="country">
        <div v-if="isLoading">Загрузка данных...</div>
        <Country
          v-for="country in allCountries"
          :key="country.name.common"
          :country="country"
        />
      </div>

      <router-link :to="`/${id}`">Вперед</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Country from "@/components/country.vue";
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

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
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style>
.block {
  display: flex;
  justify-content: center;
  background-color: #212e37;
  border: none;
}

.white {
  background-color: #fafafa;
}

.country {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 80px;
  gap: 70px;

  @media (max-width: 1400px) {
    gap: 60px;
  }

  @media (max-width: 1300px) {
    gap: 40px;
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
