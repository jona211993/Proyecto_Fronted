<template>
  <div>
    <h1>Hola mundo</h1>
    <p>{{ postulante }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postulante: null,
    };
  },

  mounted() {
    this.getPostulante();
  },

  methods: {
    getPostulante() {
      const unique = this.$route.params.unique;

      axios
        .get(`http://localhost:4000/Postulantes/${unique}`)
        .then((response) => {
          this.postulante = response.data.data
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>
