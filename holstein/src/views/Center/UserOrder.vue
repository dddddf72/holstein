<template>
    <div class="home">
        <Holstein></Holstein>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <el-container style="">
                    <el-aside width="200px" style="">
                        <el-menu :default-openeds="['1','2', '3','4']" default-active="/userOrderCenter" :collapse="isCollapse" :router="true">
                            <el-menu-item index="/userOrderCenter">
                                    <i class="el-icon-s-home"></i>
                                    <span slot="title">首页</span>
                            </el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span slot="title">商品管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/serviceProduct">管理商品</el-menu-item>
                                    <el-menu-item index="/serviceCollect">商品收藏</el-menu-item>
                                    <el-menu-item index="/serviceBrowse">浏览记录</el-menu-item>
                                    <el-menu-item index="">发票管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">订单管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/orderList">订单列表</el-menu-item>
                                    <el-menu-item index="/serviceEvaluate">评论管理</el-menu-item>
                                    <el-menu-item index="/demandBid">竞标管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">个人设置</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="serverModInf">修改信息</el-menu-item>
                                    <el-menu-item index="serverRealAuth">实名认证</el-menu-item>
                                    <el-menu-item index="messageList">消息列表</el-menu-item>
                                    <el-menu-item index="bindAmount">缴纳保证金</el-menu-item>
                                    <!--<el-menu-item index="killexp">修改技能专长</el-menu-item>-->
                                    <el-menu-item index="killexp">修改技能专长</el-menu-item>
                                </el-menu-item-group>

                            <div class="toReport">
                                <div class="dotLine"></div>
                                <div class="toRepotConten">
                                    <div class="navTitleContext2" style="margin:0 auto">
                                            <span class="capa">LOGO  </span>
                                            <span>HELSTEIN</span>
                                    </div>
                                    <div style="color:#666666;margin:10px 0">如果您发现以下情况，
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
                    
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </div>
        </div>
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
            activeIndex:'/userOrderCenter',
            isCollapse:false,
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
        text-align: center;
    }
    /*  */
    /*  */
    
</style>