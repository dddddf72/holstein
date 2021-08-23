<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <div class="navTitleContext center">
                        <router-link to="/">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                        </router-link>
                            <span class="welTxt">账号注册</span>
                    </div>
            </div>
        </div>
        <div class="ChoiceloginSty">
            <div class="pwdReset">
                <div class="pwdResetCenter">
                    <el-form class="el-form login-form el-form--label-left demo-ruleForm" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" style="width: 362px;height: 560px;margin: 0 auto;">
                    <div class="title">账号注册</div>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="" prop="username">
                            <div class="el-form-item__content" style="">
                            <country-code-selector class="selectorCountry" :countryCode.sync="value"></country-code-selector>
                                <el-input class="CountryPhone" type="text" v-model="ruleForm1.username" autocomplete="off" prefix-icon="el-icon-user" placeholder="请输入常用手机号" ></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="" prop="password">
                            <div class="el-form-item__content" style="">
                                <el-input prefix-icon="el-icon-lock" placeholder="请设置一个密码(8-16位字母、数字、符号)"
                                          type="password" v-model="ruleForm1.password" show-password
                                          autocomplete="off"
                                          ></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="" prop="code">
                            <div class="el-form-item__content" style="cursor:pointer">
                                    <el-input type="text" v-model="ruleForm1.code" autocomplete="off" placeholder="请输入验证码" style="width:200px" />
                                    <span class="login-code" @click="getPhoneCode(ruleForm1.username)" style="margin-left:25px">{{code}}</span>
                            </div>
                        </el-form-item>
                        <div class="dispalyFlex">
                            <div class="notconcernBtn">
                                <el-radio v-model="ruleForm1.userType" label="1">聘用人才</el-radio>
                            </div>
                            <div class="notconcernBtn">
                                <el-radio v-model="ruleForm1.userType" label="2">成为自由从业者</el-radio>
                            </div>
                        </div>
                        <div class="el-form-item el-form-item--small is-required" style="width: 100%;">
                            <div style="">
                                <el-checkbox v-model="ruleForm1.checked">我已阅读并同意
                                    <a href="@/assets/pdfs/Serviceagreement.pdf" download="服务协议.pdf" class="" style="color:#81d8d0" >服务协议</a>、
                                    <a href="@/assets/pdfs/Privacypolicy.pdf" download="隐私保护政策.pdf" class="" style="color:#81d8d0" >隐私保护政策</a>
                                    <!--<a href="@/assets/pdfs/Serviceagreement.pdf" style="color:#81d8d0" download></a>
                                        <input type="hidden" id="downPDF1">
                                        <a href="#" id="links1" style="color:#81d8d0" download="服务协议.pdf" @click="downPdf1">服务协议</a>
                                    、 
                                    <a href="@/assets/pdfs/Privacypolicy.pdf" download ></a>
                                        <input type="hidden" id="downPDF2">
                                        <a href="#" id="links2" style="color:#81d8d0" download="隐私保护政策.pdf" @click="downPdf2">隐私保护政策</a>-->
                                </el-checkbox>
                            </div>
                        </div>
                        <div class="el-form-item el-form-item--small" style="width: 100%;cursor:pointer">
                            <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="">
                                <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                        <span>注 册</span>
                                </button>
                            </div>
                        </div>
                       <!-- <div class="wxOrali">
                            <div><img src="../../assets/images/login/multiLogin/支付宝@2x.png" alt=""></div>
                            <div><img src="../../assets/images/login/multiLogin/微信@2x.png" alt=""></div>
                        </div> -->
                    </el-form>
                </div>
            </div>
        </div>
        
        <Footer></Footer>
    </div>
</template>
<script>
import UserHttp from '@/model/UserHttp'

