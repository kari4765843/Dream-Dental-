import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/components/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'
import SchedulesPage from '@/views/SchedulePage.vue'
import Login from '@/views/Login.vue'
import Submit_Page from '@/views/Submit_page.vue'
import SettingsPage from '@/views/SettingsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Schedules', name: 'Schedules', component: SchedulesPage },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },

  { path: '/Submit_page', name: 'Submit', component: Submit_Page },

  { path: '/Settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
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
