<template>
  <header class="header">
    <h1 class="title">Where in the world</h1>
    <div class="theme">
      <img class="icon" src="/images/icon-moon.svg" />
      <h3 class="theme-text">Dark Mode</h3>
    </div>
  </header>
</template>

<style scoped>
.title {
  font-family: "NunitoSans", sans-serif;
}

.header {
  display: flex;
  background-color: #2b3743;
  color: rgb(255, 255, 255);
  padding: 20px 70px;
  align-items: center;
}

.theme {
  display: flex;
  height: 30px;
  margin-left: auto;
  gap: 10px;
}

.icon {
  filter: brightness(0) invert(1);
  mix-blend-mode: screen;
}

.theme-text {
  font-family: "NunitoSans", sans-serif;
}
</style>
