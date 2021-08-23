import axios from 'axios'
// axios.defaults.baseURL = "http://192.168.2.26:8000"
// axios.defaults.baseURL = "http://192.168.2.25:8000"
// axios.defaults.baseURL = "http://api.woniuskill.com"
axios.defaults.baseURL = "http://uat_yshopapi.inroyltd.com"
// axios.defaults.baseURL = "http://api.woniuskill.com"
axios.defaults.withCredentials = true;  //前端配置这个是说明可以访问cookies

import Vue from 'vue'
const instance = axios;
Vue.prototype.$http = instance;



import store from '../store/index' 
axios.interceptors.request.use(function(config){
    store.state.isLoading = true
    return config
})
axios.interceptors.response.use(function(response){
    store.state.isLoading = false
    return response
})

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