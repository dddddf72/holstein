<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">个人设置</el-breadcrumb-item>
            <el-breadcrumb-item>修改技能专长</el-breadcrumb-item>
        </el-breadcrumb>
        
        <div class="merchantRegist">
            <div class="merchantRegistration">
                
                <div class="stepsContent" style="height:770px;margin-top:70px;">
                    
                    <div class="stepsContentR" style="width:560px;">
                        <div style="display:flex">
                            <div class="stepsTitle" style="font-size:30px;font-weight:bold;width:130px;height:55px;display:block">
                                技能专长
                            </div>
                            <div  style="margin-left:100px">
                                <el-button v-if="!inputVisible" class="" @click="showInput">添加专长</el-button>
                            </div>
                        </div>
                        <div>
                            <el-tag :key="index" class="button-new-tag"
                                v-for="(tag,index) in dynamicTags" style="margin:10px 10px"
                                closable
								:type="tag.type"
                                :disable-transitions="false"
                                @close="handleClose(tag)">
                                {{tag.skill}}（{{tag.skillLevel}}）
                            </el-tag>
                        </div>
                        <el-form class="el-form login-form el-form--label-left" :model="userSkillParams" status-icon :rules="rules1" ref="userSkillParams" v-if="inputVisible">
                            <el-form-item class="el-form-item is-required el-form-item--small" label="请输入技能名称（例如JAVA）" prop="skill">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <el-input class="input-new-tag" style="margin:10px 0"
                                                    v-model="userSkillParams.skill" 
                                                    ref="saveTagInput"  
                                                    placeholder="请输入技能名称（例如JAVA）">
                                    </el-input>
                                </div>
                            </el-form-item>
							<el-form-item class="el-form-item is-required el-form-item--small" label="技能水平" prop="skillLevel">
                                <div class="el-form-item__content" style="margin-left: 0px;">
                                    <el-select  v-model="userSkillParams.skillLevel" placeholder="技能水平"  ref="saveTagInput">
                                                <el-option label="初级" value=1></el-option>
                                                <el-option label="中级" value=2></el-option>
                                                <el-option label="高级" value=3></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                        </el-form>
                        <div class="doAdd" style="margin:20px 0;cursor:pointer">
                            <el-button v-if="inputVisible" @click="doCancel">取消</el-button>
                            <el-button v-if="inputVisible" @click="handleInputConfirm('userSkillParams')">添加</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dispalyFlex" style="width:500px;margin-left: 150px">
                            <el-button style="background:#81d8d0;color:#fff" @click="jumpidentyAuth">保存修改</el-button>
                        </div>
    </div>
</template>
<script>
    import Footer from '@/components/Footer/footer.vue'
    export default {
        components: {
            Footer
    },
    data() {
        var validateCode = (rule,value,callback)=>{
            if(value === "" || value === null || value === undefined){
                callback(new Error("选项不能为空"))
            } else {
                callback();
            }
        }
        return {
            active:0,
            dynamicTags: [],
            inputVisible: true,
            userSkillParams: {
                skill: "",
                skillLevel:''
            },
            userSkill:'',
            userSkillLevel:'',
            loginInfo:JSON.parse(this.$cookie.get("loginInfo")),
            rules1: {
                skill:[
                    {required:true,message: "请选择技能",validator: validateCode,trigger: "blur"}
                ],
                skillLevel:[
                    {required:true,message: "请选择技能等级",validator: validateCode,trigger: "blur"}
                ]
            },
        }
    },
    mounted() {
        var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
      this.$http.post('api/auth/userSkill?id='+loginInfo.id,{}).then((res)=>{
        if(res.status==200){
          var data = res.data;
          for (var i = 0; i < data.length; i++) {
            let inputValue = {
              skill:data[i].skill,
              skillLevel:data[i].skillLevel,
              type:''
            };
              this.dynamicTags.push(inputValue);
          }
        }else{

        }
      })
    },
    methods: {
        /*  */
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(()=> {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        async handleInputConfirm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid){
					var skillLevel = this.userSkillParams.skillLevel
					var skillType = '';
					if(skillLevel == '3'){
					    skillType = "success"
						skillLevel = "高级"
					}else if(skillLevel == '2'){
						skillType = "warning"
					    skillLevel = "中级"
					}else{
						skillType = "info"
					    skillLevel = "初级"
					}
                    let inputValue = {
                        skill:this.userSkillParams.skill,
                        skillLevel:skillLevel,
                        type:skillType
                    };
                    if (inputValue) {
                        this.dynamicTags.push(inputValue);
                    }
                    this.inputVisible = false;
                    this.userSkillParams = {};
                    console.log(this.dynamicTags)
                
                }else{
                    this.$message.error("请检查技能专长信息是否填写正确")
                    return false
                }
            })
            
        },
        doCancel(){
            this.$data.inputVisible = false
        },
        /*  */
        async jumpidentyAuth(){
            if(this.dynamicTags.length==0){
                this.$message.error("请最少添加一项技能专长")
                return false
            }else{
                this.$http.post('/api/register',{
                    userSkillParams:this.dynamicTags,
                    username:JSON.parse(this.$cookie.get("loginInfo")).username,
                }).then((res)=>{
                    
                    var message = res.data.msg.message;
                    if(message=="成功"){
                    this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                        // this.$message.success('成功添加技能专长')
                        this.$router.push('03identityAuth');
                    }else{
                        this.$message.error(message);
                        return
                    }
                })
            }
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
        height: 100px;
        background-color: #fff;
        box-shadow:0px -3px 15px 3px #606266 ;
    }
    .navCenter{
        width: 1280px;
        height: 100px;
        position: relative;
    }
    .logo{
        width: 260px;
        height: 100px;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
    /*  */
    .navTitleContext{
        width: 1280px;
        height: 104px;
        display: flex;
        position: absolute;
        line-height: 100px;
        margin: 0 0 0 10px;
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
        position: absolute;
        top: 13px;
        right: 0;
    }
    .firstNavR div{
        margin: 0 14px;
    }
    .shortLine{
        width: 1px;
        height: 9px;
    }
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
    }
    /*  */
    .merchantRegist{
        width: 100%;
        height: 770px;
    }
    .merchantRegistration{
        width: 1280px;
        height: 770px;
        margin: 0 auto;
    }
    .el-step__head.is-process {
        color: #303133 !important;
        border-color: #303133 !important;
    }
    .el-step__head.is-success,.el-step__title.is-success {
        color: #81d8d0 !important;
        border-color: #81d8d0 !important;
    }
    /*  */
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
    }

    .cert-select-tags {
        display: flex;
        flex-wrap: wrap;
        width: 88%;
        float: left;
    }
    .cert-select-tags .cert-select-tag {
        white-space: nowrap;
        padding: 0 14px;
        height: 45px;
        line-height: 45px;
        margin: 12px 12px 0 0;
    }
    .cert-select-tags .cert-select-remove {
        width: 16px;
        height: 16px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        margin: -2px -10px 0 8px;
        background: #d0d0d0;
        border-radius: 50%;
    }
    a,a:hover {
        text-decoration: none;
    }
    .cert-select-tags .cert-select-remove:before {
        transform: translate(-50%,-50%) rotate(
    45deg
    );
    }
    .cert-select-tags .cert-select-remove:after {
        transform: translate(-50%,-50%) rotate(
    -45deg
    );
    }
    .cert-select-tags .cert-select-remove:after,.cert-select-tags .cert-select-remove:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 1px;
        background: #fff;
    }
</style>