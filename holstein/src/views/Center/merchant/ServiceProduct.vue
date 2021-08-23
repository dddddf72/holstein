<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理商品</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="出售中产品" name="first">
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
                            <div style="margin:30px 30px;text-align: left;">
                                <el-button size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                <el-button size="mini" type="primary" icon="el-icon-search" @click="toAdd">新增</el-button>
                            </div>
                            <el-table :data="tableData">
                                <el-table-column prop="id" label="商品ID" width="120"></el-table-column>
                                <el-table-column prop="productImgUrl" label="商品图片">
                                    <template slot-scope="scope">
                                        <div>
                                            <!-- <img :src="scope.row.productImgUrl" alt="" style="width:78px;height:50p"> -->
                                            <img :src="getImgUrl(scope.row.productImgUrl)" alt="" style="width:78px;height:50p">
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="categoryName" label="商品类目"></el-table-column>
                                <el-table-column prop="price" label="商品价格"></el-table-column>
                                <el-table-column prop="serviceSort" label="商品排序"></el-table-column> 
                                <el-table-column prop="orderQuantity" label="可接单量"></el-table-column> 
                                <el-table-column prop="isPutaway" label="状态" align="center">
                                    <template slot-scope="scope">
                                        <div @click="onSale(scope.row.id,scope.row.isPutaway)">
                                            <el-tag v-if="scope.row.isPutaway === 1" style="cursor: pointer" :type="''">已上架</el-tag>
                                            <el-tag v-else style="cursor: pointer" :type=" 'info' ">已下架</el-tag>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="205px" align="center">
                                    <template slot-scope="scope">
                                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="JumpEdit(scope.row.id)">编辑</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10" :page-sizes="[10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待上架产品" name="second">
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
                                <div style="margin:30px 30px;text-align: left;">
                                    <el-button size="mini" type="primary" icon="el-icon-search" @click="toQuery1">查询</el-button>
                                    <el-button size="mini" type="primary" icon="el-icon-search" @click="toAdd">新增</el-button>
                                </div>
                            <el-table :data="tableData1">
                                <el-table-column prop="id" label="商品ID" width="120"></el-table-column>
                                <el-table-column prop="productImgUrl" label="商品图片">
                                    <template slot-scope="scope">
                                        <div>
                                            <!-- <img :src="scope.row.productImgUrl" alt="" style="width:78px;height:50p"> -->
                                            <img :src="getImgUrl(scope.row.productImgUrl)" alt="" style="width:78px;height:50p">
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="categoryName" label="商品类目"></el-table-column>
                                <el-table-column prop="price" label="商品价格"></el-table-column>
                                <el-table-column prop="serviceSort" label="商品排序"></el-table-column> 
                                <el-table-column prop="orderQuantity" label="可接单量"></el-table-column> 
                                <el-table-column prop="isPutaway" label="状态" align="center">
                                    <template slot-scope="scope">
                                        <div @click="onSale1(scope.row.id,scope.row.isPutaway)">
                                            <el-tag v-if="scope.row.isPutaway === 1" style="cursor: pointer" :type="''">已上架</el-tag>
                                            <el-tag v-else style="cursor: pointer" :type=" 'info' ">已下架</el-tag>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="205px" align="center">
                                    <template slot-scope="scope">
                                        
                                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="JumpEdit(scope.row.id)">编辑</el-button>

                                        <el-popover
                                            :ref="scope.row.id"
                                            placement="top"
                                            width="180"
                                            >
                                        <p>确定删除本条数据吗？</p>
                                        <div style="text-align: right; margin: 0">
                                            <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
                                            <el-button type="primary" size="mini" @click="subDelete1(scope.row.id)">确定</el-button>
                                        </div>
                                        <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                                        </el-popover>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page.sync="currentPage1"
        :page-size="10" :page-sizes="[10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total1">
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
		const query1={
			serviceId:null,
			serviceName:'',
            categoryId:'',
		};
        // const item = {
        //     id: "1",//商品Id
		// 	productImgUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		// 	serviceName: '我将为您的游戏或组图标..',//商品名称
		// 	storeCategory:{
        //         createTime: "2020-06-25 18:54:35",
        //         updateTime: null,
        //         id: 1,
        //         pid: 0,
        //         cateName: "图文广告",
        //         sort: 1,
        //         pic: "",
        //         isShow: 1
        //     },
		// 	price:20,//价格
		// 	createTime:'2021-06-24',
        //     serviceSort:99,//商品排序
		// 	orderQuantity:19999,//可接单量
        //     isPutaway:1,//状态
        // }
        return {
            user:"",
            userId:"",
            activeName: 'first',
            NavTitle:[],
			// tableData: Array(20).fill(item),
			tableData: [],
			tableData1: [],
			queryData:query,
			queryData1:query1,
            userId:"",
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
            total:20,
            pageSize:10,
            total1:20,
            pageSize1:10,
            currentPage: 1,
            currentPage1: 1
        }
    },
    async mounted() {
        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
        console.log(this.userId,"商家userId")
        // var usertype2 = JSON.parse(this.$cookie.get("loginInfo")).userType
        // console.log(usertype2)       //1

        var res = await GoodsHttp.serviceProCategory()
        this.NavTitle = res.data.biz.content
        // if(JSON.parse(this.$cookie.get("loginInfo"))){
        //     this.user = JSON.parse(this.$cookie.get("loginInfo"));
        //     // console.log(this.user.id)
        //     // this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
        //     // this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
        //     // this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
        //     if(this.user){
        //         this.userId = this.user.id
        //     }
        // }
            var res = await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,null,this.userId,1,0,10);
			// console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total

            var res1 = await GoodsHttp.serviceProduct(this.queryData1.serviceId,this.queryData1.serviceName,null,this.userId,0,0,10);
			// console.log(res1.data.biz);
			// this.tableData1=res1.data.biz.list;
			// console.log(this.tableData);
            var {list,total,size} = res1.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.total1 = total
    },
    methods: {
        
            handleChange(cateId){
                this.queryData.categoryId = cateId[cateId.length-1]
            },
            handleChange1(cateId){
                this.queryData1.categoryId = cateId[cateId.length-1]
            },
		async subDelete1(id){
            var res=await GoodsHttp.productDel(id);
            this.$message.success(res.data.msg.message);
            this.toQuery1();
        },
        async toQuery() {
            
			var resa =  await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,1,0,10);
            // this.tableData=resa.data.biz.list;
            var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        },
        async toQuery1() {
            
			var res =  await GoodsHttp.serviceProduct(this.queryData1.serviceId,this.queryData1.serviceName,this.queryData1.categoryId,this.userId,0,0,10);
            // this.tableData1=res.data.biz.list;
            var {list,total,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.total1 = total
        },
        async toAdd() {
			this.$router.push({ name: '01BasicInf' });
        },
        async JumpEdit(id){
            this.$router.push(`01basicInf?id=${id}`);
        },
        async onSale(id,isPutaway){
            if(isPutaway==1){
                var resa =  await GoodsHttp.judgeIsPutaway(id);
                var flag=resa.data.biz;
                if(flag){
                    this.$message.info("该商品存在于正在进行的订单中，不能下架！");
                    return;
                }
            }
                this.$confirm(`确定进行[${status ? '下架' : '上架'}]操作?`, '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                    this.$http.post('/api/serviceProduct/putaway',{uid:id,isPutaway:isPutaway}).then((res)=>{
                        this.$message.success(res.data.msg.message);
                        setTimeout(this.toQuery(),2000)
                    })
                }).catch(() => {

                }) 
        },
        async onSale1(id,isPutaway){
            if(isPutaway==1){
                var resa =  await GoodsHttp.judgeIsPutaway(id);
                var flag=resa.data.biz;
                if(flag){
                    this.$message.info("该商品存在于正在进行的订单中，不能下架！");
                    return;
                }
            }
                this.$confirm(`确定进行[${status ? '下架' : '上架'}]操作?`, '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                    this.$http.post('/api/serviceProduct/putaway',{uid:id,isPutaway:isPutaway}).then((res)=>{
                        this.$message.success(res.data.msg.message);
                        setTimeout(this.toQuery1(),2000)
                    })
                }).catch(() => {
            }) 
        },
        getImgUrl(productImgUrl){
            return this.getBaseImgUrl(productImgUrl)
        },
        async handleClick(tab, event) {
                // console.log(tab.$options.propsData.name);
                // debugger
                if(tab.$options.propsData.name == 'first'){
                    this.toQuery()
                }else if(tab.$options.propsData.name == 'second'){
                    this.toQuery1()

                }
        },
        //分页
        async handleCurrentChange(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,1,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                // debugger
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,this.queryData.categoryId,this.userId,1,0,`${val}`)
                // debugger
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
            
        async handleCurrentChange1(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.serviceProduct(this.queryData1.serviceId,this.queryData1.serviceName,this.queryData1.categoryId,this.userId,0,`${pageIn}`-1,this.pageSize1)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
            },
        async handleSizeChange1(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.serviceProduct(this.queryData1.serviceId,this.queryData1.serviceName,this.queryData1.categoryId,this.userId,0,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.currentPage1 = 1
            },
    },
    
}
</script>
<style scoped>

.evaluateInf {flex-wrap: wrap;}
.evaluateInf div{
    width: 270px;
    margin-top: 20px;
}

.popoverCon{
    margin: 40px 0;
}
.popoverConText{
    margin-top: 20px;
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
</style>