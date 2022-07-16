<template>
  <div :class="[{ isSelected: selected }, 'container w-full relative z-0']">
    <div
      class="hidden absolute w-full h-full top-0 left-0 bg-filter md:block z-10"
    />
    <div class="flex flex-col gap-4 pr-40 pb-4 z-20 relative">
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
}

.bg-filter {
  background: linear-gradient(
    90deg,
    #20214f 63.27%,
    rgba(32, 33, 79, 0.397625) 95.01%,
    rgba(32, 33, 79, 0) 100%
  );
}

@media (min-width: 768px) {
  .container {
    width: 702px;
    height: 163px;
    background-image: url('~/assets/actionfigures.png');
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 0px 10px 0px 0px;
  }
}
</style>
