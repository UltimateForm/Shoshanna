<template>
  <div
    class="absolute top-0 right-0 panel w-1/5 h-screen"
  >
    hello {{  }}
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
