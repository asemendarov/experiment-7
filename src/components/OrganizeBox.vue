<template>
  <div class="organize-box d-flex">
    <div class="organize-box__sort-by">
      <div class="sort-by d-flex flex-wrap nowrap">
        <span class="sort-by__title">Сортировать по:</span>
        <ul class="sort-by__list d-flex flex-wrap">
          <li class="sort-by__item">популярности</li>
          <li class="sort-by__item">сначала дешевые</li>
          <li class="sort-by__item">сначала дорогие</li>
        </ul>
      </div>
    </div>
    <div class="organize-box__show-by">
      <div class="show-by d-flex">
        <label class="show-by__title">Показывать по </label>
        <select class="show-by__select">
          <option class="show-by__option" value="24" selected>24</option>
          <option class="show-by__option" value="48">48</option>
          <option class="show-by__option" value="70">70</option>
          <option class="show-by__option" value="100">100</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeBox",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.organize-box {
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;

  & .sort-by {
    padding: 5px 0;

    &__item {
      padding-left: 10px;
      color: $color-link;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  & .show-by {
    padding: 5px 0;

    &__title {
      margin-bottom: 0px;
      align-self: center;
    }

    &__select {
      margin-left: 10px;
      padding-left: 5px;

      width: 50px;
      height: 34px;

      border: 1px solid $color-border;
      border-radius: 3px;
    }
  }
}
</style>
