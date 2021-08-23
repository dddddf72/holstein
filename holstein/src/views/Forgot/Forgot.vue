<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <div class="navTitleContext center">
                    <router-link to="/">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                    </router-link>
                            <span class="welTxt">忘记密码</span>
                    </div>
            </div>
        </div>
        <div class="ChoiceloginSty">
            <div class="verificate">
              <div class="backrf" style="background:#FFFFFF;padding:40px">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="通过手机找回" name="first">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" style="width:362px;margin:0 auto">
                                    <div class="title">手机号码验证</div>
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off" prefix-icon="el-icon-user" placeholder="手机" ></el-input>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                            
                                            </div>
                                            <div style="display:flex;cursor:pointer">
                                                <div class="el-input el-input--small el-input--prefix" style="width: 63%;">
                                                    <el-input type="text" v-model="ruleForm2.code" autocomplete="off"  class="verificationCode" />
                                                </div>
                                                <div @click="getPhoneCode(ruleForm2.username)" class="login-code">
                                                    获取验证码
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small" style="width: 100%;margin-top:40px;">
                                            <div @click="submitPhoneForm('ruleForm2')" class="el-form-item__content" style="margin-left: 0px;">
                                                <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                                        <span>下一步</span>
                                                </button>
                                            </div>
                                        </el-form-item>
                                </el-form>
                            </el-tab-pane>
                            <el-tab-pane label="通过邮箱找回" name="second">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" style="width:362px;margin:0 auto">
                                    <div class="title">邮箱验证</div>
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="邮箱" prop="fromEmail">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                                    <el-input type="text" v-model="ruleForm.fromEmail" autocomplete="off" prefix-icon="el-icon-user" placeholder="邮箱" ></el-input>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                            
                                            </div>
                                            <div style="display:flex;cursor:pointer">
                                                <div class="el-input el-input--small el-input--prefix" style="width: 63%;">
                                                    <el-input type="text" v-model="ruleForm.code" autocomplete="off"  class="verificationCode" />
                                                </div>
                                                <div @click="mailbd(ruleForm.fromEmail)" class="login-code">
                                                    获取验证码
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small" style="width: 100%;margin-top:40px;">
                                            <div @click="submitemailForm('ruleForm')" class="el-form-item__content" style="margin-left: 0px;">
                                                <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">
                                                        <span>下一步</span>
                                                </button>
                                            </div>
                                        </el-form-item>
                                </el-form>
                            </el-tab-pane>
                </el-tabs>
              </div>
            </div>

        </div>
        
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
    data() {
        
        var validateCode = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("验证码不能为空"))
            } else if (value.length<4) {
                callback(new Error("验证码长度不能小于4位!"));
            } else {
                callback();
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
        var validEmail = (rule,value,callback)=>{
                const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (value === '' || value === undefined || value == null) {
                    callback()
                } else {
                    if ((!reg.test(value)) && value !== '') {
                    callback(new Error('请输入正确的邮箱号码'))
                    } else {
                    callback()
                    }
                }
            }
        return {
            code:"获取验证码",
            ruleForm2: {
                username: "",
                code:"",
                msgType:5
            },
            ruleForm: {
                fromEmail: "",
                code:"",
            },
            activeName: 'first',
            //表单验证规则
            rules2: {
                username: [
                        { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                ],
                code:[
                    {required:true,validator: validateCode,trigger: "blur"}
                ],
            },
            rules: {
                fromEmail: [
                        { required: true, message: "请输入邮箱",validator:validEmail, trigger: "blur" },
                ],
                code:[
                    {required:true,message: "请输入邮箱验证码",validator: validateCode,trigger: "blur"}
                ],
            },
        }
    },
    methods: {
        async handleClick(){
        },
        //邮箱绑定获取验证码
            async mailbd(fromEmail){
                // console.log(fromEmail)
                if(fromEmail ==null || fromEmail == undefined || fromEmail == '' ){
                  this.$message.error('请先输入邮箱')
                  return false 
                }
                var res = await UserHttp.mailbd(fromEmail)
                var message = res.data.msg.message;
                // console.log(message)
                if(message=="成功"){
                    this.$message.success('成功发送验证码至邮箱')
                }
                // console.log(res.data.msg.message)//发送成功
            },
        async getPhoneCode(mobile,msgType){
            await UserHttp.msgCodeForgot(mobile,msgType);
        },
        async submitPhoneForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
                    var {username,code,msgType} = this.ruleForm2;
                    console.log(this.ruleForm2)
                    this.$http.post('/api/snailUser/msg/login',{username,code,msgType}).then((res)=>{
                        var message = res.data.msg.message;
                        if(message=="成功"){
                            this.$store.commit('setUserName',this.ruleForm2.username)
                            this.$message.success('验证手机号码成功')
                            this.$router.push({name:'ResetPwd'});
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
        async submitemailForm(formName) {
          debugger
            this.$refs[formName].validate((valid) => {
                if(valid){
                  debugger
                    var {fromEmail,code} = this.ruleForm;
                    console.log(this.ruleForm)
                    this.$http.post('/api/email/updateMobile',{fromEmail,code}).then((res)=>{
                        var message = res.data.msg.message;
                        if(message=="成功"){
                            this.$message.success('邮箱验证成功')
                            this.$router.push({name:'ResetPwd'});
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
    .ChoiceloginSty .verificate{
        width: 490px;
        height: 540px;
        padding: 215px 0;
        margin: auto;
        
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
    .el-form-item__content .el-button--primary{
        border: none;
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
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: #fff;
    background: #686568;
    margin-right: 50px;
}
.login-code img {
    cursor: pointer;
    vertical-align: middle;
}
.el-form-item__content .el-button--primary{
    background: #81d8d0;
}
</style>