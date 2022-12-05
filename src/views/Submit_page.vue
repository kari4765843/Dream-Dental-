<template>
  <div class="container">
    <div class="popup">
      <h1 class="pt-12 text-center text-3xl">✅</h1>

      <h1 class="pt-5 text-center text-2xl text-white">Successful!</h1>

      <h1 class="pt-5 text-center text-4xl font-thin text-white">We will contact you shortly!</h1>
      <div class="OK">
        <RouterLink to="/">OK</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.popup {
  width: 400px;
  background: rgb(19, 19, 158);
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 30px 30px;
  text-align: center;
  padding-bottom: -50%;
}
.OK {
  @apply h-10  bg-red-600 py-8 pt-4  text-center  text-white  shadow-lg;
}
</style>
