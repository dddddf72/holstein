<template>
    <div>
        <div class="secondNav">
            <el-menu :default-active="activeIndex" class="el-menu-demo center" mode="horizontal" @select="handleSelect" background-color="#ffffff"
            text-color="#33333"
            active-text-color="#81d8d0">
                    <el-menu-item v-for="item in NavTitle" :key="item.pic" >{{item.cateName}}</el-menu-item>
            </el-menu>
        </div>
        <div class="banner">
            <img :src="NavTitleOne.pic" class="bannerImg" alt="">
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
                    
                    <div id="app">
                        <div class="out">
                            <div class="btn btnLeft" @click="clickLeft">&lt;</div>
                            <img class="pic" :src="picArr[num]" alt="">
                            <div class="btn btnRit" @click="clickRit" >&gt;</div>
                        </div>
                        <h1>{{num}}</h1>
                    </div>
                    <div>
                        <!--<el-carousel trigger="click" indicator-position="none" arrow="always" height="220px">-->
                            <div>
                                <div class="playWith dispalyFlex" style="over-flow:hidden">
                                    
                                    <div v-for="item of NavTitleChild" :key="item" style="width:310px;height:153px">
                                        <div class="dispalyFlex" style="padding:38px 36px;">
                                            <div>
                                                <div>{{item.cateName}}</div>
                                                <div>{{item.label}}</div>
                                            </div>
                                            <div><img src="../../assets/images/scan/游戏.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btnLe">
                                </div>
                            </div>
                        <!--</el-carousel>-->
                    </div>

                    <div class="partTop">
                        <div style="background:#81d8d0;height:55px;line-height:55px">
                            <el-popover @click="handleClick" class="dropDownL" placement="bottom-start" trigger="click">
                                <div class="dropdownMenu">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                            <div style="color:#333333;font-weight:bold;padding:16px 0 0 40px">卖方资质</div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs" style="padding-left:40px">
                                                <div>
                                                    <el-checkbox v-model="checkedHighCom">评价最高的卖家（284）</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedFirstSale">一级卖家（5,460）</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedBail">保证金商户（5,460）</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedSecondSale">二级卖家（5,460）</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedNotSale">非卖家（131,460）</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedNotBail">非保证金商户（5,460）</el-checkbox>
                                                </div>
                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <div @click="clearsellquali" style="width:80px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全部清除</div>
                                                    <div style="width:80px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
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
                                                            <el-input v-model="inputMinRmb" placeholder="最小金额"></el-input>
                                                        </div>
                                                        <div>---</div>
                                                        <div style="width:60px;height:26px;">
                                                            <el-input v-model="inputMaxRmb" placeholder="最大金额"></el-input>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <div @click="clearSaleamount" style="width:60px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全部清除</div>
                                                    <div style="width:60px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
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
                                                <div>
                                                    <el-checkbox v-model="checkedOneDay">24小时内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedThreeDay">3天内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedFiveDay">5天内交付</el-checkbox>
                                                </div>
                                                <div>
                                                    <el-checkbox v-model="checkedRandom">随意</el-checkbox>
                                                </div>
                                            </div>
                                            <div style="background:#f0f0f0">
                                                <div class="dispalyFlex" style="padding:17px 40px">
                                                    <div @click="cleartimeDelivery" style="width:60px;height:26px;border-bottom:1px dashed #888888;color:#999999;line-height:26px;text-align:center">全部清除</div>
                                                    <div style="width:60px;height:26px;background:#81d8d0;color:#fff;text-align:center;line-height:26px;text-align:center">确定</div>
                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </el-popover>
                        </div>
                        <div style="margin-top:20px">150,221个可用服务</div>
                    </div>
                </div>
                <div class="recommandLists partTop">
                        <div class="addTitle">为您推荐的服务</div>
                    <div class="recommandGoods dispalyFlex" style="width:1280px;flex-wrap:wrap">
                            <div style="width:310px;">
                                    <div style="width:310px;height:210px" @click="JumpDetail">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                        <div class="pageRule" style="margin:45px auto">
                            <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage3"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                        </div>
                </div>
                <div class="releaseReq partTo" style="background:#99bed8;height:150px">
                    <div class="dispalyFlex" style="width:825px;margin:auto;padding-top: 42px;">
                        <div class="dispalyFlex">
                            <div style="width:65px;height:65px">
                                <img style="width:65px;height:65px" src="../../assets/images/scan/嗨.png" alt="">
                            </div>
                            <div style="height:50px;color:#fff;line-height:50px;font-size:30px;margin-left:30px">嗨~&nbsp;&nbsp;&nbsp;需要让人才主动来找你吗？</div>
                        </div>
                        <div @click="launchBidding" style="width:160px;height:50px;background:#fff;color:#99bed8;line-height:50px;font-size:16px;text-align:center">
                            <el-dropdown @click="handleClick" class="businessCenter">
                                <div class="" style="">
                                    发布需求
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="width:442px">
                                                <div style="color:#fff;height:50px;background:#81d8d0;font-weight:bold;font-size:18px;line-height:50px">
                                                    <div style="margin-left:40px">发布需求</div>
                                                </div>
                                            <el-form>
                                                <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:20px 0 0 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求类目</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                                <el-select v-model="valuedemand" placeholder="请选择需求类目">
                                                                    <el-option
                                                                    v-for="item in optionsdemand"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                                <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求预算</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                                <el-input
                                                                    placeholder="请输入预算"
                                                                    prefix-icon="el-icon-wallet"
                                                                    v-model="input2demandpre">
                                                                    <!--<i slot="prefix" class="el-input__icon el-icon-wallet"></i> -->
                                                                </el-input>
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                                <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求描述</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                            <el-input type="textarea" placeholder="请对你的需求进行简单的描述，例如，我想做一个网站" v-model="form.desc"></el-input>
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                                <el-form-item data-v-a72aa574="" class="el-form-item el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求附件</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div style="color:#fff;width:100px;height:35px;background:#81d8d0;line-height:35px;text-align:center" class="">
                                                            上传附件
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                            </el-form>
                                            <!--<div class="checkBoxs">
                                                <div style="padding:0 40px">
                                                    <div style="display:flex;justify-content:space-between;align-items:center;">
                                                        
                                                    </div>
                                                </div>
                                            </div>-->
                                            <div class="concernBtn" style="">
                                                发布需求
                                            </div>
                                            <!--<div style="background:#f0f0f0">
                                                <div style="display:flex;justify-content:space-between;align-items:center;padding:17px 40px">
                                                    <div style="width:60px;height:26px;color:#999999;line-height:26px;text-align:center">查看所有通知
                                                        <i class="el-icon-arrow-right el-icon--right"></i>
                                                    </div>
                                                </div>
                                            </div>-->
                                        </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
                <div class="visitedHistory partTop">
                    <div class="dispalyFlex">
                        <div class="addTitle">浏览记录</div>
                        <div class="dispalyFlex" style="width:150px">
                            <div @click="clearVisited">全部清除</div>|
                            <div>查看全部</div>
                        </div>
                    </div>
                    <div class="recommandGoods dispalyFlex" v-show="clearVisitedShow">
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
                            <div style="width:310px;">
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
        
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'
    // import Holstein from '@/components/Nav/Holstein.vue'
    import Holstein from '../../components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    export default {
        components: {
            Holstein,Footer
        },
        props:{
            lists:{
                type:Object
            },
        },
        data() {
            return {
                /* 一级标题 */
                NavTitle:"",
                NavTitleOne:"",
                /* 二级标题 */
                NavTitleChild:"",
                //
                zfbTrust:"",
                activeIndex:'1',
                isShow:true,    //whatCanWoDoItem和clickSituation样式
                backrgound:'#81d8d0',
                // checked:"",
                //卖方资质
                checkedHighCom:"",//评价最高的卖家（284）
                checkedFirstSale:"",//一级卖家
                checkedBail:"",//保证金商户（5
                checkedSecondSale:"",
                checkedNotSale:"",//非卖家（131
                checkedNotBail:"",//非保证金商户（5
                //交货时间
                checkedOneDay:"",//24小时内交付
                checkedThreeDay:"",//3天内交付
                checkedFiveDay:"",//5天内交付
                checkedRandom:"",//随意
                //售卖金额
                inputMinRmb:"",//最小金额
                inputMaxRmb:"",//最大金额
                input2:"",
                currentPage3: 5,
                //发布需求
                input2demandpre:"",
                //选择需求
                optionsdemand: [{
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
                valuedemand: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                /*  */
                //浏览记录 全部清除
                clearVisitedShow:true,
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
                    //轮播图
                    num:0, //数据下标遍历值
                    picArr:[
                        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                    ],  //将图片路径放入数组
            }
        },
        async mounted() {
            var res = await GoodsHttp.serviceProCategory()
            // console.log(res.data.biz.content[0])
            this.NavTitle = res.data.biz.content
            this.NavTitleOne = res.data.biz.content[0]
            this.NavTitleChild = res.data.biz.content[0].children
        },
        methods: {
            clearsellquali(){
                this.checkedHighCom = false,//评价最高的卖家（284）
                this.checkedFirstSale = false,//一级卖家
                this.checkedBail = false,//保证金商户（5
                this.checkedSecondSale = false,
                this.checkedNotSale = false,//非卖家（131
                this.checkedNotBail = false
            },
            clearSaleamount(){
                this.inputMinRmb = "",//最小金额
                this.inputMaxRmb = ""
            },
            cleartimeDelivery(){
                this.checkedOneDay= false,//24小时内交付
                this.checkedThreeDay= false,//3天内交付
                this.checkedFiveDay= false,//5天内交付
                this.checkedRandom = false
            },
            ////浏览记录 全部清除
            clearVisited(){
                this.clearVisitedShow = false
            },

            handleSelect(){
                console.log("select")
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(){
                console.log("handleClick")
            },
            JumpDetail(){
                this.$router.push({name:'detail'});
            },
            launchBidding(){
                this.$router.push({name:'biddingSerProvide'});
            },
            clickLeft:function(){
                this.num--
                if(this.num<0){ // 当下标小于0则下标更改为图片数组最后一个下标值
                    this.num= this.picArr.length-1
                }
            },
            clickRit(){  //函数ES6简写，去掉":function"
                this.num++
                if(this.num>this.picArr.length-1){ // 当下标大于图片数组最后一个下标值则改为0
                    this.num=0
                }
            }
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
        background-image: url('../../assets/images/pageIndex/搜索 (2).png');
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
        background: url('../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
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
        background: url('../../assets/images/pageIndex/圆角矩形 2.png') no-repeat;
    }
    .practitioners{
        margin-left: 21px;
        background: url('../../assets/images/pageIndex/圆角矩形 2 拷贝.png') no-repeat;
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
        background-image: url('../../assets/images/scan/圆角矩形 1.png');
    }
    .playWith >div:nth-child(2){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝.png');
    }
    .playWith >div:nth-child(3){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝 2.png');
    }
    .playWith >div:nth-child(4){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝 2(1).png');
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


    .out{ width:590px; height: 470px; margin:100px auto; border:1px solid #ccc; position: relative; user-select: none;}
        .out .btn{ position:absolute; width:30px; height: 60px; background:rgba(0,0,0,0.3); color:#fff; font-size: 30px; text-align: center; line-height: 60px; font-family: "宋体"; top:calc(50% - 30px); cursor: pointer; transition: background 0.5s;}
        .out .btn:hover{ background:rgba(0,0,0,0.6)}
        .out .btnLeft{ left: 0;}
        .out .btnRit{ right:0;}
        .out .pic{ width:590px; height: 470px;}

</style>