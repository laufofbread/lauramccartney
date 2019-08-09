<template>
  <prog-image class="homepage-bg" :images="images" bg-image></prog-image>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      images: require('@/img/homepagebg.jpg?size=600'),
    }
  }
}
</script>

<style lang="scss">
  @import "@/styles/_home.scss";
</style>
