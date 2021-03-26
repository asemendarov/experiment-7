<template>
  <div class="search-box">
    <form class="search-box__form d-flex" action="">
      <label class="search-box__label d-flex" for="search-text">
        <div class="icon-wrap icon-none">
          <icon-search class="search-box__icon" />
        </div>
        <input
          class="search-box__text"
          type="text"
          name="str"
          id="search-text"
          value="Запрос пользователя"
          placeholder="Поиск"
        />
        <button class="search-box__clear d-none" @click.prevent>
          <div class="icon-wrap icon-control">
            <icon-clear class="search-box__icon" />
          </div>
        </button>
      </label>
      <div class="search-control d-flex">
        <input class="search-box__submit text-bold" type="button" value="Найти" />
        <input class="search-box__close text-bold" type="button" value="Закрыть" />
      </div>
    </form>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch";
import IconClear from "@/components/icons/IconClear";

export default {
  components: { IconSearch, IconClear },
  name: "SearchBox",
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.search-box {
  margin-bottom: 3rem;

  &__form {
    min-height: 40px;
  }

  &__label {
    flex: 1 1 auto;
    align-items: center;
    border: 1px solid $color-border;
    border-radius: 5px 0px 0px 5px;
    margin-bottom: 0;
  }

  &__icon {
    //pass

    &[name="search"] {
      padding: 0 16px;
      border-right: 1px solid $color-border;
    }

    &[name="clear"] {
      padding-right: 16px;
    }
  }

  &__text {
    width: 100%;

    &:focus ~ .search-box__clear {
      display: block;
    }
  }

  &__submit {
    position: relative;
    left: -1px;

    width: 145px;
    color: $color-cta;
    background: $bg-color-cta;
    border-radius: 0px 3px 3px 0px;

    &:hover {
      filter: contrast(80%);
    }
  }

  &__close {
    margin-left: 10px;
    width: 117px;
    border: 1px solid $color-border;
    border-radius: 3px;
  }
}
</style>
