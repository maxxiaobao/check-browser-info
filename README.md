# check-browser-info
check browser basic info.

## BrowserInfo {name; version; platform}

 ### name
 Support mainstream browser `['Chrome', 'Safari', 'IE', 'Opera', 'Firefox', 'Edge', 'UC', 'Wechat', 'QQbroser']`
 ### version
 version detail (eg: `62.0.3202.94`), and support `IE6, 7, 8, 9, 10, 11`
 ### platform
 Most platforms are included `['Windows Phone', 'Windows', 'Android', 'Linux', 'UNIX', 'iphone', 'ipad', 'Mac']`

## Usage

#### Install

```sh
$ npm install --save-dev check-browser-info
```

#### Example

```js
var BrowserInfo = require('check-browser-info');

BrowserInfo(); 
// BrowserInfo {name: 'Chrome', version: '62.0.3202.94', platform: Mac }
```

