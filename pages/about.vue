<template>
  <div class="w-full h-full flex md:pl-1/10 place-content-center md:place-content-start place-items-center">
    <div
      class="h-full w-full flex items-center content-center flex-col justify-between max-h-96 text-center max-w-sm place-items-center relative"
    >
      <img src="~/assets/author.png" class="h-48 lg:h-72" />
      <span class="flex flex-col">
        My name is [redacted] and I write some stuff from time to time
        <span class="block md:hidden text-xs lg:text-sm">
          Note: this website is better experienced on desktop
        </span>
      </span>
      <div class="flex flex-row justify-around content-around">
        <a
          href="{props.address}"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          <img src="~/assets/icons8-tumblr.svg" class="h-10 lg:h-12" />
        </a>
        <a
          href="{props.address}"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          <img src="~/assets/icons8-twitter.svg" class="h-10 lg:h-12" />
        </a>
        <a
          href="{props.address}"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          <img src="~/assets/icons8-myspace.svg" class="h-10 lg:h-12" />
        </a>
        <a
          href="{props.address}"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          <img src="~/assets/icons8-facebook.svg" class="h-10 lg:h-12" />
        </a>
      </div>
      <a
        href="{props.address}"
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noreferrer"
      >
        <img src="~/assets/github.svg" class="h-10 lg:h-12" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
