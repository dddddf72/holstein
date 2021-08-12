<template>
    <div class="home">
        <div class="firstNav">
            <div class="navCenter center" style="display:flex;justify-content:space-between;align-items:center">
                    <!-- <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""> -->
                    <div class="navTitleContext">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                    </div>
                    <div class="firstNavR" style="background:red">
                        <div class="businessCenter">
                            <el-dropdown @click="handleClick" class="businessCenter">
                                <div class="" style="margin: 0 auto;background:#FA8687;">
                                    发布需求
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="width:442px">
                                                <div style="color:#fff;height:50px;background:#81d8d0;font-weight:bold;font-size:18px;line-height:50px">
                                                    <div style="margin-left:40px">发布需求</div>
                                                </div>
                                                <div data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:20px 0 0 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求类目</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                                <el-select v-model="form.name"  is-required placeholder="请选择需求类目">
                                                                    <el-option
                                                                    v-for="item in options"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求预算</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                                <el-input
                                                                    placeholder="请输入内容"
                                                                    prefix-icon="el-icon-wallet"
                                                                    v-model="input2">
                                                                </el-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-a72aa574="" class="el-form-item is-required el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求描述</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div data-v-a72aa574="" class="el-input el-input--small">
                                                            <el-input type="textarea" placeholder="请对你的需求进行简单的描述，例如，我想做一个网站" v-model="form.desc"></el-input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-a72aa574="" class="el-form-item el-form-item--small" style="padding:5px 40px">
                                                    <label for="store_name" class="el-form-item__label" style="">需求附件</label>
                                                    <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <div style="color:#fff;width:100px;height:35px;background:#81d8d0;line-height:35px;text-align:center" class="">
                                                            上传附件
                                                        </div>
                                                    </div>
                                                </div>
                                            <!--<div class="checkBoxs">
                                                <div style="padding:0 40px">
                                                    <div style="display:flex;justify-content:space-between;align-items:center;">
                                                        
                                                    </div>
                                                </div>
                                            </div>-->
                                            <div style="color:#fff;width:140px;height:45px;background:#81d8d0;line-height:45px;text-align:center;margin-top:40px;margin-bottom:20px;margin-left:auto;margin-right:auto">
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
                        
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            <img src="../../assets/images/pageIndex/搜索 (2).png" alt="">
                        </div>
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            <el-dropdown @click="handleClick" class="loginImg">
                                <div class="" style="">
                                    <img src="../../assets/images/pageIndex/帮助.png" alt="">
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="">
                                            <div style="color:#81d8d0;font-weight:bold;padding:16px 0 0 40px">24//7支持</div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs">
                                                <div style="padding:0 40px">
                                                    <div>在线聊天</div>
                                                    <div>帮助中心</div>
                                                </div>
                                            </div>
                                        </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            <el-dropdown @click="handleClick" class="loginImg">
                                <div class="" style="">
                                    <i class="el-icon-bell"></i>
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                    <div style="width:426px">
                                        <div style="padding:30px 40px 0 40px;">
                                            <div>
                                                <div style="height:52px;display:flex;justify-content:space-between;align-items:center">
                                                    <div style="width:52px;height:52px"><img src="../../assets/img/top/组 2.png" alt=""></div>
                                                    <div >
                                                        <div>系统提醒——<span>1天前</span></div>
                                                        <div style="margin-top:10px">您有一封邮件未查收您有一封邮件未差...</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dotLine"></div>
                                                <div>
                                                    <div style="height:52px;display:flex;justify-content:space-between;align-items:center">
                                                        <div style="width:52px;height:52px"><img src="../../assets/img/top/组 2.png" alt=""></div>
                                                        <div >
                                                            <div>系统提醒——<span>1天前</span></div>
                                                            <div style="margin-top:10px">您有一封邮件未查收您有一封邮件未差...</div>
                                                        </div>
                                                    </div>
                                                    <div class="solidLine"></div>
                                                </div>
                                                
                                                <div>
                                                    <div style="height:52px;display:flex;justify-content:space-between;align-items:center">
                                                        <div style="width:52px;height:52px"><img src="../../assets/img/top/组 2.png" alt=""></div>
                                                        <div >
                                                            <div>系统提醒——<span>1天前</span></div>
                                                            <div style="margin-top:10px">您有一封邮件未查收您有一封邮件未差...</div>
                                                        </div>
                                                    </div>
                                                    <div class="solidLine"></div>
                                                </div>
                                        </div>
                                        <div style="background:#f0f0f0;height:50px;margin:10px 0">
                                                <div style="line-height:50px;color:#999999;text-align:center">查看所有通知
                                                    <i class="el-icon-arrow-right el-icon--right"></i>
                                                </div>
                                        </div>
                                    </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            <el-dropdown @click="handleClick" class="loginImg">
                                <div class="" style="">
                                    <i class="el-icon-message"></i>
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="width:426px;height:390px">
                                            <div style="text-align:center">
                                                <div class="topCenter">
                                                    <div style="width:114px;height:114px;margin:110px 156px 0 156px"><img src="../../assets/img/top/组 2(1).png" alt=""></div>
                                                    <div style="#999999;font-size:16px;margin-top:16px;margin-bottom:18px">没有聊天信息</div>
                                                    <div style="color: #666666;">这里会显示简单的聊天信息通知</div>
                                                </div>
                                            </div>
                                        </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            
                            <el-dropdown @click="handleClick" class="loginImg">
                                <div class="" style="">
                                    <img src="../../assets/images/pageIndex/登录.png" alt="">
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="width:230px;height:300px">
                                            <div style="padding:20px 40px 0 40px">
                                                <div style="display:flex;justify-content:space-between;">
                                                    <div style="width:46px;height:46px"><img src="../../assets/img/top/组 2(2).png" alt=""></div>
                                                    <div>
                                                        <div style="color:#000000">anne9008</div>
                                                        <div style="color:#333333">13133332222</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dotLine"></div>
                                            <div class="checkBoxs">
                                                <div style="padding-left:40px">
                                                    <div>我的需求</div>
                                                    <div>我的订单</div>
                                                    <div>我的收藏</div>
                                                </div>
                                            </div>
                                            <div class="dotLine"></div>
                                            <div style="">
                                                <div style="padding-left:40px">登出</div>
                                            </div>
                                        </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
            </div>
        </div>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <!-- <el-steps :active="active" align-center process-status="process" finish-status="success">
                    <el-step title="基本信息填写" ></el-step>
                    <el-step title="售卖信息填写" ></el-step>
                    <el-step title="常见问题与需求" ></el-step>
                    <el-step title="完成注册" ></el-step>
                </el-steps> -->
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">1</i>
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-process">基本信息填写</div>
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">售卖信息填写</div>
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">常见问题与需求</div>
                            
                        </div>
                    </div>
                    
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; max-width: 20%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">完成注册</div>
                            
                        </div>
                    </div>
    </div>
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/基本信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">基本信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">2</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">售卖信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">常见问题与需求</div>
                            
                        </div>
                    </div>
                    
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; max-width: 20%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">完成注册</div>
                            
                        </div>
                    </div>
    </div>
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/基本信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">基本信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">售卖信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">3</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">常见问题与需求</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; max-width: 20%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">完成注册</div>
                            
                        </div>
                    </div>
    </div>
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/基本信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">基本信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">售卖信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">常见问题与需求</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 20%; max-width: 20%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">完成注册</div>
                            
                        </div>
                    </div>
    </div>
                <div class="stepsContent">
                    <div class="stepsTitle">实名认证</div>
                </div>

                
                <div class="nextStepBtn">
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </div>
            </div>
        </div>
        
        <div class="logoFooter">
            <div class="logo">
                <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt="">
            </div>
        </div>
        <div class="footer">
            <div class="footer1">
                <div class="footer1_left">
                    <div class="footer1_xun">
                        <p><span>帮助与支持</span></p>
                    </div>
                    <div class="footer1_xun">
                        <p><span>类目</span></p>
                        <div class="coll_body">
                                <a target="_blank" href="https://www.yuanian.com/gz/hdfm/" data-cl-id="3979487862">游戏活动</a>
                                <a target="_blank" href="https://www.yuanian.com/xwdt/" data-cl-id="1414483911">音乐和音频</a>
                                <a target="_blank" href="https://www.yuanian.com/gz/algs/jtal/" data-cl-id="709020088">文档编辑和设计</a>
                                <a href="https://www.yuanian.com/gz/yngd/ysgl/" data-cl-id="3543342219">品牌设计</a>
                                <a href="https://www.yuanian.com/gz/bps/" data-cl-id="3269656700">科技服务</a>
                                <a href="https://www.yuanian.com/jpin/jinj/data.html" data-cl-id="1314077261">工商财税</a>
                                
                                
                            </div>
                    </div>
                    <div class="footer1_xun">
                        <p><span>关于</span></p>
                        <div class="coll_body">
                            <a href="/yjyjy/sjkw/jianjie1/" class="yjy_a" data-cl-id="314135581">关于我们</a>
                            <a href="/yjyjy/ketiyanjiu/jianjie/873.html" class="yjy_a" data-cl-id="425956241">合作伙伴</a>
                            <a href=" /yjyjy/sdpx.html" class="yjy_a" data-cl-id="2753167703">新闻</a>
                            <a href=" /yjyjy/sdpx.html" class="yjy_a" data-cl-id="2753167703">安全</a>
                            <a href=" /yjyjy/sdpx.html" class="yjy_a" data-cl-id="2753167703">如何运作</a>
                            <a href="/zncwyj/xzdc.html" class="yjy_a" data-cl-id="819975396">投资者</a>
                            
                            
                        </div>
                    </div>
                    <div class="footer1_xun">
                        <p><span>条款</span></p>
                                                <div class="coll_body">
                                <a href="https://www.yuanian.com/jjfa/zyfa/glkj/jianjie/775.html" data-cl-id="3677498327">隐私政策</a>
                                <a href="https://www.yuanian.com/jjfa/zyfa/ysgl/jianjie/776.html" data-cl-id="3312753667">条款和条件</a>
                                <a href="https://www.yuanian.com/glkj/jycp.html" data-cl-id="876889514">版权政策</a>
                                <a href="https://www.yuanian.com/glkj/glbg.html" data-cl-id="600398964">行为准则</a>
                                <a href="https://www.yuanian.com/jjfa/zyfa/ynfk/jianjie/850.html" data-cl-id="1158550858">费用和政策</a>
                            </div>
                    </div>
                </div>
                
                <div class="footrt1_right">
                        <div class="footer1_xun2">
                            <div class="footer1_xun2_erweima"><img src="https://www.yuanian.com/static/images/01.jpg"></div>
                            <div class="footer1_xun2_title">官方微信 </div>
                            <div class="clear"></div>
                        </div>
                        <div class="footer1_xun2">
                                        <div class="footer1_xun2_erweima"><img src="https://www.yuanian.com/static/images/fwhewm.jpg"></div>
                                        <div class="footer1_xun2_title">服务号 </div>
                                        <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="footer2">
                    <div class="f_gl">
                    <a href="https://www.yuanian.com/" target="_blank" rel="nofollow" data-cl-id="1743566555">Freelancer @ is a registered Trademark of FreelancerTechnology Pty Limited (ACN 141959 042)</a> 
                    </div>
                    <div>
                        <span><a href="https://www.yuanian.com/gyyn/danye/88.html" target="_blank" data-cl-id="2720347703">copyright c 2021 FreelancerTechnology Pty Limited (ACN 141959 042)</a></span>
                        <!-- <span style="width:300px;margin:0 auto;">
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802027263" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;" data-cl-id="106817452">
                                    <img src="https://www.yuanian.com/skin/images/beian_icon.png" style="float:left;" https:="" www.yuanian.com="">
                                    <p style="float:left;height:20px;line-height:20px;margin: 3px 0px 0px 5px; color:#939393;font-size:12px;">京公网安备 11010802027263号</p>
                                </a>
                        </span> -->
                    </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            active:0,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        next(){
            this.$router.push({name:'02SalesInf'})
        },
        handleClick(){
            console.log(this)
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
    /*  */
    .firstNav{
        width: 100%;
        height: 95px;
        background-color: #fff;
        box-shadow:0px -3px 15px 3px #606266 ;
    }
    .navCenter{
        width: 1280px;
        height: 95px;
    }
    /*.logo{
        width: 260px;
        height: 100px;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    } */
    /*  */
    .navTitleContext{
        width: 260px;
        height: 104px;
        line-height: 100px;
        font-weight: bold;
        font-size: 24px;
    }

    .navTitleContext .capa{
        color: #97BFD5;
    }
    .navTitleContext .welTxt{
        margin-left: 30px;
    }
    .navTitleContext span{
        color: #333;
        margin-left: 10px;
        
    }
    .navTitleContext span:nth-child(2){
        color: #999999;
    }
    .firstNavR{
        display: flex;
        justify-content: space-between;
    }
    .firstNavR>div{
        margin: 0 14px;
    }
    .businessCenter{
        width: 90px;
        height: 35px;
        text-align: center;
        
        line-height: 35px;
        font-size: 14px;
    }
    .shortLine{
        width: 1px;
        height: 24px;
    }
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
    .loginImg img{
        width:22px;
        height:22px;
        color: #fff;
        line-height: 22px;
    }
    /*  */
    .merchantRegist{
        width: 100%;
        height: 770px;
    }
    .merchantRegistration{
        width: 1280px;
        height: 770px;
        margin: 0 auto;
    }
    .el-step__head.is-process {
        color: #303133 !important;
        border-color: #303133 !important;
    }
    .el-step__head.is-success,.el-step__title.is-success {
        color: #81d8d0 !important;
        border-color: #81d8d0 !important;
    }
    /*  */
    .logoFooter{
        background-color: #99bed8;
        height: 100px;
        margin-bottom: 30px;
    }
    .logoFooter .logo{
        width: 260px;
        height: 100px;
        display: block;
        text-align: center;
        line-height: 100px;
        margin: 0 auto;
    }
    .logoFooter .logo img{
        width: 260px;
        height: 21px;
    }
    .footer {
        width: 100%;
        max-width: 100%;
        background: #fff;
        overflow-x: hidden;
    }
    .footer1 {
        width: 96%;
        max-width: 1185px;
        margin: 0 auto;
        padding: 50px 0 30px 0;
    }
    .footer1 .footer1_left {
        float: left;
    }
    .footer1 .footer1_left .footer1_xun {
        width: 160px;
        float: left;
    }
    .footer1 .footer1_left .footer1_xun p {
        float: left;
        width: 100%;
        font-size: 14px;
        color: #373d41;
        line-height: 50px;
    }
    .footer1 .footer1_left .footer1_xun a {
        float: left;
        width: 100%;
        font-size: 12px;
        color: #6b727c;
        line-height: 28px;
        font-weight: 500;
    }
    /*  */
    .footer1 .footrt1_right {
        float: right;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima {
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima img{
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_title {
        font-size: 14px;
        line-height: 30px;
        width: 100%;
        text-align: center;
        color: #373d41;
    }
    .clear {
        clear: both;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer2 {
        width: 100%;
        text-align: center;
        overflow: hidden;
        font-size: 12px;
        color: #a5aec1;
        border-top: #ececee solid 1px;
        padding-top: 15px;
    }
    .footer2 a {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
        line-height: 34px;
    }
    .footer2 span {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
    }
</style>