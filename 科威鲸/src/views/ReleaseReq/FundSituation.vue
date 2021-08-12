<template>
    <div class="home">
        <Holstein></Holstein>
        
        <!-- 导航结束 -->
        <div class="merchantRegist">
            <div class="merchantRegistration" style="">
                <el-steps align-center :active="orderStatus" finish-status="success">
                    <el-step title="提交订单" :description="processes[0].createTime" icon="el-icon-circle-check"></el-step>
                    <el-step title="资金托管" :description="processes[1].createTime" icon="el-icon-circle-check"></el-step>
                    <el-step title="服务商接单" :description="processes[2].createTime" icon="el-icon-circle-check"></el-step>
                    <el-step title="服务商工作" :description="processes[3].createTime" icon="el-icon-circle-check"></el-step>
                    <el-step title="验收付款" :description="processes[4].createTime" icon="el-icon-circle-check"></el-step>
                    <el-step title="交易成功" :description="processes[5].createTime" icon="el-icon-circle-check"></el-step>
                </el-steps>
                <div class="partTop ">
                    <div class="overview" >需求详情</div>
                    <div class="dispalyFlex">
                        <div class="reqDetail" style="margin-top:40px" v-if="initData.demandDeitail">
                            <div>需求类目：{{initData.demandDeitail.cateName}} </div>
                            <div>需求预算：{{initData.demandDeitail.demandAmount}}元 </div>
                            <div>需求描述：{{initData.demandDeitail.demandDes}}</div>
                            <div>参考条件：{{initData.demandDeitail.referenceFile}}</div>
                        </div>
                        <div class="adddReq" @click="dialogSevier = true" style="cursor: pointer;" v-if="this.initData.orderType == 1">补充需求</div>
                        <el-dialog title="补充需求"
                        :visible.sync="dialogSevier">
                            <el-form v-model="replenishDemand">
                                <el-form-item label="需求类目">
                                    <el-select v-model="initData.demandDeitail.cateName" disabled placeholder="请选择">
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="需求预算">
                                    <el-col :span="20">
                                        <el-input v-model="initData.demandDeitail.demandAmount" :disabled="initData.status == 1 ? false : true"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="需求描述">
                                    <el-col :span="20">
                                        <el-input type="textarea"  v-model="replenishDemand.demandDesc" :rows="2" placeholder="对你的需求进行简单的描述，例如：我想做个网站"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="需求附加">
                                    <el-upload
                                        class="upload-demo"
                                        drag
                                        action="http://yshopapi.inroyltd.com/api/uploadFile"
                                        multiple
                                        :limit="1"
                                        :file-list="replenishDemand.demandFile"
                                        :on-success="handleFileSuccess">
                                        <i class="el-icon-upload"></i>
                                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                        <template #tip>
                                            <div class="el-upload__tip">
                                            只能上传 一个压缩包
                                            </div>
                                        </template>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item>
                                    <p style="text-align:center">
                                        <el-button type="primary" @click="onSubmit">补充需求</el-button>
                                    </p>
                                </el-form-item>
                            </el-form>
                        </el-dialog>
                    </div>
                </div>
                <div class="partTop dispalyFlex">
                    <div style="width:296px;height:260px;border:1px dashed #888888">
                        <div style="padding:20px;">
                            <div class="overview" >资金情况</div>
                                <div class="reqDetail" style="margin-top:40px" v-if="initData.capitalCondition">
                                    <div>预算金额：{{initData.capitalCondition.budgetAmount}}元</div>
                                    <div>托管金额：{{initData.capitalCondition.trusteeshipAmount}}元</div>
                                    <div>付款金额：{{initData.capitalCondition.payedAmount}}元</div>
                                    <div>退款金额：{{initData.capitalCondition.refundAmount}}元</div>
                                    <div style="float:right;color:#81d8d0;cursor: pointer;" @click="dialogVisible2 = true" v-if="initData.status == 2 || initData.status == 3 || initData.status == 4">申请退款</div>
                                    <el-dialog class="addiAmount"
                            title=""
                            :visible.sync="dialogVisible2"
                            width="40%"
                            :before-close="handleClose">
                            <div>
                                <div style="height: 45px; line-height: 45px; background-color: rgb(129, 216, 208); text-align: left; font-size: 16px; font-weight: bold; color: rgb(255, 255, 255); padding-left: 20px; margin: -45px 0 20px">申请退款</div>
                                <div class="overview">{{initData.serviceName}}</div>
                                <div class="dispalyFlex">
                                    <div class="reqDetail" style="margin-top:20px">
                                        <div class="dispalyFlex">
                                            <div>普通用户-{{initData.username}}</div>
                                            <div style="margin-left:100px">{{initData.orderTime}}</div>
                                        </div>
                                        <div>订单编号：{{initData.orderNo}}</div>

                                        <div class="dispalyFlex" style="justify-content: normal;">
                                            <div style="margin-right:20px">退款原因</div>
                                            <div style="">
                                                <el-select v-model="refundReason" placeholder="请选择退款原因" style="width:400px;">
                                                    <el-option label="项目取消，我已不需要该需求" value="项目取消，我已不需要该需求"></el-option>
                                                    <el-option label="需求发布错误" value="需求发布错误2"></el-option>
                                                    <el-option label="错误选标，选错人" value="错误选标，选错人"></el-option>
                                                    <el-option label="推广效果未到达要求" value="推广效果未到达要求"></el-option>
                                                    <el-option label="服务商无法安排时间完成工作" value="服务商无法安排时间完成工作5"></el-option>
                                                    <el-option label="就需求完成时间、价格等未达成一致" value="就需求完成时间、价格等未达成一致"></el-option>
                                                    <el-option label="对作品不满意" value="对作品不满意"></el-option>
                                                    <el-option label="对服务商未遵守交易承诺" value="对服务商未遵守交易承诺"></el-option>
                                                    <el-option label="其他" value="其他"></el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                        <div class="dispalyFlex">
                                                <div>退款金额</div>
                                                <div style="margin-left:20px">
                                                    <el-radio-group v-model="refundRate">
                                                        <el-radio label="1">{{initData.orderAmount * 0.3}}(30%)</el-radio>
                                                        <el-radio label="2">{{initData.orderAmount * 0.5}}(50%)</el-radio>
                                                        <el-radio label="3">{{initData.orderAmount}}(100%)</el-radio>
                                                        <el-radio label="4">
                                                            <span v-if="refundRateText">({{refundRateText}})%</span>
                                                            <span v-else>其他</span>
                                                            <el-input v-model="refundRateOther" 
                                                            value="refundRateOther"
                                                            onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"
                                                            @input="verificationMoney"
                                                             style="width:70px"></el-input>
                                                        </el-radio>
                                                    </el-radio-group>
                                                </div>
                                            </div>
                                            <!--<div class="dispalyFlex"> -->
                                            <div style="display:flex">
                                                <div>说明</div>
                                                <div style="margin-left:60px"><el-input type="textarea" :rows="3" v-model="refundRemark" style="width:400px;height:80px"></el-input></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <span  class="dialog-footer" style="text-align:center;margin: 20px auto 0; display: block;">
                                <!-- <el-button @click="dialogVisible2 = false">取 消</el-button> -->
                                <el-button type="primary" @click="subRefund">确认退款</el-button>
                            </span>
                            </el-dialog>
                                </div>
                        </div>
                    </div>
                    <div style="width:972px;height:260px;border:1px dashed #888888">
                        <div style="padding:20px;">
                            <div class="overview" >项目进度</div>
                            <div style="margin-top:40px">
                                <el-steps :active="achedulesActive" finish-status="success" align-center>
                                    <el-step :title="item.title" :description="item.createTime" icon="el-icon-circle-check" v-for="(item,idx) in initData.projectSchedules" :key="idx"></el-step>
                                </el-steps>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 竞标服务商 -->
                <div class="partTop" style="border:1px dashed #888888;" v-if="initData.orderType && initData.orderType == 1">
                    <div class="" style="padding:20px;">
                        <div class="overview" style="margin-bottom:20px">竞标服务商</div>
                        <el-table :data="providerList">
                            <el-table-column label="服务商信息" width="300">
                                <template slot-scope="scope">
                                    <div class="" style="display:flex;align-items: flex-end;">
                                        <div style="width:45px;height:46px"><img src="../../assets/images/detail/组 21.png" alt=""></div>
                                        <div style="margin:0 10px">
                                            <div>{{scope.row.name}}</div>
                                            <div class="MarginMerchant1" style="margin-top:4px">{{scope.row.sellerQualification}}</div>
                                        </div>
                                        <div>
                                            <div class="MarginMerchant" v-if="scope.row.isBzj">保证金商户</div>
                                            <div class="MarginMerchant2" style="margin-top:4px" v-if="scope.row.isCertification">实名认证</div>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="个人简介" prop="intro"></el-table-column>
                             <el-table-column label="技能标签">
                                 <template slot-scope="scope">
                                    <div class="skilllabel" style="margin-bottom:10px" v-for="(item,idx) in scope.row.skill" :key="idx">{{item.skill}}</div>
                                </template>
                             </el-table-column>
                             <el-table-column label="综合评分" prop="zhScore">
                                 <template slot-scope="scope">
                                     <div class="star">
                                        <a class="star-active" :style="{width: (scope.row / 5) * 75 + 'px'}"></a>
                                    </div>
                                     <!-- <img :src="'../../assets/images/order/01orderdetail/star-' + scope.row.zhScore + '.png'" alt=""> -->
                                 </template>
                             </el-table-column>
                             <el-table-column label="竞标时间" prop="createTime"></el-table-column>
                             <el-table-column label="操作" width="220">
                                 <template slot-scope="scope">
                                        <div class="reqBtn" @click="showMore(scope.row)">查看详情</div>
                                        <div class="reqBtn" @click="chooseServicer(scope.row.demandId, scope.row.bidder)">选择服务商</div>
                                 </template>
                             </el-table-column>
                        </el-table>
                    </div>
                    <el-dialog
                        class="serviceDialog"
                        title=""
                        :visible.sync="dialogVisible3"
                        width="30%"
                        :before-close="handleClose"
						>
                        <div>
                            <div style="display:flex;width:270px">
                                <div style="width:45px;height:46px; border-radius:50%;margin-right:20px">
                                    <img :src="'http://yshopapi.inroyltd.com' + dialogData.headImg" width="46" height="46" style="border-radius: 50%;"></div>
                                <div>
                                    <div>{{dialogData.nickname}}</div>
                                    <div style="display:flex">
                                        <div class="MarginMerchant1" style="">{{dialogData.sellerQualification}}</div>
                                        <div class="MarginMerchant" style="margin:0 10px" v-if="dialogData.isBzj">保证金商户</div>
                                        <div class="MarginMerchant2" style="" v-if="dialogData.isCertification">实名认证</div>
                                    </div>
                                </div>
                            </div>
                            <div style="margin:10px 0 20px 65px">
                                <div style="display:flex">
                                    <div class="star">
                                        <a class="star-active" :style="{width: (dialogData.zhScore / 5) * 75 + 'px'}"></a>
                                    </div>
                                    <div style="color:#FFCC09">{{dialogData.zhScore || '暂无评分'}}</div>
                                </div>
                            </div>
                            
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="个人简介">
                                    <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="dialogData.intro" placeholder="请告诉我们你的喜好、专业知识或者其他你想展示的内容。（不低于150字）"
