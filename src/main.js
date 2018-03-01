import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from '@/../node_modules/bootstrap-vue/dist/bootstrap-vue.esm'

import App from './app.component.vue'
import routes from '@/route'
import getStore from '@/store'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({routes: routes})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: getStore
})
