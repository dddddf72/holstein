<template>
    <div class="home" style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">个人设置</el-breadcrumb-item>
            <el-breadcrumb-item>修改信息</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="" style="margin:50px 0px 0px 100px;height: 950px;">
            <div class="">
                    <div
                        class="stepsContentR"
                        style="width:560px;height: 600px"
                    >
                        <div
                            class="stepsTitle"
                            style="
                                font-size: 30px;
                                font-weight: bold;
                                width: 150px;
                                height: 55px;
                                display: block;
                            "
                        >
                            缴纳保证金
                        </div>
                    <el-form :model="ruleFormsfz" status-icon :rules="rules">
                    <el-form-item prop="refundRateOther">
                        <el-radio-group v-model="refundRate">
                            <el-radio label="1">1000</el-radio>
                            <el-radio label="2">2000</el-radio>
                            <el-radio label="3">5000</el-radio>
                            <el-radio label="4">
                                其他
                                <el-input v-if="refundRate=='4'"
                                    v-model="ruleFormsfz.refundRateOther"
                                    oninput="value=value.replace(/[^0-9.]/g,'')"
                                    placeholder="缴纳保证金金额须为100的整数"
                                    @keydown.native="channelInputLimit"
                                ></el-input>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    </el-form>
                        <div style="color: #999999; font-size: 14px; margin-top: 15px">
                            注：该保证金可后续再缴纳，所缴纳的保证金可随时全额退回。
                        </div>

                        <ul class="cellList" style="list-style: none; padding: 0 !important">
                            <li style="">
                                <span>
                                    <span class="icon-name"></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">未缴纳保证金</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">已缴纳保证金</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单权限</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"
                                        ><img
                                            src="@/assets/images/regist/04缴纳保证金/对号.png"
                                            alt=""
                                    /></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"
                                        ><img
                                            src="@/assets/images/regist/04缴纳保证金/对号.png"
                                            alt=""
                                    /></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单数量</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">1</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"
                                        ><img
                                            src="@/assets/images/regist/04缴纳保证金/无限.png"
                                            alt=""
                                    /></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">接单总额</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">1000元</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">保证金金额*5</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name">可信度标签</span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"
                                        ><img
                                            src="@/assets/images/regist/04缴纳保证金/差 (2).png"
                                            alt=""
                                    /></span>
                                </span>
                            </li>
                            <li style="">
                                <span>
                                    <span class="icon-name"
                                        ><img
                                            src="@/assets/images/regist/04缴纳保证金/对号.png"
                                            alt=""
                                    /></span>
                                </span>
                            </li>
                        </ul>

                        <div class="dispalyFlex" style="width: 400px; margin: 25px auto 0 auto;cursor:pointer">
                            <el-button @click="payInwx">
                                <img
                                    src="@/assets/images/regist/04缴纳保证金/微信.png"
                                    alt=""
                                />
                                微信支付
                            </el-button>
                            <el-button @click="payInzfb">
                                <img
                                    src="@/assets/images/regist/04缴纳保证金/支付宝.png"
                                    alt=""
                                />
                                支付宝支付
                            </el-button>
                        </div>
                        <el-dialog :before-close="handleClose"
                            width="30%"
                            title="支付二维码"
                            :visible.sync="payDiaVisible"
                        >
                            <div style="text-align: center">
                                <img :src="payCodeImg" />
                            </div>
                        </el-dialog>
                    </div>
                    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var validatebailAmount = (rule,value,callback)=>{
            if(value===''){
                callback()
            }else {
                // debugger
                //数字大小写字母特殊字符组成，长度不能小于6
                var reg1 =  /^[1-9].*00$/
                    if (value === '' || value === undefined || value == null) {
                        callback()
                    } else {
                        if (reg1.test(value)==false) {
                            callback(new Error('缴纳保证金金额须为100的整数'))
                        } else {
                            callback()
                        }
                    }
            }
        };
        return {
            active: 0,
            userId: '',
            payType: 1,
            amount: 0,
            ruleFormsfz:{
                refundRateOther: '',
            },
            refundRate: '1',
            payDiaVisible: false,
            payCodeImg: '',
            url: '',
            link: '',
            orderNo: '',
            payzfbScan: '',
            timer:'',
            rules:{
                refundRateOther:[
                    { required: false, message: "缴纳保证金金额须为100的整数",validator:validatebailAmount, trigger: "blur" },
                ]
            }
        };
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
        // console.log(loginInfo)
        this.userId = loginInfo.id;
    },
    methods: {
        async payInwx() {
            this.payType = 1;
            this.url = '/api/wx/margin';
            this.link = '/api/queryPayStatus';
            this.goOnCheck();
        },
        // verificationMoney() {
        //     var r = /^[1-9].*00$/;
        //     if (!r.test(this.ruleFormsfz.refundRateOther)) {
        //         this.$message.error('缴纳保证金金额须为100的整数');
        //         this.ruleFormsfz.refundRateOther = '';
        //         return false;
        //     } else if (this.ruleFormsfz.refundRateOther == '') {
        //         this.$message.error('缴纳保证金金额不为空，须为100的整数');
        //         this.ruleFormsfz.refundRateOther = '';
        //         return false;
        //     }else{
        //         return false;
        //     }
        // },
            // bug fix：指定输入类型为number时仍然可以输入字母'e'和小数点'.'（因为也属于数字类型的范围），这里做一下输入限制
    channelInputLimit (e) {
        let key = e.key
            // 不允许输入'e'和'.'
            if (key === 'e' || key === '.') {
                e.returnValue = false
                return false
            }
            return true
    },
        async payInzfb() {
            // this.$http.post('/api/zfb/trusteeship',{
            //     "userId":this.userId,
            //     "amount":0.01
            // }).then((res)=>{
            //     var payzfbScan = res.data.biz
            //         this.$message.success('请扫描二维码完成支付')
            //         window.location.href = payzfbScan
            // })
            this.payType = 2;
            this.url = '/api/zfb/margin';
            // this.link = '/api/zfb/queryPayStatus';
            // debugger;
            this.goOnCheck();
        },
        goOnCheck() {
            // let dt = {
            //     userId: this.userId
            // };
            if (this.refundRate == 1) {
                this.amount = 0.01;
            } else if (this.refundRate == 2) {
                this.amount = 0.01;
            } else if (this.refundRate == 3) {
                this.amount = 0.01;
            } else {
                this.amount = this.ruleFormsfz.refundRateOther
                  var reg2 =  /^[1-9].*00$/
                  if(reg2.test(this.amount)==false){
                    this.$message.error('请检查所缴纳保证金金额是否为100的整数')
                    return false
                  }
            }
            
            this.$http.post(this.url, {
                userId: this.userId,
                amount:this.amount,
                type:2
            }
            
            ).then((res) => {
                if (this.payType == 1) {
                    this.payDiaVisible = true;
                    this.payCodeImg = res.data.biz.qrCode;
                    this.orderNo = res.data.biz.orderNo;
                    this.timer = setTimeout(() => {
                      if(this.payDiaVisible == false){
                        return false
                      }
                        this.$http
                            .get(this.link, {
                                params: {
                                    orderNo: this.orderNo
                                }
                            })
                            .then((val) => {
                                if (val.data.msg.message == '支付成功') {
                                  this.$message.success(val.data.msg.message )
                                    clearInterval(this.timer);
                                    this.payDiaVisible = false;
                                    // this.$router.push('/05RegistDone')
                                    // this.next();
                                }
                            }).catch(err=>{
                              this.payDiaVisible = false;
                              return false
                            })
                    }, 2000);
                } else {
                    window.location.href = res.data.biz.qrCode;
                    // this.orderNo = res.data.biz.orderNo;
                }
                
            });
        },
        handleClose(done){
          done();
          this.ruleFormsfz.refundRateOther = ''
        }
    }
};
</script>
<style scoped>
.home {
    width: 100%;
}
.center {
    margin: 0 320px;
}
/*  */
.firstNav {
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-shadow: 0px -3px 15px 3px #606266;
}
.navCenter {
    width: 1280px;
    height: 100px;
    position: relative;
}
.logo {
    width: 260px;
    height: 100px;
    vertical-align: middle;
    text-align: center;
}
.logo img {
    width: 260px;
    height: 21px;
}
/*  */
.navTitleContext {
    width: 1280px;
    height: 104px;
    display: flex;
    position: absolute;
    line-height: 100px;
    margin: 0 0 0 10px;
    font-weight: bold;
    font-size: 24px;
}

