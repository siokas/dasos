import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'
import VueCarousel from 'vue-carousel'
import VueFire from 'vuefire'
import './firebase'
import VueRouter from 'vue-router'
import { routes } from './router'

Vue.use(VueRouter)
Vue.use(VueCarousel);
Vue.use(VueFire);

window.axios = axios;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

const router = new VueRouter({ routes, mode:'history' })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
