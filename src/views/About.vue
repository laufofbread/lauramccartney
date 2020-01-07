<template>
  <main class="grid">

      <prog-image class="image1"
                  :images="require('../img/about2.jpg?size=900')"
                  alt="Vessel"></prog-image>
      <div class="para para1">
        <p>
          People are like vessels;<br>
          They have an inside and an outside.
        </p>
      </div>


      <div class="para para2">
        <p>
          They break easily and the damage tells us about their journey through the world.
        </p>
      </div>


      <prog-image class="image2"
                  :images="require('../img/about1.jpg?size=900')"
                   alt="Vessel"></prog-image>


      <prog-image class="image3"
                  :images="require('../img/about4.jpg?size=900')"
                   alt="Vessel"></prog-image>

     <div class="para para3">
       <p>
         It's possible to be made up of many cracks, held together by the space inbetween where our stories are written.
       </p>
     </div>


    <div class="last-para">
      <p>
        I am a ceramic artist living in London.<br>
        I grew up in the North East of England. In 2018 I spent 3 months working in Mashiko, Japan.
        Both places have influenced me greatly.<br>
      </p>
      <p>
        A lot of my work is about damage and what it means to be damaged.<br>
        I am also interested in transitions; Specifically, the point when we turn from one thing in to another.
      </p>
      <p>
        If you would like to contact me please email <a href="mailto:hello@lauramccartney.co.uk">hello@lauramccartney.co.uk</a>.<br>
        I look forward to hearing from you.
      </p>
    </div>

  </main>
</template>

<style lang="scss">
  $margin-sm: 3rem;
  $margin-md: 6rem;

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  img {
    @media screen and (max-width: $breakpoint-small) {
      margin: 2rem 0;
    }
  }

  @media screen and (min-width: $breakpoint-small) {
    .grid {
      display: grid;
      grid-template-columns: repeat(12,1fr);
      grid-gap: $margin-sm;

      p {
        margin: 0;
      }
    }

    .image1 {
      grid-column: span 7;
    }

    .image2 {
      grid-column: span 5;
      grid-column-end: -1;
    }

    .para1 {
      grid-column: span 4;
      align-self: end;
    }

    .para2 {
      grid-column: 4 / 8;
      text-align: right;
    }

    .para3 {
      grid-column: span 4;
    }

    .image3 {
      grid-column: span 5;
    }

    .last-para {
      grid-column: span 9;

      p {
        margin: 2rem 0;
      }
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    .grid {
      grid-gap: $margin-md;
    }

    .last-para {
      grid-column: span 7;
    }
  }

</style>
