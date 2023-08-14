import { createRouter, createWebHistory } from "vue-router";
// import { LocalStorageProvider } from "@/provider/LocalStorage.provider";

import NotFound from "../views/not-found-page/view.vue";
// import Layout from "../layouts/default.vue";
// import Login from "../views/login/view.vue";
// import Register from "../views/register/view.vue";
// import MainPage from "../views/main-page/view.vue";
import WelcomPage from "../views/welcome-page/view.vue";
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
// const routes = [
//   {
//     path: "/",
//     component: Layout,
//     children: [
//       {
//         path: "/",
//         redirect: "/welcome-page",
//       },
//       {
//         path: "/log-in",
//         name: "log-in",
//         component: Login,
//       },
//       {
//         path: "/register",
//         name: "register",
//         component: Register,
//       },
//       {
//         path: "/welcome-page",
//         name: "welcome-page",
//         component: WelcomPage,
//       },
//       {
//         path: "/main-page",
//         name: "main-page",
//         component: MainPage,
//         meta: {
//           requiresAuth: true,
//         },
//       },
//       {
//         path: "/tutorial-page",
//         name: "tutorial-page",
//         // component: TutorialPage,
//         meta: {
//           requiresAuth: true, 
//         },
//       },
//     ],
//   },
//   {
//     path: "/:pathMatch(.*)*",
//     name: "NotFound",
//     component: NotFound,
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!LocalStorageProvider.getValue("token")) {
//       next({
//         path: "/log-in",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
