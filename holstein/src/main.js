import Vue from 'vue'
import App from './App.vue'
// import router from './router/index'
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
import filter from './plugins/qrcode'
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));
import 'view-design/dist/styles/iview.css'
import './config/filter'


// import { base64ToFileOrBlob, saveFileToBlob, saveFileToLink } from 'web-downloadfile'; 
import getBaseImgUrl from './model/imgBaseurl'
Vue.use(getBaseImgUrl)
import getUrlParam from './model/imgBaseurl'
Vue.use(getUrlParam)

import createWebSocket from './model/imgBaseurl'
Vue.use(createWebSocket)

import {set,get,del} from '@/assets/cookie'
Vue.prototype.$cookie = {set,get,del}

import delCookie from './model/imgBaseurl'
Vue.use(delCookie)
Vue.use(VueCookie)

import anchorFunc from './model/anchor'
Vue.directive('anchor', anchorFunc);


import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

