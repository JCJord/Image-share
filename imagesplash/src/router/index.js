import Vue from "vue";
import VueRouter from "vue-router";

import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueRouter);
Vue.use(VueMasonryPlugin);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
