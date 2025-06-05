<template>
  <header class="header" :class="{ white: !darkTheme }">
    <span class="title" :class="{ white: !darkTheme }"
      >Where in the world?</span
    >
    <div class="theme" @click="$emit('colorTheme')">
      <img
        class="icon"
        :class="{ 'icon-black': darkTheme }"
        src="/images/moon.svg"
      />
      <p>Dark Mode</p>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  darkTheme: {
    type: Boolean,
  },
});

const emit = defineEmits(["colorTheme"]);
</script>

<style scoped>
.title {
  font-size: 26px;
}

.header {
  display: flex;
  background-color: #2b3743;
  color: #ffffff;
  padding: 22px 78px;
  align-items: center;
}

.white {
  background-color: #ffffff;
  color: #000000;
}

.theme {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 8px;
  gap: 10px;
}

.icon {
  height: 18px;
}

.icon-black {
  filter: brightness(0) invert(1);
}
</style>
