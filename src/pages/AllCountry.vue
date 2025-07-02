<template>
  <div class="block" :class="{ white: !isDarkTheme }">
    <div class="container" :class="{ white: !isDarkTheme }">
      <div class="section">
        <div class="search">
          <img
            class="search-img"
            :class="{ 'img-black': !isDarkTheme }"
            src="/images/loupe.svg"
            alt=""
          />
          <input
            class="input"
            :class="{ 'input-white': !isDarkTheme }"
            type="text"
            placeholder="Searcch for a country..."
            v-model="name"
          />
        </div>
      </div>

      <div class="country">
        <div v-if="error">Error</div>
        <div v-else-if="isLoading">Загрузка данных...</div>
        <Country
          v-for="country in data"
          :key="country.name.common"
          :country="country"
        />
      </div>

      <router-link :to="`/${id}`">Вперед</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Country from "@/components/country.vue";
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";
import { useFetch } from "@/composables/fetch.js";

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const id = ref(1);

const name = ref("");

const baseUrl = computed(() => {
  return name.value
    ? `https://restcountries.com/v3.1/name/${name.value}`
    : `https://restcountries.com/v3.1/independent?status=true`;
});

const { data, error, isLoading } = useFetch(baseUrl);
</script>

<style>
.block {
  display: flex;
  justify-content: center;
  background-color: #212e37;
  border: none;
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

.white {
  background-color: #fafafa;
}

.input-white {
  background-color: #ffffff;
}

.img-black {
  filter: invert(1);
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
