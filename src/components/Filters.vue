<template>
  <div class="select-container" :class="{ 'arrow-black': !isDarkTheme }">
    <select
      id="region"
      v-model="modal"
      class="filter"
      :class="{ 'filter-white': !isDarkTheme }"
    >
      <option value="" disabled selected hidden>Filter by Region</option>
      <option v-for="region in regions" :key="region" :value="region">
        {{ region }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  regions: {
    type: Array,
    required: true,
  },
  isDarkTheme: {
    type: Boolean,
  },
});

const modal = defineModel();
</script>

<style scoped>
.select-container {
  position: relative;
  display: inline-block;
  margin: 50px 0 30px 0;

  @media (max-width: 700px) {
    width: 300px;
    margin: 15px 0 15px 15px;
  }
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

  @media (max-width: 700px) {
    right: 122px;
  }
}

.arrow-black::after {
  border-bottom: 2px solid rgb(0, 0, 0);
  border-right: 2px solid rgb(0, 0, 0);
}

.filter {
  padding: 20px 85px 20px 25px;
  background-color: #2b3743;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  appearance: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  @media (max-width: 450px) {
    font-size: 12px;
    padding: 17px 85px 17px 25px;
  }
}

.filter-white {
  background-color: #ffffff;
  color: #000000;
}
</style>
