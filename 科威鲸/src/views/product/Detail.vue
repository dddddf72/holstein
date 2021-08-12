<template>
    <div class="home">
        <div>
            <Holstein></Holstein>
        </div>
        <div class="secondNav">
            
            <el-menu :default-active="activeIndex" class="el-menu-demo center" mode="horizontal" @select="handleSelect" background-color="#ffffff"
            text-color="#33333" style="font-size:15px"
            active-text-color="#81d8d0">
                    <el-menu-item index="1"><a href="#anchor-1">概述</a></el-menu-item>
                    <el-menu-item index="2"><a href="#anchor-2">描述</a></el-menu-item>
                    <el-menu-item index="3"><a href="#anchor-3">关于卖方</a></el-menu-item>
                    <el-menu-item index="4"><a href="#anchor-4">订单详细信息</a></el-menu-item>
                    <el-menu-item index="5"><a href="#anchor-5">推荐建议</a></el-menu-item>
                    <el-menu-item index="6"><a href="#anchor-6">常见问题</a></el-menu-item>
                    <el-menu-item index="7"><a href="#anchor-7">评论</a></el-menu-item>
                    <!--v-for="(item,index) in anchorList" :key="index" @click="scrollTop(item)" id="anchorBox"-->
            </el-menu>
            
            <div class="line"></div>
        </div>
        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration" style="position:relative">
                <div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }" v-if="detail.parentCategory">{{detail.parentCategory.cateName}}</el-breadcrumb-item>
                        <el-breadcrumb-item>{{detail.storeCategory.cateName}}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="roblox" style="position:sticky">
                        <div class="gfx">
                            <div class="gfxContain" style="">
                                <div class="gfxTitle">{{detail.serviceName}}</div>
                                <div class="gfxDollar">$20</div>
                            </div>
                            <div class="gfxDes">{{detail.serviceDesc}}</div>
                            <div style="display:flex">
                                <div><i class="el-icon-time"><span style="color:#999999">2天内完成</span> </i></div>
                                <div style="margin-left:25px"><i class="el-icon-refresh"><span style="color:#999999">无限制</span> </i></div>
                            </div>
                            <div class="gfxPayOne" @click="JumpPay">下单<span>（$20）</span></div>
                        </div>
                        <div class="gfxbutton">联络卖家</div>
                    </div>
                    <div id="anchor-1">
                        <div class="addTitle" style=""><a name="anchor-1">{{detail.serviceName}}</a></div>
                        <div style="display:flex;justify-content:space-between;width:560px;margin:30px 0">
                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                            <div>
                                <div>anne9008
                                    <span>|</span>
                                </div>
                                <div class="MarginMerchant" style="">{{detail.sellerQualification}}</div>
                            </div>
                            <div style="color:#FA8687;">{{detail.sellerQualification}}</div>|
                            <!-- <div class="star" style="width:81px;height:13px">
                                <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                    <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                    <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                    <img v-else src="../../src/assets/images/icon/none-star.png">
                                </div>  
                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                            </div>-->
                            <div style="color:#FFCC09">3.6</div><!--{{detail.zhScore}}-->
                            <span>（{{detail.praiseCount}}）
                                <span>|</span>
                            </span>
                            <div>队列中有{{detail.orderCount}}个订单</div>
                        </div>
                        <!-- <div class="banner">
                            <div class="item" style="width:673px;height:425px">
                                <img :src="dataList[currentIndex]" style="width:673px;height:425px">
                            </div>
                            <div class="page" v-if="this.dataList.length > 1">
                                <ul>
                                    <li @click="gotoPage(prevIndex)">&lt;</li>
                                    <li v-for="(item,index) in dataList" :key="index" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
                                    <li @click="gotoPage(nextIndex)">&gt;</li>
                                </ul>
                            </div>
                        </div>  -->
                        <div>
                            <!--
                            <div data-v-55893caa="" class="el-carousel el-carousel--horizontal"  loop="true" :interval="4000" trigger="click" arrow="always" style="background: red; width: 673px;">
                                <div class="el-carousel__container" style="width:673px;height:510px">
                                    <button type="button" class="el-carousel__arrow el-carousel__arrow--left" style="" @click="gotoPage(prevIndex)">
                                        <i class="el-icon-arrow-left"></i>
                                    </button>
                                    <button type="button" class="el-carousel__arrow el-carousel__arrow--right" style="" @click="gotoPage(nextIndex)">
                                        <i class="el-icon-arrow-right"></i>
                                    </button>
                                    <div data-v-55893caa="" class="el-carousel__item">
                                        <img :src="dataList[currentIndex]" style="width:673px;height:425px">
                                    </div>
                                </div>
                                <ul class="el-carousel__indicators el-carousel__indicators--horizontal el-carousel__indicators--outside">
                                    <li class="el-carousel__indicator el-carousel__indicator--horizontal" 
                                        v-for="(item,index) in dataList" :key="index" @click="gotoPage(index)" :class="{'current':currentIndex == index}">{{index+1}}
                                    </li>
                                </ul>
                            </div>
                            -->
                            <slide-show :slides="slides"></slide-show>
                        </div>
                    </div>
                    <div class="related partTop designLeft" id="anchor-2">
                        <div class="dotLine"></div>
                        <div class="addTitle"><a name="anchor-2">关于这个服务</a></div>
                        <!--<div class="relatedTxt">我将以我的创造力和技巧（矢量（Ai和EPS），JPEG和透明PNG）设计出色的LOGO。为您的网站/业务/产品获取 原始徽标概念！我的设计具有 独特性和概念性，质量无与伦比。我总是建议 订购矢量文件我将以我的创造力和技巧（矢量（Ai和EPS），JPEG和透明PNG）设计出色的LOGO。为您的网站/业务/产品获取 原始徽标概念！我的设计具有 独特性和概念性，质量无与伦比。我总是建议 订购矢量文件我将以我的创造力和技巧（矢量（Ai和EPS） 订购矢量文件我将以我的创造力和。</div>-->
                        <div class="relatedTxt">{{detail.serviceDesc}}</div>
                        <div class="dotLine"></div>
                        <div class="relatedForm">
                            <div class="formTitle">
                                <div>风格</div>
                                <div>文件格式</div>
                            </div>
                            <div class="formContent">
                                <div>3D</div>
                                <div>JPG格式，PNG格式</div>
                            </div>
                        </div>
                    </div>
                    <div class="relatedSeller partTop designLeft" id="anchor-3">
                        <div class="relatedSellerInfo" style="display:flex;margin:30px 0 35px 0">
                            <div class="avatar" style="width:145px;height:148px"><img src="../../assets/images/detail/组 21(6).png" alt=""></div>
                            <div class="sellerComment" style="margin-left:27px">
                                <div style="display:flex">
                                    <div>{{detail.merchantInfo.nickname}}</div>
                                    <div v-if="detail.isBzj" class="MarginMerchant" style="margin-left:5px"><a name="anchor-3">保证金商户</a></div>
                                </div>
                                <div style="color:#666666;">只有工作日接受订单</div>
                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                    </div>  -->
                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                </div>
                                <span style="color:#FFCC09">4.9</span>
                                <span>（202个订单）</span>
                                <div class="contactMe">联系我</div>
                            </div>
                        </div>
                        <div class="relatedForm">
                            <div class="formTitle">
                                <div>来自</div>
                                <div>开始于</div>
                            </div>
                            <div class="formContent">
                                <div>广东，深圳</div>
                                <!--<div>2020年2月</div>-->
                                <div>{{detail.merchantInfo.createTime}}</div>
                            </div>
                        </div>
                        <div class="relatedForm">
                            <div class="formTitle">
                                <div>平均响应时长</div>
                                <div>最后交货</div>
                            </div>
                            <div class="formContent">
                                <div>3小时</div>
                                <div>1天</div>
                            </div>
                        </div>
                        <div class="dotLine"></div>
                        <div class="relatedTxt">
                            你好！我叫Darshak，但我喜欢被称为San！我是一位热情而富有创意的图形艺术家，对徽标和横幅设计充满热情！我是一个有趣而充满爱心的家伙，他喜欢大自然，宠物和打扮！喜欢被称为San！我是一位热情而富有创意的图形艺术家，对徽标和横幅设计充满热情！我是一个有趣而充满爱心的家伙，他喜欢大自然，宠物和打扮！
                        </div>
                    </div>
                    <div class="orderDetails partTop designLeft" id="anchor-4">
                        <div class="addTitle"><a name="anchor-4">订单详细信息</a></div>
                        <div class="orderDetailInfo">
                            <div class="gfxContain" style="">
                                <div class="gfxTitle">Roblox GFX(徽标/图标尺寸)</div>
                                <div class="gfxDollar">$20</div>
                            </div>
                            <div class="gfxDes">您的ROBLOX游戏的高质量徽标</div>
                            <div style="display:flex">
                                <div><i class="el-icon-time"><span style="color:#999999">2天内完成</span> </i></div>
                                <div style="margin-left:25px"><i class="el-icon-refresh"><span style="color:#999999">无限制</span> </i></div>
                            </div>
                            <div class="solidLine"></div>
                        </div>
                        <div class="roblox2" style="float:right">
                            <div style="display:flex;font-size:24px;color:#666666">
                                <div class="robloxCount" style="width:46px;height:46px;line-height:46px;border:1px dashed #666666;text-align:center">1</div>
                                <div class="gfxDollar" style="width:75px;height:46px;line-height:46px;border:1px dashed #666666;text-align:center;margin-left:12px">$20</div>
                            </div>
                        </div>
                        <div class="checkBoxs">
                            <div>装箱数量</div>
                            <div>
                                <el-checkbox v-model="checkedTk">特快：1天送达</el-checkbox>
                            </div>
                            <div>
                                <el-checkbox v-model="checked">源文件<i class="el-icon-question"></i></el-checkbox>
                            </div>
                            <div>
                                <el-checkbox v-model="checked">源文件<i class="el-icon-question"></i></el-checkbox>
                            </div>
                        </div>
                        
                        <div class="gfxPayTwo" @click="JumpPay">下单（$20）</div>
                    </div>
                    <div class="recommond partTop designLeft"  id="anchor-5">
                        <div class="addTitle"><a name="anchor-5">为您推荐</a></div>
                        <el-carousel trigger="click" class="recommandCarou" style="height:390px">
                            <el-carousel-item v-for="item in 4" :key="item" class="recommandCarouItem">
                                <div class="recommandGoods" style="display:flex;justify-content:space-between;">
                                        <div style="width:310px;border:1px dashed #888888">
                                                <div style="width:310px;height:210px">
                                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                                </div>
                                                <div style="padding:30px 20px">
                                                    <div style="display:flex;">
                                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                            </div>
                                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                            <span>（202个订单）</span>
                                                        </div>
                                                        <div>
                                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div style="width:310px;border:1px dashed #888888">
                                                <div style="width:310px;height:210px">
                                                    <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                                </div>
                                                <div style="padding:30px 20px">
                                                    <div style="display:flex;">
                                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                                <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                            </div>
                                                            <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                            <span>（202个订单）</span>
                                                        </div>
                                                        <div>
                                                            <img src="../../assets/images/detail/喜欢.png" alt="">
                                                            <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                </div>

                            </el-carousel-item>
                        </el-carousel>
                        <!-- <div class="recommandTotal">banner2
                            <div class="showBanner">show
                                <div class="recommandshow">id:list2    class:box
                                    <div class="reconmandBanner el-carousel__item showBanner">lunbo1 lunbo
                                        <div class="bannerItem">song

                                        </div>
                                        

                                    </div>
                                    <div class="reconmandBanner el-carousel__item"> lunbo
                                        <div class="bannerItem">song
                                        
                                        </div>
                                        

                                    </div>
                                
                                </div>
                            </div>
                            <button type="button" class="el-carousel__arrow el-carousel__arrow--left" style="" @click="gotoPage(prevIndex)">
                                <i class="el-icon-arrow-left"></i>
                            </button>
                            <button type="button" class="el-carousel__arrow el-carousel__arrow--right" style="" @click="gotoPage(nextIndex)">
                                <i class="el-icon-arrow-right"></i>
                            </button>
                        </div> -->
                    </div>
                    <div class="commonProblem partTop designLeft" id="anchor-6">
                        <div class="addTitle"><a name="anchor-6">常见问题</a></div><!--[faq]-->
                        <div>
                            <el-collapse v-model="activeNames" v-for="(faq,index) in detail.faq" :key="index">
                                <el-collapse-item :title="faq.question" :name="index">
                                    <div>{{faq.answer}}</div>
                                    <!--<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
                                </el-collapse-item>
                                <!--
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                                -->
                            </el-collapse>
                        </div>
                    </div>
                    <div class="commentsCount partTop designLeft" id="anchor-7">
                        <div style="display:flex;align-items:center">
                            <div class="addTitle" style="">202条
                                <span>&nbsp;&nbsp;&nbsp;<a name="anchor-7">评论</a></span>
                            </div>
                            <div style="margin-left:20px">
                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                    </div>  -->
                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                </div>
                                <span style="color:#FFCC09;margin-left:5px">4.9</span>
                            </div>
                        </div>
                        <div style="display:flex;justify-content:space-between">
                            <div class="commentsL" style="width:360px">
                                <div>
                                    <div>5星</div>
                                    <div data-v-55893caa="">
                                        <div data-v-55893caa="" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
                                            <div class="el-progress-bar">
                                                <div class="el-progress-bar__outer" style="height: 6px;">
                                                    <div class="el-progress-bar__inner" style="width: 20%; background-color: rgb(255, 204, 9);"></div>
                                                </div>
                                            </div>
                                            <div class="el-progress__text" style="font-size: 14px;">(192)</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>4星</div>
                                    <div data-v-55893caa="">
                                        <div data-v-55893caa="" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
                                            <div class="el-progress-bar">
                                                <div class="el-progress-bar__outer" style="height: 6px;">
                                                    <div class="el-progress-bar__inner" style="width: 20%; background-color: rgb(255, 204, 9);"></div>
                                                </div>
                                            </div>
                                            <div class="el-progress__text" style="font-size: 14px;">(192)</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>3星</div>
                                    <div data-v-55893caa="">
                                        <div data-v-55893caa="" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
                                            <div class="el-progress-bar">
                                                <div class="el-progress-bar__outer" style="height: 6px;">
                                                    <div class="el-progress-bar__inner" style="width: 20%; background-color: rgb(255, 204, 9);"></div>
                                                </div>
                                            </div>
                                            <div class="el-progress__text" style="font-size: 14px;">(192)</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>2星</div>
                                    <div data-v-55893caa="">
                                        <div data-v-55893caa="" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
                                            <div class="el-progress-bar">
                                                <div class="el-progress-bar__outer" style="height: 6px;">
                                                    <div class="el-progress-bar__inner" style="width: 20%; background-color: rgb(255, 204, 9);"></div>
                                                </div>
                                            </div>
                                            <div class="el-progress__text" style="font-size: 14px;">(192)</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>1星</div>
                                    <div data-v-55893caa="">
                                        <div data-v-55893caa="" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--line">
                                            <div class="el-progress-bar">
                                                <div class="el-progress-bar__outer" style="height: 6px;">
                                                    <div class="el-progress-bar__inner" style="width: 20%; background-color: rgb(255, 204, 9);"></div>
                                                </div>
                                            </div>
                                            <div class="el-progress__text" style="font-size: 14px;">(192)</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- <div style="">
                                    <div>1星</div>
                                    <el-progress :percentage="percentage" show-text="false" format="" :color="customColors"></el-progress>
                                </div> -->
                            </div>
                            <div class="commentsR" style="width:250px">
                                <div class="gfxTitle">评分明细</div>
                                <div style="display:flex;justify-content:space-between">
                                    <div>卖家沟通状态</div>
                                    <div>4.9
                                        <img src="../../assets/images/detail/图层 16 拷贝.png" alt="">
                                    </div>
                                </div>
                                <div style="display:flex;justify-content:space-between">
                                    <div>推荐指数</div>
                                    <div>4.9
                                        <img src="../../assets/images/detail/图层 16 拷贝.png" alt="">
                                    </div>
                                </div>
                                <div style="display:flex;justify-content:space-between">
                                    <div>卖家技术水平</div>
                                    <div>4.9
                                        <img src="../../assets/images/detail/图层 16 拷贝.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dotLine"></div>
                        <div class="commentLists">
                            <div class="commentListOnly" style="">
                                    <div class="commentList" style="padding:10px 0;border-bottom:1px solid #f5f5f5">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008
                                                    <span><img src="../../assets/images/detail/图层 16 拷贝.png" alt=""><span style="color:#FFCC09;margin-left:5px">5</span></span>
                                                </div>
                                                <div style="color:#666666">
                                                    广东，深圳
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            给定一些关于我的社区以及我们的目标是什么的详细信息，这位卖家将它们很好地匹配在一起。在给出的两个概念中我一个比另一个更喜欢，但是我想这就是为什么他们给出两个选择的原因。我会再次使用此卖家。
                                        </div>
                                        <div>2个月前发布</div>
                                        <div style="display:flex;width:145px;justify-content:space-between">
                                            <div>
                                                <img src="../../assets/images/detail/点赞.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                <span style="margin-left:7px">点赞</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/点赞 拷贝.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                <span style="margin-left:7px">踩</span>
                                            </div>
                                        </div>
                                        <!-- <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div> 
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="commentList" style="padding:10px 0;border-bottom:1px solid #f5f5f5">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                            <div style="margin-left:10px">
                                                <div>anne9008
                                                    <span><img src="../../assets/images/detail/图层 16 拷贝.png" alt=""><span style="color:#FFCC09;margin-left:5px">5</span></span>
                                                </div>
                                                <div style="color:#666666">
                                                    广东，深圳
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            给定一些关于我的社区以及我们的目标是什么的详细信息，这位卖家将它们很好地匹配在一起。在给出的两个概念中我一个比另一个更喜欢，但是我想这就是为什么他们给出两个选择的原因。我会再次使用此卖家。
                                        </div>
                                        <div>2个月前发布</div>
                                        <div style="display:flex;width:145px;justify-content:space-between">
                                            <div>
                                                <img src="../../assets/images/detail/点赞.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                <span style="margin-left:7px">点赞</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/点赞 拷贝.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                                <span style="margin-left:7px">踩</span>
                                            </div>
                                        </div>
                                        <!-- <div style="display:flex;justify-content:space-between">
                                            <div>
                                                <div class="star" style="width:81px;height:13px;display:inline-block">
                                                    <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div> 
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                            </div>
                            <div class="browseMore" style="color:#81D8D0;font-size:16px;margin-top:21px">
                                <i class="el-icon-plus"><span>查看更多</span></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alsoCheck partTop ">
                    <div class="addTitle">查看此服务的人还查看了</div>
                    <div class="recommandGoods" style="display:flex;justify-content:space-between;">
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                <div class="visitedHistory partTop">
                    <div class="addTitle">浏览记录</div>
                    <div class="recommandGoods" style="display:flex;justify-content:space-between;">
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
                                                <!-- <img :src="lists.collected?collection:collection_anti" alt="" class="icon"> -->
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="width:310px;border:1px dashed #888888">
                                    <div style="width:310px;height:210px">
                                        <img  style="width:310px;height:210px" src="../../assets/images/detail/组 21@2x(7).png" alt="">
                                    </div>
                                    <div style="padding:30px 20px">
                                        <div style="display:flex;">
                                            <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
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
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <span style="color:#FFCC09;margin-left:3px">4.9</span>
                                                <span>（202个订单）</span>
                                            </div>
                                            <div>
                                                <img src="../../assets/images/detail/喜欢.png" alt="">
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

