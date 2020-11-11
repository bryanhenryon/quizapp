<template>
  <div class="questions" v-if="!getShowResults">
    <div class="tracker">
      {{ getQuestionIndex + 1 }} / {{ getQuestionsNumber }}
    </div>
    <hr class="hr" />
    <h3>
      {{
        getQuiz[getActiveCategory].questions[
          getQuestionIndex
        ].title.toUpperCase()
      }}
    </h3>
    <div
      class="choice"
      v-for="(choice, index) in getQuiz[getActiveCategory].questions[
        getQuestionIndex
      ].choices"
      :key="index"
    >
      <input
        type="radio"
        name="selected-question"
        :value="index"
        :id="'question-' + index"
        v-model="selectedChoice"
      />
      <label :for="'question-' + index">{{ choice.text }}</label>
    </div>

    <div class="error" v-if="getShowError">
      Veuillez sélectionner une réponse
    </div>

    <div class="btn-wrapper">
      <button
        class="btn btn--prev"
        @click="prevQuestion"
        v-if="getQuestionIndex > 0"
      >
        Précédent
      </button>
      <button class="btn btn--next" @click="nextQuestion">Suivant</button>
    </div>
  </div>
  <app-results v-if="getShowResults"></app-results>
</template>

<script>
import { mapGetters } from "vuex";
import Results from "./Results";

export default {
  components: {
    "app-results": Results
  },
  computed: {
    ...mapGetters([
      "getQuiz",
      "getActiveCategory",
      "getStartQuiz",
      "getQuestionIndex",
      "getSelectedChoice",
      "getQuestionsNumber",
      "getShowError",
      "getShowResults"
    ]),
    selectedChoice: {
      get() {
        return this.getSelectedChoice;
      },
      set(value) {
        this.$store.dispatch("setSelectedChoice", value);
      }
    }
  },
  methods: {
    prevQuestion() {
      this.$store.dispatch("prevQuestion");
    },
    nextQuestion() {
      this.$store.dispatch("nextQuestion");
    }
  }
};
</script>
<style lang="scss" scoped>
.questions {
  display: flex;
  flex-direction: column;

  .tracker {
    font-size: 1.6rem;
    text-align: right;
    padding: 0 1rem 0.5rem 0;
  }

  .hr {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
  }

  .choice {
    input[type="radio"] {
      visibility: hidden;

      &:checked + label {
        background: gold;
        color: $color-black;
      }
    }

    label {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      display: block;
      cursor: pointer;
    }
  }

  .error {
    text-align: center;
    color: $color-red;
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  .btn-wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint($screen-md-min) {
      flex-direction: row;
      justify-content: center;
    }

    .btn--prev {
      order: 2;

      @include breakpoint($screen-md-min) {
        margin-right: 2rem;
        margin-bottom: 0;
        order: 1;
      }
    }

    .btn--next {
      margin-bottom: 2rem;
      order: 1;

      @include breakpoint($screen-md-min) {
        margin-right: 2rem;
        margin-bottom: 0;
        order: 2;
      }
    }
  }
}
</style>
