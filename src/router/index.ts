import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: import.meta.env.BASE_URL,
  routes,
});

// 注册路由
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('r-token');
  if (to.name == 'Login') { next(); }
  else if (!token) { next({path: '/login'}); }
  else { next(); }
});

export default router;
