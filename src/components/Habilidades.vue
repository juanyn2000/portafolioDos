<template>
  <section class="habilidades">
    <div class="bubbles">
      <div class="bubble html">
        <i class="fa-brands fa-html5 icon"></i><span class="text">HTML</span>
      </div>
      <div class="bubble css">
        <i class="fa-brands fa-css3-alt icon"></i><span class="text">CSS</span>
      </div>
      <div class="bubble bootstrap">
        <i class="fa-brands fa-bootstrap icon"></i
        ><span class="text">Bootstrap</span>
      </div>
      <div class="bubble js">
        <i class="fa-brands fa-js icon"></i><span class="text">javaScript</span>
      </div>
      <div class="bubble git">
        <i class="fa-brands fa-git-alt icon"></i><span class="text">Git</span>
      </div>
      <div class="bubble github">
        <i class="fa-brands fa-github icon"></i><span class="text">Github</span>
      </div>
      <div class="bubble vue">
        <i class="fa-brands fa-vuejs icon"></i><span class="text">Vue</span>
      </div>
      <div class="bubble sass">
        <i class="fa-brands fa-sass icon"></i><span class="text">Sass</span>
      </div>
    </div>
    <div class="content-habilidades">
      <p class="parrafo">
        Cuento con habilidades en desarrollo web, incluyendo HTML, CSS,
        JavaScript, y frameworks como Vue.js. Utilizo herramientas como Sass y
        Bootstrap para optimizar estilos y crear diseños responsivos. Además,
        gestiono proyectos y colaboro eficientemente con Git y GitHub.
      </p>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.habilidades {
  background: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.content-habilidades {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: #4831d4;
  font-size: 20px;
  text-align: center;
}

.bubbles {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

/* Configuración base de las burbujas */
.bubble {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  animation: float 4s infinite ease-in-out;
  transition: all 0.3s ease;
  transform-origin: center;
}

.bubble .icon {
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  color: inherit;
  text-align: center;
}
.bubble:hover {
  animation-play-state: paused;
  color: white !important;
  font-size: 25px;
  transition-delay: 0.2s; /* Delay antes de la transición */
  border: 2px solid white;
  z-index: 1000;
}

/* Animación de flotación */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
/* Texto oculto por defecto */
.bubble .text {
  visibility: hidden;
  opacity: 0;
  transform: translateY(20px);
  font-size: 16px;
  color: white;
  transition: all 0.3s ease;
}
.bubble:hover .text {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
/* Personalización individual de las burbujas */
.bubble:nth-child(1) {
  width: 80px;
  height: 80px;
  bottom: 10%;
  left: 0%;
  animation-duration: 4s;
  color: #f00;
}
.bubble:nth-child(1):hover {
  background: #f00;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(2) {
  width: 120px;
  height: 120px;
  bottom: 70%;
  left: 5%;
  animation-duration: 5s;
  animation-delay: 1s;
  color: #0d6efd;
}
.bubble:nth-child(2):hover {
  background: #0d6efd;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(3) {
  bottom: 60%;
  left: 35%;
  animation-duration: 3s;
  animation-delay: 2s;
  color: #6f42c1;
}
.bubble:nth-child(3):hover {
  background: #6f42c1;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(4) {
  width: 70px;
  height: 70px;
  bottom: 35%;
  left: 15%;
  animation-duration: 6s;
  animation-delay: 1.5s;
  color: #ffe31a;
}
.bubble:nth-child(4):hover {
  background: #ffe31a;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(5) {
  bottom: 70%;
  left: 50%;
  animation-duration: 4.5s;
  animation-delay: 0.5s;
  color: #f00;
}
.bubble:nth-child(5):hover {
  background: #f00;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(6) {
  width: 110px;
  height: 110px;
  bottom: 20%;
  left: 30%;
  animation-duration: 5.5s;
  animation-delay: 0.2s;
  color: black;
}
.bubble:nth-child(6):hover {
  background: black;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(7) {
  bottom: 40%;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 1.2s;
  color: green;
}
.bubble:nth-child(7):hover {
  background: green;
  width: 150px;
  height: 150px;
}

.bubble:nth-child(8) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 60%;
  animation-duration: 5s;
  animation-delay: 1s;
  color: #d63384;
}
.bubble:nth-child(8):hover {
  background: #d63384;
  width: 150px;
  height: 150px;
}
/* pantallas pequeñas */

@media (max-width: 768px) {
  .habilidades {
    margin: 0;
    flex-direction: column;
     min-height: 100vh;
  }
  .bubbles {
    width: 100%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
  .buble {
    width: 100px;
    height: 100px;
  }
  .bubble .icon {
    font-size: 50px;
  }
  .content-habilidades {
    width: 100%;
    padding: 0 20px;
  } 
  .parrafo {
    font-size: 16px;
  }
  /*HTML*/
  .bubble:nth-child(1) {
    bottom: 10%;
    left: 10%;
  }
  .bubble:nth-child(1):hover {
    width: 100px;
    height: 100px;
  }
  /*CSS*/
  .bubble:nth-child(2) {
    bottom: 70%;
    left: 5%;
  }
  .bubble:nth-child(2):hover {
    width: 100px;
    height: 100px;
  }
  /*Bootstrap*/
  .bubble:nth-child(3) {
    bottom: 60%;
    left: 45%;
  }
  .bubble:nth-child(3):hover {
    width: 100px;
    height: 100px;
  }
  /*javaScript*/
  .bubble:nth-child(4) {
    bottom: 40%;
    left: 15%;
  }
  .bubble:nth-child(4):hover {
    width: 100px;
    height: 100px;
  }
  /*Git*/
  .bubble:nth-child(5) {
    bottom: 75%;
    left: 70%;
  }
  .bubble:nth-child(5):hover {
    width: 100px;
    height: 100px;
  }
  /*GitHub*/
  .bubble:nth-child(6) {
    bottom: 25%;
    left: 40%;
  }
  .bubble:nth-child(6):hover {
    width: 100px;
    height: 100px;
  }
  /*Vue.js*/
  .bubble:nth-child(7) {
    bottom: 50%;
    left: 75%;
  }
  .bubble:nth-child(7):hover {
    width: 100px;
    height: 100px;
  }
  /**Sass */
  .bubble:nth-child(8) {
    bottom: 15%;
    left: 70%;
  }
  .bubble:nth-child(8):hover {
    width: 100px;
    height: 100px;
  }
}
</style>
