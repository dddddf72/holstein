<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="订单列表" name="first">
                        <div>
                           <!-- 搜索条件 -->
                           <div>
                           	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                           		<tr>
                           			<td class="searchCriteriaExplain">订单号</td>
                           			<td class="searchCriteriaContent">
                           				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                           			</td>
                           			<td class="searchCriteriaExplain">商品名称</td>
                           			<td class="searchCriteriaContent">
                           				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                           			</td>
                           			<td class="searchCriteriaExplain">支付方式</td>
                           			<td class="searchCriteriaContent">
                           				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                           				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                           				</el-select>
                           			</td>
                           		</tr>
                           		<tr>
                           			<td class="searchCriteriaExplain">订单状态</td>
                           			<td class="searchCriteriaContent">
                           				<el-select v-model="queryData.status" clearable placeholder="选择订单状态" class="filter-item">
                           				    <el-option v-for="item in statusOptions" :key="item.key" :label="item.status_name" :value="item.key" />
                           				</el-select>
                           			</td>
                           			<!--<td class="searchCriteriaExplain">订单类型</td>
                           			<td class="searchCriteriaContent">
                           				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                           				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                           				</el-select>
                           			</td>-->
                           		</tr>
                           	</table>
                           </div>
                           <div style="margin:30px 30px;text-align: left;">
                               <el-button size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
                               <el-button type="danger" size="mini" icon="el-icon-refresh" @click="refresh">刷新</el-button>
                           </div>
                           <!-- 搜索条件 -->

                            <eFormf ref="form1" @toQuery="toQuery" />
                            <eFormfinit ref="initData" @toQuery="toQuery" @toRefresh="refresh" />
                            <el-table :data="tableData">
                                <el-table-column prop="orderNo" label="订单号"></el-table-column>
                                <el-table-column prop="name" label="用户昵称"></el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
                                <el-table-column prop="receiveAmount" label="实收金额"></el-table-column>
                                <el-table-column prop="payTypeStr" label="支付方式"></el-table-column>
                                <el-table-column prop="statusStr" label="订单状态"></el-table-column>
                                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                                <el-table-column label="操作" align="center" width="224px">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div class="dispalyFlex">
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <!--<el-dialog title="查看详情"
                                                        :visible.sync="dialogComVisible"
                                                        width="35%"
                                                        :before-close="cancelChanges">
                                            <div style="padding:10px" class="">
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">订单详情</div>
                                                    <div class="popoverConText">
                                                                <div class="reqDetail" style="margin-top:10px">
                                                                    <div>用户昵称：<span>{{scope.row.username}}</span> </div>
                                                                    <div>商品名称：<span>{{scope.row.serviceName}}</span> </div>
                                                                    <div>订单金额：<span>{{scope.row.orderAmount}}</span></div>
                                                                    <div>实收金额：<span>{{scope.row.receiveAmount}}</span></div>
                                                                    <div>支付方式：<span>{{scope.row.payTypeStr}}</span></div>
                                                                    <div>订单号：<span>{{scope.row.orderNo}}</span></div>
                                                                    <div>订单状态：<span>{{scope.row.statusStr}}</span></div>
                                                                </div>
                                                    </div>
                                                </div>
                                                <span slot="footer" class="dialog-footer">
                                                    <el-button style="background:#81d8d0;color:#fff" @click="dialogComVisible = false">取 消</el-button>
                                                    <el-button style="background:#81d8d0;color:#fff" @click="saveChanges(scope.row)">确定</el-button>
                                                </span>
                                            </div>
                                        </el-dialog>-->
<!--                                                <div class="payBtn" @click="jumpchat(scope.row)">在线沟通</div>-->
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '申请退款'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpchat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="editinintdata(scope.row)">确认退款</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '进行中'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpchat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="editf(scope.row)">文件交付</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待接单' && scope.row.accepter === null">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpchat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <el-popover
                                                    :ref="scope.row.orderNo"
                                                    placement="top"
                                                    width=""
                                                    >
                                                        <p>确定接单吗？</p>
                                                        <div style="text-align: right; margin: 0">
                                                            <el-button size="mini" type="text" @click="$refs[scope.row.orderNo].doClose()">取消</el-button>
                                                            <el-button type="primary" size="mini" @click="jumpcreOrder(scope.row.orderNo)">确定</el-button>
                                                        </div>
                                                        <div slot="reference" class="payBtn">接单</div>
                                                </el-popover>
                                                    <!--<div v-if="scope.row.bailAmount">订单总额保证金的五倍</div>
                                                    <div v-else>不可以同时接受一个单以上的订单</div>-->
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpchat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total">
                            </el-pagination>
                        </div>
                    </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import GoodsHttp from '@/model/GoodsHttp'

