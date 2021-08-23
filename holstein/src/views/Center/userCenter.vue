<template>
    <div>
        <div class="" style="display:flex;align-items:center">
            <div class="avatar" style="width:145px;height:148px">
              <img v-if="loginInfo.headPhoto==null||loginInfo.headPhoto==undefined ||loginInfo.headPhoto==''" style="width:145px;height:148px;border-radius:50%" src="../../assets/img/top/组 2(2).png" alt="">
              <img v-else style="width:145px;height:148px;border-radius:50%" :src="getImgUrl(loginInfo.headPhoto)" alt="">
            </div>
            <div class="sellerComment" style="margin-left:27px">
                <div style="color:#000000;font-size:24px">
                    你好{{username}}，欢迎回来！
                </div>
                <div class="dispalyFlex" style="cursor:pointer">
                    <div @click="jumpserverModInf" class="one">
                        <span>个人信息修改</span><i class="el-icon-edit"></i>
                    </div>
                    <div @click="jumpserverRealAuth" :class="['one',loginInfo.idCard?'two':'']">
                        <span>实名认证</span><i class="el-icon-user" style=""></i><span v-if="loginInfo.idCard">（已实名）</span>
                    </div>
                </div>
            </div>
        </div>
                            <div class="dispalyFlex myInfo" style="margin:30px 0 70px 0">
