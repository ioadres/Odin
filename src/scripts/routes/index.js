import HomeModule from '@/scripts/components/home'
import ChronosModule from '@/scripts/components/chronos'
import LoginModule from '@/scripts/components/login'

console.log(...HomeModule.routes)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...HomeModule.routes,
  ...LoginModule.routes,
  ...ChronosModule.routes
]

export default routes
