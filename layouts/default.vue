<template>
  <div class="min-h-screen bg-blueZodiac relative bg-fixed font-sen">
    <div
      class="h-full absolute right-0 bottom-0 w-29.6% max-w-md flex place-content-start pointer-events-none shoshanna-bg"
    >
      <!-- <img src="~/assets/shoshanna.png" alt="background shoshanna image" /> -->
    </div>
    <Nuxt />
    <RadialButton />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  layout: 'default',
}
</script>

<style scoped>
.shoshanna-bg {
  background-image: url('~/assets/shoshanna.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  width: 38.5%;
  max-width: 554px;
}
</style>
