<template>
  <main v-if="product" class="product">
    <section class="product-gallery">

      <sanity-image class="gallery-active"
                    :image="activeImage ? activeImage : product.images[0]"
                    :alt="product.description"
                    :width="900"/>

      <figure class="gallery-thumbnail"
              :class="[activeThumbnail == i ? 'active' : '']"
              v-for="(image, i) in product.images"
              :key="i"
              @click="changeActiveImage(i)">
        <sanity-image :image="image" :alt="product.description" :width="200"/>
      </figure>

    </section>

    <section class="product-info">
      <h1>{{product.title}}</h1>
      <p v-if="product.price">£{{product.price}}</p>
      <p v-if="product.description">{{product.description}}</p>
      <p v-if="product.height && product.width" class="secondary-info">
        Dimensions: H {{ product.height }}cm,
        W {{ product.width }}cm
      </p>

      <button class="snipcart-add-item btn"
              :data-item-id="product._id"
              :data-item-name="product.title"
              :data-item-price="product.price"
              data-item-url="https://www.lauramccartney.co.uk/.netlify/functions/snipcart_crawler"
              :data-item-weight="product.weight"
              :data-item-description="product.description"
              :data-item-image="urlFor(product.images[0]).width(200).url()"
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
import sanity from "../sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanity);

const query = `*[_type == "product" && slug.current == $id] {
  _id,
  title,
  name,
  images,
  price,
  description,
  weight,
  height,
  width
}[0]`;

  export default {
    name: 'Product',
    props: ['id'],
    data() {
      return {
        product: null,
        activeImage: null,
        activeThumbnail: 0
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      urlFor(source) {
        return builder.image(source)
      },
      changeActiveImage(i) {
        this.activeImage = this.product.images[i];
        this.activeThumbnail = i;
      },
      fetchData() {
        this.error = null;
        this.loading = true;

        sanity.fetch(query, { id: this.id }).then(

          product => {

            this.loading = false;
            this.product = product;
          },
          error => {
            this.error = error;
          }
        );
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
      margin: 0 0 .5rem 0;
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
  font-size: .8rem;
}

.snipcart-add-item {
  margin-top: $padding-big;
}
</style>
