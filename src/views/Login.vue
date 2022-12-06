<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const Email = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(Email.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="Email" type="text" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="mt-4 bg-red-300 px-4 py-2">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-44 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
