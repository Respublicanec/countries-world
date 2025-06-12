<template>
  <p>{{ country.name.common }}</p>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Array,
  },
});
</script>
