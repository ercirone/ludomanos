const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      atrNombre: { placeholder: "Juan Pérez" },
      atrEmail: { placeholder: "ladron@catan.com" },
      atrMensaje: { placeholder: "Acá va tu mensaje" },
      nombre: "",
      email: "",
      mensaje: "",
    };
  },
  methods: {
    validar(e) {
      if (!this.nombre) {
        this.atrNombre = {
          class: "falta",
          placeholder: "¡Falta completar!",
          onInput: () => {
            delete this.atrNombre.class;
            this.atrNombre.placeholder = "Juan Pérez";
            delete this.atrNombre.onInput;
          },
        };
      }

      if (!this.email) {
        this.atrEmail = {
          class: "falta",
          placeholder: "¡Falta completar!",
          onInput: () => {
            delete this.atrEmail.class;
            this.atrEmail.placeholder = "ladron@catan.com";
            delete this.atrEmail.onInput;
          },
        };
      }

      if (!this.mensaje) {
        this.atrMensaje = {
          class: "falta",
          placeholder: "¡Falta completar!",
          onInput: () => {
            delete this.atrMensaje.class;
            this.atrMensaje.placeholder = "Acá va tu mensaje";
            delete this.atrMensaje.onInput;
          },
        };
      }

      if (!(this.nombre && this.email && this.mensaje)) {
        e.preventDefault();
        return false;
      }
    },
  },
}).mount("#app");
