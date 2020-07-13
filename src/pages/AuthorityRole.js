import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'

class AuthorityRole extends Component {

  componentDidMount() {
    actions.user.currentUser().then(res=>{
      console.log("currentUser res", res)
    })
  }

  render(){
    // console.log("this.props", this.props)
    return(
      <div>角色管理</div>
    )
  }
}

export default connect(state => {
  return { user: state.user }
})(AuthorityRole)