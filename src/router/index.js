import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layout/default.vue";
import LoginPage from "../pages/auth/login.vue";
import UsersPage from "../pages/users/index.vue";
import UserPortfolioPage from "../pages/users/portfolio.vue";
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
      {
        path: "",
        name: "userspage",
        component: UsersPage,
        meta: { title: "Users" },
      },
      {
        path: "user-portfolio",
        name: "UserPortfolioPage",
        component: UserPortfolioPage,
        meta: { title: "User Portfolio" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
