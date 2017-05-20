/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import 'primer-css/build/build.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clippy from 'react-icons/lib/go/clippy';
import GitHub from 'react-icons/lib/go/mark-github';
import Clipboard from 'clipboard';
import InApp from './inapp';
import './index.css';

class App extends Component {

  componentDidMount() {
    new Clipboard('.copy'); // eslint-disable-line
  }

  render() {
    const useragent = navigator.userAgent || navigator.vendor || window.opera;
    const inapp = new InApp(useragent);
    let value = `${useragent}\n`;
    if (navigator) for (let key in navigator) value += `\n${key}: ${navigator[key]}`; // eslint-disable-line

    return (
      <div>
        <div><input id="useragent" value={value} style={{ width: '100%' }} /></div>
        <div>
          <span className="input-group-button">
            <button className="btn copy" data-clipboard-target="#useragent">
              <Clippy />&nbsp;Copy UserAgent
            </button>
            <a className="btn" target="inapp" href={`https://github.com/f2etw/detect-inapp/issues/new?title=%5BUserAgent%5D&body=${encodeURIComponent(value)}`}>
              <GitHub />&nbsp;Share
            </a>
          </span>
        </div>
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
