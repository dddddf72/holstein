<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品收藏</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="商品收藏列表" name="first">
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
                                <div style="margin:30px 30px;text-align: left;cursor:pointer">
                                    <el-button size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                </div>
                            <el-table :data="tableData">
                                <el-table-column type="index" label="序号">
                                    <template scope="scope">
                                        <span>{{scope.$index + 1}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="用户名称" width="140"></el-table-column>
                                <el-table-column prop="id" label="商品ID" width="120"></el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="productImgUrl" label="商品图片">
                                    <template slot-scope="scope">
                                        <div>
                                            <!-- <img :src="scope.row.productImgUrl" alt="" style="width:78px;height:50p"> -->
                                            <img :src="getImgUrl(scope.row.productImgUrl)" alt="" style="width:78px;height:50p">
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="cateName" label="商品类目"></el-table-column>
                                <el-table-column prop="price" label="商品价格"></el-table-column>
                                <el-table-column prop="createTime" label="收藏时间"></el-table-column> 
                                <!--<el-table-column label="操作" width="205px" align="center">
                                    <template slot-scope="scope">
                                        <el-button slot="reference" type="danger" size="mini" @click="attr(scope.row)">规格属性</el-button>
                                        <el-dropdown size="mini" split-button type="primary" trigger="click">
                                                                                            操作
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>
                                                    <el-button
                                                    size="mini"
                                                    type="primary"
                                                    icon="el-icon-edit"
                                                    @click="edit(scope.row)"
                                                    >编辑</el-button>
                                                </el-dropdown-item>
                                                <el-dropdown-item>
                                                    <el-popover
                                                    :ref="scope.row.id"
                                                    placement="top"
                                                    width="180"
                                                    >
                                                    <p>确定删除本条数据吗？</p>
                                                    <div style="text-align: right; margin: 0">
                                                        <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
                                                        <el-button :loading="delLoading" type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
                                                    </div>
                                                    <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                                                    </el-popover>
                                                </el-dropdown-item>
                                                <el-dropdown-item>
                                                    <el-button
                                                    size="mini"
                                                    type="success"
                                                    @click="editC(scope.row)"
                                                    >开启拼团</el-button>
                                                </el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </template>
                                </el-table-column>-->
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
			tableData: [],
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
        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
            var res = await GoodsHttp.serviceCollect(this.queryData.serviceId,this.queryData.serviceName,null,this.userId,0,10);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
    },
    methods: {
        async toQuery() {
			var resa = await GoodsHttp.serviceCollect(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,0,10);
			// this.tableData=resa.data.biz.content;
            var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
			
        },
        handleChange(cateId){
                this.queryData.categoryId = cateId[cateId.length-1]
            },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        //分页
        async handleCurrentChange(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.serviceCollect(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,`${pageIn}`-1,this.pageSize)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                var res = await GoodsHttp.serviceCollect(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,0,`${val}`)
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