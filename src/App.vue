<template>
  <div id="app">
    <the-header />
    <the-main>
      <router-view></router-view>
    </the-main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
  mounted() {
    this.routerControl(this.$route);
  },
  watch: {
    $route: "routerControl",
  },
  methods: {
    routerControl() {},
  },
};
</script>

<style lang="scss">
// Import Fonts
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");
// Import Normalize
@import "~@/assets/scss/normalize";
@import "~@/assets/scss/tw-normalize";
@import "~@/assets/scss/my-normalize";
// Import Other
@import "~@/assets/scss/variables";
@import "~@/assets/scss/global-class";

#app {
  min-height: inherit;

  font-family: $font-arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-style: normal;
  font-weight: 400;
  color: $color-base;
  background: $bg-color-base;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 150%;
  }
}
</style>
