import LoginComponent from './login.component.vue'

export default [
  {
    path: '/login',
    component: LoginComponent,
    name: 'login',
    meta: {
      isPublic: true
    }
  }
]
