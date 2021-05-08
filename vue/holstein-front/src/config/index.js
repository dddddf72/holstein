import axios from 'axios'
import Vue from 'vue'
// const instance = axios.create({
//     baseURL:'http://47.108.197.28:4000/api/'
// })
const instance = axios;
Vue.prototype.$http = instance;
axios.defaults.baseURL = "http://192.168.4.88:4000"

axios.defaults.withCredentials = true;  //前端配置这个是说明可以访问cookies