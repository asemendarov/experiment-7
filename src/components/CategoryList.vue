<template>
  <div class="category-list">
    <h6 class="category-list__title py-5">Все категории</h6>
    <ul class="text-blue">
      <li class="category-list__item py-5" v-for="idx in 7" :key="idx">
        <a class="" href="">
          Категория в которой нашли что-то
          <span class="category-list__count lighten-1">(ххх)</span>
        </a>
      </li>
    </ul>
    <input class="category-list__button text-blue py-5" type="button" value="Ещё 10 категорий..." />
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
    // pass
  }

  &__item {
    & a:hover {
      text-decoration: underline;
    }
  }

  .py-5 {
    padding: 5px 0;
  }

  .text-blue {
    color: $color-link;
  }
}
</style>
