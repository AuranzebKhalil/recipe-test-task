import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";

const routes:any = [
  {
    path: "",
    name: "Home",
    components: {
      default: Home,     
    },
 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
