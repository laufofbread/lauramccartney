<template>
  <main class="gallery">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="thumbnails">
      <img v-for="(image, i) in images"
            :src="image"
            :key="i"
            @click="index = i"
            :index="i">
    </div>
  </main>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  name: 'WoodAsh',
  components: {
    'gallery': VueGallery
  },
  data:
    function() {
      return  {
        images: [
          require('../img/cracks/P7061633.jpg'),
          require('../img/cracks/P7061480.jpg'),
          require('../img/cracks/P7061484.jpg'),
          require('../img/cracks/P7061540.jpg'),
          require('../img/cracks/P7061664.jpg'),
          require('../img/cracks/P7061675.jpg'),
          require('../img/cracks/P7061669.jpg')
        ],
       index: null
     }
   }
}
</script>


<style lang="scss">
@import "@/styles/_gallery.scss";
</style>
