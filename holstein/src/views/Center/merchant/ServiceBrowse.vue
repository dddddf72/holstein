<template>
<div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>浏览记录</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="浏览记录列表" name="first">
                        <div>
                            <div>
                                <table class="searchCriteria">
                                	<tr>
                                		<td class="searchCriteriaExplain">商品id</td>
                                		<td class="searchCriteriaContent">
                                			<el-input v-model="queryData.serviceId" clearable placeholder="输入搜索商品ID" class="filter-item"  />
                                		</td>
                                		<td class="searchCriteriaExplain">商品名称</td>
                                		<td class="searchCriteriaContent">
                                			<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                                		</td>
                                		<td class="searchCriteriaExplain">商品类目</td>
                                		<td class="searchCriteriaContent">
                                			<el-cascader placeholder="请选择商品类目"
                                				v-model="queryData.categoryId"
                                				:options="NavTitle"
                                				:props="{value:'id',label:'cateName',children:'children'}"
                                				@change="handleChange"></el-cascader>
                                		</td>
                                	</tr>
                                </table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                <el-button size="mini" type="primary" icon="el-icon-search">刷新</el-button>
                            </div>
                                <el-table :data="tableData">
                                    <el-table-column type="index" label="序号">
                                        <template scope="scope">
                                            <span>{{scope.$index + 1}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="userName" label="用户名称" width="140"></el-table-column>
                                    <el-table-column prop="id" label="商品ID" width="120"></el-table-column>
                                    <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                    <el-table-column prop="productImgUrl" label="商品图片">
                                    <template slot-scope="scope">
                                        <div>
                                            <!-- <img :src="scope.row.productImgUrl" alt="" style="width:78px;height:50p"> -->
                                            <img :src="getImgUrl(scope.row.productImgUrl)" alt="" style="width:78px;height:50px">
                                        </div>
                                    </template>
                                </el-table-column>
                                    <el-table-column prop="cateName" label="商品类目"></el-table-column>
                                    <el-table-column prop="price" label="商品价格"></el-table-column>
                                    <el-table-column prop="createTime" label="浏览时间"></el-table-column> 
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
export default {
    data() {
		const query={
			serviceId:null,
			serviceName:'',
            categoryId:'',
		};
        const item = {
            username: '',
            id: null,
			serviceName: '',
			cateName:'',
			price:null,
			createTime:null
		};
        return {
            NavTitle:[],
            user:"",
            userId:"",
            activeName: 'first',
			tableData: Array(20).fill(item),
			queryData:query,
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
            value: '',
            //页
            pageSize:4,
            currentPage: 1,
            total:20
        }
    },
    async mounted() {
        var res = await GoodsHttp.serviceProCategory()
        this.NavTitle = res.data.biz.content
        // var userId = this.getUrlParam("userId")
            // console.log(userId)
            // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
            // console.log(loginInfo)
            if(JSON.parse(this.$cookie.get("loginInfo"))){
                    this.user = JSON.parse(this.$cookie.get("loginInfo"));
                    // console.log(this.user.id)
                    this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                    this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                    this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                    if(this.user){
                        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
                    }
            }
            var res = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,0,10);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
    },
    methods: {
        async  toQuery() {
			var resa = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,0,10);
			var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        handleClick(tab, event) {
        },
        handleChange(cateId){
                this.queryData.categoryId = cateId[cateId.length-1]
            },
        //分页
        //分页
        async handleCurrentChange(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,`${pageIn}`-1,this.pageSize)
                var {list} = res.data.biz;
                    this.tableData = list;
                    // this.currentPage=pageIn
            },
        async handleSizeChange(val) {
                var res = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,0,`${val}`)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
    },
    
}
</script>
<style type="text/css">
	
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
</style>