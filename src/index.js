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
        <hr />
        <div>
          <a className="github-button" href="https://github.com/f2etw/detect-inapp/issues" data-size="large" data-icon="octicon-issue-opened" aria-label="Issue f2etw/detect-inapp on GitHub">Issue</a>&nbsp;
          <a className="github-button" href="https://github.com/f2etw/detect-inapp/fork" data-size="large" data-icon="octicon-repo-forked" aria-label="Fork f2etw/detect-inapp on GitHub">Fork</a>&nbsp;
          <a className="github-button" href="https://github.com/f2etw/detect-inapp" data-size="large" data-icon="octicon-star" aria-label="Star f2etw/detect-inapp on GitHub">Star</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
