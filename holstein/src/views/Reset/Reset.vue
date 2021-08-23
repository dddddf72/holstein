<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <div class="navTitleContext center">
                        <router-link to="/">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                        </router-link>
                            <span class="welTxt">重置密码</span>
                    </div>
            </div>
        </div>
        <div class="ChoiceloginSty">
            <div class="pwdReset">
                <div class="pwdResetCenter">
                    <el-form class="el-form login-form el-form--label-left" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" style="width:390px;margin:0 auto">
                        <div class="title">重置密码</div>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                    <el-input type="text" v-model="ruleForm1.username" autocomplete="off"  />
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="新密码" prop="newPass">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                  <el-input type="password" show-password v-model="ruleForm1.newPass" autocomplete="off" placeholder="请输入新密码"  style="display:inline-block"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="确认新密码" prop="confirmPass">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                  <el-input type="password" show-password v-model="ruleForm1.confirmPass" autocomplete="off" placeholder="请再次输入新密码"  style="display:inline-block"></el-input>
                            </div>
                        </el-form-item>
                            
                        <div class="pwdRule">
                            <p>密码规则：</p>
                            <p>1、8-16个字符，包括大小写字母，数字，特殊字符三种以上</p>
                            <p>2、密码不能包含用户名</p>
                            <p>3、不要使用连续或重复的数字/字符作为密码</p>
                        </div>
                            <div class="el-form-item el-form-item--small" style="width: 100%;margin-top:40px;">
                                <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="cursor:pointer">
                                    <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                            <span>重置密码</span>
                                    </button>
                                </div>
                            </div>
                    </el-form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  
</template>
<script>
import Footer from '@/components/Footer/footer.vue'
    export default {
        components: {
            Footer
    },
    data() {
        
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
                        
                }
            }
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
        var validateCheckPass= (rule, value, callback) => {
            if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm1.newPass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
            }
        }
        return {
            ruleForm1: {
                username: "",
                newPass: "",
                confirmPass:""
            },
            rules1: {
                username: [
                        { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                ],
                newPass:[
                    {required:true,validator: validatePass,trigger: "blur"}
                ],
                confirmPass:[
                    {required:true,validator: validateCheckPass,trigger: "blur"}
                ]
            },
        }
    },
    methods: {
        async submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
                    var {username,newPass,confirmPass} = this.ruleForm1;
                    console.log(this.ruleForm1)
                    
                    this.$http.post('/api/snailUser/forgetPass',{username,newPass,confirmPass}).then((res)=>{
                        console.log(res)
                        var message = res.data.msg.message;
                        if(message=="成功"){
                            this.$store.commit('setUserName',this.ruleForm1.username)
                            this.$message.success('重置密码成功')
                            this.$router.push({name:'homePage'});
                        }else{
                            this.$message.error(message);
                        }
                    })
                }else{
                    console.log('error submit!!');
                    return false;
                }
            })
        },
    },
}
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
        height: 540px;
        padding: 215px 0;
        margin: auto;
        color: #666666;
        font-size: 14px;
        font-family: SourceHanSansCN-Light;
    }
    .pwdResetCenter{
        width: 490px;
        height: 640px;
        margin: auto;
        background: #fff;
    }
    .el-form .title{
        text-align: center;
        padding: 40px 0 40px 0;
    }

    /*  */
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
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
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
    font-family: SourceHanSansCN-Light;
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
    top: 9px;
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

.el-form-item__content .el-button--primary{
    background: #81d8d0;
    border-color: #81d8d0;
}
    /*  */
    .pwdRule{
        line-height: 30px;
        color: #BDBDBD;
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