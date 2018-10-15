// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import VTooltip from 'v-tooltip';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import store from './store';
import App from './App';
import router from './router';
import axios from './api/axios';

Vue.use(VTooltip);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/**
 * Configure whether to allow vue-devtools inspection
 */
Vue.config.devtools = true;

/**
 * Enable component init, compile, render and patch
 * performance tracing in the browser devtool timeline.
 */
Vue.config.performance = true;

const app = new Vue({
  store,
  router,
  components: {
    App,
  },
  template: '<App/>',
});

app.$mount('#app');
