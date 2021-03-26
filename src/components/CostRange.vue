<template>
  <div class="cost-range">
    <h6 class="cost-range__title">Цена, валюта</h6>
    <div class="cost-range__number-group d-flex nowrap">
      <div class="cost-range__min">
        <span>от</span>
        <input
          class="cost-range__value"
          type="number"
          :min="min"
          :max="max"
          v-model.number="priceMin"
        />
      </div>
      <div class="cost-range__max">
        <span>до</span>
        <input
          class="cost-range__value"
          type="number"
          :min="min"
          :max="max"
          v-model.number="priceMax"
        />
        <span>₽</span>
      </div>
    </div>
    <range-slider class="cost-range__range-group" :min="min" :max="max" />
  </div>
</template>

<script>
import RangeSlider from "@/components/RangeSlider";

export default {
  components: { RangeSlider },
  name: "CostRange",
  computed: {
    RangeSlider,
  },
  props: {
    min: { type: Number, default: 1000 },
    max: { type: Number, default: 1000000 },
  },
  data() {
    return {
      priceMin: this.min,
      priceMax: this.max,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.cost-range {
  align-items: center;

  &__title {
    font-family: $font-open-sans;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &__number-group {
    margin-bottom: 14px;
  }

  &__value {
    margin: 0 10px;
    max-width: 110px;
    height: 40px;
    border: 1px solid $color-border;
    box-sizing: border-box;
    border-radius: 3px;

    // vendor-prefix exception
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:invalid,
    &:out-of-range {
      box-shadow: 0 0 3pt 1pt red;
    }
  }
}
</style>
