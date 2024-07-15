import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import StartView from '../views/StartView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MapView from '../views/MapView.vue'
import ReserveView from '../views/ReserveView.vue'
import MyReservationsView from '../views/MyReservationsView.vue'
import ReservationDetailView from '../views/ReservationDetailView.vue'
import AccountView from '../views/AccountView.vue'
import EditAccountView from '../views/EditAccountView.vue'
import ReportIncidentView from '../views/ReportIncidentView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'StartView',
    component: StartView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/reserve',
    name: 'ReserveView',
    component: ReserveView
  },
  {
    path: '/my-reservations',
    name: 'MyReservationsView',
    component: MyReservationsView
  },
  {
    path: '/my-reservations/detail/:id',
    name: 'ReservationDetailView',
    component: ReservationDetailView,
    props: true
  },
  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
  },
  {
    path: '/account/edit',
    name: 'EditAccountView',
    component: EditAccountView
  },
  {
    path: '/report-incident',
    name: 'ReportIncidentView',
    component: ReportIncidentView
  }
  
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;

