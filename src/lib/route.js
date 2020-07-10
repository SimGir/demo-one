import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import User from '../pages/User'

let routes = [
  {
    path: '/',
    redirect: '/projects/page1'
  },
  {
    path: '/projects/page1',
    component: Page1
  },
  {
    path: '/projects/page2',
    component: Page2
  },
  {
    path: '/user',
    component: User
  }
]

export default routes