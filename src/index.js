import React from 'react';
import mirror, { Router} from 'mirrorx'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入mirrorx状态机
import './models';

/* 
  路由模式改为hash模式，地址上带有#
  默认是history模式，项目打包后路由跳转不了
*/
mirror.defaults({
  historyMode: "hash"
})

mirror.render(
  <Router>
    {/* 严格模式 */}
    {/* <React.StrictMode>  */}
      <App />
    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
