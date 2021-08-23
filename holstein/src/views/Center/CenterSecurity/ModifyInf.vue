<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">个人设置</el-breadcrumb-item>
            <el-breadcrumb-item>修改信息</el-breadcrumb-item>
        </el-breadcrumb>

        <div style="margin:50px 0px 0px 100px;height: 950px;">
                <table style="max-width: 100%; vertical-align: top;" class="autoCell-form ti-form ng-scope" ng-style="verticalAlign" id="tiForm01" vertical-align="textForm.fieldVerticalAlign" is-text-form="textForm.isTextForm" form-line-height="textForm.lineHeight">
                            <tbody class="ti-text-form">
                                <tr class="ti-no-ng-animate ng-scope" style="font-size:18px;font-weight:bold;width:130px;height:55px;display:block">基本信息</tr>
                                <tr class="ti-no-ng-animate ng-scope" style="height: 180px;">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">头像</td>
                                    <td  style="vertical-align: top;display:flex">
                                        <div data-v-1c9bbdc3="" data-v-a72aa574="" prop="sfzFront">
                                                        <el-upload
                                                action="http://api.woniuskill.com/api/uploadImage"
                                                list-type="picture-card"
                                                accept=".jpg,.jpeg,.png"
                                                :class="{ hide: hideUpload }"
                                                :on-preview="handleContImgPreview"
                                                :on-remove="handleContImgRemove"
                                                :before-upload="beforeUploadImage"
                                                :limit="1"
                                                :on-exceed="exceedTips"
                                                :http-request="uploadImage"
                                                :file-list="imageList"
                                                :on-change="aab"
                                            >
                                                <!-- <i class="el-icon-plus"></i> -->
                                                <img
                                                    v-if="
                                                        businessInf.headPhoto === '' ||
                                                        businessInf.headPhoto === null
                                                    "
                                                    src="@/assets/images/regist/商家信息/组 14(1).png"
                                                    width="150px"
                                                    height="150px"
                                                />
                                                <img
                                                    v-else
                                                    :src="getImgUrl(businessInf.headPhoto)"
                                                    width="150px"
                                                    height="150px"
                                                />
                                            </el-upload>
                                            <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
                                                <img width="300px" height="300px" :src="dialogContImgUrl" />
                                            </el-dialog>
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
                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">密码</td>
                                    <td  style="vertical-align: top;">
                                        <el-popover
    placement="right"
    title="修改密码"
    width="550"
    trigger="click"
    v-model="visiblepwd">
        <el-form class="el-form login-form el-form--label-left" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1">
            <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                        <el-input type="text" v-model="ruleForm1.username" autocomplete="off" :placeholder="this.$data.username|telHide" :disabled="true" style="width:280px" />
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="旧密码" prop="oldPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                      <el-input type="password" show-password autocomplete="off" v-model="ruleForm1.oldPass" placeholder="请输入旧密码" style="display:inline-block"></el-input>
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="新密码" prop="newPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                      <el-input type="password" show-password autocomplete="off" v-model="ruleForm1.newPass" placeholder="请输入新密码" style="display:inline-block"></el-input>
                    </div>
                </div>
            </el-form-item>
            <el-form-item class="el-form-item is-required el-form-item--small" label="确认新密码" prop="confirmPass">
                <div class="el-form-item__content" style="margin-left: 0px;">
                    <div class="el-input el-input--small el-input--prefix">
                      <el-input type="password" show-password autocomplete="off" v-model="ruleForm1.confirmPass" placeholder="请再次输入新密码" style="display:inline-block"></el-input>
                    </div>
                </div>
            </el-form-item>
            <div class="pwdRule">
                <p>密码规则：</p>
                <p>1、8-16个字符，包括大小写字母，数字，特殊字符三种以上</p>
                <p>2、密码不能包含用户名</p>
                <p>3、不要使用连续或重复的数字/字符作为密码</p>
            </div>
            <el-form-item class="el-form-item el-form-item--small" style="width: 50%;margin-top:40px;">
                <div @click="submitForm('ruleForm1')" class="el-form-item__content" style="margin-left: 0px;">
                    <button type="button" class="el-button el-button--primary el-button--medium" style="">确认修改</button>
                </div>
            </el-form-item>
        </el-form>
                                            <el-button ng-bind="authInfo.userType" class="ng-binding ng-scope" style="color:blue;border:none" slot="reference">修改密码</el-button>
                                        </el-popover>
                                    </td>

                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">昵称 </td>
                                    <td  style="vertical-align: top;">
                                        <div ng-bind="authInfo.certType" class="ng-binding ng-scope">
                                            <el-input type="text" v-model="businessInf.name" style="width:520px;height:40px"></el-input>
                                        </div>
                                    </td>

                                </tr>
                                <tr class="ti-no-ng-animate ng-scope">
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">手机号码</td>
                                    <td  style="vertical-align: top;">
                                        <div ng-bind="authInfo.name" class="authInfoName ng-binding ng-scope">
                                            {{this.$data.username|telHide}}
                                            <el-popover
    placement="right"
    title="修改手机号码"
    width="550"
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
                                        <el-input type="text" v-model="ruleForm2old.mobile" autocomplete="off" :placeholder="this.$data.username|telHide" :disabled="true" style="width:280px" />
                                    </div>
                                </div>
                            </el-form-item>
                            <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <div class="el-input el-input--small el-input--prefix">
                                        <input type="text" autocomplete="off" v-model="ruleForm2old.msgCode" placeholder="请输入验证码" class="el-input__inner verificationCode" style="width:280px">
                                        <el-button  v-if="getPhoneCodenum ==='获取手机验证码'" @click="getPhoneCode(ruleForm2old.mobile)">{{getPhoneCodenum}}</el-button>
                                        <el-button v-else>{{getPhoneCodenum}}S</el-button>
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
                                        <el-button v-if="getPhoneCodenum ==='获取手机验证码'"  @click="getPhoneCode(ruleForm2new.username)">{{getPhoneCodenum}}</el-button>
                                        <el-button v-else>{{getPhoneCodenum}}S</el-button>
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

                                                <el-input type="text" v-model="ruleForm2bdwx.mobile" prefix-icon="el-icon-user" autocomplete="off" :placeholder="this.$data.username|telHide" :disabled="true" />
