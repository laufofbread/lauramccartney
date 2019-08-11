<template>
  <main class="product-item">

    <transition name="fade">

      <section class="product-gallery">
        <prog-image class="gallery-active" :images="getActiveImage"></prog-image>

        <figure class="gallery-thumbnail"
                :class="[activeThumbnail == i ? 'active' : '']"
                v-for="(image, i) in getCurrentProduct.images"
                :key="i"
                @click="changeActiveImage(i)">
          <prog-image :images="require('../img/'+ image +'?size=200')"></prog-image>
        </figure>

      </section>
    </transition>

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
        activeThumbnail: 0
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

.product-item {

  @media screen and (min-width: $breakpoint-med) {
    display: flex;
    flex-direction: row-reverse;
  }
}

.product-gallery {
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.gallery-active {
  width: 100%;
  margin-bottom: .5rem;
}

.gallery-thumbnail {
  width: calc(20% - #{$gap});
  margin: $gap / 2;
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
</style>
