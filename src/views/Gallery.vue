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

const query = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  description,
  image,
  _createdAt
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
            this.images = this.reorder(images);
          },
          error => {
            this.error = error;
          }
        );
      },
      reorder(arr) {
        const cols = 2;
        const out = [];
        let col = 0;

        while(col < cols) {
            for(let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined)
                    out.push(_val);
            }
            col++;
        }

        return out;
    }
    }
  }
</script>


<style lang="scss">
  .columns {
    column-count: 2;
  }

  .gallery-item {
    margin-bottom: 1rem;

    break-inside: avoid;
    page-break-inside: avoid;
  }
</style>
