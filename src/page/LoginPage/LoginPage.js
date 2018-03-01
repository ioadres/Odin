import odinApi from '@/api/ApiOdin'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.$router.push({name:'home'})
    }
  }
}
