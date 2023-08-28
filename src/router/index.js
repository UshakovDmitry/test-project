import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/not-found-page/view.vue";
import WelcomPage from "../views/main-page/view.vue";
const routes = [
  {
    path: "/",
    name: "welcome-page",
    component: WelcomPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
