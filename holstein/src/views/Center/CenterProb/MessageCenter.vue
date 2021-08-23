<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>消息管理</el-breadcrumb-item>
            <el-breadcrumb-item>消息列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="消息列表" name="first">
                    <div>
                        <div style="margin:30px">
                            <el-button type="primary" class="filter-item" size="mini" icon="el-icon-refresh" @click="toQuery">刷新</el-button>
                        </div>
                        <eForm ref="form" @toQuery="toQuery" />
                        <el-table :data="tableData">
                            <el-table-column type="index" label="序号">
                                    <template scope="scope">
                                        <span>{{scope.$index + 1}}</span>
                                    </template>
                                </el-table-column>
                            <el-table-column prop="senderName" label="发送人"></el-table-column>
                            <el-table-column label="内容">
                                <template scope="scope">
                                    <span>
                                        {{scope.row.content | nameHide}}
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="receiverName" label="接收人"></el-table-column>
                            <el-table-column prop="createTime" label="发送时间"></el-table-column>
                            <el-table-column label="操作" width="205px" align="center">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)">查看详情</el-button>
                                    <el-popover
                                            :ref="scope.row.id"
                                            placement="top"
                                            width="180"
                                    >
                                        <p>确定删除本条数据吗？</p>
                                        <div style="text-align: right; margin: 0">
                                            <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
                                            <el-button type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
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
import eForm from '../merchant/MessageListDia/dialog.vue'
    export default {
        components: { eForm },
        data() {
            const item = {
                senderName: null,
                content: '',
                receiverName:null,
                createTime:null
            };

            return {
                user:"",
                userId:"",
                activeName: 'first',
                tableData: Array(0).fill(item),
                tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
                visible:false,
                //dialog上传图片
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
                ,
                //页
                pageSize:4,
                currentPage: 1,
                total:20,
                dialogComVisible2:false,
            }
        },
        async mounted() {
            if(this.$cookie && this.$cookie.get("loginInfo")){
                this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
                var res = await GoodsHttp.messageList(this.userId,0,10);
                // this.tableData=res.data.biz.list;
                var {list,total,size} = res.data.biz;
                        this.tableData = list;
                        this.pageSize = size;
                        this.total = total
                //设置消息已读
                await GoodsHttp.setRead(this.userId)
            }
            
        },
        methods: {
            async subDelete(id){
                var res=await GoodsHttp.evaluateDel(id);
                this.$message.success(res.data.msg.message);
                this.toQuery();
            },
            async toQuery() {
                var resa = await GoodsHttp.messageList(this.userId,0,10);
                // this.tableData=res.data.biz.list;
                var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
            },
            handleClick(tab, event) {
            },
            //分页
        async handleCurrentChange(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.messageList(this.userId,`${pageIn}`-1,this.pageSize)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                var res = await GoodsHttp.messageList(this.userId,0,`${val}`)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },

            edit(data) {
                // this.isAdd = false
                const _this = this.$refs.form
                _this.form = {
                    id: data.id,
                    senderName: data.senderName,
                    receiverName: data.receiverName,
                    content: data.content,
                    createTime: data.createTime
                }
                _this.dialog = true
            },
            //dialog
            cancelChanges(done) {
              done();

                // this.$confirm('确认关闭？')
                // .then(_ => {
                //     done();
                // })
                // .catch(_ => {});
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