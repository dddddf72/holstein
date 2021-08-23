<template>
    <div style="width:970px">
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
                                                    width="150px"
                                                    height="150px"
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
                                                    :before-upload="beforeUploadImagesfzReverse"
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
                                                        width="150px"
                                                        height="150px"
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
                user:"",
                userId:"",
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
                            { required: true, message: "请输入身份证号",validator:validateIdNo, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                },
            }
        },
        mounted() {
            // var userId = this.getUrlParam("userId")
            // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
            if(JSON.parse(this.$cookie.get("loginInfo"))){
                    this.user = JSON.parse(this.$cookie.get("loginInfo"));
                    // this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                    // this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                    // this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                    if(this.user){
                        this.userId = this.user.id
                    }
            }
        },
        methods: {
            //实名认证保存修改
            async submitcertific(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
                        // this.userId = loginInfo.id
                        // var {userId,sfzFront,sfzReverse,idCard} = this.ruleFormsfz;
                        // this.$http.post('/api/certification',{userId:userInfo.id,sfzFront,sfzReverse,idCard}).then((res)=>{
                            this.$http.post('/api/register',{
                                username:JSON.parse(this.$cookie.get("loginInfo")).username,
                                // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                                sfzFront:this.ruleFormsfz.sfzFront,
                                sfzReverse:this.ruleFormsfz.sfzReverse,
                                idCard:this.ruleFormsfz.idCard,
                            }).then((res)=>{
                            var message = res.data.msg.message;
                            if(message=="成功"){
                                // this.$store.commit('setUserName',this.ruleForm2new.username)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$message.success('成功完成实名认证')
                                this.$router.push('/');
                            }else{
                                this.$message.error(message);
                                return false
                            }
                        })
                    }else{
                        this.$message.error("未成功上传，请重试");
                        return false;
                    }
                })
            },
            //上传身份证正面
            
			aab: function (file, fileList) {
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
            this.$http.post('api/uploadImage', form).then((res) => {
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
            handleRemovepic(file, fileListsfz) {
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