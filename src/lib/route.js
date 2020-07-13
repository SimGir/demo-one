import ProjectStatistics from '../pages/ProjectStatistics'
import ProjectList from '../pages/ProjectList'
import CustomerList from '../pages/CustomerList'
import AuthorityUser from '../pages/AuthorityUser'
import AuthorityRole from '../pages/AuthorityRole'

let routes = [
  {
    path: '/',
    redirect: '/project/statistics'
  },
  {
    path: '/project/statistics',
    component: ProjectStatistics
  },
  {
    path: '/project/list',
    component: ProjectList
  },
  {
    path: '/customer/list',
    component: CustomerList
  },
  {
    path: '/authority/user',
    component: AuthorityUser
  },
  {
    path: '/authority/role',
    component: AuthorityRole
  }
]

export default routes