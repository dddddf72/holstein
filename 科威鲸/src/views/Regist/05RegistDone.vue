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
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 450ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">缴纳保证金</div>
                            
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
                <div class="stepsContent" style="height:600px;margin-top:30px;">
                    <div class="img">
                        <img src="../../assets/images/goodsAdd/组 13@2x.png" alt="">
                    </div>
                    <div class="submitTitle">提交成功</div>
                    <div class="showDetail">商品提交成功，请前往管理商品列表进行商品的上架吧</div>
                    <div class="autoJump">若10秒后没有自动跳转，请点击<a href="">www.baidu.com</a></div>

                    <div class="nextStepBtn">
                        <el-button style="margin-top: 12px;" @click="next">完成注册</el-button>
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
            active:0
        }
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
    },
    methods: {
        next(){
                // this.active = 5
            this.$router.push('/')    
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
    }
    .merchantRegistration{
        width: 1280px;
        margin: 0 auto;
        text-align: center;
    }
    .stepsContent div{
        text-align: center;
        margin: 35px auto 10px auto;
        font-weight: bold;
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
    /*  */
    .submitTitle{
        width: 150px;
        height: 35px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        line-height: 24px;
    }
    .showDetail{
        width: 580px;
        height: 24px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #000000;
        line-height: 24px;
    }
    .autoJump{
        width: 299px;
        height: 15px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #666666;
        line-height: 24px;
    }
    /*  */
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