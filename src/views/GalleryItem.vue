<template>

  <section class="gallery-item">
    <prog-image :images="getCurrentImage" :alt="getCurrentItem.alt"></prog-image>

    <div class="gallery-nav">
        <aside class="gallery-info">

          <p class="primary-info">
            {{ getCurrentItem.materials }}
          </p>
          <p v-if="getCurrentItem.height && getCurrentItem.width" class="secondary-info">H {{ getCurrentItem.height }}, W {{ getCurrentItem.width }}</p>
          <p class="secondary-info">{{ getCurrentItem.location }}</p>

          <nav class="pag-btns">
            <router-link class="prev-btn"
                         :to="'/gallery/item/'+ getPrev">Prev </router-link>
                         /
             <router-link class="next-btn"
                          :to="'/gallery/item/'+ getNext"> Next</router-link>
          </nav>
        </aside>
    </div>

  </section>

</template>

<script>

const imageList = require('../json/galleryList.json');

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

.primary-info {
  font-size: 1.1rem;
}

.secondary-info {
  font-size: .9rem;
  margin: 0;
}

.prev-btn {
  padding-right: .5rem;
}

.next-btn {
  padding-left: .5rem;
}

.pag-btns {
  margin-top: 1rem;
}

</style>
