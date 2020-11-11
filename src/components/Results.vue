<template>
  <div class="results">
    <p class="results__percentage">{{ calculPercentage }}%</p>
    <p class="results__message">
      {{ resultMessage }}
    </p>
    <button
      class="results__show-answers"
      @click="showCorrection"
      v-if="!getShowCorrection"
    >
      Voir les réponses
    </button>
    <app-correction v-if="getShowCorrection"></app-correction>
    <button class="btn" @click="restartQuiz">Terminer</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Correction from "./Correction";

export default {
  data() {
    return {
      correctAnswers: 0
    };
  },
  components: {
    "app-correction": Correction
  },
  computed: {
    ...mapGetters([
      "getQuestionsNumber",
      "getCorrectAnswers",
      "getUserAnswers",
      "getShowCorrection"
    ]),
    calculPercentage() {
      return Math.floor((this.correctAnswers / this.getQuestionsNumber) * 100);
    },
    resultMessage() {
      if (this.correctAnswers > 1) {
        return `Vous avez correctement répondu à ${this.correctAnswers} questions sur ${this.getQuestionsNumber}`;
      } else {
        return `Vous avez correctement répondu à ${this.correctAnswers} question sur ${this.getQuestionsNumber}`;
      }
    }
  },
  methods: {
    restartQuiz() {
      this.$store.dispatch("restartQuiz");
    },
    showCorrection() {
      this.$store.dispatch("showCorrection");
    }
  },
  created() {
    for (let answer of this.getUserAnswers) {
      if (answer.selectedChoice === answer.correctAnswer) {
        this.correctAnswers++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__percentage {
    font-weight: 700;
    font-size: 5.5rem;
    margin-bottom: 3rem;
  }

  &__message {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  &__show-answers {
    border: none;
    background: none;
    color: $color-red;
    padding-bottom: 0.2rem;
    border-bottom: 2px solid $color-red;
    margin-bottom: 6rem;
    font-size: 1.6rem;
    cursor: pointer;
  }
}
</style>
