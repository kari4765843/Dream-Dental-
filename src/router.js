import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'
import SchedulesPages from '@/views/SchedulesPages'
import Login from '@/views/Login'
import Sumbit_page from '@/views/Submit_page'

const routes = [
  { path: '/', name: 'Home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/Schedules', name: 'Schedules', component: SchedulesPages, meta: { requiresAuth: true } },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: true },
  },

  { path: '/Submit_page', name: 'Submit', component: Sumbit_page, meta: { requiresAuth: true } },
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
