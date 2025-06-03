import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addOne() {
      this.count++;
    },
    minusOne() {
      this.count--;
    },
    square() {
      this.count = this.count * this.count;
    },
  },
});
