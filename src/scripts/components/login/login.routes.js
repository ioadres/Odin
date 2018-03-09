const loginComponent = resolve => require(['./login.component.vue'], resolve)
export default [
  {
    path: '/login',
    component: loginComponent,
    name: 'login',
    meta: {
      isPublic: true
    }
  }
]
