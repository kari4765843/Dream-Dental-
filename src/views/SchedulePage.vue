<template>
  <h1 class="border-l py-3 text-center text-4xl font-semibold text-blue-900">Contact Us</h1>
  <h1 class="text-blac border-l py-3 text-center text-xl font-semibold">
    Please fill out the form below. We will contact you shortly to schedule your appointment.
  </h1>
  <form class="Appform">
    <div class="row odd">
      <label for="Fullname"></label>
      <input type="text" placeholder="Full Name" />
    </div>
  </form>

  <form class="phone">
    <h1 class="left-5 py-3 text-center text-lg font-semibold text-blue-900">Phone Number🦷</h1>
    <div class="row odd">
      <label for="Fullname"></label>
      <input type="number" placeholder="### ### ####" />
    </div>
  </form>

  <form class="Birth">
    <h1 class="left-5 py-3 text-center text-lg font-semibold text-blue-900">Date of Birth🦷</h1>
    <div class="row odd">
      <label for="Fullname"></label>
      <input type="date" placeholder="MM/DD/YYYY" />
    </div>
  </form>

  <form class="Date">
    <h1 class="left-5 py-3 text-center text-lg font-semibold text-blue-900">Preferred appointment date🦷</h1>
    <div class="row odd">
      <label for="Fullname"></label>
      <input type="date" placeholder="MM/DD/YYYY" />
    </div>
  </form>

  <form class="Time">
    <h1 class="left-5 py-3 text-center text-lg font-semibold text-blue-900">Preferred appointment time🦷</h1>
    <div class="row odd">
      <label for="Fullname"></label>
      <input type="time" placeholder="Time" />
    </div>
  </form>

  <form class="Message">
    <h1 class="left-5 py-3 text-center text-lg font-semibold text-blue-900">Reason for your visit🦷</h1>
    <label for="Message"></label>
    <textarea id="subject" name="subject"></textarea>
  </form>

  <form class="Submit"></form>
  <div id="myForm" class="form-popup">
    <form action="/Submit_page" class="form-input bg-blue-800 text-center text-white">
      <button type="submit" class="btn">Submit</button>
      <button type="button" class="btn cancel" onclick="closeForm()"></button>
      <div class="row"></div>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.Appform {
  @apply px-20 py-8 px-4 text-center text-blue-900;
}
.phone {
  @apply flex-wrap justify-between text-center text-blue-900;
}
.Birth {
  @apply py-10 text-center text-blue-900;
}

.Date {
  @apply py-8 pt-0 text-center text-blue-900;
}

.Time {
  @apply flex-wrap justify-between py-9 text-center text-blue-900;
}

.Message {
  @apply py-9 text-center text-black;
}
</style>
