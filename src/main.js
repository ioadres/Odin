import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app/app.component.vue'
import routes from './app/route'
import getStore from './app/store'

Vue.use(VueRouter)

const router = new VueRouter({routes: routes})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: getStore
})
