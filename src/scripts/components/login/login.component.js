export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.$router.push({name: 'home'})
    }
  }
}
