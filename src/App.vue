<template>
  <div id="app">
    <img src="./assets/logo.png">

    {{hola}}
    
    <odin-footer></odin-footer>
    <router-view></router-view>
  </div>
</template>

<script>

import OdinFooter from '@/components/layout/Footer/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      hola: 'APP VUEJS'
    }
  },
  components: {OdinFooter}
}
</script>

<style lang="scss">

  @import './scss/main.scss'

</style>
