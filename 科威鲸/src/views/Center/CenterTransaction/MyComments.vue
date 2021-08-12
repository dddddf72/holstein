<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">交易管理</el-breadcrumb-item>
            <el-breadcrumb-item>我的评价</el-breadcrumb-item>
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
                <el-tab-pane label="待评论" name="first">
                    <table cellspacing="0" cellpadding="0" class="el-table__header">
                            <tbody style="text-align:left;font-size:12px">
                                <tr>
                                    <th style="width:340px">订单详情</th>
                                    <th style="width:170px">订单状态</th>
                                    <th style="width:135px">订单金额</th>
                                    <th style="">操作</th>
                                </tr>

                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                        <div>
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">已完成订单交付</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                        </div>
                                    </td>
                                    <td rowspan="2" style="color:#02c2a9">已完成</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div style="float:right">
                                            <div class="payBtn" @click="dialogComVisible1 = true">评论</div>
                                            <el-dialog
                                                        title="发表评论"
                                                        :visible.sync="dialogComVisible1"
                                                        width="28%"
                                                        :before-close="handleClose">
                                                        <div style="padding:0 40px;">
                                                            <div class="dispalyFlex" style="">
                                                                <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                                                <div>
                                                                    <div>我将为您的游戏或组图标让您成为总部roblox gfx</div>
                                                                    <div>Roblox GFX（徽标/图标尺寸）<span style="margin-left:10px">订单金额：3500.00元</span></div>
                                                                </div>
                                                            </div>
                                                            <div class="dispalyFlex">
                                                                <div class="" style="">商品评分</div>
                                                                <div class="star" style="width:81px;height:13px">
                                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                                    </div>  -->
                                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                                </div>
                                                                <div class="" style="">非常满意</div>
                                                            </div>
                                                            <div class="dispalyFlex">
                                                                <div class="" style="">服务评分</div>
                                                                <div class="star" style="width:81px;height:13px">
                                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                                    </div>  -->
                                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                                </div>
                                                                <div class="" style="">非常满意</div>
                                                            </div>
                                                            <div>
                                                                <el-input type="textarea" placeholder="从多个角度评价宝贝，可以帮助更多想买的人。"></el-input>
                                                            </div>
                                                            <el-upload 
                                                        class="upload-demo" :auto-upload="false" ref="upload"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        :on-preview="handlePreview"
                                                        :on-remove="handleRemove" 
                                                        :on-change="handleChange"
                                                        :file-list="fileList"
                                                        list-type="picture">
                                                            <el-button slot="trigger" size="small" type="primary" @click="submitUpload">上传图片</el-button>
                                                        </el-upload>
                                                                    <span slot="footer" class="dialog-footer">
                                                                        <el-button @click="dialogComVisible1 = false">关闭</el-button>
                                                                        <el-button type="primary" @click="dialogComVisible1 = false">发布</el-button>
                                                                    </span>
                                                        </div>
                                                        </el-dialog>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                        <div>
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">已完成订单交付</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                        </div>
                                    </td>
                                    <td rowspan="2" style="color:#02c2a9">已完成</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div style="float:right">
                                            <div class="payBtn">评论</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                        <div>
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">已完成订单交付</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                        </div>
                                    </td>
                                    <td rowspan="2" style="color:#02c2a9">已完成</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div style="float:right">
                                            <div class="payBtn">评论</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
                                <!--  -->
                            </tbody>
                    </table>
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
                <el-tab-pane label="可追评" name="second">可追评</el-tab-pane>
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
                currentPage4: 4,
                //发表评价dialog
                dialogComVisible1:false,
                    fileList: [
                        {name: 'food.jpeg', url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'},
                        {name: 'food1.jpeg', url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'},
                    ],
                
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
            },
            //关闭dialog
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(res=> {
                    done();
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                });
            },
            //处理评分显示星星的函数
            handleStar(ele){
                var arr=[];
                for(let i=0;i<5;i++){
                    if(ele>=2){
                        arr.push(2)
                    }else if(ele>=0){
                        arr.push(Number(ele.toFixed(1)))
                    }else{
                        arr.push(0)
                    }
                        ele = ele - 2;
                }
                return arr
            },
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
</style>