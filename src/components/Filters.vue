<template>
  <div class="select-container">
    <select id="region" v-model="modal" class="filter">
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
});

const modal = defineModel();
</script>

<style>
.select-container {
  position: relative;
  display: inline-block;
  margin: 50px 0;
}

.filter {
  padding: 20px 85px 20px 25px;
  background-color: #2b3743;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 7px;
  appearance: none;
}
</style>
