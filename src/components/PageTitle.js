import React from 'react'
import { actions } from 'mirrorx'

import './pageTitle.css'

class PageTitle extends React.Component {

  // 返回上一页
  goBack = ()=>{
    actions.routing.go(-1)
  }

  render(){
    return (
      <div className="page-title">
        <span className="title">{this.props.title}</span>
        <button className="go-back" onClick={this.goBack}>返回上一页</button>
      </div>
    )
  }
}

export default PageTitle