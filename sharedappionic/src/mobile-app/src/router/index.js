import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory('localhost:3000'),
  routes
});

export default router;