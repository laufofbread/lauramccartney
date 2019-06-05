<template>
  <prog-image class="homepage-bg" :images="images" bg-image="true"></prog-image>
</template>

<script>
import ProgImage from "../components/ProgImage.vue";

export default {
  name: 'Home',
  components: {
    'prog-image': ProgImage
  },
  data() {
    return {
      images: require('@/img/P7061633.jpg'),
    }
  }
}
</script>

<style lang="scss">
  @import "@/styles/_home.scss";
</style>
