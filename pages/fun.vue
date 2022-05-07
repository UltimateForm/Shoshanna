<template>
  <div>
    This is the fun page
    <header>
      <nav>
        <NuxtLink to="/morefun">More</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/fun">Fun</NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  color: red;
}
</style>
