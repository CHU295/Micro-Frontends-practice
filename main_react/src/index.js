import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { registerMicroApps, start } from 'qiankun';

function render({ appContent, loading }) {
  const container = document.getElementById('my-root');
  ReactDOM.render(<App loading={loading} content={appContent} />, container);
}

render({ loading: true });

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  { name: 'vuecli', entry: '//localhost:9001', render, activeRule: genActiveRule('/vuecli') },
  { name: 'creatreactapp', entry: '//localhost:9002', render, activeRule: genActiveRule('/creatreactapp') },
  { name: 'ejectreact', entry: '//localhost:9003', render, activeRule: genActiveRule('/ejectreact') },
  { name: 'reactwebpack', entry: '//localhost:9004', render, activeRule: genActiveRule('/reactwebpack') },
]);

start();


serviceWorker.unregister();