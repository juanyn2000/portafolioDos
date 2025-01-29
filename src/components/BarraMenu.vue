<template>
  <div class="circulos">
    <router-link to="/" class="circulo circulo1"></router-link>
    <router-link to="/habilidades" class="circulo circulo2"></router-link>
    <router-link to="/proyectos" class="circulo circulo3"></router-link>
    <router-link to="/contacto" class="circulo circulo4"></router-link>
  </div>
</template>

<script>
export default {
  name: "BarraMenu",
  data() {
    return {};
  },
};
</script>

<style scoped>
.circulos {
  position: fixed;
  bottom: 100px;
  right: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 50px;
  background-color: black;
}
.circulos .circulo {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ccf381;
  margin: 10px 0;
}
.circulos .circulo:hover {
  border-radius: 0%;
}

@media (max-width: 768px) {
  .circulos {
    display: none;
  }
}
</style>
