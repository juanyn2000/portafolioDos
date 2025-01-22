<template>
    <div class="modal-overlay" @click.self="cerrar">
      <div class="modal-content">
        <button class="close-btn" @click="cerrar">×</button>
        <iframe :src="url" frameborder="0" class="iframe-modal"></iframe>
  
        <!-- Botón para ir al proyecto -->
        <a :href="url" target="_blank" class="go-to-site-btn">
          Ir al sitio
        </a>
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
    color: #4831D4;
  }
  
  /* Estilos para el botón "Ir al sitio" */
  .go-to-site-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #4831D4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }
  
  .go-to-site-btn:hover {
    background-color: #0056b3;
  }
  </style>
  