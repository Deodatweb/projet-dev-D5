import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ProjetsView = () => import('@/views/ProjetsView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', component: NotFoundView }, //call all route for 404
  { path: '/projets', component: ProjetsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
