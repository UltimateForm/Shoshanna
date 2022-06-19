<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-xl font-bold">Lorem Ipsum</h1>
    <p class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div id="mainContent">
      <img src="~/assets/image 2.png" alt="Feet" />
      <p class="text-sm">
        Malesuada nunc vel risus commodo viverra maecenas accumsan. Ultricies mi
        quis hendrerit dolor magna eget est lorem. Tellus mauris a diam
        maecenas. Est placerat in egestas erat imperdiet sed. Integer malesuada
        nunc vel risus commodo viverra maecenas accumsan. Scelerisque in dictum
        non consectetur a erat nam. Eu consequat ac felis donec et odio
        pellentesque. In fermentum et sollicitudin ac orci. Nibh ipsum consequat
        nisl vel pretium. Porta nibh venenatis cras sed felis eget velit
        aliquet. Sed elementum tempus egestas sed sed risus pretium quam
        vulputate. Libero id faucibus nisl tincidunt eget nullam non nisi.
        Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
        Vestibulum morbi blandit cursus risus. Tellus integer feugiat
        scelerisque varius morbi enim nunc faucibus a. Ut lectus arcu bibendum
        at. Fermentum et sollicitudin ac orci phasellus egestas tellus.
      </p>
      <img src="~/assets/image 3.png" alt="Night sky" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#mainContent {
  transition: all 0.5s;
}

.post-enter-active #mainContent {
  opacity: 0;
}

.post-enter-to #mainContent {
  opacity: 1;
}

.home-leave-active,
.home-leave-to #mainContent {
  opacity: 0;
}
</style>
