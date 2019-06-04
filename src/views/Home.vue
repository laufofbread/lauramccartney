<template>
  <main class="homepage-bg" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      image: require('@/img/P7061633.jpg')
    }
  },
  methods: {
    onLoad() {
      console.log("HERE");
      console.log(this.image);
    }
  },
  mounted() {
    this.onLoad();
  }
}
</script>

<style lang="scss">
  @import "@/styles/_home.scss";
</style>
