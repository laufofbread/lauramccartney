<template>
  <main>
    <gallery :images="images"></gallery>
  </main>
</template>

<script>
import gallery from '../components/Gallery.vue';

export default {
  name: 'WoodAsh',
  components: {
    gallery
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

</style>