import slideShow from '../../components/Cart.vue'
// import collection from '../../assets/images/detail/喜欢.png'
// import collection_anti from '../assets/images/icon/collection-anti.png'
// import Holstein from '@/components/Nav/Holstein.vue'
import Holstein from '../../components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
import GoodsHttp from '@/model/GoodsHttp'
export default {
    components: {
        slideShow,
        Holstein,Footer
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            anchorList:[
                {id:1,name:'概述'},
                {id:2,name:'描述'},
                {id:3,name:'关于卖方'},
                {id:4,name:'订单详细信息'},
                {id:5,name:'推荐建议'},
                {id:6,name:'常见问题'},
                {id:7,name:'评论'},
            ],
            detail:[],
            checkedTk:'',
            checked:'',
            input2:'',
            name:'1',
            activeIndex:'',
            tableData: Array(20).fill(item),
            iframeState:true,
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],

            /*  */
            // dataList:["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
            currentIndex: 0,   //默认显示图片
            timer: null,    //定时器
            /*  */
            slides: [
                {
                    // src: require('../assets/slideShow/pic1.jpg'),//在Js里面，用require将图片引入进来
                    src:"https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                    title: 'xxx1',
                    href: 'detail/analysis'
                },
                {
                    // src: require('../assets/slideShow/pic2.jpg'),
                    src:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                    title: 'xxx2',
                    href: 'detail/count'
                },
                {
                    // src: require('../assets/slideShow/pic3.jpg'),
                    src:"https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                    title: 'xxx3',
                    href: 'http://xxx.xxx.com'
                },
                {
                    // src: require('../assets/slideShow/pic4.jpg'),
                    src:"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                    title: 'xxx4',
                    href: 'detail/forecast'
                }
            ],
            activeNames: ['1'],
            percentage: 20,
            customColors: '#ffcc09',

            // form: {
            //     name: '',
            //     region: '',
            //     date1: '',
            //     date2: '',
            //     delivery: false,
            //     type: [],
            //     resource: '',
            //     desc: ''
            // },
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
        }
    },
    // watch:{
    //     scroll(val){
    //         let muneh = document.getElementById("anchorBox").offsetHeight;
    //         let anchor1 = document.getElementById("anchor-1").offsetHeight;
    //         let anchor2 = document.getElementById("anchor-2").offsetHeight;
    //         let anchor3 = document.getElementById("anchor-3").offsetHeight;
    //         let anchor4 = document.getElementById("anchor-4").offsetHeight;
    //         let anchor5 = document.getElementById("anchor-5").offsetHeight;
    //         let anchor6 = document.getElementById("anchor-6").offsetHeight;
    //         let anchor7 = document.getElementById("anchor-7").offsetHeight;
    //         let part1h = mune1+anchor1+anchor2+anchor3+anchor4+anchor5+anchor6+anchor7-100;
    //         let part2h = mune1+anchor1+anchor2+anchor3+anchor4+anchor5+anchor6+anchor7-100;
    //         if(val>=muneh){
    //             this.showNav = true
    //         }
    //         if(val>=muneh &&val<part1h){
    //             this.activeTab = href
    //         }
    //     }
    // },
    async mounted() {
        var id = this.$route.params.id;
        // console.log(id)
        var res = await GoodsHttp.serveDetail(id)
        this.detail = res.data.biz.list[0]
        console.log(this.detail)
        // console.log(this.slides)
        // this.runInv();
        //
        // let element = document.getElementById("anchorBox");
        // element.addEventListener("scroll",this.handleScroll)
    },
    // computed: {
    //     //上一张
    //     prevIndex() {
    //         if(this.currentIndex == 0) {
    //         return this.dataList.length - 1;
    //         }else{
    //         return this.currentIndex - 1;
    //         }
    //     },
    //     //下一张
    //     nextIndex() {
    //         if(this.currentIndex == this.dataList.length - 1) {
    //         return 0;
    //         }else {
    //         return this.currentIndex + 1;
    //         }
    //     }
    // },
    methods: {
        showIframe1(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            this.iframeState = false;
            // this.$router.push(path)
            this.$router.push({name:'myOrder'})
        },
        showIframe2(){
            this.iframeState = false;
            this.$router.push({name:'comments'})
        },
        handleStar(ele){
                var arr=[];
                for(let i=0;i<5;i++){
                    if(ele>=2){
                        arr.push(2)
                    }else if(ele>=0){
                        arr.push(Number(ele.toFixed(1)))
                    }else{
                        arr.push(0)
                    }
                        ele = ele - 2;
                }
                return arr
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
        handleSelect(){
            console.log(1)
        },
        JumpPay(){
            this.$router.push({name:'01orderDetail'});
        }
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
a{
    text-decoration: none;
    color: #000000;
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
    .el-menu--horizontal>.is-active{
        border-bottom: 5px solid #81d8d0;
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
        width:55px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    /*  */
    .roblox{
        width: 500px;
        float:right;
        top: 85px;
        right: 320px;
    }
    .gfx{
        width: 500px;
        height: 240px;
        padding: 30px;
        border: 1px solid #f0f0f0;
    }
    .gfxContain{
        display: flex;
        justify-content: space-between;
        height: 32px;
    }
    .gfxTitle{
        height: 32px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        line-height: 32px;
    }
    .gfxContain .gfxDollar{
        height: 25px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #666666;
        line-height: 32px;
    }
    .gfxDes{
        margin: 14px 0 24px 0;
    }
    .gfxPayOne{
        color: #fff;
        width: 437px;
        height: 55px;
        line-height: 55px;
        margin-top: 30px;
        background: #81D8D0;
        font-size: 16px;
        text-align: center;
        border-radius: 10px;
    }
    .gfxbutton{
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
    .partTop{
        margin: 70px 0;
    }
    .designLeft{
        width: 716px;
    }
    /*  */
    .dotLine{
        margin: 21px 0;
        height: 1px;
        border: 1px dashed #888888;
    }
    .relatedForm{
        margin-top: 26px;
    }
    .formTitle{
        color: #999999;
    }
    .formContent{
        color: #666666;
    }
    .formTitle,.formContent{
        display: flex;
    }

    .formTitle div,.formContent div{
        margin: 5px 0;
        width: 308px;
    }
    /*  */
    .sellerComment{
        width: 220px;
    }
    .sellerComment div{
        margin: 5px 0;
    }
    .contactMe{
        width: 110px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        background: #81d8d0;
        color: #fff;
    }
    /*  */
    .solidLine{
        margin: 20px 0;
        height: 1px;
        border: 1px dashed #f5f5f5;
    }
    .checkBoxs div{
        margin-bottom: 20px;
    }
    .gfxPayTwo{
        color: #fff;
        height: 55px;
        line-height: 55px;
        margin-top: 30px;
        background: #81D8D0;
        font-size: 16px;
        text-align: center;
        border-radius: 10px;
    }
    /*  */
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
    /*  */
    .recommandCarou,.recommandCarouItem,.recommandGoods,.recommandGoodsItem{
        height: 390px;
    }
    /*  */
    .commentsL>div,.commentsR>div{
        margin: 13px 0;
    }
    .commentList >div{
        margin: 17px 0;
    }
    
</style>