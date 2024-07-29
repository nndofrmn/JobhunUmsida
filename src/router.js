import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/Homepage.vue"
import Signin from "./components/Login.vue"

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
        path: "/",
        name: "Signin",
        component: Signin
    },
    {
        path: "/homepage",
        name:"Homepage",
        component: Homepage,
    },
  ]
})

export default router;