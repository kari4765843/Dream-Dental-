import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Schedules', name: 'Schedules', component: () => import('@/views/SchedulePage.vue') },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  { path: '/Submit_page', name: 'Submit', component: () => import('@/views/Submit_page.vue') },
  { path: '/useFirebase', name: 'useFirebase', component: () => import('@/composables/useFirebase.js') },
  { path: '/Dashboard', name: 'Dashboard', component: () => import('@/views/Dashboard.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
