// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Attractions from '@/views/Attractions.vue';
import AddAttraction from '@/views/AddAttraction.vue';
import EditAttraction from '@/views/EditAttraction.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/attractions',
      name: 'Attractions',
      component: Attractions
    },
    {
      path: '/attractions/add',
      name: 'AddAttraction',
      component: AddAttraction
    },
    {
      path: '/attractions/edit/:id',
      name: 'EditAttraction',
      component: EditAttraction
    }
  ]
});
