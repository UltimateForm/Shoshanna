<template>
  <button
    :class="{ active: isActive }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onMouseClick"
  >
    <div class="protectiveFilm" />
    <li style="--i: 0">
      <NuxtLink to="/">
        <div class="home"></div>
      </NuxtLink>
    </li>
    <li style="--i: 1">
      <NuxtLink to="/archive">
        <div class="list"></div>
      </NuxtLink>
    </li>
    <li style="--i: 2">
      <NuxtLink to="/about">
        <div class="about"></div>
      </NuxtLink>
    </li>
    <div class="buttonArea" />
  </button>
</template>

<script>
export default {
  data() {
    return { isActive: false }
  },
  methods: {
    onMouseEnter(event) {
      if (window.innerWidth > 640) {
        this.isActive = true
      }
    },
    onMouseLeave(event) {
      if (window.innerWidth > 640) {
        this.isActive = false
      }
    },
    onMouseClick(event) {
      console.log('Before click', this.isActive)
      this.isActive = !this.isActive
      console.log('CLICK??', this.isActive)
    },
  },
}
</script>

<style scoped>
button {
  -webkit-tap-highlight-color: transparent;
  width: 64px;
  height: 64px;
  position: absolute;
  display: inline-flex;
  place-content: center;
  place-items: center;
  right: 16px;
  bottom: 36px;
  position: fixed;
  @apply shadow;
}

button div {
  background-repeat: no-repeat;
  background-position: center;
}
button > .buttonArea {
  @apply bg-titanWhite;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  z-index: 2;
  background-image: url('~/assets/logo.png');
  transform: rotate(36deg);
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
button > .protectiveFilm {
  position: absolute;
  background-color: red;
  width: 64px;
  height: 64px;
  transition-duration: 1s;
  bottom: 0;
  right: 0;
  z-index: 0;
  opacity: 0;
}
button.active > .protectiveFilm {
  width: 128px;
  height: 128px;
}

button li {
  position: absolute;
  list-style: none;
  transform-origin: 76px;
  left: -48px;
  color: red;
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--i));
  transform: rotate(0deg) translateX(32px);
  width: 48px;
  height: 48px;

  z-index: 1;
}
button li div {
  @apply bg-titanWhite;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  left: 50%;
  background-size: contain;
  transition: 0.25s;
  transition-delay: calc(0.1s * var(--i));

  position: absolute;
  background-size: 32px;
}
button li .home {
  background-image: url('~/assets/home.png');
}
button li .list {
  background-image: url('~/assets/list.png');
}
button li .about {
  background-image: url('~/assets/information-sign.png');
}
button.active li {
  transform: rotate(calc(145deg / 3 * var(--i)));
}
button.active > .buttonArea {
  transform: rotate(360deg);
}
@media (min-width: 640px) {
  button.active li div:hover {
    transform: rotate(calc(145deg / -3 * var(--i))) scale(1.15);
  }
  button > .buttonArea:hover {
    transform: rotate(360deg);
  }
}

button.active li div {
  left: -32px;
  transform: rotate(calc(145deg / -3 * var(--i)));
}
</style>
