import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../components/Inicio.vue";
import Habilidades from "../components/Habilidades.vue";
import MisProyectos from "../components/MisProyectos.vue"; 
import Contacto from "../components/Contacto.vue";
import ErrorPage from "../components/Error.vue";


const routes = [
    
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
