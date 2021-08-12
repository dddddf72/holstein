<template>
    <div class="home">
    <Holstein></Holstein>
        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <el-container>
                    <el-aside width="200px" style="text-align: center;">
                        <el-menu :default-openeds="['1','2', '3','4']" default-active="1" :collapse="isCollapse">
                            <div @click="showmyuser" style="height:50px;line-height:50px">
                                <i class="el-icon-s-home" @click="showUserPage">首页</i>
                            </div>
                            <!--<el-menu-item index="1" to="/user">
                                <i class="el-icon-s-home"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>-->
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span slot="title">交易管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1" @click="showmyOrder">我的订单</el-menu-item>
                                    <el-menu-item index="1-2" target="showHere" @click="showmyComments">我的评价</el-menu-item>
                                    <el-menu-item index="1-3" @click="showmyContract">我的合同</el-menu-item>
                                    <el-menu-item index="1-4" @click="showmyInvoice">我的发票</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">我的关注</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1" @click="showMyCollect">我的收藏</el-menu-item>
                                    <el-menu-item index="2-2" @click="showMyFootprint">我的足迹</el-menu-item>
                                    <el-menu-item index="2-3">我的优惠券</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">个人设置</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="3-1">我的退款</el-menu-item>
                                    <el-menu-item index="3-2" @click="showModifyInf">修改信息</el-menu-item>
                                    <el-menu-item index="3-3" @click="showRealauth">实名认证</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">我有疑问</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="4-1">帮助中心</el-menu-item>
                                    <el-menu-item index="4-2">联系客服</el-menu-item>
                                    <el-menu-item index="4-3">我的反馈</el-menu-item>
                                </el-menu-item-group>
                            <div class="toReport">
                                <div class="dotLine"></div>
                                <div class="toRepotConten">
                                    <div class="navTitleContext2" style="margin:0 auto">
                                            <span class="capa">LOGO  </span>
                                            <span>HELSTEIN</span>
                                    </div>
                                    <div style="color:#666666;margin:10px 0">如果您发现以下情况，请联系我们</div>
                                    <div class="reqDetail" style="width:200px;margin:0 auto;text-align:left;color:#666666">
                                        <div>•  信息泄露</div>
                                        <div>•  服务商违规</div>
                                        <div>•  Holstein员工违规</div>
                                    </div>
                                    <div class="toReportTel">窝牛举报热线</div>
                                    <div class="dotLine"></div>
                                </div>
                            </div>

                            </el-submenu>
                            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                                <el-radio-button :label="false">展开</el-radio-button>
                                <el-radio-button :label="true">收起</el-radio-button>
                            </el-radio-group>
                        </el-menu>
                    </el-aside>
                    
                    <el-main >
                        
                        <div style="margin-left:40px;" v-show="iframeState">
                            <div class="" style="display:flex;align-items:center">
                                <div class="avatar" style="width:145px;height:148px"><img src="../../assets/images/detail/组 21(6).png" alt=""></div>
                                <div class="sellerComment" style="margin-left:27px">
                                    <div style="color:#000000;font-size:24px">
                                        你好{{this.$data.loginInfo.username}}，欢迎回来！
                                    </div>
                                    <div class="dispalyFlex" style="color:#666666;width:220px;">
                                        <div>
                                            <span>个人信息修改</span><i class="el-icon-edit"></i>
                                        </div>
                                        <div>
                                            <span>实名认证</span><i class="el-icon-user"  slot="reference"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dispalyFlex myInfo" style="margin:30px 0 70px 0">
                                <div><span>账户余额:</span><span>0元</span></div>
                                <div><span>优惠券:</span><span>0张</span></div>
                                <div><span>年度消费:</span><span>0元</span></div>
                                <div><span>我的订单:</span><span>0个</span></div>
                                <div><span>我的收藏:</span><span>0个</span></div>
                            </div>
                            <div class="dispalyFlex" style="margin-bottom:30px">
                                <div class="myOrderProcess">我的订单进展</div>
                                <div>查看全部订单></div>
                            </div>
                            <div>
                                <div>
                                    <div class="dispalyFlex">
                                        <div>
                                            <div style="color:#666666;font-size:16px">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:10px 0 13px 0"><span style="color:#999999">普通商户——</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                        </div>
                                        <div style="color:#81d8d0">进行中</div>
                                        <div style="width:300px">
                                            <div class="dispalyFlex">
                                                <div class="chatOnline">在线沟通</div>
                                                <div class="checkOrderDetail" @click="jumpFundSituation">查看订单详情</div>
                                                <div class="payBtn">付款</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dotLine"></div>
                                </div>
                                <div>
                                    <div class="dispalyFlex">
                                        <div>
                                            <div style="color:#666666;font-size:16px">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:10px 0 13px 0"><span style="color:#999999">普通商户——</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                        </div>
                                        <div style="color:#999999">已取消</div>
                                        <div style="width:300px">
                                            <div style="float:right">
                                                <div class="checkOrderDetail">查看订单详情</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="myOrderProcessLine"></div>
                                </div>
                                <div>
                                    <div class="dispalyFlex">
                                        <div>
                                            <div style="color:#666666;font-size:16px">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:10px 0 13px 0"><span style="color:#999999">普通商户——</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                        </div>
                                        <div style="color:#FA8687">已完成</div>
                                        <div style="width:300px">
                                            <div style="float:right">
                                                <div class="checkOrderDetail">查看订单详情</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="myOrderProcessLine"></div>
                                </div>
                            </div>
                            <div style="margin-top:70px">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="收藏服务" name="first">
                                        <el-carousel trigger="click" class="recommandCarou" style="height:390px">
                                            <el-carousel-item v-for="item in 4" :key="item" class="recommandCarouItem">
                                                <div class="recommandGoods" style="display:flex;justify-content:space-between;">
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

                                            </el-carousel-item>
                                        </el-carousel>
                                    </el-tab-pane>
                                    <el-tab-pane label="收藏店铺" name="second">收藏店铺</el-tab-pane>
                                </el-tabs>

                            </div>
                        </div>

                        <router-view />
                    </el-main>
                </el-container>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
    // import UserHttp from '@/model/UserHttp'
