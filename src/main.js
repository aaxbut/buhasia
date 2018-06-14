// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import store from './store';
import App from './App';
import router from './router';
import axios from './api/axios';

Vue.use(VueAxios, axios);

Vue.use(Vuetify, {
  theme: {
    primary:   '#ee44aa',
    secondary: '#424242',
    accent:    '#1053ff',
    error:     '#FF5252',
    info:      '#2196F3',
    success:   '#4CAF50',
    warning:   '#FFC107',
  },
});

Vue.config.productionTip = false;

/**
 * Configure whether to allow vue-devtools inspection
 */
Vue.config.devtools = true;

const app = new Vue({
  store,
  router,
  components: {
    App,
  },
  template: '<App/>',
});

app.$mount('#app');
