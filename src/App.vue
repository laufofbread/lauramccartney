<template>
  <div id="app">
    <nav>
      <h1 class="home-link">
        <a href="/">Laura McCartney</a>
      </h1>
      <ul class="nav">
        <li>
          <router-link to="/gallery/">Gallery</router-link>
        </li>
        <li>
          <router-link to="/about/">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
    <footer>
      <form class="signup">
        <label>Sign up to the newsletter:</label>
        <div class="input-wrapper">
          <input type="email" />
          <input type="submit" value="subscribe" />
        </div>
      </form>

      <a href="https://www.instagram.com/lauramccartneyceramics/">Instagram</a>
    </footer>
  </div>
</template>

<style lang="scss">
  @import "@/styles/_menu.scss";
</style>
