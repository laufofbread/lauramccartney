<template>
  <section class="gallery-item">
    <slot></slot>
    <img :src="getCurrentImage" />
{{getCurrentItem}}
    <h2>{{ getCurrentItem.location }}</h2>
    <p>
      {{ getCurrentItem.materials }}
    </p>
  </section>

</template>

<script>

export default {
  props: ["items", "index"],
  computed: {
    getCurrentItem() {
      return this.items[this.index];
    },
    getCurrentImage() {
      return require('../img/'+ this.getCurrentItem.src +'');
    }
  }
};

</script>

<style lang="scss">
</style>
