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
  { path: '/useAuth', name: 'useAuth', composables: () => import('@/composables/useAuth.js') },
  { path: '/useFirebase', name: 'useFirebase', component: () => import('@/composables/.env') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