import eFormf from '@/views/Center/merchant/orderFile/file.vue'
import eFormfinit from '@/views/Center/merchant/orderFund/refund.vue'
export default {

  components: { eFormf,eFormfinit },
    data() {
		const query={
			orderNo:null,//1
			serviceName:'',//3
			name:'',//2
			payType:null,//4
			status:null,//5
		};
        const item = {
			orderNo:"",
            name: '',
			serviceName: '',
			orderAmount:null,
			receiveAmount:null,
			payTypeStr:null,
			statusStr:"",
			createTime:null
		};

        return {
            user:"",
            userId:"",
            radio:'1',
            input:'',
            select:'1',
			activeName: 'first',
            dialogComVisible:false,
			tableData: Array(0).fill(item),

			queryData:query,
            //确认退款
            dialogVisible2:false,
			payTypeOptions: [
				{ key: 1, payType_name: '微信支付' },
				{ key:2,payType_name:'支付宝支付'}
			],
			statusOptions: [
				{ key: -1, status_name: '申请退款' },
                { key:-2,status_name:'已退款'},
                { key: 0, status_name: '待支付' },
                { key:1,status_name:'待接单'},
                { key: 2, status_name: '进行中' },
                { key:3,status_name:'待验收'},
                // { key:4,status_name:'验收通过'},
                { key: 5, status_name: '已完成' },
                { key:6,status_name:'已取消'}
			],
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],

            //页
            pageSize:4,
            currentPage: 1,
            total:20
        }
    },
    async mounted() {
         debugger
        if(this.$cookie && this.$cookie.get("loginInfo")){
                    this.user = JSON.parse(this.$cookie.get("loginInfo"));
                    // console.log(this.user.id)
                    // this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                    // this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                    // this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                    if(this.user){
                        this.userId = this.user.id
                    this.createWebSocket(this.userId)
                    }
        }
        // orderlist
            var res = await GoodsHttp.orderlist(this.queryData.orderNo,this.queryData.name,this.queryData.serviceName,this.queryData.payType,this.queryData.status,this.userId,0,10)
        console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        // var {orderNo,username,serviceName,payType,status,userId} = this.queryData;
		// this.$http.post('/api/snail/order',{orderNo,username,serviceName,payType,status,userId}).then((res)=>{
        //     console.log(res.data)
        //     this.tableData=res.data.biz;
        // })
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
		ifNull(value, defaultValue) {
			if (value != null && value != undefined) {
				return value;
			}
			return defaultValue;
		},
		// 判断为空字符串
		ifNullStr (value, defaultValue) {
			if (value != null && value != undefined && value != '') {
				return value;
			}
			return defaultValue;
		},
        async refresh(){
			this.queryData.orderNo='';
			this.queryData.name='';
			this.queryData.payType=null;
			this.queryData.serviceName='';
			this.queryData.status=null;
			this.toQuery();
		},
         async  toQuery() {
			// this.$http.post('/api/snail/order',{orderNo,username,serviceName,payType,status,userId}).then((res)=>{
			// 	this.tableData=res.data.biz;
			// })
            var res = await GoodsHttp.orderlist(this.queryData.orderNo,this.queryData.name,this.queryData.serviceName,this.queryData.payType,this.queryData.status,this.userId,0,10)
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        },
        // cancelChanges(done){
        //   done();
        // },
        jumpFundSituation(id){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            // this.$router.push(path)
            this.$router.push(`fundSituation?id=${id}`);
        },
        async jumpcreOrder(orderNo){
            var userId = JSON.parse(this.$cookie.get('loginInfo')).id
            this.$http.post(`/api/businessOrder/${orderNo}?userId=${userId}`).then(res=>{
                this.$message.success(res.data.msg.message);
                this.toQuery()
            })
        },
        jumpchat(sco){
          var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
          var userId = loginInfo.id
          var receiver2 =null;
          var buyer1 = sco.buyer
          var accepter = sco.accepter;
          var createUser = sco.createUser;
          if(accepter !=null && accepter !=''){
            receiver2 = accepter;
          }else if(buyer1 ==null || buyer1 == ''){
            receiver2 = buyer1;
          }else{
            receiver2 = createUser;
          }
            // var selected_provider = sco.selected_provider;
            var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}`;
            // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
            window.open(wechatScan,"_blank")
        },
        //分页
        //分页
        async handleCurrentChange(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.orderlist(this.queryData.orderNo,this.queryData.name,this.queryData.serviceName,this.queryData.payType,this.queryData.status,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.orderlist(this.queryData.orderNo,this.queryData.name,this.queryData.serviceName,this.queryData.payType,this.queryData.status,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
        editf(data) {
            console.log(data)
                // this.isAdd = false
                const _this = this.$refs.form1
                _this.form1 = {
                    id: data.id,
                }
                _this.dialog = true
        },
        editinintdata(data) {
            console.log(data)
                // this.isAdd = false
                const _this = this.$refs.initData
                _this.initData = data
                _this.dialog = true
        },
    },

}
</script>
<style type="text/css">

	td,tr{
	    padding:0 10px;
	}
	tr td{
	    height: 50px;
	}
	th{
	    height: 30px;
	}
	.searchCriteria{
		padding: 0;
		margin: 0;
		border: none;
	}

	/* 所有样式垂直居中 */
	.searchCriteria td{
		border: none;
		display:table-cell;
		vertical-align:middle
	}

	/* 搜索条件说明样式 */
	.searchCriteriaExplain{
		text-align: center;
		width: 100px;
	}

	/* 搜索条件内容样式 */
	.searchCriteriaContent{
		width: 200px;
	}
	.filter-item{
		width: 200px;
	}
</style>
