<template>
  <form action="Dashboard" class="w-max-6 form-input mt-56 ml-72 mr-24 flex bg-blue-800">
    <h1 class="px-4 text-center text-lg font-semibold text-white">Email</h1>
    <label for="Email"></label>
    <input type="text" placeholder="Enter Email" name="Email" required />

    <h1 class="px-4 text-center text-lg font-semibold text-white">Password</h1>
    <label for="Email"></label>
    <input type="password " placeholder="Enter Password" name="password" required />

    <button class="btn btn-accent ml-4 bg-red-600 text-white" @click="login">Login</button>
  </form>
</template>
