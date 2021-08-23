<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" title="确认退款">
    <el-form ref="initData" :model="initData" :rules="rules" size="small" label-width="" style="padding:0 30px">
        <div>
			<table class="searchCriteria">
				<tr style="width: 300px;">
					<td class="searchCriteriaExplain overview">商品名称:</td>
					<td class="searchCriteriaExplain overview" colspan="3" style="text-align: left;">
						{{ initData.serviceName }}
					</td>
				</tr>
				<tr>
					<td class="searchCriteriaExplain">用户名称:</td>
					<td class="searchCriteriaContent" >
						{{ initData.name }}
					</td>
					<td class="searchCriteriaExplain">退款时间:</td>
					<td class="searchCriteriaContent" style="width: 200px;">
						{{ initData.orderTime }}
					</td>
				</tr>
				<tr>
					<td class="searchCriteriaExplain">订单编号：</td>
					<td class="searchCriteriaContent" colspan="3">
						{{ initData.orderNo }}
					</td>
				</tr>
				<tr>
					<td class="searchCriteriaExplain">退款原因：</td>
					<td class="searchCriteriaContent" colspan="3">
						退款金额：{{(initData.refundAmount)}}元；退款百分比：({{initData.refundRate}})
					</td>
				</tr>
				<tr>
					<td class="searchCriteriaExplain">退款金额：</td>
					<td class="searchCriteriaContent" colspan="3">
						<el-radio-group v-model="initData.refundRate">
						    <el-radio label="1"
						        >{{
						            (initData.refundAmount)
						        }}({{initData.refundRate}})</el-radio
						    >
						</el-radio-group>
					</td>
				</tr>
				<tr>
					<td class="searchCriteriaExplain">说明：</td>
					<td class="searchCriteriaContent" colspan="3">
						<el-input
						    type="textarea"
						    :rows="3"
						    v-model="initData.refundRemark"
						    disabled
						></el-input>
					</td>
				</tr>
			</table>
                </div>
    </el-form>
    <div slot="footer" class="dialog-footer dispalyFlex" style="width:400px;margin:20px auto">
      <el-button @click="dialog = false " style="background:#81d8d0;color:#fff">取消</el-button>
      <el-button :loading="loading" @click="subRefund" style="background:#81d8d0;color:#fff">确认退款</el-button>
    </div>
  </el-dialog>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'

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
            checked2:true,
            label:'1',
        userId:'',
        // isAdd:false,
      loading: false, dialog: false,
      initData: {
            id:'',
              serviceName: '',
              name: '',
              orderTime: '',
              orderNo: '',
              refundReason:'',
              refundRate:'',
                refundAmount:'',
                refundRemark:'',
      },
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
            this.initData= {
                id:'',
                serviceName: '',
                name: '',
                orderTime: '',
                orderNo: '',
                refundReason:'',
                refundRate:'',
                refundAmount:'',
                refundRemark:'',
            }
        },
        subRefund() {
            this.$http.post('/api/confirmRefund/' + this.initData.id).then((res) => {
                this.$message.success('申请退款成功');
                this.$emit('toQuery')
                this.$emit('toRefresh')
                this.dialog = false
            });
        },
    }
}
</script>

<style>
.el-dialog{
	width: 650px;
	height: auto;
	border-radius: 2%;
}
.el-dialog__title{
	color: white;
}
</style>
