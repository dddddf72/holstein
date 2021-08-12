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
                            <div class="el-step__title is-success">技能专长填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">2</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">技能专长填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">身份认证</div>
                            
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
                <div class="stepsContent" style="height:770px;margin-top:70px;position:relative">
                    <div class="stepsContentL" style="width:434px;height:251px;position:absolute;left:0;top:70px">
                        <img src="../../assets/images/regist/02技能专长/组 14(2).png" alt="">
                        <div style="color:#999999;font-size:16px;text-align:center;height:50px;line-height:50px">展示你的技能专长</div>
                    </div>
                    <div class="stepsContentR" style="position:absolute;width:560px;right:0;">
                        <div style="display:flex">
                            <div class="stepsTitle" style="font-size:30px;font-weight:bold;width:130px;height:55px;display:block">
                                技能专长
                            </div>
                            <div  style="margin-left:100px">
                                <el-button v-if="!inputVisible" class="" @click="showInput">添加专长</el-button>
                            </div>
                        </div>
                        
                        <!--<div class="cert-select-tags">
                            <span class="cert-select-tag"> 驾驶证C1 <a href="javascript:;" class="cert-select-remove"></a></span>
                            <span class="cert-select-tag"> 普通话二级甲等 <a href="javascript:;" class="cert-select-remove"></a></span>
                            <span class="cert-select-tag"> 大学英语四级 <a href="javascript:;" class="cert-select-remove"></a></span>
                        </div> -->

                        <div>
                            <el-tag :key="index" class="button-new-tag"
                                v-for="(tag,index) in dynamicTags" style="margin:10px 10px"
                                closable
                                :disable-transitions="false"
                                @close="handleClose(tag)">
                                {{tag.skill}}（{{handleLevel(tag.skillLevel)}}）
                            </el-tag>
                        </div>
                        <el-form class="el-form login-form el-form--label-left" :model="userSkillParams" status-icon :rules="rules1" ref="userSkillParams" v-if="inputVisible">
                            <el-form-item class="el-form-item is-required el-form-item--small" label="技能水平" prop="username">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <el-select  v-model="userSkillParams.skillLevel" placeholder="技能水平" style="margin:20px 0" ref="saveTagInput">
                                                <el-option label="初级" value="1"></el-option>
                                                <el-option label="中级" value="2"></el-option>
                                                <el-option label="高级" value="3"></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                            <el-form-item class="el-form-item is-required el-form-item--small" label="请输入技能名称（例如JAVA）" prop="oldPass">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <el-input class="input-new-tag" style="margin:10px 0"
                                                    v-model="userSkillParams.skill" 
                                                    ref="saveTagInput"  
                                                    placeholder="请输入技能名称（例如JAVA）">
                                    </el-input>
                                </div>
                            </el-form-item>
                        </el-form>
                        <div class="doAdd" style="margin:20px 0">
                            <el-button v-if="inputVisible" @click="doCancel">取消</el-button>
                            <el-button v-if="inputVisible" @click="handleInputConfirm('userSkillParams')">添加</el-button>
                        </div>
                    </div>
                    <div class="nextStepBtn" style="position:absolute;left:40%;top:480px">
                        <el-button style="margin-top: 12px;" @click="$router.back(-1)">上一步</el-button>
                        <el-button style="margin-top: 12px;background-color:#81d8d0" @click="jumpidentyAuth('userSkillParams')">下一步</el-button>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    export default {
        components: {
            Footer
    },
    data() {
        var validateCode = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("选项不能为空"))
            } else {
                callback();
            }
        }
        return {
            active:0,
            dynamicTags: [
                {skill:'欸偶王者', skillLevel:1},
                {skill:'峡谷之巅大师', skillLevel:2},
                {skill:'标签三',skillLevel:3}
            ],
            inputVisible: false,
            //技能
            userSkillParams: {
                skill: "",
                skillLevel:''
            },
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            //表单验证规则
            rules1: {
                skill:[
                    {required:true,message: "请选择技能",validator: validateCode,trigger: "blur"}
                ],
                skillLevel:[
                    {required:true,message: "请选择技能等级",validator: validateCode,trigger: "blur"}
                ]
            },
        }
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
    },
    methods: {
        /*  */
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(()=> {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        async handleInputConfirm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
                    let inputValue = {
                        skill:this.userSkillParams.skill,
                        skillLevel:this.userSkillParams.skillLevel
                    };
                    if (inputValue) {
                        this.dynamicTags.push(inputValue);
                    }
                    this.inputVisible = false;
                    this.userSkillParams = {};
                    console.log(this.dynamicTags)
                }
            })
            
        },
        doCancel(){
            this.$data.inputVisible = false
        },
        handleLevel(ele){
            if(ele = 3){
                return ele = "（高级）"
            }else if(ele = 2){
                return value = "（中级）"
            }else{
                return value = "（初级）"
            }
        },
        /*  */
        async jumpidentyAuth(formName){
            // this.$refs[formName].validate((valid) => {
                // if(valid){
                    this.$http.post('/api/register',{
                        userSkillParams:this.$data.dynamicTags,
                        // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                        username:JSON.parse(this.$cookie.get("loginInfo")).username,
                    }).then((res)=>{
                        var message = res.data.msg.message;
                        // console.log(res.data.biz)
                        if(message=="成功"){
                            // this.$store.commit('setUserName',this.ruleForm2new.username)
                        this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            this.$message.success('成功添加技能专长')
                            this.$router.push('03identityAuth');
                        }else{
                            this.$message.error(message);
                            return
                        }
                    })
            //     }
            // })
        },
        back(){
            // this.$router.push({name:'01BusinessInf'})
            this.$router.go(-1)
        }
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
        height: 770px;
    }
    .merchantRegistration{
        width: 1280px;
        height: 770px;
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
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        height: 45px;
        line-height: 45px;
        background: #81d8d0;
        font-size: 14px;
        color: #fff;
    }

    .cert-select-tags {
        display: flex;
        flex-wrap: wrap;
        width: 88%;
        float: left;
    }
    .cert-select-tags .cert-select-tag {
        white-space: nowrap;
        padding: 0 14px;
        height: 45px;
        line-height: 45px;
        margin: 12px 12px 0 0;
    }
    .cert-select-tags .cert-select-remove {
        width: 16px;
        height: 16px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        margin: -2px -10px 0 8px;
        background: #d0d0d0;
        border-radius: 50%;
    }
    a,a:hover {
        text-decoration: none;
    }
    .cert-select-tags .cert-select-remove:before {
        transform: translate(-50%,-50%) rotate(
    45deg
    );
    }
    .cert-select-tags .cert-select-remove:after {
        transform: translate(-50%,-50%) rotate(
    -45deg
    );
    }
    .cert-select-tags .cert-select-remove:after,.cert-select-tags .cert-select-remove:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 1px;
        background: #fff;
    }
</style>