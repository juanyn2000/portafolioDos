<template>
  <div class="footer">
    <div class="container footer-container">
      <div class="top">
        <div class="content-saludo">
          <h3 class="saludo">¡HOLA!</h3>
        </div>
        <div class="content-icons">
          <i class="fa-solid fa-envelope"></i>
          <p>JUAN.ARACENA.J@GMAIL.COM</p>
        </div>
        <div class="content-icons">
          <i class="fa-solid fa-phone"></i>
          <a href="https://wa.me/56948764112" target="_blank"
            ><p>WHATSAPP</p></a
          >
        </div>
        <div class="content-icons">
          <i class="fa-brands fa-telegram"></i>
          <a href="https://t.me/juanyn_1" target="_blank"><p>TELEGRAM</p></a>
        </div>
      </div>
      <div class="bottom">
        <p>© 2025 - Todos los derechos reservados</p>
        <div class="rrss">
          <a
            href="https://www.instagram.com/juanyn_forever/?hl=es"
            target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a href="https://www.facebook.com/juanyn.forever/"
            ><i class="fa-brands fa-square-facebook" target="_blank"></i
          ></a>
          <a href="https://www.linkedin.com/in/juan-aracena-4b2363134/"
            ><i class="fa-brands fa-linkedin" target="_blank"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  background: rgba(86, 58, 156, 1);
  color: #ccf381;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}
.footer-contaier {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.top {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-top: 60px;
  margin-top: 100px;
  font-size: 15px;
  color: #ccf381;
}
.top a {
  color: #ccf381;
  text-decoration: none;
}
.saludo {
  font-size: 30px;
  color: #f9f9f9;
  margin: 40px 0;
}
.bottom {
  display: flex;
  justify-content: space-between;
  height: 40%;
  width: 100%;
  border-top: #ccf381 1px solid;
  font-size: 20px;
  padding-top: 40px;
}
.rrss {
  display: flex;
  gap: 20px;
  font-size: 30px;
  color: #ccf381;
  text-decoration: none;
}
.rrss a {
  color: #ccf381;
  font-size: 30px;
}
.rrss a :hover {
  color: #f9f9f9;
  font-size: 35px;
}
.top a:hover {
  color: #f9f9f9;
}
.content-icons {
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
  margin-bottom: 10px; /* Espacio entre cada grupo de icono y texto */
}
.content-icons i {
  margin-right: 10px; /* Espacio entre el icono y el texto */
}

.content-icons p {
  margin: 0; /* Elimina el margen por defecto del párrafo */
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    justify-content: start;
    padding: 0;
    margin: 0;
    align-items: end;
  }
  .footer-container {
    padding: 0 15px;
    margin: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(86, 58, 156, 1);
  }
  .top {
    padding-top: 0;
  }
  .bottom {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: start;
    padding: 0;
    padding-top: 15%;
    margin: 0;
  }
  .rrss {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .rrss a {
    font-size: 20px;
  }
  .content-saludo {
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: flex-start;
  }
  .bottom p {
    text-align: center;
    font-size: 15px;
  }
}
</style>
