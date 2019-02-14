<template>
  <main class="gallery">
    <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
  </main>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: 'InheritedDysfunction',
  components: {
    VueGallerySlideshow
  },
  data:
    function() {
      return  {
        images: [
          require('../img/ash/P7061386.jpg'),
          require('../img/ash/P7061401.jpg')
        ],
       index: null
     }
   }
}
</script>


<style lang="scss">

</style>