<!--                                <div><span>账户余额:</span><span>0元</span></div>-->
                                <div><span>历史消费:</span><span>0元</span></div>
                                <div><span>我的订单:</span><span>0个</span></div>
                                <div><span>我的收藏:</span><span>0个</span></div>
                            </div>
                            <div class="dispalyFlex" style="margin-bottom:30px;cursor:pointer">
                                <div class="myOrderProcess">我的订单进展</div>
                                <div @click="showAll">查看全部订单></div>
                            </div>
                            
                            <eForm ref="form" @toQuery="toQuery" @toRefresh="refresh" />
                            <eFormf ref="form1" @toQuery="toQuery" />
                            <el-table :data="tableData">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>
                                
                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        
                                        <div v-if="scope.row.statusStr === '待支付'" style="cursor:pointer">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="edit(scope.row)">资金托管</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '进行中'" style="cursor:pointer">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline"  @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <!--<div class="payBtn" @click="editf(scope.row)">文件交付</div>-->
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'" style="cursor:pointer">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '竞标中'" style="cursor:pointer">
                                            <div style="float:right">
                                                <div class="checkOrderDetail"  @click="dialogComVisible = true">查看竞标详情</div>
                                                <el-dialog title="查看参与竞标详情"
                                                        :visible.sync="dialogComVisible"
                                                        width="35%"
                                                        :before-close="cancelChanges">
                                            <div style="padding:10px" class="">
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">需求详情</div>
                                                    <div class="popoverConText">
                                                                <div class="reqDetail" style="margin-top:10px">
                                                                    <div>需求类目：<span>图形设计&nbsp;&gt;&nbsp;{{scope.row.username}}</span> </div>
                                                                    <div>需求预算：<span>{{scope.row.amount}}</span> </div>
                                                                    <div>需求描述：<span>{{scope.row.demandDesc}}</span></div>
                                                                    <div>参考条件：<span>{{scope.row.createTime}}</span></div>
                                                                </div>
                                                    </div>
                                                </div>
                                                <div class="popoverCon">
                                                    <div class="myOrderProcess">商家描述</div>
                                                    <div class="popoverConText">
                                                        <el-input v-model="scope.row.demandDesc" placeholder="请输入内容"></el-input>
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
                                                <span slot="footer" class="dialog-footer">
                                                    <el-button style="background:#81d8d0;color:#fff" @click="dialogComVisible = false">取 消</el-button>
                                                    <el-button style="background:#81d8d0;color:#fff" @click="saveChanges(scope.row)">参与竞标</el-button>
                                                </span>
                                            </div>
                                        </el-dialog>
                                            </div>
                                        </div>
                                        <div v-else >
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)" style="cursor:pointer">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)" style="cursor:pointer">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div style="margin-top:70px">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="收藏服务" name="first">
                                        <div>
                                          <div class="recommandGood" style="flex-wrap: wrap;display:flex;align-items:center;" >
                                            <div v-for="(userFootsVO,index) in content" :key="index">
                                              <div style="width:310px;height:383px;border: 1px solid #D4D4D4;">
												<!-- 商品图片 -->
												<div style="width: 310px; height: 210px"
												   @click="JumpDetail(userFootsVO.id)">
												   <img
													   style="width: 308px; height: 210px"
													   :src="getImgUrl(userFootsVO.productImgUrl)"
													   alt=""
												   />
												</div>
												<!-- 商品图片 -->
                                                <div style="padding:30px 20px">
                                                  <div style="display:flex;">
                                                    <!-- 商家头像 -->
                                                    <div style="width: 45px; height: 46px" v-if="userFootsVO.merchantInfo.headImg">
                                                    	 <img style="
                                                    			 width: 45px;
                                                    			 height: 46px;
                                                    			 border-radius: 50%;"
                                                    	:src="getImgUrl(userFootsVO.merchantInfo.headImg)"
                                                    		 alt="" />
                                                    </div>
                                                    <div style="width: 45px; height: 46px" v-else>
                                                    	 <img
                                                    		 style="
                                                    			 width: 45px;
                                                    			 height: 46px;
                                                    			 border-radius: 50%;
                                                    		 "
                                                    		 src="../../assets/images/detail/组 21.png"
                                                    		 alt=""
                                                    	 />
                                                    </div>
                                                    <!-- 商家头像 -->
                                                    <div style="margin-left:10px">
													   <!-- 商家名称 -->
													   <div>{{userFootsVO.merchantInfo.nickname}}</div>
													   <!-- 商家名称 -->
													   <!-- 商家标签 -->
													   <div style="display: flex" class="MerchantLabel">
														<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
														<div class="sellerTypeStr" >
														   {{ userFootsVO.sellerTypeStr }}
														</div>
														<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
														<!-- 保证金用户、非保证金用户 -->
														<div class="bailAmountStr" >
															{{ userFootsVO.bailAmountStr }}
														</div>
														<!-- 保证金用户、非保证金用户 -->
														<!-- 是否评价最高的卖家 -->
														<!-- <div v-if="userFootsVO.merchantInfo.isPjzgStr != null && userFootsVO.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
															{{ userFootsVO.merchantInfo.isPjzgStr }}
														</div> -->
														<!-- 是否评价最高的卖家 -->
														<!-- 是否为新卖家 -->
														<div v-if="userFootsVO.isNewSellerStr != null && userFootsVO.isNewSellerStr != ''" class="isNewSellerStr" >
															{{ userFootsVO.isNewSellerStr }}
														</div>
														<!-- 是否为新卖家 -->
													 </div>
													 <!-- 商家标签 -->
                                                    </div>
                                                  </div>
                                                  <!-- 服务名称 -->
                                                  <div style="margin:10px 0 5px 0;-webkit-line-clamp: 1;height:21px;width:280px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}">
                                                  	{{ userFootsVO.serviceName }}
                                                  </div>
                                                  <!-- 服务名称 -->
                                                  <!-- 售卖金额 -->
                                                  <div
                                                      style="
                                                          color: #d81e06;
                                                          font-weight: bold;
                                                          font-size: 16px;
                                                      "
                                                  >
                                                      ￥{{ userFootsVO.price }}
                                                  </div>
                                                  <!-- 售卖金额 -->
                                                  <div style="display:flex;justify-content:space-between">
													<!-- 星级、评分、订单量 -->
													<div>
													  <div
														  class="star"
														  style="
															  width: 81px;
															  height: 13px;
															  display: inline-block;
														  "
													  >
														  <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
																		  <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
																		  <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
																		  <img v-else src="../../src/assets/images/icon/none-star.png">
																	  </div>  -->
														  <img
															  src="@/assets/images/detail/五星 拷贝 3.png"
															  alt=""
														  />
													</div>
													<span style="color: #ffcc09; margin-left: 3px"
														v-if="userFootsVO.zhScore ===0 || userFootsVO.zhScore === '' || userFootsVO.zhScore ===null ">暂无评分</span
													>
													<span style="color: #ffcc09; margin-left: 3px"
													   v-if="userFootsVO.zhScore !=0 && userFootsVO.zhScore != ''&& userFootsVO.zhScore !=null" >{{userFootsVO.zhScore}}</span
													>
													  <span>（{{userFootsVO.orderCount| merchantBudgetZero}}个订单）</span>
												  </div>
												  <!-- 星级、评分、订单量 -->
												  <!-- 点赞按钮 -->
												  <div>
													<!--<img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">-->
													<img @click="handlecollectChange(userFootsVO)" style="width: 18px; height: 16px" :src="userFootsVO.isCollect ? collection : collection_anti" alt="" class="icon" />
												  </div>
                                                 </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                    </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                        </div>

</template>
<script>

import collection from '@/assets/images/icon/collection.png';
import collection_anti from '@/assets/images/icon/collection-anti.png';
    // import UserHttp from '@/model/UserHttp'
import Holstein from '@/components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
import NavMenu from "@/components/NavMenu.vue";
import GoodsHttp from '@/model/GoodsHttp'
import eForm from '@/views/Center/merchant/orderFund/fund.vue'
import eFormf from '@/views/Center/merchant/orderFile/file.vue'

