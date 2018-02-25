<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import {UserMutationTypes} from '@/store/user'
import OdinFooter from '@/components/layout/Footer/Footer.vue'

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
    }
  },

  components: {OdinFooter}
}
</script>

<style lang="scss">

  @import './scss/main.scss'

</style>
