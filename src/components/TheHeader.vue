<template>
  <header class="the-header">
    <div class="the-header__container">
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
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 10rem;

  color: $color-header;
  background: $bg-color-header;

  &__container {
    flex: 0 1 1280px;

    padding: 0 2.4rem;
  }

  .navigation-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
