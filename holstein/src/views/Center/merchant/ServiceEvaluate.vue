<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品评价</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="评价列表" name="first">
                        <div>
							<!--<div style="margin: 20px 0 0 30px;width: 200px;">
							    <el-input
							        placeholder="搜索订单号/订单名称"
							        prefix-icon="el-icon-search"
							        v-model="orderNo" @change="toQuery">
							    </el-input>
							</div>-->
                            <div style="margin:30px 30px;text-align: left;">
                                <el-button type="primary" size="mini" icon="el-icon-refresh" @click="toQuery">刷新</el-button>
                            </div>
                            
                            <!--表单组件-->
                    <eForm ref="form" @toQuery="toQuery" />
                            <el-table :data="tableData">
                                <el-table-column type="index" label="序号">
                                    <template scope="scope">
                                        <span>{{scope.$index + 1}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="username" label="用户名称"></el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="goodScore" label="商品评分"></el-table-column>
                                <el-table-column prop="serviceScore" label="服务评分"></el-table-column>
                               <el-table-column prop="orderNo" label="订单号" ></el-table-column>
                                <el-table-column label="评论内容">
                                    <template scope="scope">
                                        <span>
                                            {{scope.row.evaluateDes}}
                                        </span>
                                    </template>
                                </el-table-column> 
                                <el-table-column prop="createTime" label="评论时间"></el-table-column>
                                <el-table-column prop="replyTime" label="回复时间"></el-table-column> 
                                <el-table-column label="操作" width="205px" align="center">
                                    <template slot-scope="scope">
                                            <div v-if="scope.row.replyTime==null">
                                                <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">回复</el-button>
                                            </div>
                                            <div v-else>
                                                <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">查看回复</el-button>
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
// import UserHttp from '@/model/UserHttp'
import GoodsHttp from '@/model/GoodsHttp'
import eForm from './ServiceEvaluateDia/dialog.vue'
export default {
  components: { eForm },
    data() {
        const item = {
            username: null,
			serviceName: '',
			goodScore:null,
			serviceScore:null,
			evaluateDes:"",
			createTime:null,
			replyTime:null
		};
		
        return {

            user:"",
            userId:"",
            activeName: 'first',
			tableData: [],
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
            visible:false,
            //dialog上传图片
            // fileJson: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            // ,
            dialogContImgUrl:'',
            dialogContImgVisible:false,
            fileJson:[
                    // {
                    //   "fileType": 1, //1、图片；2、音频；3、视频；4、文档'
                    //     "fileUrl": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                    // }
                ],
            //页
            pageSize:10,
            currentPage: 1,
            total:20
        }
    },
    async mounted() {
        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
            var res = await GoodsHttp.serviceEvaluate(this.userId,0,10);
			// this.tableData=res.data.biz.content;
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
    },
    methods: {
		async subDelete(id){
            var res=await GoodsHttp.evaluateDel(id);
            this.$message.success(res.data.msg.message);
            this.toQuery();
        },
        async toQuery() {
			var resa =  await GoodsHttp.serviceEvaluate(this.userId,0,10);
            // this.tableData=resa.data.biz.content;
            var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        //分页
        async handleCurrentChange(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.serviceEvaluate(this.userId,`${pageIn}`-1,this.pageSize)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                var res = await GoodsHttp.serviceEvaluate(this.userId,0,`${val}`)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
            edit(data) {
                // this.isAdd = false
                data.userType = 2;
                const _this = this.$refs.form
                _this.form = data
                _this.dialog = true
                console.log(data)
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
</style>