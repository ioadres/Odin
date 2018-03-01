import HomeModule from '@/component/home'
import LoginModule from '@/component/login'

console.log(...HomeModule.routes)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...HomeModule.routes,
  ...LoginModule.routes
]

export default routes
