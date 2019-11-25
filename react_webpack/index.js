import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  ReactDOM.render(<App />, document.getElementById('reactwebpack'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('reactwebpack'));
}
