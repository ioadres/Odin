import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from '@/route'

Vue.use(VueRouter)

const router = new VueRouter({routes: routes})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
