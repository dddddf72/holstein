<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                    <div class="navTitleContext center">
                        <router-link to="/">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                        </router-link>
                            <span class="welTxt">商家注册</span>
                    </div>
            </div>
        </div>
        
        <div class="merchantRegist">
            <div class="merchantRegistration">
                
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;margin-top: 70px;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
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
                                                <div data-v-1c9bbdc3="" data-v-a72aa574="" prop="sfzFront">
                                                    <el-upload
                                                        action="http://api.woniuskill.com/api/uploadImage"
                                                        list-type="picture-card"
                                                        accept=".jpg,.jpeg,.png"
                                                        :class="{ hide: hideUpload }"
                                                        :on-preview="handleContImgPreview"
                                                        :on-remove="handleContImgRemove"
                                                        :before-upload="beforeUploadImage"
                                                        :limit="1"
                                                        :on-exceed="exceedTips"
                                                        :http-request="uploadImage"
                                                        :file-list="imageList"
                                                        :on-change="aab"
                                                    >
                                                        <!-- <i class="el-icon-plus"></i> -->
                                                        <img
                                                            v-if="
                                                                ruleFormsfz.sfzFront === '' ||
                                                                ruleFormsfz.sfzFront === null
                                                            "
                                                            src="@/assets/images/regist/商家信息/组 14(1).png"
                                                            width="145px"
                                                            height="145px"
                                                        />
                                                        <img
                                                            v-else
                                                            :src="getImgUrl(ruleFormsfz.sfzFront)"
                                                            width="150px"
                                                            height="150px"
                                                        />
                                                    </el-upload>
                                                    <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
                                                        <img width="300px" height="300px" :src="dialogContImgUrl" />
                                                    </el-dialog>
                                                </div>
                                        </div>
                                </el-form-item>
                                <el-form-item class="el-form-item is-required el-form-item--small" label="身份证反面" prop="sfzReverse">
                                        <div class="el-form-item__content" style="vertical-align: top;display:flex"> 
                                            <div data-v-1c9bbdc3="" data-v-a72aa574="" prop="sfzReverse">
                                                <el-upload
                                                    action="http://api.woniuskill.com/api/uploadImage"
                                                    list-type="picture-card"
                                                    accept=".jpg,.jpeg,.png"
                                                    :class="{ hide: hideUploadsfzReverse }"
                                                    :on-preview="handleContImgPreviewsfzReverse"
                                                    :on-remove="handleContImgRemovesfzReverse"
                                                    :limit="1"
                                                    :on-exceed="exceedTips"
                                                    :http-request="uploadImagesfzReverse"
                                                    :file-list="imageListsfzReverse"
                                                    :on-change="aabsfzReverse"
                                                >
                                                    <!-- <i class="el-icon-plus"></i> -->
                                                    <img
                                                        v-if="
                                                            ruleFormsfz.sfzReverse === '' ||
                                                            ruleFormsfz.sfzReverse === null
                                                        "
                                                        src="@/assets/images/regist/商家信息/组 14(1).png"
                                                        width="145px"
                                                        height="145px"
                                                    />
                                                    <img
                                                        v-else
                                                        :src="getImgUrl(ruleFormsfz.sfzReverse)"
                                                        width="150px"
                                                        height="150px"
                                                    />
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogContImgVisiblesfzReverse" append-to-body>
                                                    <img width="300px" height="300px" :src="dialogContImgUrlsfzReverse" />
                                                </el-dialog>
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
                                </el-form>
                    </div>
                    <div class="approve-seal">
                        <img src="../../assets/images/regist/注册/ECommerce.png" alt="" style="width:700px;height: 479px;">
                    </div>
                </div>
                <div class="nextStepBtn" style="margin:50px auto;width:200px;cursor:pointer">
                    <el-button style="margin-top: 12px;" @click="$router.back(-1)">上一步</el-button>
                    <el-button style="margin-top: 12px;margin-left:30px;background-color:#81d8d0" @click="submitcertific('ruleFormsfz')">下一步</el-button>
                </div> 
            </div>
        </div>
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
        var validatesfz = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请上传身份证照片"))
            } else {
                callback();
            }
        }
        var validateIdNo = (rule,value,callback)=>{
            const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            if (value === '' || value === undefined || value == null) {
                callback()
            } else {
                if ((!reg.test(value)) && value !== '') {
                callback(new Error('请输入正确的身份证号码'))
                } else {
                callback()
                }
            }
        }
        
        return {
            hideUpload: false,
				imageList:[],
				dialogContImgVisible: false,
				dialogContImgUrl: '',
                
                hideUploadsfzReverse:false,
				imageListsfzReverse:[],
				dialogContImgVisiblesfzReverse: false,
				dialogContImgUrlsfzReverse: '',
                //
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            username:JSON.parse(this.$cookie.get("loginInfo")).username,
            ruleFormsfz: {
                sfzFront: "",
                sfzReverse: "",
                idCard:"",
            },
            rulessfz: {
                sfzFront: [
                        { required: true, message: "请上传身份证正面照片",validator: validatesfz, trigger: "blur" },
                ],
                sfzReverse: [
                        { required: true, message: "请上传身份证反面照片",validator: validatesfz, trigger: "blur" },
                ],
                idCard: [
                        { required: true, message: "请输入身份证号",validator:validateIdNo, trigger: "blur" },
                ],
            },
            active:0,
            imageUrl: '',
            disabled: false,
        }
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
    },
    methods: {
        back(){
          this.$router.go(-1)
        },
        async submitcertific(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$http.post('/api/register',{
                        username:JSON.parse(this.$cookie.get("loginInfo")).username,
                        sfzFront:this.ruleFormsfz.sfzFront,
                        sfzReverse:this.ruleFormsfz.sfzReverse,
                        idCard:this.ruleFormsfz.idCard,
                    }).then((res)=>{
                        var message = res.data.msg.message;
                        if(message=="成功"){
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            // this.$message.success('成功完成实名认证')
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
        //上传身份证正面
            
			aab: function (file, fileList) {
            // var url = file.url;
            // this.ruleFormsfz.sfzFront = file.url.split(9000)[1];
            this.hideUpload = fileList.length >= 0;
        },
        //【图片删除事件】
        handleContImgRemove: function (file, fileList) {
            this.hideUpload = fileList.length >= 1;
            this.ruleFormsfz.sfzFront = null;
        },
        //【判断图片格式】
        beforeUploadImage(file) {
            if (['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的图片格式');
                return false;
            }
        },
        //上传头像
        uploadImage(params) {
            let form = new FormData();
            form.append('image', params.file);
            this.$http.post('/api/uploadImage', form).then((res) => {
                this.ruleFormsfz.sfzFront = res.data[0].fileUrl;
            });
        },
        //控制图片张数
        exceedTips: function () {
            this.$message.error('最多只能上传1张图片');
        },
        //【内容图片预览事件】
        handleContImgPreview: function (file) {
            this.dialogContImgUrl = file.url;
            this.dialogContImgVisible = true;
        },

        //上传身份证反面
        aabsfzReverse: function (file, fileList) {
            // var url = file.url;
            // this.ruleFormsfz.sfzReverse = file.url.split(9000)[1];
            this.hideUploadsfzReverse = fileList.length >= 0;
        },
        //【图片删除事件】
        handleContImgRemovesfzReverse: function (file, fileList) {
            this.hideUploadsfzReverse = fileList.length >= 1;
            this.ruleFormsfz.sfzReverse = null;
        },
        //上传头像
        uploadImagesfzReverse(params) {
            let form = new FormData();
            form.append('image', params.file);
            this.$http.post('api/uploadImage', form).then((res) => {
                this.ruleFormsfz.sfzReverse = res.data[0].fileUrl;
            });
        },
        //【内容图片预览事件】
        handleContImgPreviewsfzReverse: function (file) {
            this.dialogContImgUrlsfzReverse = file.url;
            this.dialogContImgVisiblesfzReverse = true;
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