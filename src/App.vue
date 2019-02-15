<template>
  <div id="app">
    <nav>
      <h1 class="home-link">
        <a href="/">Laura McCartney</a>
      </h1>
      <ul class="nav">
        <li>
          <router-link to="/inherited-dysfunction/">Inherited dysfunction</router-link>
        </li>
        <li>
          <router-link to="/wood-ash/">Wood ash</router-link>
        </li>
        <li>
          <router-link to="/about/">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
    <a class="insta-icon" href="https://www.instagram.com/laufofbread/">
      <img src="./img/insta-icon.svg" />
    </a>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:500');
  @import "@/styles/_menu.scss";
</style>
