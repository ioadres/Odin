var homeComponent = resolve => require(['./home.component.vue'], resolve)

export default [
  {
    path: '/home',
    component: homeComponent,
    name: 'home',
    meta: {
      isPublic: true
    }
  }
]
