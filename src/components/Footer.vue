<template>
  <footer class="footer">
    <p class="footer__copyright">
      &copy; {{ copyrightYear }} Bryan Henryon &mdash;
      <a
        href="https://bryanhenryon.fr"
        class="footer__link"
        target="_blank"
        rel="noopener"
        >www.bryanhenryon.fr</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 1.4rem;
  background: $color-white;
  padding: 0 3rem 3rem 3rem;

  @include breakpoint($screen-sm-min) {
    background: none;
    margin-top: 1rem;
  }

  &__link {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: $color-red;
    }
  }
}
</style>
