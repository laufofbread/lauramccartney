<template>
  <div id="app">
    <nav>
      <transition name="slide-top-left" appear>
        <h1 class="home-link">
          <a href="/">Laura McCartney</a>
        </h1>
      </transition>

      <transition name="slide-top-right" appear>
        <ul class="nav">
          <li>
            <router-link to="/gallery/">Gallery</router-link>
          </li>
          <li>
            <router-link to="/about/">About</router-link>
          </li>
        </ul>
      </transition>
    </nav>

    <transition name="fade" mode="out-in">

      <router-view/>

    </transition>

    <footer>
      <transition name="slide-bottom-left" appear>
        <a class="social-link" href="https://www.instagram.com/lauramccartneyceramics/">Instagram</a>
      </transition>

      <transition name="slide-bottom-right" appear>
      <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="signup">
          <form action="https://lauramccartney.us20.list-manage.com/subscribe/post?u=808727f788695c507a499d0a7&amp;id=c3e23677a0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_808727f788695c507a499d0a7_c3e23677a0" tabindex="-1" value="">
                </div>

                <div class="mc-field-group input-wrapper">
                  <label for="mce-EMAIL">Sign up to the newsletter:</label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  <input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>

              </div>
            </form>
          </div>
        <!--End mc_embed_signup-->
      </transition>

    </footer>
  </div>
</template>

<style lang="scss">
  @import "@/styles/_menu.scss";
</style>
