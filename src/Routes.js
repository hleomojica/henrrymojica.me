import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

// Main
import Dashboard from '@/pages/Dashboard/Dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: "/", redirect: { name: "Dashboard" } },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
});
