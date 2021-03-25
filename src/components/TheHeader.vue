<template>
  <header class="the-header">
    <div class="the-header__container d-flex">
      <div class="navigation-wrap">
        <p>Шапка сайта</p>
        <nav class="the-header__navigation">
          <!-- navigation -->
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

// 1rem = 10px
.the-header {
  color: $color-header;
  background: $bg-color-header;

  &__container {
    margin: 0 auto;

    max-width: 1280px;
    min-height: 10rem;

    padding: 0 2.4rem;
  }

  .navigation-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
