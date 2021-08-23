<template>
  <div style="margin-left:40px;width:970px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的关注</el-breadcrumb-item>
      <el-breadcrumb-item>我的足迹</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top: 50px;">
      <div class="block">
        <span class="demonstration">足迹范围选择： </span>
        <el-date-picker
            v-model="browse_time"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size ="mini"
            align="left" @change="toQuery" >
        </el-date-picker>
      </div>
    </div>
    <div style="margin:20px 0">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的足迹" name="first">
          <div>
                <div class="recommandGoods" style="flex-wrap:wrap;display:flex;align-items:center;">
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
                        		 src="../../../assets/images/detail/组 21.png"
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
                       <!-- 点赞按钮 -->
                      </div>
                    </div>
                  </div>
                </div>
                </div>
          </div>
          <div style="margin-top:60px">
            <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-sizes="[6]" :page-size="6"
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

import collection from '@/assets/images/icon/collection.png';
import collection_anti from '@/assets/images/icon/collection-anti.png';
import GoodsHttp from '@/model/GoodsHttp';
export default {
  data() {
    const query={
			serviceId:null,
			serviceName:'',
      categoryId:'',
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
            collection,
            collection_anti,
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
      browse_time :[],
      sort : 'p.id',
      //页
            pageSize:6,
            currentPage: 1,
            total:0,
      content:[]
    }
  },
  mounted() {
    //将4个16改成this.userId
    this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
    const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        this.browse_time[0] = start
        this.browse_time[1] = end
            this.$http.post('api/myFootprint/wnUserFoot?page=0&size=6',{
              browse_time: this.browse_time,
              userid: this.userId
            }).then((res)=>{
              var {list,total,size} = res.data.biz;
                          this.content = list;
                          this.pageSize = size;
                          this.total = total
            })
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
                this.toQuery()
                this.$message.success('取消收藏成功');
            } else {
                value.isCollect = true;
                this.$http
                    .post('/api/serviceProduct/collect', {
                        serviceId: id,
                        collectId: JSON.parse(this.$cookie.get('loginInfo')).id
                    })
                    .then((res) => {
                        this.toQuery()
                        var message = res.data.msg.message;
                        this.$message.success(message);
                    });
            }
        }else{
            this.$message.error('请先登录')
            this.$router.push('/login')
        }
    },
    async  toQuery(){
      this.$http.post(`api/myFootprint/wnUserFoot?page=${this.currentPage-1}&size=${this.pageSize}`,{
        sort : ['p.id,asc'],
        browse_time: this.browse_time,
        userid: this.userId
      }).then((res)=>{
        var {list,total,pageSize} = res.data.biz;
                          this.content = list;
                          this.pageSize = pageSize;
                          this.total = total
      })
    },
    getImgUrl(productImgUrl) {
        return this.getBaseImgUrl(productImgUrl);
    },
    HTMLEncode1(p){
        return this.HTMLEncode(p)
    },
    //分页
        async handleCurrentChange(pageIn) {
                this.$http.post(`api/myFootprint/wnUserFoot?page=${`${pageIn}`-1}&size=${this.pageSize}`,{
                  browse_time: this.browse_time,
                  userid: this.userId
                }).then((res)=>{
                    var {list,total,pageSize} = res.data.biz;
                          this.content = list;
                          this.pageSize = pageSize;
                          this.total = total
                })
            },
        async handleSizeChange(val) {
                this.$http.post(`api/myFootprint/wnUserFoot?page=0&size=${`${val}`}`,{
                  browse_time: this.browse_time,
                  userid: this.userId
                }).then((res)=>{
                    var {list,total,pageSize} = res.data.biz;
                          this.content = list;
                          this.pageSize = pageSize;
                          this.total = total
                    this.currentPage = 1
                })
            },
  }
}
</script>

<style scoped>
table{
  border-collapse:collapse;
  border: 1px solid #d8d8d8;
}
.el-container .el-main{
  display: none !important;
}
td,th{

  padding:0 10px;
  border: 1px solid #d8d8d8;
}
tr td{
  height: 50px;
}
th{
  height: 30px;
}
.recommandGoods > div {
    margin-right: 8px;
}
.recommandGoods>div:nth-child(n+4){
  margin-top: 20px;
}

</style>