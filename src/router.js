import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Schedules', name: 'Schedules', component: () => import('@/views/SchedulePage.vue') },
  { path: '/Contact', name: 'Contact', component: () => import('@/views/Contactus.vue') },
  { path: '/Login', name: 'Login', component: () => import('@/views/Login.vue') },
  { path: '/Logout', name: 'Logout', component: () => import('@/views/Logout.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
