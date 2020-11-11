<template>
  <app-categories></app-categories>
  <main class="main">
    <div class="quiz">
      <div v-if="!getStartQuiz">
        <h2>{{ getQuiz[getActiveCategory].title }}</h2>
        <div class="quote-wrapper">
          <p class="quote-wrapper__quote">
            <svg class="icon-quotes icon-quote-left">
              <use xlink:href="sprite.svg#icon-quotes-left"></use>
            </svg>
            {{ getQuiz[getActiveCategory].quote }}
            <svg class="icon-quotes icon-quote-right">
              <use xlink:href="sprite.svg#icon-quotes-right"></use>
            </svg>
          </p>
          <p class="quote-wrapper__source">
            &ndash; {{ getQuiz[getActiveCategory].source }}
          </p>
        </div>
        <div class="btn-wrapper">
          <button class="btn" @click="startQuiz">Commencer</button>
        </div>
      </div>
      <app-questions v-if="getStartQuiz"></app-questions>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Categories from "./Categories";
import Questions from "./Questions";

export default {
  computed: {
    ...mapGetters([
      "getQuiz",
      "getActiveCategory",
      "getStartQuiz",
      "getShowResults"
    ])
  },
  components: {
    "app-categories": Categories,
    "app-questions": Questions
  },
  methods: {
    startQuiz() {
      this.$store.dispatch("startQuiz");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 5rem 3rem;
  background: $color-white;

  @include breakpoint($screen-sm-min) {
    padding: 5rem;
  }

  .quiz {
    display: flex;
    flex-direction: column;

    @include breakpoint($screen-md-min) {
      width: 70%;
      margin: 0 auto;
    }

    h2 {
      font-size: 4rem;
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .quote-wrapper {
      font-size: 1.6rem;
      margin-bottom: 5rem;

      &__quote {
        text-align: center;
        margin-bottom: 1rem;
        position: relative;

        .icon-quotes {
          fill: rgba($color: #000, $alpha: 0.1);
          height: 1.5rem;
          width: 1.5rem;
          margin: 0 0.5rem;
        }
      }

      &__source {
        text-align: right;
        padding-right: 2rem;
      }
    }

    .btn-wrapper {
      text-align: center;
    }
  }
}
</style>
