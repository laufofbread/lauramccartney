<template>
  <main class="gallery">

    <gallery-item :items="images" :index="index" v-if="index != null"></gallery-item>

    <div class="thumbnails">
      <img v-for="(image, i) in images"
            :src="require('../img/'+ image.src +'')"
            :key="i"
            @click="index = i">
    </div>

  </main>
</template>

<script>
  import GalleryItem from '../components/GalleryItem.vue';

  const imageList = require('../img/imageList.json');

  export default {
    name: 'Gallery',
    components: {
      'gallery-item': GalleryItem
    },
    data () {
        return {
          images: imageList.all,
          index: null
       }
     }
  }
</script>


<style lang="scss">
  @import "@/styles/_gallery.scss";
</style>
