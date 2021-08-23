<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" title="查看竞标详情" width="35%">
    <el-form ref="form1" :model="form1" :rules="rules" size="small" label-width="120px">
      <el-form-item label="需求类目：" prop="code">
        <el-input v-model="form1.cateName" disabled style="width: 300px;" />
      </el-form-item>
      <el-form-item label="需求预算：">
        <el-input v-model="form1.orderAmount" disabled style="width: 300px;" />
      </el-form-item>
      <el-form-item label="需求描述：">
        <el-input v-model="form1.demandDesc" disabled style="width: 300px;" />
      </el-form-item>
      <el-form-item label="商家描述：">
        <el-input v-model="form1.merchantDesc" disabled style="width: 300px;" />
      </el-form-item>
      <el-form-item label="商家报价：">
        <el-input v-model="form1.merchantBudget" disabled style="width: 300px;" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="cursor:pointer">
      <el-button type="text" @click="dialog = false ">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>
<script>
//   import {add, edit} from '@/api/yxExpress'
  export default {
  props: {
    joinbid1: {
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
        userId:'',
        // isAdd:false,
      loading: false, dialog: false,
      form1: {
        id: '',
        cateName: '',
        orderAmount: '',
        demandDesc: '',
        merchantDesc: '',
        merchantBudget:''
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
        console.log(this.userId,"商家userId")
  },
    methods: {
        cancel(done) {
          done();
                // this.$confirm('确认关闭？')
                // .then(_ => {
                //     done();
                // })
                // .catch(_ => {});
    //   this.$refs['form'].resetFields()
            this.form1 = {
                id: '',
                username: '',
                orderAmount: '',
                demandDesc:'',
                merchantDesc: '',
                merchantBudget:'',
            }
        },
        doSubmit(done) {
          done();
          this.form1 = {
                id: '',
                username: '',
                orderAmount: '',
                demandDesc:'',
                merchantDesc: '',
                merchantBudget:'',
            }
        },
    }
}
</script>

<style scoped>

</style>
