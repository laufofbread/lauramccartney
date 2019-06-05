<template>
  <main class="gallery" :class="{ 'gallery-item-open' : open }">

    <transition name="fade-in">
      <gallery-item :items="images" :index="index" v-if="open">
        <button class="btn close-btn" @click="open = !open">Close</button>
      </gallery-item>
    </transition>

    <transition name="fade">
      <section class="thumbnails" v-if="!open">
        <div class="thumbnail"
           v-for="(image, i) in images"
           :key="i"
           @click="toggleItem(i)">
          <prog-image :images="require('../img/'+ image.src +'?size=320')"></prog-image>
        </div>
      </section>
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

</style>
