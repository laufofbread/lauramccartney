import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ProgImage from './components/ProgImage.vue';
import SanityImage from './components/SanityImage.vue';

Vue.component('prog-image', ProgImage);
Vue.component('sanity-image', SanityImage);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
