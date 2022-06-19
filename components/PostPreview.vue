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
      <!-- <NuxtLink @click.native="onClick" :to="'/'"
        >{{ '      ' }}Read more</NuxtLink
      > -->
      <NuxtLink :to="`/${title}`" @click.native="onClick"
        >{{ '      ' }}Read more</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
  },
  data() {
    return { selected: false }
  },
  methods: {
    onClick(_event) {
      this.selected = true
    },
  },
}
</script>

<style scoped>
a {
  text-decoration-line: underline;
  white-space: pre;
}
</style>
