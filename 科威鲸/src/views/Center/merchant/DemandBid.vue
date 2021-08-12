<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>竞标管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="竞标大厅" name="first">
                        <div>
                            <div>
                                <el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" style="width: 150px;" class="filter-item"  />
                                <el-select v-model="value" placeholder="请选择商品类目" style="width: 150px;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <span style="margin:0 10px 0 100px">需求预算：</span>
                                        <el-select v-model="value" placeholder="最小值" style="width: 160px;">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <span>—</span>
                                        <el-select v-model="value" placeholder="最大值" style="width: 160px;">
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
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                            </div>
                        <el-table :data="tableData">
							<el-table-column prop="orderNo" label="需求单号" width="60"></el-table-column>
                            <el-table-column prop="username" label="用户名称" width="60"></el-table-column>
                            <el-table-column prop="phone" label="用户联系方式" width="106"></el-table-column>
							<el-table-column prop="cateName" label="需求类目"></el-table-column>
							<el-table-column prop="amount" label="需求预算" width="60"></el-table-column>
							<el-table-column prop="demandDesc" label="需求描述" width="60"></el-table-column>
							<el-table-column prop="statusStr" label="需求状态" width="76"></el-table-column>
							<el-table-column prop="joinerNum" label="参与人数" width="60"></el-table-column>
							<el-table-column prop="createTime" label="发布时间"></el-table-column> 
                            <el-table-column label="操作" width="100" align="center">
                                <template slot-scope="scope">
                                        <el-popover placement="right" width="710" trigger="click" v-model="visible">
                                            <div style="padding:30px" class="">
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">需求详情</div>
                                                    <div class="popoverConText">
                                                                <div class="reqDetail" style="margin:40px 0 0 40px">
                                                                    <div>需求类目：<span>图形设计&nbsp;&gt;&nbsp;标志设计</span> </div>
                                                                    <div>需求预算：<span>20.00元</span> </div>
                                                                    <div>需求描述：<span>Roblox GFX（徽标/图标尺寸）</span></div>
                                                                    <div>参考条件：<span>无</span></div>
                                                                </div>
                                                    </div>
                                                </div>
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">商家描述</div>
                                                    <div class="popoverConText">
                                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                                    </div>
                                                    <div>
                                                        <el-upload
                                                            class="upload-demo"
                                                            action="https://jsonplaceholder.typicode.com/posts/"
                                                            :on-preview="handlePreview"
                                                            :on-remove="handleRemove"
                                                            :file-list="fileList"
                                                            list-type="picture">
                                                            <el-button size="small" type="primary">点击上传</el-button>
                                                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                                        </el-upload>
                                                    </div>
                                                </div>
                                                <div class="dispalyFlex" style="width:400px;margin:20px auto">
                                                    <el-button style="background:#81d8d0;color:#fff" @click="cancelChanges">取消</el-button>
                                                    <el-button style="background:#81d8d0;color:#fff" @click="saveChanges">参与竞标</el-button>
                                                </div>
                                            </div>
                                                <!-- <el-button slot="reference" type="danger" size="mini" @click="attr(scope.row)">参与竞标</el-button> -->
                                                <el-button slot="reference" type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">参与竞标</el-button>
                                        <!--<p>确定删除本条数据吗？</p>
                                        <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
                                        <el-button :loading="delLoading" type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
                                        </div>
                                        <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini">删除</el-button> -->
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
                    <el-tab-pane label="我竞标的需求" name="second">
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
			orderNo:null
		};
        const item = {
			orderNo:'',
            username: '',
            phone: null,
			demandDesc: '',
			cateName:'',
			amount:null,
			statusStr:'',
			joinerNum:null,
			createTime:null
		};
        return {
            activeName: 'first',
			tableData: Array(0).fill(item),
			queryData:query,
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
            input:"",
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
            currentPage4: 4,
            //dialog
            visible:false,
            //dialog上传图片
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    async mounted() {
            var res = await GoodsHttp.demandBid(this.queryData.orderNo);
			this.tableData=res.data.biz.content;
    },
    methods: {
        async toQuery() {
			var resa = await GoodsHttp.demandBid(this.queryData.orderNo);
			this.tableData=resa.data.biz.content;
			
        },
        showIframe1(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            this.iframeState = false;
            // this.$router.push(path)
            this.$router.push({name:'myOrder'})
        },
        handleRemove(){
            console.log("handleRemove")
        },
        handlePreview(){
            console.log("handlePreview")
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        saveChanges(){
            console.log("saveChanges")
        },
        cancelChanges(){
            console.log("cancelChanges")
        },
    },
    
}
</script>
<style scoped>
.reqDetail div{
    margin: 20px 0;
}
.popoverCon{
    margin: 40px 0;
}
.popoverConText{
    margin-top: 20px;
}
</style>