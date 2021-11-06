<template>
  <div class="dark-bg p-5">
    <!-- VISTA GENERAL -->
    <div class="container-header">
      <h1>Postulantes</h1>
      <button type="button" class="btn btn-primary">
        <i class="bi bi-plus"></i> Crear Postulante
      </button>
    </div>
    <hr />
    <div class="card-container">
      <div
        v-for="(postulante, index) in postulants"
        :key="postulante._id"
        class="card"
      >
        <div class="card-body">
          <h5 class="card-title">
            <span>{{ postulante.name }} {{ postulante.lastname }}</span>
            <button type="button" class="btn btn-success">
              <i class="bi bi-pen-fill"></i>
            </button>
          </h5>
          <hr />
          <h6 class="card-subtitle mb-2 text-muted">
            {{ postulante.carrera || "Ninguna" }}
          </h6>
          <p class="card-text">
            Formacion: {{ postulante.formacion || "Ninguna" }}
          </p>
          <p><i class="bi bi-telephone-fill"></i> {{ postulante.celular }}</p>
          <p><i class="bi bi-card-checklist"></i> {{ postulante.dni }}</p>
          <button type="button" class="btn btn-danger btn-delete">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="bg-modal hide">
      <div class="modal-container p-4">
        <div class="modal-mid">
          <div class="modal-title">
            ¿Seguro que quieres borrar este postulante?
          </div>
          <hr />
          <div class="modal-cuerpo">
            Si borras a este postulante no podras recuperarlo luego. Por favor verifique que sea el postulante que usted ha indicado y si es asi entonces presione en ELIMINAR.
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-secondary">Cancelar</button>
          <button type="button" class="btn btn-danger">ELIMINAR Permanentemente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark-bg {
  min-height: 100vh;
  background: #2c3e50;

  hr {
    color: #fff;
  }

  h1 {
    color: #fff;
  }
}

.bg-modal {

&.hide{
    opacity: 0;
    pointer-events: none;
}

  background: rgba(25, 42, 86, 0.5);
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    height: 15rem;
    width: 40%;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    hr {
      color: #000;
    }

    .modal-title {
      font-size: 1.8rem;
      font-weight: 500;
    }

    .modal-actions{
        display: flex;
        justify-content: space-between;
    }
  }
}

.container-header {
  display: flex;
  justify-content: space-between;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 10px 20px;
}

.btn-delete {
  float: right;
}

.card {
  background: #2f3640;
  color: #fff;

  &-body {
  }

  &-title {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postulants: [],
    };
  },

  mounted() {
    console.log("Hola desde postulantes");
    this.getPostulantes();
  },

  methods: {
    getPostulantes() {
      axios
        .get("http://localhost:4000/Postulantes/")
        .then((response) => {
          this.postulants = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>
