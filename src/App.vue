<template>
  <div class="contenedor-principal">
    <!-- Navbar fijo -->
    <header class="header">
      <a href="#" class="logo">AN</a>
      <input
        type="checkbox"
        id="side-menu"
        class="side-menu"
        @change="toggleMenu"
        v-model="isMenuOpen"
      />
      <label for="side-menu" class="hamb">
        <span class="hamb-line"></span>
      </label>
      <nav :class="['nav', { 'nav-expanded': isMenuOpen }]">
        <ul class="menu">
          <li
            class="nav-link"
            v-for="(section, index) in sectionsWithoutFooter"
            :key="index"
          >
            <a
              href="#"
              @click.prevent="navigateToSection(index)"
              :class="{ active: currentSection === index }"
            >
              {{ section.name }}
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Contenedor con scroll -->
    <div
      class="scroll-container"
      ref="scrollContainer"
      :style="{ overflow: isSmallScreen ? 'auto' : 'hidden', height: '100vh' }"
    >
      <div class="scroll-content">
        <section
          v-for="(section, index) in sections"
          :key="index"
          :class="['contenedor', section.class]"
          :style="{ height: '100vh' }"
        >
          <!-- Renderizar todos los componentes y escuchar el evento en Inicio -->
          <component
            :is="section.component"
            @navigateToSection="navigateToSection"
          />
        </section>
      </div>
    </div>

    <!-- barraMenu (sin Footer) -->
    <ul class="circulos">
      <li
        class="nav-link"
        v-for="(section, index) in sectionsWithoutFooter"
        :key="index"
      >
        <a
          href="#"
          @click.prevent="navigateToSection(index)"
          :class="{ active: currentSection === index }"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import Inicio from "./components/Inicio.vue";
import Habilidades from "./components/Habilidades.vue";
import Proyectos from "./components/MisProyectos.vue";
import Contacto from "./components/Contacto.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Inicio,
    Habilidades,
    Proyectos,
    Contacto,
    Footer,
  },
  data() {
    return {
      currentSection: 0,
      isScrolling: false,
      isMenuOpen: false,
      isSmallScreen: window.innerWidth < 768,
      sections: [
        { name: "Inicio", class: "inicio", component: "Inicio" },
        { name: "Habilidades", class: "habilidades", component: "Habilidades" },
        { name: "Proyectos", class: "proyectos", component: "Proyectos" },
        { name: "Contacto", class: "contacto", component: "Contacto" },
        { name: "Footer", class: "footer", component: "Footer" },
      ],
    };
  },
  computed: {
    sectionsWithoutFooter() {
      return this.sections.slice(0, -1);
    },
  },
  methods: {
    navigateToSection(index) {
      this.currentSection = index;
      const section = this.$refs.scrollContainer.children[0].children[index];
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      this.isMenuOpen = false;
    },
    toggleMenu(event) {
      this.isMenuOpen = event.target.checked;
    },
    handleScroll(event) {
      if (this.isScrolling || this.isSmallScreen) return;

      const delta = event.deltaY;
      const maxIndex = this.sections.length - 1;
      const nextSection = delta > 0
        ? Math.min(maxIndex, this.currentSection + 1)
        : Math.max(0, this.currentSection - 1);

      if (nextSection !== this.currentSection) {
        this.isScrolling = true;
        this.currentSection = nextSection;
        const section = this.$refs.scrollContainer.children[0].children[nextSection];
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
          this.isScrolling = false;
        }, 1000);
      }
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    if (!this.isSmallScreen) {
      window.addEventListener("wheel", this.handleScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    if (!this.isSmallScreen) {
      window.removeEventListener("wheel", this.handleScroll);
    }
  },
};
</script>


<style>
/* Contenedor principal */
.contenedor-principal {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Contenedor de las secciones */
.scroll-container {
  position: relative;
}

.scroll-content {
  position: relative;
}

.scroll-container section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

/* Navbar */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
}

.logo {
  display: inline-block;
  color: transparent;
  font-size: 60px;
  margin-left: 10px;
}

.nav {
  width: 100%;
  height: auto;
  padding: 20px 10px;
  position: fixed;
  top: 0;
  right: 0;
  background: transparent;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out, background-color 0.5s ease-out;
}

.nav-expanded {
  background: #fbfbfb;
  max-height: 100%;
}

.menu {
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.menu a {
  display: block;
  padding: 30px;
  color: rgba(86, 58, 156, 1);
  text-decoration: none;
}

.menu a.active {
  font-weight: bold;
  color: blue;
}

.menu a:hover {
  color: #ccf381;
  transition: color 0.3s;
}

.hamb {
  cursor: pointer;
  float: right;
  padding: 60px 30px;
}

.hamb-line {
  background: #ccf381;
  display: block;
  height: 4px;
  position: relative;
  width: 40px;
  z-index: 1000;
}

.hamb-line::before,
.hamb-line::after {
  background: #ccf381;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.hamb-line::before {
  top: 10px;
}

.hamb-line::after {
  top: -10px;
}

.side-menu {
  display: none;
}

.side-menu:checked ~ nav {
  max-height: 100%;
}

.side-menu:checked ~ .hamb .hamb-line {
  background: transparent;
}

.side-menu:checked ~ .hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.side-menu:checked ~ .hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}
@media (min-width: 768px) {
  .header {
    padding: 0 90px;
  }
  .nav {
    position: fixed;
    top: 30px;
    right: 100px;
    background: transparent;
    width: 300px;
    z-index: -1;
  }

  .nav-expanded {
    background: white;
    max-height: 100%;
  }
  .circulos {
    position: fixed;
    bottom: 100px;
    right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
   
   width: 50px;
    height: 150px;
  }
  
  .circulos .nav-link a {
    display: block;
    width: 15px; /* Ancho del cuadrado */
    height: 15px; /* Alto del cuadrado */
    background-color: #ccf381; /* Color de fondo por defecto */
    border-radius: 50%; /* Esquinas ligeramente redondeadas */
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  
    .circulos .nav-link:nth-child(1) a.active {
    background-color: transparent;
    border: 2px solid white; /* Borde del cuadrado activo */
    border-radius: 0%; /* Quita las esquinas redondeadas cuando está activo */
    transform: rotate(45deg); /* Gira el elemento 45 grados */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .circulos .nav-link:nth-child(2) a.active {
    background-color: transparent;
    border: 2px solid #4831d4; /* Borde del cuadrado activo */
    border-radius: 0%; /* Quita las esquinas redondeadas cuando está activo */
    transform: rotate(45deg); /* Gira el elemento 45 grados */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .circulos .nav-link:nth-child(3) a.active {
    background-color: transparent;
    border: 2px solid white; /* Borde del cuadrado activo */
    border-radius: 0%; /* Quita las esquinas redondeadas cuando está activo */
    transform: rotate(45deg); /* Gira el elemento 45 grados */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .circulos .nav-link:nth-child(4) a.active {
    background-color: transparent;
    border: 2px solid #4831d4; /* Borde del cuadrado activo */
    border-radius: 0%; /* Quita las esquinas redondeadas cuando está activo */
    transform: rotate(45deg); /* Gira el elemento 45 grados */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .circulos .nav-link a:hover {
    background-color: purple; /* Color cuando pasas el mouse */
  }
  
}
</style>
