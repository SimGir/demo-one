let menu = [
  {
    key: 'projectManage',
    title: '项目管理',
    list: [
      {
        key: 'statistics',
        subtitle: '项目总览',
        src: '/project/statistics'
      },
      {
        key: 'list',
        subtitle: '项目列表',
        src: '/project/list'
      }
    ]
  },
  {
    key: 'customerManage',
    title: '客户管理',
    list: [
      {
        key: 'customer',
        subtitle: '客户列表',
        src: '/customer/list'
      }
    ]
  },
  {
    key: 'authority',
    title: '权限管理',
    list: [
      {
        key: 'role',
        subtitle: '角色管理',
        src: '/authority/role'
      },
      {
        key: 'user',
        subtitle: '账户管理',
        src: '/authority/user'
      }
    ]
  }
]

export default menu