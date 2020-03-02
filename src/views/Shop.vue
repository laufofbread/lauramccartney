<template>
  <main class="shop">

      <section class="product-cards">
        <div class="product-card"
           v-for="(product, i) in products"
           :key="i">
           <router-link :to="{path: '/shop/item/'+ product.slug.current}">

            <sanity-image :image="product.images[0]" :alt="product.description" :width="700"/>

            <h2 class="product-card-title">
                {{ product.title }}
            </h2>
            <p class="price">£{{ product.price }}</p>
          </router-link>
        </div>
      </section>

  </main>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "product"] {
  _id,
  title,
  images,
  price,
  slug
}`;

  export default {
    name: 'Shop',
    data () {
      return {
        products: [],
        loading: true
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.error = null;
        this.loading = true;

        sanity.fetch(query).then(
          products => {
            this.loading = false;
            this.products = products;
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
  .product-cards {
    columns: 3 300px;
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
