<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" title="查看资金托管详情">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="" style="padding-left:30px">
                                <div>
                                    <div class="overview">{{form.serviceName}}</div>
                                    <div class="dispalyFlex">
                                        <div class="reqDetail" style="margin-top:20px">
                                            <div class="dispalyFlex"  style="width: 527px;">
                                                <div>普通用户-{{form.name}}</div>
                                                <div style="margin-left:100px">{{form.orderTime}}</div>
                                            </div>
                                            <div>订单编号：{{form.orderNo}}</div>
                                            <div style="display:flex;align-items:center">
                                                <div>资金托管</div>
                                                <div style="margin-left:20px;display:flex;align-items:center">
                                                    ￥
                                                    <el-input :placeholder="form.orderAmount" disabled v-model="form.orderAmount" onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                </div>
                                            </div>
                                            <div>
                                                <el-checkbox v-model="checked2" disabled>第三方支付</el-checkbox>
                                                <el-radio-group v-model="fundForm.payType" size="mini" style="margin-left:30px">
                                                    <el-radio :label="1">
                                                        <img src="@/assets/images/order/02fundtrusteeship/微信.png" alt="">
                                                    </el-radio>
                                                    <el-radio :label="2">
                                                        <img src="@/assets/images/order/02fundtrusteeship/支付宝.png" alt="">
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
                                :visible.sync="payDiaVisible"
                            >
                                <div style="text-align:center"><img :src="payCodeImg"></div>
                            </el-dialog>
    <div slot="footer" class="dialog-footer dispalyFlex" style="width:30%;margin:20px auto" v-if="form.replyTime==null">
      <el-button @click="dialogVisiblefundfalse" style="background:#81d8d0;color:#fff">取消</el-button>
      <el-button :loading="loading" @click="payInzfbfund" style="background:#81d8d0;color:#fff">确认支付</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import UserHttp from '@/model/UserHttp'
  export default {
  props: {
    joinbid: {
        type: String,
    //   required: true
    }
  },
  data() {
    var validateinteger = (rule,value,callback)=>{
        if(value === ""){
            callback(new Error("请输入大于零的正整数"))
        } else if(value<=0) {
            callback(new Error("请输入大于零的正整数"));
        }else {
            callback();
        }
    }
    return {
            // ,
            dialogContImgUrl:'',
            dialogContImgVisible:false,
            checked2:true,
            payDiaVisible: false,
            payCodeImg:'',
            fundForm: {
                // addAmountRemark: '',
                // orderId: '',
                // orderAmount: '',
                payType: 1
            },


            
        userId:'',
        timer:'',
        // isAdd:false,
      loading: false, dialog: false,
      form: {},
      rules: {
        merchantDesc: [
          { required: false, message: 'please enter', trigger: 'blur' }
        ],
        merchantBudget: [
          { required: true, message: '请输入大于零的正整数',validator:validateinteger, trigger: 'blur' }
        ]
      }
    }
  },
  mounted(){
      this.userId = JSON.parse(this.$cookie.get("loginInfo")).id;
  },
    methods: {
        cancel(done) {
          done();
            this.form= {
              serviceName: '',
              username: '',
              orderTime: '',
              orderNo: '',
              orderAmount:''
            }
        },
        dialogVisiblefundfalse(){
          this.dialog = false
          clearInterval(this.timer);
          this.payDiaVisible = false;
          return false
        },
         payInzfbfund() {
            let dt = {
                orderNo: this.form.orderNo,
                amount: this.form.orderAmount
            }
            this.$http.post('/api/wx/trusteeship',dt).then(()=>{
                let url = '';
                if (this.fundForm.payType == 2) {
                    url = '/api/zfb/trusteeship'
                    
                } else {
                    url = '/api/wx/trusteeship';
                }
                

                this.$http.post(url , dt).then(res => {
                    
                    if (this.fundForm.payType == 2) { // 支付宝支付跳转页面
                        window.location.href = res.data.biz
                        this.dialog = false
                    } else {
                        this.payDiaVisible = true;
                        this.payCodeImg = res.data.biz;
                    }
                    let link = '/api/queryPayStatus'
                    if (this.fundForm.payType === 2) {
                        link = '/api/zfb/queryPayStatus'
                    }
                    // 检查支付状态
                    this.timer = setTimeout(() => {
                        this.$http.get(link,{
                            params: {
                                orderNo: dt.orderNo,
                            }
                        }).then(val => {
                            
                            if (val.data.msg.message == '支付成功') {
                                this.$message.success('支付成功');
                                clearInterval(this.timer);
                                this.payDiaVisible = false;
                                this.$emit('toQuery')
                                this.$emit('toRefresh')
                                this.dialog = false
                            }
                        })
                    }, 5000);
                })
            })
        },
    }
}
</script>

<style scoped>

</style>