.navTitleContext .capa {
    color: #97bfd5;
}
.navTitleContext .welTxt {
    margin-left: 30px;
}
.navTitleContext span {
    color: #333;
    margin-left: 10px;
}
.navTitleContext span:nth-child(2) {
    color: #999999;
}
.firstNavR {
    display: flex;
    position: absolute;
    top: 13px;
    right: 0;
}
.firstNavR div {
    margin: 0 14px;
}
.shortLine {
    width: 1px;
    height: 9px;
}
.searchImg .loginImg {
    width: 20px;
    height: 20px;
}
/*  */
.merchantRegist {
    width: 100%;
    height: 770px;
}
.merchantRegistration {
    width: 1280px;
    height: 770px;
    margin: 0 auto;
}
.el-step__head.is-process {
    color: #303133 !important;
    border-color: #303133 !important;
}
.el-step__head.is-success,
.el-step__title.is-success {
    color: #81d8d0 !important;
    border-color: #81d8d0 !important;
}
/*  */
.cellList {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    margin-top: 20px;
    width: 580px;
    height: 296px;
    border-left: 1px solid #eaeefb;
    border-right: 1px solid #eaeefb;
    border-top: 1px solid #eaeefb;
    border-radius: 4px;
}
.cellList li i {
    display: block;
}
.cellList li {
    float: left;
    width: 33.33%;
    text-align: center;
    height: 58px;
    line-height: 58px;
    color: #666;
    font-size: 13px;
    margin-right: -1px;
    border-bottom: 1px solid #eaeefb;
}
.cellList li:nth-child(3n + 2) {
    border-left: 1px solid #eaeefb;
    border-right: 1px solid #eaeefb;
}
.cellList li span {
    line-height: normal;
}
.cellList li:after,
.cellList li span {
    display: inline-block;
    vertical-align: middle;
}
.payBtn .el-button--primary {
    color: #666666;
    width: 140px;
    height: 45px;
    line-height: 20px;
    text-align: center;
    background: transparent;
    border-color: #999999;
}
</style>