<template>
    <div style="">
                            <div class="" style="display:flex;align-items:center">
                                
                <div class="avatar" style="width:145px;height:148px">
                  <img v-if="loginInfo.headPhoto==null||loginInfo.headPhoto==undefined ||loginInfo.headPhoto==''" style="width:145px;height:148px;border-radius:50%" src="../../assets/img/top/组 2(2).png" alt="">
                  <img v-else style="width:145px;height:148px;border-radius:50%" :src="getImgUrl(loginInfo.headPhoto)" alt="">
                </div>
                                <div class="sellerComment" style="margin-left:27px;text-align:left">
                                    <div style="color:#000000;font-size:24px;">
                                        你好{{username}}，欢迎回来！
                                    </div>
                                    <div class="dispalyFlex" style="width:420px;cursor:pointer">
                                        <div @click="jumpserverModInf" class="one">
                                          <span>个人信息修改</span><i class="el-icon-edit"></i>
                                        </div>
                                        <div @click="jumpserverRealAuth" :class="['one',loginInfo.idCard?'two':'']">
                                          <span>实名认证</span><i class="el-icon-user"></i><span v-if="loginInfo.idCard">（已实名）</span>
                                        </div>
										<div  :class="['one',loginInfo.bailAmount?'two':'']" @click="jumpbailAmout">
                                            <span>保证金管理</span>
                                            <!--<el-popover
                                  placement="right"
                                  title="保证金管理"
                                  width="450"
                                  trigger="click"
                                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                                  v-model="visibleMarginManage">-->
                                                <i class="el-icon-bank-card" slot="reference"></i><span v-if="loginInfo.bailAmount">{{loginInfo.bailAmount}}</span>
                                            <!--</el-popover>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dispalyFlex orderInfo" style="margin:30px 0">
                                <div>
                                    <div class="orderInfoTitle">完成订单数</div>
                                    <div class="orderInfoCon orderInfoConOne">{{homePageData.todayFinishOrderCount}}个</div>
                                    <div class="orderInfoFoot orderInfoFootOne">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日收入</div>
                                            <div>0元</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">订单总数</div>
                                    <div class="orderInfoCon orderInfoConTwo">{{homePageData.orderAmount}}个</div>
                                    <div class="orderInfoFoot orderInfoFootTwo">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日订单数</div>
                                            <div>{{homePageData.todayOrderAmount}}单</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">订单总额</div>
                                    <div class="orderInfoCon orderInfoConThree">{{homePageData.orderCount}}元</div>
                                    <div class="orderInfoFoot orderInfoFootThree">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日订单总额</div>
                                            <div>{{homePageData.todayOrderCount}}元</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">商品总数</div>
                                    <div class="orderInfoCon orderInfoConFour">{{homePageData.productCount}}个</div>
                                    <div class="orderInfoFoot orderInfoFootFour">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日商品总数</div>
                                            <div>{{homePageData.todayProductCount}}个</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dispalyFlex" style="margin:70px 0">
                                <div>
                                    <div id="main" style="width: 420px;height:324px;"></div>
                                </div>
                                <div>
                                    <div id="main2" style="width: 420px;height:324px;"></div>
                                </div>
                            </div>
                        </div>
</template>

