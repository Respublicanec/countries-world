import { createRouter, createWebHistory } from "vue-router";
import FullDescription from "../pages/FullDescription.vue";
import AllCountry from "../pages/AllCountry.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AllCountry,
    },
    {
      path: "/:cca2",
      component: FullDescription,
    },
  ],
});

export default router;
