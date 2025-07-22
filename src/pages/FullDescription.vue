<template>
  <router-link
    to="/"
    class="back-link"
    :class="{ 'border-white': isDarkTheme }"
  >
    <div class="back" :class="{ white: isDarkTheme }">Back</div>
    <img
      class="img"
      :class="{ 'img-white': isDarkTheme }"
      src="/images/arrow-left.svg"
      alt=""
  /></router-link>
  <div v-if="!data">Загрузка...</div>
  <div v-else class="block">
    <img class="flag" :src="data.flags?.svg" alt="" />
    <div :class="{ white: isDarkTheme }">
      <h2 class="name">{{ data.name.common }}</h2>
      <div class="info">
        <p>
          <span>Native Name:</span>
          {{ getNativeName() }}
        </p>
        <p>
          <span>Population:</span>
          {{ data.population }}
        </p>
        <p>
          <span>Region:</span>
          {{ data.region }}
        </p>
        <p>
          <span>Sub Region:</span>
          {{ data.subregion }}
        </p>
        <p>
          <span>Capital:</span>
          {{ data.capital[0] }}
        </p>
        <div class="empty"></div>
        <p>
          <span>Top Level Domain:</span>
          {{ data.tld[0] }}
        </p>
        <p>
          <span>Currencies:</span>
          {{ getCurrency() }}
        </p>
        <p>
          <span>Languages:</span>
          {{ getLanguages() }}
          {{ getBorders() }}
        </p>
      </div>
      <div class="borders-block">
        <span class="countries">Border Countries:</span>
        <div class="border-list">
          <div
            class="border"
            :class="{ 'border-white': isDarkTheme }"
            v-for="border in data.borders"
          >
            {{ border }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useFetch } from "@/composables/fetch.js";

const route = useRoute();
const cca2 = route.params.cca2;

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const baseUrl = ref(
  `https://restcountries.com/v3.1/alpha/${cca2}?fields=name,flags,nativeName,capital,borders,region,subregion,tld,currencies,population,languages`
);

const { data } = useFetch(baseUrl);

function getNativeName() {
  const nativeNameCode = Object.keys(data.value.name.nativeName)[0];
  const nativeName = data.value.name.nativeName[nativeNameCode].common;
  return nativeName;
}

function getCurrency() {
  const currencyCode = Object.keys(data.value.currencies)[0];
  const currency = data.value.currencies[currencyCode].name;
  return currency;
}

function getLanguages() {
  const languageNames = Object.values(data.value.languages);
  return languageNames.join(". ");
}

function getBorders() {
  const bordersCode = Object.values(data.value.borders);
  const borders = [];
  for (let i = 0; i < bordersCode.length; i++) {
    borders.push;
  }
}
</script>

<style scoped>
.back-link {
  position: relative;
  display: flex;
  width: 135px;
  height: 40px;
  margin-top: 82px;
  margin-left: 78px;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  @media (max-width: 800px) {
    margin-top: 82px;
    margin-left: 50px;
    width: 210px;
    height: 65px;
  }
}

.back {
  color: black;
  padding-left: 58px;

  @media (max-width: 800px) {
    padding-left: 100px;
    font-size: 26px;
  }
}

.img {
  position: absolute;
  left: 30px;
  top: 10px;
  height: 20px;
  width: 22px;

  @media (max-width: 800px) {
    left: 48px;
    top: 17px;
    height: 30px;
    width: 39px;
  }
}

.img-white {
  filter: invert(1);
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  padding: 80px 77px;

  @media (max-width: 1000px) {
    padding: 126px 60px 50px 50px;
    gap: 50px;
    grid-template-columns: 1fr;
  }
}

p {
  font-size: 15px;

  @media (max-width: 800px) {
    font-size: 28px;
    font-weight: 100;
  }
}

span {
  font-weight: 600;
  font-size: 15px;

  @media (max-width: 800px) {
    font-size: 28px;
    font-weight: 500;
  }
}

.flag {
  padding-right: 45px;
  width: 100%;
  max-height: 400px;
  object-fit: cover;

  @media (max-width: 800px) {
    height: 100%;
    max-height: 460px;
    padding-right: 0;
  }
}

.name {
  padding-top: 45px;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 800px) {
    padding-top: 42px;
    font-size: 43px;
  }
}

.info {
  padding-top: 32px;
  padding-left: 2px;
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  gap: 15px;
  column-gap: 130px;

  @media (max-width: 800px) {
    grid-auto-flow: row;
    padding-top: 56px;
    gap: 32px;
  }
}

.empty {
  display: none;

  @media (max-width: 800px) {
    display: block;
    height: 32px;
  }
}

.borders-block {
  display: flex;
  align-items: center;
  padding-top: 80px;

  @media (max-width: 800px) {
    align-items: start;
    flex-direction: column;
  }
}

.border-list {
  display: flex;
  gap: 10px;
  padding: 0 20px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    padding: 40px 0;
    gap: 20px;
  }
}

.border {
  font-size: 10px;
  padding: 7px 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 5px;

  @media (max-width: 800px) {
    padding: 18px 60px;
    font-size: 20px;
    font-weight: 400;
  }
}

.countries {
  @media (max-width: 800px) {
    padding-top: 7px;
    font-size: 30px;
  }
}

.white {
  color: rgb(255, 255, 255);
}

.border-white {
  color: rgb(255, 255, 255);
  background-color: #2b3743;
}
</style>
