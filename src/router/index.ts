import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/mh",
      name: "mh",
      component: () => import("../views/MenstrualHistory.vue"),
    },
    {
      path: "/qrcode",
      name: "qrcode",
      component: () => import("../views/QRCode.vue"),
    },
  ],
});

export default router;
