import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

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
  },
  mutations: {
    setState(state,value){
      state.price = value.total
      state.list = value.checkedGoods
      state.time = value.createTime
      state.userType = value.userType
    },
    setUserType(state,userType){
        state.userType = userType
    },
    setUserName(state,name){
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
  // modules,
  // getters
})