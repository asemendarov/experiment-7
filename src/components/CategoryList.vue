<template>
  <div class="category-list">
    <h6 class="category-list__title">Все категории</h6>
    <ul class="text-blue">
      <li class="category-list__item" v-for="idx in 7" :key="idx">
        <a class="" href="">
          Категория в которой нашли что-то
          <span class="category-list__count lighten-1">(ххх)</span>
        </a>
      </li>
    </ul>
    <input class="category-list__button text-blue" type="button" value="Ещё 10 категорий..." />
  </div>
</template>

<script>
export default {
  name: "CategoryList",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.category-list {
  &__title {
    padding: 5px 0;
  }

  &__item {
    padding: 5px 0;

    & a:hover {
      text-decoration: underline;
    }
  }

  &__button {
    padding: 5px 0;
  }

  .text-blue {
    color: $color-link;
  }
}
</style>
