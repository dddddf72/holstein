<template>
    <div id="whole">
        <Holstein></Holstein>
        
        <div class="secondNav">
            <el-menu :default-active="activeIndex" class="el-menu-demo center" mode="horizontal" @select="handleSelect" background-color="#ffffff"
            text-color="#33333"
            active-text-color="#81d8d0">
                    <el-menu-item v-for="(item,index) of NavTitle" :key="index" index="index" @click="handleClic(item)">{{item.cateName}}</el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="banner">
            <img class="bannerImg" :src="NavTitleOne.pic" alt="">
            <div class="bannerTxt center" >
                <div class="free">{{NavTitleOne.cateName}}</div>
                <div class="slogan">
                    <span class="sloganOne">{{NavTitleOne.label}}</span>
                </div>
                
            </div>
        </div>
        <!--  -->
        <div class="merchantRegist">
            <div class="merchantRegistration" style="">
                <div class="selectServiceClass partTop">
                    <div class="addTitle">选择服务分类</div>
                    <div>
                        <el-carousel trigger="click" indicator-position="none" arrow="always" height="220px">
                            <el-carousel-item v-for="(k,index) in Math.ceil(NavTitleChild.length / 4)" :key="index">
                                <div class="playWith dispalyFlex" style="">
                                    <div v-for="(NavTitleChi,index) of NavTitleChild.slice((k-1)*4,k*4)" :key="index" style="width:310px;height:153px;">
                                        <div class="dispalyFlex" style="padding:38px 36px;">
                                            <div>
                                                <div>{{NavTitleChi.cateName}}</div>
                                                <div>{{NavTitleChi.label}}</div>
                                            </div>
                                            <div><img src="../../../assets/images/scan/游戏.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>

                    <div class="partTop">
                        <div style="background:#81d8d0;height:55px;line-height:55px">
                            <el-popover @click="handleClick" class="dropDownL" placement="bottom-start" trigger="click">
                                <div class="dropdownMenu">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                            <div style="color:#333333;font-weight:bold;padding:16px 0 0 40px">卖方资质</div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs" style="padding-left:40px">
                                                <el-checkbox-group v-model="filterData.qualification" @change="handleCheckedqualiChange">
                                                    <div v-for="quali in qualis" :key="quali">
                                                        <el-checkbox :label="quali">{{quali}}</el-checkbox>
                                                    </div>
                                                    <!--<div>
                                                        <el-checkbox >评价最高的卖家（284）</el-checkbox>
                                                    </div>
                                                    <div>
                                                        <el-checkbox >一级卖家（5,460）</el-checkbox>
                                                    </div>
                                                    <div>
                                                        <el-checkbox >二级卖家（5,460）</el-checkbox>
                                                    </div>
                                                    <div>
                                                        <el-checkbox >新卖家（131,460）</el-checkbox>
                                                    </div>
                                                    <div>
                                                        <el-checkbox>保证金商户（5,460）</el-checkbox>
                                                    </div>
                                                    <div>
                                                        <el-checkbox >非保证金商户（5,460）</el-checkbox>
                                                    </div>-->
                                                </el-checkbox-group>
                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <el-checkbox :indeterminate="isIndeterminatequali" v-model="checkAllquali" @change="clearsellquali" style="width:80px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全选</el-checkbox>
                                                    <div @click="handlefilter" style="width:80px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
                                                </div>
                                            </div>
                                </div>
                                <el-button type="primary" style="background:#81d8d0;border:none" slot="reference">
                                    卖方资质<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                            </el-popover>
                            <el-popover @click="handleClick" class="dropDownL" placement="bottom-start" trigger="click">
                                <el-button type="primary" style="background:#81d8d0;border:none" slot="reference">
                                    售卖金额<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <div class="dropdownMenu">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div>
                                            <div style="color:#333333;font-weight:bold;padding:16px 0 0 40px">售卖金额</div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs">
                                                <div style="padding:0 40px">
                                                    <div class="dispalyFlex">
                                                        <div style="width:60px;height:26px;">
                                                            <el-input v-model="filterData.minPrice" placeholder="最小金额"></el-input>
                                                        </div>
                                                        <div>---</div>
                                                        <div style="width:60px;height:26px;">
                                                            <el-input v-model="filterData.maxPrice" placeholder="最大金额"></el-input>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <div @click="clearSaleamount" style="width:60px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全选</div>
                                                    <div @click="handlefilter" style="width:60px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </el-popover>
                            <el-popover @click="handleClick" class="dropDownL" placement="bottom-start" trigger="click">
                                <el-button type="primary" style="background:#81d8d0;border:none" slot="reference">
                                    交货时间<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <div class="dropdownMenu">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div>
                                            <div style="color:#333333;font-weight:bold;padding:16px 0 0 40px">交货时间</div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs" style="padding-left:40px">
                                                <el-checkbox-group v-model="filterData.jhsj" @change="handleCheckeddeadlinesChange">
                                                    <div v-for="deadline in deadlines" :key="deadline">
                                                        <el-checkbox :label="deadline">{{deadline}}</el-checkbox>
                                                    </div>
                                                </el-checkbox-group>
                                                <!--
                                                <div>
                                                    <el-checkbox v-model="checkedOneDay" :label="city">24小时内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedOneDay" label="2">3天内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedOneDay" label="3">5天内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedOneDay" label="">随意</el-checkbox>
                                                </div>-->
                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <el-checkbox :indeterminate="isIndeterminatedeadline" v-model="checkAlldeadline" @change="cleartimeDelivery" style="width:60px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全选</el-checkbox>
                                                    <div @click="handlefilter" style="width:60px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </el-popover>
                        </div>
                        <div style="margin-top:20px">{{this.$data.total}}个可用服务</div>
                    </div>
                </div>
                <div class="recommandLists partTop">
                        <div class="addTitle">为您推荐的服务</div>
                    <div class="recommandGoods dispalyFlex" style="width:1280px;flex-wrap:wrap">
                        <div v-for="(value,index) in ServCateId" :key="index">
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px" @click="JumpDetail(value.id)">
                                        <img style="width:310px;height:210px" :src="value.storeCategory.pic" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>{{value.merchantInfo.nickname}}</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">{{value.sellerQualification}}保证金商户</div>
                                                    <!--<div class="MarginMerchant" style="margin-left:7px" v-if="value.isCollect">保证金商户</div>-->
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            {{value.serviceName}}
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">¥{{value.price}}</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <!--
                                                    <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>
                                                    -->
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（{{value.orderCount}}个订单）</span>
                                            </div>
                                            <div>
                                                <!--<img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">--> 
                                                <img @click="handlecollectChange(value)" style="width:18px;height:16px" :src="value.isCollect?collection:collection_anti" alt="" class="icon">
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                            <!--
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">2级卖家</div>
                                                    <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            我将为您提供LOL游戏陪玩服务，艾欧尼...
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div> 
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../../assets/images/icon/collection.png" alt="">
                                                <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> 
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            -->
                    </div>
                        <div class="pageRule" style="margin:45px auto">
                            <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage3"
                                :page-size="pageSize"
                                layout="prev, pager, next, jumper"
                                :total="total">
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
                            width="50%">
                                <el-row style="height:45px;line-height:45px;background-color:#81d8d0; text-align:left;font-size:16px;font-weight:bold; color:#fff;padding-left:20px">发布需求</el-row>
                                <el-form  :model="form" :rules="rules" ref="form" label-width="130px" label-position="left" style="padding:20px 30px">
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
                                    <el-form-item  label="需求描述" prop="demandDesc">
                                        <el-input type="textarea" placeholder="请对你的需求进行简单的描述，例如，我想做一个网站" v-model="form.demandDesc"></el-input>
                                    </el-form-item>
                                    <el-form-item label="需求附件" prop="demandFile">
                                        <el-upload drag
                                        action="http://yshopapi.inroyltd.com/api/uploadFile" 
                                        :limit="1" 
                                        accept=".rar ,.zip, "  
                                        :on-success="uploadSuccess">
                                            <i class="el-icon-upload"></i>
                                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                            <div class="el-upload__tip" slot="tip">只能上传<span style="color: #cc0000">一个压缩包</span>文件</div>
                                        </el-upload>
                                    </el-form-item>
                                    <div class="concernBtn" style="cursor: pointer;" @click="publish('form')">
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
                        <div class="dispalyFlex" style="width:150px">
                            <div @click="clearVisited">全部清除</div>|
                            <div>查看全部</div>
                        </div>
                    </div>
                    <div class="recommandGoods dispalyFlex">
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">2级卖家</div>
                                                    <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            我将为您提供LOL游戏陪玩服务，艾欧尼...
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">2级卖家</div>
                                                    <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            我将为您提供LOL游戏陪玩服务，艾欧尼...
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">2级卖家</div>
                                                    <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            我将为您提供LOL游戏陪玩服务，艾欧尼...
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008</div>
                                                <div style="display:flex">
                                                    <div class="MarginMerchant1" style="">2级卖家</div>
                                                    <div class="MarginMerchant" style="margin-left:7px">保证金商户</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            我将为您提供LOL游戏陪玩服务，艾欧尼...
                                        </div>
                                        <div style="color:#D81E06;font-weight: bold;font-size:16px">$50起</div>
                                        <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img style="width:18px;height:16px" src="../../../assets/images/icon/collection.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>

