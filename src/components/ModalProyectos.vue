<template>
  <div class="modal-overlay" @click.self="cerrar">
    <div class="modal-content">
      <button class="close-btn" @click="cerrar">×</button>
      <iframe :src="url" frameborder="0" class="iframe-modal"></iframe>

      <!-- Botón para ir al proyecto -->
      <a :href="url" target="_blank" class="go-to-site-btn"> Ir al sitio </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    cerrar() {
      this.$emit("cerrar");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
  position: relative;
}

.iframe-modal {
  width: 100%;
  height: 750px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 70px;
  cursor: pointer;
  color: #4831d4;
}

/* Estilos para el botón "Ir al sitio" */
.go-to-site-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: #4831d4;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.go-to-site-btn:hover {
  background: #4831d4;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  color: #ccf381;
  font-size: 20px;
  padding: 10px 16px;
}
</style>
