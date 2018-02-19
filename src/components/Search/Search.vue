<template>
  <div>
    <h1 v-show="showValue" >{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World Vue.js Search',
      showValue: true
    }
  }
}
</script>

<style lang="scss">

</style>
