(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30dc0a6c"],{7370:function(t,s,a){"use strict";a("7552")},7552:function(t,s,a){},c84b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Header"),a("div",{staticClass:"nav"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品详情")])],1)],1),t._l(t.goodsDetail,(function(s){return a("div",{key:s._id,staticClass:"content"},[a("img",{staticClass:"pic",attrs:{src:s.goodsImg,alt:""}}),a("div",[a("p",{staticClass:"title"},[a("img",{attrs:{src:"//img11.360buyimg.com/devfe/s37x16_jfs/t1/20786/13/1309/1233/5c10bc25E56fdebff/f8a8193c17673628.png",alt:""}}),t._v(" "+t._s(s.title)+" ")]),a("div",{staticClass:"pro"},[t._v("价格全网优惠，下单京东速发，支持7天无理由退换货，下单好评现金红包，欢迎咨询客服砍价！查看")]),a("div",{staticClass:"price"},[a("span",[t._v("(独享)")]),t._v(" 价格"),a("span",{staticClass:"sell-price"},[t._v("￥"+t._s(s.price))])]),t._m(0,!0),a("div",{staticClass:"service"},[t._v(" 店铺名 "),a("span",[t._v(t._s(s.store))])]),a("div",{staticClass:"contact"},[a("div",{staticClass:"sprite-icon"}),a("div",{staticClass:"kefu"},[t._v("联系客服")]),a("div",{staticClass:"sprite-icon2"}),a("div",{staticClass:"follow"},[a("a",{attrs:{href:"###"},on:{click:function(a){return t.handleCollect(s._id,s.collected,s.table)}}},[t._v(t._s(s.collected?"已收藏":"收藏此商品"))])])]),a("el-button",{staticClass:"buy",attrs:{type:"success"},on:{click:function(a){return t.handleBuy(s)}}},[t._v("购买")]),a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.addCart(s._id)}}},[t._v("加入购物车")])],1)])})),a("div",{staticClass:"recommend"},[t._m(1),a("div",{staticClass:"goods-card"},t._l(t.goodsList,(function(s){return a("div",{key:s._id,staticClass:"card"},[a("img",{staticClass:"goodsImg",attrs:{src:s.goodsImg},on:{click:function(a){return t.refresh(s._id)}}}),a("h2",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),a("a",{staticClass:"title",attrs:{href:"#"}},[t._v(t._s(s.title))]),a("p",{staticClass:"store"},[t._v(t._s(s.store))])])})),0)])],2)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"service"},[t._v(" 服务支持 "),a("div",{staticClass:"icon"}),a("div",{staticClass:"tag blank"},[t._v("极速审核")]),a("div",{staticClass:"tag"},[t._v("7天价保")]),a("div",{staticClass:"tag"},[t._v("免费上门取货")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"jinpin-wrap"},[a("span",{staticClass:"jinpin-tit"},[t._v("精品推荐")]),a("span",{staticClass:"jinpin-txt"},[t._v("小编精挑细选好商品")])])}],c=(a("b149"),a("0418")),n={name:"Detail",components:{Header:c["a"]},data:function(){return{goodsDetail:[],goodsList:[],table:"",username:""}},created:function(){var t=this;setTimeout((function(){t.username=t.$store.state.username}),500)},mounted:function(){this.getDetail(),this.getGoodsList(0,this.table)},methods:{addCart:function(t){var s=this.username;this.$http.post("/addCart",{id:t,username:s}),this.$message({message:"成功添加购物车！",type:"success"})},getDetail:function(){var t=this,s=this.$route.query,a=s.id,e=s.table;this.table=e;var i="/detail?id=".concat(a);this.$http.get(i).then((function(s){t.goodsDetail=s.data.result}))},getGoodsList:function(t,s){var a=this;this.$http.get("/data?start=".concat(t,"&table=").concat(s)).then((function(t){a.goodsList=t.data.result}))},refresh:function(t){var s=this,a="/detail?id=".concat(t);this.$http.get(a).then((function(a){s.goodsDetail=a.data.result,s.addHistory(t)}))},addHistory:function(t){var s=this.username;this.$http.post("/history",{id:t,username:s})},handleBuy:function(t){var s=[];s.push(t);var a=t.price,e=new Date;this.$store.commit("setState",{total:a,checkedGoods:s,createTime:e}),this.$router.push("/order")},handleCollect:function(t,s,a){a=a;var e=this.username;this.goodsDetail[0].collected=!s,s=this.goodsDetail[0].collected;var i={id:t,collected:s,username:e};this.$http.post("/collect/".concat(a),i)}}},r=n,o=(a("7370"),a("5d22")),l=Object(o["a"])(r,e,i,!1,null,"a6511c2e",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-30dc0a6c.93fd3914.js.map