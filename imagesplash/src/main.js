import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import VueMasonry from "vue-masonry-css";
import VueObserveVisibility from "vue-observe-visibility";
import VueLazyLoad from "vue-lazyload";

import progressive from "progressive-image/dist/vue";

Vue.use(progressive, {
  removePreview: true,
  scale: true,
});
Vue.use(VueObserveVisibility);
Vue.use(VueMasonry);
Vue.use(BootstrapVue);
Vue.use(VueLazyLoad);
Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
