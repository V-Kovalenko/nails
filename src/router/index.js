import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import WorksPage from "@/pages/WorksPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/works', component: () => import("@/pages/WorksPage.vue"), name: 'WorksPAge'}
  ]
})

export default router
