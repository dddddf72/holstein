<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
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
                <el-tab-pane label="全部订单" name="first">
                    <table cellspacing="0" cellpadding="0" class="el-table__header">
                            <tbody style="text-align:left;font-size:12px">
                                <tr>
                                    <th style="width:340px">订单详情</th>
                                    <th style="width:170px">订单状态</th>
                                    <th style="width:135px">订单金额</th>
                                    <th style="">操作</th>
                                </tr>
                                <tr>
                                    <td rowspan="2">
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                    </td>
                                    <td rowspan="2" style="color:blue">进行中</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div class="dispalyFlex">
                                            <div class="chatOnline">在线沟通</div>
                                            <div class="checkOrderDetail" @click="jumpFundSituation">查看订单详情</div>
                                            <div class="payBtn">付款</div>
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
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                        </div>
                                    </td>
                                    <td style="color:red">已取消</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div style="float:right">
                                            <div class="checkOrderDetail">查看订单详情</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>我关闭了需求，原因：点错了</td>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                        <div>
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                        </div>
                                    </td>
                                    <td rowspan="2" style="color:green">已完成</td>
                                    <td rowspan="2"></td>
                                    <td rowspan="2">
                                        <div style="float:right">
                                            <div class="checkOrderDetail">查看订单详情</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                    </td>
                                    <td rowspan="2" style="color:blue">待付款</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div class="dispalyFlex">
                                            <div class="chatOnline">在线沟通</div>
                                            <div class="checkOrderDetail" @click="jumpFundSituation">查看订单详情</div>
                                            <div class="payBtn">付款</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td rowspan="2">
                                            <div style="color:#666666;">我将的游戏或组图标让您成为总部roblox gfx</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>凯拉切尔451</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>2021-04-06</span><span style="margin-left:20px">09:06:40</span></div>
                                            <div style="">订单编号：<span>26898276</span></div>
                                    </td>
                                    <td rowspan="2" style="color:blue">竞标中</td>
                                    <td>总金额：￥3500.00元</td>
                                    <td rowspan="2">
                                        <div class="dispalyFlex">
                                            <div class="chatOnline">在线沟通</div>
                                            <div class="checkOrderDetail" @click="jumpFundSituation">查看订单详情</div>
                                            <div class="payBtn">付款</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>托管金额：￥3500.00元</td>
                                </tr>
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
                <el-tab-pane label="竞标中" name="second">竞标中</el-tab-pane>
                <el-tab-pane label="待付款" name="third">待付款</el-tab-pane>
                <el-tab-pane label="进行中" name="fourth">进行中</el-tab-pane>
                <el-tab-pane label="待评价" name="fifth">待评价</el-tab-pane>
                <el-tab-pane label="已结束" name="sixth">已结束</el-tab-pane>
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
</style>