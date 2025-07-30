<template>
  <div class="container">
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
    <div v-if="!data" class="load" :class="{ black: !isDarkTheme }">
      Загрузка данных...
    </div>
    <div v-else class="block">
      <img class="flag" :src="data.flags?.svg" alt="" />
      <div class="container-info" :class="{ white: isDarkTheme }">
        <h2 class="name">{{ data.name.common }}</h2>
        <div class="info">
          <div class="info-column">
            <p>
              <span>Native Name:</span>
              {{ getNativeName }}
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
          </div>
          <div class="info-column">
            <p>
              <span>Top Level Domain:</span>
              {{ data.tld[0] }}
            </p>
            <p>
              <span>Currencies:</span>
              {{ getCurrency }}
            </p>
            <p>
              <span>Languages:</span>
              {{ getLanguages }}
            </p>
          </div>
        </div>
        <div class="borders-countries-block">
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
  </div>
</template>

<script setup>
import { useDarkThemeStore } from "@/stores/common";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useFetch } from "@/composables/fetch.js";
import { ref, computed } from "vue";

const route = useRoute();

const darkTheme = useDarkThemeStore();

const { isDarkTheme } = storeToRefs(darkTheme);

const baseUrl = computed(
  () =>
    `https://restcountries.com/v3.1/alpha/${route.params.cca2}?fields=name,flags,nativeName,capital,borders,region,subregion,tld,currencies,population,languages`
);

const { data } = useFetch(baseUrl);

const getNativeName = computed(() => {
  const nativeNameCode = Object.keys(data.value.name.nativeName)[0];
  const nativeName = data.value.name.nativeName[nativeNameCode].common;
  return nativeName;
});

const getCurrency = computed(() => {
  const currencyCode = Object.keys(data.value.currencies)[0];
  const currency = data.value.currencies[currencyCode].name;
  return currency;
});

const getLanguages = computed(() => {
  const languageNames = Object.values(data.value.languages);
  return languageNames.join(". ");
});
</script>

<style scoped>
.container {
  margin: auto;
}
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

  @media (max-width: 450px) {
    border-radius: 3px;
    margin-top: 42px;
    margin-left: 22px;
    width: 105px;
    height: 33px;
  }
}

.back {
  color: black;
  padding-left: 58px;

  @media (max-width: 450px) {
    font-weight: 100;
    padding-left: 45px;
    font-size: 15px;
  }
}

.img {
  position: absolute;
  left: 30px;
  top: 10px;
  height: 20px;
  width: 22px;

  @media (max-width: 600px) {
    left: 22px;
    top: 9px;
    height: 16px;
    width: 20px;
  }
}

.img-white {
  filter: invert(1);
}

.block {
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  padding: 80px 77px;

  @media (max-width: 950px) {
    padding: 64px 77px 20px 77px;
    gap: 2px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    padding: 64px 33px 20px 22px;
  }
}

.load {
  color: rgb(255, 255, 255);
  padding: 30px 77px;
}

.black {
  color: rgb(0, 0, 0);
}

.container-info {
  padding-left: 25px;

  @media (max-width: 950px) {
    padding-left: 0;
  }
}

p {
  font-size: 15px;

  @media (max-width: 450px) {
    font-size: 14px;
    font-weight: 100;
  }
}

span {
  font-weight: 600;
  font-size: 15px;

  @media (max-width: 450px) {
    font-size: 14px;
    font-weight: 500;
  }
}

.flag {
  padding-right: 45px;
  width: 100%;
  max-height: 400px;
  object-fit: cover;

  @media (max-width: 450px) {
    height: 100%;
    max-height: 230px;
    padding-right: 0;
  }
}

.name {
  padding-top: 42px;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 450px) {
    padding-top: 42px;
    font-size: 21px;
  }
}

.info {
  padding-top: 32px;
  padding-left: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 60px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-top: 30px;
    gap: 50px;
  }
}

.info-column {
  display: grid;
  gap: 15px;
}

.borders-countries-block {
  display: flex;
  align-items: center;
  padding-top: 80px;
  align-items: start;

  @media (max-width: 450px) {
    padding-top: 45px;
    align-items: start;
    flex-direction: column;
  }
}

.border-list {
  display: flex;
  gap: 10px;
  padding: 0 20px;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    padding: 20px 0;
    gap: 10px;
  }
}

.border {
  font-size: 10px;
  padding: 7px 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 5px;

  @media (max-width: 800px) {
    padding: 5px 30px;
    font-size: 14px;
    font-weight: 100;
  }
}

.countries {
  @media (max-width: 450px) {
    font-size: 16px;
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
