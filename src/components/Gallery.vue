<!-- <template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="thumbnails">
      <a v-for="(image, i) in images">
        <img :src="image"
              :key="i"
              @click="index = i"
              :index="i">
      </a>
    </div>
  </div>

</template>

<script>
import VueGallery from 'vue-gallery';
export default {
  name: "gallery",
  props: ['images', index],
  components: {
    'gallery': VueGallery
  },
  index: null
}
</script>

<style lang="scss">

</style> -->
