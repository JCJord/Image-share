import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueRouter);
Vue.use(VueMasonryPlugin);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
