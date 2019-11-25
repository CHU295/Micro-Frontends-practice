import React from 'react';
import logo from './11.png';

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div style={{ color: 'green' }}>reactwebpack</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
