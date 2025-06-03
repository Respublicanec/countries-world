import { createRouter, createWebHistory } from "vue-router";
import FullDescription from "../pages/FullDescription.vue";
import AllCountry from "../pages/AllCountry.vue";
import Layout from "../pages/Layout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: AllCountry,
        },
        {
          path: ":id",
          component: FullDescription,
        },
      ],
    },
  ],
});

export default router;
