<template>
    <div class="firstNav" style="background-color: #81d8d0;" >
        <div style="">
            <div
            class="navCenter center"
            style="display:flex;justify-content:space-between;align-items:center;"
        >
            <div style="display:flex">
                <div class="logo">
                    <div style="margin-top:8px">
                        <router-link to="/"
                            ><img
                                class="logoImg"
                                src="../../assets/images/pageIndex/LOGO holstern.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="nav-search fr" style="width: 296px;line-height:55px;">
                    <div style="margin-top:12px;margin-left: 33px;">
                        <div
                            class="search-form active"
                            style="position:relative;width:200px;height:32px;padding:5px 0 0 8px;border:2px solid #fff;"
                        >
                            <a href=""></a>
                            <div class="search-input" style="width:240px;line-height:21px;">
                                <input
                                    type="text"
                                    value=""
                                    placeholder="请输入搜索内容"
                                    style="width:100%;color:#FFF;border:none;outline:none;background:transparent;"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="firstNavR1"
                v-if="this.loginInfo == null"
                style="display:flex;cursor:pointer"
            >
                <!--<div class="businessCenter" @click="becomePracCenter">
                            商家中心
                        </div>-->
                <div style="margin-top: 5px;">
                    <router-link to="/login" style="color:#fff">登录</router-link
                    ><router-link to="/userRegist" style="margin-left:5px;color:#fff"
                        >注册</router-link
                    >
                </div>
            </div>
            <div class="firstNavR" style="" v-else>
                <div class="businessCenter" @click="becomePracCenter" style="cursor:pointer">
                    商家中心
                </div>

                <div class="shortLine">
                    <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="" />
                </div>
                <div class="loginImg">
                    <el-dropdown class="loginImg">
                        <div class="" style="cursor:pointer">
                            <i class="el-icon-warning-outline"></i>
                        </div>
                        <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                            <div style="cursor:pointer">
                                <div style="color:#81d8d0;font-weight:bold;padding:16px 0 0 40px">
                                    24//7支持
                                </div>
                                <div class="dotLine"></div>
                                <div class="checkBoxs">
                                    <div style="padding:0 40px">
                                        <div @click="jumpChat">在线聊天</div>
                                        <div>帮助中心</div>
                                    </div>
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="shortLine">
                    <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="" />
                </div>
                <div class="loginImg" style="position:relative;cursor:pointer">
                    <!--<div v-if="userType ==1">
                                <router-link to="MessageCenter">
                                    <el-badge class="item" :value="findNoRead" >
                                        <i class="el-icon-bell"  title="系统消息"></i>
                                    </el-badge>
                                </router-link>
                            </div>
                            <div v-if="userType ==2">
                                <router-link to="messageList">
                                    <el-badge class="item" :value="findNoRead" >
                                        <i class="el-icon-bell" title="系统消息"></i>
                                    </el-badge>
                                </router-link>
                            </div>-->
                    <el-popover placement="bottom" width="420px" v-model="visible" trigger="manual">
                        <section class="wrapper" >
                            <div class="scroll-wrapper">
                                <div class="drawer-empty" v-if="msg.length==0">
                                    <strong>No Notifications</strong>
                                    <p>
                                        ​Browse our amazing catalog of Gigs or offer your talent on
                                        Fiverr.
                                    </p>
                                </div>
                                
                                <div v-else v-for="(msg,index) in msg" :key="index" >
                    <eForm ref="form" @toQuery="msgAll" />
                                    <div class="dispalyFlex jumpMsgList" @click="jumpMsgList(msg)">
                                      <div>
                                        <img style="width:50px;height:50px;border-radius:50%" :src="getBaseImgUrl(msg.head_photo)" alt="">
                                      </div>
                                      <div>
                                        {{msg.username}}
                                      </div>
                                      <div>
                                          {{msg.create_time}}
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <el-badge slot="reference" class="item" :value="findNoRead">
                            <i
                                class="el-icon-bell item"
                                title="系统消息"
                                @click="visible = !visible"
                            ></i>
                        </el-badge>
                    </el-popover>
                </div>
                <div class="shortLine">
                    <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="" />
                </div>
                <div class="loginImg" style="cursor:pointer">
                    <el-dropdown @click="handleClick" class="loginImg" @command="handleCommand">
                        <el-badge :value="unreadCount" class="item">
                            <i class="el-icon-message" title="聊天记录"></i>
                        </el-badge>
                        <el-dropdown-menu slot="dropdown" v-if="unreadCount !== null">
                            <div v-for="(unread, index) in unreadList" :key="index">
                                <el-dropdown-item :command="unread.sender"
                                    >来自{{ unread.name }}的{{
                                        unread.unreadCount
                                    }}条未读消息</el-dropdown-item
                                >
                            </div>
                            <el-dropdown-item>
                                <div href="#" @click="jump(this)">查看更多</div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu slot="dropdown" v-if="unreadCount == null">
                            <el-dropdown-item>
                                <div href="#" @click="jump(this)">查看更多</div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="shortLine">
                    <img src="../../assets/images/goodsAdd/形状 1 拷贝 2.png" alt="" />
                </div>
                <div class="loginImg" style="cursor:pointer">
                    <el-dropdown @click="handleClick" class="loginImg">
                        <div class="" style="">
                            <!--<img src="../../assets/images/pageIndex/登录.png" alt="">
                                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
                            <i class="el-icon-user"></i>
                        </div>
                        <el-dropdown-menu class="dropdownMenuTop" slot="dropdown">
                            <div style="width:230px;height:300px">
                                <div style="padding:20px 40px 0 40px">
                                    <div style="display:flex;justify-content:space-between;">
                                        <div
                                            style="width:46px;height:46px;cursor:pointer;border-radius:50%"
                                            @click="touser"
                                        >
                                            <img
                                                v-if="
                                                    loginInfo.headPhoto == null ||
                                                        loginInfo.headPhoto == undefined ||
                                                        loginInfo.headPhoto == ''
                                                "
                                                style="width:45px;height:46px;border-radius:50%"
                                                src="@/assets/img/top/组 2(2).png"
                                                alt=""
                                            />
                                            <img
                                                v-else
                                                style="width:45px;height:46px;border-radius:50%"
                                                :src="getImgUrl(loginInfo.headPhoto)"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div style="color:#000000">{{ name }}</div>
                                            <div style="color:#333333">{{ username }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dotLine"></div>
                                <div class="checkBoxs">
                                    <div style="padding-left:40px;" class="color0">
                                        <div>
                                            <router-link to="/myOrder">我的订单</router-link>
                                        </div>
                                        <div>
                                            <router-link to="/MyFootprint">我的足迹</router-link>
                                        </div>
                                        <div>
                                            <router-link to="/MyCollect">我的收藏</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="dotLine"></div>
                                <div style="cursor:pointer">
                                    <div @click="handleLogout" style="padding-left:40px">登出</div>
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import GoodsHttp from '../../model/GoodsHttp';
import eForm from '../../components/chat/viewMsg.vue'
export default {
    inject: ['reload'],
    components:{
      eForm
    },
    props: {
        holstein: {
            type: String
        }
    },
    data() {
        // const isNavigationVisible: false
        return {
            findNoRead: '',
            username: '',
            name: '',
            loginInfo: null,
            user: '',
            userId: '',
            userType: '',
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
            unreadList: [],
            visible: false,
            unreadCount: '',
            msg:[]
            /*  */
        };
    },
    async mounted() {
        // if(this.getUrlParam("userId")){
        //     this.$http.post('/api/snailUser/info',{
        //             userId:this.getUrlParam("userId")
        //     }).then((res)=>{
        //         debugger
        //         var message = res.data.msg.message;
        //         this.loginInfo=res.data.biz
        //         if(message=="成功"){
        //             console.log(this.loginInfo)
        //             this.loginInfo=res.data.biz;
        //             this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
        //             console.log(JSON.parse(this.$cookie.get("loginInfo")))
        //             this.$router.push('/');
        //         }
        //     })
        // }
        if (this.$cookie && this.$cookie.get('loginInfo')) {
            this.userId = this.loginInfo.id;
            this.$http
                .post('/api/snailUser/info', {
                    userId: this.userId
                })
                .then((res) => {
                    var message = res.data.msg.message;
                    this.loginInfo = res.data.biz;
                    if (message == '查询成功') {
                        this.loginInfo = res.data.biz;
                        this.$cookie.set('loginInfo', JSON.stringify(res.data.biz));
                        // this.$message.success('成功完成微信扫码登陆')
                    }
                });

            this.loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
            this.username = this.loginInfo.username;
            this.name = this.loginInfo.name;
            this.userType = this.loginInfo.userType;
            this.msgAll()

            this.createWebSocket(this.userId);

            var findNoReadHttp = await GoodsHttp.findNoRead(this.userId);
            this.findNoRead = findNoReadHttp.data.biz;
            if (this.findNoRead == 0) {
                this.findNoRead = null;
            }
            this.$http
                .post('/api/Chat/Online/unreadList', { receiver: this.userId })
                .then((res) => {
                    this.unreadList = res.data.biz.unreadList;
                    this.unreadCount = res.data.biz.unreadCount;
                    if (this.unreadCount == 0) {
                        this.unreadCount = null;
                    }
                });
        }
    },
    created() {
        this.$nextTick(function() {
            window.οnlοad = function() {
                if (location.href.indexOf('?xyz=') < 0) {
                    location.href = location.href + '?xyz=' + Math.random();
                }
            };
        });
        this.createWeso();
    },
    methods: {
      msgAll(){
        this.$http.post(`api/Chat/Online/listChatRecord?receiver=${this.userId}`).then(res=>{
          this.msg = res.data.biz
        })
      },
      jumpMsgList(data){
                // data.userType = 2;
                const _this = this.$refs.form
                _this.form1 = data
                _this.dialog = true
      },
        jump(v) {
            var loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
            var userId = loginInfo.id;
            // var selected_provider = sco.selected_provider;
            var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=null`;
            // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
            window.open(wechatScan, '_blank');
        },
        jumpChat() {
            if (this.$cookie && JSON.parse(this.$cookie.get('loginInfo'))) {
                var loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
                var userId = loginInfo.id;
                // var receiver2 = this.detail.createUser;
                var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}`;
                // var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}&url=/detail?serviceId=${this.serviceId}&serviceName=${this.detail.serviceName}`;
                // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
                window.open(wechatScan, '_blank');
            } else {
                this.$message.error('请先登录');
                this, $router.push('/login');
            }
        },
        createWeso() {
            this.loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
            this.username = this.loginInfo.username;
            this.userId = this.loginInfo.id;
            //创建websoke
            let websocket = new WebSocket(
                'ws://api.woniuskill.com/webSocket?type=APP&userId=' + this.userId
            );
            // 连接成功时
            websocket.onopen = () => {
                // websocket.send('hello')
                console.log('连接了');
            };
            websocket.onmessage = (event) => {
                // 后端发送的消息在event.data中
                var obj = JSON.parse(event.data);
                console.log(obj.userId);
                if (obj.type == 'message') {
                    if ((obj.userId = this.userId)) {
                        // alert(obj.msg);
                        this.$notify.info({
                            title: '消息',
                            message: obj.msg
                        });
                    }
                } else if (obj.msg == '成功建立websocket连接!') {
                } else {
                    this.$notify.info({
                        title: '信息',
                        message: obj.senderName + ':' + obj.content
                    });
                    location.reload();
                }
            };
            websocket.onclose = function() {
                console.log('关闭了');
            };
            // 路由跳转时结束websocket链接
            this.$router.afterEach(function() {
                websocket.close();
            });
            // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常
            window.onbeforeunload = function() {
                websocket.close();
            };
        },
        handleCommand(command) {
            var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${this.userId}&receiver=${command}`;
            // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
            window.open(wechatScan, '_blank');
        },
        becomePracCenter() {
            // this.$router.push({name:"userOrder",params:{userId:16}})
            // this.$router.push('/userOrder?userId=16')
            if (this.$cookie && this.$cookie.get('loginInfo')) {
                var userInfo = JSON.parse(this.$cookie.get('loginInfo'));
                const userId = userInfo.id;
                if (userInfo.userType == 2) {
                    this.$router.push(`/userOrder?userId=${userId}`);
                } else {
                    this.$router.push('/01BusinessInf');
                }
            } else {
                this.$router.push('/login');
            }
            //未注册，非商家，普通用户,此时需要先注册成为自由从业者即商家
            // this.$router.push({name:"userRegist"})
            //已注册，非商家
            // this.$router.push({name:"01BusinessInf"})
            //已注册，已成为商家
        },
        touser() {
            // var res = JSON.parse(this.$cookie.get("loginInfo"))
            if (this.$cookie && this.$cookie.get('loginInfo')) {
                var userId = JSON.parse(this.$cookie.get('loginInfo')).id;
                this.$router.push(`/user?userId=${userId}`);
            } else {
                this.$router.push('/01BusinessInf');
            }
        },
        handleClick() {
            console.log('handleClick');
        },
        handleClickFind() {
            this.$router.push({ name: 'fundSituation' });
        },
        handleLogout() {
            this.$confirm('你确定要退出登录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出登录成功!'
                    });
                    this.$http.delete('/api/logout').then(() => {
                        // var userInfocookie = this.$cookie.get("loginInfo")
                        // this.delCookie(userInfocookie)
                        window.onbeforeunload = function(e) {
                            var storage = window.localStorage;
                            storage.clear();
                        };
                        // var loginInfo = this.$cookie.get("loginInfo")
                        this.$cookie.del('loginInfo');
                        this.$router.push('/login');
                    });
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '您已取消！'
                    });
                });
        },
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        }
    }
};
</script>

<style scoped>
/*  */
.firstNavd {
    width: 100%;
    height: 55px;
    position: fixed;
    /*box-shadow:0px -3px 5px 3px #606266 ;*/
}
.navCenter {
    width: 1280px;
    height: 55px;
    position: relative;
    margin: 0 auto;
}
.logo {
    width: 260px;
    height: 55px;
    line-height: 55px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.logo img {
    width: 260px;
    height: 21px;
}
.search-form a {
    position: absolute;
    width: 30px;
    height: 30px;
    display: block;
    text-align: center;
    font-size: 14px;
    background-image: url('../../assets/images/pageIndex/搜索 (2).png');
    background-repeat: no-repeat;
    top: 7px;
    left: 170px;
}
input::-webkit-input-placeholder {
    color: #fff;
}
/*  */
.jumpMsgList{
  background:#FFFFFF
}
.jumpMsgList div{
  margin:10px auto;
}
.firstNavR {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.firstNavR1 {
    display: flex;
    position: absolute;
    top: 13px;
    right: 0;
}
.firstNavR > div {
    margin: 0 14px;
}
.firstNavR1 > div {
    margin: 0 14px;
}
.businessCenter {
    width: 76px;
    height: 28px;
    text-align: center;
    line-height: 27px;
    background: url('../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
    font-size: 14px;
    color: #ffffff;
}
.shortLine {
    width: 1px;
    height: 24px;
}
.searchImg .loginImg {
    width: 20px;
    height: 20px;
}
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
.wrapper {
    width: 400px;
    height: 485px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.scroll-wrapper {
    background-color: #efeff0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1 1;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
}
.drawer-empty {
    background: #fff;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    line-height: 20px;
}
.drawer-empty strong {
    font-size: 17px;
    font-weight: 400;
    padding-bottom: 10px;
}
.drawer-empty p {
    color: #b5b6ba;
    font-size: 14px;
    max-width: 240px;
}
</style>
