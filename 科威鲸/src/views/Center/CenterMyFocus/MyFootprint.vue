<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的关注</el-breadcrumb-item>
            <el-breadcrumb-item>我的足迹</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="float:right">
            <el-input
            placeholder="搜索订单号/订单名称"
            prefix-icon="el-icon-search"
            v-model="input2">
            </el-input>
        </div>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我的足迹" name="first">
                    <div>
                      <el-carousel trigger="click" class="recommandCarou" style="height:390px">
                            <el-carousel-item v-for="item in 4" :key="item" class="recommandCarouItem">
                                <div class="recommandGoods" style="display:flex;justify-content:space-between;">
                                        <div style="width:310px;border:1px dashed #888888">
                                                <div style="width:310px;height:210px">
                                                    <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                                </div>
                                                <div style="padding:30px 20px">
                                                    <div style="display:flex;">
                                                        <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
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
                                                                <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                            </div>
                                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                            <span>（202个订单）</span>
                                                        </div>
                                                        <div>
                                                            <img src="../../../assets/images/detail/喜欢.png" alt="">
                                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div style="width:310px;border:1px dashed #888888">
                                                <div style="width:310px;height:210px">
                                                    <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                                </div>
                                                <div style="padding:30px 20px">
                                                    <div style="display:flex;">
                                                        <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
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
                                                                <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                            </div>
                                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                            <span>（202个订单）</span>
                                                        </div>
                                                        <div>
                                                            <img src="../../../assets/images/detail/喜欢.png" alt="">
                                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div style="width:310px;border:1px dashed #888888">
                                                <div style="width:310px;height:210px">
                                                    <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                                </div>
                                                <div style="padding:30px 20px">
                                                    <div style="display:flex;">
                                                        <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
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
                                                                <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                            </div>
                                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                            <span>（202个订单）</span>
                                                        </div>
                                                        <div>
                                                            <img src="../../../assets/images/detail/喜欢.png" alt="">
                                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                </div>

                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div style="margin-top:60px">
                        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
                //搜索订单号
                input2:'',
                //页
                currentPage4: 4
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
table{
    border-collapse:collapse;
    border: 1px solid #d8d8d8;
}
.el-container .el-main{
display: none !important;
}
td,th{
    
    padding:0 10px;
    border: 1px solid #d8d8d8;
}
tr td{
    height: 50px;
}
th{
    height: 30px;
}
.recommandGoods>div:not(:nth-child(1)){
    margin-left: 20px;
}
</style>