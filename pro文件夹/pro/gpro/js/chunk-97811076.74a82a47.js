(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97811076"],{9896:function(e,r,t){"use strict";t("bfd9")},a55b:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"home"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t("996e"),alt:""}}),s("div",{staticClass:"title"},[e._v("用户登录")]),s("router-link",{attrs:{to:"/register"}},[s("div",{staticClass:"register"},[e._v("免费注册")])])],1)]),s("div",{staticClass:"form"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[s("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.pwd,callback:function(r){e.$set(e.ruleForm,"pwd",r)},expression:"ruleForm.pwd"}})],1),s("el-form-item",{staticClass:"button"},[s("el-button",{attrs:{type:"warning",size:"medium"},on:{click:function(r){return e.submitForm(e.ruleForm)}}},[e._v("登录")]),s("el-button",{attrs:{size:"medium"},on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},o=[],a={name:"Home",data:function(){var e=function(e,r,t){if(""===r)t(new Error("密码不能为空"));else{var s=/^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;s.test(r)?t():t(new Error("密码必须由数字、大小写字母、特殊字符组成，且长度不能小于6"))}};return{ruleForm:{username:"",pwd:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:6,message:"长度在 2 到 6 个字符",trigger:"blur"}],pwd:[{required:!0,validator:e}]}}},methods:{submitForm:function(e){var r=this;this.$http.post("/doLogin",e).then((function(t){200==t.data.code?(r.$store.commit("setUserName",e.username),r.$message.success("登录成功"),r.$router.push("/home")):r.$message.error("用户名或密码错误")}))},resetForm:function(e){this.$refs[e].resetFields()}}},i=a,u=(t("9896"),t("5d22")),l=Object(u["a"])(i,s,o,!1,null,"f6061e6a",null);r["default"]=l.exports},bfd9:function(e,r,t){}}]);
//# sourceMappingURL=chunk-97811076.74a82a47.js.map