<!--                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>-->
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="msgCode">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2bdwx.msgCode" autocomplete="off" placeholder="输入手机验证码" style="width:220px" class="el-input__inner verificationCode">
                                                    <el-button v-if="getPhoneCodenum ==='获取手机验证码'" @click="getPhoneCode(ruleForm2bdwx.mobile)" class="login-code" style="margin-left:25px;height:32px;padding-top:8px;">
                                                        {{getPhoneCodenum}}
                                                    </el-button>
                                                    <el-button v-else class="login-code" style="margin-left:25px">
                                                        {{getPhoneCodenum}}S
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small">
                                            <div  @click="confirmwxbd('ruleForm2bdwx')" class="el-form-item__content" style="margin-left: 0px;">
                                                    <div style="margin:0 auto"  v-if="wechatScan" ></div>
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
    title="绑定支付宝"
    width=""
    trigger="click"
    v-model="visibleChangezfb">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2bdzfb" status-icon :rules="rules2bdwx" ref="ruleForm2bdzfb">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="usemobilername">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <el-input type="text" v-model="ruleForm2bdzfb.mobile" prefix-icon="el-icon-user" autocomplete="off" :placeholder="this.$data.username|telHide" :disabled="true"  />
<!--                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>-->
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="msgCode">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2bdzfb.msgCode" autocomplete="off" placeholder="输入手机验证码" style="width:220px" class="el-input__inner verificationCode">
                                                    <el-button v-if="getPhoneCodenum ==='获取手机验证码'"  @click="getPhoneCode(ruleForm2bdzfb.mobile)" class="login-code" style="margin-left:25px;height:32px;padding-top:8px;">
                                                        {{getPhoneCodenum}}
                                                    </el-button>
                                                    <el-button v-else class="login-code" style="margin-left:25px">
                                                        {{getPhoneCodenum}}S
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small">
                                            <div  @click="confirmzfbbd('ruleForm2bdzfb')" class="el-form-item__content" style="margin-left: 0px;">
                                                    <div style="margin:0 auto"  v-if="zfbScan" >
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
                                    <td class="ti-no-ng-animate ti-form-label ti-text-form-label ng-scope" style="vertical-align: top;">邮箱绑定 </td>
                                    <td v-show="yxbd"  style="vertical-align: top;">
                                        <div ng-bind="authInfo.code" class="ng-binding ng-scope">
                                            已绑定
                                            <div style="display:inline-block;width:100px;height:35px;margin-left:32px;color:blue">更换绑定</div>
                                        </div>
                                    </td>
                                    <td v-show="!yxbd"  style="vertical-align: top;">
                                        <div ng-bind="authInfo.authTime" class="ng-binding ng-scope">
                                            未绑定
                                            <el-popover
    placement="right"
    title="绑定邮箱"
    width=""
    trigger="click"
    v-model="visibleChangeyx">
                                <el-form class="el-form login-form el-form--label-left" :model="ruleForm2bdyx" status-icon :rules="rules2bdyx" ref="ruleForm2bdyx">
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="手机" prop="username">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <el-input type="text" v-model="ruleForm2bdyx.username" prefix-icon="el-icon-user" autocomplete="off" :placeholder="this.$data.username|telHide" :disabled="true"  />
<!--                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>-->
                                            </div>
                                        </div>
                                    </el-form-item>
                                    <el-form-item class="el-form-item is-required el-form-item--small" label="邮箱" prop="fromEmail">
                                        <div class="el-form-item__content" style="margin-left: 0px;">
                                            <div class="el-input el-input--small el-input--prefix">
                                                <input type="text" v-model="ruleForm2bdyx.fromEmail" prefix-icon="el-icon-user" autocomplete="off" placeholder="请输入用户邮箱" class="el-input__inner">
