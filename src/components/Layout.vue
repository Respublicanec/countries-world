<template>
  <div class="block">
    <div class="count">{{ counter.count }}</div>
    <div class="buttons">
      <button @click="counter.addOne()">+</button>
      <button @click="counter.minusOne()">-</button>
      <button @click="counter.square()">square</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/common.js";

const counter = useCounterStore();
</script>

<style>
.block {
  text-align: center;
  padding: 30px;
}
.count {
  font-size: 60px;
  font-weight: bold;
}

.buttons {
  padding-top: 30px;
}
.buttons button {
  padding: 10px;
  margin: 10px;
  font-size: 30px;
}
</style>
