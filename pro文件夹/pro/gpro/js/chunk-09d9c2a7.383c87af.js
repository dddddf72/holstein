(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d9c2a7"],{"4d99":function(t,e,s){},cdf9:function(t,e,s){"use strict";s("4d99")},e5b0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),t._m(0),s("div",{staticClass:"shopcart-nav"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("购物车")])],1)],1),s("div",{staticClass:"content"},[s("div",{staticClass:"line"}),s("div",{staticClass:"title"},[t._v("商品列表")]),s("div",{staticClass:"table"},[s("ul",{staticClass:"table-title"},[s("li",{staticClass:"btn-item"},[s("input",{attrs:{type:"checkBox"},domProps:{checked:t.checkAll},on:{click:function(e){return t.handleCheckAllChange(t.checkAll)}}}),t._v("全选 ")]),s("li",{staticClass:"product-item"},[t._v("商品")]),s("li",{staticClass:"price-item"},[t._v("单价")]),s("li",{staticClass:"num-item"},[t._v("数量")]),s("li",{staticClass:"total-item"},[t._v("总价")]),s("li",{staticClass:"actions-item"},[t._v("操作")])]),[s("ul",{staticClass:"goodsCard"},[t._l(t.cart,(function(e){return s("li",{key:e._id,staticClass:"item"},[s("div",{staticClass:"item-check"},[s("input",{attrs:{type:"checkBox"},domProps:{checked:e.isChecked},on:{click:function(s){return t.handleCheckedGoodsChange(e._id)}}}),s("div",{staticClass:"goods"},[s("img",{staticClass:"goodsImg",attrs:{src:e.goodsImg,alt:""}}),s("div",{staticClass:"goods-name"},[t._v(t._s(e.title))])]),s("div",{staticClass:"price-item",staticStyle:{"margin-left":"30px","line-height":"72px"}},[t._v(" "+t._s(e.price)+"元 ")]),s("span",{staticClass:"goods-num"},[s("el-input-number",{attrs:{min:1,max:10,label:"描述文字",size:"small"},on:{change:function(s){return t.handleChangeNum(e._id)}},model:{value:e.num,callback:function(s){t.$set(e,"num",s)},expression:"item.num"}})],1),s("span",{staticClass:"allPrice total-item",staticStyle:{position:"absolute",left:"75%","line-height":"72px","text-align":"center"}},[t._v(t._s(e.allPrice)+"元")]),s("div",{staticClass:"action actions-item"},[s("el-button",{staticClass:"delete",attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(s){return t.deleteCart(e._id)}}})],1)])])})),s("div",{staticClass:"order-wrap clearfix"},[s("div",{staticClass:"cart-tip"},[s("a",{attrs:{href:"/#/home"}},[s("el-button",{attrs:{type:"primary",round:""}},[t._v("继续购物")])],1),s("span",{staticClass:"total"},[t._v(" 共 "),s("span",[t._v(" "+t._s(t.cart.length)+" ")]),t._v("件商品，已选择 "),s("span",[t._v(t._s(t.checkedGoods.length)+" ")]),t._v("件 ")])]),s("div",{staticClass:"fr"},[s("span",{staticClass:"allPrice"},[t._v(" 合计："),s("span",[t._v(t._s(t.total))]),t._v("元 ")]),s("router-link",{attrs:{to:"/order"}},[s("el-button",{staticClass:"pay btn",on:{click:function(e){return t.addState(t.total,t.checkedGoods)}}},[t._v("去结算")])],1)],1)])],2)]],2)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("img",{staticClass:"logo1",attrs:{src:s("996e"),alt:""}}),a("div",{staticClass:"title"},[t._v("购物袋")]),a("div",[a("ul",[a("li",[a("span",{staticClass:"icon1 small-icon"}),a("span",[t._v("100%正品保证")])]),a("li",[a("span",{staticClass:"icon2 small-icon"}),a("span",[t._v("七天无理由放心退")])]),a("li",[a("span",{staticClass:"icon3 small-icon"}),a("span",[t._v("限时抢购")])])])])])}],c=(s("4858"),s("23f2"),s("7103"),s("5185"),s("e853"),s("216c")),n={name:"ShopCart",components:{Nav:c["a"]},data:function(){return{checkAll:!1,checkedGoods:[],cart:"",username:this.$store.state.username}},mounted:function(){this.getCart()},computed:{total:function(){var t=0;0==this.checkedGoods.length&&(t=0);for(var e=0;e<this.checkedGoods.length;e++)t+=this.checkedGoods[e].price*this.checkedGoods[e].num;return t}},methods:{getCart:function(){var t=this,e=this.username;this.$http.get("/getCart?username=".concat(e)).then((function(e){e.data.result.forEach((function(t){t.allPrice=Number(t.num*t.price).toFixed(2),t.isChecked=!1})),t.cart=e.data.result}))},handleCheckAllChange:function(t){t=!t,this.checkAll=t;for(var e=0;e<this.cart.length;e++)this.cart[e].isChecked=t;var s=this.cart.filter((function(t){return t.isChecked}));this.checkedGoods=s},handleCheckedGoodsChange:function(t){var e=this.cart.find((function(e){return e._id==t}));e.isChecked=!e.isChecked;var s=this.cart.filter((function(t){return t.isChecked}));this.checkedGoods=s},handleChangeNum:function(t){this.cart.filter((function(e){e._id==t&&(e.allPrice=Number(e.num*e.price).toFixed(2))}))},deleteCart:function(t){var e=this,s=this.username,a={id:t,username:s};this.$http.post("/deleteCart",a).then((function(s){var a=e.cart.filter((function(e){return e._id!=t}));e.cart=a}))},addState:function(t,e){var s=new Date;this.$store.commit("setState",{total:t,checkedGoods:e,createTime:s})}}},l=n,r=(s("cdf9"),s("5d22")),o=Object(r["a"])(l,a,i,!1,null,"d9ab3f06",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-09d9c2a7.383c87af.js.map