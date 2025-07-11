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

        <Filters
          :regions="regions"
          :isDarkTheme="isDarkTheme"
          v-model="selectedRegion"
        />
      </div>

      <div>
        <div
          v-if="error"
          class="message"
          :class="{ 'message-black': !isDarkTheme }"
        >
          error {{ error.message }}
        </div>
        <div
          v-else-if="isLoading"
          class="message"
          :class="{ 'message-black': !isDarkTheme }"
        >
          Загрузка данных...
        </div>
        <!-- Если ничего не найдено, то возвращается ошибка вместо пустого массива -->
        <div
          v-else-if="data.status === 404 || countries.length === 0"
          class="message"
          :class="{ 'message-black': !isDarkTheme }"
        >
          Ничего не найдено
        </div>
        <div v-else class="country">
          <Country
            v-for="country in countries"
            :key="country.name.common"
            :country="country"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Country from "@/components/Country.vue";
import Filters from "@/components/Filters.vue";
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";
import { useFetch } from "@/composables/fetch.js";

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const name = ref("");

const selectedRegion = ref("");

const baseUrl = computed(() => {
  return name.value
    ? `https://restcountries.com/v3.1/name/${name.value}`
    : `https://restcountries.com/v3.1/independent?status=true`;
});

const { data, error, isLoading } = useFetch(baseUrl);

const countries = computed(() => {
  if (!selectedRegion.value || selectedRegion.value === "All") {
    return data.value;
  } else {
    return data.value.filter((item) => item.region === selectedRegion.value);
  }
});

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
</script>

<style scoped>
.block {
  display: flex;
  justify-content: center;
  background-color: #212e37;
  border: none;
}

.container {
  width: 100%;
}

.section {
  display: flex;
  justify-content: space-between;
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

.message {
  padding: 0 80px;
  color: white;
}

.message-black {
  color: rgb(0, 0, 0);
}

.input {
  background-color: #2b3743;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  padding: 20px 250px 20px 70px;

  width: 100%;
}

.input-white::placeholder {
  color: rgb(211, 213, 215);
}

.input-white::placeholder {
  color: rgb(0, 0, 0);
}

.select-container::after {
  border-bottom: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  content: "";
  padding: 2px;
  position: absolute;
  right: 22px;
  top: 44%;

  transform: rotate(45deg);
  pointer-events: none;
}

.white {
  background-color: #fafafa;
}

.input-white {
  background-color: #ffffff;
  color: black;
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
