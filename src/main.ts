import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';
//import VueI18n from 'vue-i18n'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
//app.use(VueI18n);
app.use(router);

app.mount('#app');
