import { createRouter, createWebHistory } from "vue-router";


import NotFound from "../views/NotFound.vue";
import Layout from "../layouts/default.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import MainPage from "../views/MainPage.vue";
import About from "../views/About.vue";
// import TutorialZHS from "../views/TutorialZHS.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'main-page',
        redirect: '/main-page'
      },
      {
        path: 'log-in',
        name: 'log-in',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      },
      {
        path: 'main-page',
        name: 'main-page',
        component: MainPage
      },
      // {
      //   path: 'tutorial-zhs',
      //   component: TutorialZHS
      // },
      {
        path: 'about',
        name: 'about',
        component: About
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
