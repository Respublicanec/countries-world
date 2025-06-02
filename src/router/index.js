import { createRouter, createWebHistory } from "vue-router";
import FullDescription from "../pages/FullDescription.vue";
import AllCountry from "../pages/AllCountry.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "all",
      component: AllCountry,
    },
    {
      path: "/FullDescription",
      name: "FullDescription",
      component: FullDescription,
    },
  ],
});

export default router;
