import axios from 'axios'
import HOST from '../config'
import { message } from 'antd'

function getUrl(path) {
  if(process.env.NODE_ENV === "production"){
    return HOST + path
  }else{
    return path
  }
}


// 请求携带cookie
axios.defaults.withCredentials = true

// 拦截器--请求发送前
axios.interceptors.request.use(
  function(config){
    return config
  },
  function(error){
    return Promise.reject(error)
  }
)

// 拦截器--接收响应前
axios.interceptors.response.use(
  function(response){
    let res = response.data
    if(res && res.success){
      return res
    }else{
      if(res.resultCode === '403'){
        // 用户未登录
      }else{
        message.error((res && res.message) || '网络错误')
      }
      return Promise.reject(res)
    }
  },
  function(error){
    return Promise.reject(error)
  }
)

export default class Request {
  static get(url, params = {}){
    return axios.get(getUrl(url), params)
  }

  static post(url, params){
    
  }
}