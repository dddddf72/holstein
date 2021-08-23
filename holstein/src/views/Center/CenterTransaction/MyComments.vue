<template>
    <div style="margin-left: 40px; width: 970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">交易管理</el-breadcrumb-item>
            <el-breadcrumb-item>我的评价</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin: 50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="待评论" name="first">
                <eForm ref="form" @toQuery="toQuery" />
                    <div style="margin-top: 20px;width: 200px;">
                        <el-input
                            placeholder="搜索订单号/订单名称"
                            prefix-icon="el-icon-search"
                            v-model="orderNo" @change="toQuery">
                        </el-input>
                    </div>
                    <div style="margin-top: 20px">
                        <div>
                            
                            <el-table :data="content">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div>
                                            <div style="color: #666666">
                                                {{ scope.row.serviceName }}
                                            </div>
                                            <div style="margin: 5px 0 5px 0">
                                                <span style="color: #999999">商家—</span
                                                ><span>{{ scope.row.username }}</span
                                                ><span style="color: #333333"
                                                    >接受了需求，正在为您服务</span
                                                >
                                            </div>
                                            <div style="">
                                                <span>{{ scope.row.orderTime }}</span>
                                            </div>
                                            <div style="">
                                                订单编号：<span>{{ scope.row.orderNo }}</span>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单状态">
                                    <template>
                                        <div>
                                            <div style="color:green">已完成</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.status === 4">
                                            <div v-if="scope.row.orderAmount">
                                                总金额：￥{{ scope.row.orderAmount }}元
                                            </div>
                                            <div v-if="scope.row.receiveAmount">
                                                实际托管金额：￥{{ scope.row.receiveAmount }}元
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">
                                                总金额：￥{{ scope.row.orderAmount }}元
                                            </div>
                                            <div v-if="scope.row.receiveAmount">
                                                实际托管金额：￥{{ scope.row.receiveAmount }}元
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.isTraceableEvaluation==='0'">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >追评</el-button
                                            >
                                        </div>
                                        <div v-else-if="scope.row.isTraceableEvaluation==='1'">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >查看评论</el-button
                                            >
                                        </div>
                                        <div v-else-if="scope.row.isTraceableEvaluation===null">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >评论</el-button
                                            >
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top: 20px">
                            <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage"
                                :page-sizes="[10]" :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total"
                            >
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="可追评" name="second">
                    <div style="margin-top: 20px;width: 200px;">
                        <el-input
                            placeholder="搜索订单号/订单名称"
                            prefix-icon="el-icon-search"
                            v-model="orderNo1"
                            @change="toQuery1"
                        >
                        </el-input>
                    </div>
                    <div style="margin-top: 20px">
                        <div>
                            <eForm ref="form" @toQuery="toQuery1" />
                            <el-table :data="content1">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div>
                                            <div style="color: #666666">
                                                {{ scope.row.serviceName }}
                                            </div>
                                            <div style="margin: 5px 0 5px 0">
                                                <span style="color: #999999">商家—</span
                                                ><span>{{ scope.row.username }}</span
                                                ><span style="color: #333333"
                                                    >接受了需求，正在为您服务</span
                                                >
                                            </div>
                                            <div style="">
                                                <span>{{ scope.row.orderTime }}</span>
                                            </div>
                                            <div style="">
                                                订单编号：<span>{{ scope.row.orderNo }}</span>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单状态">
                                    <template>
                                        <div>
                                            <div style="color:green">已完成</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.orderAmount">
                                            总金额：￥{{ scope.row.orderAmount }}元
                                        </div>
                                        <div v-if="scope.row.receiveAmount">
                                            实际托管金额：￥{{ scope.row.receiveAmount }}元
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.isTraceableEvaluation==='0'">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >追评</el-button
                                            >
                                        </div>
                                        <div v-else-if="scope.row.isTraceableEvaluation==='1'">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >查看评论</el-button
                                            >
                                        </div>
                                        <div v-else-if="scope.row.isTraceableEvaluation===null">
                                            <el-button
                                                type="primary"
                                                icon="el-icon-edit"
                                                size="mini"
                                                @click="edit(scope.row)"
                                                >评论</el-button
                                            >
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top: 60px">
                            <el-pagination
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page.sync="currentPage1"
                                :page-sizes="[10]" :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total1"
                            >
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp';
import eForm from '../merchant/userComment/dialog1.vue';
export default {
    components: { eForm },
    data() {
        const query = {
            orderNo: null, //1
            username: '', //2
            serviceName: '', //3
            payType: null, //4
            status: null //5
        };
        const item = {
            username: null,
            serviceName: '',
            goodScore: null,
            serviceScore: null,
            evaluateDes: '',
            createTime: null,
            replyTime: null
        };
        return {
            user: '',
            userId: '',
            activeName: 'first',
            //页
            pageSize: 4,
            currentPage: 1,
            total: 0,
            pageSize1: 4,
            currentPage1: 1,
            total1: 0,

            //评
            orderNo: '',
            content: [],
            orderNo1: '',
            content1: [],

            dialogComVisible1: false,
            dialogComVisible2: false,
            fileList: [],
            fileList1: []
        };
    },
    async mounted() {
        this.userId = JSON.parse(this.$cookie.get('loginInfo')).id;
        // console.log(this.userId);
        this.$http
            .post('api/serviceEvaluate/list', {
                page: this.currentPage,
                size: this.pageSize,
                orderNo: this.orderNo,
                userId: this.userId
            })
            .then((res) => {
                var { list, total, size } = res.data.biz.page;
                this.content = list;
                // console.log(this.content)
                this.pageSize = size;
                this.total = total;
            });

        this.$http
            .post('api/serviceEvaluate/traceablelList', {
                page: this.currentPage1,
                size: this.pageSize1,
                orderNo: this.orderNo1,
                userId: this.userId
            })
            .then((res) => {
                var { list, total, size } = res.data.biz.page;
                this.content1 = list;
                // console.log(this.content1)
                this.pageSize1 = size;
                this.total1 = total;
            });
    },
    methods: {
        handleClick(tab, event) {
            if(tab.$options.propsData.name == 'first'){
                    this.$http
                        .post('api/serviceEvaluate/list', {
                            page: this.currentPage,
                            size: this.pageSize,
                            orderNo: this.orderNo,
                            userId: this.userId
                        })
                        .then((res) => {
                            var { list, total, size } = res.data.biz.page;
                            this.content = list;
                            // console.log(this.content)
                            this.pageSize = size;
                            this.total = total;
                        });
                }else if(tab.$options.propsData.name == 'second'){
                    this.$http
                        .post('api/serviceEvaluate/traceablelList', {
                            page: this.currentPage1,
                            size: this.pageSize1,
                            orderNo: this.orderNo1,
                            userId: this.userId
                        })
                        .then((res) => {
                            var { list, total, size } = res.data.biz.page;
                            this.content1 = list;
                            // console.log(this.content1)
                            this.pageSize1 = size;
                            this.total1 = total;
                        });
                }
        },

        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        async toQuery() {
            this.$http
                .post('api/serviceEvaluate/list', {
                    page: this.currentPage - 1,
                    size: this.pageSize,
                    orderNo: this.orderNo,
                    userId: this.userId
                })
                .then((res) => {
                    var { list, total, size } = res.data.biz.page;
                    this.content = list;
                    this.pageSize = size;
                    this.total = total;
                });
        },
        async toQuery1() {
            this.$http
                .post('api/serviceEvaluate/traceablelList', {
                    page: this.currentPage1 - 1,
                    size: this.pageSize1,
                    orderNo: this.orderNo1,
                    userId: this.userId
                })
                .then((res) => {
                    var { list, total, size } = res.data.biz.page;
                    this.content1 = list;
                    this.pageSize1 = size;
                    this.total1 = total;
                });
        },
        edit(data) {
            const _this = this.$refs.form;
            _this.form = {
                orderNo: data.orderNo,
                serviceId: data.serviceId,
                serviceName: data.serviceName,
                orderAmount: data.orderAmount,
                goodScore: data.goodScore,
                serviceScore: data.serviceScore,
                evaluateDes: data.evaluateDes,
                isTraceableEvaluation: data.isTraceableEvaluation,
                comment:data.comment
                // files:[]
            };
            _this.dialog = true;
        },
        edit2(data) {
            const _this = this.$refs.form;
            _this.form = {
                orderNo: data.orderNo,
                serviceId: data.serviceId,
                serviceName: data.serviceName,
                orderAmount: data.orderAmount,
                goodScore: data.goodScore,
                serviceScore: data.serviceScore,
                evaluateDes: data.evaluateDes,
                isTraceableEvaluation: data.isTraceableEvaluation,
                comment:data.comment
            };
            _this.dialog = true;
        },



        // async refresh(){
        // 	this.queryData.orderNo='';
        // 	this.queryData.username='';
        // 	this.queryData.payType=null;
        // 	this.queryData.serviceName='';
        // 	this.queryData.status=null;
        // 	this.toQuery();
        // },
        // async refresh1(){
        // 	this.queryData1.orderNo='';
        // 	this.queryData1.username='';
        // 	this.queryData1.payType=null;
        // 	this.queryData1.serviceName='';
        // 	this.queryData1.status=null;
        // 	this.toQuery1();
        // },
        //分页
        async handleCurrentChange(pageIn) {
            console.log(`当前页: ${pageIn}`);
            this.$http
                .post('api/serviceEvaluate/list', {
                    page: `${pageIn}` - 1,
                    size: this.pageSize,
                    userid: this.userId
                })
                .then((res) => {
                    var { list } = res.data.page;
                    this.content = list;
                });
        },
        async handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            // var res = await GoodsHttp.myCollect(this.browse_time,25,this.currentPage-1,`${val}`)
            this.$http
                .post('api/serviceEvaluate/list', {
                    page: 0,
                    size: `${val}`,
                    userid: this.userId
                })
                .then((res) => {
                    var { list, size } = res.data.biz.page;
                    this.content = list;
                    this.pageSize = size;
                    this.currentPage = 1;
                });
        },
        async handleCurrentChange1(pageIn) {
            console.log(`当前页: ${pageIn}`);
            this.$http
                .post('api/serviceEvaluate/list', {
                    page: `${pageIn}` - 1,
                    size: this.pageSize1,
                    userid: this.userId
                })
                .then((res) => {
                    var { list } = res.data.page;
                    this.content1 = list;
                })
                .catch((err) => {
                    return false;
                });
        },
        async handleSizeChange1(val) {
            console.log(`每页 ${val} 条`);
            this.$http
                .post('api/serviceEvaluate/list', {
                    page: 0,
                    size: `${val}`,
                    userid: this.userId
                })
                .then((res) => {
                    var { list, size } = res.data.biz.page;
                    this.content1 = list;
                    this.pageSize1 = size;
                    this.currentPage1 = 1;
                })
                .catch((err) => {
                    return;
                });
        },
        submitUpload(row) {
            console.log(row);
            this.$refs.upload.submit();
        },
        submitUpload1(row) {
            console.log(row);
            this.$refs.upload.submit();
        },
        handleChange() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleChange1() {
            this.$refs.upload.submit();
        },
        handleRemove1(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview1(file) {
            console.log(file);
        },
        //关闭dialog
        handleClose(done) {
          done();
        },
        handleClose1(done) {
          done();
        },
        //处理评分显示星星的函数
        handleStar(ele) {
            var arr = [];
            for (let i = 0; i < 5; i++) {
                if (ele >= 2) {
                    arr.push(2);
                } else if (ele >= 0) {
                    arr.push(Number(ele.toFixed(1)));
                } else {
                    arr.push(0);
                }
                ele = ele - 2;
            }
            return arr;
        }
    }
};
</script>

<style scoped>
table {
    border-collapse: collapse;
    border: 1px solid #d8d8d8;
}
.el-container .el-main {
    display: none !important;
}
td,
th {
    padding: 0 10px;
    border: 1px solid #d8d8d8;
}
tr td {
    height: 50px;
}
th {
    height: 30px;
}
</style>