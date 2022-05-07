<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <p class="text-sm">
      {{ lead }}
    </p>
    <div
      class="w-full flex-row justify-end items-center pr-4 flex text-sm text-caribbeanGreen"
    >
      <NuxtLink :to="`/${title}`">{{ '      ' }}Read more</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
  },
}
</script>

<style scoped>
a {
  text-decoration-line: underline;
  white-space: pre;
}
</style>
