import React from 'react';
import ReactDOM from 'react-dom';
import './public-path'
import App from './App';

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function render() {
  ReactDOM.render(<App />, document.getElementById('reactwebpack'));
}

export async function bootstrap() {
  console.log('react app bootstraped');
}


export async function mount(props) {
  console.log('props from main framework', props);
  render()
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('reactwebpack'));
}
