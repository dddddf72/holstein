<template>
    <div style="width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/userOrder' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>竞标管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="竞标大厅" name="first">
                        <div>
                            <div>
                                <el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" style="width: 150px;" class="filter-item"  />
                                <el-cascader  placeholder="请选择商品类目"
                                    v-model="queryData.categoryId"
                                    :options="NavTitle"
                                    :props="{value:'id',label:'cateName',children:'children'}"
                                    @change="handleChange"></el-cascader>
                                <span style="margin:0 10px 0 100px">需求预算：</span>
                                        <el-input type="number" v-model="queryData.minAmount" placeholder="最小值" style="width: 160px;"></el-input>
                                        <span>—</span>
                                        <el-input type="number" v-model="queryData.maxAmount" placeholder="最大值" style="width: 160px;"></el-input>
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toQuery">查询</el-button>
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                            </div>
                            
                            <!--表单组件-->
                    <eForm ref="form" @toQuery="toQuery" />
                        <el-table :data="tableData">
							<el-table-column prop="orderNo" label="需求单号" ></el-table-column>
							<el-table-column prop="cateName" label="需求类目"></el-table-column>
							<el-table-column prop="orderAmount" label="需求预算" ></el-table-column>
							<el-table-column prop="demandDesc" label="需求描述" ></el-table-column>
							<el-table-column label="需求状态" >
                                <template slot-scope="scope">
                                        <div v-if="scope.row.status === 4">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else-if="scope.row.status === 0">
                                            <div style="color:green">竞标中</div>
                                        </div>
                                        <div v-else-if="scope.row.status === 1">
                                            <div style="color:green">竞标中</div>
                                        </div>
                                        <div v-else-if="scope.row.status === 2">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else-if="scope.row.status === -3">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else-if="scope.row.status === 3">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else-if="scope.row.status === -1">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else-if="scope.row.status === -2">
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:green">竞标已结束</div>
                                        </div>
                                    </template>
                            </el-table-column>
							<el-table-column prop="joinerNum" label="参与人数" ></el-table-column>
							<el-table-column prop="createTime" label="发布时间"></el-table-column> 
                            <el-table-column label="操作" width="100" align="center">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.status === 0|| scope.row.status ===1">
                                        <el-button size="mini" type="primary"  @click="edit(scope.row)" >参与竞标</el-button>
<!--                                        <el-button size="mini" type="primary"  @click="jumpChat(scope.row)" >在线沟通</el-button>-->
                                    </div>
                                    <div v-else>
<!--                                        <el-button size="mini" type="primary"  @click="jumpChat(scope.row)" >在线沟通</el-button>-->
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
                    <el-tab-pane label="我竞标的需求" name="second">
                        <div>
                            <div>
                                <el-input v-model="queryData1.orderNo" clearable placeholder="输入搜索订单号" style="width: 150px;" class="filter-item"  />
                                <el-cascader  placeholder="请选择商品类目"
                                    v-model="queryData1.categoryId"
                                    :options="NavTitle"
                                    :props="{value:'id',label:'cateName',children:'children'}"
                                    @change="handleChange1"></el-cascader>
                                <span style="margin:0 10px 0 100px">需求预算：</span>
                                        <el-input type="number" v-model="queryData1.minAmount" placeholder="最小值" style="width: 160px;"></el-input>
                                        <span>—</span>
                                        <el-input type="number" v-model="queryData1.maxAmount" placeholder="最大值" style="width: 160px;"></el-input>
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toQuery1">查询</el-button>
                                <el-button class="filter-item" size="mini" type="primary" icon="el-icon-refresh">刷新</el-button>
                            </div>
                            <!--表单组件-->
                            <eForm1 ref="form1" @toQuery1="toQuery1" />
                                <el-table :data="tableData1">
                                    <el-table-column prop="orderNo" label="需求单号" ></el-table-column>
                                    <el-table-column prop="cateName" label="需求类目"></el-table-column>
                                    <el-table-column prop="orderAmount" label="需求预算" ></el-table-column>
                                    <el-table-column prop="merchantBudget" label="商家报价" ></el-table-column>
                                    <el-table-column prop="demandDesc" label="需求描述" ></el-table-column>
                                    <el-table-column label="需求状态" >
                                        <template slot-scope="scope">
                                                <div v-if="scope.row.status === 4">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else-if="scope.row.status === 0">
                                                    <div style="color:green">竞标中</div>
                                                </div>
                                                <div v-else-if="scope.row.status === 1">
                                                    <div style="color:green">竞标中</div>
                                                </div>
                                                <div v-else-if="scope.row.status === 2">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else-if="scope.row.status === -3">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else-if="scope.row.status === 3">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else-if="scope.row.status === -1">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else-if="scope.row.status === -2">
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                                <div v-else>
                                                    <div style="color:green">竞标已结束</div>
                                                </div>
                                            </template>
                                    </el-table-column>
                                    <el-table-column prop="joinerNum" label="参与人数" ></el-table-column>
                                    <el-table-column prop="createTime" label="发布时间"></el-table-column> 
                                    <el-table-column label="操作" width="100" align="center">
                                        <template slot-scope="scope">
                                            <el-button size="mini" type="primary"  @click="edit1(scope.row)" >查看详情</el-button>
