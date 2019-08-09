<template>
  <main class="shop">

    <transition name="fade">

      <section class="product-cards">
        <div class="product-card"
           v-for="(product, i) in products"
           :key="i">
           <router-link :to="'/product/item/'+ i">
             <prog-image :images="require('../img/'+ product.images[0] +'?size=320')"></prog-image>
          </router-link>
          <router-link :to="'/product/item/'+ i">
            {{ product.name }}
          </router-link>
          <p class="price">£{{ product.price }}</p>
        </div>
      </section>
    </transition>

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
  @import "@/styles/_gallery.scss";

</style>
