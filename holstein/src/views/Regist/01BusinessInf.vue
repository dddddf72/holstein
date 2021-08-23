<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center">
                <div class="navTitleContext center">
                <router-link to="/">
                    <span class="capa">LOGO </span>
                    <span>HELSTEIN</span>
                </router-link>
                    <span class="welTxt">商家注册</span>
                </div>
            </div>
        </div>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div
                    data-v-270d2505=""
                    class="el-steps el-steps--horizontal"
                    style="
                        height: 110px;
                        margin-top: 30px;
                        justify-content: space-between;
                        align-items: center;
                    "
                >
                    <div
                        data-v-270d2505=""
                        class="el-step is-horizontal is-center"
                        style="flex-basis: 20%; margin-right: 0px"
                    >
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px">
                                <i
                                    class="el-step__line-inner"
                                    style="transition-delay: 0ms; "
                                ></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner">1</i>
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-process">商家信息填写</div>
                        </div>
                    </div>
                    <div
                        data-v-270d2505=""
                        class="el-step is-horizontal is-center"
                        style="flex-basis: 20%; margin-right: 0px"
                    >
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px">
                                <i
                                    class="el-step__line-inner"
                                    style="transition-delay: 150ms; border-width: 1px; width: 0%"
                                ></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">技能专长填写</div>
                        </div>
                    </div>
                    <div
                        data-v-270d2505=""
                        class="el-step is-horizontal is-center"
                        style="flex-basis: 20%; margin-right: 0px"
                    >
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px">
                                <i
                                    class="el-step__line-inner"
                                    style="transition-delay: 300ms; border-width: 1px; width: 100%"
                                ></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">身份认证</div>
                        </div>
                    </div>
                    <div
                        data-v-270d2505=""
                        class="el-step is-horizontal is-center"
                        style="flex-basis: 20%; margin-right: 0px"
                    >
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px">
                                <i
                                    class="el-step__line-inner"
                                    style="transition-delay: 450ms; border-width: 1px; width: 100%"
                                ></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">缴纳保证金</div>
                        </div>
                    </div>
                    <div
                        data-v-270d2505=""
                        class="el-step is-horizontal is-center"
                        style="flex-basis: 20%; max-width: 20%"
                    >
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
                <div class="stepsContent">
                    <div
                        class="approve-panel"
                        style="display: flex; margin-top: 30px; justify-content: space-between"
                    >
                        <el-form ref="form" :model="businessInf">
                            <el-form-item
                                style="
                                    font-size: 18px;
                                    font-weight: bold;
                                    width: 130px;
                                    height: 55px;
                                    display: block;
                                "
                                >基本信息</el-form-item
                            >
                            <el-form-item label="头像">
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
                                            businessInf.headPhoto === '' ||
                                            businessInf.headPhoto === null
                                        "
                                        src="@/assets/images/regist/商家信息/组 14(1).png"
                                        width="145px"
                                        height="145px"
                                    />
                                    <img
                                        v-else
                                        :src="getImgUrl(businessInf.headPhoto)"
                                        width="150px"
                                        height="150px"
                                    />
                                </el-upload>
                                <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
                                    <img width="300px" height="300px" :src="dialogContImgUrl" />
                                </el-dialog>
                            </el-form-item>

                            <el-form-item label="用户名">
                                <div ng-bind="authInfo.userType" class="ng-binding ng-scope">
                                    <div style="display: inline-block">
                                        {{ this.$data.username }}（自动生成）
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item label="昵称">
                                <!-- <div style="vertical-align: top"> -->
                                    <div  class="ng-binding ng-scope">
                                        <el-input
                                            type="text"
                                            v-model="businessInf.name"
                                            style="width: 420px; height: 40px"
                                        ></el-input>
                                    </div>
                                <!-- </div> -->
                            </el-form-item>
                            <el-form-item label="接单时间">
                                <div class="ng-binding ng-scope">
                                    <el-radio v-model="businessInf.acceptTime" :label="1"
                                        >全天</el-radio
                                    >
                                    <el-radio v-model="businessInf.acceptTime" :label="2"
                                        >仅工作日</el-radio
                                    >
                                </div>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <div>
                                    {{ this.$data.username | telHide }}
                                </div>
                            </el-form-item>
                            <el-form-item label="简介">
								<div class="ng-binding ng-scope">
									<el-input
										type="textarea"
										v-model="businessInf.intro"
										placeholder="请告诉我们您的喜好、专业知识或者其他你想展示的内容。（不低于150字）"
										style="width: 520px; height: 120px"
									></el-input>
								</div>
                            </el-form-item>
                        </el-form>
                        <div class="approve-seal">
                            <img src="../../assets/images/regist/注册/Agreements.png" style="width:700px;height: 479px;" alt="" />
                        </div>
                    </div>
                    <div class="nextStepBtn" style="margin: 50px auto; width: 200px">
                        <el-button
                            style="margin-top: 12px;cursor:pointer; margin-left: 30px; background-color: #81d8d0"
                            @click="JumpSkillExp()"
                            >下一步</el-button
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer/footer.vue';
import UserHttp from '@/model/UserHttp';
export default {
    components: {
        Footer
    },
    data() {
        var validatePhone = (rule, value, callback) => {
            const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (value === '' || value === undefined || value == null) {
                callback();
            } else {
                if (!reg.test(value) && value !== '') {
                    callback(new Error('请输入正确的电话号码'));
                } else {
                    callback();
                }
            }
        };
        //修改密码
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            } else {
                //数字大小写字母特殊字符组成，长度不能小于6
                var reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/;
                if (!reg.test(value)) {
                    callback(new Error('密码必须包含数字,大小写字母,特殊字符,至少8位,最多16位'));
                } else {
                    callback();
                }

                // if (this.ruleForm1.confirmPass !== "") {
                //     this.$refs.ruleForm1.validateField("confirmPass");
                // }
                //     callback();
            }
        };
        var validateCheckPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm1.newPass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var validateCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('验证码不能为空'));
            } else if (value.length < 4) {
                callback(new Error('验证码长度不能小于4位!'));
            } else {
                callback();
            }
        };
        var validEmail = (rule, value, callback) => {
            const reg =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value === '' || value === undefined || value == null) {
                callback();
            } else {
                if (!reg.test(value) && value !== '') {
                    callback(new Error('请输入正确的邮箱号码'));
                } else {
                    callback();
                }
            }
        };
        return {
            //上传头像
            hideUpload: false,
            imageList: [],
            dialogContImgVisible: false,
            dialogContImgUrl: '',
            //
            active: 0,
            disabled: false,
            businessInf: {
                headPhoto: null,
                intro: '',
                name: '',
                openId: '',
                zfbId: '',
                acceptTime: 1,
                userId: JSON.parse(this.$cookie.get('loginInfo')).id
            },
            /*  */
            username: JSON.parse(this.$cookie.get('loginInfo')).username,
            userId: JSON.parse(this.$cookie.get('loginInfo')).id,
            loginInfo: JSON.parse(this.$cookie.get('loginInfo')),
            step1: true,
            step2: false,
            step3: false,
            ruleForm1: {
                username: '',
                newPass: '',
                confirmPass: ''
            },
            //表单验证规则
            rules1: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                    //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                ],
                newPass: [{ required: true, validator: validatePass, trigger: 'blur' }],
                confirmPass: [{ required: true, validator: validateCheckPass, trigger: 'blur' }]
            },
            ruleForm2old: {
                mobile: '',
                msgCode: '',
                msgType: 4
            },
            rules2old: {
                mobile: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                ],
                msgCode: [{ required: true, validator: validateCode, trigger: 'blur' }]
            },
            ruleForm2new: {
                username: '',
                code: '',
                msgType: 4
            },
            rules2new: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                ],
                code: [{ required: true, validator: validateCode, trigger: 'blur' }]
            },
            ruleForm2bdwx: {
                mobile: '',
                msgCode: '',
                msgType: 6
            },
            rules2bdwx: {
                mobile: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                ],
                msgCode: [{ required: true, validator: validateCode, trigger: 'blur' }]
            },
            ruleForm2bdzfb: {
                mobile: '',
                msgCode: '',
                msgType: 6
            },
            rules2bdzfb: {
                mobile: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                ],
                msgCode: [{ required: true, validator: validateCode, trigger: 'blur' }]
            },
            /*  */
            ruleForm2bdyx: {
                username: '',
                fromEmail: '',
                code: ''
            },
            rules2bdyx: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        validator: validatePhone,
                        trigger: 'blur'
                    }
                ],
                fromEmail: [
                    {
                        required: true,
                        message: '请输入邮箱',
                        validator: validEmail,
                        trigger: 'blur'
                    }
                ],
                code: [
                    {
                        required: true,
                        message: '请输入邮箱验证码',
                        validator: validateCode,
                        trigger: 'blur'
                    }
                ]
            },
            //修改手机号
            visibleChangeMobile: false,
            //旧密码
            visiblepwd: false,
            //微信绑定
            visibleChangewx: false, //绑定认证
            wxbd: Boolean(JSON.parse(this.$cookie.get('loginInfo')).openId),
            wechatScan: '',
            //支付宝绑定
            visibleChangezfb: false,
            zfbbd: Boolean(JSON.parse(this.$cookie.get('loginInfo')).zfbId),
            zfbScan: '',
            //邮箱绑定
            visibleChangeyx: false, //绑定认证
            yxbd: Boolean(JSON.parse(this.$cookie.get('loginInfo')).email)
            //
        };
    },
    mounted() {
        var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
        console.log(userInfo);
        // console.log(this.$data.userId)
    },
    methods: {
        /* 修改基本信息下一步 */
        JumpSkillExp() {
            // '/movie/:id', (`/film/${id}`)
            // this.$router.push('/02skillExp')
            // this.$router.push({name:'02skillExp',params:{id:123}})
            // var userInfo = JSON.parse(this.$cookie.get("loginInfo"));
            // console.log(userInfo)
            this.$http
                .post('/api/register', {
                    headPhoto: this.businessInf.headPhoto,
                    username: JSON.parse(this.$cookie.get('loginInfo')).username,
                    // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                    name: this.businessInf.name,
                    // openId:"",
                    // zfbId:"",
                    intro: this.businessInf.intro,
                    acceptTime: this.businessInf.acceptTime
                })
                .then((res) => {
                    var message = res.data.msg.message;
                    // console.log(res.data)
                    if (message == '成功') {
                        // this.$store.commit('setUserName',this.ruleForm2new.username)

                        this.$cookie.set('loginInfo', JSON.stringify(res.data.biz));
                        // this.$message.success('成功修改基本信息')
                        this.$router.push('/02skillExp');
                    } else {
                        this.$message.error(message);
                        return;
                    }
                });
        },
        //上传头像
        aab: function (file, fileList) {
            // var url = file.url;
            // this.businessInf.headPhoto = file.url.split(9000)[1];
            this.hideUpload = fileList.length >= 0;
        },
        //【图片删除事件】
        handleContImgRemove: function (file, fileList) {
            this.hideUpload = fileList.length >= 1;
            this.businessInf.headPhoto = null;
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
                this.businessInf.headPhoto = res.data[0].fileUrl;
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
        async msgCodeParamLogin(username, code) {
            await UserHttp.msgCodeLogin(username, code);
        },
        /* 修改密码 */
        async submitForm(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if (valid) {
                    // console.log(this.ruleForm1)
                    // var {username,newPass,confirmPass} = this.ruleForm1;
                    var { username, oldPass, newPass, confirmPass } = this.ruleForm1;
                    console.log(this.ruleForm1);
                    // this.$http.post('/api/user/center/updateUserInfo',{username,oldPass,newPass,confirmPass}).then((res)=>{
                    this.$http
                        .post('/api/snailUser/updatePass', {
                            username,
                            oldPass,
                            newPass,
                            confirmPass
                        })
                        .then((res) => {
                            console.log(res.data.biz);
                            var message = res.data.msg.message;
                            // console.log(message)
                            if (message == '成功') {
                                this.$store.commit('setUserName', this.ruleForm1.username);
                                this.$message.success('修改密码成功');
                                this.$cookie.set('loginInfo', JSON.stringify(res.data.biz));
                                this.$router.push('/');
                            } else {
                                this.$message.error(message);
                            }
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //修改手机号下一步
        async next(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.active == 0) {
                        this.step1 = true;
                        this.step2 = false;
                        this.step3 = false;
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                                var { mobile, msgCode } = this.ruleForm2old;
                                // console.log(this.ruleForm2old)
                                this.msgCodeParamLogin(
                                    this.ruleForm2old.mobile,
                                    this.ruleForm2old.msgCode
                                );
                                this.$http
                                    .post('/api/msgCode/verify', { mobile, msgCode })
                                    .then((res) => {
                                        var message = res.data.msg.message;
                                        if (message == '成功') {
                                            this.$message.success('成功验证手机号');
                                            this.active++;
                                            this.step1 = false;
                                            this.step2 = true;
                                            this.step3 = false;
                                        } else {
                                            this.$message.error(message);
                                            return false;
                                        }
                                    });
                            } else {
                                this.$message.success('请完成验证旧手机号');
                                return false;
                            }
                        });
                    }
                    if (this.active == 1) {
                        //第二步
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                                var { username, code } = this.ruleForm2new;
                                // console.log(this.ruleForm2new)
                                // await UserHttp.msgCodeLogin(username,code);
                                this.msgCodeParamLogin(
                                    this.ruleForm2new.username,
                                    this.ruleForm2new.code
                                );
                                this.active++;
                                this.$message.success('请完成验证新手机号');
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                    } else if (this.active == 2) {
                        //第二步
                        var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
                        // this.userId = userInfo.id
                        var { username, code, userId } = this.ruleForm2new;
                        console.log(this.ruleForm2new);
                        // this.$http.post('/api/updateMobile',{username,userId:userInfo.id,code}).then((res)=>{
                        this.$http
                            .post('/api/updateMobile', { username, userId, code })
                            .then((res) => {
                                var message = res.data.msg.message;
                                // console.log(res)
                                if (message == '成功') {
                                    this.step1 = false;
                                    this.step2 = false;
                                    this.step3 = true;
                                    this.$cookie.set('loginInfo', JSON.stringify(res.data.biz));
                                    this.$message.success('成功修改手机号');
                                    this.active++;
                                } else {
                                    this.$message.error(message);
                                    return;
                                }
                            });
                    } else if (this.active >= 3) {
                        //第二步
                        this.step1 = false;
                        this.step2 = false;
                        this.step3 = true;
                        this.visibleChangeMobile = false;
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            // ++this.active;
            // console.log(this.active)//1
            // if(this.active ==0){
            //     this.step1 =true;
            //     this.step2 =false;
            //     this.step3 =false;
            // }else if(this.active ==1){
            //     this.step1 =false;
            //     this.step2 =true;
            //     this.step3 =false;
            // }else if(this.active ==2){
            //     this.step1 =false;
            //     this.step2 =false;
            //     this.step3 =true;
            // }else{
            //     // this.visibleChangeMobile = false
            // }
        },
        //微信扫码确认绑定确认
        async confirmwxbd(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if (valid) {
                    var { mobile, msgCode } = this.ruleForm2bdwx;
                    // console.log(this.ruleForm2bdwx)
                    this.$http.post('/api/weixin/bind', { mobile, msgCode }).then((res) => {
                        console.log(res.data);
                        var message = res.data.msg.message;
                        var wechatScan = res.data.biz;
                        if (message == '成功') {
                            // this.$store.commit('setUserName',this.ruleForm2bdwx.mobile)
                            this.$message.success('请扫描二维码完成绑定');
                            window.location.href = wechatScan;
                            // window.open(wechatScan,"_blank")
                        } else {
                            // this.$message.error('手机号码或验证码错误');
                            this.$message.error(message);
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //点击支付宝扫码确认绑定确认
        async confirmzfbbd(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if (valid) {
                    var { mobile, msgCode } = this.ruleForm2bdzfb;
                    // console.log(this.ruleForm2bdwx)
                    this.$http.post('/api/zfb/bind', { mobile, msgCode }).then((res) => {
                        var message = res.data.msg.message;
                        var zfbScan = res.data.biz;
                        if (message == '成功') {
                            // this.$store.commit('setUserName',this.ruleForm2bdzfb.mobile)
                            this.$message.success('请扫描下方二维码完成绑定');
                            // this.$router.push('/');
                            this.$data.zfbScan = zfbScan;
                        } else {
                            this.$message.error('手机号码或验证码错误');
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        /* 解除绑定cancelBind */
        cancelwxBind() {
            this.$http.post('/api/weixin/unbind', { userId: this.userId }).then((res) => {
                var message = res.data.msg.message;
                console.log(message);
                if (message == '成功') {
                    this.$message.success('成功解绑');
                    this.$data.wxbd = !this.$data.wxbd;
                }
            });
        },
        cancelzfbBind() {
            this.$http.post('/api/zfb/unbind', { userId: this.userId }).then((res) => {
                var message = res.data.msg.message;
                console.log(res.data);
                if (message == '成功') {
                    this.$message.success('成功解绑');
                    this.$data.zfbbd = !this.$data.zfbbd;
                }
            });
        },
        //邮箱绑定获取验证码
        async mailbd(fromEmail) {
            // console.log(fromEmail)
            if(fromEmail ==null || fromEmail == undefined || fromEmail == '' ){
                  this.$message.error('请先输入邮箱')
                  return false 
                }
            var res = await UserHttp.mailbd(fromEmail);
            var message = res.data.msg.message;
            // console.log(message)
            if (message == '成功') {
                this.$message.success('成功发送验证码至邮箱');
            }
            // console.log(res.data.msg.message)//发送成功
        },
        async getyxbd(formName) {
            // console.log(formName)
            this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                if (valid) {
                    // var {username,fromEmail,code} = this.ruleForm2bdyx
                    // console.log(this.ruleForm2bdyx)
                    this.$http
                        .post('api/boundEmail', {
                            username: this.ruleForm2bdyx.username,
                            fromEmail: this.ruleForm2bdyx.fromEmail,
                            code: this.ruleForm2bdyx.code
                        })
                        .then((res) => {
                            // console.log(res)
                            var message = res.data.msg.message;
                            console.log(message);
                            if (message == '成功') {
                                this.$message.success('成功绑定邮箱');
                                this.visibleChangeyx = false;
                                this.yxbd = true;
                            }
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            // console.log(res.data.msg.message)//发送成功
        },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        }
    }
};
</script>

<style scoped>
.home {
    width: 100%;
}
.center {
    margin: 0 320px;
}
/*  */
.firstNav {
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-shadow: 0px -3px 15px 3px #606266;
}
.navCenter {
    width: 1280px;
    height: 100px;
    position: relative;
}
.logo {
    width: 260px;
    height: 100px;
    vertical-align: middle;
    text-align: center;
}
.logo img {
    width: 260px;
    height: 21px;
}
/*  */
.navTitleContext {
    width: 1280px;
    height: 104px;
    display: flex;
    position: absolute;
    line-height: 100px;
    margin: 0 0 0 10px;
    font-weight: bold;
    font-size: 24px;
}

.navTitleContext .capa {
    color: #97bfd5;
}
.navTitleContext .welTxt {
    margin-left: 30px;
}
.navTitleContext span {
    color: #333;
    margin-left: 10px;
}
.navTitleContext span:nth-child(2) {
    color: #999999;
}
.firstNavR {
    display: flex;
    position: absolute;
    top: 13px;
    right: 0;
}
.firstNavR div {
    margin: 0 14px;
}
.businessCenter {
    width: 76px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    background: url('../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
    font-size: 14px;
    color: #ffffff;
}
.shortLine {
    width: 1px;
    height: 9px;
}
.searchImg .loginImg {
    width: 20px;
    height: 20px;
}
.loginImg el-icon-bell,
.loginImg img {
    display: inline-block;
    font-size: 1.5em;
    width: 20px;
    height: 20px;
}
[class*=' el-icon-'],
[class^='el-icon-'] {
    color: #cdcdcd;
    font-family: element-icons !important;
    font-style: normal;
}
/*  */
.merchantRegist {
    width: 100%;
}
.merchantRegistration {
    width: 1280px;
    margin: 20px auto;
}
.el-step__head.is-process {
    color: #303133 !important;
    border-color: #303133 !important;
}
.el-step__head.is-success,
.el-step__title.is-success {
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

<style>
.hide .el-upload--picture-card {
    display: none;
}
</style>