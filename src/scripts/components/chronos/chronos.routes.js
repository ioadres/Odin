const chronosComponent = resolve => require(['./chronos.component.vue'], resolve)
export default [
  {
    path: '/chronos',
    component: chronosComponent,
    name: 'chronos',
    meta: {
      isPublic: true
    }
  }
]
