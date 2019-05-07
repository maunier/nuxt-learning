import * as woothee from "woothee";

export default ({ rep }, inject) => {
  let userAgent = '', isLowBrowser = false, parsed, isIE, version;
  
  if (typeof req !== 'undefined') {
    userAgent = req.headers['user-agent'];
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  }
  parsed = woothee.parse(userAgent);
  isIE = parsed.name === 'Internet Explorer';
  version = +parsed.version;

  if (isIE && (version <= 9)) {
    isLowBrowser = true; 
  }
  
  inject('isLowBrowser', isLowBrowser);
};