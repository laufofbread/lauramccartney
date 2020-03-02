<template>
  <main class="gallery">

      <section class="columns">
        <div class="gallery-item"
           v-for="(image, i) in images"
           :key="i">
             <sanity-image :image="image.image" :alt="image.description" :width="2400" responsive/>
        </div>
      </section>

  </main>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "gallery"] {
  _id,
  title,
  description,
  image
}`;

  export default {
    name: 'Gallery',
    data () {
      return {
        images: [],
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
          images => {
            this.loading = false;
            this.images = images;
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
  .columns {
    columns: 2 400px;
    column-gap: 1rem;
  }

  .gallery-item {
    margin-bottom: 1rem;
  }
</style>
