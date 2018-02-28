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
      console.log(this.username + '-' + this.password);
    }
  }
}
