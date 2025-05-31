import { createRouter, createWebHistory } from "vue-router";
import FullDescription from "../pages/FullDescription.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/description",
      component: FullDescription,
    },
  ],
});

export default router;
