<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <!-- <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""> -->
                    <div class="navTitleContext center">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                            <span class="welTxt">账号注册</span>
                    </div>
            </div>
        </div>
        <!--<div class="pwdReset"></div> -->
        <div class="ChoiceloginSty">
            <div class="pwdReset">
                <div class="pwdResetCenter">
                    <el-form class="el-form login-form el-form--label-left demo-ruleForm" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" style="width: 362px;height: 560px;margin: 0 auto;">
                    <div class="title">账号注册</div>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="请输入常用手机号" prop="username">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div class="el-input el-input--small el-input--prefix">
                                    <input type="text" v-model="ruleForm1.username" autocomplete="off" placeholder="请输入常用手机号" class="el-input__inner">
                                    <span class="el-input__prefix">
                                        <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/用户.png" alt="">
                                    </span>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="请设置一个密码" prop="password">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div class="el-input el-input--small el-input--prefix">
                                    <input type="password" v-model="ruleForm1.password" autocomplete="off" placeholder="请设置一个密码(8-16位字母、数字、符号)" class="el-input__inner">
                                    <span class="el-input__prefix">
                                        <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/密码.png" alt="">
                                    </span>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="请输入验证码" prop="code">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div class="el-input el-input--small el-input--prefix">
                                    <input type="text" v-model="ruleForm1.code" autocomplete="off" placeholder="请输入验证码" class="el-input__inner verificationCode">
                                    <span class="login-code" @click="getPhoneCode(ruleForm1.username)" style="margin-left:25px">{{code}}</span>
                                </div>
                            </div>
                        </el-form-item>
                        <div class="dispalyFlex">
                            <div class="concernBtn">
                                <el-radio v-model="ruleForm1.userType" label="1">聘用人才</el-radio>
                            </div>
                            <div class="notconcernBtn">
                                <el-radio v-model="ruleForm1.userType" label="2">成为自由从业者</el-radio>
                            </div>
                        </div>
                        <div class="el-form-item el-form-item--small is-required" style="width: 100%;">
                            <div style="margin-left: 0px;">
                                <el-checkbox v-model="checked">我已阅读并同意<a href="" style="color:#81d8d0">服务协议、隐私保护政策</a></el-checkbox>
                            </div>
                        </div>
                        <div class="el-form-item el-form-item--small" style="width: 100%;">
                            <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="margin-left: 0px;">
                                <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                        <span>注 册</span>
                                </button>
                            </div>
                        </div>
                        <div class="wxOrali">
                            <div><img src="../../assets/images/login/multiLogin/支付宝@2x.png" alt=""></div>
                            <div><img src="../../assets/images/login/multiLogin/微信@2x.png" alt=""></div>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>
