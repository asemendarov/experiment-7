<template>
  <div class="range-slider">
    <div class="range-group">
      <input
        class="range-input"
        type="range"
        :min="min"
        :max="max"
        step="1"
        v-model.number="currentMin"
      />
      <input
        class="range-input"
        type="range"
        :min="min"
        :max="max"
        step="1"
        v-model.number="currentMax"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 1000000 },
  },
  data() {
    return {
      currentMin: this.min,
      currentMax: this.max,
    };
  },
};
</script>


<style lang="scss">
$color-line: #000;
$bg-color-input: #fff;
$color-border: #000;

.range-slider {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  .range-group {
    position: relative;
    flex: 0 0 100%;
    height: 8px;

    .range-input {
      position: absolute;
      left: 0;
      bottom: 0;
      margin-bottom: 0;
      -webkit-appearance: none; // vendor-prefix exception
      width: 100%;
      border-bottom: 0;

      &:focus {
        outline: 0;
      }

      // vendor prefix exceptions - must be kept seperate to work
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animation: 0.2s;
        background: $color-line;
        padding: 0 10px;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }

      &::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background: $bg-color-input;
        border: 2px solid $color-border;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
      }

      &::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animation: 0.2s;
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }

      &::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #2497e3;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
      }

      &::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animation: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }

      &::-ms-fill-lower,
      &::-ms-fill-upper {
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }

      &::-ms-thumb {
        z-index: 2;
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
      }
    }
  }
}
</style>
