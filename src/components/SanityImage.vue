<template>

  <div class="placeholder-image">
    <img v-if="!responsive" :src="imageUrl" :alt="alt">

    <img v-if="responsive"
          :src="imageUrl"
          :alt="alt"
          :srcset="getSrcSet"
          sizes="(min-width: 900px) 50vw, 100vw">
  </div>

</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      default: 900,
      type: Number
    },
    responsive: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    getUrl(width = 900) {
      return builder.image(this.image).width(width)
    }
  },
  computed: {
    imageUrl: function() {
      return this.getUrl(this.width)
    },
    getSrcSet: function() {
      return this.getUrl(500) +' 500w, '+ this.getUrl(900) +' 900w,'+ this.getUrl(1400) +' 1400w'
    }
  }
}
</script>
