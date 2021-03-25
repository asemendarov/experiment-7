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
    <div class="price-list d-flex">
      <filter-box class="price-list__filter" />
      <div class="flex-auto nowrap">
        <div class="price-list__organize-by d-flex">
          <div class="price-list__sort-by">
            <div class="sort-by d-flex flex-wrap">
              <span class="sort-by__title">Сортировать по:</span>
              <ul class="sort-by__list d-flex">
                <li class="sort-by__item">популярности</li>
                <li class="sort-by__item">сначала дешевые</li>
                <li class="sort-by__item">сначала дорогие</li>
              </ul>
            </div>
          </div>
          <div class="price-list__show-by">
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
        <div class="price-list__clarifier">
          <div class="clarifier d-flex flex-wrap">
            <template v-for="idx in 3">
              <div class="clarifier__item" :key="idx">
                <span key="">Уточнение</span>
              </div>
            </template>
          </div>
        </div>
        <div class="price-list__products">
          <div class="products d-flex flex-wrap">
            <template v-for="idx in 4">
              <div class="products__item" :key="idx">
                <a class="products__link">
                  <div class="products__image img-wrap">
                    <img src="" alt="" />
                  </div>
                  <div class="category-group__body overflow-hidden">
                    <h3 class="category-group__title">Название категории</h3>
                    <span class="category-group__count lighten-1">132 товара</span>
                  </div>
                </a>
              </div>
            </template>
            <div class="products__item empty"></div>
            <div class="products__item empty"></div>
            <div class="products__item empty"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import CategoryGroup from "@/components/CategoryGroup";
import FilterBox from "@/components/FilterBox";

export default {
  name: "HomePage",
  components: {
    SearchBox,
    CategoryGroup,
    FilterBox,
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
  }

  .price-list {
    margin-top: 20px;

    &__organize-by {
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap-reverse;
    }

    &__filter {
      padding: 5px 0;
      margin-right: 40px;
    }

    &__clarifier {
      margin-top: 15px;
    }

    &__products {
      margin-top: 22px;
    }

    &__link {
    }
  }

  .sort-by {
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

  .products {
    justify-content: space-between;
    margin: -20px;

    &__item {
      margin: 20px;

      flex: 1 0 260px;
      background: red;
      height: 100px;

      &.empty {
        height: 0;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  .show-by {
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

  .clarifier {
    &__item {
      margin: 5px;
      padding: 7px 15px;
      background: $bg-color-clarifier;
      border-radius: 3px;
    }
  }
}

.qwe {
  background: red;
}
</style>
