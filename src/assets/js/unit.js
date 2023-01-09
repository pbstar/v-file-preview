function isMobile() {
  let m =
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
  return navigator.userAgent.match(m);
}
function strToBase64(str) {
  if (str) {
    let encode = encodeURI(str);
    let base64 = btoa(encode);
    return base64;
  }
}
function base64ToStr(base64) {
  if (base64) {
    let decode = atob(base64);
    let str = decodeURI(decode);
    return str;
  }
}
function getLocalStorage(name) {
  if (name) return base64ToStr(localStorage.getItem(name));
}
function setLocalStorage(name, value) {
  if (name) localStorage.setItem(name, strToBase64(value));
}
export default {
  isMobile,
  strToBase64,
  base64ToStr,
  getLocalStorage,
  setLocalStorage,
};