style="height:100px;"></el-input>
                                </el-form-item>
                                <el-form-item label="技能专长">
                                    <div style="display:flex;align-items:center;flex-wrap:wrap;">
                                        <div class="adddReq" v-for="(item,idx) in dialogData.userSkillVOs" :key="idx" style="margin:0 10px 10px 0;width:auto; padding: 0 20px">{{item.skill}}</div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="dialog-footer" style="text-align:center">
                            <el-button @click="dialogVisible3 = false">关闭</el-button>
                            <el-button type="primary" @click="dialogVisible3 = false, chooseServicer(choosedPro.demandId, choosedPro.bidder)">选择服务商</el-button>
                        </div>
                    </el-dialog>
                </div>
                <!-- 展示文件 -->
                <div class="showFile" style="border:1px dashed #888888" v-if="initData.status == 3 || initData.status == 4">
                    <div class="overview" style="margin-bottom:20px">展示文件</div>
                    <div class="fileList">
                        <div class="file-item" v-for="(item,idx) in initData.serviceFiles" :key="idx">
                            <span>文件{{idx + 1}}</span>
                            <span>{{item.fileUrl}}</span>
                        </div>
                    </div>
                    <div class="btn" v-if="initData.status == 3">
                        <div class="notconcernBtn">审核不通过</div>
                        <div class="concernBtn">审核通过</div>
                    </div>
                    <div  v-if="initData.status == 4">
                        <div class="overview" style="margin:20px 0">交付文件下载</div>
                        <a href="" download="文件名.jpg" class="downloadFile">文件名</a>
                    </div>
                </div>
                <div class="partTop" style="border:1px dashed #888888">
                    <div class="demandDynamics" style="padding:20px;">
                        <div class="overview" style="margin-bottom:20px">需求动态</div>
                        <ul>
                            <li v-for="(item,idx) in initData.demandDynamics" :key="idx">
                                <div class="time">
                                    <p>{{item.time}}</p>
                                    <p class="date">{{item.date}}</p>
                                </div>
                                <div class="xx">
                                    <i></i>
                                    <div class="text">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dispalyFlex" style="width:680px;margin:60px auto">
                    <template v-if="initData.status == 0">
                        <div class="notconcernBtn">资金托管</div>
                        <div class="notconcernBtn" @click="cancel">取消订单</div>
                    </template>
                    <template v-else-if="initData.status == 1">
                        <div class="notconcernBtn" @click="cancel">取消订单</div>
                    </template>
                    <template v-else-if="initData.status == 2">
                        <div class="notconcernBtn" @click="dialogVisible = true">追加金额</div>
                    </template>
                    <template v-else-if="initData.status == 3">
                        <div class="notconcernBtn" @click="dialogVisible = true">追加金额</div>
                    </template>
                    <template v-else-if="initData.status == 4">
                        <div class="notconcernBtn" @click="finishOrder">确认完成</div>
                    </template>
                    <template v-else-if="initData.status == 5">
                        <div class="notconcernBtn" @click="finishOrder">确认完成</div>
                    </template>
                    <!-- <div class="notconcernBtn" @click="cancel">取消订单</div>
                    <div class="concernBtn" v-if="orderStatus == 4" @click="confirmPay">确认支付</div> -->
                        <el-dialog class="addiAmount"
                            title="追加金额"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <el-form :model="addForm">
                                <div>
                                    <div class="overview">{{initData.serviceName}}</div>
                                    <div class="dispalyFlex">
                                        <div class="reqDetail" style="margin-top:20px">
                                            <div class="dispalyFlex">
                                                <div>普通用户-{{initData.username}}</div>
                                                <div style="margin-left:100px">{{initData.orderTime}}</div>
                                            </div>
                                            <div>订单编号：{{initData.orderNo}}</div>
                                            <div style="display:flex;align-items:center">
                                                <div>追加金额</div>
                                                <div style="margin-left:20px;display:flex;align-items:center">
                                                    ￥
                                                    <el-input placeholder="请输入追加金额" v-model="addForm.addAmount" onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                </div>
                                            </div>
                                            <!--<div class="dispalyFlex"> -->
                                            <div style="display:flex">
                                                <div>备注</div>
                                                <div style="margin-left:60px">
                                                    <el-input type="textarea" :rows="2" v-model="addForm.addAmountRemark" style="width:400px;height:80px" maxlength="200"></el-input>
                                                </div>
                                            </div>
                                            <div>
                                                <el-checkbox v-model="checked2" disabled>第三方支付</el-checkbox>
                                                <el-radio-group v-model="addForm.payType" size="mini" style="margin-left:30px">
                                                    <el-radio :label="1">
                                                        <img src="../../assets/images/order/02fundtrusteeship/微信.png" alt="">
                                                    </el-radio>
                                                    <el-radio :label="2">
                                                        <img src="../../assets/images/order/02fundtrusteeship/支付宝.png" alt="">
                                                    </el-radio>
                                                </el-radio-group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-form>
                            <el-dialog
                                width="30%"
                                append-to-body
                                title="支付二维码"
                                show-close="false"
                                :visible.sync="payDiaVisible"
                            >
                                <div style="text-align:center"><img :src="payCodeImg"></div>
                            </el-dialog>
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
import Holstein from '@/components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    export default {
        components: {
            Holstein,Footer
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            initData: {},
            dialogVisible:false,
            dialogVisible2:false,
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
            select: 1,
            addForm: {
                addAmountRemark: '',
                orderId: '',
                addAmount: '',
                payType: 1
            },
            orderId: 33,
            payCodeImg: '',
            payDiaVisible: false,
            refundReson: '',
            refundRateOther: '',
            refundRemark: '',
            refundRate: '1',
            providerList: [],
            dialogVisible3: false,
            dialogData: {},
            choosedPro: {},
            dialogSevier: false,
            replenishDemand: {
                demandDesc: '',
                demandFile: [{
                    name: '',
                    url: ''
                }]
            },
            orderStatus: 0,
           processes: [{
                createTime: "",
                status: 1,
            },
            {
                createTime: "",
                status: 2,
            },
            {
                createTime: "",
                status: 3,
            },
            {
                createTime: "",
                status: 4,
            },
            {
                createTime: "",
                status: 5,
            },
            {
                createTime: "",
                status: 6,
            }],
            refundReason: '',
            refundRateText: '',
            fundId: 33,
            achedulesActive: 1
        }
    },
    mounted() {
        console.log(this.slides)
        this.runInv();
        // 编辑商品时带参数id，新增不带
        if (this.$route.query.id) { 
            this.fundId = this.$route.query.id;
        }
        this.getOrderDetail();
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
        },
    },
    methods: {
        getOrderDetail() {
             this.$http.get('/api/snail/order/' + this.fundId).then (res => {
                this.initData = res.data.biz;
                // 重组需求动态title
                let arr  =this.initData.demandDynamics
                if (arr.length > 0) {
                    for (const i in arr) {
                        if (arr[i].status === 1) {
                            arr[i].title =arr[i].userName + '创建了需求;'
                        } else if (arr[i].status === 2) {
                            arr[i].title =arr[i].biderName + '参与了需求竞标;'
                        } else if (arr[i].status === 3) {
                            arr[i].title =arr[i].userName + '已下单成功;'
                        } else if (arr[i].status === 4) {
                            arr[i].title =arr[i].userName + '托管了' + arr[i].amount + '元;'
                        } else if (arr[i].status === 5) {
                            arr[i].title =arr[i].userName + '修改了需求;'
                        } else if (arr[i].status === 6) {
                            arr[i].title =arr[i].biderName + '接受需求，即将为您服务;'
                        } else if (arr[i].status === 7) {
                            arr[i].title =arr[i].biderName + '已提交交付资料;'
                        } else if (arr[i].status === 8) {
                            arr[i].title =arr[i].userName + '验收不通过，' + arr[i].biderName + '继续修改;'
                        } else if (arr[i].status === 9) {
                            arr[i].title =arr[i].userName + '已验收通过(您已获取交付资料，' + arr[i].biderName + '服务商已获取劳动报酬);'
                        }
                        arr[i].date = arr[i].createTime.slice(0, 10)
                        arr[i].time = arr[i].createTime.slice(11, 18)
                    }
                    this.initData.demandDynamics = arr.reverse()
                }
                // 重组项目进度
                let arr2 = this.initData.projectSchedules
                this.achedulesActive = arr2.length
                let newArr = [
                    {
                        title: '项目启动',
                        createTime: '',
                        status: 1
                    },
                    {
                        title: '服务商产出',
                        createTime: '',
                        status: 2
                    },
                    {
                        title: '样品',
                        createTime: '',
                        status: 3
                    },
                    {
                        title: '项目验收',
                        createTime: '',
                        status: 4
                    }
                ]
                if (arr2.length > 0) {
                    for (const i in arr2) {
                        newArr.forEach(item => {
                            if (item.status == arr2[i].status) {
                                item.createTime = arr2[i].createTime
                            }
                        })
                        // if (arr2[i].status === 1) {
                        //     arr2[i].title = '项目启动 '
                        // } else if (arr2[i].status === 2) {
                        //     arr2[i].title = '服务商产出'
                        // } else if (arr2[i].status === 3) {
                        //     arr2[i].title = '样品'
                        // } else if (arr2[i].status === 4) {
                        //     arr2[i].title = '项目验收'
                        // }
                    }
                    
                }  else {
                     this.achedulesActive = -1
                }
                this.initData.projectSchedules = newArr
                // 订单状态
                this.orderStatus = this.initData.orderProcesses.length - 1;
                let proArr = this.initData.orderProcesses
                for (const i in proArr) {
                    this.processes[i].createTime = proArr[i].createTime
                }
                // 
                if (res.data.biz.orderType == 1) {
                    this.getProviderList()
                }
                // 补充需求弹层赋值
                if (res.data.biz.demandDeitail.demandDes) {
                    this.replenishDemand.demandDesc = res.data.biz.demandDeitail.demandDes
                }
                if (res.data.biz.demandDeitail.referenceFile) {
                    // let obj = {
                    //     name: res.data.biz.demandDeitail.referenceFile,
                    //     url: res.data.biz.demandDeitail.referenceFile
                    // }
                    this.replenishDemand.demandFile = [{
                        name: res.data.biz.demandDeitail.referenceFile,
                        url: res.data.biz.demandDeitail.referenceFile
                    }]
                }
            })
        },
        // 获取竞标服务商列表
        getProviderList() {
            this.$http.get('/api/biddedProvider',{
                params: {
                    orderId: this.orderId,
                }
            }).then (res => {
                this.providerList = res.data.biz
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(res=> {
                done();
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
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
            console.log(1)
        },
        handleChange(){
            console.log(1)
        },
        handleSelect(){
            console.log(1)
        },
        //追加金额
        async payInzfb() {
            // this.dialogVisible = false
            let dt = {
                orderId: this.orderId,
                addAmountRemark: this.addForm.addAmountRemark,
                addAmount: this.addForm.addAmount
            }
            this.$http.post('/api/addFinish',dt).then(()=>{
                let url = '';
                if (this.addForm.payType == 2) {
                    url = '/api/zfb/addAmount'
                } else {
                    url = '/api/wx/addAmount';
                    dt.addAmount = dt.addAmount * 100
                }
                console.log(this.addForm.payType)
                this.$http.post(url + '?amount=' + dt.addAmount).then(res => {
                    if (this.addForm.payType == 2) { // 支付宝支付跳转页面
                        window.location.href = res.data.biz.qrCodeUrl
                        this.dialogVisible = false;
                    } else {
                        this.payDiaVisible = true;
                        this.payCodeImg = res.data.biz.qrCodeUrl;
                    }
                    let link = '/api/queryPayStatus'
                    if (this.addForm.payType === 2) {
                        link = '/api/zfb/queryPayStatus'
                    }
                    // 检查支付状态
                    let timer = setInterval(() => {
                        this.$http.get(link,{
                            params: {
                                orderNo: res.data.biz.orderNo,
                                outTradeNo: ''
                            }
                        }).then(val => {
                            if (val.data.msg.message == '支付成功') {
                                this.$message.success('支付成功');
                                clearInterval(timer);
                                this.payDiaVisible = false;
                                this.dialogVisible = false;
                                this.getOrderDetail();
                            }
                        })
                    }, 500);
                })
            })
               
        },
        // 申请退款
        subRefund() {
            if (!this.refundReason) {
                this.$message.success('请选择退款原因');
            }
            let dt = {
                refundReason: this.refundReason,
                refundRemark: this.refundRemark,
            }
            if (this.refundRate == 1) {
                dt.refundAmount = this.initData.orderAmount * 0.3
                dt.refundRate = 30
            } else if (this.refundRate == 2) {
                dt.refundAmount = this.initData.orderAmount * 0.5
                dt.refundRate = 50
            } else if (this.refundRate == 3) {
                dt.refundAmount = this.initData.orderAmount
                dt.refundRate = 100
            } else {
                dt.refundAmount = this.refundRateOther
                dt.refundRate = ((this.refundRateOther / this.initData.orderAmount) * 100).toFixed(2)
            } 
            this.$http.post('/api/applyRefund/' + this.orderId, dt).then((res)=>{
                this.$message.success('申请退款成功');
                this.dialogVisible2 = false
            })
        },
        verificationMoney() {
            if (this.refundRateOther > this.initData.orderAmount) {
                this.$message.error('退款金额不得大于订单金额');
                this.refundRateOther = 0;
                this.refundRateText = ""
                return false
            } else {
                console.log(this.refundRateOther / this.initData.orderAmount)
                this.refundRateText = ((this.refundRateOther / this.initData.orderAmount) * 100).toFixed(2)
            }
        },
        showMore(item) {
            this.choosedPro = item;
            this.$http.get('/api/provider/viewDetail',{
                params: {
                    userId: item.bidder
                }
            }).then (res => {
                this.dialogData = res.data.biz
                this.dialogVisible3 = true
            })
        },
        chooseServicer(demandId, bidder) {
            this.$http.post('/api/selectedProvider?orderId=' + demandId + '&provider=' + bidder).then((res)=>{
                this.$message.success('选择服务商成功！');
            })
        },
        handleFileSuccess(val) {
            console.log(val)
            this.replenishDemand.demandFile[0].url = val[0].fileUrl
            console.log(this.replenishDemand.demandFile)
        },
        onSubmit() {
            let url = '/api/replenishDemand?orderId=' + this.orderId + '&demandDesc=' + this.replenishDemand.demandDesc + '&demandFile=' + this.replenishDemand.demandFile[0].url;
            if (this.initData.status == 1) {
                url = url + '&demandAmount=' + this.initData.demandDeitail.demandAmount
            }
            this.$http.post(url).then((res)=>{
                if (res.data.msg.message == '成功') {
                    this.$message.success('补充需求成功')
                    this.dialogSevier = false;
                    this.getOrderDetail()
                }
            })
        },
        // 取消订单
        cancel() {
            this.$confirm('确认取消订单？','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.post('api/cancelOrder/' +  this.orderId).then(() => {
                    this.$message.success('订单删除成功')
                })
            })
        },
        // 确认支付
        confirmPay() {
            this.$http.post('/api/completeDeal', {
                orderId: this.orderId
            }).then(() => {
                    // this.$message.success('付款成功')
            })
        },
        finishOrder() {
            this.$confirm('该单是否完成？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                     this.$http.post('/api/completeDeal?orderId=' + this.orderId).then(() => {
                        this.$message.success('完成订单')
                        this.getOrderDetail
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
            });
        }
    }
}
</script>
<style scoped>
	.class1 {
	  border-radius: 20px;
	}
	.el-dialog__footer {
	        text-align: center;
	      }
		  
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
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    .MarginMerchant1{
        background:#81d8d0;
        color:#fff;
        height:22px;
        width: auto;
        line-height:22px;
        text-align:center;
        font-size:12px;
        padding: 0 5px;
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
    .partTop .reqBtn  {
        margin: 0 10px 0 0;
        display: inline-block;
    }
</style>
<style lang="scss">
    .demandDynamics ul li {
        position: relative;
        padding-left: 105px;
        padding-bottom: 40px;

        &::before {
            content: '';
            position: absolute;
            left: 114px;
            top: 0;
            width: 2px;
            height: 100%;
            background-color: #81d8d0;
        }

        .time {
            position: absolute;
            left: 0;
            top: 0;
            display: none;
            color: #333;
            .date {
                color: #999;
            }
        }
        .xx {
            position: relative;
            padding-left: 40px;
            i {
                position: absolute;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: #81d8d0;
                border: 1px solid #81d8d0;
                box-sizing: border-box;
                border-radius: 50%;
                display: inline-block;
            }
        }
    }
    .demandDynamics ul li:hover .time {
        display: block;
    }
    .demandDynamics ul li:hover i{
        background-color: #fff;
    }
    .showFile {
        padding: 20px;
    }
    .fileList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .file-item {
        width: 30%;
    }
    .showFile .btn {
        display: flex;
        width: 400px;
        margin: 0 auto;
    }
    .downloadFile {
        text-decoration: underline;
        color: rgb(129, 216, 208);
    }
    .star {
        background: url('../../assets/images/order/01orderdetail/star-default.png') repeat-x;
        width: 75px;
        height: 13px;
        position: relative;
    }
    .star-active {
        display: block;
        height: 13px;
        width: 15px;
        position: absolute;
        z-index: 2;
        background: url("../../assets/images/order/01orderdetail/star-active.png") repeat-x;
        background-size: 15px 13px;
        left: 0;
    }
	 .el-button--primary{
	    color: #fff;
	    background-color: #81d8d0;
	    border-color: #81d8d0;
	  }
	  .el-button--primary:hover{
	    background-color: #81d8d0;
	    border-color: #81d8d0;  
	  }
	  .el-button--primary:focus{
	    background-color: #81d8d0;
	    border-color: #81d8d0;  
	  }
	.serviceDialog .el-dialog {
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
</style>