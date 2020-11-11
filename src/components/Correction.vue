<template>
  <div class="correction" v-if="getShowCorrection">
    <div
      class="question-results"
      v-for="(answer, index) in getUserAnswers"
      :key="index"
    >
      <p class="question">
        <span class="question-number">{{ index + 1 }}</span> :
        {{ answer.question }}
      </p>
      <p class="user-answer">
        {{ answer.selectedChoice }}
        <svg
          class="icon-check"
          v-if="answer.selectedChoice === answer.correctAnswer"
        >
          <use xlink:href="sprite.svg#icon-check"></use>
        </svg>

        <svg
          class="icon-cross"
          v-if="answer.selectedChoice !== answer.correctAnswer"
        >
          <use xlink:href="sprite.svg#icon-cross"></use>
        </svg>
      </p>
      <p v-if="answer.selectedChoice !== answer.correctAnswer">
        <span class="correct-answer">Bonne réponse</span> :
        {{ answer.correctAnswer }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserAnswers", "getShowCorrection"])
  }
};
</script>

<style lang="scss" scoped>
.question-results {
  margin-bottom: 5rem;
  font-size: 1.6rem;

  .question-number,
  .correct-answer {
    font-weight: 600;
  }

  .question {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .user-answer {
    margin-bottom: 1rem;
    position: relative;
    .icon-check {
      fill: lightgreen;
      width: 20px;
      height: 20px;
      margin-left: 5px;
      position: absolute;
    }

    .icon-cross {
      fill: $color-red;
      width: 20px;
      height: 20px;
      margin-left: 5px;
      position: absolute;
    }
  }

  .correct-answer {
    font-weight: 600;
  }
}
</style>
