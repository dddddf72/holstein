<template>
<div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>浏览记录</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="浏览记录列表" name="first">
                        <div>
                            <div class="">
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
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search">刷新</el-button>
                            </div>
                                <el-table :data="tableData">
                                    <el-table-column prop="index" label="序号" width="140"></el-table-column>
                                    <el-table-column prop="username" label="用户名称" width="140"></el-table-column>
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
                                    <el-table-column prop="createTime" label="浏览时间"></el-table-column> 
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
import GoodsHttp from '@/model/GoodsHttp'
export default {
    data() {
		const query={
			serviceId:null,
			serviceName:''
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
            currentPage4: 4
        }
    },
    async mounted() {
            var res = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,1);
			this.tableData=res.data.biz.content;
    },
    methods: {
        async  toQuery() {
			var resa = await GoodsHttp.serviceBrowse(this.queryData.serviceId,this.queryData.serviceName,1);
			this.tableData=resa.data.biz.content;
			
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