<template>
  <div class="card" :class="{ 'card-white': !isDarkTheme }">
    <img class="img" :src="country.flags.svg" alt="" />
    <div class="info">
      <p class="name">{{ country.name.common }}</p>
      <div class="parameters">
        <p>
          <span class="bold">Population:</span>
          {{ country.population }}
        </p>
        <p>
          <span class="bold">Region:</span>
          {{ country.region }}
        </p>
        <p>
          <span class="bold">Capital:</span>
          {{ country.capital[0] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const props = defineProps({
  country: {
    type: Object, // Изменено с Array на Object
    required: true,
  },
});
</script>

<style>
.card {
  min-height: 340px;
  background-color: #2b3743;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card-white {
  background-color: #ffffff;
  color: black;
}

.img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.info {
  padding: 22px 25px;
}

.name {
  font-size: 18px;
}

.parameters {
  display: grid;
  gap: 8px;
  padding-top: 20px;
  font-size: 13px;
}

.bold {
  font-weight: bold;
}
</style>
