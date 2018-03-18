import Vue from 'vue'
import VueRouter from 'vue-router';
import Vue2TouchEvents from 'vue2-touch-events'

import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Vue2TouchEvents)


const router = new VueRouter({
  mode: 'history', //removes #
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
