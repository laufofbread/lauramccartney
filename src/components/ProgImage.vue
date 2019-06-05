<template>
  <div class="bg-image"
        :class="{ blur : isBlurred, unblur : !isBlurred }"
        :style="{ backgroundImage: 'url(' + imageSrc + ')' }"
        v-if="bgImage">
  </div>

</template>

<script>

export default {
  props: [
    "images",
    "bgImage"
  ],
  data () {
    return {
      imageSrc: this.images.placeholder,
      isBlurred: true
    }
  },
  methods: {
    loadFullImage: function() {
      this.imageSrc = this.images.src;

        this.isBlurred = false;
    }
  },
  mounted() {
    let img;
        img = new Image();
        img.onload = this.loadFullImage();
        img.src = this.imageSrc
  }
};

</script>

<style lang="scss">

.blur {
  filter: blur(8px);
}

.unblur {
  animation: 0.5s linear forwards reveal;
}

@keyframes reveal { from { filter:blur(8px); } to { filter:blur(0px); }  }
</style>
