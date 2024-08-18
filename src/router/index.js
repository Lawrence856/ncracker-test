import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/movies/:id',
      name: 'movie-detail',
      component: () => import('@/views/MovieDetailView.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
