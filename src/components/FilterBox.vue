<template>
  <div class="filter-box">
    <category-list class="filter-box__category-list" />
    <cost-range class="filter-box__cost-range" />
    <brand-list class="filter-box__brand-list" />
  </div>
</template>

<script>
import CostRange from "@/components/CostRange";
import CategoryList from "@/components/CategoryList";
import BrandList from "@/components/BrandList";

export default {
  name: "FilterBox",
  components: {
    CostRange,
    CategoryList,
    BrandList,
  },
};
</script>

<style lang="scss">
.filter-box {
  &__cost-range {
    margin-top: 45px;
  }

  &__brand-list {
    margin-top: 32px;
  }
}
</style>
