<template>
    <div class="home">
        <div>
            <Holstein></Holstein>
        </div>
        <div class="secondNav" >
            <el-menu 
                :default-active="activeIndex"
                class="el-menu-demo center"
                mode="horizontal"
                @select="handleSelect"
                background-color="#ffffff"
                text-color="#33333"
                style="font-size: 15px;position:fixed"
                active-text-color="#81d8d0"
            >
                <el-menu-item index="1"><a href="#anchor-1">概述</a></el-menu-item>
                <el-menu-item index="2"><a href="#anchor-2">描述</a></el-menu-item>
                <el-menu-item index="3"><a href="#anchor-3">关于卖方</a></el-menu-item>
                <el-menu-item index="4"><a href="#anchor-4">订单详细信息</a></el-menu-item>
                <el-menu-item index="5"><a href="#anchor-5">推荐建议</a></el-menu-item>
                <el-menu-item index="6"><a href="#anchor-6">常见问题</a></el-menu-item>
                <el-menu-item index="7"><a href="#anchor-7">评论</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="merchantRegist" style="padding-top:40px">
            <div class="merchantRegistration" style="position: relative">
                <div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }" v-if="detail.parentCategory">{{
                            detail.parentCateName
                        }}</el-breadcrumb-item>
                        <el-breadcrumb-item>{{
                            detail.cateName
                        }}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="roblox" style="position: sticky">
                        <div class="gfx">
                            <el-tabs v-model="editableTabsValue" @tab-click="handleClick" type="card">
                                <el-tab-pane :key="index" style="position:relative"
                                    v-for="(editableTab, index) in editableTabs"
                                    :label="editableTab.title"
                                    :name="editableTab.name">
                                    <div v-for="(item,index) in listData" :key="index">
                                        <div v-if="editableTab.title==='基础'" >
                                          <div v-if="item.title === '价格'" class="BasicTitle">
                                                <div v-for="(idx,index) in listDataTitle" :key="index" class="idxTitle">
                                                    {{idx.oneValue}}
                                                </div>
                                                <div class="priceTitle">{{priceTitle.title}}：{{priceTitle.oneValue}}</div>
                                          </div>
                                            <div v-else style="display:flex;">
                                                <div><img :src="item.oneValue==='false'?notcheck:docheck" alt="" style="width:15px;height:15px"></div>
                                                <div style="margin:0 35px">{{item.title}}</div>
                                                <div v-show="item.oneValue!=='true'&&item.oneValue!=='false'">{{item.oneValue}}</div>
                                            </div>
                                        </div>
                                        <div v-else-if="editableTab.title==='标准'">
                                            <div v-if="item.title === '价格'" class="BasicTitle">
                                                <div v-for="(idx,index) in listDataTitle" :key="index" class="idxTitle">
                                                    {{idx.secondValue}}
                                                </div>
                                                <div class="priceTitle">{{priceTitle.title}}：{{priceTitle.secondValue}}</div>
                                            </div>
                                              <div v-else style="display:flex;">
                                                  <div><img :src="item.secondValue==='false'?notcheck:docheck" alt="" style="width:15px;height:15px"></div>
                                                  <div style="margin:0 35px">{{item.title}}</div>
                                                  <div v-show="item.secondValue!=='true'&&item.secondValue!=='false'">{{item.secondValue}}</div>
                                              </div>
                                        </div>
                                        <div v-else>
                                            <div v-if="item.title === '价格'" class="BasicTitle">
                                                <div v-for="(idx,index) in listDataTitle" :key="index" class="idxTitle">
                                                    {{idx.thirdValue}}
                                                </div>
                                                <div class="priceTitle">{{priceTitle.title}}：{{priceTitle.thirdValue}}</div>
                                            </div>
                                              <div v-else style="display:flex;">
                                                  <div><img :src="item.thirdValue==='false'?notcheck:docheck" alt="" style="width:15px;height:15px"></div>
                                                  <div style="margin:0 35px">{{item.title}}</div>
                                                  <div v-show="item.thirdValue!=='true'&&item.thirdValue!=='false'">{{item.thirdValue}}</div>
                                              </div>
                                        </div>
                                    </div>
                                    <div style="cursor:pointer" class="gfxPayOne" @click="JumpPay()"><span>下单</span></div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                        
                    <eForm ref="form" @toQuery="initData" />
                        <div style="cursor:pointer" class="gfxbutton" @click="jumpChat">联络卖家</div>
                    </div>
                    <div id="anchor-1">
                        <div class="addTitle" style="">
                            <a name="anchor-1">{{ detail.serviceName }}</a>
                        </div>
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                width: 560px;
                                margin: 30px 0;
                            "
                        >
                            <div style="width: 45px; height: 46px">
                                <img
                                    style="width: 45px; height: 46px;border-radius:50%"
                                    :src="getImgUrl(this.merchantInfo.headImg)"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div>
                                    {{ this.merchantInfo.nickname }}
                                    <span>|</span>
                                </div>
                            </div>
                            <div style="color: #fa8687">{{ detail.sellerQualification }}</div>
                            |
                            
                            <div style="color: #ffcc09">3.6</div>
                            <span
                                >（{{ detail.praiseCount }}）
                                <span>|</span>
                            </span>
                            <div>队列中有{{ detail.orderCount| merchantBudgetZero }}个订单</div>
                        </div>
                        <div>
                            
                            <div>
                                <div class="bannerBox" style="width: 720px; ">

									<div class="show-imgs-container" @mouseover="isIn = true" @mouseout="isIn = false"
                                         style="height:430px">
                                        <banner :swiperList="bigImg"></banner>
									</div>
                                    <div style="height: 15px; width: 720px"></div>
                                    <div
                                        class="swiper-container gallery-thumbs"
                                        style="width: 720px"
                                    >
                                        <div class="swiper-wrapper">
                                            <!--<div
                                                class="swiper-slide swiper-bottom"
                                                style="width: 113px; height: 75px"
                                                v-for="itemBigImg of bigImg"
                                                :key="itemBigImg.fileUrl"
                                            >
                                                <img
                                                    style="width: 113px; height: 75px"
                                                    class="img"
                                                    :src="getImgUrl(itemBigImg.fileUrl)" />
                                            </div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="related partTop designLeft" id="anchor-2">
                        <!-- <div class="dotLine"></div> -->
                        <div class="addTitle"><a name="anchor-2">关于这个服务</a></div>
                        <div class="relatedTxt">{{ HTMLEncode1(detail.serviceDesc) }}</div>
                        <div class="dotLine"></div>
                  <!--      <div class="relatedForm">
                            <div class="formTitle">
                                <div>风格</div>
                                <div>文件格式</div>
                            </div>
                            <div class="formContent">
                                <div>3D</div>
                                <div>JPG格式，PNG格式</div>
                            </div>
                        </div> -->
                    </div>
                    <div class="relatedSeller partTop designLeft" id="anchor-3">
                        <div class="relatedSellerInfo" style="display: flex; margin: 30px 0 35px 0">
                            <div class="avatar" style="width: 145px; height: 148px;border-radius:50%">
                                <img  style="width: 145px; height: 148px;border-radius:50%" :src="getImgUrl(merchantInfo.headImg)" alt="" />
                            </div>
                            <div class="sellerComment" style="margin-left: 27px">
                                <div style="display: flex">
                                    <div>{{ this.merchantInfo.nickname }}</div>
                                    <!--<div
                                        v-if="detail.isBzj"
                                        class="MarginMerchant"
                                        style="margin-left: 5px"
                                    >
                                        <a name="anchor-3">保证金商户</a>
                                    </div>-->
                                </div>
                                <div style="color: #666666">只有工作日接受订单</div>
                                <div
                                    class="star"
                                    style="width: 81px; height: 13px; display: inline-block"
                                >
                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="" />
                                </div>
                                <span style="color: #ffcc09">4.9</span>
                                <span>（{{detail.orderCount| merchantBudgetZero}}个订单）</span>
                                <div class="contactMe" @click="jumpChat">联系我</div>
                            </div>
                        </div>
                        <div class="relatedForm">
                            <div class="formTitle">
                                <div>来自</div>
                                <div>开始于</div>
                            </div>
                            <div class="formContent">
                                <div>{{ this.merchantInfo.address }}</div>
                                <div>{{ this.merchantInfo.createTime }}</div>
                            </div>
                        </div>
                        <!-- <div class="dotLine"></div> -->
                        <div class="relatedTxt">
                        {{this.merchantInfo.intro}}
                        </div>
                    </div>
                    <div class="orderDetails partTop designLeft" id="anchor-4">
						<div class="dotLine"></div>
                        <div class="addTitle"><a name="anchor-4">订单详细信息</a></div>
                        <el-table :data="listData" style="width: 100%" id="abc" >
                                <el-table-column prop="title" label="套餐内容"></el-table-column>
                                <el-table-column v-for="(bcd,index) in bcd" :key="index" :prop="bcd.prop" :label="bcd.label"> 
                                    <template slot-scope="scope">
                                        <div v-if="scope.row[bcd.prop]==='true'">
                                            <img style="width:15px;height:15px" :src="docheck" alt="">
                                        </div>
                                        <div v-else-if="scope.row[bcd.prop]==='false'">
                                            <img style="width:15px;height:15px" :src="notcheck" alt="">
                                        </div>
                                        <div v-else>
                                        {{scope.row[bcd.prop]}}
                                        </div>
                                    </template>
                                </el-table-column>
                        </el-table>
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="recommond partTop designLeft" id="anchor-5">
                        <div class="addTitle"><a name="anchor-5">为您推荐</a></div>
                        <el-carousel trigger="click" class="recommandCarou" style="height: 390px">
                            <el-carousel-item
                                v-for="(k,index) in Math.ceil(recommendPage.length / 2)"
                                :key="index"
                                class="recommandCarouItem">
                                <div class="recommandGoods" style="display: flex; justify-content: space-between">
                                    <div v-for="(item,index) of recommendPage.slice((k-1)*2,k*2)" :key="index">
                                        <div style="width: 310px; border:#BDBDBD 1px solid;" >
                                            <div style="cursor:pointer;width: 310px; height: 210px" @click="JumpDetail(item.id)">
                                                <img style="width: 308px; height: 210px"
                                                    :src="getImgUrl(item.productImgUrl)"
                                                    alt="" />
                                            </div>
                                            <div style="padding: 25px 20px">
                                                <div style="display: flex">
                                                    <!-- <div style="width: 45px; height: 46px">
                                                        <img style="width: 45px; height: 46px" src="../../assets/images/detail/组 21.png" alt="" />
                                                    </div> -->
													<!-- 商家头像 -->
													<div style="width: 45px; height: 46px" v-if="item.merchantInfo.headImg">
													    <img style="
													            width: 45px;
													            height: 46px;
													            border-radius: 50%;"
															:src="getImgUrl(item.merchantInfo.headImg)"
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
                                                    <div style="margin-left: 10px">
                                                        <div>{{item.merchantInfo.nickname}}</div>
                                                        <div style="display: flex;">
															<!-- 商家标签 -->
															   <div style="display: flex" class="MerchantLabel">
																<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
															       <div class="sellerTypeStr" >
															           {{ item.merchantInfo.sellerTypeStr }}
															       </div>
																<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
																<!-- 保证金用户、非保证金用户 -->
																<div class="bailAmountStr" >
																    {{ item.merchantInfo.bailAmountStr }}
																</div>
																<!-- 保证金用户、非保证金用户 -->
																<!-- 是否评价最高的卖家 -->
																<!-- <div v-if="item.merchantInfo.isPjzgStr != null && item.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
																	{{ item.merchantInfo.isPjzgStr }}
																</div> -->
																<!-- 是否评价最高的卖家 -->
																<!-- 是否为新卖家 -->
																<div v-if="item.merchantInfo.isNewSellerStr != null && item.merchantInfo.isNewSellerStr != ''" class="isNewSellerStr">
																    {{ item.merchantInfo.isNewSellerStr }}
																</div>
																<!-- 是否为新卖家 -->
															   </div>
															<!-- 商家标签 -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div :title="item.price" style="margin:10px 0 5px 0;-webkit-line-clamp: 1;height:21px;width:280px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}">{{item.serviceName}}</div>
                                                <div style="color: #d81e06;font-weight: bold;font-size: 16px;">
                                                    ￥{{item.price}}
                                                </div>
                                                <div style="display: flex;justify-content: space-between;">
                                                    <div>
                                                        <div
                                                            class="star"
                                                            style="
                                                                width: 81px;
                                                                height: 13px;
                                                                display: inline-block;
                                                            "
                                                        >
                                                            
                                                            <img src="../../assets/images/detail/五星 拷贝 3.png" alt="" />
                                                        </div>
														<span style="color: #ffcc09; margin-left: 3px"
														    v-if="item.zhScore ===0 || item.zhScore === '' || item.zhScore ===null ">暂无评分</span
														>
														<span style="color: #ffcc09; margin-left: 3px"
														   v-if="item.zhScore !=0 && item.zhScore != ''&& item.zhScore !=null" >{{item.zhScore}}</span
														>
                                                        <span>（{{item.orderCount| merchantBudgetZero}}个订单）</span>
                                                    </div>
                                                    <div style="cursor:pointer">
                                                        <img @click="handlecollectChange(item)" style="width:18px;height:16px" :src="item.isCollect?collection:collection_anti" alt="" class="icon">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                        
                    </div>
                    <div class="commonProblem partTop designLeft" id="anchor-6">
                        <div class="addTitle"><a name="anchor-6">常见问题</a></div>
						<div v-if="detail.faq === null">
							<a @click="jumpChat" style="color:#858585;font-size: 16px;cursor:pointer;">卖家很懒哦，暂无添加任何常见问题，请联系服务商添加问题！</a>
						</div>
                        <div  v-if="detail.faq != ''">
                            <el-collapse
                                v-model="activeNames"
                                v-for="(faq, index) in detail.faq"
                                :key="index"
                            >
                                <el-collapse-item :title="faq.question" :name="index">
                                    <div style="color:#858585">{{ faq.answer }}</div>
                                </el-collapse-item>
                                
                            </el-collapse>
                        </div>
                    </div>
                    <div class="commentsCount partTop designLeft" id="anchor-7" v-if="allData">
                        <div style="display: flex; align-items: center">
                            <div class="addTitle" style="">
                                {{allData.length}}条
                                <span>&nbsp;&nbsp;&nbsp;<a name="anchor-7">评论</a></span>
                            </div>
                            <div style="margin-left: 20px">
                                <div
                                    class="star"
                                    style="width: 81px; height: 13px; display: inline-block"
                                >
                                    
                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="" />
                                </div>
                                <span style="color: #ffcc09; margin-left: 5px">暂无评分</span>
                            </div>
                        </div>
                       
                        <div class="dotLine" v-if="allData.length>0"></div>
                        <div class="commentLists" v-if="allData.length>0">
                            <div class="commentListOnly" style="">
                                    <div v-for="(item,index) of allData" :key="index">
                                        <div class="commentList" style="padding: 10px 0; border-bottom: 1px solid #f5f5f5" >
                                            <div style="display: flex">
                                                <div style="width: 45px; height: 46px">
                                                    <img
                                                        src="../../assets/images/detail/组 21.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div style="margin-left: 10px">
                                                    <div>
                                                        anne9008
                                                        <span
                                                            ><img
                                                                src="../../assets/images/detail/图层 16 拷贝.png"
                                                                alt=""
                                                            /><span style="color: #ffcc09; margin-left: 5px"
                                                                >{{item.zhScore}}</span
                                                            ></span
                                                        >
                                                    </div>
                                                    <div style="color: #666666">广东，深圳</div>
                                                </div>
                                            </div>
                                            <div>
                                                {{item.evaluateContent}}
                                            </div>
                                            <div>{{item.evaluateTime}}</div>
                                            <div
                                                style="
                                                    display: flex;
                                                    width: 145px;
                                                    justify-content: space-between; cursor:pointer
                                                "
                                            >
                                                <div @click="doPraise(item)" style="cursor:pointer">
                                                    <img style="width: 16px; height: 16px" :src="item.isPraise ? praise : praise_anti " alt="" />
                                                    <span style="margin-left: 7px">点赞</span>
                                                </div>
                                                <div @click="dotread(item)">
                                                    <img style="width: 16px; height: 16px" :src="item.isCai ? cai : cai_anti "
                                                        alt=""
                                                    />
                                                    <span style="margin-left: 7px">踩</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div
                                class="browseMore" @click="change"
                                style="color: #81d8d0;cursor:pointer; font-size: 16px; margin-top: 21px"
                            >
                                <i class="el-icon-plus"><span>{{sj}}</span></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alsoCheck partTop" v-if="alsoVisi">
                    <div class="addTitle">查看此服务的人还查看了</div>
                    <div
                        class="recommandGoods"
                        style="flex-wrap: wrap;display:flex;align-items:center;"
                    >
                        <div v-for="(itemalsoV,index) of alsoView" :key="index">
                            <div style="width: 310px;height:383px;border: 1px solid #D4D4D4;">
										<!-- 商品图片 -->
                                        <div
                                            style="width: 310px; height: 210px;cursor:pointer"
                                            @click="JumpDetail(itemalsoV.id)"
                                        >
                                            <img
                                                style="width: 308px; height: 210px"
                                                :src="getImgUrl(itemalsoV.productImgUrl)"
                                                alt=""
                                            />
                                        </div>
										<!-- 商品图片 -->
										<!-- 商品内容 -->
                                        <div style="padding: 30px 20px">
                                            <div style="display: flex">
												<!-- 商家头像 -->
                                                <div style="width: 45px; height: 46px" v-if="itemalsoV.merchantInfo.headImg">
                                                    <img style="
                                                            width: 45px;
                                                            height: 46px;
                                                            border-radius: 50%;"
                                                		:src="getImgUrl(itemalsoV.merchantInfo.headImg)"
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
                                                <div style="margin-left: 10px">
                                                    <!-- 商家名称 -->
                                                    <div>{{ itemalsoV.merchantInfo.nickname }}</div>
                                                    <!-- 商家名称 -->
                                                    <!-- 商家标签 -->
                                                    <div style="display: flex" class="MerchantLabel">
                                                    	<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                                                        <div class="sellerTypeStr" >
                                                            {{ itemalsoV.merchantInfo.sellerTypeStr }}
                                                        </div>
                                                        <!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
                                                        <!-- 保证金用户、非保证金用户 -->
                                                        <div class="bailAmountStr" >
                                                            {{ itemalsoV.merchantInfo.bailAmountStr }}
                                                        </div>
                                                        <!-- 保证金用户、非保证金用户 -->
                                                    	<!-- 是否评价最高的卖家 -->
                                                    <!-- 	<div v-if="itemalsoV.merchantInfo.isPjzgStr != null && itemalsoV.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
                                                    	    {{ itemalsoV.merchantInfo.isPjzgStr }}
                                                    	</div> -->
                                                    	<!-- 是否评价最高的卖家 -->
                                                        <!-- 是否为新卖家 -->
                                                        <div v-if="itemalsoV.merchantInfo.isNewSellerStr != null && itemalsoV.merchantInfo.isNewSellerStr != ''" class="isNewSellerStr" >
                                                            {{ itemalsoV.merchantInfo.isNewSellerStr }}
                                                        </div>
                                                    	<!-- 是否为新卖家 -->
                                                    </div>
                                                    <!-- 商家标签 -->
                                                </div>
                                            </div>
											<!-- 服务描述 -->
											<div :title="itemalsoV.serviceName" style="margin:10px 0 5px 0;-webkit-line-clamp: 1;height:21px;width:280px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}">
												{{ itemalsoV.serviceName }}
											</div>
											<!-- 售卖金额 -->
											<div style="color: #d81e06; font-weight: bold; font-size: 16px">
											    ¥{{ itemalsoV.price }}
											</div>
                                            <div style="display: flex; justify-content: space-between">
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
                                                            src="../../assets/images/detail/五星 拷贝 3.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <span style="color: #ffcc09; margin-left: 3px"
                                                        v-if="itemalsoV.zhScore ===0 || itemalsoV.zhScore === '' || itemalsoV.zhScore ===null ">暂无评分</span
                                                    >
                                                    <span style="color: #ffcc09; margin-left: 3px"
                                                       v-if="itemalsoV.zhScore !=0 && itemalsoV.zhScore != ''&& itemalsoV.zhScore !=null" >{{itemalsoV.zhScore}}</span
                                                    >
                                                    <span>（{{itemalsoV.orderCount | merchantBudgetZero}}个订单）</span>
                                                </div>
                                                <div style="cursor:pointer">
                                                    <img
                                                            @click="handlecollectChange(itemalsoV)"
                                                            style="width: 18px; height: 16px"
                                                            :src="
                                                                itemalsoV.isCollect ? collection : collection_anti
                                                            "
                                                            alt=""
                                                            class="icon"
                                                        />
                                                    <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div class="visitedHistory partTop" v-show="clearVisitedShow">
                    <div class="dispalyFlex">
                        <div class="addTitle">浏览记录</div>
                        <div class="dispalyFlex" style="width: 150px">
                            <div @click="clearVisited" style="cursor:pointer">全部清除</div>
                            |
                            <div @click="visitAll" style="cursor:pointer">查看全部</div>
                        </div>
                    </div>
                    <div
                        
                        class="recommandGoods dispalyFlex"
                        style="flex-wrap: wrap"
                    >
                        <div class="recommandGoods" style="flex-wrap: wrap;display:flex;align-items:center;">
                            <div v-for="(itemVisit,index) of resultVisited" :key="index">
                                <div style="width:310px;height:383px;border: 1px solid #D4D4D4;">
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
													 src="../../assets/images/detail/组 21.png"
													 alt=""
												 />
											</div>
											<!-- 商家头像 -->
                                            <div style="margin-left: 10px">
												<!-- 商家名称 -->
                                                <div>{{itemVisit.merchantInfo.nickname}}</div>
												<!-- 商家名称 -->
												<!-- 商家标签 -->
											    <div style="display: flex" class="MerchantLabel">
													<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
													<div class="sellerTypeStr" >
													   {{ itemVisit.sellerTypeStr }}
													</div>
													<!-- 卖家类型（一级卖家、二级卖家、普通买家） -->
													<!-- 保证金用户、非保证金用户 -->
													<div class="bailAmountStr" >
														{{ itemVisit.bailAmountStr }}
													</div>
													<!-- 保证金用户、非保证金用户 -->
													<!-- 是否评价最高的卖家 -->
													<!-- <div v-if="itemVisit.merchantInfo.isPjzgStr != null && itemVisit.merchantInfo.isPjzgStr != ''" class="isPjzgStr">
														{{ itemVisit.merchantInfo.isPjzgStr }}
													</div> -->
													<!-- 是否评价最高的卖家 -->
													<!-- 是否为新卖家 -->
													<div v-if="itemVisit.isNewSellerStr != null && itemVisit.isNewSellerStr != ''" class="isNewSellerStr" >
														{{ itemVisit.isNewSellerStr }}
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
                                        <div
                                            style="
                                                color: #d81e06;
                                                font-weight: bold;
                                                font-size: 16px;
                                            "
                                        >
                                            ￥{{ itemVisit.price }}
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
												    v-if="itemVisit.zhScore ===0 || itemVisit.zhScore === '' || itemVisit.zhScore ===null ">暂无评分</span
												>
												<span style="color: #ffcc09; margin-left: 3px"
												   v-if="itemVisit.zhScore !=0 && itemVisit.zhScore != ''&& itemVisit.zhScore !=null" >{{itemVisit.zhScore}}</span
												>
                                                <span>（{{itemVisit.orderCount| merchantBudgetZero}}个订单）</span>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import slideShow from '../../components/Cart.vue';
