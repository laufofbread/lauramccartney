<template>
  <main class="gallery">

      <section class="thumbnails">
        <div class="thumbnail"
           v-for="(image, i) in images"
           :key="i">
           <router-link :to="'/gallery/item/'+ i">
             <prog-image :images="require('../img/'+ image.src +'?size=320')"
                          :alt="image.alt"></prog-image>
          </router-link>
        </div>
      </section>

  </main>
</template>

<script>
  const imageList = require('../json/galleryList.json');

  export default {
    name: 'Gallery',
    data () {
      return {
        images: imageList,
        index: null
      }
    }
  }
</script>


<style lang="scss">
  .thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(13rem,2fr));
    grid-gap: $padding-big;
  }
</style>
