<template>
  <main class="product">
    <section class="product-gallery">
      <prog-image class="gallery-active" :images="getActiveImage" :alt="getCurrentProduct.description"></prog-image>

      <figure class="gallery-thumbnail"
              :class="[activeThumbnail == i ? 'active' : '']"
              v-for="(image, i) in getCurrentProduct.images"
              :key="i"
              @click="changeActiveImage(i)">
        <prog-image :images="require('../img/'+ image +'?size=200')" :alt="getCurrentProduct.description"></prog-image>
      </figure>

    </section>

    <section class="product-info">
      <h1>{{getCurrentProduct.name}}</h1>
      <p v-if="getCurrentProduct.price" class="secondary-info">£{{getCurrentProduct.price}}</p>
      <p v-if="getCurrentProduct.description">{{getCurrentProduct.description}}</p>
      <p v-if="getCurrentProduct.height && getCurrentProduct.width" class="secondary-info">Approx H {{ getCurrentProduct.height }}, W {{ getCurrentProduct.width }}</p>

      <button class="snipcart-add-item btn"
              :data-item-id="id"
              :data-item-name="getCurrentProduct.name"
              :data-item-price="getCurrentProduct.price"
              :data-item-weight="getCurrentProduct.weight"
              data-item-url="/"
              :data-item-description="getCurrentProduct.description"
              data-item-has-taxes-included="true">
              Add to cart
      </button>

        <details class="product-tandc">
          <summary>Terms &amp; Conditions</summary>
          <p>Packages go out 1-5 business days from day of purchase.
          <p>International buyer is responsible for duties, fees, or taxes incurred upon receipt.</p>
          <p>If an item reaches you in a damaged condition, I will gladly replace it with a similar item of equal value.</p>
          <p>I do not exchange merchandise that reaches you in good condition.
            I do my best to accurately depict and describe the items in my shop and I ask that you keep in mind that
            all items are made by hand and by nature have slight imperfections and variations.</p>
          <p>If you are not satisfied with your purchase, you are welcome to return it for a full refund within 7 days of purchase. Buyers are responsible for the cost of return shipping.</p>
          <p>Please let me know if you have any questions. <a href="mailto:hello@lauramccartney.co.uk">hello@lauramccartney.co.uk</a></p>
        </details>

    </section>




  </main>
</template>

<script>
  const productList = require('../json/productList.json');

  export default {
    name: 'Product',
    props: ['id'],
    data() {
      return {
        products: productList,
        activeImage: null,
        activeThumbnail: 0,
        currentUrl: this.$route.query.page.fullPath
      }
    },
    computed: {
      getCurrentProduct() {
        return this.products[this.id];
      },
      getActiveImage() {
        if(this.activeImage) return require('../img/'+ this.activeImage +'')
        else return require('../img/'+ this.getCurrentProduct.images[0] +'');
      }
    },
    methods: {
      changeActiveImage(i) {
        this.activeImage = this.getCurrentProduct.images[i];
        this.activeThumbnail = i;
      }
    }
  }
</script>


<style lang="scss">
$gap : .2rem;

.product {

  @media screen and (min-width: $breakpoint-med) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
}

.product-gallery {
  flex-basis: 67%;
  max-width: 800px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

.gallery-active {
  width: 100%;
  margin-bottom: .5rem;
}

.gallery-thumbnail {
  width: calc(20% - #{$gap});
  margin: $gap / 2;
  cursor: pointer;
}

.active {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $lighter-grey;
    opacity: .5;
    z-index: 1;
  }
}

.product-info {
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  margin-right: 3rem;

  @media screen and (min-width: $breakpoint-med) {
    margin: 0 auto 0 2rem;

    h1 {
      margin-top: 0;
    }
  }

}

.product-tandc {
  margin-top: auto;
  padding-top: 3rem;

  summary {
    cursor: pointer;
    font-size: .7rem;
    outline: none;

    &::-webkit-details-marker {
      opacity: .3;
    }
  }

  p {
    font-size: .8rem;
  }
}

.btn {
  align-self: flex-start;
}

.secondary-info {
  margin: 0;
}

.snipcart-add-item {
  margin-top: $padding-big;
}
</style>
