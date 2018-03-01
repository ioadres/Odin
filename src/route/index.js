import LoginPage from '@/page/LoginPage'
import HomePage from '@/page/HomePage'

import PageNames from '@/data/enum/PageNames'
import PageRoutes from '@/data/enum/PageRoutes'

const routes = [
  {
    path: PageRoutes.Login,
    component: LoginPage,
    name: PageNames.Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: PageRoutes.Home,
    component: HomePage,
    name: PageNames.Home,
    meta: {
      isPublic: true
    }
  }
]

export default routes
