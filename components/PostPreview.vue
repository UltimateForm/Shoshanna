<template>
  <div :class="[{ isSelected: selected }, 'container relative z-0']">
    <div class="absolute w-full h-full top-0 left-0 bg-filter block z-10" />
    <div class="flex flex-col gap-4 pl-2 py-4 z-20 relative pr-1/5">
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <p class="text-sm md:text-lg">
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

.container {
  @apply max-w-2xl;
  @apply w-full;
  height: fit-content;
  background-image: url('~/assets/actionfigures.png');
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    border-radius: 0px 10px 0px 0px;
  }
}

.bg-filter {
  background: linear-gradient(
    90deg,
    #20214f 63.27%,
    rgba(32, 33, 79, 0.397625) 95.01%,
    rgba(32, 33, 79, 0) 100%
  );
}
</style>
