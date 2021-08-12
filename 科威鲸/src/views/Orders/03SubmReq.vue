<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center" style="display:flex;justify-content:space-between;align-items:center">
                    <!-- <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""> -->
                    <div style="display:flex;align-items:center">
                        <div class="navTitleContext">
                                <span class="capa" style="color: #97BFD5;">LOGO  </span>
                                <span style="color: #999999;">HELSTEIN</span>
                        </div>
                        <div class="dispalyFlex flexTop" style="">
                            <div>
                                <div class="dispalyFlex" style="">
                                    <div><img src="../../assets/images/order/01orderdetail/组 13.png" alt=""></div><div>订单详细信息</div>
                                    <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <div>
                                <div class="dispalyFlex" style="">
                                    <div><img src="../../assets/images/order/02fundtrusteeship/组 13.png" alt=""></div><div>资金托管</div>
                                    <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <div>
                                <div class="dispalyFlex" style="">
                                    <div><img src="../../assets/images/order/03submreq/组 11.png" alt=""></div><div>提交要求</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="firstNavR" style="background:red">
                        <div class="loginImg">
                            <img src="../../assets/images/pageIndex/登录.png" alt="">
                        </div>
                    </div>
            </div>
        </div>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div class="img">
                    <img src="../../assets/images/goodsAdd/组 13@2x.png" alt="">
                </div>
                <div class="submitTitle">提交成功</div>
                <div class="showDetail">提交成功，将在3秒后跳转至要求提交页面</div>
                <div class="autoJump">若未跳转，请点击<a href="">www.baidu.com</a></div>
                
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
            
        }
    },
    mounted() {
        setTimeout(() => {
            this.$router.push({name:"fundSituation"})
        }, 3000)
    },
    methods: {
        
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
        height: 95px;
        background-color: #fff;
        box-shadow:0px -3px 15px 3px #606266 ;
    }
    .navCenter{
        width: 1280px;
        height: 95px;
    }
    /*.logo{
        width: 260px;
        height: 100px;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    } */
    /*  */
    .navTitleContext{
        width: 260px;
        font-weight: bold;
        font-size: 24px;
    }
    .navTitleContext span{
        color: #333;
        margin-left: 10px;
    }
    .firstNavR{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .firstNavR>div{
        margin: 0 14px;
    }
    .businessCenter{
        width: 90px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
    }
    .shortLine{
        width: 1px;
        height: 24px;
    }
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
    }
    .shortLine img{
        width: 1px;
        height: 24px;
    }
    .loginImg i{
        width:35px;
        height:35px;
        color: #fff;
        line-height: 35px;
        font-size: 24px;
    }
    /*  */
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 200px auto 200px auto;
        text-align: center;
    }
    .merchantRegistration div{
        text-align: center;
        margin: 35px auto 10px auto;
        font-weight: bold;
    }
    .el-steps{
        margin: 40px 0 0 0;
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
</style>