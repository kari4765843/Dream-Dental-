<template>
  <form action="Dashboard" submit-prevent="login">
    <input v-model="Email" type="text" placeholder="Email" name="Email" required />
    <input v-model="Password" type="password" placeholder="Password" name="password" required />
    <button type="submit" class="bg-blue-700 px-4 py-2 text-white">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
form {
  border: 3px red;
}
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 10px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #blue;
  color: white;
  padding: 14px 20px;
    margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>
