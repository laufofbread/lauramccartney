<template>
  <div id="app">
    <transition name="slide-top" appear>
      <nav class="main-nav">
          <h1 class="home-link">
            <a href="/">Laura M<span>c</span>Cartney</a>
          </h1>

          <ul class="nav">
            <li>
              <router-link to="/gallery/">Gallery</router-link>
            </li>
            <li>
              <router-link to="/about/">About</router-link>
            </li>

            <!-- <li>
              <router-link to="/shop/">Shop
                <button v-show="count > 0" class="snipcart-checkout cart-count">
                  <span>{{count}}</span>
                </button>
              </router-link>
            </li> -->
          </ul>
      </nav>
    </transition>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  <transition name="slide-bottom" appear>
    <footer class="footer">
        <a class="social-link" target="_blank" href="https://www.instagram.com/lauramccartneyceramics/">Instagram</a>

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

    </footer>
  </transition>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showCount: false,
        count: 0
      }
    },
    mounted: function() {
      document.addEventListener('snipcart.ready', () => {
        var count = window.Snipcart.store.getState().cart.items.length;
        this.updateItemTotal(count);

        window.Snipcart.store.subscribe(() => {
            var count = window.Snipcart.store.getState().cart.items.length;
            this.updateItemTotal(count);
        });
      });
    },
    methods: {
      updateItemTotal(qty) {
        this.count = qty;
      }
    }
  }
</script>

<style lang="scss">
  @import "@/styles/_normalize.scss";
  @import "@/styles/_main.scss";
  @import "@/styles/_animations.scss";
  @import "@/styles/_menu.scss";
</style>
