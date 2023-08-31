import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      name: 'Shop',
      path: '/all-categories-products',
      component: () => import('../views/ShopView.vue')
    }
  ]
})

export default router
