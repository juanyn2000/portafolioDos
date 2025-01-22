import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Solo necesitas importar este archivo para el JS de Bootstrap


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Usa el router en tu aplicación
app.mount("#app");