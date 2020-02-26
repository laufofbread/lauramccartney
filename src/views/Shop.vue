<template>
  <main class="shop">

      <section class="product-cards">
        <div class="product-card"
           v-for="(product, i) in products"
           :key="i">
           <router-link :to="{path: '/shop/item/'+ product.slug.current, params: {id: product._id}}">
             <img :src="imageUrlFor(product.images[0]).ignoreImageParams().width(700)" alt="" />
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
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "product"] {
  _id,
  title,
  name,
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
      imageUrlFor(source) {
        return imageBuilder.image(source);
      },
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
