<template>
    <div class="home">
        <Holstein></Holstein>
        
        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration" style="">
                <el-steps align-center :active="1" finish-status="success">
                    <el-step title="提交订单" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                    <el-step title="资金托管" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                    <el-step title="服务商接单" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                    <el-step title="服务商工作" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                    <el-step title="验收付款" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                    <el-step title="交易成功" description="2020-04-06 09: 03: 45" icon="el-icon-circle-check"></el-step>
                </el-steps>
                <div class="partTop ">
                    <div class="overview" >需求详情</div>
                    <div class="dispalyFlex">
                        <div class="reqDetail" style="margin-top:40px">
                            <div>需求类目：图形设计     >     标志设计 </div>
                            <div>需求预算：20.00元 </div>
                            <div>需求描述：Roblox GFX（徽标/图标尺寸）</div>
                            <div>参考条件：无</div>
                        </div>
                        <div class="adddReq">补充需求</div>
                    </div>
                </div>
                <div class="partTop" style="border:1px dashed #888888">
                    <div class="" style="padding:20px;">
                        <div class="overview" style="margin-bottom:20px">竞标服务商</div>
                        <table cellspacing="0" cellpadding="0" style="width: 1238px;">
                            <tbody  style="">
                            <tr class="boldSimi" style="">
                                <td style="">服务商信息</td>
                                <td>个人简介</td>
                                <td>技能标签</td>
                                <td>服务商报价</td>
                                <td>综合评分</td>
                                <td>竞标时间</td>
                                <td>操作</td>
                            </tr>
                                    <tr style="">
                                        <td >
                                            <div class="dispalyFlex" style="width:210px">
                                                <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                                <div>
                                                    <div>anne9008</div>
                                                    <div class="MarginMerchant1" style="margin-top:4px">2级卖家</div>
                                                </div>
                                                <div>
                                                    <div class="MarginMerchant" style="">保证金商户</div>
                                                    <div class="MarginMerchant2" style="margin-top:4px">实名认证</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style="">我是LOL艾欧尼亚一区王者100点</td>
                                        <td style="">
                                            <div class="skilllabel">艾欧王者</div>
                                        </td>
                                        <td>
                                            ￥20
                                        </td>
                                        <td style="">
                                            <div style="display:flex">
                                                <div class="star" style="width:81px;height:13px">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <div style="color:#FFCC09">4.9</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>2020-04-06</div>
                                            <div>09: 03: 45</div>
                                        </td>
                                        <td>
                                            <div class="dispalyFlex">
                                                <div class="reqBtn" @click="dialogVisible3 = true">查看详情</div>
                                                <div class="reqBtn">选择服务商</div>
                                                <el-dialog
                                                        title=""
                                                        :visible.sync="dialogVisible3"
                                                        width="30%"
                                                        :before-close="handleClose">
                                                        <div>
                                                            <div class="dispalyFlex" style="width:270px">
                                                                <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                                                <div>
                                                                    <div>anne9008</div>
                                                                    <div style="display:flex">
                                                                        <div class="MarginMerchant1" style="">2级卖家</div>
                                                                        <div class="MarginMerchant" style="margin:0 10px">保证金商户</div>
                                                                        <div class="MarginMerchant2" style="">实名认证</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style="margin:10px 0 20px 70px">
                                                                <div style="display:flex">
                                                                    <div class="star" style="width:81px;height:13px">
                                                                        <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                                            <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                                            <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                                            <img v-else src="../../src/assets/images/icon/none-star.png">
                                                                        </div>  -->
                                                                        <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                                    </div>
                                                                    <div style="color:#FFCC09">4.9</div>
                                                                </div>
                                                            </div>
                                                            
                                                            <el-form ref="form" :model="form" label-width="80px">
                                                                <el-form-item label="个人简介">
                                                                    <el-input type="textarea" v-model="form.desc" placeholder="请告诉我们你的喜好、专业知识或者其他你想展示的内容。（不低于150字）"></el-input>
                                                                </el-form-item>
                                                                <el-form-item label="技能专长">
                                                                    <div class="dispalyFlex">
                                                                        <div class="adddReq">艾欧王者</div>
                                                                        <div class="adddReq">峡谷之巅大师</div>
                                                                    </div>
                                                                </el-form-item>
                                                            </el-form>
                                                        </div>
                                                        <span slot="footer" class="dialog-footer">
                                                            <el-button @click="dialogVisible3 = false">关闭</el-button>
                                                            <el-button type="primary" @click="dialogVisible3 = false">选择服务商</el-button>
                                                        </span>
                                                        </el-dialog>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style="">
                                        <td >
                                            <div class="dispalyFlex" style="width:210px">
                                                <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                                <div>
                                                    <div>anne9008</div>
                                                    <div class="MarginMerchant1" style="margin-top:4px">2级卖家</div>
                                                </div>
                                                <div>
                                                    <div class="MarginMerchant" style="">保证金商户</div>
                                                    <div class="MarginMerchant2" style="margin-top:4px">实名认证</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style="">我是LOL艾欧尼亚一区王者100点</td>
                                        <td style="">
                                            <div class="skilllabel">艾欧王者</div>
                                        </td>
                                        <td>
                                            ￥20
                                        </td>
                                        <td style="">
                                            <div style="display:flex">
                                                <div class="star" style="width:81px;height:13px">
                                                    <!-- <div class="star" v-for="(value,index) of handleStar(movies.rating)" :key="index">
                                                        <img v-if="value>1.5" src="../../src/assets/images/icon/star.png">
                                                        <img v-else-if="value>1" src="../../src/assets/images/icon/ban-star.png">
                                                        <img v-else src="../../src/assets/images/icon/none-star.png">
                                                    </div>  -->
                                                    <img src="../../assets/images/detail/五星 拷贝 3.png" alt="">
                                                </div>
                                                <div style="color:#FFCC09">4.9</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>2020-04-06</div>
                                            <div>09: 03: 45</div>
                                        </td>
                                        <td>
                                            <div class="dispalyFlex">
                                                <div class="reqBtn" @click="dialogVisible4 = true">查看详情</div>
                                                <div class="reqBtn">选择服务商</div>
                                            </div>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="partTop" style="border:1px dashed #888888">
                    <div class="" style="padding:20px;">
                        <div class="overview" style="margin-bottom:20px">需求动态</div>
                        <el-steps direction="vertical" :active="1" style="height:200px">
                            <el-step title="您托管了20.00元"></el-step>
                            <el-step title="下单成功，正在等待服务商接单"></el-step>
                            <el-step title="凯拉切尔451（服务商），接受需求，即将为您服务" ></el-step>
                        </el-steps>
                    </div>
                </div>
                <div class="dispalyFlex" style="width:680px;margin:60px auto">
                    <div class="notconcernBtn">取消订单</div>
                    <div class="notconcernBtn" @click="dialogVisible = true">追加金额</div>
                    <div class="concernBtn" @click="payInzfb">确认支付</div>

                    <el-dialog class="addiAmount"
                            title="追加金额"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <div>
                                <div class="overview">我将为您的游戏或组图标让您成为总部roblox gfx</div>
                                <div class="dispalyFlex">
                                    <div class="reqDetail" style="margin-top:20px">
                                        <div class="dispalyFlex">
                                            <div>普通用户-凯拉切尔451</div>
                                            <div style="margin-left:100px">2021-04-06  09: 06: 40</div>
                                        </div>
                                        <div>订单编号：26891200</div>
                                        <div class="dispalyFlex">
                                            <div>追加金额</div>
                                            <div style="margin-left:20px">
                                                <el-radio-group v-model="radio">
                                                    <el-radio :label="3">6(30%)</el-radio>
                                                    <el-radio :label="6">10(50%)</el-radio>
                                                    <el-radio :label="9">20(100%)</el-radio>
                                                    <el-radio :label="12">其他<span></span>
                                                        <el-input v-model="input" style="width:50px" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
                                                    </el-radio>
                                                </el-radio-group>
                                            </div>
                                        </div>
                                        <!--<div class="dispalyFlex"> -->
                                        <div style="display:flex">
                                            <div>备注</div>
                                            <div style="margin-left:60px"><el-input v-model="input" style="width:400px;height:80px"></el-input></div>
                                        </div>
                                        <div>
                                            <el-checkbox v-model="checked2" disabled>第三方支付</el-checkbox>
                                            <el-radio-group v-model="radio" size="mini" style="margin-left:30px">
                                                <el-radio v-model="radio" label="2">
                                                    <img src="../../assets/images/order/02fundtrusteeship/微信.png" alt="">
                                                </el-radio>
                                                <el-radio v-model="radio" label="3">
                                                    <img src="../../assets/images/order/02fundtrusteeship/支付宝.png" alt="">
                                                </el-radio>
                                            </el-radio-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="payInzfb">确认支付</el-button>
                            </span>
                            </el-dialog>
                </div>
            </div>
        </div>
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
// import slideShow from '../../components/Cart.vue'
// import collection from '../../assets/images/detail/喜欢.png'
// import collection_anti from '../assets/images/icon/collection-anti.png'

