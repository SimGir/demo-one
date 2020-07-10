import React from 'react';
import { Switch, Route, Redirect, actions } from 'mirrorx';

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
        <Layout className="App-content">
          <Sider theme="light">
            <Menu 
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
          <Content>
            <Switch>
              <Route exact path='/' 
                render={() => (
                  <Redirect to='/projects/page1' />
                )}
              />
              {routes.map((item, index)=>{
                return <Route key={index} exact path={item.path} component={item.component} />
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
