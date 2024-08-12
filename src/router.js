import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/Homepage.vue";
import Login from "./components/Login.vue";
import SearchPage from "./components/Searchpage.vue";
import DetailPage from "./components/Detailpage.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/login", component: Login },
  { path: "/homepage", component: Homepage },
  { path: "/search-page", component: SearchPage, name: "searchPage" },
  { path: "/detail-page/", component: DetailPage, name: "detailPage" },
  // Tambahkan rute lainnya jika ada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
