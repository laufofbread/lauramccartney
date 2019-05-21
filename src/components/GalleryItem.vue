<template>
  <div>
    <img :src="getCurrentItem" />
  </div>

</template>

<script>

export default {
  props: ["items", "index"],
  computed: {
    getCurrentItem() {
      return require('../img/'+ this.items[this.index].src +'');
    }
  }
};

</script>

<style lang="scss">

</style>
