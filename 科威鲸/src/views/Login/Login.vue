<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                <!-- <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""> -->
                <div class="navTitleContext center">
                    <router-link to="/">
                        <span class="capa">LOGO  </span>
                        <span>HELSTEIN</span>
                    </router-link>
                    <span class="welTxt">欢迎登录</span>
                </div>
            </div>
        </div>
        <div class="ChoiceloginSty">
            <div class="loginContent">
                <div class="homeCircle">
                    <img src="../../assets/images/login/multiLogin/组 11@2x.png" alt="">
                </div>
                <div class="loginChoice">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="账号密码登录" name="first">
                                <el-form class="el-form login-form el-form--label-left demo-ruleForm" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm1.username" autocomplete="off" placeholder="手机" class="el-input__inner">
                                                <span class="el-input__prefix">
                                                    <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/用户.png" alt="">
                                                </span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="密码" prop="password">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="password" v-model="ruleForm1.password" autocomplete="off" placeholder="密码" show-password class="el-input__inner">
                                                <span class="el-input__prefix">
                                                    <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/密码.png" alt="">
                                                </span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm1.code" autocomplete="off" placeholder="请输入验证码" class="el-input__inner verificationCode">
                                            <span class="login-code" @click="getCode" style="margin-left:25px">{{code}}</span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                    <label class="el-checkbox" style="margin: 0px 0px 25px;">
                                        <span class="el-checkbox__label" @click="forgotPass">忘记密码？</span>
                                    </label>
                                    <div class="el-form-item el-form-item--small" style="width: 100%;">
                                        <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="margin-left: 0px;">
                                            <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                                    <span>登 录</span>
                                            </button>
                                        </div>
                                    </div>
                                    <label class="el-checkbox" style="margin: 0px 0px 25px;">
                                        <span class="el-checkbox__label">新用户</span>
                                        <a class="newRegist" @click="routerRegist">注册</a>
                                    </label>
                                    <div class="dottedLine">
                                        <img src="../../assets/images/login/multiLogin/形状 10.png" alt="">
                                    </div>
                                    <div class="wxOrali">
                                        <div @click="zfbLoginCode"><img src="../../assets/images/login/multiLogin/支付宝@2x.png" alt=""></div>
                                        <div @click="wechatLoginCode"><img src="../../assets/images/login/multiLogin/微信@2x.png" alt=""></div>
                                    </div>
                                    <!--<div class="scanCode" style="display:none">
                                        <div class="byWx">
                                            <p>微信扫码登陆</p>
                                            <div class="smdl" id="smdl">
                                                <img class="sao" src="../../assets/sao.png" />
                                            </div>
                                            <div class="shezhi">
                                                <p class="p3">每分钟刷新一次</p>
                                            </div>
                                        </div>
                                        <div class="byAli">
                                            <p>微信扫码登陆</p>
                                            <div class="smdl" id="smdl">
                                                <img class="sao" src="../../assets/sao.png" />
                                            </div>
                                            <div class="shezhi">
                                                <p class="p3">每分钟刷新一次</p>
                                            </div>
                                        </div>
                                    </div>  -->
                                </el-form>
                            </el-tab-pane>
                            <el-tab-pane label="手机动态登录" name="second">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="请输入手机号码" class="el-input__inner">
                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2.code" autocomplete="off" placeholder="输入手机验证码" class="el-input__inner verificationCode">
                                                    <span @click="getPhoneCode(ruleForm2.username)" class="login-code" style="margin-left:25px">
                                                        获取手机验证码
                                                    </span>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <div class="el-form-item el-form-item--small" style="width: 100%;margin-top:40px;">
                                            <div @click="submitPhoneForm('ruleForm2')" class="el-form-item__content" style="margin-left: 0px;">
                                                <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                                    <span>
                                                        <span>登 录</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="dottedLine dotline">
                                            <img src="../../assets/images/login/multiLogin/形状 10.png" alt="">
                                        </div>
                                        <div class="wxOrali" style="margin-top:50px;">
                                            <div>
                                                <el-button style="border:none" @click="zfbLoginCode"><img src="../../assets/images/login/multiLogin/支付宝@2x.png" alt=""></el-button>
                                            </div>
                                            <div>
                                                <el-button style="border:none" @click="wechatLoginCode"><img src="../../assets/images/login/multiLogin/微信@2x.png" alt=""></el-button>
                                                <!--
                                                <el-button style="border:none" @click="wechatLoginCode = true"><img src="../../assets/images/login/multiLogin/微信@2x.png" alt=""></el-button>
                                                <el-dialog
                                                title="微信扫码登录"
                                                :visible.sync="wechatLoginCode"
                                                width="320px"
                                                :before-close="handleClose">
                                                     <template>
                                                         <div style="margin:0 auto" v-qr="wechatScan" v-if="wechatScan" />
                                                            <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxf6223c7a47189bc6&redirect_uri=http://www.inroyltd.com/api/WeiXinTest&response_type=code&scope=snsapi_login&state=2021#wechat_redirect">请使用微信扫描二维码登录</a>
                                                          
                                                         <div>“深圳市恩罗信息科技有限公司”</div>
                                                     </template>
                                                    <span slot="footer" class="dialog-footer">
                                                        <el-button @click="wechatLoginCode = false">取 消</el-button>
                                                        <el-button type="primary" @click="wechatLoginCode = false">确 定</el-button>
                                                    </span>
                                                </el-dialog>
                                                 -->
                                            </div>
                                        </div>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>
                </div>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer/footer.vue'
