<template>
  <main class="the-main">
    <div class="the-main__container">
      <slot></slot>
    </div>
  </main>
</template>
<script>
export default {
  name: "TheMain",
  data() {
    return {
      // pass
    };
  },
};
</script>

<style lang="scss">
// 1rem - 10px

.the-main {
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    flex: 0 1 1280px;

    margin-top: 3.2rem;
    margin-bottom: 5rem;
    padding: 0 4rem;
  }
}
</style>