import countryCodeSelector from 'vue-country-code-selector'
    import Footer from '@/components/Footer/footer.vue'
    export default {
        components: {
            Footer,countryCodeSelector
    },
    data() {
        var validatePhone = (rule,value,callback)=>{
            const reg = /^[1][3,4,5,7,8][0-9]{9}$/
            if (value === '' || value === undefined || value == null) {
                callback()
            } else {
                if ((!reg.test(value)) && value !== '') {
                callback(new Error('请输入正确的电话号码'))
                } else {
                callback()
                }
            }
        }
        
        var validatePass = (rule,value,callback)=>{
                if(value===""){
                    callback(new Error("密码不能为空"))
                }else {
                    //数字大小写字母特殊字符组成，长度不能小于6
                    var reg =  /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/
                        if(!reg.test(value)){
                            callback(new Error("密码必须包含数字,大小写字母,特殊字符,至少8位,最多16位"))
                        }else{
                            callback()
                        }
                        
                    // if (this.ruleForm1.confirmPass !== "") {
                    //     this.$refs.ruleForm1.validateField("confirmPass");
                    // }
                    //     callback();
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
            if(value == ""){
                callback(new Error("请选择注册类型"))
            } else {
                callback();
            }
        }
        var validatecheck = (rule,value,callback)=>{
            if(value !== true){
                callback(new Error("请阅读并同意服务协议"))
            }else {
                callback();
            }
        }
        return {
            code:"获取验证码",
            ruleForm1: {
                username: "",
                password: "",
                code:"",
                userType:'1',
                checked: true,
            },
            ruleForm2: {
                username: "",
                code:""
            },
            //表单验证规则
            rules1: {
                username: [
                    
                        { required: true,validator:validatePhone, trigger: "blur" },
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
                ],
                checked:[
                    {
                        required:true, validator: validatecheck
                    }
                ]
            },
            rules2: {
                username: [
                        { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                ],
                code:[
                    {required:true,validator: validateCode,trigger: "blur"}
                ]
            },
        };
    },
        
    methods:{
        async getCode(){
            var res = await UserHttp.code();
            this.$data.code = res.data.biz
        },
        async getPhoneCode(mobile,msgType){
            if(mobile !=""){
                await UserHttp.msgCodeRegist(mobile,msgType);
            }else{
                this.$message.error("请输入手机号");
            }
        },
        async submitForm(formName) {
            debugger
            this.$refs[formName].validate((valid) => {
                if(valid){
                    var {username,password,code,userType,checked} = this.ruleForm1;
                    if(this.ruleForm1.userType ==1){
                        // console.log(this.ruleForm1)
                        this.$http.post('/api/register',{username,password,code,userType,checked}).then((res)=>{
                            var message = res.data.msg.message;
                            if(message=="成功"){
                                // this.$message.success('用户注册成功')
                                // this.$store.commit('setUserName',this.ruleForm1.username)
                                // this.$store.commit('setUserType',this.ruleForm1.userType)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$router.push('/');
                            }else{
                                this.$message.error(message);
                            }
                        })
                    }else if(this.ruleForm1.userType ==2){
                        console.log(this.ruleForm1)
                        this.$http.post('/api/register',{username,password,code,userType,checked}).then((res)=>{
                            console.log(res.data.biz)
                            var message = res.data.msg.message;
                            if(message=="成功"){
                                // this.$store.commit('setpraReName',this.ruleForm1.username)
                                // this.$store.commit('setUserType',this.ruleForm1.userType)
                                // this.$message.success('商家注册成功')
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$router.push({name:'01BusinessInf'});
                            }else{
                                this.$message.error(message);
                            }
                        })
                    }
                }else{
                    this.$message.error("请确认注册信息是否已填写完毕,并勾选同意系统服务协议");
                    return false;
                }
            })
        },
        async submitPhoneForm(formName) {
            this.$refs[formName].validate((valid) => {
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
        // async downPdf1(){
        //     var pdf = $('#downPDF1').val();
        //     document.getElementById('links1').href = '../../assets/pdfs/Serviceagreement.pdf'
        // },
        // async downPdf2(){
        //     var pdf = $('#downPDF2').val();
        //     document.getElementById('links2').href = '../../assets/pdfs/Privacypolicy.pdf'
        // },
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
        height: 980px;
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
        height: 580px;
        margin: 130px 0 0 0;
        background: #fff;
      border-radius: 2%;
    }
    

    /*  */
    .el-form ,.login-form ,.el-form--label-left{
        width: 362px;
        height: 560px;
    }
    .el-form .title{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding: 50px 0 40px 0;
    }
    .login-form {
        border-radius: 6px;
        background: #fff;
        width: 362px;
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
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        color: #fff;
        background: #686568;
        float: right; 
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
   .notconcernBtn {
		margin-top:0px;
		width:180px;
   }
   
/* 区号样式 */
.selectorCountry{
  height:40px;
  width:30%;
  display:inline-block
}

/* 区号后手机号码样式 */
.CountryPhone{
  width:70%;
  display:inline-block
}
</style>