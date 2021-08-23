<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" title="交付文件">
    <el-form ref="form1" :model="form1" :rules="rules" size="small" label-width="130px" label-position="left" style="padding:20px 30px 0px">
        <el-form-item label="文件名称：" required prop="fileName">
            <el-input v-model="form1.fileName" placeholder="请输入文件名称"></el-input>
        </el-form-item>
        <el-form-item label="文件描述：" required prop="fileDesc" >
            <el-input v-model="form1.fileDesc" placeholder="请输入文件描述"></el-input>
        </el-form-item>
        <el-form-item label="展示文件" required prop="fileJson">
                <div class="upload-file">
                    <el-upload
                            accept="image/* ,.pdf"
                            ref="upload"
                            multiple
                            :limit="5"
                            action="http://api.woniuskill.com/api/uploadImage"
                            :on-preview="handlePreview"
                            :on-change="handleChange"
                            :on-remove="handleRemove"
                            :on-exceed="handleExceed"
                            :file-list="fileJsons"
                            :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <div slot="tip" class="el-upload__tip">可上传多个文件，仅支持图片，PDF文件</div>
                    </el-upload>
                    <el-dialog
                        :visible.sync="dialogContImgVisible"
                        append-to-body
                    >
                        <img width="150px" height="150px" :src="dialogContImgUrl" />
                    </el-dialog>
                </div>
        </el-form-item>
        <el-form-item label="交付文件"  required prop="demandFile">
            <el-upload drag
            action="http://api.woniuskill.com/api/uploadFile" 
            :limit="1" multiple :file-list="demandFiles"
            accept=".rar ,.zip, "  
            :on-success="uploadSuccess">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传附件</em></div>
                <div class="el-upload__tip" slot="tip">只能上传<span style="color: #cc0000">一个压缩包</span>文件</div>
            </el-upload>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer dispalyFlex" style="width:400px;margin:0px auto 20px">
      <el-button @click="cancel " style="background:#81d8d0;color:#fff">取消</el-button>
      <el-button :loading="loading"  @click="publish('form1')" style="background:#81d8d0;color:#fff">确认交付</el-button>
    </div>
  </el-dialog>
</template>

<script>
import UserHttp from '@/model/UserHttp'

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
            dialogContImgUrl:'',
            dialogContImgVisible:false,
            
        userId:'',
        // isAdd:false,
      loading: false, dialog: false,
      form1: {
              id: '',
              fileName: '',
              fileDesc: '',
      demandFile:'',fileJson:[],
      },
      fileJsons:[],
            demandFiles:[],

      rules: {
        fileName: [
          { required: true, message: '请输入文件名', trigger: 'blur' }
        ],
        fileDesc: [
          { required: true, message: '请输入文件描述', trigger: 'blur' }
        ],
        demandFile: [
          { required: true, message: '请输入上传交付文件', trigger: 'blur' }
        ],
        fileJson: [
          { required: true, message: '请输入上传展示文件', trigger: 'blur' }
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
          this.$emit('toQuery')
          this.dialog = false
            this.form1= {
              fileName: '',
              fileDesc: '',
              demandFile:[],
              fileJson:[]
            }
            
        this.fileJsons=[];
            this.demandFiles=[];
        },
        //上传图片
        //【内容图删除事件】
        handleRemove: function (file, fileList) {
            for(var i=0;i<this.fileJsons.length;i++){
              if(file.fileUrl==this.fileJsons[i].fileUrl){
                this.fileJsons.splice(i,1);
                this.form1.fileJson =this.fileJsons;
              }
            }
        },
        //内容图数量限制3张
        exceedTips: function () {
            this.$message.error('最多只能上传五张图片');
        },
        //【内容图片预览事件】
        handlePreview: function (file) {
            this.dialogContImgUrl = this.getBaseImgUrl(file.fileUrl);
            this.dialogContImgVisible = true;
        },
        //上传内容图
        async handleChange(file, fileList) {
          // this.fileUrl = fileList;
          debugger  
            var fd = new FormData();
            fd.append('file', fileList[fileList.length - 1].raw);
            var res = await UserHttp.uploadPic(fd)
            var file={
                "fileType":1,
                "fileUrl":res.data[0].fileUrl,
                "fileName":res.data[0].fileName,
                "name":res.data[0].fileName
            }
            this.fileJsons.push(file);
            this.form1.fileJson=this.fileJsons;
        },
        //内容图上传前的大小 格式的校验
        handleExceed: function (file) {
            var fileType = file.type;
            var isJpg = false;
            if (fileType == 'image/jpeg' || fileType == 'image/png' || fileType == 'image/bmp' || fileType == 'pdf') {
                isJpg = true;
            }
            if (!isJpg) {
                this.$message({
                    message: '上传的图标只能是jpg、png、bmp格式，且最多上传五个文件',
                    type: 'warning'
                });
            }
            return isJpg;
        },

        //交付文件
        uploadSuccess(file) {
          debugger
            this.form1.demandFile = file[0].fileUrl
        },
        async publish(formName){
             
             this.$refs[formName].validate((valid) => {
                if(valid){
                    let url = '/api/deliveryDoc'
                        this.$http.post(url, 
                            {
                                    orderId:this.form1.id,
                                    fileName:this.form1.fileName,
                                    fileDesc:this.form1.fileDesc,
                                    fileUrl:this.form1.demandFile,
                                    fileJson:JSON.stringify(this.form1.fileJson),
                                    userId:this.userId
                            }
                        ).then(val => {
                            if (val.data.msg.message == '成功') {
                                this.$message.success('文件交付成功');
                                this.$emit('toQuery')
                                this.dialog = false
                                return false
                            }
                        })

                }else{
                    // this.releaseDilaog = false;
                    this.$message.error("请检查文件是否已交付");
                    this.$emit('toQuery')
                                this.dialog = false
                    return false;
                }
            })
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
