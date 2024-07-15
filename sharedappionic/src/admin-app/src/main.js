;

import { createApp } from 'vue';
import MyButton from '../../shared/components/MyButton.vue';
import App from './views/App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.component('MyButton', MyButton);
app.mount('#app');
