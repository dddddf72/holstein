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
                
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;margin-top: 30px;">
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
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">身份认证</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 450ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">4</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">缴纳保证金</div>
                            
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
                <div class="stepsContent" style="height:600px;margin-top:30px;position:relative">
                    <div class="stepsContentL" style="width:434px;height:251px;position:absolute;left:0;top:70px">
                        <img src="../../assets/images/regist/02技能专长/组 14(2).png" alt="">
                    </div>
                    <div class="stepsContentR" style="position:absolute;width:560px;height：600px;right:0;">
                        <div class="stepsTitle" style="font-size:30px;font-weight:bold;width:150px;height:55px;display:block">
                            缴纳保证金
                        </div>
                        <el-radio-group v-model="input">
                            <el-radio :label="1000">1000</el-radio>
                            <el-radio :label="20000">2000</el-radio>
                            <el-radio :label="5000">5000</el-radio>
                            <el-radio :label="6000">
                                其他
                                <el-input v-model="input" placeholder="请输入金额" clearable></el-input>
                            </el-radio>
                        </el-radio-group>
                        <div style="color:#999999;font-size:14px;margin-top:15px">注：所缴纳的保证金可随时全额退回。</div>

                        <ul class="cellList" style="list-style: none;padding: 0!important;">
                            <li style="">
                                <span>
                                    <span class="icon-name"></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">未缴纳保证金</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">已缴纳保证金</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单权限</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"><img src="../../assets/images/regist/04缴纳保证金/对号.png" alt=""></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"><img src="../../assets/images/regist/04缴纳保证金/对号.png" alt=""></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单数量</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">1</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"><img src="../../assets/images/regist/04缴纳保证金/无限.png" alt=""></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单总额</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">1000元</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">保证金金额*5</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">可信度标签</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"><img src="../../assets/images/regist/04缴纳保证金/差 (2).png" alt=""></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"><img src="../../assets/images/regist/04缴纳保证金/对号.png" alt=""></span>
                                </span>
                            </li>
                        </ul>
                        
                        <div class="dispalyFlex" style="width:400px;margin:25px auto 0 auto">
                            <el-button >
                                <img src="../../assets/images/regist/04缴纳保证金/微信.png" alt="">
                                微信支付
                            </el-button>
                            <el-button @click="payInzfb">
                                <img src="../../assets/images/regist/04缴纳保证金/支付宝.png" alt="">
                                支付宝支付
                            </el-button>
                        </div>

                    </div>
                    <div class="nextStepBtn" style="position:absolute;left:26%;top:480px">
                        <el-button style="margin-top: 12px;" @click="$router.back(-1)">上一步</el-button>
                        <el-button style="margin-top: 12px;margin-left:30px;background-color:#81d8d0" @click="next">下一步</el-button>
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
        return {
            active:0,
            // radio:5,
            input:'',
            //支付宝扫码支付
            payzfbScan:"",
        }
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
    },
    methods: {
        // async payInzfb(formName) {
            //资金托管
        async payInzfb() {
            // console.log(formName)
            // this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                // if(valid){
                    // var {mobile,msgCode} = this.ruleForm2bdwx;
                    // console.log(this.ruleForm2bdwx)
                    this.$http.post('/api/zfb/trusteeship',{
                        "userId":15,
                        "serviceId":1,
                        "amount":0.01
                    }).then((res)=>{
                        // var message = res.data.msg.message;
                        var payzfbScan = res.data.biz
                        // if(message=="成功"){
                            this.$message.success('请扫描二维码完成支付')
                            window.location.href = payzfbScan
                            // this.$router.push('/');
                            // this.$data.wechatScan = wechatScan
                        // }else{
                            // this.$message.error('手机号码或验证码错误');
                        // }
                    })
                // }else{
                //     console.log('error submit!!');
                //     return false;
                // }
            // })
        },
        back(){
            this.$router.push('/03identityAuth') 
        },
        next(){
            // var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
            // console.log(userInfo)
            this.$http.post('/api/register',{
                username:JSON.parse(this.$cookie.get("loginInfo")).username,
                // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                bailAmount:this.input,
                // idCard:this.ruleFormsfz.idCard,
            }).then((res)=>{
                var message = res.data.msg.message;
                // console.log(res)
                if(message=="成功"){
                    // this.$store.commit('setUserName',this.ruleForm2new.username)
                    this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                    // this.$message.success('成功完成实名认证')
                    this.$router.push('/05RegistDone');
                }else{
                    this.$message.error(message);
                    return
                }
            })
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
    .cellList{
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        margin-top: 20px;
        width: 580px;
        height: 296px;
        border-left: 1px solid #eaeefb;
        border-right: 1px solid #eaeefb;
        border-top: 1px solid #eaeefb;
        border-radius: 4px;
    }
    .cellList li i{
        display: block;
    }
    .cellList li{
        float: left;
        width: 33.33%;
        text-align: center;
        height: 58px;
        line-height: 58px;
        color: #666;
        font-size: 13px;
        margin-right: -1px;
        border-bottom: 1px solid #eaeefb;
    }
    .cellList li:nth-child(3n+2){
        border-left: 1px solid #eaeefb;
        border-right: 1px solid #eaeefb;
    }
    .cellList li span {
        line-height: normal;
    }
    .cellList li:after, .cellList li span {
        display: inline-block;
        vertical-align: middle;
    }
    .payBtn .el-button--primary{
        color: #666666;
        width: 140px;
        height: 45px;
        line-height: 20px;
        text-align: center;
        background: transparent;
        border-color:#999999 ;
    }
</style>