// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueWechatTitle from 'vue-wechat-title'
import Router from './router'


Vue.config.productionTip = false
Vue.use(vueWechatTitle);
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
