<template>
    <div style="margin-left:40px;width:970px">
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
                                <el-input v-model="queryData.serviceId" clearable placeholder="输入搜索商品ID" style="width: 200px;" class="filter-item"  />
                                <el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" style="width: 200px;" class="filter-item"  />
                                <el-select v-model="value" placeholder="请选择商品类目">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择商品状态">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>  
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toAddPro">新增</el-button>
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search">上架</el-button>
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
                                <el-table-column prop="storeCategory.cateName" label="商品类目"></el-table-column>
                                <el-table-column prop="price" label="商品价格"></el-table-column>
                                <el-table-column prop="serviceSort" label="商品排序"></el-table-column> 
                                <el-table-column prop="serviceStock" label="商品库存"></el-table-column> 
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
                                        <el-button slot="reference" type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">编辑</el-button>
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
                    <el-tab-pane label="待上架产品" name="second">
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
			serviceName:''
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
		// 	serviceStock:19999,//商品库存
        //     isPutaway:1,//状态
        // }
        return {
            activeName: 'first',
			// tableData: Array(20).fill(item),
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
            currentPage4: 4
        }
    },
    async mounted() {
            var res = await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,1);
			console.log(res.data.biz);
			this.tableData=res.data.biz.content;
			console.log(this.tableData);
    },
    methods: {
		async subDelete(id){
            var res=await GoodsHttp.productDel(id);
            this.$message.success(res.data.msg.message);
            this.toQuery();
        },
        async toQuery() {
			var resa =  await GoodsHttp.serviceProduct(this.queryData.serviceId,this.queryData.serviceName,1);
            this.tableData=resa.data.biz.content;
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
        getImgUrl(productImgUrl){
            return this.getBaseImgUrl(productImgUrl)
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    
}
</script>