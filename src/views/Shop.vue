<template>
  <main class="shop">

      <section class="product-cards">
        <div class="product-card"
           v-for="(product, i) in products"
           :key="i">
           <router-link :to="{path: '/shop/item/'+ product.slug.current}">
             <p v-if="product.stock < 1">SOLD OUT</p>
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

const sanityQuery = `*[_type == "product"] {
  _id,
  title,
  images,
  price,
  slug
}`;

const snipcartUrl = "https://app.snipcart.com/api/products/";
const snipcartQuery = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  auth: {
    'user': 'ZDJlZDQwMjMtNjI0MC00MGZiLThhMDQtMDhhMDM5YzY5ZGYzNjM2OTM0Mjg4MjU5NTA1MDAw'
  }
};

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

        sanity.fetch(sanityQuery).then(
          products => {
            products.forEach((product) => product.stock = 1);

            this.loading = false;
            this.products = products;
          },
          error => {
            this.error = error;
          }
        ).then(response => {

          fetch(snipcartUrl, snipcartQuery)
          .then(response => {

            this.products.forEach((product) => {
              response.forEach((snipObj) => {
                if (product.slug.current == snipObj.id) {
                  product.stock = snipObj.stock
                }
              });
            });

            console.log(response);
          });

        });
      }
    }
  }
</script>


<style lang="scss">
  .product-cards {
    columns: 3 300px;
  }

  .product-card {
    break-inside: avoid;
    page-break-inside: avoid;

    margin-bottom: 1rem;
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
