<script>
import { ref } from 'vue'
import { useAuth } from '@vueuse/firebase/useAuth'

export default {
  setup() {
    const login_form = ref({})
    const auth = useAuth()

    const login = () => {
      auth.dispatch('login', login_form.value)
    }
    return login_form, login
  },
}
</script>

<template>
  <form class="login" @submit.prevent="login">
    <input v-model="login_form.email" type="text" placeholder="Email" />
    <input v-model="login_form.Password" type="password" placeholder="Password" />
    <button type="submit" class="bg-blue-700 px-4 py-2 text-white">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
.login-user {
  @apply mx-auto  mt-80  flex max-w-md flex-col gap-4 rounded-md bg-red-300 p-8 shadow-lg;
  & input {
    @apply mt-4 rounded-md px-4 py-3 text-xl ring-1 ring-slate-300;
  }
}
</style>
