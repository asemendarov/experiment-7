<template>
  <div class="category-group d-flex">
    <template v-for="(category, idx) in categories">
      <a class="category-group__item d-flex" href="" :key="idx">
        <div class="category-group__image">
          <img src="" alt="" />
        </div>
        <div class="category-group__body overflow-hidden">
          <h6 class="category-group__title">{{ category.title }}</h6>
          <span class="category-group__count lighten-1">{{ category.count }} товара</span>
        </div>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: "CategoryGroup",
  data() {
    return {
      categories: [
        {
          title: "Название категории",
          count: 134,
        },
        {
          title: "Название",
          count: 2,
        },
        {
          title: "Название катег",
          count: 132,
        },
        {
          title: "Название кат",
          count: 155,
        },
        {
          title: "Название катего22222222222222222222222222222222222",
          count: 166,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.category-group {
  &__item {
    width: 60px + 170px;

    &:not(:last-of-type) {
      margin-right: 20px;
      border-right: 1px solid $color-border;
    }

    &:hover {
      filter: brightness(85%);
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
