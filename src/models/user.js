import mirror, { actions } from 'mirrorx'
import api from '../services/api'

// 调用MirrorX，根据模型创建状态机
mirror.model({
  name: "user",  // 仓库名称
  initialState: {  // 初始化状态机里的初始状态
    loading: {
      userInfo: false
    },
    userInfo: {}
  },
  reducers: {  // 状态机处理函数
    setLoading(state, loading) {
      let newState = { ...state }
      newState.loading = { ...newState.loading, ...loading}
      return newState
    },
    setUserInfo(state, userInfo) {
      return { ...state, userInfo }
    }
  },
  effects: {  // 动作处理函数
    currentUser(params, state){
      return new Promise((resolve, reject)=>{
        actions.user.setLoading({userInfo: true})
        api.currentUser(params)
        .then(res=>{
          actions.user.setUserInfo(res.data)
          actions.user.setLoading({userInfo: false})
          resolve(res)
        }).catch((err)=>{
          actions.user.setLoading({userInfo: false})
          reject(err)
        })
      }) 
    }
  }
})