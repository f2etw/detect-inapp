import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InApp from './inapp';
import './index.css';

class App extends Component {
  render() {
    const useragent = navigator.userAgent || navigator.vendor || window.opera;
    const inapp = new InApp(useragent);
    return (
      <div>
        <div>UserAgent: {useragent}</div>
        <hr />
        <div>os: {inapp.os}</div>
        <div>browser: {inapp.browser}</div>
        <div>isMobile(): {inapp.isMobile() ? 'true' : 'false'}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
