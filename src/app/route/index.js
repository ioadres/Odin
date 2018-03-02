import HomeModule from '@/app/component/home'
import LoginModule from '@/app/component/login'

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
