<template>
  <div
    class="hidden absolute top-0 right-0 panel h-full w-29.6% md:flex flex-row max-w-md overflow-y-auto"
  >
    <div class="h-96% max-w-0 border-l border-caribbeanGreen absolute" />
    <div class="grid gap-2 p-4 h-fit pb-28">
      <h1 class="text-3xl xl:text-6xl my-9"><strong>Shoshanna</strong></h1>
      <p>
        Bacon ipsum dolor amet pig strip steak capicola chislic ball tip cow
        boudin cupim ham hock salami, turkey jerky brisket kevin. Shankle
        alcatra bacon salami pork loin ribeye chuck, t-bone drumstick. Leberkas
        pastrami buffalo turducken chuck pork belly pork loin, doner sausage
        bacon. Beef brisket turkey pork loin flank landjaeger filet mignon
        buffalo rump t-bone jerky pork chop ham.
      </p>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-5As54kUbDWo%2FVIuGd_i81cI%2FAAAAAAAAMP8%2FF1BDNELxzQ8%2Fs1600%2FBacon.jpg&f=1&nofb=1" alt="Bacon image"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="h-96% max-w-0 border-r border-caribbeanGreen absolute right-line right-0" />

  </div>
</template>

<script>
export default {
  name: 'SidePanel',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('sidepanel', this.posts)
  },
}
</script>

<style scoped>
.panel {
  background: linear-gradient(
    164.7deg,
    #c4bcf8 0%,
    rgba(196, 188, 248, 0) 71.4%
  );
}
.right-line {
  display: none;
  @media (min-width: 1536px) {
    display: block;
  }
}
</style>
