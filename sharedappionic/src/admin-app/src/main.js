import { createApp } from 'vue';
import Home from './Home.vue';
import MyButton from '../../shared/components/MyButton.vue';

createApp(Home).component('MyButton', MyButton).mount('#app');

