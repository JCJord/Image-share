import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import VueMasonry from "vue-masonry-css";
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(VueObserveVisibility);
Vue.use(VueMasonry);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