<!--                                                    <span class="el-input__prefix">
                                                        <img class="el-input__icon input-icon svg-icon" src="../../../assets/images/login/multiLogin/用户.png" alt="">
                                                    </span>-->
                                            </div>
                                        </div>
                                    </el-form-item>
                                        <el-form-item class="el-form-item is-required el-form-item--small" label="验证码" prop="code">
                                            <div class="el-form-item__content" style="margin-left: 0px;">
                                                <div class="el-input el-input--small el-input--prefix">
                                                    <input type="text" v-model="ruleForm2bdyx.code" autocomplete="off" placeholder="输入邮箱验证码" style="width:220px" class="el-input__inner verificationCode">
                                                    <el-button @click="mailbd(ruleForm2bdyx.fromEmail)" class="login-code" style="margin-left:25px;height:32px;padding-top:8px;">
                                                        获取邮箱验证码
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item class="el-form-item el-form-item--small">
                                            <div  @click="getyxbd('ruleForm2bdyx')" class="el-form-item__content" style="margin-left: 0px;">
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
                                            <el-input type="textarea" v-model="businessInf.intro" placeholder="请告诉我们您的喜好、专业知识或者其他你想展示的内容。（不低于150字）"></el-input>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

        </div>
        <div class="dispalyFlex" style="width:500px;margin:0px 0px 0px 150px">
                            <el-button style="background:#81d8d0;color:#fff" @click="cancelChanges">取消修改</el-button>
                            <el-button style="background:#81d8d0;color:#fff" @click="saveChangesInf">保存修改</el-button>
                        </div>
    </div>
</template>