import UserHttp from '@/model/UserHttp'
export default {
    components: {
        Footer
    },
    name: "Home",
    data() {
        var validatePass = (rule,value,callback)=>{
            if(value===""){
                callback(new Error("密码不能为空"))
            }else {
                // var reg =  /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/
                // if(!reg.test(value)){
                /* 数字,大小写字母,特殊字符组成长度不能小于6 */
                if (this.ruleForm1.code !== "") {
                    this.$refs.ruleForm1.validateField("code");
                }
                    callback();
            }
        }
        var validateCode = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("验证码不能为空"))
            } else if (value.length<4) {
                callback(new Error("验证码长度不能小于4位!"));
            } else {
                callback();
            }
        }
        return {
            code:"获取验证码",
            activeName: 'first',
            ruleForm1: {
                username: "",
                password: "",
                code:""
            },
            ruleForm2: {
                username: "",
                code:"",
                msgType:3
            },
            //表单验证规则
            rules1: {
                username: [
                        { required: true, message: "请输入用户名", trigger: "blur" },
                    //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                ],
                password:[
                    {required:true,validator: validatePass,trigger: "blur"}
                ],
                code:[
                    {required:true,validator: validateCode,trigger: "blur"}
                ]
            },
            rules2: {
                username: [
                        { required: true, message: "请输入用户名", trigger: "blur" },
                ],
                code:[
                    {required:true,validator: validateCode,trigger: "blur"}
                ],
            },
            //微信扫码登录
            // wechatLoginCode:false,
            wechatScan:"",
            zfbScan:"",
            //
        };
    },
    async mounted() {
        this.$http.post('/api/getQRCodeUrl').then(res=>{
            // console.log(res.data.biz)
            this.$data.wechatScan = res.data.biz
        })
        // this.$http.post('/api/zfb/getQRCodeUrl').then(res=>{
        //     // console.log(res.data.biz)
        //     this.$data.zfbScan = res.data.biz
        // })
        /* //get方式
        var res = await UserHttp.wechatScan();
        console.log(res.data.biz)
        this.$data.code = res.data.biz */
    },
    methods:{
        async getCode(){
            var res = await UserHttp.code();
            this.$data.code = res.data.biz
        },
        async getPhoneCode(mobile,msgType){
            // console.log(decodeURI(mobile))
            // var reg = /[^\d]/g;
            // const mobile1 = ((JSON.stringify(mobile)).replace(reg,""))
            // console.log(mobile1)

            // var res = 
            await UserHttp.msgCodeLogin(mobile,msgType);
            // console.log(res.data.msg.message)//发送成功
        },
        async handleClick(){
            // console.log(this.code)
        },
        async submitForm(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if(valid){
                    // console.log(this.ruleForm1)
                    var {username,password,code} = this.ruleForm1;
                    // console.log(this.ruleForm1)
                    
                    this.$http.post('/api/snailUser/login',{username,password,code}).then((res)=>{
                        var message = res.data.msg.message;
                        // console.log(message)
                        if(message=="成功"){
                            this.$store.commit('setUserName',this.ruleForm1.username)
                            // console.log(res.data.biz)
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            this.$message.success('登录成功')
                            this.$router.push('/');
                        }else{
                            this.$message.error(message);
                        }
                    }).catch(err=>{
                        console.log(err)
                        // if(code = 404){
                        //     this.$message.error('用户不存在');
                        //     return false
                        // }
                    })
                }else{
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        async submitPhoneForm(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if(valid){
                    var {username,code,msgType} = this.ruleForm2;
                    console.log(this.ruleForm2)
                    this.$http.post('/api/snailUser/msg/login',{username,code,msgType}).then((res)=>{
                        console.log(res.data.biz)
                        var message = res.data.msg.message;
                        // console.log(message)
                        if(message=="成功"){
                            this.$store.commit('setUserName',this.ruleForm2.username)
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            this.$message.success('登录成功')
                            this.$router.push('/');
                        }else{
                            this.$message.error('验证码错误');
                        }
                    })
                }else{
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        //点击微信扫码
        wechatLoginCode(){
            // window.location.href = 'https://open.weixin.qq.com/connect/qrconnect?appid=wxf6223c7a47189bc6&redirect_uri=http://www.inroyltd.com/api/WeiXinTest&response_type=code&scope=snsapi_login&state=2021#wechat_redirect'
            window.open ("https://open.weixin.qq.com/connect/qrconnect?appid=wxf6223c7a47189bc6&redirect_uri=http://www.inroyltd.com/api/WeiXinTest&response_type=code&scope=snsapi_login&state=2021#wechat_redirect", "newwindow", "height=600, width=660, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
        },
        //点击支付宝扫码登录
        zfbLoginCode(){
            this.$http.post('/api/zfb/getQRCodeUrl').then((res)=>{
                console.log(res.data)
                var message = res.data.msg.message;
                var zfbScan = res.data.biz
                if(message=="成功"){
                    // this.$store.commit('setUserName',this.ruleForm2bdwx.mobile)
                    this.$message.success('请扫描下方二维码完成绑定')
                    window.location.href = zfbScan
                    // window.opzfben(wechatScan,"_blank")
                }else{
                    // this.$message.error('手机号码或验证码错误');
                    this.$message.error(message);
                }
            })
        },
        handleClose() {
            this.$confirm('确认关闭？')
            .then(res => {
                console.log(res)
                // this.wechatLoginCode = false
            })
            .catch(err => {
                console.log(err)
            });
        },
        async routerRegist(){
            this.$router.push({name:"userRegist"})
        },
        forgotPass(){
            this.$router.push({name:'Forgot'})
        }
    }
};
</script>
<style scoped>
.home{
    width: 100%;
}
.center{
    margin: 0 320px;
}
    /*  */
    .firstNav{
        width: 100%;
        height: 100px;
        background-color: #fff;
        box-shadow:0px -3px 15px 3px #606266 ;
    }
    .navCenter{
        width: 1280px;
        height: 100px;
        position: relative;
    }
    .logo{
        width: 260px;
        height: 100px;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
    /*  */
    .navTitleContext{
        width: 1280px;
        height: 104px;
        display: flex;
        position: absolute;
        line-height: 100px;
        margin: 0 0 0 10px;
        font-weight: bold;
        font-size: 24px;
    }

    .navTitleContext .capa{
        color: #97BFD5;
    }
    .navTitleContext .welTxt{
        margin-left: 30px;
    }
    .navTitleContext span{
        color: #333;
        margin-left: 10px;
        
    }
    .navTitleContext span:nth-child(2){
        color: #999999;
    }
    .firstNavR{
        display: flex;
        position: absolute;
        top: 13px;
        right: 0;
    }
    .firstNavR div{
        margin: 0 14px;
    }
    .businessCenter{
        width: 76px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        background: url('../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
        font-size: 14px;
        color: #FFFFFF;
    }
    .shortLine{
        width: 1px;
        height: 9px;
    }
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
    }
    /*  */
    .ChoiceloginSty{
        width: 100%;
        height: 1000px;
        background: url('../../assets/images/login/multiLogin/矩形 2@2x.png');
    }
    .ChoiceloginSty .reset{
        width: 490px;
        height: 540px;
        margin: auto;
    }
    .loginContent{
        width: 1280px;
        height: 1000px;
        margin: 0 auto;
        display: flex;
        align-content: center;
        justify-content: space-between;
    }
    .homeCircle{
        width: 457px;
        height: 446px;
        margin-top: 247px;
    }
    .homeCircle img{
        width: 457px;
        height: 446px;
    }
    .loginContent .loginChoice{
        width: 490px;
        height: 620px;
        margin-top: 247px;
    }
    .el-tabs{
        width: 362px;
        height: 600px;
        margin: auto;
    }
    .el-tabs__item.is-active{
        color: #80d8cd;
    }
    .el-tabs__nav-scroll .el-tabs__nav{
        font-size: 18px;
        width: 362px !important;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }
    .el-tabs__nav-scroll .el-tabs__nav .el-tabs__active-bar{
        background-color: #80d8cd;
    }
    .el-tabs__content {
        height: 560px;
    }
    #pane-first .el-form ,.login-form ,.el-form--label-left{
        width: 362px;
        height: 560px;
    }
    .login-form {
        border-radius: 6px;
        background: #fff;
        width: 362px;
    }
    .el-form-item--small.el-form-item {
        margin-bottom: 18px;
    }
    .el-form-item {
        margin-bottom: 22px;
    }
    .el-form-item:after, .el-form-item:before {
        display: table;
        content: "";
    }
    .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label {
        line-height: 32px;
    }
    .el-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }
    .el-form-item__content:after, .el-form-item__content:before {
        display: table;
        content: "";
    }
    .login-form .el-input, .login-form .el-input input {
        height: 38px;
    }

.el-input--small .el-input__inner {
    height: 32px;
    line-height: 32px;
}
.el-input--prefix .el-input__inner {
    padding-left: 30px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
.el-input__icon, .el-input__prefix {
    height: 100%;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.el-input__prefix {
    position: absolute;
    left: 25px;
    top: 25px;
    color: #c0c4cc;
}
.el-form-item__content .el-input--small .verificationCode{
    width: 158px;
}
.el-form-item__content:after {
    clear: both;
}
.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
}
.el-form-item:after {
    clear: both;
}
.el-input--small {
    font-size: 13px;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
.login-form .input-icon {
    height: 17px;
    width: 16px;
    margin-left: 2px;
}

.el-input--small .el-input__icon {
    line-height: 32px;
}
.el-input__icon {
    width: 25px;
    line-height: 40px;
}
.el-input__icon:after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
}
.login-code {
    width: 30%;
    display: inline-block;
    height: 34px;
    margin: -33px 50px 0 0;
    text-align: center;
    color: #fff;
    background: #686568;
    /*float: right;  */
}
.login-code img {
    cursor: pointer;
    vertical-align: middle;
}
.el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 30px;
}
.el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
}
.newRegist{
    color: blue;
}
.el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.el-button--primary {
    color: #fff;
    background-color: #80d8cd;
    border-color: #80d8cd;
}
        .loginChoice {
            height: 412px;
            width: 343px;
            background: white;
        }

        .loginChoice input {
            height: 40px;
            width: 300px;
            margin-top: 20px;
            margin-left: 20px;
            font-size: 15px;
        }
    .dottedLine img{
        width: 360px;
    }
    .dotline{
        margin-top: 50px;
    }
    .wxOrali{
        width: 200px;
        height: 25px;
        margin: 32px auto;
        display: flex;
        justify-content: space-between;
    }
</style>