import docheck from '@/assets/images/icon/已选择.png'
import notcheck from '@/assets/images/icon/选择.png'

import Swiper from 'swiper';
import { Pagination } from 'swiper';
import collection from '@/assets/images/icon/collection.png'
import collection_anti from '@/assets/images/icon/collection-anti.png'
import praise from '@/assets/images/icon/praise.png'
import praise_anti from '@/assets/images/icon/praise-anti.png'
import cai from '@/assets/images/icon/cai.png'
import cai_anti from '@/assets/images/icon/cai-anti.png'


import eForm from '../../components/chat/sendMsg.vue'
import Holstein from '../../components/Nav/Holstein.vue';
import Footer from '@/components/Footer/footer.vue';
import Banner from '@/components/banner/banner'
import GoodsHttp from '@/model/GoodsHttp';
// import UserHttp from '../../model/UserHttp';


export default {
    
    components: {
        slideShow,eForm,
        Holstein,
		Banner,
        Footer
    },
    props: {
        title: {//模块标题
            type: String,
            default: ""
        }
    },
    watch:{
        $route: function (newV, oldV) {
            this.getDataFinish();
        }
    },
    created() {
        this.$nextTick(function () {
            window.οnlοad = function () {
                if (location.href.indexOf('?xyz=') < 0) {
                    alert(123);
                    location.href = location.href + '?xyz=' + Math.random();
                }
            };
            this.galleryThumbsLunbo();
            this.galleryTopLunbo();
        });
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
			collection,collection_anti,isCollect:"",
			praise,praise_anti,isPraise:"",
			cai,cai_anti,isCai:"",
            docheck,notcheck,
            anchorList: [
                { id: 1, name: '概述' },
                { id: 2, name: '描述' },
                { id: 3, name: '关于卖方' },
                { id: 4, name: '订单详细信息' },
                { id: 5, name: '推荐建议' },
                { id: 6, name: '常见问题' },
                { id: 7, name: '评论' }
            ],
            detail: [],
            checkedTk: '',
            input2: '',
            name: '1',
            activeIndex: '',
            tableData: [],
            iframeState: true,
            tabs: [
                { name: '正在热映', path: '/films/nowPlaying' },
                { name: '即将上映', path: '/films/comingSoon' }
            ],
            /*  */
            currentIndex: 0, //默认显示图片
            timer: null, //定时器
            /*  */
            bigImg: [],
            merchantInfo:{},
            //为您推荐
            recommendPage:[],
            //浏览记录
            resultVisited:[],
            clearVisitedShow:false,
            //还查看了
            alsoView:[],
            alsoVisi:true,
            //表格
            bcd: [],
            listData: [],
            listDataTitle:[],
            priceTitle:[],
            activeNames: ['1'],
            //基础 标准 优质
            editableTabsValue:'1',
            editableTabs: [{
                title: '基础',
                name: '1',
                }, {
                title: '标准',
                name: '2',
            }, {
                title: '优质',
                name: '3',
            }
            ],
            //评论
            page:0,
            number:5,

            loading:true,
            sj:"查看更多",
            all:"",
            serviceId:'',

            allData:[],
            tabIndex: 2,
            percentage: 20,
            customColors: '#ffcc09',
        };
    },
    async mounted() {
      var {serviceId} = this.$route.query;
      this.serviceId = serviceId

        this.initData();
        

        // //初始监听第一个视频
        // this.listenVideo();

        if(this.$cookie && this.$cookie.get('loginInfo')){
            //记录浏览
            var {serviceId} = this.$route.query;
            var browseId = JSON.parse(this.$cookie.get('loginInfo')).id;
            if (browseId) {
                await GoodsHttp.postvisited({ serviceId, browseId });
            }
            //显示浏览记录
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
        // this.runInv();
        // let element = document.getElementById("anchorBox");
        // element.addEventListener("scroll",this.handleScroll)
    },
    updated() {
        this.init()
    },
    methods: {
        async initData(){
            var {serviceId} = this.$route.query;
                // var serviceId = Number(this.$route.query)
                var res = await GoodsHttp.serveDetail(serviceId);
                this.detail = res.data.biz;
                this.merchantInfo = res.data.biz.merchantInfo
                this.bigImg = res.data.biz.files;
                //评论
                this.all=res.data.biz.evaluateVOs.length
                this.allData=res.data.biz.evaluateVOs.slice(this.page,this.number);
                var reslist = res.data.biz.pricesCustoms;
                //内容总行数
                var length = res.data.biz.pricesCustoms.length;
                //获取抬头三行描述
                var listDataTitle = res.data.biz.pricesCustoms.slice(0, 2);
                //获取内容
                var listData = res.data.biz.pricesCustoms.slice(2, length);
                //价格
                var priceTitle = res.data.biz.pricesCustoms[length - 1];
                // var titlelength = 3; //几种选择
                var titlelength = res.data.biz.pricesCustomsCount; //几种选择
                if(Number(res.data.biz.pricesCustomsCount) == 3){
                    this.editableTabs= [{
                        title: '基础',
                        name: '1',
                        }, {
                        title: '标准',
                        name: '2',
                        }, {
                        title: '优质',
                        name: '3',
                    }]
                }else if(Number(res.data.biz.pricesCustomsCount) == 2){
                    this.editableTabs= [{
                        title: '基础',
                        name: '1',
                        }, {
                        title: '标准',
                        name: '2'
                    }]
                }else if(Number(res.data.biz.pricesCustomsCount) == 1){
                    this.editableTabs= [{
                        title: '基础',
                        name: '1',
                    }]
                }else{
                    this.editableTabs= []
                }
                var bcd = [];
                //根据列数 赋基础值
                for (let i = 0; i < titlelength; i++) {
                    if (i == 0) {
                    //     bcd[i] = { prop: 'title', label: '包' };
                    // } else if (i == 1) {
                        bcd[i] = { prop: 'oneValue', label: '基础' };
                    } else if (i == 1) {
                        bcd[i] = { prop: 'secondValue', label: '标准' };
                    } else if (i == 2) {
                        bcd[i] = { prop: 'thirdValue', label: '优质' };
                    }
                }
                for (let i = 0; i < 2; i++) {
                    for (let y = 0; y < titlelength; y++) {
                        if (y == 0 && reslist[i].title != null) {
                        //     bcd[y].label += '\n' + reslist[i].title;
                        // } else if (y == 1) {
                            bcd[y].label += '\n' + reslist[i].oneValue;
                        } else if (y == 1 && reslist[i].secondValue != null) {
                            bcd[y].label += '\n' + reslist[i].secondValue;
                        } else if (y == 2 && reslist[i].thirdValue != null) {
                            bcd[y].label += '\n' + reslist[i].thirdValue;
                        }
                    }
                }
                
                this.bcd = bcd;
                this.listData = listData;
                this.listDataTitle = listDataTitle;
                this.priceTitle = priceTitle;
                //为您推荐
                var resrecommendPage = await GoodsHttp.recommendPage(serviceId)
                this.recommendPage = resrecommendPage.data.biz
                //显示还查看了
                        // var userId = JSON.parse(this.$cookie.get('loginInfo')).id
                        var alsoVisi= await GoodsHttp.alsoviewPage(serviceId)
                        this.alsoView = alsoVisi.data.biz
                        // if(this.alsoView.length!==0){
                        if(this.alsoView.length==0){
                            this.alsoVisi = false
                        }
        },
        jumpChat(data){
                data.userType = 2;
                const _this = this.$refs.form
                _this.form1 = data
                _this.dialog = true
                console.log(data)
          // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
          // var userId = loginInfo.id
          // var receiver2 =this.detail.createUser;
          //   var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}&url=/detail?serviceId=${this.serviceId}&serviceName=${this.detail.serviceName}`;
          //   // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
          //   window.open(wechatScan,"_blank")
        },
        
        getDataFinish() {
            this.$store.dispatch('detail', this.$route.query.serviceId);
            this.initData();
        },
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
        },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        
        HTMLEncode1(p){
            return this.HTMLEncode(p)
        },
        gotoPage(index) {
            this.currentIndex = index;
        },
        //定时器
        // runInv() {
        //     this.timer = setInterval(() => {
        //         this.gotoPage(this.nextIndex);
        //     }, 4000);
        // },
        customColorMethod(percentage) {
            if (percentage < 30) {
                return '#909399';
            } else if (percentage < 70) {
                return '#e6a23c';
            } else {
                return '#67c23a';
            }
        },
        galleryTopLunbo() {
            this.galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 0,
                loop: true,
                loopedSlides: 5,
                // 左右按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                thumbs: {
                    //thumbs组件专门用于制作带缩略图的swiper
                    swiper: this.galleryThumbs,
                    slideThumbActiveClass: 'swiper-slide-thumb-active'
                }
            });
        },
        galleryThumbsLunbo() {
            this.galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 15, //在slide之间设置距离（单位px）
                slidesPerView: 3, //设置slider容器能够同时显示的slides数量
                loop: true, //设置为true 则开启loop模式
                freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格
                loopedSlides: 7, //一般设置大于可视slide个数2个即可
                watchSlidesVisibility: true, //开启watchSlidesVisibility选项前需要先开启watchSlidesProgress
                watchSlidesProgress: true //开启这个参数来计算每个slide的progress(进度、进程)
            });
        },
        event() {
            const self = this;
            return {};
        },
        network() {
            const self = this;
            return {};
        },
        handleSelect() {
            console.log(item);
        },
        //价格
        radiotab(){
            // console.log(this)
            let app = this;
            console.log(app.$refs["form"])
            // app.$refs["form"].clearValidate();
            //app.$refs.form.resetFields();
            app.form.end_date="";
        },
        //为您推荐
            async JumpDetail(id){
                this.$router.push(`detail?serviceId=${id}`);
            },
            //收藏
            async handlecollectChange(value){
                if(this.$cookie && this.$cookie.get('loginInfo')){
                    var {id,isCollect} = value;
                    var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                    var userId = userInfo.id
                    if(isCollect){
                        value.isCollect = false;
                        var res = await GoodsHttp.unCollect({id,userId})
                        this.$message.success('取消收藏成功')
                    }else{
                        value.isCollect = true;
                        this.$http.post('/api/serviceProduct/collect',{
                                serviceId:id,
                                collectId:JSON.parse(this.$cookie.get("loginInfo")).id,
                            }).then((res)=>{
                                var message = res.data.msg.message;
                                this.$message.success(message)
                            })
                    }
                }else{
                    this.$message.error('请先登录')
                    this.$router.push('/login')
                }
                // this.ServCateId.isCollect = !this.ServCateId.isCollect
                // this.isCollect = this.ServCateId.isCollect
            },
        //基础 标准 优质
        handleClick(tab, event) {
            this.editableTabsValue = tab.name
            console.log(this.editableTabsValue)
        },
        JumpPay() {
            if(this.$cookie && this.$cookie.get("loginInfo")){
                // var tab = this.editableTabsValue
                // console.log(tab)
                if(detail.returnable == 0){
                  this.$message.warning("该商品不可退款")
                  return
                }
                var {serviceId} = this.$route.query;
                // var serviceId = Number(this.$route.query)
                this.$http.post('/api/selectCombo',{
                                level:this.editableTabsValue,
                                serviceId,
                            }).then((res)=>{
                                var message = res.data.msg.message;
                                if(message=="成功"){
                                    // this.$store.commit('setUserName',this.ruleForm2new.username)
                                    // this.$cooki+e.set("loginInfo",JSON.stringify(res.data.biz))
                                    // this.$message.success('即将跳转下单页')
                                    this.$router.push(`01orderDetail?id=${serviceId}`);
                                }else{
                                    this.$message.error("未成功发布需求");
                                    return false
                                }
                            })
            }else{
                this.$message.error('请先完成登录')
                this.$router.push('/login')
            }
        },
        //评论查看更多
        async change(){
            var {serviceId} = this.$route.query;
            this.page=this.page+5
            this.number=this.number+5
            var serviceEvaluate = await GoodsHttp.serviceEvaluateview(serviceId)
            
            var data=serviceEvaluate.data.biz.slice(this.page,this.number);
                data.forEach((e)=>{
                    this.allData.push(e)
                })
            if(this.allData.length>=this.all){
                    this.sj="数据加载完毕"
            }

        },
        //执行点赞评论
        async doPraise(value){
            // await GoodsHttp.
            if(this.$cookie && this.$cookie.get("loginInfo")){
                var praiseId = JSON.parse(this.$cookie.get('loginInfo')).id
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id
                var evaluateId = value.evaluateId
                var {evaluateId,isPraise} = value
                if(isPraise){
                    value.isPraise = false;
                    await GoodsHttp.serviceEvacanpra(evaluateId,userId)
                    this.$message.success('取消点赞成功')
                }else{
                    value.isPraise = true;
                    await GoodsHttp.serviceEvapra(evaluateId,praiseId)
                    this.$message.success('点赞成功')
                }
            }else{
                this.$message.error('请先登录')
                this.$router.push('/login')
            }
        },
        // changeData1() {
        //     this.arrayShow = [];
        //     let index = 0;
        //     for (let i = this.index; i < this.index + 5; i++) {
        //         if (this.allData.length - index === this.allData.length - 5) {
        //             let ss = this.allData.splice(0, 5);
        //             for (let j = 0; j < ss.length; j++) {
        //                 this.allData.push(ss[j]);
        //             }
        //         }
        //         index = i;
        //     }
        //     for (let i = 0; i < 5; i++) {
        //         this.arrayShow.push(this.allData[i]);
        //     }
        // },
        // change(){
        //     this.arrayShow = [];
        //     let index = 0;
        //     if (index === this.allData.length) {
        //         index = 0;
        //     }
        //     for (let i = index; i < index + 5; i++) {
        //         if (this.allData[i]) {
        //             this.arrayShow.push(this.allData[i]);
        //             index = i;
        //         }
        //     }
        //     index = index + 1;
        // },

        //执行踩操作
        async dotread(value){
            // await GoodsHttp.
            if(this.$cookie && this.$cookie.get("loginInfo")){
                var treadId = JSON.parse(this.$cookie.get('loginInfo')).id
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id
                var evaluateId = value.evaluateId
                var {evaluateId,isCai} = value
                if(isCai){
                    value.isCai = false;
                    await GoodsHttp.serviceEvacantread(evaluateId,userId)
                    this.$message.success('取消踩一踩')
                }else{
                    value.isCai = true;
                    await GoodsHttp.serviceEvatread(evaluateId,treadId)
                    this.$message.success('踩了一下')
                }
            }else{
                this.$message.error('请先登录')
                this.$router.push('/login')
            }
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
                        return
                    }
                    
                    
                }
                
            },
            visitAll(){
                this.$router.push('/MyFootprint')
            },
            init(){
				//var abc = document.getElementsByClassName('abc');
				
            	var cell = document.getElementById('abc').getElementsByClassName('cell');
				var oneValue = "";
				for(var i =0;i<cell.length;i++){
					var title =cell[i].innerHTML.split("\n");
					oneValue = "";
					if(title.length > 1){
						for(var y = 0;y < title.length ; y++){
							if(y == 0){
								oneValue += "<div style='color:#62646a;font-size: 19px;padding-bottom:8px;font-weight: bold;'>"
												+ title[y] + "</div>"
							}else if(y ==1){
								oneValue += "<div style='color:#62646a;font-size: 12px;padding-bottom:8px;font-weight: bold;'>"
												+ title[y] + "</div>"
							}else{
								oneValue += "<div style='color:#62646a;font-size: 12px;padding-bottom:8px;'>"
												+ title[y] + "</div>"
							}
							
						}
						 cell[i].innerHTML = oneValue
					}
				}
			}
            
    }
};
</script>
<style scope>
.home {
    width: 100%;
}
.center {
    margin: 0 320px;
}
a {
    text-decoration: none;
    color: #000000;
}
.el-table th{
	vertical-align:top;
}

