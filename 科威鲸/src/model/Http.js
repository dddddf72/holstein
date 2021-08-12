import axios from 'axios'
// axios.defaults.baseURL = "http://192.168.2.26:8080"
// axios.defaults.baseURL = "http://192.168.2.25:8000"
axios.defaults.baseURL = "http://yshopapi.inroyltd.com"
// Vue.prototype.$http = axios
axios.defaults.withCredentials = true;  //前端配置这个是说明可以访问cookies

import Vue from 'vue'
const instance = axios;
Vue.prototype.$http = instance;



//添加axios请求拦截器
import store from '../store/index' 
axios.interceptors.request.use(function(config){
    //在发送请求之前做些什么
    // console.log("http-req")
    store.state.isLoading = true
    return config
})
//添加响应拦截器
axios.interceptors.response.use(function(response){
    //在发送请求之前做些什么
    // console.log("http-response")
    store.state.isLoading = false
    return response
})
//

class Http{
    static request ({url,method = "get",data={},params}){
        return axios({
            url,
            method,
            data,
            params
        })
    }
}
export default Http

export function getHistoryMovie(){
    return instance({
        method:"post",
        url:'/api/uploadImage',
        data:formData,
    })
}