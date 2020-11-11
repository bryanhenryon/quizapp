<template>
  <nav class="categories">
    <div
      class="categories__category"
      :class="{ active: getActiveCategory === index }"
      :id="index"
      v-for="(categorie, index) in getQuiz"
      :key="index"
      @click="setActiveCategory(index)"
    >
      <h3 class="categories__category-title">{{ categorie.title }}</h3>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getQuiz", "getActiveCategory"])
  },
  methods: {
    setActiveCategory(index) {
      this.$store.dispatch("setActiveCategory", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  align-items: center;
  overflow-x: auto;

  &__category {
    margin-right: 0.5rem;
    padding: 1rem 2rem;
    flex-shrink: 0;
    font-size: 1.2rem;
    background: $color-light-gray;
    cursor: pointer;

    &.active {
      background: $color-white;

      .categories__category-title {
        font-weight: 600;
      }
    }
  }

  &__category-title {
    font-weight: 400;
  }
}
</style>
