let Mock = require('mockjs')

Mock.mock("/currentUser",{
  success: true,
  data: {
    userName: "haha",
    age: 22
  }
})