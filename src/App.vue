<template>
  <app-header></app-header>
  <div class="wrapper">
    <div class="app-title">
      <h1>QuizApp</h1>
    </div>
    <app-quiz></app-quiz>
  </div>
  <app-footer></app-footer>
</template>

<script>
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-quiz": Quiz,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
#app {
  @include breakpoint($screen-sm-min) {
    padding: 5rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;

    @include breakpoint($screen-sm-min) {
      max-width: 1100px;
      margin: 0 auto;
      height: auto;
      border: 5px solid $color-red;
      padding: 5rem;
      position: relative;
    }

    .app-title {
      display: none;

      @include breakpoint($screen-sm-min) {
        display: block;
        position: absolute;
        color: $color-red;
        padding: 0 1rem;
        background: #eeeeee;
        top: -17px;
      }
    }
  }
}
</style>
