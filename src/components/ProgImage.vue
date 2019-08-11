<template>
  <div class="placeholder-image"
       :class="{ 'blur' : isBlurred, 'unblur' : !isBlurred, 'bg-image' : bgImage }"
       :style="[ bgImage ? { backgroundImage: 'url(' + imageSrc + ')' } : '' ]">

    <img v-if="!bgImage"
          :src="imageSrc"
          :srcSet="images.srcSet"
          sizes="100vw"
          :alt="alt" />
  </div>
</template>

<script>

export default {
  props: {
    images: Object,
    bgImage: Boolean,
    alt: String
  },
  data () {
    return {
      imageSrc: this.images.placeholder,
      isBlurred: true
    }
  },
  methods: {
    loadFullImage() {
      this.imageSrc = this.images.src;
      this.unBlur();
    },
    unBlur() {
      this.isBlurred = false;
    }
  },
  mounted() {
    let img;
        img = new Image();
        img.onload = this.loadFullImage();
        img.src = this.imageSrc;
  }
};

</script>

<style lang="scss">
  $blur: 5px;
  @keyframes reveal { from { filter:blur($blur); } to { filter:blur(0px); }  }

  .blur {
    filter: blur($blur);
  }

  .unblur {
    animation: 0.5s linear forwards reveal;
  }

  .placeholder-image {
    img {
      display: block;
    }
  }

</style>
