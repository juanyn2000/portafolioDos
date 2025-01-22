<template>
  <div class="inicio">
    <div class="container">
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
            alt="imagen de perfil">
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
  background:#4831D4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
  height: 100vh;
  width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
 
  width: 100%;
  margin-top: 100px;
}
.left {
  padding: 0 30px ;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 10px;
}
.img-perfil{
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
  color: #CCF381;
}
.subtitulo {
  display: block;
  font-size: 35px;
  color: #CCF381;
  height: 40px;
}
.button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s;
}
.btn-contacto {
  background-color: #CCF381;
  color: rgba(86, 58, 156, 1);
}
.btn-contacto:hover {
  background-color: rgba(86, 58, 156, 1);
  color: #CCF381;
  font-size: 17px;
}
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .parafo {
    font-size: 15px;
    text-align: left;
    width: 100%;
    padding-bottom: 10px;
  }
  .nombre {
    font-size: 35px;
    font-weight: bold;
    color: #CCF381;
  }
  .subtitulo {
    display: block;
    font-size: 20px;
    color: #CCF381;
    height: 40px;
  }
  .img-perfil{
    border-radius: 2%;
    height: 300px;
    width: 250px;
    align-items: center;
  }
}
</style>