<script>

import collection from '@/assets/images/icon/collection.png'
import collection_anti from '../../../assets/images/icon/collection-anti.png'
import GoodsHttp from '@/model/GoodsHttp'
    // import Holstein from '@/components/Nav/Holstein.vue'
    import Holstein from '@/components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    const qualiOptions = ['评价最高的卖家', '一级卖家', '二级卖家', '新卖家','保证金商户','非保证金商户'];
    const deadlineOptions = ['24小时内交付', '3天内交付', '5天内交付', '随意'];

    export default {
        components: {
            Holstein,Footer
        },
        data() {
            var validatesfz = (rule,value,callback)=>{
                if(value === ""){
                    callback(new Error("请完成必填项"))
                } else {
                    callback();
                }
            }
            return {
                /*  */
                collection,collection_anti,isCollect:"",
                /* 一级标题 */
                NavTitle:[],
                NavTitleOne:"",
                /* 二级标题 */
                NavTitleChild:"",
                //服务
                ServCateId:[],
                //页数
                total:20,
                pageSize:20,
                limit: 20,
                page: 0,//类似于offset
                //浏览历史
                resultVisited:[],
                zfbTrust:"",
                activeIndex:'1',
                isShow:true,    //whatCanWoDoItem和clickSituation样式
                backrgound:'#81d8d0',
                // checked:"",
                //卖方资质
                checkAllquali:false,
                isIndeterminatequali: true,
                qualis:qualiOptions,
                // checkedqualis:['评价最高的卖家'],
                // checkedHighCom:"",//评价最高的卖家（284）
                // checkedFirstSale:"",//一级卖家
                // checkedBail:"",//保证金商户（5
                // checkedSecondSale:"",
                // checkedNotSale:"",//非卖家（131
                // checkedNotBail:"",//非保证金商户（5
                //交货时间
                
                checkAlldeadline:false,
                isIndeterminatedeadline: true,
                deadlines:deadlineOptions,
                // checkeddeadlines:['24小时内交付'],
                // checkedOneDay:"",//24小时内交付
                // checkedThreeDay:"",//3天内交付
                // checkedFiveDay:"",//5天内交付
                // checkedRandom:"",//随意
                //售卖金额
                inputMinRmb:"",//最小金额
                inputMaxRmb:"",//最大金额
                filterData: {
                    qualification :[],
                    maxPrice:'',
                    minPrice:'',
                    jhsj:[]
                },
                input2:"",
                currentPage3: 5,
                //发布需求
                form: {
                    cateId: '',//需求类目
                    amount:"",//预算
                    demandDesc:"",
                    demandFile:"",
                },
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
                    fileList:[],
                //选择需求
                // optionsdemand: [
                //     {
                //         value: 'id',
                //         label: 'cateName',
                //         children: 'children'
                //     }
                // ],
                // form: {
                //     name: '',
                //     region: '',
                //     date1: '',
                //     date2: '',
                //     delivery: false,
                //     type: [],
                //     resource: '',
                //     desc: '',
                // },
                /*  */
                //浏览记录 全部清除
                clearVisitedShow:true,
                releaseDilaog: false,
            }
        },
        computed: {
            sum() {
            var sum = 0;
            for (var i = 0; i < this.total; i += 8) {
                sum += 10;
            }
            return sum;
            },
        },
        async mounted() {
            //服务
            // this.initData();
            var res = await GoodsHttp.serviceProCategory()
                this.NavTitle = res.data.biz.content
                this.NavTitleOne = res.data.biz.content[0]
                this.NavTitleChild = res.data.biz.content[0].children
            
            //浏览记录
            // var resultVisi= await GoodsHttp.serviceBrowse()
            // this.resultVisited = resultVisi.data.biz.content
            // console.log(this.resultVisited)
        },
        methods: {
            async handleCurrentChange(pageIn) {
                // console.log(pageIn)
                var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
            },
            async initData(page=0) {
                // var result = await GoodsHttp.getPagination(offset)
                // // this.$http.get("/api/goods").then(res=>{
                // var {res,total} = result.data;
                //     this.goodsList = res;
                //     this.pageSize = 8;
                //     this.total = total
                var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                var userId = userInfo.id
                if(userId){
                    var resSErProId = await GoodsHttp.serviceProCatePage({page,userId})
                    var {list,total,size} = resSErProId.data.biz;
                    this.ServCateId = list;
                    this.pageSize = size;
                    this.total = total
                }else{
                    var resSErProId = await GoodsHttp.serviceProCatePage0(page)
                    var {list,total,size} = resSErProId.data.biz;
                    this.ServCateId = list;
                    this.pageSize = size;
                    this.total = total
                }
            },
            clearsellquali(val){
                // this.checkedHighCom = false,//评价最高的卖家（284）
                // this.checkedFirstSale = false,//一级卖家
                // this.checkedBail = false,//保证金商户（5
                // this.checkedSecondSale = false,
                // this.checkedNotSale = false,//非卖家（131
                // this.checkedNotBail = false
                this.filterData.qualification = val ? qualiOptions : [];
                this.isIndeterminatequali = false;
            },
            handleCheckedqualiChange(value){
                let checkedCount = value.length;
                this.checkAllquali = checkedCount === 6;
                this.isIndeterminatequali = checkedCount > 0 && checkedCount < 6;
            },
            clearSaleamount(){
                this.filterData.minPrice = '',//最小金额
                this.filterData.maxPrice = ''
            },
            cleartimeDelivery(val){
                // this.checkedOneDay= false,//24小时内交付
                // this.checkedThreeDay= false,//3天内交付
                // this.checkedFiveDay= false,//5天内交付
                // this.checkedRandom = false
                // console.log(val)
                this.filterData.jhsj = val ? deadlineOptions : [];
                this.isIndeterminatedeadline = false;
            },
            handleCheckeddeadlinesChange(value){
                let checkedCount = value.length;
                this.checkAlldeadline = checkedCount === this.deadlines.length;
                this.isIndeterminatedeadline = checkedCount > 0 && checkedCount < this.deadlines.length;
            },
            async getList(){
                // var getlistobj = {},
                var res = await GoodsHttp.serviceProFilter(this.filterData)
                this.ServCateId = res.data.biz.list
                // console.log(res.data.biz)
                this.total = res.data.biz.total
            },
            async handlefilter(){
                var qua = []
                this.filterData.qualification.map(item=>{
                    if(item == '评价最高的卖家'){
                        item =1
                    }else if(item =='一级卖家'){
                        item =2
                    }else if(item =='二级卖家'){
                        item =3
                    }else if(item =='新卖家'){
                        item =4
                    }else if(item =='保证金商户'){
                        item =5
                    }else if(item =='非保证金商户'){
                        item =6
                    }
                    qua.push(item)
                })
                // console.log(qua)
                this.filterData.qualification = qua.join(',')
                this.filterData.jhsj = this.filterData.jhsj[0]
                // console.log(this.filterData)
                this.getList()
            },
            ////浏览记录 全部清除
            clearVisited(){
                this.clearVisitedShow = false
            },
            handleSelect(){
                console.log("1")
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleClick(){
                console.log("handleClick")
            },
            handleChange(cateId){
                this.form.cateId = cateId[cateId.length-1]
            },
            //点击一级菜单跳转
            async handleClic(name){
                // console.log(name)
                var ProId = name.id;
                var res = await GoodsHttp.serviceProCategory(ProId)
                res.data.biz.content.forEach(item=>{
                    if(item.id == ProId){
                        this.NavTitleOne = item
                        this.NavTitleChild = this.NavTitleOne.children
                        console.log(this.NavTitleChild)
                    }
                })
                //一二级变化
                var resSErProId = await GoodsHttp.servProCategoryId(ProId)
                this.ServCateId = resSErProId.data.biz.list
                this.total = resSErProId.data.biz.total
                // console.log(this.ServCateId)
            },
            JumpDetail(id){
                // console.log(id)//279
                this.$router.push({name:'detail',params:{id:id}});
            },
            //收藏
            async handlecollectChange(value){
                console.log(value)
                var {id,isCollect} = value;
                var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                var userId = userInfo.id
                // console.log(userId)
                console.log({id,isCollect})
                if(isCollect){
                    value.isCollect = false;
                    var res = await GoodsHttp.unCollect({id,userId})
                    console.log(res)
                    this.$message.success('取消收藏成功')
                }else{
                    value.isCollect = true;
                    this.$http.post('/api/serviceProduct/collect',{
                            serviceId:id,
                            collectId:JSON.parse(this.$cookie.get("loginInfo")).id,
                        }).then((res)=>{
                            // console.log(res)
                            var message = res.data.msg.message;
                            this.$message.success(message)
                        })
                }
                // this.ServCateId.isCollect = !this.ServCateId.isCollect
                // this.isCollect = this.ServCateId.isCollect
                // console.log(isCollect)
            },
            //发布需求 上传文件
            UploadUrl() {
                return ' http://192.168.2.25:8080/api/uploadFile'
            },
            uploadSuccess(file, fileList) {
                this.fileList = [];  // 每次清空 已保证可以是一个文件  //根据个人需要
                console.log(file)
                // this.fileList.push(file.raw);
                // console.log(this.fileList)
                this.form.demandFile = file[0].fileUrl
            },
            async publish(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$http.post('/api/publish',{
                            // publisher:JSON.parse(this.$cookie.get("loginInfo")).id,
                            publisher: 19,
                            cateId:this.form.cateId,
                            amount:this.form.amount,
                            demandDesc:this.form.demandDesc,
                            demandFile:this.form.demandFile,
                        }).then((res)=>{
                            var message = res.data.msg.message;
                            if(message=="发布成功"){
                                this.$message.success('成功发布需求')
                                setTimeout(() => {
                                    this.$router.push({name:'fundSituation'});
                                }, 1000);
                            }else{
                                this.$message.error("未成功发布需求");
                                return false
                            }
                            this.releaseDilaog = false;
                        })
                    }else{
                        this.releaseDilaog = false;
                        this.$message.error("未成功发布需求");
                        return false;
                    }
                })
            },
        },
    }
