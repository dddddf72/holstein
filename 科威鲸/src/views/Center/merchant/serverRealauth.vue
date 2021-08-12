<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人设置</el-breadcrumb-item>
            <el-breadcrumb-item>实名认证</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <div style="padding:20px">
                <el-form class="el-form login-form el-form--label-left" :model="ruleFormsfz" status-icon :rules="rulessfz" ref="ruleFormsfz">
                        <div class="ti-no-ng-animate ng-scope" style="font-size:30px;font-weight:bold;width:130px;height:55px;display:block">基本信息</div>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证正面" prop="sfzFront">
                                <div class="el-form-item__content" style="vertical-align: top;display:flex"> 
                                        <div>
                                            <img :src="ruleFormsfz.sfzFront?getImgUrl(ruleFormsfz.sfzFront):ruleFormsfz.sfzFront" alt="" width="100px" height="100px">
                                            <input type="file" style="" @change="handlesfzFront"> 
                                        </div>
                                </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证反面" prop="sfzReverse">
                                <div class="el-form-item__content" style="vertical-align: top;display:flex"> 
                                    <div>
                                        <img :src="ruleFormsfz.sfzReverse?getImgUrl(ruleFormsfz.sfzReverse):ruleFormsfz.sfzReverse" alt="" width="100px" height="100px">
                                        <input type="file" style="" @change="handlesfzSuccess"> 
                                    </div>
                                </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证号码" prop="idCard">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                    <el-input type="text" v-model="ruleFormsfz.idCard" style="width:520px;height:40px"></el-input>
                                </div> 
                            </div>
                        </el-form-item>
                        <!--
                        <el-form-item class="el-form-item is-required el-form-item--small" label="出生年月日" prop="userdate">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div class="block">
                                    <el-date-picker
                                    v-model="ruleFormsfz.userdate"
                                    type="date"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                            </div>
                            
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="性别" prop="usersex">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <el-radio v-model="ruleFormsfz.usersex" label="1">男</el-radio>
                                <el-radio v-model="ruleFormsfz.usersex" label="2">女</el-radio>
                            </div>
                            
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="住址" prop="address">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                    <el-input type="text" v-model="ruleFormsfz.address" style="width:520px;height:40px"></el-input>
                                </div> 
                            </div>
                            
                        </el-form-item>
                        -->
                </el-form>   
                        <div class="nextStepBtn dispalyFlex" style="width:500px;margin:20px auto">
                            <el-button style="margin-top: 12px;" @click="cancelcertific">取消认证</el-button>
                            <el-button style="margin-top: 12px;margin-left:30px;background-color:#81d8d0" @click="submitcertific('ruleFormsfz')">提交认证</el-button>
                        </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserHttp from '@/model/UserHttp'
    export default {
        data() {
            var validateSfz = (rule,value,callback)=>{
                if(value === ""){
                    callback(new Error("请上传身份证照片"))
                } else {
                    callback();
                }
            }
            return {
                //实名认证
                ruleFormsfz: {
                    sfzFront: "",
                    sfzReverse: "",
                    idCard:"",
                },
                //表单验证规则
                rulessfz: {
                    sfzFront: [
                            { required: true, message: "请上传身份证正面照片",validator: validateSfz, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    sfzReverse: [
                            { required: true, message: "请上传身份证反面照片",validator: validateSfz, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    idCard: [
                            { required: true, message: "请输入身份证号", trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                },
            }
        },
        mounted() {
            
        },
        methods: {
            //实名认证保存修改
            async submitcertific(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
                        // console.log(loginInfo)
                        // this.userId = loginInfo.id
                        // console.log(userId)
                        // var {userId,sfzFront,sfzReverse,idCard} = this.ruleFormsfz;
                        // console.log(this.ruleFormsfz)
                        // this.$http.post('/api/certification',{userId:userInfo.id,sfzFront,sfzReverse,idCard}).then((res)=>{
                            this.$http.post('/api/register',{
                                username:JSON.parse(this.$cookie.get("loginInfo")).username,
                                // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                                sfzFront:this.ruleFormsfz.sfzFront,
                                sfzReverse:this.ruleFormsfz.sfzReverse,
                                idCard:this.ruleFormsfz.idCard,
                            }).then((res)=>{
                            var message = res.data.msg.message;
                            // console.log(res)
                            if(message=="成功"){
                                // this.$store.commit('setUserName',this.ruleForm2new.username)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$message.success('成功完成实名认证')
                                this.$router.push('/');
                            }else{
                                this.$message.error(message);
                                return
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        this.$message.error("请确认信息是否有误，照片是否已上传至服务器");
                        return false;
                    }
                })
            },
            /* 上传图片 */
                /* handlesfzFront( filesfzFront){
                    // console.log(filesfzFront)
                    this.$data.uuuFront = true;
                    this.filesfzFront = filesfzFront;
                }, */
                /* 身份证正面 */
            async handlesfzFront (e) {//附件预览----合同及其他扫描件
                    let _this = this
                    // this.$data.uuuFront = true;
                    var filesfzFront = e.target.files[0];
                    console.log(e.target.files[0]);
                    if (!e || !window.FileReader) return  // 看支持不支持FileReader
                    let reader = new FileReader()
                    reader.readAsDataURL(filesfzFront) // 这里是最关键的一步，转换就在这里
                    reader.onloadend = function () {
                        _this.ruleFormsfz.sfzFront = this.result
                    }
                    
                    let wfFormsfzFront = new window.FormData();
                    /*this.files.forEach(file => {
                        wfForm.append('file', file.raw)
                    })*/
                    // if(!this.$data.uuuFront){
                    //     this.$message.error('请先完成选择身份证照片，再点击上传至服务器')
                    //     return
                    // }
                    wfFormsfzFront.append('file', e.target.files[0])
                    // wfFormsfzFront.append('username',JSON.parse(this.$cookie.get("loginInfo")).username)
                    var res=await UserHttp.uploadPic(wfFormsfzFront);
                    // console.log(res.data[0].fileUrl);
                    this.$data.ruleFormsfz.sfzFront = res.data[0].fileUrl
                    this.$message.success('成功上传身份证正面照')
                    // console.log(this.ruleFormsfz);
                },
                handleRemoveFrontpic(file, fileListsfz) {
                    this.$data.uuuFront=false
                    console.log(file, fileListsfz);
                },
            /* 身份证反面 */
            /* handlesfzSuccess( filesfz){
                // console.log(filesfz)
                this.$data.uuu=true;
                this.filesfz = filesfz;
            }, */
            async handlesfzSuccess (e) {//附件预览----合同及其他扫描件
                let _this = this;
                // this.$data.uuu=true;
                var filesfz = e.target.files[0];
                // console.log(e.target.files[0]);
                if (!e || !window.FileReader) return  // 看支持不支持FileReader
                let reader = new FileReader()
                reader.readAsDataURL(filesfz) // 这里是最关键的一步，转换就在这里
                reader.onloadend = function () {
                    _this.ruleFormsfz.sfzReverse = this.result
                }
                
                let wfFormsfz = new window.FormData();
                /*this.files.forEach(file => {
                    wfForm.append('file', file.raw)
                })*/
                // if(!this.$data.uuu){
                //     this.$message.error('请先完成选择身份证照片，再点击上传至服务器')
                //     return
                // }
                wfFormsfz.append('file', e.target.files[0])
                // wfFormsfz.append('username',JSON.parse(this.$cookie.get("loginInfo")).username)
                var res=await UserHttp.uploadPic(wfFormsfz);
                console.log(res.data[0].fileUrl);
                this.$data.ruleFormsfz.sfzReverse = res.data[0].fileUrl
                this.$message.success('成功上传身份证反面照')
            },
            getImgUrl(productImgUrl){
                return this.getBaseImgUrl(productImgUrl)
            },
            handleRemovepic(file, fileListsfz) {
                this.$data.uuu=false
                console.log(file, fileListsfz);
            },
            cancelcertific(){
                console.log("cancelcertific")
            },
        },
    }
</script>

<style scoped>

</style>