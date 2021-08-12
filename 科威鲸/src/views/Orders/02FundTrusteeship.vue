<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center dispalyFlex" style="">
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
                                    <div><img src="../../assets/images/order/01orderdetail/组 15.png" alt=""></div><div>提交要求</div>
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
                <div class="partTop" style="">
                    <div class="dispalyFlex" style="width:410px;height:90px;">
                        <div style="width:90px;height:90px"><img src="../../assets/images/order/02fundtrusteeship/资金.png" alt=""></div>
                        <div >
                            <div class="addTitle">资金托管</div>
                            <div style="color:#666666;margin-top:10px">您正在使用 Holstein的担保交易，资金更安全。</div>
                        </div>
                    </div>
                    <div class="dispalyFlex">
                        <div style="color:#666666;height:60px;line-height:30px;margin-top:30px">
                            <div>交易名称：{{name}} </div>
                            <div>交易号：{{id}}</div>
                        </div>
                        <div style="font-weight:bold;font-size:18px">
                            <span style="color:#000000;">应付金额：</span>
                            <span style="color:#d9230d;">¥ {{amount}}</span>
                        </div>
                    </div>
                    <div class="dotLine"></div>
                        
                    <div class="dispalyFlex">
                        <div>
                            <el-checkbox v-model="checked2" disabled>第三方支付</el-checkbox>
                            <el-radio-group v-model="payType" size="mini" style="margin-left:30px">
                                <el-radio :label="1">
                                    <img src="../../assets/images/order/02fundtrusteeship/微信.png" alt="">
                                </el-radio>
                                <el-radio  :label="2">
                                    <img src="../../assets/images/order/02fundtrusteeship/支付宝.png" alt="">
                                </el-radio>
                            </el-radio-group>
                        </div>
                        <div style="font-weight:bold;font-size:18px;color:#d9230d;">¥ {{amount}}</div>
                    </div>
                    <div class="partTop concernBtn" style="cursor: pointer;" @click="goOnCheck">确认支付</div>
                </div>
                 <el-dialog
                    width="30%"
                    title="支付二维码"
                    show-close="false"
                    :visible.sync="payDiaVisible"
                >
                    <div style="text-align:center"><img :src="payCodeImg"></div>
                </el-dialog>
            </div>
            <div style="background:#f7f7f7;height:670px">
                <div class="dispalyFlex" style="width: 1280px;margin:auto;padding-top:130px">
                        <div style="width:310px;border:1px dashed #888888">
                                <div style="width:310px;height:210px">
                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                </div>
                                <div style="padding:30px 20px">
                                    <div style="display:flex;">
                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                        <div style="margin-left:10px">
                                            <div>anne9008</div>
                                            <div style="display:flex">
                                                <div class="MarginMerchant1" style="">2级卖家</div>
                                                <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        我将为您提供LOL游戏陪玩服务，艾欧尼...
                                    </div>
                                    <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                    <div style="display:flex;justify-content:space-between">
                                        <div>
                                            <div class="star" style="width:81px;height:13px;display:inline-block">
                                                <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                    <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                    <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                    <img v-else src="../../src/assets/images/icon/none-star.png">
                                                </div>  -->
                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                            </div>
                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                            <span>（202个订单）</span>
                                        </div>
                                        <div>
                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div style="width:310px;border:1px dashed #888888">
                                <div style="width:310px;height:210px">
                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                </div>
                                <div style="padding:30px 20px">
                                    <div style="display:flex;">
                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                        <div style="margin-left:10px">
                                            <div>anne9008</div>
                                            <div style="display:flex">
                                                <div class="MarginMerchant1" style="">2级卖家</div>
                                                <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        我将为您提供LOL游戏陪玩服务，艾欧尼...
                                    </div>
                                    <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                    <div style="display:flex;justify-content:space-between">
                                        <div>
                                            <div class="star" style="width:81px;height:13px;display:inline-block">
                                                <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                    <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                    <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                    <img v-else src="../../src/assets/images/icon/none-star.png">
                                                </div>  -->
                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                            </div>
                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                            <span>（202个订单）</span>
                                        </div>
                                        <div>
                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div style="width:310px;border:1px dashed #888888">
                                <div style="width:310px;height:210px">
                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                </div>
                                <div style="padding:30px 20px">
                                    <div style="display:flex;">
                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                        <div style="margin-left:10px">
                                            <div>anne9008</div>
                                            <div style="display:flex">
                                                <div class="MarginMerchant1" style="">2级卖家</div>
                                                <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        我将为您提供LOL游戏陪玩服务，艾欧尼...
                                    </div>
                                    <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                    <div style="display:flex;justify-content:space-between">
                                        <div>
                                            <div class="star" style="width:81px;height:13px;display:inline-block">
                                                <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                    <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                    <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                    <img v-else src="../../src/assets/images/icon/none-star.png">
                                                </div>  -->
                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                            </div>
                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                            <span>（202个订单）</span>
                                        </div>
                                        <div>
                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div style="width:310px;border:1px dashed #888888">
                                <div style="width:310px;height:210px">
                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                </div>
                                <div style="padding:30px 20px">
                                    <div style="display:flex;">
                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                        <div style="margin-left:10px">
                                            <div>anne9008</div>
                                            <div style="display:flex">
                                                <div class="MarginMerchant1" style="">2级卖家</div>
                                                <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        我将为您提供LOL游戏陪玩服务，艾欧尼...
                                    </div>
                                    <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                    <div style="display:flex;justify-content:space-between">
                                        <div>
                                            <div class="star" style="width:81px;height:13px;display:inline-block">
                                                <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                    <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                    <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                    <img v-else src="../../src/assets/images/icon/none-star.png">
                                                </div>  -->
                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                            </div>
                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                            <span>（202个订单）</span>
                                        </div>
                                        <div>
                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                        </div>
                                    </div>
                                </div>
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
            checked2:true,
            payType: 1,
            name: '',
            id: '',
            amount: 0,
            payDiaVisible: false,
            payCodeImg: ''
        }
    },
    mounted() {
        let query = this.$route.query;
        this.name = query.name;
        this.id = query.id;
        this.amount = query.amount
    },
    methods: {
        goOnCheck(){
            let url = '/api/wx/trusteeship';
            if (this.payType == 2) {
                url = '/api/zfb/trusteeship'
            }
            let dt = {
                orderNo: this.id
            };
            if (this.payType == 1) {
                dt. amount =  this.amount * 100
            } else {
                dt. amount = this.amount
            }
            this.$http.post(url, dt).then(res => {
                if (this.payType == 1) {
                    this.payDiaVisible = true
                    this.payCodeImg =  res.data.biz
                } else {
                    window.location.href = res.data.biz
                }
                let link = '/api/queryPayStatus'
                    if (this.payType === 2) {
                        link = '/api/zfb/queryPayStatus'
                    }
                // 检查支付状态
                let timer = setInterval(() => {
                    this.$http.get(link,{
                        params: {
                            orderNo: this.id
                        }
                    }).then(val => {
                        if (val.data.msg.message == '支付成功') {
                            clearInterval(timer)
                            this.payDiaVisible = false
                            this.$router.push({name:"03submReq"})
                        }
                    })
                }, 2000);
            })
        },
        handleClick(){
            console.log(1)
        }
    },
    watch: {
        $route:{
            handler(n){
                let query = this.$route.query;
                this.name = query.name;
                this.id = query.id;
                this.amount = query.amount
            },
            deep: true,
        }
    }
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
    
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 70px auto;
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