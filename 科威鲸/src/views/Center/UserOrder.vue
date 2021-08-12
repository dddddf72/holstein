<template>
    <div class="home">
        <Holstein></Holstein>

        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <el-container style="">
                    <el-aside width="200px" style="">
                        <el-menu :default-openeds="['1','2', '3']" default-active="1" :collapse="isCollapse">
                            <el-menu-item index="1">
                                <!--<router-link :to="{ name: 'Detail', query: { id: 123 }}">跳转至detail</router-link>
                                <router-link :to="{name:'userOrder'}">-->
                                <router-link to="/userOrder">
                                    <i class="el-icon-s-home"></i>
                                    <span slot="title">首页</span>
                                </router-link>
                            </el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span slot="title">商品管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1"  @click="showserviceProduct">管理商品</el-menu-item>
                                    <el-menu-item index="2-2" target="showHere" @click="showServiceCollect">商品收藏</el-menu-item>
                                    <el-menu-item index="2-3" @click="showServiceBrowse">浏览记录</el-menu-item>
                                    <el-menu-item index="2-4">发票管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">订单管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="3-1" @click="showOrderList">订单列表</el-menu-item>
                                    <el-menu-item index="3-2" @click="showServiceEvaluate">评论管理</el-menu-item>
                                    <el-menu-item index="3-3" @click="showDemandBid">竞标管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">个人设置</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="4-1" @click="serverModInf">修改信息</el-menu-item>
                                    <el-menu-item index="4-2" @click="serverRealAuth">实名认证</el-menu-item>
                                    <el-menu-item index="4-3">优惠券</el-menu-item>
                                </el-menu-item-group>

                            <div class="toReport">
                                <div class="dotLine"></div>
                                <div class="toRepotConten">
                                    <div class="navTitleContext2" style="margin:0 auto">
                                            <span class="capa">LOGO  </span>
                                            <span>HELSTEIN</span>
                                    </div>
                                    <div style="color:#666666;margin:10px 0">如果您发现以下情况，请联系我们</div>
                                    <div class="reqDetail" style="width:200px;margin:0 auto;text-align:left;color:#666666">
                                        <div>•  信息泄露</div>
                                        <div>•  服务商违规</div>
                                        <div>•  Holstein员工违规</div>
                                    </div>
                                    <div class="toReportTel">窝牛举报热线</div>
                                    <div class="dotLine"></div>
                                </div>
                            </div>

                            </el-submenu>
                            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                                <el-radio-button :label="false">展开</el-radio-button>
                                <el-radio-button :label="true">收起</el-radio-button>
                            </el-radio-group>
                        </el-menu>
                    </el-aside>
                    
                    <el-main >
                        
                        <!-- <iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src=""></iframe> -->
                        <div style="margin-left:40px;" v-show="iframeState">
                            <div class="" style="display:flex;align-items:center">
                                <div class="avatar" style="width:145px;height:148px"><img src="../../assets/images/detail/组 21(6).png" alt=""></div>
                                <div class="sellerComment" style="margin-left:27px;text-align:left">
                                    <div style="color:#000000;font-size:24px;">
                                        你好{{this.$data.username}}，欢迎回来！
                                    </div>
                                    <div class="dispalyFlex" style="color:#666666;width:380px;">
                                        <div>
                                            <span>个人信息修改</span><i class="el-icon-edit"></i>
                                            <!--
                                            <el-popover
    placement="right"
    title="个人信息修改"
    width="750"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visibleinf">
        <table style="max-width: 100%; vertical-align: top;" class="autoCell-form ti-form ng-scope" ng-style="verticalAlign" id="tiForm01" vertical-align="textForm.fieldVerticalAlign" is-text-form="textForm.isTextForm" form-line-height="textForm.lineHeight">
                            <tbody class="ti-text-form">                                
                                <tr class="ti-no-ng-animate ng-scope" style="font-size:18px;font-weight:bold;width:130px;height:55px;display:block">基本信息</tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">头像</td>
                                    <td  style="vertical-align: top;display:flex"> 
                                    
                                        <el-upload
                                            class="avatar-uploader"
                                            action="#"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess" 
                                            :before-upload="beforeAvatarUpload">
                                            <img v-if="imageavatarUrl" :src="imageavatarUrl?imageavatarUrl:imageavatarUrl_anti" class="avatar" style="width:150px;height:150px">
                                            <i v-else class="zel-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                        
                                        <el-dialog :visible.sync="dialogavatarVisible">
                                            <img v-if="imageavatarUrl"  style="width:150px;height:150px" :src="imageavatarUrl" alt="">
                                        </el-dialog>
                                        
                                        <div>
                                            <img :src="getImgUrl(businessInf.headPhoto)" alt="" width="100px" height="100px">
                                            <input type="file" style="width: 100px;height: 100px;" @change="getFileOthers"> 
                                        </div>
                                    </td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">用户名</td>
                                    <td  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.userType" class="ng-binding ng-scope">
                                            <div style="display:inline-block;">{{this.$data.username}}（自动生成）</div>
                                        </div>
                                    </td>
                                    <td class="ti-no-ng-animate ng-scope" style=""></td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">密码</td>
                                    <td  style="vertical-align: top;"> 
                                        <el-popover
    placement="right"
    title="修改密码"
    width="750"
    trigger="click"
    v-model="visiblepwd">
        <el-form class="el-form login-form el-form--label-left" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1">
            <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                        <input type="text" v-model="ruleForm1.username" autocomplete="off" placeholder="请输入手机号" class="el-input__inner" style="display:inline-block">
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="旧密码" prop="oldPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                        <input type="password" autocomplete="off" v-model="ruleForm1.oldPass" placeholder="请输入旧密码" class="el-input__inner" style="display:inline-block">
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="新密码" prop="newPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                        <input type="password" autocomplete="off" v-model="ruleForm1.newPass" placeholder="请输入新密码" class="el-input__inner" style="display:inline-block">
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="确认新密码" prop="confirmPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                        <input type="password" autocomplete="off" v-model="ruleForm1.confirmPass" placeholder="请再次输入新密码" class="el-input__inner" style="display:inline-block">
                    </div>
                </div>
            </el-form-item>
            <div class="pwdRule">
                <p>密码规则：</p>
                <p>1、8-16个字符，包括大小写字母，数字，特殊字符三种以上</p>
                <p>2、密码不能包含用户名</p>
                <p>3、不要使用连续或重复的数字/字符作为密码</p>
            </div>
            <el-form-item class="el-form-item el-form-item--small" style="width: 100%;margin-top:40px;">
                <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="margin-left: 0px;">
                    <button type="button" class="el-button el-button--primary el-button--medium" style="width: 100%;">确认修改</button>
                </div>
            </el-form-item>
        </el-form>
                                                <el-button ng-bind="authInfo.userType" class="ng-binding ng-scope" style="color:blue;border:none" slot="reference">修改密码</el-button> 
                                            </el-popover>
                                    </td>
                                    <td class="ti-no-ng-animate ng-scope" style=""></td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">名称 </td>
                                    <td  style="vertical-align: top;">
                                        <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                            <el-input type="text" v-model="businessInf.name" style="width:520px;height:40px"></el-input>
                                        </div> 
                                    </td>
                                    <td class="ti-no-ng-animate ng-scope" style=""></td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">手机号码</td>
                                    <td  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.name" class="authInfoName ng-binding ng-scope">
                                            {{this.$data.username}}
                                            <el-popover
    placement="right"
    title="修改手机号码"
    width="750"
    trigger="click"
    v-model="visibleChangeMobile">
            <div>
                <el-steps :space="200" :active="active" finish-status="success">
                    <el-step title="验证原手机">
                    </el-step>
                    <el-step title="绑定新手机">
                    </el-step>
                    <el-step title="完成绑定">
                    </el-step>
                </el-steps>
                <div>
                    <div v-show="step1">
                        <el-form class="el-form login-form el-form--label-left" :model="ruleForm2old" status-icon :rules="rules2old" ref="ruleForm2old">
                            <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <div class="el-input el-input--small el-input--prefix">
                                        <input type="text" v-model="ruleForm2old.mobile" autocomplete="off" placeholder="请输入原手机号" class="el-input__inner">
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <div class="el-input el-input--small el-input--prefix">
                                        <input type="text" autocomplete="off" v-model="ruleForm2old.msgCode" placeholder="请输入验证码" class="el-input__inner verificationCode" style="width:280px">
                                        <el-button @click="getPhoneCode(ruleForm2old.mobile)">发送</el-button>
                                    </div>
                                    <div class="login-code" ></div>
                                </div>
                            </el-form-item>
                        </el-form>
                        
                    </div>
                    <div v-show="step2">
                        <el-form class="el-form login-form el-form--label-left" :model="ruleForm2new" status-icon :rules="rules2new" ref="ruleForm2new">
                            <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <div class="el-input el-input--small el-input--prefix">
                                        <input type="text" v-model="ruleForm2new.username" autocomplete="off" placeholder="请输入新手机号" class="el-input__inner">
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <div class="el-input el-input--small el-input--prefix">
                                        <input type="text" autocomplete="off" v-model="ruleForm2new.code" placeholder="请输入验证码" class="el-input__inner verificationCode" style="width:280px">
                                        <el-button @click="getPhoneCode(ruleForm2new.username)">发送</el-button>
                                    </div>
                                    <div class="login-code" ></div>
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div v-show="step3">
                        <div class="el-form-item__content" style="margin-left: 0px;">
                            <div class="el-input el-input--small el-input--prefix">
                                <h1>已完成修改</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <el-button v-show="step1" style="margin-top: 12px;" @click="next('ruleForm2old')">下一步</el-button>
                <el-button v-show="step2" style="margin-top: 12px;" @click="next('ruleForm2new')">下一步</el-button>
                <el-button v-show="step3" style="margin-top: 12px;" @click="next()">下一步</el-button>
            </div>
                                    <el-button style="width:100px;height:35px;margin-left:32px;color:blue;border:none" slot="reference">修改手机号</el-button>
                                            </el-popover>
                                        </div> 
                                    </td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">微信绑定 </td>
                                    <td v-show="!wxbd"  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.authTime" class="ng-binding ng-scope">
                                            未绑定
                                            <el-popover
    placement="right"
    title="绑定微信"
    width=""
    trigger="click"
    v-model="visibleChangewx">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2bdwx" status-icon :rules="rules2bdwx" ref="ruleForm2bdwx">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="usemobilername">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm2bdwx.mobile" autocomplete="off" placeholder="请输入手机号码" class="el-input__inner">
                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="msgCode">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2bdwx.msgCode" autocomplete="off" placeholder="输入手机验证码" style="width:220px" class="el-input__inner verificationCode">
                                                    <el-button @click="getPhoneCode(ruleForm2bdwx.mobile)" class="login-code" style="margin-left:25px">
                                                        获取手机验证码
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small">
                                            <div  @click="confirmwxbd('ruleForm2bdwx')" class="el-form-item__content" style="margin-left: 0px;">
                                                    <div style="margin:0 auto" v-if="wechatScan" />
                                                    <el-button class="login-code" style="margin-left:25px">
                                                        确认绑定
                                                    </el-button>
                                            </div>
                                        </el-form-item>
                                </el-form>
                                            <el-button style="display:inline-block;width:100px;height:35px;margin-left:32px;color:blue" slot="reference">绑定认证</el-button>
                                        </el-popover>
                                        </div> 
                                    </td>
                                    <td v-show="wxbd"  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.code" class="ng-binding ng-scope">
                                            已绑定
                                            <div @click="cancelwxBind" style="display:inline-block;width:100px;height:35px;margin-left:32px;color:blue">解除绑定</div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope ti-form-list">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">支付宝绑定 </td>
                                    <td v-show="zfbbd"  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.code" class="ng-binding ng-scope">
                                            已绑定
                                            <div @click="cancelzfbBind" style="display:inline-block;width:100px;height:35px;margin-left:32px;color:blue">解除绑定</div>
                                        </div> 
                                    </td>
                                    <td v-show="!zfbbd"  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.authTime" class="ng-binding ng-scope">
                                            未绑定
                                            <el-popover
    placement="right"
    title="绑定微信"
    width=""
    trigger="click"
    v-model="visibleChangezfb">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2bdzfb" status-icon :rules="rules2bdwx" ref="ruleForm2bdzfb">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="usemobilername">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm2bdzfb.mobile" autocomplete="off" placeholder="请输入手机号码" class="el-input__inner">
                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="msgCode">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2bdzfb.msgCode" autocomplete="off" placeholder="输入手机验证码" style="width:220px" class="el-input__inner verificationCode">
                                                    <el-button @click="getPhoneCode(ruleForm2bdzfb.mobile)" class="login-code" style="margin-left:25px">
                                                        获取手机验证码
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small">
                                            <div  @click="confirmzfbbd('ruleForm2bdzfb')" class="el-form-item__content" style="margin-left: 0px;">
                                                    <div style="margin:0 auto"  v-if="zfbScan" >
                                                        <a href="">点击此处</a>
                                                    </div>
                                                    <el-button class="login-code" style="margin-left:25px">
                                                        确认绑定
                                                    </el-button>
                                            </div>
                                        </el-form-item>
                                </el-form>
                                            <el-button style="display:inline-block;width:100px;height:35px;margin-left:32px;color:blue" slot="reference">绑定认证</el-button>
                                        </el-popover>
                                        </div> 
                                    </td>
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope ti-form-list">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">简介 </td>
                                    <td  style="vertical-align: top;"> 
                                        <div ng-bind="authInfo.authTime" class="ng-binding ng-scope">
                                            <el-input type="textarea" v-model="businessInf.intro" placeholder="请告诉我们您的喜好、专业知识或者其他你想展示的内容。（不低于150字）" style="width:520px;height:120px"></el-input>
                                        </div> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="dispalyFlex" style="width:500px;margin:20px auto">
                            <el-button style="background:#81d8d0;color:#fff" @click="cancelChanges">取消修改</el-button>
                            <el-button style="background:#81d8d0;color:#fff" @click="saveChangesInf">保存修改</el-button>
                        </div>
                                                
                                            </el-popover>
                                            -->
                                        </div>
                                        <div>
                                            <span>实名认证</span><i class="el-icon-user"></i>
                                            <!--
                                            <el-popover
    placement="right"
    title="实名认证"
    width="750" 
    height="750"
    trigger="click"
    v-model="visibleAuth">
            <div style="padding:20px">
                <el-form class="el-form login-form el-form--label-left" :model="ruleFormsfz" status-icon :rules="rulessfz" ref="ruleFormsfz">
                        <div class="ti-no-ng-animate ng-scope" style="font-size:30px;font-weight:bold;width:130px;height:55px;display:block">基本信息</div>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证正面" prop="sfzFront">
                                <div class="el-form-item__content" style="vertical-align: top;display:flex"> 
                                        <div>
                                            <img :src="ruleFormsfz.sfzFront" alt="" width="100px" height="100px">
                                            <input type="file" style="width: 100px;height: 100px;" @change="handlesfzFront"> 
                                        </div>
                                </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证反面" prop="sfzReverse">
                                <div class="el-form-item__content" style="vertical-align: top;display:flex"> 
                                    <div>
                                        <img :src="ruleFormsfz.sfzReverse" alt="" width="100px" height="100px">
                                        <input type="file" style="width: 100px;height: 100px;" @change="handlesfzSuccess"> 
                                    </div>
                                </div>
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="身份证号码" prop="idCard">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                    <el-input type="text" v-model="ruleFormsfz.idCard" style="width:520px;height:40px"></el-input>
                                </div> 
                            </div>
                        </el-form-item>
                        
                        <el-form-item class="el-form-item is-required el-form-item--small" label="出生年月日" prop="userdate">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div class="block">
                                    <el-date-picker
                                    v-model="ruleFormsfz.userdate"
                                    type="date"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                            </div>
                            
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="性别" prop="usersex">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <el-radio v-model="ruleFormsfz.usersex" label="1">男</el-radio>
                                <el-radio v-model="ruleFormsfz.usersex" label="2">女</el-radio>
                            </div>
                            
                        </el-form-item>
                        <el-form-item class="el-form-item is-required el-form-item--small" label="住址" prop="address">
                            <div class="el-form-item__content" style="margin-left: 0px;">
                                <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                    <el-input type="text" v-model="ruleFormsfz.address" style="width:520px;height:40px"></el-input>
                                </div> 
                            </div>
                            
                        </el-form-item>
                        
                </el-form>   
                        <div class="nextStepBtn dispalyFlex" style="width:500px;margin:20px auto">
                            <el-button style="margin-top: 12px;" @click="cancelcertific">取消认证</el-button>
                            <el-button style="margin-top: 12px;margin-left:30px;background-color:#81d8d0" @click="submitcertific('ruleFormsfz')">提交认证</el-button>
                        </div>
            </div>
                                                <i class="el-icon-user" slot="reference"></i>
                                            </el-popover>
                                            -->
                                        </div>
                                        <div>
                                            <span>保证金管理</span>
                                            <el-popover
    placement="right"
    title="保证金管理"
    width="450"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visibleMarginManage">
                                                <i class="el-icon-bank-card" slot="reference"></i>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dispalyFlex orderInfo" style="margin:30px 0">
                                <div>
                                    <div class="orderInfoTitle">账户余额</div>
                                    <div class="orderInfoCon orderInfoConOne">0元</div>
                                    <div class="orderInfoFoot orderInfoFootOne">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日收入</div>
                                            <div>0元</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">订单总数</div>
                                    <div class="orderInfoCon orderInfoConTwo">0元</div>
                                    <div class="orderInfoFoot orderInfoFootTwo">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>1157单</div>
                                            <div>1单</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">账户余额</div>
                                    <div class="orderInfoCon orderInfoConThree">22359元</div>
                                    <div class="orderInfoFoot orderInfoFootThree">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日订单总额</div>
                                            <div>20元</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="orderInfoTitle">商品总数</div>
                                    <div class="orderInfoCon orderInfoConFour">8个</div>
                                    <div class="orderInfoFoot orderInfoFootFour">
                                        <div class="dispalyFlex" style="padding:0 20px">
                                            <div>今日商品总数</div>
                                            <div>0个</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dispalyFlex" style="margin:70px 0">
                                <div>
                                    <EchartsOne ></EchartsOne>
                                </div>
                                <div>
                                    <EchartsTwo></EchartsTwo>
                                </div>
                            </div>
                        </div>
                        <router-view />
                    </el-main>
                </el-container>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
