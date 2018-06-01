# Detect InApp

detect browser or in-app information for mobile

[![Build Status](https://travis-ci.org/f2etw/detect-inapp.svg?branch=master)](https://travis-ci.org/f2etw/detect-inapp)
[![codecov](https://codecov.io/gh/f2etw/detect-inapp/branch/master/graph/badge.svg)](https://codecov.io/gh/f2etw/detect-inapp)
[![npm](https://img.shields.io/npm/v/detect-inapp.svg)](https://npmjs.org/package/detect-inapp)
[![downloads](https://img.shields.io/npm/dm/detect-inapp.svg)](https://npmjs.org/package/detect-inapp)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Code Example

```
import InApp from 'detect-inapp';

const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
```

# Installation

`yarn add detect-inapp`

# API Reference

- `inapp.isMobile`

- `inapp.isDesktop`

- `inapp.isInApp`

- `inapp.browser`

`values: 'messenger', 'facebook', 'line', 'twitter', 'wechat', 'miui', 'instagram', 'chrome', 'safari', 'ie', 'firefox'`

# License

MIT License
