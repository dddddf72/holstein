<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="订单列表" name="first">
                        <div>
                            <div>
                                <el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" style="width: 200px;" class="filter-item"  />
                                <el-input v-model="queryData.username" clearable placeholder="输入搜索用户名称" style="width: 200px;" class="filter-item"  />
                                <el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" style="width: 200px;" class="filter-item"  />
                            </div>
                            <div>
                                <el-select v-model="queryData.payType" clearable placeholder="支付方式" class="filter-item" style="width: 130px">
                                    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                                </el-select>
                                <el-select v-model="queryData.status" clearable placeholder="订单状态" class="filter-item" style="width: 130px">
                                    <el-option v-for="item in statusOptions" :key="item.key" :label="item.status_name" :value="item.key" />
                                </el-select>
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh">刷新</el-button>
                            </div>
                            <el-table :data="tableData">
                                <el-table-column prop="orderNo" label="订单号"></el-table-column>
                                <el-table-column prop="username" label="用户名称"></el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
                                <el-table-column prop="receiveAmount" label="实收金额"></el-table-column>
                                <el-table-column prop="payTypeStr" label="支付方式"></el-table-column>
                                <el-table-column prop="statusStr" label="订单状态"></el-table-column>
                                <el-table-column prop="createTime" label="创建时间"></el-table-column> 
                                <el-table-column label="操作" align="center" width="224px">
                                    <template slot-scope="scope">
                                        <el-button slot="reference" type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">订单详情</el-button>
                                        <!-- <el-button slot="reference" type="primary" icon="el-icon-edit" size="mini" @click="toDetailFund">订单详情</el-button> -->
                                        <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini">文件交付</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
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
		const query={
			orderNo:null,
			serviceName:'',
			username:'',
			payType:null,
			status:null,
			userId:1
		};
        const item = {
			orderNo:"",
            username: '',
			serviceName: '',
			orderAmount:null,
			receiveAmount:null,
			payTypeStr:null,
			statusStr:"",
			createTime:null
		};
		
        return {
			activeName: 'first',
			tableData: Array(0).fill(item),
			queryData:query,
			payTypeOptions: [
				{ key: 1, payType_name: '微信支付' },
				{ key:2,payType_name:'支付宝支付'}
			],
			statusOptions: [
				{ key: -1, status_name: '申请退款' },
				{ key:-2,status_name:'已退款'},
				{ key: 0, status_name: '待接单' },
				{ key:1,status_name:'待支付'},
				{ key: 2, status_name: '进行中' },
				{ key:3,status_name:'待验收'},
				{ key: 4, status_name: '已完成' },
				{ key:5,status_name:'已取消'}
			],
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
        }
    },
    async mounted() {
		var {orderNo,username,serviceName,payType,status,userId} = this.queryData;
		this.$http.post('/api/snail/order',{orderNo,username,serviceName,payType,status,userId}).then((res)=>{
            console.log(res.data)
            this.tableData=res.data.biz;
        })
    },
    methods: {
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
			this.queryData.username='';
			this.queryData.payType=null;
			this.queryData.serviceName='';
			this.queryData.status=null;
			this.toQuery();
		},
         async  toQuery() {
			var {orderNo,username,serviceName,payType,status,userId} = this.queryData;
			this.$http.post('/api/snail/order',{orderNo,username,serviceName,payType,status,userId}).then((res)=>{
				this.tableData=res.data.biz;
			})
			
        },
        toDetailFund(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            // this.$router.push(path)
            this.$router.push({name:'fundSituation'})
        },
    },
    
}
</script>