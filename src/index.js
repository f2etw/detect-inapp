/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import 'primer-css/build/build.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clippy from 'react-icons/lib/go/clippy';
import GitHub from 'react-icons/lib/go/mark-github';
import DiffRenamed from 'react-icons/lib/go/diff-renamed';
import Clipboard from 'clipboard';
import InApp from './inapp';
import './index.css';

class App extends Component {

  state = {
    inapp: null,
    value: '',
    uri: 'twitter://',
  }

  componentWillMount() {
    const useragent = navigator.userAgent || navigator.vendor || window.opera;
    const inapp = new InApp(useragent);
    let value = `${useragent}\n`;
    if (navigator) for (let key in navigator) value += `\n${key}: ${navigator[key]}`; // eslint-disable-line
    this.setState({ inapp, value });
  }

  componentDidMount() {
    new Clipboard('.copy'); // eslint-disable-line
  }

  onUriChange = e => this.setState({ uri: e.target.value });

  onOpenClick = async () => {
    const { inapp, uri } = this.state;
    const reply = await inapp.open({ ios: { uri } });
    if (!reply) alert('Cannot Open'); // eslint-disable-line
  }

  render() {
    const { inapp, value, uri } = this.state;

    return (
      <div>
        <div className="container">
          <div>
            <textarea id="useragent" defaultValue={value} style={{ width: '100%' }} rows="10" />
          </div>
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
        </div>
        <hr />
        <div className="container">
          <div className="p-3 border position-relative">
            {inapp.os}
            <div className="border position-absolute right-0 top-0 p-1">inapp.os</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.device}
            <div className="border position-absolute right-0 top-0 p-1">inapp.device</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.browser}
            <div className="border position-absolute right-0 top-0 p-1">inapp.browser</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.isMobile() ? 'true' : 'false'}
            <div className="border position-absolute right-0 top-0 p-1">inapp.isMobile()</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.isDesktop() ? 'true' : 'false'}
            <div className="border position-absolute right-0 top-0 p-1">inapp.isDesktop()</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.isInApp() ? 'true' : 'false'}
            <div className="border position-absolute right-0 top-0 p-1">inapp.isInApp()</div>
          </div>
          <div className="p-3 border position-relative">
            {inapp.isApplePay() ? 'true' : 'false'}
            <div className="border position-absolute right-0 top-0 p-1">inapp.isApplePay()</div>
          </div>
          <div className="p-3 border position-relative">
            <div className="input-group">
              <input className="form-control" type="text" defaultValue={uri} onChange={this.onUriChange} />
              <span className="input-group-button">
                <button className="btn" onClick={this.onOpenClick}>
                  <DiffRenamed />
                </button>
              </span>
            </div>
            <div className="border position-absolute right-0 top-0 p-1">inapp.open()</div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div>
            <a className="github-button" href="https://github.com/f2etw/detect-inapp/issues" data-size="large" data-icon="octicon-issue-opened" aria-label="Issue f2etw/detect-inapp on GitHub">Issue</a>&nbsp;
            <a className="github-button" href="https://github.com/f2etw/detect-inapp/fork" data-size="large" data-icon="octicon-repo-forked" aria-label="Fork f2etw/detect-inapp on GitHub">Fork</a>&nbsp;
            <a className="github-button" href="https://github.com/f2etw/detect-inapp" data-size="large" data-icon="octicon-star" aria-label="Star f2etw/detect-inapp on GitHub">Star</a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
