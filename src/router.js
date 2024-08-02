import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/Homepage.vue";
import Login from "./components/Login.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/login", component: Login },
  { path: "/homepage", component: Homepage },
  // Tambahkan rute lainnya jika ada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
