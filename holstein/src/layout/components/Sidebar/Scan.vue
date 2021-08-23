<template>
    <div id="whole">
        <div class="banner">
            <img
                class="bannerImg"
                :src="NavTitleOne.pic"
                alt=""
                @click="JumpDetail(NavTitleOne.id)"
            />
            <div class="bannerTxt bannercenter">
                <div class="free">{{ NavTitleOne.cateName }}</div>
                <div class="slogan">
                    <span class="sloganOne">{{ NavTitleOne.label }}</span>
                </div>
            </div>
        </div>
        <div class="merchantRegist">
            <div class="merchantRegistration" style="">
                <div class="selectServiceClass partTop">
                    <div class="addTitle">{{Selservicecat}}</div>
                    <div v-show="NavTitleChildShow">
                        <el-carousel trigger="click" indicator-position="none" arrow="hover" height="170px">
                            <el-carousel-item v-for="(k, index) in Math.ceil(NavTitleChild.length / 5)" :key="index" >
                                <div class="playWith" style="display: flex;padding: 50px;">
                                    <div v-for="(NavTitleChi, index) of NavTitleChild.slice((k - 1) * 5,k * 5)" :key="index" >
										<a  @click="handleSelect1(NavTitleChi.pid,NavTitleChi.id)">
											<img :src="NavTitleChi.pic" class="imgLogo">
											<span style="margin-right: 12px;font-size: 16px;">{{NavTitleChi.cateName}}</span>
											<span><img src="@/assets/img/箭头.png" style="
											width: 16px;height: 16px;margin-top: 8px;"></span>
										</a>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="partTop">
                        <div style="background: #81d8d0; height: 55px; line-height: 55px">
                            <el-popover @click="handleClick" class="dropDownL" placement="bottom-start" trigger="click" >
                                <div class="dropdownMenu">
                                    <div style=" color: #333333; font-weight: bold;padding: 16px 0 0 40px;" >
                                        卖方资质
                                    </div>
                                    <div class="dotLine"></div>
                                    <div class="checkBoxs" style="padding-left: 40px">
                                        <el-checkbox-group v-model="filterData.sellerQualification" @change="handleCheckedqualiChange" >
                                            <div v-for="quali in qualis" :key="quali">
                                                <el-checkbox :label="quali">{{quali}}</el-checkbox>
                                            </div>
                                        </el-checkbox-group>
                                    </div>
                                    <div style="background: #f0f0f0">
                                        <div class="dispalyFlex" style="padding: 17px 40px">
                                            <el-checkbox :indeterminate="isIndeterminatequali" v-model="checkAllquali"
                                                @change="clearsellquali"
                                                style="width: 80px;height: 26px;border-bottom: 1px dashed #888888;color: #999999;line-height: 26px;text-align: center; " >全选</el-checkbox>
                                            <div
                                                @click="handlefilter"
                                                style="
                                                    width: 80px;
                                                    height: 26px;
                                                    background: #81d8d0;
                                                    color: #fff;
                                                    text-align: center;
                                                    line-height: 26px;
                                                    text-align: center;
                                                "
                                            >
                                                确定
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <el-button
                                    type="primary"
                                    style="background: #81d8d0; border: none"
                                    slot="reference"
                                >
                                    卖方资质<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                            </el-popover>
                            <el-popover
                                @click="handleClick"
                                class="dropDownL"
                                placement="bottom-start"
                                trigger="click"
                            >
                                <el-button
                                    type="primary"
                                    style="background: #81d8d0; border: none"
                                    slot="reference"
                                >
                                    售卖金额<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <div class="dropdownMenu">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                    <div>
                                        <div
                                            style="
                                                color: #333333;
                                                font-weight: bold;
                                                padding: 16px 0 0 40px;
                                            "
                                        >
                                            售卖金额
                                        </div>
                                        <div class="dotLine"></div>
                                        <div class="checkBoxs">
                                            <div style="padding: 0 40px">
                                                <div class="dispalyFlex">
                                                    <div style="width: 60px; height: 26px">
                                                        <el-input
                                                            v-model="filterData.minPrice"
                                                            placeholder="最小金额"
                                                        ></el-input>
                                                    </div>
                                                    <div>---</div>
                                                    <div style="width: 60px; height: 26px">
                                                        <el-input
                                                            v-model="filterData.maxPrice"
                                                            placeholder="最大金额"
                                                        ></el-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="background: #f0f0f0">
                                            <div class="dispalyFlex" style="padding: 17px 40px">
                                                <div
                                                    @click="clearSaleamount"
                                                    style="
                                                        width: 60px;
                                                        height: 26px;
                                                        border-bottom: 1px dashed #888888;
                                                        color: #999999;
                                                        line-height: 26px;
                                                        text-align: center;
                                                    "
                                                >
                                                    全选
                                                </div>
                                                <div
                                                    @click="handlefilter"
                                                    style="
                                                        width: 60px;
                                                        height: 26px;
                                                        background: #81d8d0;
                                                        color: #fff;
                                                        text-align: center;
                                                        line-height: 26px;
                                                        text-align: center;
                                                    "
                                                >
                                                    确定
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-popover>
                            <el-popover
                                @click="handleClick"
                                class="dropDownL"
                                placement="bottom-start"
                                trigger="click"
                            >
                                <el-button
                                    type="primary"
                                    style="background: #81d8d0; border: none"
                                    slot="reference"
                                >
                                    交货时间<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <div class="dropdownMenu">
                                    <div>
                                        <div
                                            style="
                                                color: #333333;
                                                font-weight: bold;
                                                padding: 16px 0 0 40px;
                                            "
                                        >
                                            交货时间
                                        </div>
                                        <div class="dotLine"></div>
                                        <div class="checkBoxs" style="padding-left: 40px">
                                            <el-checkbox-group
                                                v-model="filterData.jhsj"
                                                @change="handleCheckeddeadlinesChange"
                                            >
                                                <div v-for="deadline in deadlines" :key="deadline">
                                                    <el-checkbox :label="deadline">{{
                                                        deadline
                                                    }}</el-checkbox>
                                                </div>
                                            </el-checkbox-group>

                                        </div>
                                        <div style="background: #f0f0f0">
                                            <div class="dispalyFlex" style="padding: 17px 40px">
                                                <el-checkbox
                                                    :indeterminate="isIndeterminatedeadline"
                                                    v-model="checkAlldeadline"
                                                    @change="cleartimeDelivery"
                                                    style="
                                                        width: 60px;
                                                        height: 26px;
                                                        border-bottom: 1px dashed #888888;
                                                        color: #999999;
                                                        line-height: 26px;
                                                        text-align: center;
                                                    "
                                                    >全选</el-checkbox
                                                >
                                                <div
                                                    @click="handlefilter"
                                                    style="
                                                        width: 60px;
                                                        height: 26px;
                                                        background: #81d8d0;
                                                        color: #fff;
                                                        text-align: center;
                                                        line-height: 26px;
                                                        text-align: center;
                                                    "
                                                >
                                                    确定
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-popover>
                        </div>
                        <div style="margin-top: 20px">{{ this.$data.total }}个可用服务</div>
                    </div>
                </div>
                <div class="recommandLists partTop">
                    <div class="addTitle">为您推荐的服务</div>
					<!-- 商品标签 -->
                    <div class="recommandGoods" style="width: 1280px; flex-wrap: wrap;display:flex;align-items:center;cursor: pointer">
                        <div v-for="(value, index) in ServCateId" :key="index">
                            <div style="width: 310px;height:383px;border: 1px solid #D4D4D4;">
								<!-- 商品图片 -->
                                <div style="width: 310px; height: 210px"
                                    @click="JumpDetail(value.id)">
                                    <img
                                        style="width: 308px; height: 210px"
                                        :src="getImgUrl(value.productImgUrl)"
                                        alt=""
                                    />
                                </div>
								<!-- 商品图片 -->
								<!-- 商品内容 -->
                                <div style="padding: 30px 20px">
                                    <div style="display: flex">
										<!-- 商家头像 -->
                                        <div style="width: 45px; height: 46px" v-if="value.merchantInfo.headImg">
                                            <img style="
                                                    width: 45px;
                                                    height: 46px;
                                                    border-radius: 50%;"
												:src="getImgUrl(value.merchantInfo.headImg)"
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
                                        <div style="margin-left: 10px" >
											<!-- 商家名称 -->
                                            <div>{{ value.merchantInfo.nickname }}</div>
											<!-- 商家名称 -->
											<!-- 商家标签 -->
                                            <div style="display: flex" class="MerchantLabel">
												<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                                                <div class="sellerTypeStr" >
                                                    {{ value.merchantInfo.sellerTypeStr }}
                                                </div>
                                                <!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                                                <!-- 保证金用户、非保证金用户 -->
                                                <div class="bailAmountStr" >
                                                    {{ value.merchantInfo.bailAmountStr }}
                                                </div>
                                                <!-- 保证金用户、非保证金用户 -->
												<!-- 是否评价最高的卖家 -->
												<!-- <div v-if="value.merchantInfo.isPjzgStr != null && value.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
												    {{ value.merchantInfo.isPjzgStr }}
												</div> -->
												<!-- 是否评价最高的卖家 -->
                                                <!-- 是否为新卖家 -->
                                                <div v-if="value.merchantInfo.isNewSellerStr != null && value.merchantInfo.isNewSellerStr != ''" class="isNewSellerStr" >
                                                    {{ value.merchantInfo.isNewSellerStr }}
                                                </div>
												<!-- 是否为新卖家 -->
                                            </div>
											<!-- 商家标签 -->
                                        </div>
                                    </div>
									<!-- 服务描述 -->
                                    <div :title="value.serviceName" style="margin:10px 0 5px 0;-webkit-line-clamp: 1;height:21px;width:280px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}">
                                        {{ value.serviceName }}
                                    </div>
									<!-- 售卖金额 -->
                                    <div style="color: #d81e06; font-weight: bold; font-size: 16px">
                                        ¥{{ value.price }}
                                    </div>
                                    <div style="display: flex; justify-content: space-between">
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
                                                <img
                                                    src="../../../assets/images/detail/五星 拷贝 3.png"
                                                    alt=""
                                                />
                                            </div>
                                            <span style="color: #ffcc09; margin-left: 3px"
                                                v-if="value.zhScore ===0 || value.zhScore === '' || value.zhScore ===null ">暂无评分</span
                                            >
                                            <span style="color: #ffcc09; margin-left: 3px"
                                               v-if="value.zhScore !=0 && value.zhScore != ''&& value.zhScore !=null" >{{value.zhScore}}</span
                                            >
                                            <span>（{{ value.orderCount }}个订单）</span>
                                        </div>
										<!-- 点赞按钮 -->
                                        <div>
                                            <!--<img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">-->
                                            <img
                                                @click="handlecollectChange(value)"
                                                style="width: 18px; height: 16px"
                                                :src="
                                                    value.isCollect ? collection : collection_anti
                                                "
                                                alt=""
                                                class="icon"
                                            />
                                        </div>
										<!-- 点赞按钮 -->
                                    </div>
                                </div>
								<!-- 商品内容 -->
                            </div>
                        </div>
                    </div>
                    <!-- 商品标签 -->
                    <div class="pageRule" style="margin: 45px auto">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[20]" :page-size="20"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                        >
                        </el-pagination>
                    </div>
                </div>
                <div class="releaseReq partTo" style="background:#99bed8;height:150px">
                    <div class="dispalyFlex" style="width:825px;margin:auto;padding-top: 42px;">
                        <div class="dispalyFlex">
                            <div style="width:65px;height:65px">
                                <img style="width:65px;height:65px" src="../../../assets/images/scan/嗨.png" alt="">
                            </div>
                            <div style="height:50px;color:#fff;line-height:50px;font-size:30px;margin-left:30px">嗨~&nbsp;&nbsp;&nbsp;需要让人才主动来找你吗？</div>
                        </div>
                        <div style="width:160px;height:50px;background:#fff;color:#99bed8;line-height:50px;font-size:16px;">
                            <div @click="releaseDilaog = true" style="text-align:center;cursor: pointer;">
                                发布需求
                            </div>
                            <el-dialog
                           :visible.sync="releaseDilaog"
                           title="发布需求">
                                <el-form :model="form" :rules="rules" ref="form" label-width="130px" label-position="left" style="margin:20px 30px;">
                                    <el-form-item label="需求类目" prop="cateId">
                                        <el-cascader
                                        v-model="form.cateId"
                                        :options="NavTitle"
                                        :props="{value:'id',label:'cateName',children:'children'}"
                                        @change="handleChange"></el-cascader>
                                    </el-form-item>
                                    <el-form-item label="需求预算" prop="amount">
                                        <el-input
                                            placeholder="请输入预算"
                                            prefix-icon="el-icon-wallet"
                                            v-model="form.amount"
                                            onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item  label="需求失效时间" prop="cancelNum" >
                                        <el-select v-model="form.cancelNum" clearable placeholder="若在所选的时间内无人竞标，该单自动下架" style="width:420px">
                                            <el-option v-for="item in statusOptions" :key="item.key" :label="item.status_name" :value="item.key" />
                                        </el-select>
                                        <div slot="tip" class="">如果需要修改下架时间，请于到期前一天修改，且修改仅限一次</div>
                                    </el-form-item>
                                    <el-form-item  label="需求描述" prop="demandDesc" class="rightAlign">
                                        <el-input type="textarea" placeholder="请对你的需求进行简单的描述，例如，我想做一个网站" v-model="form.demandDesc"></el-input>
                                    </el-form-item>
                                    <el-form-item label="需求附件" prop="demandFile" class="rightAlign">
                                        <el-upload drag
                                        action="action"
                                        :limit="1" multiple :file-list="form.demandFile"
                                        accept=".rar ,.zip, "
                                        :on-success="uploadSuccess">
                                            <i class="el-icon-upload"></i>
                                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                            <div class="el-upload__tip" slot="tip">只能上传<span style="color: #cc0000">一个压缩包</span>文件</div>
                                        </el-upload>
                                    </el-form-item>
                                    <div class="concernBtn" style="cursor: pointer;border-radius: 4%;" @click="publish('form')">
                                        发布需求
                                    </div>
                                </el-form>
                            </el-dialog>
                        </div>
                    </div>
                </div>
                <div class="visitedHistory partTop" v-show="clearVisitedShow">
                    <div class="dispalyFlex">
                        <div class="addTitle">浏览记录</div>
                        <div class="dispalyFlex" style="width: 150px">
                            <div @click="clearVisited">全部清除</div>
                            |
                            <div @click="visitAll">查看全部</div>
                        </div>
                    </div>
                    <div
                        class="recommandGoods dispalyFlex"
                        style="flex-wrap: wrap"
                    >
                        <div class="recommandGoods" style=" flex-wrap: wrap;display:flex;align-items:center;cursor: pointer">
                            <div v-for="(itemVisit) of resultVisited" :key="itemVisit.id">
                               <div style="width: 310px;height:383px;border: 1px solid #D4D4D4;">
                               		<!-- 商品图片 -->
                                       <div style="width: 310px; height: 210px"
                                           @click="JumpDetail(itemVisit.id)">
                                           <img
                                               style="width: 308px; height: 210px"
                                               :src="getImgUrl(itemVisit.productImgUrl)"
                                               alt=""
                                           />
                                       </div>
                               		<!-- 商品图片 -->
                               		<!-- 商品内容 -->
                                       <div style="padding: 30px 20px">
                                           <div style="display: flex">

                               				<!-- 商家头像 -->
                                               <div style="width: 45px; height: 46px" v-if="itemVisit.merchantInfo.headImg">
                                                   <img style="
                                                           width: 45px;
                                                           height: 46px;
                                                           border-radius: 50%;"
                               						:src="getImgUrl(itemVisit.merchantInfo.headImg)"
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
                                               <div style="margin-left: 10px" >
                               					<!-- 商家名称 -->
                                                   <div>{{ itemVisit.merchantInfo.nickname }}</div>
                               					<!-- 商家名称 -->
                               					<!-- 商家标签 -->
                                                   <div style="display: flex" class="MerchantLabel">
                               						<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                                                       <div class="sellerTypeStr" >
                                                           {{ itemVisit.merchantInfo.sellerTypeStr }}
                                                       </div>
                               						<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                               						<!-- 保证金用户、非保证金用户 -->
                               						<div class="bailAmountStr" >
                               						    {{ itemVisit.merchantInfo.bailAmountStr }}
                               						</div>
                               						<!-- 保证金用户、非保证金用户 -->
													<!-- 是否评价最高的卖家 -->
													<!-- <div v-if="itemVisit.merchantInfo.isPjzgStr != null && itemVisit.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
														{{ itemVisit.merchantInfo.isPjzgStr }}
													</div> -->
													<!-- 是否评价最高的卖家 -->
                               						<!-- 是否为新卖家 -->
													<div v-if="itemVisit.merchantInfo.isNewSellerStr != null && itemVisit.merchantInfo.isNewSellerStr != ''" class="isNewSellerStr" >
														{{ itemVisit.merchantInfo.isNewSellerStr }}
													</div>
                               						<!-- 是否为新卖家 -->
                                                   </div>
                               					<!-- 商家标签 -->
                                               </div>
                                           </div>
                               			<!-- 服务描述 -->
                                           <div style="margin:10px 0 5px 0;-webkit-line-clamp: 1;height:21px;width:280px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}">
                                               {{ itemVisit.serviceName }}
                                           </div>
                               			<!-- 服务描述 -->
                               			<!-- 售卖金额 -->
                                           <div style="color: #d81e06; font-weight: bold; font-size: 16px">
                                               ¥{{ itemVisit.price }}
                                           </div>
                               			<!-- 售卖金额 -->
                                           <div style="display: flex; justify-content: space-between">
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
                                                       <!--
                                                           <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                               <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                               <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                               <img v-else src="../../src/assets/images/icon/none-star.png">
                                                           </div>
                                                           -->
                                                       <img
                                                           src="../../../assets/images/detail/五星 拷贝 3.png"
                                                           alt=""
                                                       />
                                                   </div>
												   <span style="color: #ffcc09; margin-left: 3px"
												       v-if="itemVisit.zhScore ===0 || itemVisit.zhScore === '' || itemVisit.zhScore ===null ">暂无评分</span
												   >
												   <span style="color: #ffcc09; margin-left: 3px"
												      v-if="itemVisit.zhScore !=0 && itemVisit.zhScore != ''&& itemVisit.zhScore !=null" >{{itemVisit.zhScore}}</span
												   >
                                                   <span>（{{ itemVisit.orderCount }}个订单）</span>
                                               </div>
                               				<!-- 星级、评分、订单量 -->
                               				<!-- 点赞按钮 -->
                                               <div>
                                                   <!--<img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">-->
                                                   <img @click="handlecollectChange(itemVisit)" style="width: 18px; height: 16px" :src="itemVisit.isCollect ? collection : collection_anti" alt="" class="icon" />
                                               </div>
                               				<!-- 点赞按钮 -->
                                           </div>
                                       </div>
                               		<!-- 商品内容 -->
                                   </div>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import collection from '@/assets/images/icon/collection.png';