<script>
// import {getToken} from '../../../utils/'
import UserHttp from '@/model/UserHttp'

    export default {
        data() {
            var validatePhone = (rule,value,callback)=>{
                const reg = /^[1][3,4,5,7,8][0-9]{9}$/
                if (value === '' || value === undefined || value == null) {
                    callback()
                } else {
                    if ((!reg.test(value)) && value !== '') {
                    callback(new Error('请输入正确的电话号码'))
                    } else {
                    callback()
                    }
                }
            }
            //修改密码
            var validatePass = (rule,value,callback)=>{
                if(value===""){
                    callback(new Error("密码不能为空"))
                }else {
                    //数字大小写字母特殊字符组成，长度不能小于6
                    // var reg =  /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[0-9]).{8,16}$/
                    var reg =  /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/
                        if(!reg.test(value)){
                            callback(new Error("密码必须包含数字,大小写字母,特殊字符,至少8位,最多16位"))
                        }else{
                            callback()
                        }

                    // if (this.ruleForm1.confirmPass !== "") {
                    //     this.$refs.ruleForm1.validateField("confirmPass");
                    // }
                    //     callback();
                }
            }
            var validEmail = (rule,value,callback)=>{
                const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (value === '' || value === undefined || value == null) {
                    callback()
                } else {
                    if ((!reg.test(value)) && value !== '') {
                    callback(new Error('请输入正确的邮箱号码'))
                    } else {
                    callback()
                    }
                }
            }
            var validateCheckPass= (rule, value, callback) => {
                if (value === "") {
                        callback(new Error("请再次输入密码"));
                    } else if (value !== this.ruleForm1.newPass) {
                        callback(new Error("两次输入密码不一致!"));
                    } else {
                        callback();
                }
            }
            var validateCode = (rule,value,callback)=>{
                if(value === ""){
                    callback(new Error("验证码不能为空"))
                } else if (value.length<4) {
                    callback(new Error("验证码长度不能小于4位!"));
                } else {
                    callback();
                }
            }
            return {
              getPhoneCodenum:"获取手机验证码",
            count: 60,
                //上传图片
                hideUpload: false,
				imageList:[],
				dialogContImgVisible: false,
				dialogContImgUrl: '',

                //
                username:JSON.parse(this.$cookie.get("loginInfo")).username,
                userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
                businessInf:JSON.parse(this.$cookie.get("loginInfo")),
                disabled: false,
                //
                ruleForm1: {
                    username: "",
                    newPass: "",
                    confirmPass:""
                },
                //表单验证规则
                rules1: {
                    username: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                        //   { min: 11, message: "用户名最少是5个字符", trigger: "blur" },
                    ],
                    newPass:[
                        {required:true,validator: validatePass,trigger: "blur"}
                    ],
                    confirmPass:[
                        {required:true,validator: validateCheckPass,trigger: "blur"}
                    ]
                },
                ruleForm2old: {
                    mobile: '',
                    msgCode:"",
                    msgType:4
                },
                rules2old: {
                    mobile: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                    ],
                    msgCode:[
                        {required:true,validator: validateCode,trigger: "blur"}
                    ],
                },
                ruleForm2new: {
                    username: "",
                    code:"",
                    msgType:4
                },
                rules2new: {
                    username: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                    ],
                    code:[
                        {required:true,validator: validateCode,trigger: "blur"}
                    ],
                },
                ruleForm2bdwx: {
                    mobile: "",
                    msgCode:"",
                    msgType:6
                },
                rules2bdwx: {
                    mobile: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                    ],
                    msgCode:[
                        {required:true,validator: validateCode,trigger: "blur"}
                    ],
                },
                ruleForm2bdzfb: {
                    mobile: "",
                    msgCode:"",
                    msgType:6
                },
                rules2bdzfb: {
                    mobile: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                    ],
                    msgCode:[
                        {required:true,validator: validateCode,trigger: "blur"}
                    ],
                },
                ruleForm2bdyx: {
                    username: "",
                    fromEmail:"",
                    code:""
                },
                rules2bdyx: {
                    username: [
                            { required: true, message: "请输入用户名",validator:validatePhone, trigger: "blur" },
                    ],
                    fromEmail: [
                            { required: true, message: "请输入邮箱",validator:validEmail, trigger: "blur" },
                    ],
                    code:[
                        {required:true,message: "请输入4位邮箱验证码",validator: validateCode,trigger: "blur"}
                    ],
                },
                //修改手机号
                visibleChangeMobile:false,
                //旧密码
                visiblepwd:false,
                //微信绑定
                visibleChangewx:false,//绑定认证
                wxbd:Boolean(JSON.parse(this.$cookie.get("loginInfo")).openId),
                wechatScan:"",
                //支付宝绑定
                visibleChangezfb:false,//绑定认证
                zfbbd:Boolean(JSON.parse(this.$cookie.get("loginInfo")).zfbId),
                zfbScan:"",
                //邮箱绑定
                visibleChangeyx:false,//绑定认证
                yxbd:Boolean(JSON.parse(this.$cookie.get("loginInfo")).email),
                /*  */
                fileList:[],
                active: 0,
                step1:true,
                step2:false,
                step3:false,
            }
        },
        mounted() {
          this.ruleForm2old.mobile = JSON.parse(this.$cookie.get("loginInfo")).username
          this.ruleForm1.username = JSON.parse(this.$cookie.get("loginInfo")).username
          this.ruleForm2bdzfb.mobile = JSON.parse(this.$cookie.get("loginInfo")).username
          this.ruleForm2bdwx.mobile = JSON.parse(this.$cookie.get("loginInfo")).username
          this.ruleForm2bdyx.username = JSON.parse(this.$cookie.get("loginInfo")).username
            // var userId = this.getUrlParam("userId")
            // console.log(userId)
            // var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
            // console.log(loginInfo)
            // return false
        },
        methods: {
            /* 验证手机号发送短信 */
            async msgCodeParamLogin(username,code){
                await UserHttp.msgCodeLogin(username,code);
            },
            async submitForm(formName) {
                // console.log(formName)
                this.$refs[formName].validate((valid) => {
                    // console.log(valid)//true
                    if(valid){
                        // console.log(this.ruleForm1)
                        // var {username,newPass,confirmPass} = this.ruleForm1;
                        var {username,oldPass,newPass,confirmPass} = this.ruleForm1;
                        console.log(this.ruleForm1)
                        // this.$http.post('/api/user/center/updateUserInfo',{username,oldPass,newPass,confirmPass}).then((res)=>{
                        this.$http.post('/api/snailUser/updatePass',{username,oldPass,newPass,confirmPass}).then((res)=>{
                            console.log(res.data.biz)
                            var message = res.data.msg.message;
                            // console.log(message)
                            if(message=="成功"){
                                this.$store.commit('setUserName',this.ruleForm1.username)
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$message.success('修改密码成功')
                                this.$router.push('/');
                            }else{
                                this.$message.error(message);
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            //修改手机号获取验证码
            async getPhoneCode(mobile,msgType){
              if(mobile =='' || mobile == null ||mobile ==undefined){
                this,$message.error("请输入正确的手机号")
                return false
              }
                await UserHttp.msgCodeLogin(mobile,msgType);
                this.getPhoneCodenum = this.count;
                this.Count();

                // console.log(res.data.msg.message)//发送成功
            },
            Count(){
                var num = this.getPhoneCodenum;
                this.timer = setTimeout(()=>{
                    num--;
                    if(num>0){
                        this.getPhoneCodenum = num
                    }
                    if(num==0){
                        this.getPhoneCodenum = "获取手机验证码"
                    }
                    this.Count()
                },1000)
            },
            //微信扫码确认绑定确认
            async confirmwxbd(formName) {
                // console.log(formName)
                this.$refs[formName].validate((valid) => {
                    // console.log(valid)//true
                    if(valid){
                        var {mobile,msgCode} = this.ruleForm2bdwx;
                        // console.log(this.ruleForm2bdwx)
                        this.$http.post('/api/weixin/bind',{mobile,msgCode}).then((res)=>{
                            var message = res.data.msg.message;
                            var wechatScan = res.data.biz
                            if(message=="成功"){
                                this.$store.commit('setUserName',this.ruleForm2bdwx.mobile)
                                this.$message.success('请扫描二维码完成绑定')
                                // this.$router.push('/');
                                window.location.href = wechatScan
                                this.$data.wechatScan = wechatScan
                            }else{
                                this.$message.error('手机号码或验证码错误');
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            //点击支付宝扫码绑定
            async confirmzfbbd(formName) {
                // console.log(formName)
                this.$refs[formName].validate((valid) => {
                    // console.log(valid)//true
                    if(valid){
                        var {mobile,msgCode} = this.ruleForm2bdzfb;
                        // console.log(this.ruleForm2bdwx)
                        this.$http.post('/api/zfb/bind',{mobile,msgCode}).then((res)=>{
                            var message = res.data.msg.message;
                            var zfbScan = res.data.biz
                            if(message=="成功"){
                                // this.$store.commit('setUserName',this.ruleForm2bdzfb.mobile)
                                this.$message.success('请扫描下方二维码完成绑定')
                                window.location.href = zfbScan
                                // this.$router.push('/');
                                // this.$data.zfbScan = zfbScan
                            }else{
                                this.$message.error('手机号码或验证码错误');
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            /* 解除绑定cancelBind */
            cancelwxBind(){
                this.$http.post('/api/weixin/unbind',{userId:this.userId}).then((res)=>{
                    var message = res.data.msg.message;
                    if(message=="成功"){
                        this.$message.success('成功解绑')
                        this.$data.wxbd = !this.$data.wxbd;
                    }
                })
            },
            cancelzfbBind(){
                this.$http.post('/api/zfb/unbind',{userId:this.userId}).then((res)=>{
                    console.log(res.data.biz)
                    var message = res.data.msg.message;
                    console.log(message)
                    if(message=="成功"){
                        this.$message.success('成功解绑')
                        this.$data.zfbbd = !this.$data.zfbbd
                    }
                })
            },
            //邮箱绑定获取验证码
            async mailbd(fromEmail){
                // console.log(fromEmail)
                if(fromEmail ==null || fromEmail == undefined || fromEmail == '' ){
                  this.$message.error('请先输入邮箱')
                  return false
                }
                var res = await UserHttp.mailbd(fromEmail)
                var message = res.data.msg.message;
                // console.log(message)
                if(message=="成功"){
                    this.$message.success('成功发送验证码至邮箱')
                }
                // console.log(res.data.msg.message)//发送成功
            },
            async getyxbd(formName){
                // console.log(formName)
                this.$refs[formName].validate((valid) => {
                    // console.log(valid)//true
                    if(valid){
                        // var {username,fromEmail,code} = this.ruleForm2bdyx
                        // console.log(this.ruleForm2bdyx)
                        this.$http.post('api/boundEmail',{
                            username:this.ruleForm2bdyx.username,
                            fromEmail:this.ruleForm2bdyx.fromEmail,
                            code:this.ruleForm2bdyx.code,
                        }).then(res=>{
                            // console.log(res)
                            var message = res.data.msg.message;
                            console.log(message)
                            if(message=="成功"){
                                this.$message.success('成功绑定邮箱')
                                this.visibleChangeyx = false
                                this.yxbd = true
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
                // console.log(res.data.msg.message)//发送成功
            },
            getImgUrl(productImgUrl){
                return this.getBaseImgUrl(productImgUrl)
            },
        //上一步
        back() {
            console.log(this.active)
            --this.active;
            console.log(this.active)
            if(this.active ==0){
                this.step1 =true;
                this.step2 =false;
                this.step3 =false;
            }else if(this.active ==1){
                this.step1 =false;
                this.step2 =true;
                this.step3 =false;
            }else if(this.active ==2){
                this.step1 =false;
                this.step2 =false;
                this.step3 =true;
            }else{
                this.visibleChangeMobile = false
            }
        },
        //修改手机号下一步
        async next(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        if(this.active ==0){
                            this.step1 =true;
                            this.step2 =false;
                            this.step3 =false;
                            this.$refs[formName].validate((valid) => {
                                if(valid){
                                    var {mobile,msgCode} = this.ruleForm2old;
                                // console.log(this.ruleForm2old)
                                    this.msgCodeParamLogin(this.ruleForm2old.mobile,this.ruleForm2old.msgCode);
                                    this.$http.post('/api/msgCode/verify',{mobile,msgCode}).then((res)=>{
                                        var message = res.data.msg.message;
                                        if(message=="成功"){
                                            this.$message.success('成功验证手机号')
                                            this.active++;
                                            this.step1 =false;
                                            this.step2 =true;
                                            this.step3 =false;
                                        }else{
                                            this.$message.error(message);
                                            return false
                                        }
                                    })
                                }else{
                                    this.$message.error('请完成验证旧手机号')
                                    return false;
                                }
                            })
                        }
                        if( this.active == 1){
                            //第二步
                            this.$refs[formName].validate((valid) => {
                                if(valid){
                                    var {username,code} = this.ruleForm2new;
                                    // console.log(this.ruleForm2new)
                                // await UserHttp.msgCodeLogin(username,code);
                                    this.msgCodeParamLogin(this.ruleForm2new.username,this.ruleForm2new.code);
                                    this.active++;
                                    this.$message.error('请完成验证新手机号')
                                }else{
                                    console.log('error submit!!');
                                    return false;
                                }
                            })
                        }
                        else if(this.active ==2){
                            //第二步
                            var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                            // console.log(userInfo)
                            // this.userId = userInfo.id
                            // console.log(userId)
                            var {username,code,userId} = this.ruleForm2new;
                            console.log(this.ruleForm2new)
                            // this.$http.post('/api/updateMobile',{username,userId:userInfo.id,code}).then((res)=>{
                            this.$http.post('/api/updateMobile',{username,userId,code}).then((res)=>{
                                var message = res.data.msg.message;
                                // console.log(res)
                                if(message=="成功"){
                                    this.step1 =false;
                                    this.step2 =false;
                                    this.step3 =true;
                                this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                    this.$message.success('成功修改手机号')
                                    this.active++;
                                    // this.$router.push('/');
                                }else{
                                    this.$message.error(message);
                                    return
                                }
                            })
                        }
                        else if(this.active>=3){
                            //第二步
                            this.step1 =false;
                            this.step2 =false;
                            this.step3 =true;
                            this.visibleChangeMobile = false
                        }
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
                // ++this.active;
                // console.log(this.active)//1
                // if(this.active ==0){
                //     this.step1 =true;
                //     this.step2 =false;
                //     this.step3 =false;
                // }else if(this.active ==1){
                //     this.step1 =false;
                //     this.step2 =true;
                //     this.step3 =false;
                // }else if(this.active ==2){
                //     this.step1 =false;
                //     this.step2 =false;
                //     this.step3 =true;
                // }else{
                //     // this.visibleChangeMobile = false
                // }
        },
        /*  */
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        /* 上传头像 */
        handleSuccess(response, file, fileList) {
            this.$notify({
                title: '头像修改成功',
                type: 'success',
                duration: 2500
            })
            store.dispatch('GetInfo').then(() => {})
        },
        // 监听上传失败
        handleError(e, file, fileList) {
            const msg = JSON.parse(e.message)
            this.$notify({
                title: msg.message,
                type: 'error',
                duration: 2500
            })
        },

        //上传头像
        aab: function (file, fileList) {
            // var url = file.url;
            // this.businessInf.headPhoto = file.url.split(9000)[1];
            this.hideUpload = fileList.length >= 0;
        },
        //【图片删除事件】
        handleContImgRemove: function (file, fileList) {
            this.hideUpload = fileList.length >= 1;
            this.businessInf.headPhoto = null;
        },
        //【判断图片格式】
        beforeUploadImage(file) {
            if (['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的图片格式');
                return false;
            }
        },
        //上传头像
        uploadImage(params) {
            let form = new FormData();
            form.append('image', params.file);
            this.$http.post('api/uploadImage', form).then((res) => {
                this.businessInf.headPhoto = res.data[0].fileUrl;
            });
        },
        //控制图片张数
        exceedTips: function () {
            this.$message.error('最多只能上传1张图片');
        },
        //【内容图片预览事件】
        handleContImgPreview: function (file) {
            this.dialogContImgUrl = file.url;
            this.dialogContImgVisible = true;
        },
            /*  */
            cancelChanges(){
                console.log("cancelChanges")
            },
            saveChangesInf(){
                this.$http.post('/api/register',{
                    headPhoto:this.businessInf.headPhoto,
                    username:JSON.parse(this.$cookie.get("loginInfo")).username,
                    // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                    name:this.businessInf.name,
                    // openId:"",
                    // zfbId:"",
                    intro:this.businessInf.intro,
                }).then((res)=>{
                    var message = res.data.msg.message;
                    console.log(res.data)
                    if(message=="成功"){
                        // this.$store.commit('setUserName',this.ruleForm2new.username)
                    this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                        this.$message.success('成功修改基本信息')
                        // this.$router.push('/02skillExp');
                    }else{
                        this.$message.error(message);
                        return
                    }
                })
            },
        },
    }
</script>

<style scope>

.ti-no-ng-animate .ng-scope{
    padding: 20px 100px 20px 20px;
    height: 50px;
}


.el-textarea .el-textarea__inner{
    width: 300px;
    height: 200px;
}

</style>
