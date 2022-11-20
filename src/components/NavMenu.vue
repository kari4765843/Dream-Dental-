<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Schedules">Schedule Appointment</RouterLink>
    <RouterLink to="/Contact">Contact Us</RouterLink>
    <RouterLink to="/Login">Login</RouterLink>
    <RouterLink to="/Logout">Logout</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4 bg-pink-500;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
