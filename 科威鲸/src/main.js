import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/routers'

import store from './store'

// import './config/plugin'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import VueCookie from 'vue-cookie'
import './plugins/element'
import './plugins/view'
// import './plugins/quill'
import './plugins/qrcode'
import 'view-design/dist/styles/iview.css'
import './config/filter'
import getBaseImgUrl from './model/imgBaseurl'
Vue.use(getBaseImgUrl)
import getUrlParam from './model/imgBaseurl'
Vue.use(getUrlParam)
import delCookie from './model/imgBaseurl'
Vue.use(delCookie)
Vue.use(VueCookie)

import anchorFunc from './model/anchor'
Vue.directive('anchor', anchorFunc);


//main.js
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

