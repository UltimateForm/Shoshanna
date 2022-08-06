<template>
  <div class="hidden absolute top-0 right-0 panel h-screen w-29.6% md:flex flex-row max-w-md">
    <div class="h-96% max-w-0 border-l border-caribbeanGreen " />
    hello {{}}
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
</style>
