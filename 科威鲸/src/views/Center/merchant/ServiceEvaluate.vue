<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品评价</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="评价列表" name="first">
                        <div>
                            <div style="margin:30px">
                                <el-button type="primary" class="filter-item" size="mini" icon="el-icon-refresh" @click="toQuery">刷新</el-button>
                            </div>
                            <el-table :data="tableData">
                                <el-table-column prop="index" label="序号"></el-table-column>
                                <el-table-column prop="username" label="用户名称"></el-table-column>
                                <el-table-column prop="serviceName" label="商品名称"></el-table-column>
                                <el-table-column prop="goodScore" label="商品评分"></el-table-column>
                                <el-table-column prop="serviceScore" label="服务评分"></el-table-column>
                                <el-table-column prop="evaluateDes" label="评论内容"></el-table-column> 
                                <el-table-column prop="createTime" label="评论时间"></el-table-column>
                                <el-table-column prop="replyTime" label="回复时间"></el-table-column> 
                                <el-table-column label="操作" width="205px" align="center">
                                    <template slot-scope="scope">
                                        <el-popover
                                            :ref="scope.row.id" 
                                            placement="right" title="评价回复" width="710" trigger="click" v-model="visible"
                                            >
                                            <div style="padding:30px" class="">
                                                <div class="dispalyFlex evaluateInf" style="">
                                                    <div>购买商品编号：1</div>
                                                    <div>购买商品名称：AAAA</div>
                                                    <div>购买商品类目：1</div>
                                                    <div>购买商品数量：1</div>
                                                    <div>购买商品价格：20元</div>
                                                </div>
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">评论内容</div>
                                                    <div class="popoverConText">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                                                    </div>
                                                </div>
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">评论图片</div>
                                                    <div class="popoverConText dispalyFlex" style="background:red">
                                                        <div>
                                                            <img src="../../../assets/images/detail/组 21@2x(7).png" alt="" style="width:200px">
                                                        </div>
                                                        <div>
                                                            <img src="../../../assets/images/detail/组 21@2x(7).png" alt="" style="width:200px">
                                                        </div>
                                                        <div>
                                                            <img src="../../../assets/images/detail/组 21@2x(7).png" alt="" style="width:200px">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">商家回复</div>
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
                                                    <el-button style="background:#81d8d0;color:#fff" @click="saveChanges">回复</el-button>
                                                </div>
                                            </div>
                                                <el-button slot="reference" type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">回复</el-button>
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
            </el-tabs>
        </div>
    </div>
</template>
<script>
import GoodsHttp from '@/model/GoodsHttp'
export default {
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
            activeName: 'first',
			tableData: Array(0).fill(item),
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
            visible:false,
            //dialog上传图片
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    async mounted() {
            var res = await GoodsHttp.serviceEvaluate(1);
			this.tableData=res.data.biz.content;
    },
    methods: {
		async subDelete(id){
            var res=await GoodsHttp.evaluateDel(id);
            this.$message.success(res.data.msg.message);
            this.toQuery();
        },
        async toQuery() {
			var resa =  await GoodsHttp.serviceEvaluate(1);
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
        },
        //dialog
        cancelChanges(){
            this.$confirm('确认关闭？')
            .then(res => {
                console.log(res)
            })
            .catch(err => {console.log(err)});
        },
        //dialog上传图片
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
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