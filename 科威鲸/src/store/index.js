import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

//获取默认城市
// function getDefaultName(){
//   var defaultName;//为空
//   if(localStorage.getItem("username")){
//     defaultName = localStorage.getItem("username")
//   }else{
//     defaultName = "abc"
//   }
//   return defaultName//获取缓存
// }

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  state: {
    isLoading:false,
    price:"",
    list:[],
    time:"",
    username:"",
    address:"",
    //注册
    userReName:"",
    praReName:"",
    // name:getDefaultName()
  },
  mutations: {
    //登陆部分
    setState(state,value){
      state.price = value.total
      state.list = value.checkedGoods
      state.time = value.createTime
      state.userType = value.userType
    },
    setUserType(state,userType){
      // console.log(state)
        state.userType = userType
    },
    setUserName(state,name){
      // console.log(state)
        state.username = name
    },
    setAddress(state,value){
        state.address = value
    },
    //用户注册
    setUserReName(state,name){
        state.userReName = name
    },
    //商家注册
    setpraReName(state,name){
        state.praReName = name
    },
    changeStateName(state,val){
      console.log(state)
      console.log(val)
      localStorage.setItem("username",val)
      state.name = val
      //查看
    }
  },
  actions: {
    changeName(ctx,val){
      ctx.commit("changeStateName",val)
    }
  },
  modules,
  getters
})