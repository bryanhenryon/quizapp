<template>
  <header class="header">
    <h1 class="header__app-title">QuizApp</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @include breakpoint($screen-sm-min) {
    display: none;
  }

  &::before {
    content: "";
    height: 0.5rem;
    width: 30%;
    background: $color-red;
  }

  &__app-title {
    color: $color-red;
    padding: 0 1rem;
  }

  &::after {
    content: "";
    height: 0.5rem;
    width: 70%;
    background: $color-red;
  }
}
</style>
