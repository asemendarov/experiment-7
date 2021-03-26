<template>
  <div class="products-box d-flex flex-wrap">
    <template v-for="idx in 10">
      <div class="products-box__item" :key="idx">
        <a class="products-box__link" href="" ping="">
          <div class="products-box__image">
            <div class="img-wrap">
              <img src="" alt="" />
            </div>
          </div>
          <div class="products-box__body">
            <h3 class="products-box__title">Наименование товара, которое не более 2 строк</h3>
            <div class="d-flex">
              <span class="products-box__cost">ХХ ХХХ , $</span>
              <span class="products-box__old-cost lighten-1">ХХ ХХХ $</span>
            </div>
            <input class="products-box__button" type="button" value="Кнопка" />
          </div>
        </a>
      </div>
    </template>
    <div class="products-box__item empty"></div>
    <div class="products-box__item empty"></div>
    <div class="products-box__item empty"></div>
  </div>
</template>

<script>
export default {
  name: "ProductsBox",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.products-box {
  justify-content: space-between;
  margin: -20px;

  &__item {
    margin: 20px;

    flex: 1 0 260px;

    border-radius: 3px;

    &.empty {
      height: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &__body {
    margin-top: 10px;
  }

  &__cost {
    margin: 15px 0;

    font-size: 1.6rem;
    font-family: $font-open-sans;
    font-weight: bold;
  }

  &__old-cost {
    margin-left: 16px;
    align-self: center;

    font-family: $font-open-sans;
  }

  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 37px; /* fallback */
    line-height: 130%;
    letter-spacing: 0.01em;
  }

  &__image {
    padding-top: 100%;
    border-radius: 0.3rem;
    position: relative;

    & .img-wrap {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 0.3rem;
      background-color: $bg-color-box;

      & img {
        object-fit: cover;
      }
    }
  }

  &__button {
    width: 100%;
    height: 40px;
    color: $color-cta;
    background: $bg-color-cta;
    border-radius: 3px;
    font-weight: bold;

    &:hover {
      filter: contrast(80%);
    }
  }
}
</style>
