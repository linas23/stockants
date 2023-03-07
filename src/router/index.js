import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layout/default.vue";
import LoginPage from "../pages/auth/login.vue";
const routes = [
  {
    path: "/",
    name: "DefalutLayout",
    component: DefaultLayout,
    children: [
      {
        path: "login",
        name: "LoginPage",
        component: LoginPage,
        meta: { title: "Login" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
