import LoginPage from '@/page/LoginPage'
import PageNames from '@/data/enum/PageNames'
import PageRoutes from '@/data/enum/PageRoutes'

const routes = [
  {
    path: PageRoutes.Login,
    component: LoginPage,
    name: PageNames.Login
  }
]

export default routes
