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
      <div class="price-list__filter d-flex">
        <!-- <category-list /> -->
        <div class="cost-range">
          <div class="d-flex">
            <div class="cost-range__min">
              <span>от</span>
              <input class="cost-range__value" type="text" value="1000" />
            </div>
            <div class="cost-range__max">
              <span>до</span>
              <input class="cost-range__value" type="text" value="1000000" />
              <span>₽</span>
            </div>
          </div>
          <div class="cost-range__line">
            <input type="range" name="" id="" />
            <input type="range" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import CategoryGroup from "@/components/CategoryGroup";
// import CategoryList from "@/components/CategoryList";

export default {
  components: {
    SearchBox,
    CategoryGroup,
    // CategoryList,
  },
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
      align-self: flex-start;
      padding-right: 2rem;
    }
  }
  .price-list {
    margin-top: 20px;

    &__filter {
      flex-direction: column;
    }
  }

  .cost-range {
    align-items: center;

    &__value {
      margin: 0 10px;
      max-width: 110px;
      height: 40px;
      border: 1px solid $color-border;
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
}
</style>
