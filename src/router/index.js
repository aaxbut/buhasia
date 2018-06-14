

import HelloWorld from '@/components/HelloWorld';
import SecondWorld from '@/components/SecondWorld';
import TableTest from '@/components/TableTest';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'HelloWorld',
      component: HelloWorld,
    },
    {
      path:      '/second',
      name:      'SecondWorld',
      component: SecondWorld,
    },
    {
      path:      '/table',
      name:      'TableTest',
      component: TableTest,
    },
  ],
});
