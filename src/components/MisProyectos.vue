<template>
  <div class="proyectos">
    <div class="descripcion container">
      <h2>Mis Proyectos</h2>
      <p>
        Explora algunos de los proyectos en los que he trabajado,
        <br />destacando mis habilidades y experiencia en desarrollo web.
      </p>
    </div>
    <div class="container contenedor-proyectos">
      <div
        class="card"
        v-for="(proyecto, index) in proyectos"
        :key="index"
        @click="abrirModal(proyecto.url)"
      >
        <img
          :src="proyecto.img"
          :alt="`Imagen del proyecto ${proyecto.nombre}`"
          class="card-img"
        />
        <div class="card-content">
          <h2 class="card-title">{{ proyecto.nombre }}</h2>
          <p class="card-descripcion">{{ proyecto.descripcion }}</p>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ModalProyectos
      v-if="modalVisible"
      :url="proyectoSeleccionado"
      @cerrar="cerrarModal"
    />
  </div>
</template>

<script>
import ModalProyectos from "./ModalProyectos.vue";


export default {
  components: { ModalProyectos },
  data() {
    return {
      modalVisible: false,
      proyectoSeleccionado: null,
      proyectos: [
        {
          nombre: "Pokemon Adivina",
          img: "./imgProyectos/pokemon.png",
          url: "https://pokemon-adivina.vercel.app/?vercelToolbarCode=fxaKF79MszkBxPW",
          descripcion: "Juego de adivinar el nombre de los pokemones, desarrollado con Vue.js, botstrap y pokeapi.",
        },
        {
          nombre: "Super Héroes",
          img: "./imgProyectos/superHero.png",
          url: "https://juanyn2000.github.io/superHero/",
          descripcion: "Digite numero hasta el 732 para buscar un super héroe. desarrollado con Vue.js, canvas.js y superHeroAPI.",
        },
        {
          nombre: "Viajes por Chile",
          img: "./imgProyectos/viajesPorChile.png",
          url: "https://juanyn2000.github.io/viajesPorChile/",
          descripcion: "Sitio web de viajes por Chile, desarrollado con Html, Css y bootstrap. muestra lugares emblematicos",
        },
        {
          nombre: "Ricomida",
          img: "./imgProyectos/ricomida.png",
          url: "https://juanyn2000.github.io/ricomida/",
          descripcion: "Sitio web de recetas de comida, desarrollado con Html, Css y bootstrap. ideal para restaurantes",
        },
      ],
    };
  },
  methods: {
    abrirModal(url) {
      this.proyectoSeleccionado = url;
      this.modalVisible = true;
    },
    cerrarModal() {
      this.modalVisible = false;
      this.proyectoSeleccionado = null;
    },
  },
};
</script>


<style scoped>
.proyectos {
  background: #4831d4;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  width: 100%;
}
.contenedor-proyectos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}
.card-content .card-descripcion  {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  color: #4831d4;
  font-size: 12px;
}
.card-content .card-title {
  font-size: 20px;
  font-weight: bold;
  color: #ccf381;
}
.descripcion{
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.descripcion h2 {
  font-size: 40px;
  font-weight: bold;
  color: #ccf381;
}
.descripcion p {
  font-size: 20px;
  margin-top: 20px;
  color: white;
}
.card {
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  width: 90%;
  max-width: 300px;
  margin: 10px auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  margin: 10px 0 5px;
  color: #4831d4;
}

.card-description {
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #eaeaea;
}


</style>
