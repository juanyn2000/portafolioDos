<template>
  <div class="contacto">
    <div class="contact-container">
      <div class="form-wrapper">
        <h2 class="titulo">¡Hablemos!</h2>
        <p class="invitacion">
          Estaré encantado de escuchar sobre tu proyecto o responder cualquier
          pregunta.
        </p>
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="form-group">
                <label class="form-label" for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Escribe aquí tu nombre"
                  required
                />
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="form-group">
                <label class="form-label" for="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Escribe aquí tu correo"
                  required
                />
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="form-group">
                <label class="form-label" for="message">Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  placeholder="Hola, creo que necesito un diseño web para mi empresa... cuando podriamos reunirnos para conversar?"
                  required
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn">Enviar</button>
            </div>
          </div>
        </form>
        <p
          v-if="submitted"
          class="success-message text-center mt-3 text-success"
        >
          ¡Tu mensaje se envió correctamente!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Contacto",

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      emailjs.init(userId);
      emailjs
        .send(serviceId, templateId, this.form)
        .then(() => {
          this.submitted = true;

          // Limpia el formulario
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
          console.log("Email enviado correctamente");
        })
        .catch((error) => {
          this.submitted = false;
          console.error("Error al enviar el email:", error);
        });
      // this.submitted = true;

      // // Limpia el formulario
      // this.form.name = "";
      // this.form.email = "";
      // this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contacto {
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #4831d4;
  width: 100%;
}

.form-wrapper {
  width: 100%;
  padding: 20px;
}
.titulo {
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}
.invitacion {
  font-size: 25px;
  font-weight: normal;
  padding: 30px 0;
}
label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  font-size: 16px;
}

input,
textarea {
  font-size: 16px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid grey;
  padding-top: 20px;
  height: 50px;
  line-height: 30px;
}
textArea {
  height: 100px;
  resize: none;
  overflow: hidden;
}
input::placeholder,
textarea::placeholder {
  font-size: 14px;
  color: grey;
  line-height: 120px;
}
button {
  font-size: 16px;
  font-weight: bold;
  color: #ccf381;
  background: #4831d4;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;
}

button:hover {
  background: #4831d4;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  color: #ccf381;
  font-size: 20px;
  padding: 10px 16px;
}

.success-message {
  font-size: 18px;
}
/*pantallas pequeñas*/
@media (max-width: 768px) {
  .contacto {
    min-height: 100vh;
    width: 100%;
    align-items: flex-start;
  }
  .contact-container {
    margin-top: 50px;
    align-items: start;
  }
  .titulo {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .invitacion {
    font-size: 20px;
    font-weight: normal;
  }
}
</style>
