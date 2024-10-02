import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', component: NotFoundView } //call all route for 404
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
