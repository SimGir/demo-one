import Request from './request'

export default {
  currentUser(params){
    return Request.get('/currentUser', params)
  }
}