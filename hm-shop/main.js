import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {myRequest} from './utils/api'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$myRequest = myRequest;
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