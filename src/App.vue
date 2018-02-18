<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-show="showValue" >{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World Vue.js App',
      showValue: false
    }
  }
}
</script>

<style lang="scss">

  @import './scss/main.scss'

</style>
