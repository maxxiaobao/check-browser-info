  // matching browser rules
  var BrowserMap = [
    {
      regex: /opr/i,
      key: 'opr',
      matched: 'Opera'
    },
    {
      regex: /compatible/i,
      key: 'compatible',
      matched: 'IE'
    },
    {
      regex: /msie/i,
      key: 'msies',
      matched: 'IE'
    },
    {
      regex: /edge/i,
      key: 'edge',
      matched: 'Edge'
    },
    {
      regex: /ucbrowser/i,
      key: 'ucbrowser',
      matched: 'UC'
    },
    {
      regex: /firefox/i,
      key: 'firefox',
      matched: 'Firefox'
    },
    {
      regex: /micromessenger/i,
      key: "micromessenger",
      matched: 'Wechat'
    },
    {
      regex: /qqbrowser/i,
      key: 'qqbrowser',
      matched: 'QQbrowser'
    },
    {
      regex: /chrome/i,
      key: 'chrome',
      matched: 'Chrome'
    },
    {
      regex: /safari/i,
      key: 'safari',
      matched: 'Safari'
    },
  ]
  // matching platform rules
  var platforms = [
    {
      regex: /windows phone/,
      matched: 'Windows Phone'
    },
    {
      regex: /win/,
      matched: 'Windows'
    },
    {
      regex: /android/,
      matched: 'Android'
    },
    {
      regex: /linux/,
      matched: 'Linux'
    },
    {
      regex: /X11/,
      matched: 'UNIX'
    },
    {
      regex: /iphone/,
      matched: 'iphone'
    },
    {
      regex: /ipad/,
      matched: 'ipad'
    },
    {
      regex: /mac/,
      matched: 'Mac'
    }
  ]
  // Browser basic info，mation
  var userAgent = navigator.userAgent.toLowerCase();

  // match Browser name
  function getBrowserName() {
    var name = "";
    var key = "";
    for(var i in BrowserMap){
      if(name == "" && userAgent.match(BrowserMap[i].regex)){
        name = BrowserMap[i].matched;
        key = BrowserMap[i].key;
      }
    }
    if(name == "" && (!!window.ActiveXObject || "ActiveXObject" in window)){
      name = "IE";
    }
    return  { name: name, key: key}
  }
  // match Browser version
  function getBrowserVersion(){
    var Browser = getBrowserName();
    var Version = ""
    switch (Browser.name) {
      case "IE":
        if (!window.XMLHttpRequest) {
          Version = "6";
        }else if (!window.document.querySelector){
          Version = "7";
        }else if (!window.document.addEventListener) {
          Version = "8";
        }else if (!window.atob) {
          Version = "9";
        } else if (!document.createElement ("input").dataset) {
          Version = "10"; 
        }else if(!!window.ActiveXObject || "ActiveXObject" in window){
          Version = "11";
        }
        break;
      default:
        Version = userAgent.split(Browser.key + "/")[1].split(" ")[0];
        break;
    }
    return Version;
  }
  // match platform ['android','iphone','pc']
  function getPlatform(){
    var Platform = "";
    for(var j in platforms){
      if( Platform == "" && userAgent.match(platforms[j].regex)){
        Platform = platforms[j].matched;
      }
    }
   return Platform == "" ? "unknown" : Platform;
  }

  var BrowserInfo = function(){
    return {
      name: getBrowserName().name,
      version: getBrowserVersion(),
      platform: getPlatform()
    }
  }

  module.exports = BrowserInfo;