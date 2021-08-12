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
                                    <div><img src="../../assets/images/order/01orderdetail/组 14.png" alt=""></div><div>资金托管</div>
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
                <div class="roblox" style="">
                    <div class="gfxSimi checkDiv">
                        <div class="overview ">概览</div>
                        <div class="dispalyFlex" style="">
                            <div class="">小计</div>
                            <div class="overview">￥{{initData.price}}</div>
                        </div>
                        <div class="dispalyFlex" style="">
                            <div class="">其他</div>
                            <div class="overview">￥{{otherTotal}}</div>
                        </div>
                        <div class="dotLine"></div>
                        <div class="dispalyFlex overview" style="">
                            <div class="">合计</div>
                            <div class="">￥{{totalPrice}}</div>
                        </div>
                        <div class="dispalyFlex" style="">
                            <div class="">交付时间</div>
                            <div class="overview">{{deliveryTimeComp}}天</div>
                        </div>
                        <div class="gfxPayOne" @click="goOnCheck">继续结账</div>
                    </div>
                </div>
                    <div class="designLeft">
                        <div class="addTitle" style="">自定义您的包裹</div>
                        <div class="imageDesc" style="width:715px;margin:30px 0">
                            <div style="width:335px;height:195px; margin-right:20px" v-if="initData.files && initData.files.length >0 ">
                                <img :src="domain + initData.files[0].fileUrl" alt="" style="width:335px;height:195px">
                            </div>
                            <div class="">
                                <div class="overview">{{initData.serviceName}}</div>
                                <div style="display:flex;margin:17px 0">
                                    <div class="star">
                                        <a class="star-active" :style="{width: (initData.zhScore / 5) * 75 + 'px'}"></a>
                                    </div>
                                    <div style="color:#FFCC09">{{initData.zhScore || '暂无评分'}}</div>
                                    <div>（{{initData.evaluateCount}}篇评价）</div>
                                </div>
                                <div class="" style="" @click="showCon = !showCon">
                                    <span v-if="!showCon" class="show-hide">查看</span>
                                    <span v-else class="show-hide">隐藏</span>包含的内容</div>
                            </div>
                        </div>
                        <div class="checkBoxs" v-if="showCon">
                            <div v-for="(item,idx) in initData.selectedCombo" :key="idx">
                                <template v-if="item.title == '服务名'">
                                    <div class="overview">{{item.textValue}}</div>
                                </template>
                                <template v-if="item.title == '服务描述'">
                                    <div class="overview" style="color:#999999; font-weight：normal">{{item.textValue}}</div>
                                </template>
                                <template  v-if="item.isHave && item.isHave== 'true'">
                                    <i class="el-icon-check" style="color:#82d8d1">
                                    <span style="color:#999999">{{item.title}}</span></i>
                                </template>
                                <template v-if="!item.isHave && item.isText && item.title !== '服务名' && item.title !=='服务描述'">
                                    <span style="color:#999999"><i class="el-icon-check" style="color:#82d8d1"></i>{{item.title}}</span>
                                    <span style="color:#999999; margin-left:20px"><i v-if="item.title== '价格'">￥</i>{{item.textValue}} 
                                        <i v-if="item.title== '交付时间'">天</i>
                                        </span>
                                </template>
                            </div>
                        </div>
                        <div class="dotLine"></div>
                        <div class="" v-if="initData.expressDeliveries.length>0 || initData.addtoServices.length > 0">
                            <div class="addTitle">添加其他</div>
                            <div class="checkDiv">
                                <template v-if="initData.expressDeliveries.length > 0">
                                    <p style="font-size:16px;margin-top:20px">特快服务：</p>
                                    <!-- <div class="dispalyFlex overview" v-for="(item,index) in initData.expressDeliveries" :key="index">
                                        <div style="display:flex;align-items: center;">
                                            <el-radio v-model="checkedExpress" :label="item.id" style="margin-right: 0" @change="changeexpress(item)">{{item.deliveryTime}}</el-radio>
                                        </div>
                                        <div>{{item.price}}块</div>
                                    </div> -->
                                    <el-checkbox-group v-model="checkList2">
                                        <el-checkbox :label="item.id" v-for="item in initData.expressDeliveries" :key="item.id" style="white-space:normal; margin-right:0;display:flex">
                                            <div class="dispalyFlex" style="width:700px">
                                                <div class="overview">{{item.deliveryTime}}天送达</div>
                                                <div class="overview" style="width:60px; flex-shrink: 0;text-align:right">{{item.price}}块</div>
                                            </div>
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </template>
                                <template v-if="initData.addtoServices.length > 0">
                                    <p style="font-size:16px;margin-top:20px">追加服务：</p>
                                    <el-checkbox-group v-model="checkList">
                                        <el-checkbox :label="item.id" v-for="item in initData.addtoServices" :key="item.id" style="white-space:normal; margin-right:0;display:flex">
                                            <div class="dispalyFlex" >
                                                <div style="display:flex;margin-bottom:10px;width:640px">
                                                    <div>
                                                        <div class="overview">{{item.title}}({{item.deliveryTime}}天)</div>
                                                        <div style="color:#666666">{{item.addtoDesc}}</div>
                                                    </div>
                                                </div>
                                                <div class="overview" style="width:60px; flex-shrink: 0;text-align:right">{{item.price}}块</div>
                                            </div>
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </template>
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
            initData: {},
            domain: 'http://yshopapi.inroyltd.com',
            checkedFast:"",//特快一天
            checkedAddrevision:"",//附加修订
            checkedIncSource:"",//源文件
            input:'',
            input2:'',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            checkedExpress: 0,
            checkList: [],
            checkList2: [],
            otherPrice: 0,
            expressPrice: 0,
            showCon: false,
            deliveryTime: 0,
            orderId: 271,
            selectedAddService: '',
            selectedExpressDelivery: ''
        }
    },
    mounted() {
         this.getorderDetail();
         if (this.$route.query.id) { 
            this.orderId = this.$route.query.id;
        }
    },
    computed: {
        // 其他价格求和
        otherTotal() {
            let addPrice = 0;
            let expPrice = 0;
            if (this.checkList.length > 0) {
                // addPrice = eval(this.checkList.join("+"));
                for (const i in this.initData.addtoServices) {
                    for (const j in this.checkList) {
                        if (this.checkList[j] == this.initData.addtoServices[i].id) {
                            addPrice = addPrice +  this.initData.addtoServices[i].price
                        }
                    }
                }
            }
            if (this.checkList2.length > 0) {
                for (const i in this.initData.expressDeliveries) {
                    for (const j in this.checkList2) {
                        if (this.checkList2[j] == this.initData.expressDeliveries[i].id) {
                            expPrice = expPrice +  this.initData.expressDeliveries[i].price
                        }
                    }
                }
            }
            let total = this.expressPrice + addPrice + expPrice
            this.totalPrice = (total + this.initData.price).toFixed(2)
            return total
        },
        // 计算交付天数
        deliveryTimeComp() {
            let time = 0;
            let expTime = 0;
            let totalTime = parseInt(this.deliveryTime);
            if (this.checkList2.length > 0) {
                // addPrice = eval(this.checkList.join("+"));
                for (const i in this.initData.expressDeliveries) {
                    for (const j in this.checkList2) {
                        if (this.checkList2[j] == this.initData.expressDeliveries[i].id) {
                            expTime = expTime +  parseInt(this.initData.expressDeliveries[i].deliveryTime)
                        }
                    }
                }
                if (this.checkList.length > 0) { // 选择了特快交付的时间和追加服务的时间，交付时间最终显示的是特快交付的时间 + 追加服务的时间
                    for (const i in this.initData.addtoServices) {
                        for (const j in this.checkList) {
                            if (this.checkList[j] == this.initData.addtoServices[i].id) {
                                time = time +  parseInt(this.initData.addtoServices[i].deliveryTime)
                            }
                        }
                    }
                    totalTime = expTime + time
                } else { //只选择了特快交付的时间，交付时间最终显示的是特快交付的时间
                    totalTime = expTime
                }
            } else {
                if (this.checkList.length > 0) {  // 只选择了追加服务，交付时间最终显示的是服务配置的交付时间 + 追加服务的时间
                    // addPrice = eval(this.checkList.join("+"));
                    for (const i in this.initData.addtoServices) {
                        for (const j in this.checkList) {
                            if (this.checkList[j] == this.initData.addtoServices[i].id) {
                                time = time +  parseInt(this.initData.addtoServices[i].deliveryTime)
                            }
                        }
                    }
                }
                totalTime = totalTime + time
            }
            return totalTime

        }
    },
    methods: {
        getorderDetail() {
            this.$http.get('/api/orderPageInfo',{
                params: {
                    'serviceId': this.orderId
                }
            }).then (res => {
                this.initData = res.data.biz
                for (const i in res.data.biz.selectedCombo) {
                    if (res.data.biz.selectedCombo[i].title == '服务名') {
                        this.serviceValue = res.data.biz.selectedCombo[i].textValue
                    }
                    if (res.data.biz.selectedCombo[i].title == '交付时间') {
                        this.deliveryTime = res.data.biz.selectedCombo[i].textValue
                    }
                }
            })
        },
        goOnCheck(){
            this.$http.post('/api/order/affirm',{
                userId: 19,
                serviceId: 271,
                orderAmount: this.totalPrice,
                selectedAddService: this.checkList.join(','),
                selectedExpressDelivery: this.checkList2.join(',')
            }).then (res => {
                this.$router.push({
                    name:"02fundTrusteeShip",
                    query: {
                        name: this.initData.serviceName,
                        id: res.data.biz,
                        amount: this.totalPrice
                    }
                })
            })
        },
        changeexpress(item) {
            this.expressPrice = item.price
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
        margin: 60px auto;
    }
    /*  */
    .roblox{
        width: 500px;
        float:right;
        top: 85px;
        right: 320px;
    }
    .gfxSimi{
        width: 500px;
        height: 400px;
        padding: 30px;
        border: 1px dashed #888888;
    }
    .gfxPayOne{
        color: #fff;
        width: 437px;
        height: 55px;
        line-height: 55px;
        margin-top: 30px;
        background: #81D8D0;
        font-size: 16px;
        text-align: center;
        border-radius: 10px;
    }
    /*  */
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
    .imageDesc {
        display: flex;
    }
    .show-hide {
        color: #81D8D0;
    }
    .star {
        background: url('../../assets/images/order/01orderdetail/star-default.png') repeat-x;
        width: 75px;
        height: 13px;
        position: relative;
    }
    .star-active {
        display: block;
        height: 13px;
        width: 15px;
        position: absolute;
        z-index: 2;
        background: url("../../assets/images/order/01orderdetail/star-active.png") repeat-x;
        background-size: 15px 13px;
        left: 0;
    }
</style>