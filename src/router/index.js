import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/layout/TheHome';
import Dashboard from '@/components/layout/TheDashboard';

Vue.use(Router);

const routes = [
  {
    path:      '/',
    component: Home,
  },
  {
    path:      '/dashboard',
    component: Dashboard,
  },
];

export default new Router({
  mode:               'history',
  saveScrollPosition: true,
  routes,
});

