<template>
  <div class="block" :class="{ white: !isDarkTheme }">
    <div class="container" :class="{ white: !isDarkTheme }">
      <div class="section">
        <div class="search">
          <img class="search-img" src="/images/loupe.svg" alt="" />
          <input
            class="input"
            type="text"
            placeholder="Searcch for a country..."
            @input="test"
          />
        </div>
      </div>

      <div class="country">
        <div v-if="isLoading">Загрузка данных...</div>
        <Country
          v-for="country in filtered"
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

const filtered = ref([]);

const test = (event) => {
  if (!event.target.value) {
    filtered.value = allCountries.value;
    return;
  }
  filtered.value = allCountries.value.filter((item) =>
    item.name.common.toLowerCase().includes(event.target.value.toLowerCase())
  );
};

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
    filtered.value = data;
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

.section {
  padding: 0 80px;
}

.search {
  position: relative;
  padding: 50px 0;
  max-width: 480px;
}

.search-img {
  position: absolute;
  width: 19px;
  left: 27px;
  top: 67px;
}

.input {
  background-color: #2b3743;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  padding: 20px;
  padding-left: 70px;
  width: 100%;
}

.input::placeholder {
  color: rgb(211, 213, 215);
}

.country {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 80px;
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