import collection_anti from '@/assets/images/icon/collection-anti.png';
import GoodsHttp from '@/model/GoodsHttp';
// import Holstein from '@/components/Nav/Holstein.vue'
// import Footer from '@/components/Footer/footer.vue'
const qualiOptions = [
    '评价最高的卖家',
    '一级卖家',
    '二级卖家',
    '新卖家',
    '保证金商户',
    '非保证金商户'
];
const deadlineOptions = ['24小时内交付', '3天内交付', '5天内交付', '随意'];
import NavMenu1 from '@/components/Dialog/NavMenu1.vue';

export default {
    inject: ['reload'],
    components: {
        NavMenu1
        // Holstein,Footer
    },
    watch: {
        loadMore: function (newV) {
            if (newV) {
                this.$store.dispatch('loadMoreFinish');
            }
        },
        $route: function (newV, oldV) {
            this.getDataFinish();
        }
    },
    data() {
        var validatesfz = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请完成必填项'));
            } else {
                callback();
            }
        };
        return {
            userId: '',
            /*  */
            collection,
            collection_anti,
            isCollect: '',
            /* 一级标题 */
            // Nav:[],
            NavTitle: [],
            NavTitleOne: '',
            /* 二级标题 */
            NavTitleChild: '',
            Selservicecat:"选择服务分类",
            NavTitleChildShow:true,
            //服务
            ServCateId: [],
            //页数
            total: 0,
            pageSize: 20,
            currentPage: 1,
            limit: 20,
            page: 0, //类似于offset
            //浏览记录
            resultVisited: [],
            //浏览记录 全部清除
            clearVisitedShow: false,
            //
            zfbTrust: '',
            activeIndex: '1',
            isShow: true, //whatCanWoDoItem和clickSituation样式
            backrgound: '#81d8d0',
            // checked:"",
            //卖方资质
            checkAllquali: false,
            isIndeterminatequali: true,
            qualis: qualiOptions,
            //交货时间
            checkAlldeadline: false,
            isIndeterminatedeadline: true,
            deadlines: deadlineOptions,
            //售卖金额
            inputMinRmb: '', //最小金额
            inputMaxRmb: '', //最大金额
            filterData: {
                sellerQualification: [],
                maxPrice: '',
                minPrice: '',
                jhsj: []
            },
            input2: '',
            //发布需求
            form: {
                    cateId: '',//需求类目
                    amount:'',//预算
                    demandDesc:"",
                    demandFile:[],
					          demandurl:'',
                    cancelNum:'',
                },
                statusOptions: [
                    { key: 3, status_name: '三个工作日' },
                    { key:7,status_name:'七个工作日（默认）'},
                    { key: 10, status_name: '十个工作日' },
                    { key:15,status_name:'十五个工作日'},
                  ],
                //表单验证规则
                rules: {
                    cateId: [
                            { required: true, message: "请选择类目",validator: validatesfz, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    amount: [
                            { required: true, message: "请输入预算",validator: validatesfz, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    cancelNum: [
                            { required: true, message: "请选择该需求自动失效时间",validator: validatesfz, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    demandDesc: [
                            { required: false, message: "请输入描述", trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    demandFile: [
                            { required: false, message: "请上传压缩文件", trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                },
            //上传文件
            fileList: [],
            //选择需求
            releaseDilaog:false,
        };
    },
    created() {
        this.$nextTick(function () {
            window.οnlοad = function () {
                if (location.href.indexOf('?xyz=') < 0) {
                    alert(123);
                    location.href = location.href + '?xyz=' + Math.random();
                }
            };
        });
    },
    async mounted() {
        this.initData();
        this.serviceInin();
        //显示浏览记录
        if (this.$cookie && this.$cookie.get('loginInfo')) {
            var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
            //浏览记录
            var resultVisi = await GoodsHttp.userserviceBrowse(userId);
            if (resultVisi.data.biz.list.length > 0 &&resultVisi.data.biz.list.length<5) {
                this.clearVisitedShow = true;
                    this.resultVisited = resultVisi.data.biz.list;
            }else if(resultVisi.data.biz.list.length>4){
                this.clearVisitedShow = true;
                this.resultVisited = resultVisi.data.biz.list.slice(0,4);
            }else{
                this.clearVisitedShow = false
            }

        }
    },
    methods: {
        async initData() {
            //从菜单跳转至浏览页    服务内容变化
            var { keyPath, ProId } = this.$route.query;
            var res = await GoodsHttp.serviceProCategory();
            var content = res.data.biz.content;
            this.NavTitle = content;
            var Selservicecat = '选择服务分类'
            for(var i = 0;i < content.length;i++){
              //筛选选中一级类目
              if(content[i].id == keyPath){
                //获取一级和二级类目
                this.NavTitleOne = content[i]
                this.NavTitleChild = content[i].children;

                //获取当前选中的二级类名名字
                if(ProId != '' && ProId != null){
                  for(var y=0;y < this.NavTitleChild.length; y++){
                    if(this.NavTitleChild[y].id == ProId){
                      Selservicecat = this.NavTitleChild[y].cateName;
                    }
                  }
                }
              }
            }

            //判断是否显示选择服务分类（二级分类）
            if((ProId == '' || ProId == null) && this.NavTitleChild.length > 0 ){
              this.NavTitleChildShow = true;
            }else{
              this.NavTitleChildShow = false
            }
            //返回当前选中的二级类目名字
            this.Selservicecat = Selservicecat;
            
        },
        async serviceInin() {
            var { keyPath, ProId } = this.$route.query;
            if (this.$cookie.get('loginInfo')) {
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
            } else {
                var userId = null;
            }
            var resSErProId = await GoodsHttp.serviceProCate(0,20, ProId, userId);
            // var {list,total,size} = resSErProId.data.biz;
            this.ServCateId = resSErProId.data.biz.list;
            this.pageSize = resSErProId.data.biz.pageSize;
            this.total = resSErProId.data.biz.total;
        },
        getDataFinish() {
            this.$store.dispatch('scan', this.$route.query.ProId);
            this.initData();
            this.serviceInin();
        },

        async handleSelect1(key, keyPath) {
            var ProId = key;
            var keyPathid = keyPath;
            this.$router.push(`scan?keyPath=${ProId}&ProId=${keyPathid}`);
        },
        //分页
        async handleCurrentChange(pageIn) {
            var qua = [];
            if (this.filterData.sellerQualification != '') {
                this.filterData.sellerQualification.map((item) => {
                    if (item == '评价最高的卖家') {
                        item = 1;
                    } else if (item == '一级卖家') {
                        item = 2;
                    } else if (item == '二级卖家') {
                        item = 3;
                    } else if (item == '新卖家') {
                        item = 4;
                    } else if (item == '保证金商户') {
                        item = 5;
                    } else if (item == '非保证金商户') {
                        item = 6;
                    }
                    qua.push(item);
                });
            }
            this.filterData.sellerQualification = qua.join(',');
            if (this.filterData.jhsj != '') {
                this.filterData.jhsj = encodeURI(this.filterData.jhsj[0]);
            }
            var url = '/api/serviceProduct?1=1';
            if (this.filterData.sellerQualification != '') {
                url = url + '&sellerQualification=' + this.filterData.sellerQualification;
            }
            if (this.filterData.jhsj != '') {
                url = url + '&jhsj=' + this.filterData.jhsj;
            }
            if (this.filterData.minPrice != '') {
                url = url + '&minPrice=' + this.filterData.minPrice;
            }
            if (this.filterData.maxPrice != '') {
                url = url + '&maxPrice=' + this.filterData.maxPrice;
            }
            if (`${pageIn}` - 1 != '') {
                url = url + '&page=' + (`${pageIn}` - 1);
            }
            if (this.pageSize != '') {
                url = url + '&size=' + this.pageSize;
            }
            if (this.$route.query.ProId != '') {
                url = url + '&categoryId=' + this.$route.query.ProId;
            }
            if (this.$cookie.get('loginInfo')) {
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
                url = url + '&userId=' + userId;
            }
            this.$http.get(url).then((res) => {
                this.ServCateId = res.data.biz.list;
            });
        },
        async handleSizeChange(val) {
            var qua = [];
            if (this.filterData.sellerQualification != '') {
                this.filterData.sellerQualification.map((item) => {
                    if (item == '评价最高的卖家') {
                        item = 1;
                    } else if (item == '一级卖家') {
                        item = 2;
                    } else if (item == '二级卖家') {
                        item = 3;
                    } else if (item == '新卖家') {
                        item = 4;
                    } else if (item == '保证金商户') {
                        item = 5;
                    } else if (item == '非保证金商户') {
                        item = 6;
                    }
                    qua.push(item);
                });
            }
            this.filterData.sellerQualification = qua.join(',');
            if (this.filterData.jhsj != '') {
                this.filterData.jhsj = encodeURI(this.filterData.jhsj[0]);
            }
            var url = '/api/serviceProduct?page=0';
            if (this.filterData.sellerQualification != '') {
                url = url + '&sellerQualification=' + this.filterData.sellerQualification;
            }
            if (this.filterData.jhsj != '') {
                url = url + '&jhsj=' + this.filterData.jhsj;
            }
            if (this.filterData.minPrice != '') {
                url = url + '&minPrice=' + this.filterData.minPrice;
            }
            if (this.filterData.maxPrice != '') {
                url = url + '&maxPrice=' + this.filterData.maxPrice;
            }
            if (this.currentPage - 1 != '') {
                url = url + '&page=' + (this.currentPage - 1);
            }
            if (`${val}` != '') {
                url = url + '&size=' + `${val}`;
            }
            if (this.$route.query.ProId != '') {
                url = url + '&categoryId=' + this.$route.query.ProId;
            }
            if (this.$cookie.get('loginInfo')) {
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
                url = url + '&userId=' + userId;
            }
            this.$http.get(url).then((res) => {

                this.ServCateId = res.data.biz.list;
                this.pageSize = res.data.biz.pageSize;
            });
        },
        clearsellquali(val) {
            // this.checkedHighCom = false,//评价最高的卖家（284）
            // this.checkedFirstSale = false,//一级卖家
            // this.checkedBail = false,//保证金商户（5
            // this.checkedSecondSale = false,
            // this.checkedNotSale = false,//非卖家（131
            // this.checkedNotBail = false
            this.filterData.sellerQualification = val ? qualiOptions : [];
            this.isIndeterminatequali = false;
        },
        handleCheckedqualiChange(value) {
            let checkedCount = Number(value.length);
            this.checkAllquali = checkedCount === 6;
            this.isIndeterminatequali = checkedCount > 0 && checkedCount < 6;
        },
        clearSaleamount() {
            (this.filterData.minPrice = ''), //最小金额
                (this.filterData.maxPrice = '');
        },
        cleartimeDelivery(val) {
            // this.checkedOneDay= false,//24小时内交付
            // this.checkedThreeDay= false,//3天内交付
            // this.checkedFiveDay= false,//5天内交付
            // this.checkedRandom = false
            this.filterData.jhsj = val ? deadlineOptions : [];
            this.isIndeterminatedeadline = false;
        },
        handleCheckeddeadlinesChange(value) {
            let checkedCount = Number(value.length);
            this.checkAlldeadline = checkedCount === this.deadlines.length;
            this.isIndeterminatedeadline = checkedCount > 0 && checkedCount < this.deadlines.length;
        },
        async handlefilter() {
            var qua = [];
            if (this.filterData.sellerQualification != '') {
                this.filterData.sellerQualification.map((item) => {
                    if (item == '评价最高的卖家') {
                        item = 1;
                    } else if (item == '一级卖家') {
                        item = 2;
                    } else if (item == '二级卖家') {
                        item = 3;
                    } else if (item == '新卖家') {
                        item = 4;
                    } else if (item == '保证金商户') {
                        item = 5;
                    } else if (item == '非保证金商户') {
                        item = 6;
                    }
                    qua.push(item);
                });
            }
            this.filterData.sellerQualification = qua.join(',');
            if (this.filterData.jhsj != '') {
                this.filterData.jhsj = encodeURI(this.filterData.jhsj[0]);
            }
            var url = '/api/serviceProduct?page=0';
            if (this.filterData.sellerQualification != '') {
                url = url + '&sellerQualification=' + this.filterData.sellerQualification;
            }
            
            if (this.pageSize != '') {
                url = url + '&size=' + this.pageSize;
            }
            if (this.filterData.jhsj != '') {
                url = url + '&jhsj=' + this.filterData.jhsj;
            }
            if (this.filterData.minPrice != '') {
                url = url + '&minPrice=' + this.filterData.minPrice;
            }
            if (this.filterData.maxPrice != '') {
                url = url + '&maxPrice=' + this.filterData.maxPrice;
            }
            if (this.$route.query.ProId != '') {
                url = url + '&categoryId=' + this.$route.query.ProId;
            }
            if (this.$cookie.get('loginInfo')) {
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
                url = url + '&userId=' + userId;
            }
            this.$http.get(url).then((res) => {
                this.total = res.data.biz.total;
                this.ServCateId = res.data.biz.list;
                this.pageSize = res.data.biz.pageSize;
            });
        },
        ////浏览记录 全部清除
        async clearVisited(){
                if(this.$cookie && this.$cookie.get("loginInfo")){
                    var userId = JSON.parse(this.$cookie.get('loginInfo')).id
                    var res = await GoodsHttp.delBrowse(userId)
                    var message = res.data.msg.message;
                    if(message=="浏览成功"){
                        this.clearVisitedShow = false
                        this.$message.success('清除浏览记录成功')
                    }else{
                        return false
                    }
                }

            },
        visitAll() {
            if(JSON.parse(this.$cookie.get("loginInfo").userType == 1)){
                this.$router.push('/MyFootprint')
            }
        },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        handleSelect(key, keyPath) {
            console.log(key);
        },
        handleClick() {
            console.log('handleClick');
        },
        handleChange(cateId) {
            this.form.cateId = cateId[cateId.length - 1];
        },
        // //点击一级菜单跳转
        // async handleClic(name){
        //     var ProId = name.id;
        //     // this.$router.push(`scan?id=${ProId}`);
        //     var res1 = await GoodsHttp.serviceProCategory(ProId)
        //     res1.data.biz.content.forEach(item=>{
        //         if(item.id == ProId){
        //             // this.NavTitleOne = item
        //             this.NavTitleChild = this.NavTitleOne.children
        //         }
        //     })
        //     //一二级变化
        //     var resSErProId = await GoodsHttp.servProCategoryId(ProId)
        //     this.ServCateId = resSErProId.data.biz.list
        //     this.total = resSErProId.data.biz.total
        // },
        async JumpDetail(id) {
            this.$router.push(`detail?serviceId=${id}`);
        },
        //收藏
        async handlecollectChange(value) {
            if(this.$cookie && this.$cookie.get('loginInfo')){
                var { id, isCollect } = value;
                var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
                var userId = userInfo.id;
                if (isCollect) {
                    value.isCollect = false;
                    var res = await GoodsHttp.unCollect({ id, userId });
                    this.$message.success('取消收藏成功');
                } else {
                    value.isCollect = true;
                    this.$http
                        .post('/api/serviceProduct/collect', {
                            serviceId: id,
                            collectId: JSON.parse(this.$cookie.get('loginInfo')).id
                        })
                        .then((res) => {
                            var message = res.data.msg.message;
                            this.$message.success(message);
                        });
                }
            }else{
                this.$message.error('请先登录')
                this.$router.push('/login')
            }
            // this.ServCateId.isCollect = !this.ServCateId.isCollect
            // this.isCollect = this.ServCateId.isCollect
        },
        //发布需求 上传文件
            uploadSuccess(file) {
                this.form.demandurl = file[0].fileUrl
            },
            async publish(formName){
                if(this.$cookie && this.$cookie.get('loginInfo')){
                var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
                var publisher = userInfo.id;
                    this.$refs[formName].validate((valid) => {
                        if(valid){
                          console.log(this.form.cancelNum)
                            this.$http.post('/api/publish',{
                                // publisher:JSON.parse(this.$cookie.get("loginInfo")).id,
                                publisher: publisher,
                                cateId:this.form.cateId,
                                amount:Number(this.form.amount),
                                demandDesc:this.form.demandDesc,
                                demandFile:this.form.demandurl,
                                cancelNum:this.form.cancelNum,
                            }).then((res)=>{
                                var id = res.data.biz;
                                var message = res.data.msg.message;
                                if(message=="发布成功"){
                                    this.$message.success('成功发布需求')
                                    setTimeout(() => {
                                        this.$router.push(`fundSituation?id=${id}`);
                                    }, 1000);
                                        this.releaseDilaog = false;
                                        this.form= {
                                              cateId: '',//需求类目
                                              amount:'',//预算
                                              demandDesc:"",
                                              demandFile:[],
                                              demandurl:'',
                                              cancelNum:'',
                                          }
                                }else{
                                    this.$message.error(message);
                                    return false
									                  this.releaseDilaog = true;
                                }
                            })
                        }else{
                            this.releaseDilaog = true;
                            this.$message.error("未成功发布需求");
                            return false;
                        }
                    })
                }else{
                    this.$message.error('请先完成登录再发布需求')
                    this.$router.push('/login')
                }
            },
    }
};
</script>

<style>
#whole {
    width: 100%;
}
.center {
    margin: 0 320px;
}
.bannercenter {
    margin: 0 420px;
}
/*  */
.firstNav {
    width: 100%;
    height: 55px;
    background-color: #81d8d0;
}
/*.navCenter{
        width: 1280px;
        height: 55px;
        position: relative;
    }*/
.navCenter {
    width: 1280px;
    height: 55px;
}
.logo {
    width: 260px;
    height: 55px;
    /*display: table-cell;*/
    vertical-align: middle;
    text-align: center;
}
.logo img {
    width: 260px;
    height: 21px;
}
/*.search-form a{
        position: absolute;
        width: 30px;
        height: 30px;
        display: block;
        text-align: center;
        font-size: 14px;
        background-image: url('../../../assets/images/pageIndex/搜索 (2).png');
        background-repeat: no-repeat;
        top: 16px;
        left: 6px;
    }*/
/*.firstNavR{
        display: flex;
        position: absolute;
        top: 13px;
        right: 0;
    }*/
.firstNavR {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.firstNavR > div {
    margin: 0 15px;
}
.businessCenter {
    width: 90px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
}
/*
    .businessCenter{
        width: 76px;
        height: 28px;
        text-align: center;
        line-height: 27px;
        background: url('../../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
        font-size: 14px;
        color: #FFFFFF;
    }*/
.shortLine img {
    width: 1px;
    height: 24px;
}
.loginImg i {
    width: 35px;
    height: 35px;
    color: #fff;
    line-height: 35px;
    font-size: 24px;
}
/*  */
.secondNav {
    width: 100%;
    height: 94.2px;
    background: #ffffff;
    font-size: 15px;
}
.el-menu-item {
    height: 94.2px;
    line-height: 94.2px;
}
.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 5px solid #81d8d0;
}
/*  */
.banner {
    width: 100%;
    height: 420px;
    position: relative;
}
.bannerImg {
    width: 100%;
    height: 100%;
}
.bannerTxt {
    width: 570px;
    color: #ffffff;
    position: absolute;
    top: 133px;
}
.free {
    font-size: 50px;
}
.slogan {
    margin-top: 18px;
}
.sloganOne {
    font-size: 20px;
}
.employment {
    background: url('../../../assets/images/pageIndex/圆角矩形 2.png') no-repeat;
}
.practitioners {
    margin-left: 21px;
    background: url('../../../assets/images/pageIndex/圆角矩形 2 拷贝.png') no-repeat;
}
/*  */
.navTitle {
    color: #000000;
    font-size: 40px;
    font-weight: bold;
}
/* */
.addTitle {
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #000000;
    margin: 30px 0;
}
.merchantRegist {
    width: 100%;
    /*height: 2000px;*/
}
.merchantRegistration {
    width: 1280px;
    margin: 60px auto;
}
.partTop {
    margin: 70px 0;
}
.dotLine {
    margin: 21px 0;
    height: 1px;
    border: 1px dashed #888888;
}
/*  */
.dropdownMenu > div {
    width: 270px;
}

.checkBoxs div {
    margin-bottom: 20px;
}
/*  */
.playWith > div {
    height: 74px;
	margin-right: 20px;
	padding: 8px;
}


/*
    .recommandCarou,.recommandCarouItem,.recommandGoodsItem{
        height: 390px;
    }*/
.recommandGoods > div {
    margin-right: 8px;
}
.recommandGoods > div:nth-child(n + 5) {
    margin-top: 20px;
}

.el-dialog{
	width: 650px;
	height: auto;
	border-radius: 2%;
}
.el-dialog__title{
	color: white;
}

.playWith .imgLogo{
	width: 48px;
	height: 48px;
	margin-right: 12px;
	background-color: #81d8d0;
	border-radius: 12px;
}
.playWith{
	height: 74px;
}
.playWith a{
	display: flex;
	align-items: center;
	border-radius: 12px;
	color: #404145;
	border: 1px solid #efeff0;
	padding: 12px;
   filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
   -moz-box-shadow: 2px 2px 10px #909090;
   -webkit-box-shadow: 2px 2px 10px #909090;
   box-shadow:2px 2px 10px #909090;
}
.playWith span{
	font-weight: 600;
}
</style>