export default {
    components: {
        Holstein,Footer,
        NavMenu: NavMenu,
        eForm,eFormf
    },
    data() {
        const query={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3
			payType:null,//4
			status:null,//5
		};
        return {
            username:'',
            loginInfo:'',
            activeName: 'first',
            userType:'',
            tableData:[],//全部     status
            queryData:query,
            // showalllist:false,
            dialogComVisible:false,
            
            content:[],
            browse_time :[],
            userId:JSON.parse(this.$cookie.get("loginInfo")).id,collection,collection_anti,
      //页
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
        }
    },
    async mounted() {
      if(this.$cookie || JSON.parse(this.$cookie.get("loginInfo"))){
        
            if(this.userId){
              let start = window.location.href.lastIndexOf('/user/');
    let path = window.location.href.slice(start+1);
    this.activeIndex = path;
                    this.$http.post('/api/snailUser/info',{
                            userId:this.userId
                    }).then((res)=>{
                        var message = res.data.msg.message;
                        console.log(res.data.biz)
                        this.loginInfo=res.data.biz
                        if(message=="成功"){
                            this.loginInfo=res.data.biz;
                            this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                        }
                    })
                    this.loginInfo = JSON.parse(this.$cookie.get("loginInfo"));
                    console.log(this.loginInfo)
        this.username = this.loginInfo.username;
        this.userType = this.loginInfo.userType
        this.userId = this.loginInfo.id
    
                this.toQuery()
                this.getCollect()
            }
        }
    },
    methods: {
      async getCollect(){
        this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
    const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        this.browse_time[0] = start
        this.browse_time[1] = end
            this.$http.post('api/myCollect/wnUserCollect?page=0&size=6',{
              browse_time: this.browse_time,
              userid: this.userId
            }).then((res)=>{
              var {list,total,size} = res.data.biz;
                          this.content = list;
                          if(this.content.length>3){
                              this.content = this.content.slice(0,3)
                          }
                          this.pageSize = size;
                          this.total = total
              // var message = res.data.msg.message;
              // if(message=="成功"){
              //   this.$message.success('成功查询')
              //   // this.$data.totalElements = res.data.totalElements;
              // }
            })

      },
        async showAll(){
            this.$router.push('/myOrder')
            // this.showalllist = !this.showalllist
        },
        jumpserverRealAuth(){
            this.$router.push('/Realauth')
          },
          jumpserverModInf(){
            this.$router.push('/ModifyInf')
          },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        HTMLEncode1(p){
            return this.HTMLEncode(p)
        },
        //收藏
    async handlecollectChange(value) {
        if(this.$cookie && this.$cookie.get('loginInfo')){
            var { id, isCollect } = value;
            var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
            var userId = userInfo.id;
            if (isCollect) {
                value.isCollect = false;
                await GoodsHttp.unCollect({ id, userId });
                this.getCollect()
                this.$message.success('取消收藏成功');
            } else {
                value.isCollect = true;
                this.$http
                    .post('/api/serviceProduct/collect', {
                        serviceId: id,
                        collectId: JSON.parse(this.$cookie.get('loginInfo')).id
                    })
                    .then((res) => {
                        this.getCollect()
                        var message = res.data.msg.message;
                        this.$message.success(message);
                    });
            }
        }else{
            this.$message.error('请先登录')
            this.$router.push('/login')
        }
    },
        async toQuery(){
            var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,null,this.userId,0,10)
                var {list} = res.data.biz;
                        this.tableData = list;
                        if(this.tableData.length>3){
                            this.tableData = this.tableData.slice(0,3)
                        }
        },
        async refresh(){
			this.queryData.orderNo='';
			this.queryData.username='';
			this.queryData.payType=null;
			this.queryData.serviceName='';
			this.queryData.status=null;
			this.toQuery();
		},
        edit(data) {
                // this.isAdd = false
                const _this = this.$refs.form
                _this.form = data
                _this.dialog = true
            },
        jumpFundSituation(id){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            // this.$router.push(path)
            this.$router.push(`fundSituation?id=${id}`);
        },
        jumpchat(sco){
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
            // var selected_provider = sco.selected_provider;
            var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}`;
            // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
            window.open(wechatScan,"_blank")
        },
    //     /*  */
        handleClick(){
            console.log("handleClick")
        },
        cancelChanges(done){
          done();
        },
    },
    
}
</script>
<style scoped>
.home{
    width: 100%;
}
.center{
    margin: 0 320px;
}
    /*  */
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 60px auto;
    }
    /*  */
    .myInfo div>span:first-child{
        color: #000000;
    }
    .myInfo div>span:nth-child(2){
        margin-left: 10px;
        color: #81d8d0;
    }
    #pane-first .recommandCarou .el-carousel__container{
        height: 390px !important;
    }
    /*  */
    .one{
      color:#666666;
    }
    .two{
      color:#81d8d0;
    }
	.recommandGood > div {
	    margin-right: 10px;
	}
	.recommandGood>div:nth-child(n+4){
	  margin-top: 20px;
	}
</style>