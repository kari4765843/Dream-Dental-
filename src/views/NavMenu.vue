<script setup>
import { useAuth } from '@/components/useAuth'

const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Schedules">Schedule Appointment</RouterLink>
    <RouterLink to="/Login">Login</RouterLink>
  </nav>

  <nav>
    <div v-if="isAuthenticated">
      <i class="pr-7">Welcome Back ! {{ user?.email }}</i>
      <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
      <RouterLink :to="{ name: 'Home' }" href="#" class="menu-settings" @click="logout">Logout</RouterLink>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4 bg-blue-800 py-4 text-white;

  & .router-link-active {
    @apply underline-offset-4;
  }
}
</style>
