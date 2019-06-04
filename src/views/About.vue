<template>
  <main>
    <!-- <img src="../img/P7061833.jpg" class="hero-image" /> -->
    <p>
      My work is a collaboration between me and the materials. <br />
      This means local clay, natural ash glazes and embracing the uncertainty of the kiln.
    </p>
    <h5>Other projects</h5>
    <ul>
      <li>
        <a href="https://laufofbread.co.uk">A Lauf Adventure</a> - a travel photo journal
      </li>
      <li>
        <a href="https://lauramccartney.github.io/portfolio/">Development portfolio</a> - web development projects
      </li>
    </ul>
    <p>
      If you would like to contact me please email hello@lauramccartney.co.uk. I look forward to hearing from you :-)
    </p>
  </main>
</template>

<style lang="scss">
  .hero-image {
    width: 100%;
    margin-bottom: $padding-small;

    @media screen and (min-width: $breakpoint-small) {
      margin-bottom: $padding-big;
    }
  }

  .insta-icon {
    border-bottom: none;
    z-index: 3;

    img {
      @include size(1.3em, auto);
    }
  }
</style>