<!--                                            <el-button size="mini" type="primary"  @click="jumpChat(scope.row)" >在线沟通</el-button>-->
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        <div style="margin-top:60px">
                                <el-pagination
                                    @size-change="handleSizeChange1"
                                    @current-change="handleCurrentChange1"
                                    :current-page.sync="currentPage1"
                                    :page-sizes="[10]" :page-size="10"
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
import eForm from './DemandBidDia/dialog.vue'
import eForm1 from './DemandBidDia/dialog1.vue'
export default {
    data() {
		const query={
			orderNo:null,
            categoryId:'',
            minAmount:'',
            maxAmount:'',
		};
		const query1={
			orderNo:null,
            categoryId:'',
            minAmount:'',
            maxAmount:'',
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
            // isAdd:false,
            NavTitle:[],
            user:"",
            userId:'',
            activeName: 'first',
			tableData: [],
			tableData1: [],
			queryData:query,
			queryData1:query1,
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
            input:"",
            merchantDesc:"",//参与竞标商家描述
            value: '',
            //页
            total:0,
            pageSize:4,
            total1:0,
            pageSize1:4,
            currentPage: 1,
            currentPage1: 1,
            //dialog
            visible:true,
            dialogComVisible:false,
            dialogComVisible1:false,
            //dialog上传图片
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
  components: { eForm,eForm1 },
    async mounted() {
        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
                    this.createWebSocket(this.userId)
        var resa = await GoodsHttp.serviceProCategory()
        this.NavTitle = resa.data.biz.content
            var res = await GoodsHttp.demandBid(this.queryData.orderNo,this.queryData.categoryId,this.queryData.minAmount,this.queryData.maxAmount,this.userId,0,0,10);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
            var res1 = await GoodsHttp.demandBid(this.queryData.orderNo,this.queryData.categoryId,this.queryData.minAmount,this.queryData.maxAmount,this.userId,1,0,10);
            var {list,total,size} = res1.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.total1 = total
			// this.tableData=res.data.biz.list;
            // if(JSON.parse(this.$cookie.get("loginInfo"))){
            //         this.user = JSON.parse(this.$cookie.get("loginInfo"));
            //         // console.log(this.user.id)
            //         // this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
            //         // this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
            //         // this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
            //         if(this.user){
            //             this.userId = this.user.id
            //         }
            // }
    },
    methods: {
        handleChange(cateId){
            this.queryData.categoryId = cateId[cateId.length-1]
        },
            handleChange1(cateId){
                this.queryData1.categoryId = cateId[cateId.length-1]
            },
        async toQuery() {
			var resa = await GoodsHttp.demandBid(this.queryData.orderNo,this.queryData.categoryId,this.queryData.minAmount,this.queryData.maxAmount,this.userId,0,0,10);
            var {list,total,size} = resa.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
			// this.tableData=resa.data.biz.list;
        },
        async toQuery1() {
            
			var res =  await GoodsHttp.demandBid(this.queryData1.orderNo,this.queryData1.categoryId,this.queryData1.minAmount,this.queryData1.maxAmount,this.userId,1,0,10);
            // this.tableData1=res.data.biz.list;
            var {list,total,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.total1 = total
        },
        showIframe1(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
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
            if(tab.$options.propsData.name == 'first'){
                    this.toQuery()
                }else if(tab.$options.propsData.name == 'second'){
                    this.toQuery1()
                }
        },

        //分页//分页
        async handleCurrentChange(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.demandBid(this.queryData.orderNo,this.queryData.categoryId,this.queryData.minAmount,this.queryData.maxAmount,this.userId,0,`${pageIn}`-1,this.pageSize)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                var res = await GoodsHttp.demandBid(this.queryData.orderNo,this.queryData.categoryId,this.queryData.minAmount,this.queryData.maxAmount,this.userId,0,0,`${val}`)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
            async handleCurrentChange1(pageIn) {
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.demandBid(this.queryData1.orderNo,this.queryData1.categoryId,this.queryData1.minAmount,this.queryData1.maxAmount,this.userId,1,`${pageIn}`-1,this.pageSize1)
                var {list,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.currentPage1 = 1
            },
        async handleSizeChange1(val) {
                var res = await GoodsHttp.demandBid(this.queryData1.orderNo,this.queryData1.categoryId,this.queryData1.minAmount,this.queryData1.maxAmount,this.userId,1,0,`${val}`)
                var {list,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.currentPage1 = 1
            },
            edit(data) {
                const _this = this.$refs.form
                _this.form = {
                    id: data.id,
                    cateName: data.cateName,
                    username: data.username,
                    orderAmount: data.orderAmount,
                    demandDesc: data.demandDesc,
                    merchantDesc: data.merchantDesc,
                    merchantBudget: data.merchantBudget,
                    // isShow: data.isShow
                }
                _this.dialog = true
            },
            edit1(data) {
                // this.isAdd = false
                const _this = this.$refs.form1
                _this.form1 = {
                    id: data.id,
                    cateName: data.cateName,
                    username: data.username,
                    orderAmount: data.orderAmount,
                    demandDesc: data.demandDesc,
                    merchantDesc: data.merchantDesc,
                    merchantBudget: data.merchantBudget,
                    // isShow: data.isShow
                }
                _this.dialog = true
            },
            jumpChat(sco){
              var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
              var userId = loginInfo.id
              var receiver2 =null;
              var buyer1 = sco.buyer
              var accepter = sco.accepter;
              var createUser = sco.createUser;
              if(accepter !=null && accepter !=''){
                receiver2 = accepter;
              }else if(buyer1 ==null || buyer1 == ''){
                receiver2 = buyer1;
              }else{
                receiver2 = createUser;
              }
                var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}`;
                // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
                window.open(wechatScan,"_blank")
            },
        // async saveChanges(sco){
        //         // alert(sco.id)
        //     this.$http.post('api/bid',{
        //         demandId:sco.id,
        //         bidder:this.userId,
        //         merchantDesc:this.merchantDesc,
        //         merchantBudget:sco.receiveAmount==null?0:sco.receiveAmount
        //     }).then(res=>{
        //         var message = res.data.msg.message;
        //         // console.log(message)
        //         if(message=="竞标成功"){
        //             this.$message.success(message)
        //             setTimeout(() => {
        //                 this.$refs[sco].doClose()
        //                 this.toQuery()
        //                 this.toQuery1()
        //             }, 1000);
        //         }else{
        //             this.$message.error(message);
        //         }
        //     }).catch(err=>{
        //         this.$message.error("竞标失败");
        //         this.dialogComVisible = false
        //     })
            
        // },
        // //关闭dialog
        //     cancelChanges(done) {
        //         this.$confirm('确认关闭？')
        //         .then(res=> {
        //             done();
        //             setTimeout(() => {
        //                 this.toQuery()
        //                 this.toQuery1()
        //             }, 1000);
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         });

        //         // this.$confirm('确认关闭？')
        //         // .then(_ => {
        //         //     done();
        //         // })
        //         // .catch(_ => {});
        //     },
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