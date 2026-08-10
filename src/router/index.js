import { createRouter, createWebHistory } from "vue-router";

// Componentes existentes
import Inicio from "../components/Inicio.vue";
import Habilidades from "../components/Habilidades.vue";
import MisProyectos from "../components/MisProyectos.vue"; 
import Contacto from "../components/Contacto.vue";
import ErrorPage from "../components/Error.vue";

// Importación dinámica para Presupuesto (mejor práctica)
// No es necesario importarlo directamente, lo cargamos bajo demanda

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio,
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: Habilidades,
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: MisProyectos,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
  },
  // 👇 NUEVA RUTA PARA PRESUPUESTO
  {
    path: '/presupuesto',
    name: 'presupuesto',
    // Carga dinámica para optimizar el rendimiento
    component: () => import('@/views/Presupuesto.vue'),
  },
  // 👇 SIEMPRE AL FINAL: Captura rutas no encontradas (404)
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