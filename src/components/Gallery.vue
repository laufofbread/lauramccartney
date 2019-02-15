<template>
  <div class="thumbnails">
    <img v-for="(image, i) in images"
          :src="image"
          :key="i"
          @click="index = i"
          :index="i">
  </div>
</template>

<script>
export default {
  name: "gallery",
  props: ['images']
}
</script>

<style lang="scss">
.thumbnails {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(14rem,1fr));
  grid-gap: 1rem;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
