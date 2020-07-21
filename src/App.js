import React from 'react';
import { Switch, Route, Redirect, actions } from 'mirrorx';
// import { AuthorityUser } from './pages'
import menu from './lib/menu';
import routes from './lib/route';

import { Layout, Menu } from 'antd';

import './App.css';

// 引入测试数据
import './mock';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class App extends React.Component {

  // 路由切换
  changeRoute = (menu) =>{
    let path = menu.item.props.path
    actions.routing.push(path)
  }

  render(){
    return (
      <Layout className="App">
        <Header>
          header
        </Header>
        <Layout className="App-middle">
          <Sider className="App-sider">
            <Menu
              theme="dark"
              mode="inline" 
              onClick={this.changeRoute}
            >
              {(menu || []).map((subMenu)=>{
                return <SubMenu title={subMenu.title} key={subMenu.key}>
                  {(subMenu.list || []).map((item)=>{
                    return <Menu.Item key={item.key} path={item.src}>
                      {item.subtitle}
                    </Menu.Item>
                  })}
                </SubMenu>
              })}
            </Menu>
          </Sider>
          <Content className="App-content">
            <Switch>
              {/* 
                两种打开默认页面的方式
                1.<IndexRedirect to="/path" /> 打开默认页时跳转到/path路径对应的页面，路由地址会改变
                2.<IndexRoute component={Home}/>  打开默认页时打开Home页，路由地址不会改变
               
                有两种写法
                  1. 可以在<Route>标签中嵌套<Route>或<Redirect>标签
                  2. 可以在<Route>标签的render属性写回调函数返回<Route>或<Redirect>标签
                mirrorx中路由的对应写法如下
              */}
              {/* <Route exact path='/' 
                render={() => (
                  <Redirect to='/project/statistics' />  // 默认页地址改变
                  // <Route component={AuthorityUser} />  // 默认页地址不变
                )}
              /> */}
              {routes.map((item, index)=>{
                return <Route key={index} exact path={item.path} component={item.component} >
                  {/* 首页path='/'重定向 */}
                  {item.redirect && <Redirect to={item.redirect} />}
                </Route>
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
