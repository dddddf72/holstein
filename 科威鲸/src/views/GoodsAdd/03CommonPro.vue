<template>
    <div class="home">
        <Holstein></Holstein>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div class="addTitle">新增商品</div>
                <!-- <el-steps :active="active" align-center process-status="process" finish-status="success">
                    <el-step title="基本信息填写" ></el-step>
                    <el-step title="售卖信息填写" ></el-step>
                    <el-step title="常见问题与需求" ></el-step>
                    <el-step title="完成注册" ></el-step>
                </el-steps> -->
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/基本信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">基本信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-success">售卖信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">3</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">常见问题与需求</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; max-width: 25%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">提交完成</div>
                            
                        </div>
                    </div>
    </div>
                <div class="multiFlex dispalyFlex" style="margin-top: 30px;">
                    <div class="addTitle">常见问题解答</div>
                    <i class="el-icon-circle-plus" style="font-size:1em;font-weight:bold"><span style="margin-left:5px">添加常见问题</span> </i>
                </div>
                <div class="stepsContent1">
                    <div style="margin-top: 20px;">
                        <div class="tableTitle">为您的卖家添加问题和答案</div>
                        <el-input v-model="input" placeholder="添加一个问题。例如：你能翻译成英文吗" style=""></el-input>
                        <div class="el-textarea" style="height: 175px;margin: 20px 0px;">
                            <textarea autocomplete="off" placeholder="添加一个答案。例如：我能将英文翻译成中文。" class="el-textarea__inner" style="min-height: 33px;height: 175px;"></textarea>
                        </div>
                        <div class="" style="margin:0 auto;width:300px">
                            <button type="button" class="el-button el-button--default" style="">
                                <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--default" style="margin-left: 20px; background: rgb(129, 216, 208);color:#fff">
                                <span>添加</span>
                            </button>
                        </div>
                    </div>
                    <div style="margin-top: 70px;">
                        <div class="addTitle">向买家提出要求</div>
                        <div class="" style="color: #666666;margin:28px 0">添加问题以帮助买家为您提供开始处理他们的订单所需的确切信息</div>
                        <el-button style="background: rgb(129, 216, 208);color:#fff" @click="dialogVisible = true">添加要求</el-button>
                        <el-dialog
                            title="添加要求"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <div style="">
                                <textarea autocomplete="off" placeholder="索取必要的详细信息，例如尺寸、品牌准则等。" class="el-textarea__inner" style="min-height: 33px;height: 185px;"></textarea>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取消</el-button>
                                <el-button type="primary" @click="dialogVisible = false" style="background: rgb(129, 216, 208);color:#fff">添加</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </div>
                
                <div class="nextStepBtn" style="width:300px;margin:30px auto">
                    <el-button style="" @click="$router.back(-1)">上一步</el-button>
                    <el-button style="margin-left:20px;background: rgb(129, 216, 208);color:#fff" @click="next">提交</el-button>
                </div>
            </div>
        </div>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
// import Editor from "@/components/Editor";
// import EditorBar  from "../../components/Editor";
// import Holstein from '@/components/Nav/Holstein.vue'
import Holstein from '../../components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
export default {
    components: {
        // EditorBar,
        Holstein,Footer
        },
    data() {
        return {
            dialogVisible: false,
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
    
    methods: {
        back(){

        },
        next(){
            this.$router.push({name:'04GoodsAddDone'})
        },
        addReq(){
            this.$alert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                message: `action: ${ action }`
                });
            }
            });
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(function()  {
                done();
            })
            .catch(function()  {});
        }

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
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 50px auto;
    }
    .el-steps{
        margin: 40px 0 0 0;
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
    .tableTitle{
        font-size: 18px;
        color: #000000;
        font-weight: bold;
        margin: 41px 0 18px 0;
    }
    .el-button{
        width: 140px;
    }
    /*  */
    .el-dialog__header .el-dialog__title{
        color: #000000;
        font-weight: bold;
    }
</style>