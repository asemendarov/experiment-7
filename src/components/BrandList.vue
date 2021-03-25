<template>
  <div class="brand-list">
    <h6 class="brand-list__title">Бренды</h6>
    <ul>
      <li class="brand-list__item d-flex" v-for="idx in 3" :key="idx">
        <input class="brand-list__checkbox" type="checkbox" value="" />
        <label class="brand-list__label">
          <span class="brand-list__name">Бренд </span>
          <span class="brand-list__count lighten-1">(xxx)</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BrandList",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.brand-list {
  &__title {
    font-family: $font-open-sans;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &__checkbox {
    width: 15px;
    height: 15px;
  }

  &__item {
    margin-top: 15px;
  }

  &__label {
    margin-left: 8px;
    margin-bottom: 0;
  }
}
</style>
