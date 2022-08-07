<template>
  <div id="container" class="pt-20 pb-40 md:p-4 flex gap-9 flex-col md:text-lg h-full max-h-full overflow-y-auto md:w-2/3 relative ">
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
    <PostPreview
      :title="'Lorem Ipsum'"
      :lead="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  },
  created() {
    console.log(this.posts)
  },
}
</script>

<style scoped>
#container {
  transition: all 0.5s;
}
#container.isSelected {
  position: absolute;
  top: 0;
}

.home-enter-active,
.home-enter-to #container {
  opacity: 1;
}
.home-enter #container {
  opacity: 0;
}

.post-leave-active,
.post-leave-to #container {
  opacity: 0;
}
</style>
