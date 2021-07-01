import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base: import.meta.env.BASE_URL,
  routes,
});

// 注册路由
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("r-token");
  // if (!token && from.path !== "/login") next({ path: "/login" })

  console.log("(to, from, next)", token, to.path, from.path, next);
  // next(); // 放行
});

export default router;
