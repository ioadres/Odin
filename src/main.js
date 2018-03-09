import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './scripts/app.component.vue'
import routes from './scripts/routes'
import getStore from './scripts/stores'

Vue.use(VueRouter)

const router = new VueRouter({routes: routes})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: getStore
})
