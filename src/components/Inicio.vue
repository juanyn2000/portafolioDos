<template>
  <div class="inicio">
    <div class="container contenedor-inicio">
      <div class="left">
        <div class="img-perfil">
          <!-- <img
            class=""
            src="../assets/img/perfil2.jpg"
            alt="imagen de perfil"
            /> -->
          <img
            class=""
            src="../assets/img/perfilN.jpg"
            alt="imagen de perfil"
          />
        </div>
      </div>
      <div class="right">
        <p class="parafo">
          <span class="nombre">¡Hola! Soy Juan</span><br />
          <span class="subtitulo">Desarrollador Front-End</span><br />Me
          apasiona diseñar y construir experiencias digitales que sean rápidas,
          atractivas y fáciles de usar.
        </p>
        <button class="button btn-contacto">Contactame</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
.inicio {
  background: #4831d4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100%;
}
.contenedor-inicio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 0%;

  width: 100%;
  margin-top: 100px;
}
.left {
  padding: 0 30px;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 10px;
}
.img-perfil {
  border-radius: 2%;
  height: 500px;
  width: 350px;
}
img {
  border-radius: 2%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/*seccion derecha*/
.right {
  padding: 5px;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
}
.parafo {
  font-size: 20px;
  text-align: left;
  width: 80%;
  padding-bottom: 10px;
}
.nombre {
  font-size: 60px;
  font-weight: bold;
  color: #ccf381;
}
.subtitulo {
  display: block;
  font-size: 35px;
  color: #ccf381;
  height: 40px;
}
.button {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn-contacto {
  background-color: #ccf381;
  color: #4831d4;
}
.btn-contacto:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  padding: 10px 16px;
}
/*pantallas pequeñas*/
@media (max-width: 768px) {
  .inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    min-height: 100vh;
    width: 100%;
  }
  .right {
    width: auto;
    padding: 0%;
    margin: 20px;
    align-items: center;
  }
  .left {
    width: auto;
    padding: 0%;
    margin: 0%;
  }
  .contenedor-inicio {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .parafo {
    font-size: 15px;
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
    align-content: center;
  }
  .nombre {
    font-size: 35px;
    font-weight: bold;
    color: #ccf381;
  }
  .subtitulo {
    display: block;
    font-size: 20px;
    color: #ccf381;
    height: 40px;
  }
  .img-perfil {
    border-radius: 2%;
    height: 300px;
    width: 250px;
    align-items: center;
  }
}
</style>
