<!-- detail，scan，biddingSerProvide，fundSituation， -->
<template>
    <div class="firstNav" style="background-color: #81d8d0;">
            <div class="navCenter center" style="display:flex;justify-content:space-between;align-items:center">
                    <router-link to="/"><img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt=""></router-link>
                    <!--<div class="navTitleContext">
                            <span class="capa">LOGO  </span>
                            <span>HELSTEIN</span>
                    </div> -->
                    <div class="firstNavR" style="">
                        <div class="businessCenter">
                            <el-dropdown class="businessCenter">
                                <div class="" style="margin: 0 auto;background:#FA8687;">
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
                                            <div @click="handleClickFind" class="concernBtn" style="">
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
                            <!--<img src="../../assets/images/pageIndex/搜索 (2).png" alt="">-->
                            <i class="el-icon-search"></i>
                        </div>
                        <div class="shortLine">
                            <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="">
                        </div>
                        <div class="loginImg">
                            <el-dropdown @click="handleClick" class="loginImg">
                                <div class="" style="">
                                    <!--<img src="../../assets/images/pageIndex/帮助.png" alt="">-->
                                    <i class="el-icon-warning-outline"></i>
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
                                    <!--<img src="../../assets/images/pageIndex/登录.png" alt="">
                                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
                                    <i class="el-icon-user"></i>
                                </div>
                                <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                        <div style="width:230px;height:300px">
                                            <div style="padding:20px 40px 0 40px">
                                                <div style="display:flex;justify-content:space-between;">
                                                    <div style="width:46px;height:46px"><img src="../../assets/img/top/组 2(2).png" alt=""></div>
                                                    <div>
                                                        <div style="color:#000000">{{this.$data.username}}</div>
                                                        <!--<div style="color:#333333">{{this.$store.state.username}}</div> -->
                                                        <div style="color:#333333">{{this.$data.loginInfo.phone}}</div>
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
                                                <div @click="handleLogout" style="padding-left:40px">登出</div>
                                            </div>
                                        </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            holstein:{
                type:String
            }
        },
        data() {
            return {
                username:JSON.parse(this.$cookie.get("loginInfo")).username,
                loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
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
                    desc: ''
                },
                /*  */
            }
        },
        methods: {
            handleClick(){
                console.log("handleClick")
            },
            handleClickFind(){
                this.$router.push({name:'fundSituation'})
            },
            handleLogout(){
                this.$confirm('你确定要退出登录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出登录成功!'
                    });
                    this.$http.delete('/api/logout').then(()=>{
                        // var userInfocookie = this.$cookie.get("loginInfo")
                        // console.log(userInfocookie)
                        // this.delCookie(userInfocookie)
                        window.onbeforeunload = function (e) {
                            var storage = window.localStorage;
                            storage.clear();
                        };
                        this.$router.push('/login')
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '您已取消！'
                    });          
                }); 
            }
        },
    }
</script>

<style scoped>
/*  */
    .firstNav{
        width: 100%;
        height: 55px;
        background-color: #81d8d0;
        box-shadow:0px -3px 5px 3px #606266 ;
    }
    .navCenter{
        width: 1280px;
        height: 55px;
        margin: 0 auto;
    }
    .logo{
        width: 260px;
        height: 550px;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
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
        align-items: center;
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
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
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
</style>