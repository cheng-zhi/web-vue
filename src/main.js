import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios
import axios from 'axios'
// 导入字体图标样式表
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 安装element-ui
Vue.config.productionTip = false
Vue.use(ElementUI)

// 设置请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 配置axios
Vue.prototype.$http = axios
// 设置拦截器 只要使用axios发起请求 必须走下面代码验证
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
