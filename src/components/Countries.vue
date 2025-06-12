<template>
  <p>{{ countries.name.common }}</p>
</template>

<script setup>
const props = defineProps({
  countries: {
    type: Array,
  },
});
</script>