import imageavatarUrl from '../../assets/images/regist/商家信息/组 14(1).png'
import imageavatarUrl_anti from '../../assets/images/regist/商家信息/矩形 3.png'
// :src="details.collected?collection:collection_anti"
import EchartsOne from '@/components/Echarts/Echarts.vue'
import EchartsTwo from '@/components/Echarts/Echarts2.vue'
import Holstein from '@/components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
import UserHttp from '@/model/UserHttp'
export default {
    components: {
        EchartsOne,EchartsTwo,
        Holstein,Footer
    },
    data() {
        
        return {
            //个人信息修改
            // businessInf:{
                // headPhoto:this.loginInfo.headPhoto,
                // intro:this.loginInfo.intro,
                // name:this.loginInfo.name,
                // openId:this.loginInfo.openId,
                // zfbId:this.loginInfo.zfbId,
                // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
            // },
            username:JSON.parse(this.$cookie.get("loginInfo")).username,
            userId:JSON.parse(this.$cookie.get("loginInfo")).id,
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            iframeState:true,
            //保证金管理图标
            visibleMarginManage:false,
            //Aside
            isCollapse:true,
        }
    },
    mounted() {
        var userId = this.getUrlParam("userId")
        // console.log(userId)
        // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
        // console.log(loginInfo)
        if(JSON.parse(this.$cookie.get("loginInfo"))){
                this.user = JSON.parse(this.$cookie.get("loginInfo"));
                // console.log(this.user.id)
                this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                if(this.user){
                    // var userId =this.getUrlParam("userId")
                    // if(userId&&userId!="null"){
                        this.userId = this.user.id
                        this.$http.post('/api/snailUser/info',{
                                userId:this.user.id
                        }).then((res)=>{
                            var message = res.data.msg.message;
                            this.loginInfo=res.data.biz
                            if(message=="查询成功"){
                                this.loginInfo=res.data.biz;
                                console.log(this.loginInfo)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                // this.$message.success('成功完成微信扫码登陆')
                            }else{
                                // this.$message.error(message);
                                return
                            }
                        })
                }else{
                    console.log(userId)
                }
            }
        // return false
    },
    methods: {
        
        // showmyOrder(){
        //     // :href="item.link"
        //     // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
        //     this.iframeState = false;
        //     // this.$router.push(path)
        //     this.$router.push({name:'userOrder'})
        // },
        showserviceProduct(){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            this.iframeState = false;
            // this.$router.push(path)
            this.$router.push({name:'serviceProduct'})
        },
        showServiceCollect(){
            this.iframeState = false;
            this.$router.push({name:'serviceCollect'})
        },
        showServiceBrowse(){
            this.iframeState = false;
            this.$router.push({name:'serviceBrowse'})
        },
        showOrderList(){
            this.iframeState = false;
            this.$router.push({name:'orderList'})
        },
        showServiceEvaluate(){
            this.iframeState = false;
            this.$router.push({name:'serviceEvaluate'})
        },
        showDemandBid(){
            this.iframeState = false;
            this.$router.push({name:'demandBid'})
        },
        serverModInf(){
            this.iframeState = false;
            this.$router.push({name:'serverModInf'})
        },
        serverRealAuth(){
            this.iframeState = false;
            this.$router.push({name:'serverRealAuth'})
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
        text-align: center;
    }
    /*  */
    .orderInfo >div{
        width: 220px;
        height: 177px;
        border: 1px dashed #bababa;
    }
    .orderInfoTitle{
        color:#666666;
        font-size:18px;
        height: 66px;
        line-height: 66px;
    }
    .orderInfoCon{
        font-size: 40px;
        height: 65px;
        line-height: 48px;
    }
    .orderInfoFoot{
        height: 44px;
        line-height: 44px;
        color: #fff;
    }
    .orderInfoConOne{
        color: #A8CEE3;
    }
    .orderInfoConTwo{
        color: #FCDDAD;
        
    }
    .orderInfoConThree{
        color: #FD9D9E;
    }
    .orderInfoConFour{
        color: #C5B0E8;
    }
    .orderInfoFootOne{
        background-color: #A8CEE3;
    }
    .orderInfoFootTwo{
        background-color: #FCDDAD;
        
    }
    .orderInfoFootThree{
        background-color: #FD9D9E;
    }
    .orderInfoFootFour{
        background-color: #C5B0E8;
    }
    /*  */
    
</style>