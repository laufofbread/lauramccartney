<template>

  <section class="gallery-item">
    <prog-image :images="getCurrentImage"></prog-image>

    <div class="gallery-nav">
      <router-link class="prev-btn btn"
                   :to="'/gallery/item/'+ getPrev"> &#60; </router-link>

        <aside class="gallery-info">

          <p>{{ getCurrentItem.location }}</p>
          <p>
            {{ getCurrentItem.materials }}
          </p>

        </aside>

      <router-link class="next-btn btn"
                   :to="'/gallery/item/'+ getNext"> &#62; </router-link>
    </div>

  </section>

</template>

<script>

const imageList = require('../img/imageList.json');

export default {
  props: ['id'],
  data() {
    return {
      items: imageList,
    }
  },
  computed: {
    getCurrentItem() {
      return this.items[this.id];
    },
    getCurrentImage() {
      return require('../img/'+ this.getCurrentItem.src +'');
    },
    getPrev() {
      return this.id != 0 ? parseInt(this.id) - 1 : this.items.length - 1;
    },
    getNext() {
      return this.id != this.items.length - 1 ? parseInt(this.id) + 1 : 0;
    }
  }
};

</script>

<style lang="scss">
.gallery-item {

  @media screen and (min-width: $breakpoint-med) {
    display: flex;
    flex-direction: row-reverse;
  }

  img {
    width: 100%;
    max-width: 900px;
  }
}

.gallery-nav {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;
  max-width: 22rem;

  @media screen and (min-width: $breakpoint-med) {
    margin-right: auto;
  }
}

.gallery-info {
  margin-right: auto;

  h2 {
    margin: 0;
  }
}

.prev-btn, .next-btn {
  font-size: 2rem;
}

.prev-btn {
  margin-right: 1rem;
}

.next-btn {
  margin-left: 1rem;
}

</style>