<script>
import UserHttp from '@/model/UserHttp'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    export default {
        components: {
            Footer
    },
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
        var validateUserType = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请选择注册类型"))
            } else {
                callback();
            }
        }
        return {
            code:"获取验证码",
            checked: true,
            ruleForm1: {
                username: "",
                password: "",
                code:"",
                userType:"",
            },
            ruleForm2: {
                username: "",
                code:""
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
                ],
                userType:[
                    {
                        required:true,validator: validateUserType,trigger: "blur"
                    }
                ]
            },
            rules2: {
                username: [
                        { required: true, message: "请输入用户名", trigger: "blur" },
                ],
                code:[
                    {required:true,validator: validateCode,trigger: "blur"}
                ]
            },
        };
    },
    /* async mounted() {
        
    }, */
    methods:{
        async getCode(){
            var res = await UserHttp.code();
            this.$data.code = res.data.biz
        },
        async getPhoneCode(mobile,msgType){
            // console.log(mobile)
            if(mobile !=""){
                var res = await UserHttp.msgCodeRegist(mobile,msgType);
                // console.log(res.data)
                // console.log(res.data.msg.message)//发送成功
            }else{
                this.$message.error("请输入手机号");
            }
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
                    var {username,password,code,userType} = this.ruleForm1;
                    if(this.ruleForm1.userType !=2){
                        console.log(this.ruleForm1)
                        this.$http.post('/api/register',{username,password,code,userType}).then((res)=>{
                            console.log(res.data.biz)
                            var message = res.data.msg.message;
                            if(message=="成功"){
                                this.$message.success('用户注册成功')
                                // this.$store.commit('setUserReName',this.ruleForm1.username)
                                this.$store.commit('setUserName',this.ruleForm1.username)
                                // this.$store.commit('setUserName',this.ruleForm1.password)
                                // this.$store.commit('setUserName',this.ruleForm1.code)
                                this.$store.commit('setUserType',this.ruleForm1.userType)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$router.push('/');
                            }else{
                                this.$message.error(message);
                            }
                        })
                    }else if(this.ruleForm1.userType ==2){
                        console.log(this.ruleForm1)
                        this.$http.post('/api/register',{username,password,code,userType}).then((res)=>{
                            console.log(res.data.biz)
                            // debugger
                            var message = res.data.msg.message;
                            // console.log(message)
                            if(message=="成功"){
                                this.$store.commit('setpraReName',this.ruleForm1.username)
                                // this.$store.commit('setUserName',this.ruleForm1.userType)
                                this.$store.commit('setUserType',this.ruleForm1.userType)
                                this.$message.success('商家注册成功')
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                // this.$message.success('用户注册成功')
                                this.$router.push({name:'01BusinessInf'});
                            }else{
                                this.$message.error(message);
                            }
                        })
                    }
                }else{
                    this.$message.error("请确认");
                    return false;
                }
            })
        },
        async submitPhoneForm(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if(valid){
                    console.log(this.ruleForm2)
                    var {username,code} = this.ruleForm2;
                    this.$http.post('/api/snailUser/msg/login',{username,code}).then((res)=>{
                        console.log(res.data)
                        var message = res.data.msg.message;
                        console.log(message)
                        if(message=="注册成功"){
                            this.$store.commit('setUserName',this.ruleForm1.username)
                            this.$store.commit('setUserType',this.ruleForm1.userType)
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            this.$message.success('注册成功')
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
    .ChoiceloginSty .pwdReset{
        width: 490px;
        padding: 50px 0;
        margin: auto;
        color: #666666;
        font-size: 14px;
        font-family: SourceHanSansCN-Light;
    }
    .pwdResetCenter{
        width: 490px;
        height: 800px;
        margin: auto;
        background: #fff;
    }

    /*  */
    form div{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .el-form ,.login-form ,.el-form--label-left{
        width: 362px;
        height: 560px;
    }
    .el-form .title{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding: 20px 0 40px 0;
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
    left: 6px;
    top: 8px;
    color: #c0c4cc;
}
.el-form-item__content .el-input--small .verificationCode{
    width: 165px;
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
        width: 23%;
        display: inline-block;
        height: 38px;
        line-height: 38px;
        margin: -47px 50px 0 0;
        text-align: center;
        color: #fff;
        background: #686568;
        /*  float: right; */
    }
    .login-code img {
        cursor: pointer;
        vertical-align: middle;
    }
    .wxOrali{
        width: 110px;
        height: 25px;
        margin: 32px auto;
        display: flex;
        justify-content: space-between;
    }
    /*  */
    .logoFooter{
        background-color: #99bed8;
        height: 100px;
        margin-bottom: 30px;
    }
    .logoFooter .logo{
        width: 260px;
        height: 100px;
        display: block;
        text-align: center;
        line-height: 100px;
        margin: 0 auto;
    }
    .logoFooter .logo img{
        width: 260px;
        height: 21px;
    }
    .footer {
        width: 100%;
        max-width: 100%;
        background: #fff;
        overflow-x: hidden;
    }
    .footer1 {
        width: 96%;
        max-width: 1185px;
        margin: 0 auto;
        padding: 50px 0 30px 0;
    }
    .footer1 .footer1_left {
        float: left;
    }
    .footer1 .footer1_left .footer1_xun {
        width: 160px;
        float: left;
    }
    .footer1 .footer1_left .footer1_xun p {
        float: left;
        width: 100%;
        font-size: 14px;
        color: #373d41;
        line-height: 50px;
    }
    .footer1 .footer1_left .footer1_xun a {
        float: left;
        width: 100%;
        font-size: 12px;
        color: #6b727c;
        line-height: 28px;
        font-weight: 500;
    }
    /*  */
    .footer1 .footrt1_right {
        float: right;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima {
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima img{
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_title {
        font-size: 14px;
        line-height: 30px;
        width: 100%;
        text-align: center;
        color: #373d41;
    }
    .clear {
        clear: both;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer2 {
        width: 100%;
        text-align: center;
        overflow: hidden;
        font-size: 12px;
        color: #a5aec1;
        border-top: #ececee solid 1px;
        padding-top: 15px;
    }
    .footer2 a {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
        line-height: 34px;
    }
    .footer2 span {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
    }
</style>