import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/notFound', name: 'notfound', component: NotFoundView }, //call all route for 404
  { path: '/:pathMatch(.*)*', redirect: '/notfound' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
