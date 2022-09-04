import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/scene",
    name: "Scene",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scene.vue"),
  },
  {
    path: "/food",
    name: "Food",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Food.vue"),
  },
  {
    path: "/Hotel",
    name: "Hote;",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hotel.vue"),
  },
  {
    path: "/traffic",
    name: "Traffic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Traffic.vue"),
  },
  {
    path: "/entry",
    name: "Entry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Entry.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
