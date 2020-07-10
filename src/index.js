import React from 'react';
import mirror, { Router} from 'mirrorx'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入mirrorx状态机
import './models';

// mirror.defaults({
//   historyMode: "hash"
// })

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