import Holstein from '@/components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
import UserHttp from '@/model/UserHttp'
export default {
    components: {
        Holstein,Footer
    },
    data() {
        return {
            username:JSON.parse(this.$cookie.get("loginInfo")).username,
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            iframeState:true,
            // showAside:false,
            isCollapse: true,
            activeName: 'first',
        }
    },
    mounted() {
        var userId = this.getUrlParam("userId")
        console.log(userId)
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        console.log(loginInfo)
        // return false
        if(JSON.parse(this.$cookie.get("loginInfo"))){
                this.user = JSON.parse(this.$cookie.get("loginInfo"));
                // console.log(this.user.id)
                this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                if(this.user){
                    // var userId =this.getUrlParam("userId")
                    // if(userId&&userId!="null"){
                        this.userId = this.user.id
                        this.$http.post('/api/snailUser/info',{
                                userId:this.user.id
                        }).then((res)=>{
                            var message = res.data.msg.message;
                            this.loginInfo=res.data.biz
                            if(message=="查询成功"){
                                this.loginInfo=res.data.biz;
                                console.log(this.loginInfo)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                // this.$message.success('成功完成微信扫码登陆')
                            }else{
                                // this.$message.error(message);
                                return
                            }
                        })
                }else{
                    console.log(userId)
                }
        }
        // return false
    },
    methods: {
        showmyuser(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            this.iframeState = false;
            // this.$router.push(path)
            this.$router.push({name:'user'})
        },
        showmyOrder(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            this.iframeState = false;
            // this.$router.push(path)
            this.$router.push('/user/myOrder')
        },
        showUserPage(){
            this.iframeState = true;
            this.$router.push({name:'user'})
        },
        showmyComments(){
            this.iframeState = false;
            this.$router.push({name:'myComments'})
        },
        showmyContract(){
            this.iframeState = false;
            this.$router.push({name:'myContract'})
        },
        showmyInvoice(){
            this.iframeState = false;
            this.$router.push({name:'myInvoice'})
        },
        showMyCollect(){
            this.iframeState = false;
            this.$router.push({name:'MyCollect'})
        },
        showMyFootprint(){
            this.iframeState = false;
            this.$router.push({name:'MyFootprint'})
        },
        showModifyInf(){
            this.iframeState = false;
            this.$router.push({name:'ModifyInf'})
        },
        showRealauth(){
            this.iframeState = false;
            this.$router.push({name:'Realauth'})
        },
        jumpFundSituation(){
            this.iframeState = false;
            this.$router.push({name:'fundSituation'});
        },
    //     /*  */
        handleClick(){
            console.log("handleClick")
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
    .myInfo div>span:first-child{
        color: #000000;
    }
    .myInfo div>span:nth-child(2){
        margin-left: 10px;
        color: #81d8d0;
    }
    #pane-first .recommandCarou .el-carousel__container{
        height: 390px !important;
    }
    .recommandGoods>div:not(:nth-child(1)){
        margin-left: 20px;
    }
    /*  */
    
</style>