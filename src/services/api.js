import Request from './request'

export default {
  // 当前用户信息
  currentUser(params){
    return Request.get('/currentUser', params)
  }
  
}