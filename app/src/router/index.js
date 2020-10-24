import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      icon: 'mdi-home',
    },
  },
  {
    path: '/pages',
    name: 'Pages',
    meta: {
      icon: 'mdi-book-open-page-variant',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Pages.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
