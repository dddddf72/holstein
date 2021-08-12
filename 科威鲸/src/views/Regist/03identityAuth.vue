<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <!-- <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""> -->
                    <div class="navTitleContext center">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                            <span class="welTxt">商家注册</span>
                    </div>
            </div>
        </div>
        <!--<div class="pwdReset">
        
        </div> -->
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <!-- <el-steps :active="active" align-center process-status="process" finish-status="success">
                    <el-step title="商家信息填写" ></el-step>
                    <el-step title="技能专长填写" ></el-step>
                    <el-step title="身份认证" ></el-step>
                    <el-step title="缴纳保证金" ></el-step>
                    <el-step title="完成注册" ></el-step>
                </el-steps> -->
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;margin-top: 70px;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/商家信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">商家信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">技能专长填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">3</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">身份认证</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 450ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">缴纳保证金</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; max-width: 20%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">完成注册</div>
                            
                        </div>
                    </div>
    </div>
                <div class="stepsContent dispalyFlex">
                    <div class="approve-panel" style="margin-top: 30px;">
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
                    </div>
                    <div class="approve-seal">
                        <img src="../../assets/images/regist/商家信息/组 14(2).png" alt="">
                    </div>
                </div>
                <div class="nextStepBtn" style="margin:50px auto;width:200px">
                    <el-button style="margin-top: 12px;" @click="$router.back(-1)">上一步</el-button>
                    <el-button style="margin-top: 12px;margin-left:30px;background-color:#81d8d0" @click="submitcertific('ruleFormsfz')">下一步</el-button>
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
    data() {
        var validatesfz = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请上传身份证照片"))
            } else {
                callback();
            }
        }
        return {
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            username:JSON.parse(this.$cookie.get("loginInfo")).username,
            //实名认证
            ruleFormsfz: {
                sfzFront: "",
                sfzReverse: "",
                idCard:"",
            },
            //表单验证规则
            rulessfz: {
                sfzFront: [
                        { required: true, message: "请上传身份证正面照片",validator: validatesfz, trigger: "blur" },
                    //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                ],
                sfzReverse: [
                        { required: true, message: "请上传身份证反面照片",validator: validatesfz, trigger: "blur" },
                    //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                ],
                idCard: [
                        { required: true, message: "请输入身份证号", trigger: "blur" },
                    //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                ],
            },
            /*  */
            active:0,
            imageUrl: '',
            //上传图片板块 移除图片
            disabled: false,
        }
    },
    mounted() {
        // var userId = this.getUrlParam("userId")
        // console.log(userId)
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
    },
    methods: {
        back(){
            this.$router.push({name:'02skillExp'}) 
        },
        async submitcertific(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    // var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                    // console.log(userInfo)
                    this.$http.post('/api/register',{
                        username:JSON.parse(this.$cookie.get("loginInfo")).username,
                        // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                        sfzFront:this.ruleFormsfz.sfzFront,
                        sfzReverse:this.ruleFormsfz.sfzReverse,
                        idCard:this.ruleFormsfz.idCard,
                    }).then((res)=>{
                        var message = res.data.msg.message;
                        // console.log(res.data.biz)
                        if(message=="成功"){
                            // this.$store.commit('setUserName',this.ruleForm2new.username)
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            this.$message.success('成功完成实名认证')
                            this.$router.push('/04deposit');
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
        
        /*  */
        // handlePictureCardPreview(file) {
        //     this.imageavatarUrl = file.url;
        //     this.dialogavatarVisible = true;
        // },
        /* 上传图片 */
        /* handlesfzFront( filesfzFront){
            // console.log(filesfzFront)
            this.$data.uuuFront = true;
            this.filesfzFront = filesfzFront;
        }, */
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
        /*  */
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
            console.log(e.target.files[0]);
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
        handleRemovepic(file, fileListsfz) {
            this.$data.uuu=false
            console.log(file, fileListsfz);
        },
        getImgUrl(productImgUrl){
            return this.getBaseImgUrl(productImgUrl)
        },
        
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        // handlePreview(file) {
            //点击上传的图片
        //     console.log(file);
        // },
        // handleExceed(files, fileList) {
        //     this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        // },
        // beforeRemove(file, fileList) {
        // beforeRemove(file) {
        //     return this.$confirm(`确定移除 ${ file.name }？`);
        // },
        /*  */

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
    .merchantRegist{
        width: 100%;
    }
    .merchantRegistration{
        width: 1280px;
        margin: 0 auto;
    }
    .el-step__head.is-process {
        color: #303133 !important;
        border-color: #303133 !important;
    }
    .el-step__head.is-success,.el-step__title.is-success {
        color: #81d8d0 !important;
        border-color: #81d8d0 !important;
    }
    /*  */
    .ti-form .ti-form-label {
        padding: 5px 20px 26px 0;
        color: #575d6c;
        font-size: 14px;
    }
</style>