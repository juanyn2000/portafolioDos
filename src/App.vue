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
            v-for="(section, index) in sections"
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
      @wheel="handleScroll"
      style="overflow: hidden; height: 100vh; position: relative"
    >
      <div class="scroll-content">
        <section
          v-for="(section, index) in sections"
          :key="index"
          :class="['contenedor', section.class]"
          :style="{ height: '100vh' }"
        >
          <component :is="section.component" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Inicio from './components/Inicio.vue';
import Habilidades from './components/Habilidades.vue';
import Proyectos from './components/MisProyectos.vue';
import Contacto from './components/Contacto.vue';

export default {
  components: {
    Inicio,
    Habilidades,
    Proyectos,
    Contacto
  },
  data() {
    return {
      currentSection: 0,
      isScrolling: false,
      isMenuOpen: false,
      sections: [
        { name: "Inicio", class: "inicio", component: "Inicio" },
        { name: "Habilidades", class: "habilidades", component: "Habilidades" },
        { name: "Proyectos", class: "proyectos", component: "Proyectos" },
        { name: "Contacto", class: "contacto", component: "Contacto" }
      ]
    };
  },
  methods: {
    navigateToSection(index) {
      const section = this.$refs.scrollContainer.children[0].children[index];
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      this.currentSection = index;
      this.closeMenu();
    },
    toggleMenu(event) {
      this.isMenuOpen = event.target.checked;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll(event) {
      if (this.isScrolling) return;
      const delta = event.deltaY;
      let nextSection = this.currentSection;
      if (delta > 0) {
        nextSection = Math.min(this.sections.length - 1, this.currentSection + 1);
      } else {
        nextSection = Math.max(0, this.currentSection - 1);
      }

      if (nextSection !== this.currentSection) {
        this.isScrolling = true;
        this.currentSection = nextSection;
        const scrollContainer = this.$refs.scrollContainer;
        const section = scrollContainer.children[0].children[nextSection];
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
          this.isScrolling = false;
        }, 1000);
      }
    }
  }
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
  overflow: hidden;
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
  height: 100vh;
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
  background: #FBFBFB; /* Fondo blanco cuando está expandido */
  max-height: 100%;
  
}

.menu {
  list-style: none;
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
  color: #CCF381;
  transition: color 0.3s;
}

.hamb {
  cursor: pointer;
  float: right;
  padding: 40px 20px;
}

.hamb-line {
  background: #CCF381;
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
  z-index: 1000;
}

.hamb-line::before,
.hamb-line::after {
  background: #CCF381;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.hamb-line::before {
  top: 5px;
}

.hamb-line::after {
  top: -5px;
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

/*escritorio*/

@media (min-width: 768px) {
  .contenedor-principal {
   font-family: Arial, sans-serif;
   margin: 0;
   padding: 0;
 }
 .header {
   position: fixed;
   top: 0;
   width: 100%;
   background: transparent;
   z-index: 1000;
   padding: 0 90px;
 }
   .nav {
     width: 250px;
     height: auto;
     position: realtive;
     top: 20px;
     right: 100px;
     background: transparent;
     max-height: 0;
     overflow: hidden;
     transition: max-height 0.5s ease-out;
     z-index: -1;
   }
   .nav-expanded {
     background: white; /* Fondo cyan cuando está expandido */
     max-height: 100%;
     width: 350px;
   }
 }
</style>
