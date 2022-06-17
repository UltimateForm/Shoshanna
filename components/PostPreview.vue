<template>
  <div
    id="container"
    :class="[{ isSelected: selected }, 'flex flex-col gap-4 w-full']"
  >
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <p class="text-sm">
      {{ lead }}
    </p>
    <div
      class="w-full flex-row justify-end items-center pr-4 flex text-sm text-caribbeanGreen"
    >
      <NuxtLink @click.native="onClick" :to="'/'"
        >{{ '      ' }}Read more</NuxtLink
      >
      <!-- <NuxtLink @click.native="onClick" :to="`/${title}`"
        >{{ '      ' }}Read more</NuxtLink
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { selected: false }
  },
  props: {
    title: String,
    lead: String,
  },
  methods: {
    onClick(event) {
      this.selected = true
    },
  },
}
</script>

<style scoped>
#container {
  transition: all 5s;
}
#container.isSelected {
  position: absolute;
  top:0
}

a {
  text-decoration-line: underline;
  white-space: pre;
}
</style>
