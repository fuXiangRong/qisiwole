//可能会问为什么不用 export default , 因为这个js 服务器端也要运行, 服务器端node版本不是8 ,es6语法部分不支持
//这两个方法就是导不出
module.exports = {
  setLocalStorage: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setSessionStorage: function(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
  },
}
