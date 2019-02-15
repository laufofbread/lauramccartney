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
          require('../img/ash/P7061386.jpg'),
          require('../img/ash/P7061401.jpg'),
          require('../img/ash/P7061416.jpg'),
          require('../img/ash/P7061421.jpg'),
          require('../img/ash/P7061446.jpg'),
          require('../img/ash/P7061450.jpg'),
          require('../img/ash/P7061471.jpg'),
          require('../img/ash/P7061478.jpg'),
          require('../img/ash/P7061519.jpg'),
          require('../img/ash/P7061657.jpg'),
          require('../img/ash/P7061754.jpg'),
          require('../img/ash/P7061379.jpg')
        ],
       index: null
     }
   }
}
</script>


<style lang="scss">
@import "@/styles/_gallery.scss";
</style>