import Holstein from '@/components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    export default {
        components: {
    //     slideShow
            Holstein,Footer
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            //追加金额
            dialogVisible:false,
            dialogVisible3:false,
            dialogVisible4:false,
            radio:'1',
            checked:'',
            checked2:true,
            input2:'',
            input:'',
            activeIndex:'',
            tableData: Array(20).fill(item),
            iframeState:true,
            tabs:[{name:"正在热映",path:"/films/nowPlaying"},{name:"即将上映",path:"/films/comingSoon"}],
            dataList:["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
            currentIndex: 0,   //默认显示图片
            timer: null,    //定时器
            activeNames: ['1'],
            percentage: 20,
            customColors: '#ffcc09',
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
    mounted() {
        /* // el-main
        const oIframe = document.getElementsByClassName('el-main');
        // const deviceWidth = document.documentElement.clientWidth;
        const deviceWidth = this.oIframe.outerWidth();
        console.log(deviceWidth)
        const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.width = deviceWidth + 'px';
        oIframe.style.height = deviceHeight + 'px';
        //  */
        this.runInv();
    },
    computed: {
        //上一张
        prevIndex() {
            if(this.currentIndex == 0) {
            return this.dataList.length - 1;
            }else{
            return this.currentIndex - 1;
            }
        },
        //下一张
        nextIndex() {
            if(this.currentIndex == this.dataList.length - 1) {
            return 0;
            }else {
            return this.currentIndex + 1;
            }
        }
    },
    methods: {
        handleClose(done) {
          done();
        },
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
        runInv() {
            this.timer = setInterval(() => {
                this.gotoPage(this.nextIndex);
            }, 4000);
        },
        customColorMethod(percentage) {
            if (percentage < 30) {
            return '#909399';
            } else if (percentage < 70) {
            return '#e6a23c';
            } else {
            return '#67c23a';
            }
        },
        handleClick(){
        },
        handleChange(){
        },
        handleSelect(){
        },
        //追加金额
        // async payInzfb(formName) {
            //资金托管
        async payInzfb() {
            this.dialogVisible = false
            // console.log(formName)
            // this.$refs[formName].validate((valid) => {
                // console.log(valid)//true
                // if(valid){
                    // var {mobile,msgCode} = this.ruleForm2bdwx;
                    // console.log(this.ruleForm2bdwx)
                    this.$http.post('/api/zfb/trusteeship',{
                        "userId":15,
                        "serviceId":1,
                        "amount":0.01
                    }).then((res)=>{
                        // var message = res.data.msg.message;
                        var payzfbScan = res.data.biz
                        // if(message=="成功"){
                            this.$message.success('请扫描二维码完成支付')
                            window.location.href = payzfbScan
                            // this.$router.push('/');
                            // this.$data.wechatScan = wechatScan
                        // }else{
                            // this.$message.error('手机号码或验证码错误');
                        // }
                    })
                // }else{
                //     console.log('error submit!!');
                //     return false;
                // }
            // })
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
    .firstNav{
        width: 100%;
        height: 55px;
        background-color: #81d8d0;
        /*box-shadow:0px -3px 15px 3px #606266 ;*/
    }
    .navCenter{
        width: 1280px;
        height: 55px;
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
        position: fixed;
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
    /*  */

    .addiAmount .el-dialog .el-dialog__header{
        background: #81d8d0;
    }
</style>