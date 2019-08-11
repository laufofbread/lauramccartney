<template>
  <main class="shop">

      <section class="product-cards">
        <div class="product-card"
           v-for="(product, i) in products"
           :key="i">
           <router-link :to="'/shop/item/'+ i">
             <prog-image :images="require('../img/'+ product.images[0] +'?size=700')" :alt="product.description"></prog-image>
          </router-link>
          <h2 class="product-card-title">
            <router-link :to="'/shop/item/'+ i">
              {{ product.name }}
            </router-link>
          </h2>
          <p class="price">£{{ product.price }}</p>
        </div>
      </section>

  </main>
</template>

<script>
  const productList = require('../json/productList.json');

  export default {
    name: 'Shop',
    data () {
      return {
        products: productList,
        index: null
      }
    }
  }
</script>


<style lang="scss">
  .product-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
    grid-gap: $padding-big;
  }

  .product-card-title {
    font-size: 1.2rem;
    font-weight: normal;
    margin: .5rem 0 0 0;
  }

  .price {
    font-size: .8rem;
    padding: 0;
  }

</style>
