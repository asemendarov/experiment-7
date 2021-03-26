<template>
  <div class="home-page">
    <search-box class="home-page__search" />
    <div class="home-page__title d-flex">
      <h1 class="nowrap">Результаты по запросу</h1>
      <p class="lighten-1 md-d-none">
        Показаны результаты для “Запрос пользозвателя”. Вы искали “Зопрос пользователя”
      </p>
    </div>
    <category-group class="sm-d-none" />
    <div class="price-list d-flex">
      <div class="position-relative sm-d-none">
        <div class="price-list__left-box position-sticky">
          <filter-box class="price-list__filter-box" />
          <div class="d-none md-d-block">
            <organize-box class="price-list__organize-box" />
            <clarifier-box class="price-list__clarifier-box" />
          </div>
        </div>
      </div>
      <div class="flex-auto">
        <div class="md-d-none">
          <organize-box class="price-list__organize-box" />
          <clarifier-box class="price-list__clarifier-box" />
        </div>
        <products-box class="price-list__products-box" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import CategoryGroup from "@/components/CategoryGroup";
import FilterBox from "@/components/FilterBox";
import OrganizeBox from "@/components/OrganizeBox";
import ClarifierBox from "@/components/ClarifierBox";
import ProductsBox from "@/components/ProductsBox";

export default {
  name: "HomePage",
  components: {
    SearchBox,
    CategoryGroup,
    FilterBox,
    OrganizeBox,
    ClarifierBox,
    ProductsBox,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.home-page {
  &__title {
    margin-bottom: 3rem;
    align-items: center;

    & h1 {
      align-self: flex-start;
      padding-right: 2rem;
    }

    & p {
      margin-left: 20px;
    }
  }

  & .price-list {
    margin-top: 20px;

    &__left-box {
      padding: 5px 0;
      margin-right: 40px;
    }

    &__clarifier-box {
      margin-top: 8px;
    }

    &__products-box {
      margin-top: 0px;
    }

    &__organize-box {
      margin-top: 20px;
    }
  }

  @media (max-width: 600px) {
    &__title {
      margin-bottom: 0px;
    }

    & .price-list {
      margin-top: 0px;
    }

    & .search-box {
      &__close {
        display: none;
      }

      &__submit {
        width: 80px;
      }
    }
  }
}
</style>