/*  */
.secondNav {
    width: 100%;
    height: 61.2px;
    background: #ffffff;
    position: fixed;
    font-size: 15px;
    z-index: 200;
}
.el-menu-item {
    height: 94.2px;
    line-height: 94.2px;
}
.el-menu--horizontal > .is-active {
    border-bottom: 5px solid #81d8d0;
}
/*  */
.MarginMerchant {
    background: #fa8687;
    color: #fff;
    width: 75px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 12px;
}
.MarginMerchant1 {
    background: #81d8d0;
    color: #fff;

    width: 55px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 12px;
}
/*  */
.roblox {
    width: 500px;
    float: right;
    top: 85px;
    right: 320px;
}
.gfx {
    width: 500px;
    padding: 30px;
}
.gfx .el-tabs{
	border: 1px solid #dadbdd;
}
.gfx .el-tabs__content{
	padding-left: 24px;
	padding-right: 24px;
}
.gfx .el-tabs__nav{
	width: 100%;
}
.gfx .el-tabs__item{
	width: 33%;
	height: 60px;
	text-align: center;
	line-height:60px;
}
.gfxContain {
    display: flex;
    justify-content: space-between;
    height: 32px;
}
.gfxTitle {
    height: 32px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #000000;
    line-height: 32px;
}
.gfxContain .gfxDollar {
    height: 25px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #666666;
    line-height: 32px;
}
.gfxDes {
    margin: 14px 0 24px 0;
}
.gfxPayOne {
 color: #fff;
 width: 100%;
 height: 42px;
 line-height: 50px;
 margin-top: 30px;
 background: #81d8d0;
 font-size: 16px;
 text-align: center;
 border-radius: 10px;
 margin-bottom: 50px;
}
.gfxbutton {
    width: 437px;
    height: 55px;
    margin: 30px auto;
    line-height: 55px;
    border: 1px solid #f0f0f0;
    text-align: center;
    font-size: 16px;
    color: #666666;
    border-radius: 10px;
}
.partTop {
    margin: 70px 0;
}
.designLeft {
    width: 716px;
}
/*  */
.dotLine {
    margin: 21px 0px 10px 0px;
    height: 1px;
    border: 1px dashed #888888;
}
.relatedForm {
    margin-top: 26px;
}
.formTitle {
    color: #999999;
}
.formContent {
    color: #666666;
}
.formTitle,
.formContent {
    display: flex;
}

