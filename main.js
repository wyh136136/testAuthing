import App from './App'

// #ifndef VUE3
// 代码示例：https://github.com/Authing/Guard/blob/master/examples/guard-vue2/normal/src/main.js
// main.js
import Vue from "vue";
import { GuardPlugin } from "@authing/guard-vue2";
// import "@authing/guard-vue2/dist/esm/guard.min.css";  在app.vue的style里引用了

Vue.use(GuardPlugin, {
  appId: "63f58ec5ce229f6afccefd89",

  // 如果你使用的是私有化部署的 Authing 服务，需要传入自定义 host，如:
  host: 'https://ceshikl.authing.cn',

  // 默认情况下，会使用你在 Authing 控制台中配置的第一个回调地址为此次认证使用的回调地址。
  // 如果你配置了多个回调地址，也可以手动指定（此地址也需要加入到应用的「登录回调 URL」中）：
  // redirectUri: "YOUR_REDIRECT_URI"
});

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif