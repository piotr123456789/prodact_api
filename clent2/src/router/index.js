import Vue from 'vue';
import Router from 'vue-router';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import delate from '../docs/control/delate';
import HomePage from '../docs/HomePage';
import login from '../docs/login';
import register from '../docs/register';
import edit from '../docs/control/edit';
import post from '../docs/post';
import admin from '../docs/adminpanel';
import create from '../docs/control/create';
console.log(create);

Vue.use(Router);
Vue.use(axios);
Vue.use(VeeValidate);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/panelAdmin',
      name: 'admin',
      component: admin,
      children:[
        {
          path:'create',
          components:{ default : create }
        },
        {
          path:'edit/:slug',
          components:{ default : edit }
        },
        {
          path:'delate',
          components:{ default : delate }
        },
      ]
    },

    //CATEGORY ADMIN-CONTROL
    // CATEGORIES
    {
      path: '/post/:slug',
      name: 'post',
      component: post
    },
  ]
});
