<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Schedules">Schedule Appointment</RouterLink>
    <RouterLink to="/Login">Login</RouterLink>
    <RouterLink to="/Login">Logout</RouterLink>
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
