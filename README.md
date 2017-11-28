# 气死我了,为什么导不出方法 - -

> src 下面有个tool.js
> App.vue 里面有引用 然后报错了

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 可能会问为什么不用 export default , 因为这个js 服务器端也要运行, 服务器端node版本不是8 ,es6语法部分不支持
# 这两个方法就是导不出
# tool.js 内容
module.exports = {
  setLocalStorage: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setSessionStorage: function(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
  },
}
