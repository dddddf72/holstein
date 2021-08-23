<template>
    <div class="home">
    <Holstein></Holstein>
        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <el-container>
                    <el-aside width="200px" style="text-align: center;">
                        <el-menu :default-openeds="['1','2', '3','4','5']" default-active="/userCenter" :collapse="isCollapse" :router="true">
                            <el-menu-item index="/userCenter" style="height:50px;line-height:50px">
                                <i class="el-icon-s-home"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span slot="title">交易管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/myOrder" >我的订单</el-menu-item>
                                    <el-menu-item index="/myComments">我的评价</el-menu-item>
                                    <el-menu-item index="/myContract">我的合同</el-menu-item>
                                    <el-menu-item index="/myInvoice">我的发票</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">我的关注</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/MyCollect">我的收藏</el-menu-item>
                                    <el-menu-item index="/MyFootprint">我的足迹</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">个人设置</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/ModifyInf">修改信息</el-menu-item>
                                    <el-menu-item index="/Realauth">实名认证</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">我有疑问</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/MessageCenter">消息列表</el-menu-item>
                                    <el-menu-item index="/Helpcenter">帮助中心</el-menu-item>
                                    <el-menu-item index="/Myfeedback">我的反馈</el-menu-item>
                                </el-menu-item-group>
                            <div class="toReport">
                                <div class="dotLine"></div>
                                <div class="toRepotConten">
                                    <div class="navTitleContext2" style="margin:0 auto">
                                            <span class="capa">LOGO  </span>
                                            <span>HELSTEIN</span>
                                    </div>
                                    <div style="color:#666666;margin:10px 0">如果您发现以下情况
                                        <div>请联系我们</div>
                                    </div>
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
                        </el-menu>
                    </el-aside>
                    <el-main >
                        <router-view></router-view> 
                        
                    </el-main>
                </el-container>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>
<script>
import Holstein from '@/components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
export default {
    components: {
        Holstein,Footer
    },
    data() {
        return {
            username:"",
            loginInfo:"",
            user:"",
            isCollapse: false,
            activeIndex:'/userCenter',
            activeName: 'first',
        }
    },
    mounted() {
        var userId = this.getUrlParam("userId")
        // console.log(userId,"getUrlParam")
        
        // return false
        if(JSON.parse(this.$cookie.get("loginInfo"))){
            this.loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
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