.formTitle div,
.formContent div {
    margin: 5px 0;
    width: 308px;
}
/*  */
.sellerComment {
    width: 220px;
}
.sellerComment div {
    margin: 5px 0;
}
.contactMe {
    width: 110px;
    height: 43px;
    line-height: 43px;
    text-align: center;
    background: #81d8d0;
    color: #fff;
}
/*  */
.solidLine {
    margin: 20px 0;
    height: 1px;
    border: 1px dashed #f5f5f5;
}
.checkBoxs div {
    margin-bottom: 20px;
}
.gfxPayTwo {
    color: #fff;
    height: 55px;
    line-height: 55px;
    margin-top: 30px;
    background: #81d8d0;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
}
/* 表格部分 */
.abc .cell {
    white-space: pre-line !important;
}
.BasicTitle{
  position: relative;
}
.BasicTitle .idxTitle:nth-child(odd){
  font-size: 20px;
  color: #000000;
}
.priceTitle{
  position:absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  color: #000000;
}
/*  */
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
/*  */
.recommandCarou,
.recommandCarouItem,

.recommandGoodsItem {
    height: 390px;
}
/*  */
.commentsL > div,
.commentsR > div {
    margin: 13px 0;
}
.commentList > div {
    margin: 17px 0;
}

.relatedTxt{
	padding: 15px 0px 0px 0px;
}
.recommandGoods > div {
    margin-right: 8px;
}
</style>