</script>

<style scoped>
    #whole{
        width: 100%;
    }
    .center{
        margin: 0 320px;
    }
    /*  */
    .firstNav{
        width: 100%;
        height: 55px;
        background-color: #81d8d0;
    }
    /*.navCenter{
        width: 1280px;
        height: 55px;
        position: relative;
    }*/
    .navCenter{
        width: 1280px;
        height: 55px;
    }
    .logo{
        width: 260px;
        height: 55px;
        /*display: table-cell;*/
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
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
    .firstNavR{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .firstNavR>div{
        margin: 0 15px;
    }
    .businessCenter{
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
    .shortLine img{
        width: 1px;
        height: 24px;
    }
    .loginImg i{
        width:35px;
        height:35px;
        color: #fff;
        line-height: 35px;
        font-size: 24px;
    }
    /*  */
    .secondNav{
        width: 100%;
        height: 94.2px;
        background: #ffffff;
        font-size: 15px;
    }
    .el-menu-item{
        height: 94.2px;
        line-height: 94.2px;
    }
    /*  */
    .banner{
        width: 100%;
        height: 705px;
        position: relative;
    }
    .bannerImg{
        width: 100%;
        height: 100%;
    }
    .bannerTxt{
        width: 570px;
        color: #ffffff;
        position: absolute;
        top: 273px;
    }
    .free{
        font-size: 50px;
    }
    .slogan{
        margin-top: 18px;
    }
    .sloganOne{
        font-size: 20px;
    }
    .employment{
        background: url('../../../assets/images/pageIndex/圆角矩形 2.png') no-repeat;
    }
    .practitioners{
        margin-left: 21px;
        background: url('../../../assets/images/pageIndex/圆角矩形 2 拷贝.png') no-repeat;
    }
    /*  */
    .navTitle{
        color: #000000;
        font-size: 40px;
        font-weight: bold;
    }
    /* */
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        margin:30px 0;
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 60px auto;
    }
    .partTop{
        margin: 70px 0;
    }
    .dotLine{
        margin: 21px 0;
        height: 1px;
        border: 1px dashed #888888;
    }
    /*  */
    .dropdownMenu >div{
        width:270px
    }
    
    .checkBoxs div{
        margin-bottom: 20px;
    }
    /*  */
    .playWith >div{
        width:310px;
        height:153px
    }
    .playWith >div:first-child{
        background-image: url('../../../assets/images/scan/圆角矩形 1.png');
    }
    .playWith >div:nth-child(4n+1){
        background-image: url('../../../assets/images/scan/圆角矩形 1.png');
    }
    .playWith >div:nth-child(4n+2){
        background-image: url('../../../assets/images/scan/圆角矩形 1 拷贝.png');
    }
    .playWith >div:nth-child(4n+3){
        background-image: url('../../../assets/images/scan/圆角矩形 1 拷贝 2.png');
    }
    .playWith >div:nth-child(4n+4){
        background-image: url('../../../assets/images/scan/圆角矩形 1 拷贝 2(1).png');
    }
    
    /*  */
    .MarginMerchant{
        background:#FA8687;
        color:#fff;
        width:75px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    .MarginMerchant1{
        background:#81d8d0;
        color:#fff;
        width:235px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    /*  */

    /*  
    .recommandCarou,.recommandCarouItem,.recommandGoodsItem{
        height: 390px;
    }*/
    .recommandGoods >div{
        background: #e4f0ee;
    }
    .recommandGoods >div:nth-child(n+5){
        background: #e4f0ee;
        margin-top: 20px;
    }
</style>