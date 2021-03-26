<template>
  <div class="clarifier-box d-flex flex-wrap">
    <template v-for="idx in 3">
      <div class="clarifier-box__item" :key="idx">
        <span key="">Уточнение</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ClarifierBox",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.clarifier-box {
  margin: -5px;

  &__item {
    margin: 5px;
    padding: 7px 15px;
    background: $bg-color-clarifier;
    border-radius: 3px;
  }
}
</style>
