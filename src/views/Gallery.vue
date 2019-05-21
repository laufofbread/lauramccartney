<template>
  <main class="gallery" :class="{ 'gallery-item-open' : open }">

    <transition name="fade-in">

      <gallery-item :items="images" :index="index" v-if="open">
        <button class="btn close-btn" @click="open = !open">Close</button>
      </gallery-item>

    </transition>

    <transition name="fade">

      <div class="thumbnails" v-if="!open">
        <img v-for="(image, i) in images"
              :src="require('../img/'+ image.src +'')"
              :key="i"
              @click="toggleItem(i)">
      </div>

    </transition>

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
        images: imageList,
        index: null,
        open: false
      }
    },
    methods: {
      toggleItem(i) {
        this.index = i;
        this.open = !this.open;
      }
    }
  }
</script>


<style lang="scss">
  @import "@/styles/_gallery.scss";

.fade-enter-active, .fade-leave-active, .fade-in-enter-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to, .fade-in-enter {
  opacity: 0;
}
</style>
