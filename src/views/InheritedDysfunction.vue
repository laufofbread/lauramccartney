<template>
  <main class="gallery">
    <gallery :images="images"></gallery>
  </main>
</template>

<script>
import gallery from '../components/Gallery.vue';

export default {
  name: 'InheritedDysfunction',
  components: {
    gallery
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
