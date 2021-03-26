<template>
  <div class="category-group d-flex overflow-x-hover">
    <template v-for="idx in 6">
      <a class="category-group__item d-flex" href="" ping="" :key="idx">
        <div class="category-group__image img-wrap">
          <img src="" alt="" />
        </div>
        <div class="category-group__body overflow-hidden">
          <h6 class="category-group__title">Название категории</h6>
          <span class="category-group__count lighten-1">132 товара</span>
        </div>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: "CategoryGroup",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
.category-group {
  scroll-snap-type: x mandatory;

  &__item {
    flex: 0 0 230px;
    max-width: 230px;

    scroll-snap-align: start;

    &:not(:last-of-type) {
      margin-right: 20px;
      border-right: 1px solid $color-border;
    }

    &:hover {
      filter: contrast(80%);
    }
  }

  &__image {
    flex: 0 0 60px;
    border-radius: 3px;
    background: $bg-color-box;
  }

  &__body {
    margin: 10px 20px 10px 10px;
  }

  &__title {
    margin-bottom: 10px;
  }
}
</style>