<script>
// import imageavatarUrl from '../../assets/images/regist/商家信息/组 14(1).png'
// import imageavatarUrl_anti from '../../assets/images/regist/商家信息/矩形 3.png'
import echarts from 'echarts'
// import EchartsOne from '@/components/Echarts/Echarts.vue'
import EchartsTwo from '@/components/Echarts/Echarts2.vue'
// import UserHttp from '@/model/UserHttp'
import GoodsHttp from '@/model/GoodsHttp'
    export default {
        components:{
            EchartsTwo,
        },
        data() {
            return {
                username:"",
                user:"",
                userId:"",
                loginInfo:"",
                //保证金管理图标
                visibleMarginManage:false,
                homePageData:{},
                amountlist:[],
                orderMap:[],
                DASD:[],
                tody:[],
                xlist:[],
                ylist:[],
            }
        },
        async mounted() {
            if(this.$cookie || JSON.parse(this.$cookie.get("loginInfo"))){
                    this.user = JSON.parse(this.$cookie.get("loginInfo"));
                    this.loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
                    this.username = this.user.username;
                    this.userId = this.user.id;
                    if(this.userId){
                        this.$http.post('/api/snailUser/info',{
                                userId:this.userId
                        }).then((res)=>{
                            var message = res.data.msg.message;
                            this.loginInfo=res.data.biz
                            if(message=="成功"){
                                this.loginInfo=res.data.biz;
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                            }
                        })
                        
                        var result = await GoodsHttp.homePageData(this.userId)
                        this.homePageData = result.data.biz
                        await this.$nextTick(function () {
                                this.amountlist = result.data.biz.amountlist
                                this.DASD = result.data.biz.amountlist.xList
                                this.tody = result.data.biz.amountlist.yList

                                this.orderMap = result.data.biz.orderMap
                                this.xlist = result.data.biz.orderMap.xList
                                this.ylist = result.data.biz.orderMap.yList

                                if(this.DASD != undefined){
                                    this.line();
                                    window.addEventListener('resize1', this.line, 20)
                                }
                                if(this.xlist != undefined){
                                    this.drawLine();
                                    window.addEventListener('resize2', this.drawLine, 20)
                                }
                        })
                    }
                }
        },
        methods: {
          jumpserverRealAuth(){
            this.$router.push('/serverRealAuth')
          },
          jumpserverModInf(){
            this.$router.push('/serverModInf')
          },
          jumpbailAmout(){
            this.$router.push('/bindAmount')
          },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
            drawLine(){
                let myChart = echarts.init(document.getElementById("main2"));
                let option = {
                    title: {
                                text: '本月订单数', 
                            },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['排行榜'] // 区域名称
                        },
                        xAxis: {   // x 轴
                            type:'category',
                            data: this.xlist
                        },
                        yAxis: {   // y 轴
                            type: 'value'
                        },
                        series:[{
                                name: '本月成交额',
                                type: 'line',
                                color: '#82d8d0',
                                data: this.ylist,
                                smooth:true
                            }]
                };
                myChart.setOption(option);
            },
            line(result) {
                let myChart = echarts.init(document.getElementById("main"));
                let legend = [];
                for (let key in result) {
                    legend.push(key);
                }
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: '本月成交额',
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['排行榜'],
                    },
                    xAxis: {
                        type: 'category',
                        data: this.DASD
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:"本月成交额",
                        data: this.tody,
                        type: 'line',
                        smooth: true,
                        color:'#82d8d0'
                    }]
                };
                myChart.setOption(option);
            },

        },
        destroyed () {
            window.removeEventListener('resize1', this.drawLine, 20)
            window.removeEventListener('resize2', this.line, 20)
        },
    }
</script>

<style scoped>
    .one{
      color:#666666;
    }
    .two{
      color:#81d8d0;
    }
    .orderInfo >div{
        width: 220px;
        height: 177px;
        border: 1px dashed #bababa;
    }
    .orderInfoTitle{
        color:#666666;
        font-size:18px;
        height: 66px;
        line-height: 66px;
    }
    .orderInfoCon{
        font-size: 40px;
        height: 65px;
        line-height: 48px;
    }
    .orderInfoFoot{
        height: 44px;
        line-height: 44px;
        color: #fff;
    }
    .orderInfoConOne{
        color: #A8CEE3;
    }
    .orderInfoConTwo{
        color: #FCDDAD;
        
    }
    .orderInfoConThree{
        color: #FD9D9E;
    }
    .orderInfoConFour{
        color: #C5B0E8;
    }
    .orderInfoFootOne{
        background-color: #A8CEE3;
    }
    .orderInfoFootTwo{
        background-color: #FCDDAD;
        
    }
    .orderInfoFootThree{
        background-color: #FD9D9E;
    }
    .orderInfoFootFour{
        background-color: #C5B0E8;
    }

</style>