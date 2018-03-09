<template>
  <div id="app">
    <odin-header v-show="isAuthenticated()"></odin-header>
    <div class="body-app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import {UserMutationTypes} from './stores/user'
import HeaderComponent from './components/shared/header'

export default {
  name: 'app',
  data() {
    return {
      hola: ''
    }
  },
  methods: {
    increment(state, payload) {
      this.$store.commit(UserMutationTypes.SET_FIRST_NAME, { value: 'test' })
    },
    isAuthenticated() {
      return this.$route.name !== 'login'
    }
  },

  components: {[HeaderComponent.tag]: HeaderComponent}
}
</script>

<style lang="scss">
  @import '../styles/main.scss'
</style>
