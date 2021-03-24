<template>
  <div class="home-page">
    <search-box class="home-page__search" />
    <div class="home-page__title d-flex">
      <h1 class="nowrap">Результаты по запросу</h1>
      <p class="lighten-1">
        Показаны результаты для “Запрос пользозвателя”. Вы искали “Зопрос пользователя”
      </p>
    </div>
    <category-group />
    <!-- <section class="price-list">
      <div class="price-list__filter">
        <div class="filter__category-list"></div>
      </div>
      <div class="price-list__product-list"></div>
    </section> -->
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import CategoryGroup from "@/components/CategoryGroup.vue";

export default {
  components: { SearchBox, CategoryGroup },
  name: "HomePage",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.home-page {
  &__title {
    margin-bottom: 3rem;
    align-items: center;

    & h1 {
      padding-right: 2rem;
    }
  }
}
</style>
