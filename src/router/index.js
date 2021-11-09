import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Postulantes from "../views/Postulantes.vue";
import PostulanteUnico from "../views/PostulanteUnico.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "postulantes",
    component: Postulantes,
  },
  {
    path: "/postulante/:unique",
    name: "postulantes-unique",
    component: PostulanteUnico,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
