import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Users from '@/views/Users.vue';
import CreateUser from '@/views/CreateUser.vue';
import Reservations from '@/views/Reservations.vue';
import CreateReservation from '@/views/CreateReservation.vue';
import Lockers from '@/views/Lockers.vue';
import CreateLocker from '@/views/CreateLocker.vue';
import CreateGroup from '@/views/CreateGroup.vue';
import Reports from '@/views/Reports.vue';
import IncidentReport from '@/views/IncidentReport.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/create',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/reservations/create',
    name: 'CreateReservation',
    component: CreateReservation
  },
  {
    path: '/lockers',
    name: 'Lockers',
    component: Lockers
  },
  {
    path: '/lockers/create',
    name: 'CreateLocker',
    component: CreateLocker
  },
  {
    path: '/groups/create',
    name: 'CreateGroup',
    component: CreateGroup
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/reports/incident/:id',
    name: 'IncidentReport',
    component: IncidentReport,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
