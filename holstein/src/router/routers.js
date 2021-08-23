import Vue from 'vue'
import Router from 'vue-router'
import BusinessInf from '../views/Regist/01BusinessInf.vue'
import userRegist from '../views/Regist/UserRegist.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  {
    path: '/fisrtNav',
    component: () => import('../components/Nav/firstNav.vue')
  },
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: (resolve) => require(['@/views/features/redirect'], resolve)
  //     }
  //   ]
  // },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue'),
    redirect:'/home',
    children:[
      
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/scan',
        name: 'scan',
        // component: () => import('../layout/index.vue'),
        component: () => import('../layout/components/Sidebar/Scan.vue'),
      },
    ]
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录', noCache: true },
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/bind',
    name: 'bind',
    meta: { title: '绑定', noCache: true },
    component: () => import('../views/Login/bind.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('../views/Forgot/Forgot.vue'),
  },
  //重置密码
  {
    path:'/reset',
    name:'ResetPwd',
    component: () => import('../views/Reset/Reset.vue'),
  },
  //账号注册
  {
    path:'/userRegist',
    name:'userRegist',
    // component: () => import('../views/Regist/UserRegist.vue')
    component:userRegist,
    /* 异步路由相关的信息是打印不到的，从city界面可以看到，回到home就看不到了 */
  },
  
  //商家注册填写信息
  {
    path:'/01BusinessInf',
    name:'01BusinessInf',
    // component: () => import('../views/Regist/01BusinessInf.vue'),
    component:BusinessInf,
    meta:{
      isNav:true
    },
  },
  {
    path:'/02skillExp',
    name:'02skillExp',
    component: () => import('../views/Regist/02skillExp.vue'),
  },
  {
    path:'/03identityAuth',
    name:'03identityAuth',
    component: () => import('../views/Regist/03identityAuth.vue'),
  },
  {
    path:'/04deposit',
    name:'04deposit',
    component: () => import('../views/Regist/04deposit.vue'),
  },
  {
    path:'/05RegistDone',
    name:'05RegistDone',
    component: () => import('../views/Regist/05RegistDone.vue'),
  },
  
  //新增商品
  {
    path: '/01BasicInf',
    name: '01BasicInf',
    component: () => import('../views/GoodsAdd/01BasicInf.vue'),
  },
  //编辑商品
  {
    path: '/goodsEdit',
    name: 'goodsEdit',
    component: () => import('../views/GoodsAdd/goodsEdit.vue'),
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/userCenter',
    component: () => import('../views/Center/User.vue'),
    // component :Films,
    children:[
      {
        path:"/userCenter",
        name:'userCenter',
        component:()=>import('../views/Center/userCenter.vue'),
      },
      {
        path:"/myOrder",
        name:'myOrder',
        component:()=>import('../views/Center/CenterTransaction/MyOrder.vue'),
      },
      {
        path:"/myComments",
        name:'myComments',
        component:()=>import('../views/Center/CenterTransaction/MyComments.vue'),
      },
      {
        path:"/myContract",
        name:'myContract',
        component:()=>import('../views/Center/CenterTransaction/MyContract.vue'),
      },
      {
        path:"/myInvoice",
        name:'myInvoice',
        component:()=>import('../views/Center/CenterTransaction/MyInvoice.vue'),
      }, 
      {
        path: '/MessageCenter',
        name: 'MessageCenter',
        component: () => import('@/views/Center/CenterProb/MessageCenter.vue'),
    },
      {
        path:"/Myfeedback",
        name:'Myfeedback',
        component:()=>import('../views/Center/CenterProb/Myfeedback.vue'),
      }, 
      {
        path:"/Helpcenter",
        name:'Helpcenter',
        component:()=>import('../views/Center/CenterProb/Helpcenter.vue'),
      }, 
      {
        path:"/MyCollect",
        name:'MyCollect',
        component:()=>import('../views/Center/CenterMyFocus/MyCollect.vue'),
      },
      {
        path:"/MyFootprint",
        name:'MyFootprint',
        component:()=>import('../views/Center/CenterMyFocus/MyFootprint.vue'),
      },
      {
        path:"/ModifyInf",
        name:'ModifyInf',
        component:()=>import('../views/Center/CenterSecurity/ModifyInf.vue'),
      },
      {
        path:"/Realauth",
        name:'Realauth',
        component:()=>import('../views/Center/CenterSecurity/Realauth.vue'),
      },
    ]
  },
  {
    path: '/userOrder',
    name: 'userOrder',
    redirect: '/userOrderCenter',
    component: () => import('../views/Center/UserOrder.vue'),
    children:[
      {
        path: '/userOrderCenter',
        name: 'userOrderCenter',
        component: () => import('../views/Center/userOrderCenter.vue'),
      },
      {
        //商品收藏
        path: '/serviceCollect',
        name: 'serviceCollect',
        component: () => import('../views/Center/merchant/ServiceCollect.vue'),
      },
      {
        //管理商品
        path: '/serviceProduct',
        name: 'serviceProduct',
        component: () => import('../views/Center/merchant/ServiceProduct.vue'),
      },
      {
        //浏览记录
        path: '/serviceBrowse',
        name: 'serviceBrowse',
        component: () => import('../views/Center/merchant/ServiceBrowse.vue'),
      },
      {
        //订单列表
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/Center/merchant/OrderList.vue'),
      },
      {
        //评论管理
        path: '/serviceEvaluate',
        name: 'serviceEvaluate',
        component: () => import('../views/Center/merchant/ServiceEvaluate.vue'),
      },
      {
        //竞标管理
        path: '/demandBid',
        name: 'demandBid',
        component: () => import('../views/Center/merchant/DemandBid.vue'),
      },
      {
        //个人设置
        path: '/serverModInf',
        name: 'serverModInf',
        component: () => import('../views/Center/merchant/serverModInf.vue'),
      },
      {
        //个人设置
        path: '/serverRealAuth',
        name: 'serverRealAuth',
        component: () => import('../views/Center/merchant/serverRealauth.vue'),
      },
      {
        //缴纳保证金
        path: '/bindAmount',
        name: 'bindAmount',
        component: () => import('../views/Center/merchant/bindAmount.vue'),
      },
      {
        //修改技能专长
        path: '/killexp',
        name: 'killexp',
        component: () => import('../views/Center/merchant/killexp.vue'),
      },
      
      {
        //消息管理
        path: '/messageList',
        name: 'messageList',
        component: () => import('../views/Center/merchant/MessageList.vue'),
    },
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/product/Detail.vue'),
  },
  
  //自定义您的包裹balabala
  {
    path: '/01orderDetail',
    name: '01orderDetail',
    component: () => import('../views/Orders/01OrderDetail.vue'),
  },
  {
    path: '/02fundTrusteeShip',
    name: '02fundTrusteeShip',
    component: () => import('../views/Orders/02FundTrusteeship.vue'),
  },
  {
    path: '/03submReq',
    name: '03submReq',
    component: () => import('../views/Orders/03SubmReq.vue'),
  },
  //需求详情 竞标服务商
  {
    path: '/biddingSerProvide',
    name: 'biddingSerProvide',
    component: () => import('../views/ReleaseReq/BiddingSerProvider.vue'),
  },
  //需求详情 资金情况
  {
    path: '/fundSituation',
    name: 'fundSituation',
    component: () => import('../views/ReleaseReq/FundSituation.vue'),
  },
  {
    path: '/creorder',
    name: 'creorder',
    component: () => import('../views/product/creorder.vue'),
  },


  
{
    path: '/authManage',
    name: 'authManage',
    component: () =>
        import('@/views/authManage.vue')
},
{
    path: '/roleManage',
    name: 'roleManage',
    component: () =>
        import('@/views/roleManage.vue')
},

  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart/Cart.vue')
  },
  {
    path: '/cart1',
    name: 'cart1',
    component: () => import('../views/Cart/Cart1.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Cart/Editor.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../components/Dialog/dialog.vue')
  },
  
]

// var vm = new Vue();
// router.beforeEach((to,from,next)=>{
//   console.log(document.cookie)  //loginAuth :true,也可以在f12控制台里敲document.cookie输出
//   // console.log(vm.$cookie.get("loginAuth"))
//   var auth = vm.$cookie.get("loginAuth");
//   // console.log(to.path)//可以拿到路由路径
//   if(to.path == "/login"){
//     if(auth){
//       router.push("homePage")
//     }else{
//       next()
//     }
//   }else{
//     if(auth){
//       //不在登录页
//       next();
//     }else{
//       router.push("/login")
//     }
//   }
//   next()
// })

// Router.beforeRouteEnter ((to, from, next)=>{
//   next()
//   if(from.fullPath!='/'){
//     location.reload()
//   }
// })

//main.js
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  base: process.env.BASE_URL,
})
