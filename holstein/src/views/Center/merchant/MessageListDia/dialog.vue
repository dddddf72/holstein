<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" title="竞标需求详情" width="35%">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="">
          <!--<el-form-item label="头像：">
            <div style="width:45px;height:46px"><img src="../../../../assets/images/detail/组 21.png" alt=""></div>
          </el-form-item>-->
          <el-form-item label="发件人：">
              <el-input v-model="form.senderName" disabled></el-input>
          </el-form-item>
          <el-form-item label="收件人：">
              <el-input v-model="form.receiverName" disabled></el-input>
          </el-form-item>
          <el-form-item label="消息内容：">
              <el-input v-model="form.content" disabled></el-input>
          </el-form-item>
          <el-form-item label="时间：">
              <el-input v-model="form.createTime" style="margin-left:10px" disabled>时间：</el-input>
          </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer dispalyFlex" style="width:400px;margin:20px auto">
        <el-button @click="dialog = false " style="background:#81d8d0;color:#fff">取消</el-button>
        <el-button :loading="loading" type="primary" @click="doSubmit" style="background:#81d8d0;color:#fff">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
//   import {add, edit} from '@/api/yxExpress'

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
        userId:'',
        // isAdd:false,
      loading: false, dialog: false,
      form: {
              id: '',
              senderName: '',
              receiverName: '',
              content: '',
              isShow: ''
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
            this.form = {
                  id: '',
                  senderName: '',
                  receiverName: '',
                  content: '',
                  isShow: ''
              }
        },
        doSubmit(done) {
          done();
                this.$emit('toQuery');
            this.form= {
              id: '',
              senderName: '',
              receiverName: '',
              content: '',
              isShow: ''
            }
        },
    }
}
</script>

<style scoped>

</style>
