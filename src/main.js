import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ProgImage from './components/ProgImage.vue';

Vue.component('prog-image', ProgImage);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
