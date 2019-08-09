<template>
  <main class="gallery">

    <transition name="fade">

      <section class="thumbnails">
        <div class="thumbnail"
           v-for="(image, i) in images"
           :key="i">
           <router-link :to="'/gallery/item/'+ i">
             <prog-image :images="require('../img/'+ image.src +'?size=320')"></prog-image>
          </router-link>
        </div>
      </section>
    </transition>

  </main>
</template>

<script>
  const imageList = require('../img/imageList.json');

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
  @import "@/styles/_gallery.scss";

</style>
