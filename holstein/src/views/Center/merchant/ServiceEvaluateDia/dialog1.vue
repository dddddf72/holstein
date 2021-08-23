<template>
    <!-- 商品详情 -->
    <el-dialog
        :append-to-body="true"
        :close-on-click-modal="false"
        :before-close="cancel"
        :visible.sync="dialog"
        title="查看评论详情"
        width="50%"
    >
        <el-form
            ref="form"
            :model="form"
            :rules="rules"
            size="small"
            label-width=""
            style="padding: 30px"
        >
            <!--<el-form-item label="商家头像：" prop="code">
                <div style="width: 45px; height: 46px">
                    <img src="../../../../assets/images/detail/组 21.png" alt="" />
                </div>
            </el-form-item>-->
            <el-form-item label="购买商品编号：" prop="code">
                <el-input v-model="form.orderNo" disabled />
            </el-form-item>
            <el-form-item label="购买商品名称：">
                <el-input v-model="form.serviceName" disabled />
            </el-form-item>
            <el-form-item label="购买商品价格：">
                <el-input v-model="form.orderAmount" disabled />
            </el-form-item>

            <!-- 是否已经评论过 -->

            <!-- 评论内容 -->
            <div v-if="form.isTraceableEvaluation === '0' || form.isTraceableEvaluation === '1'">
                    <el-form-item label="商品评分：" prop="goodScore">
                        <div>
                            <el-rate allow-half="" v-model="form.goodScore" show-text disabled></el-rate>
                        </div>
                    </el-form-item>
                    <el-form-item label="服务评分：" prop="serviceScore">
                        <div class="">
                            <el-rate allow-half="" disabled v-model="form.serviceScore" show-text ></el-rate>
                        </div>
                    </el-form-item>
                    <div v-for="(comment) in form.comment" :key="comment.evaluateId">
                        <div>
                            <el-form-item label="买家评论内容：">
                                <div class="">
                                    <el-input v-model="comment.commentDes" disabled />
                                </div>
                            </el-form-item>
                            <el-form-item label="买家评论图片：">
                                <div class="" style="" v-for="imgfiles in comment.files " :key="imgfiles.fileUrl">
                                    <div style="display:flex;flex-wrap:wrap;justify-content:space-between">
                                        <div>
                                            <img :src="getImgUrl(imgfiles.fileUrl)" alt="" style="width: 100px" />
                                        </div>
                                    </div>
                                </div>
                            </el-form-item>
                            <div v-if="comment.replyId !== null">
                                <el-form-item label="卖家回复评价内容：">
                                    <div class="">
                                        <el-input v-model="comment.replyDes" disabled />
                                    </div>
                                </el-form-item>
                                <el-form-item label="卖家回复图片内容：">
                                    <div class="" v-for="imgrepfiles in comment.replyFiles " :key="imgrepfiles.fileUrl">
                                        <div style="display:flex;flex-wrap:wrap;justify-content:space-between">
                                            <div>
                                                <img :src="getImgUrl(imgrepfiles.fileUrl)" alt="" style="width: 100px" />
                                            </div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- 评论操作 -->
            <div v-else-if="form.isTraceableEvaluation === '0' || form.isTraceableEvaluation === null">
                <!-- 如果是用户角色 且 第一次评论 -->
                <div v-if="form.isTraceableEvaluation == null">
                    <el-form-item label="商品评分：" prop="goodScore">
                        <div>
                            <el-rate allow-half="" v-model="form.goodScore" show-text> </el-rate>
                        </div>
                    </el-form-item>
                    <el-form-item label="服务评分：" prop="serviceScore">
                        <div class="">
                            <el-rate allow-half="" v-model="form.serviceScore" show-text></el-rate>
                        </div>
                    </el-form-item>
                </div>
                <!-- 用户回复 -->
                <!-- 判断是角色 -->
                    <el-form-item label="用户-评论内容：">
                        <div class="">
                            <el-input v-model="form.evaluateDes"  />
                        </div>
                    </el-form-item>
                    <el-form-item label="用户-评论图片：">
                        <div class="upload-file">
                            <el-upload
                                accept="image/*"
                                ref="upload"
                                multiple
                                :limit="5"
                                action="http://api.woniuskill.com/api/uploadImage"
                                :on-preview="handlePreview"
                                :on-change="handleChange"
                                :on-remove="handleRemove"
                                :on-exceed="handleExceed"
                                :file-list="fileJson"
                                :auto-upload="false"
                            >
                                <el-button slot="trigger" size="small" type="primary"
                                    >选取文件</el-button
                                >
                                <div slot="tip" class="el-upload__tip">
                                    只能上传图片，且不超过100M
                                </div>
                            </el-upload>
                        </div>
                    </el-form-item>
            </div>
        </el-form>
        <div
            slot="footer"
            class="dialog-footer dispalyFlex"
            style="width: 400px; margin: 20px auto"
            v-if="form.replyTime == null"
        >
            <el-button @click="dialog = false" style="background: #81d8d0; color: #fff"
                >取消</el-button
            >
            <el-button
                :loading="loading"
                type="primary"
                @click="doSubmit"
                style="background: #81d8d0; color: #fff"
                >确认</el-button
            >
        </div>
    </el-dialog>
</template>

<script>
// import GoodsHttp from '@/model/GoodsHttp';
import UserHttp from '@/model/UserHttp';

export default {
    props: {
        joinbid: {
            type: String
            //   required: true
        }
    },
    data() {
        var validateinteger = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入大于零的正整数'));
            } else if (value <= 0) {
                callback(new Error('请输入大于零的正整数'));
            } else {
                callback();
            }
        };
        return {
            dialogContImgUrl: '',
            dialogContImgVisible: false,
            fileJson: [
                // {
                //   "fileType": 1, //1、图片；2、音频；3、视频；4、文档'
                //     "fileUrl": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                // }
            ],
            userId: '',
            // isAdd:false,
            loading: false,
            dialog: false,
            form: {
                orderNo: '',
                serviceName: '',
                orderAmount: '',
                goodScore: '',
                serviceScore: '',
                evaluateDes: '',
                isTraceableEvaluation: '',
                comment: [],
            },
            rules: {
                merchantDesc: [{ required: false, message: 'please enter', trigger: 'blur' }],
                merchantBudget: [
                    {
                        required: true,
                        message: '请输入大于零的正整数',
                        validator: validateinteger,
                        trigger: 'blur'
                    }
                ]
            },
            type: 0
        };
    },
    mounted() {
        this.userId = JSON.parse(this.$cookie.get('loginInfo')).id;
        // console.log(this.form.isTraceableEvaluation)
    },
    methods: {
        getImgUrl(productImgUrl) {
            return this.getBaseImgUrl(productImgUrl);
        },
        cancel(done) {
          done();
            this.form = {
                orderNo: '',
                serviceName: '',
                orderAmount: '',
                goodScore: '',
                serviceScore: '',
                evaluateDes: '',
                isTraceableEvaluation: '',
                comment: [],
                // files:[]
            };
            this.fileJson=[]
        },
        doSubmit() {
            // if(this.isAdd == false){
            //     this.doEdit()
            // }
            // var fileJson = JSON.stringify(this.fileJson)
            if (this.form.isTraceableEvaluation == null) {
                this.type = 0;
                this.doEva();
            } else if (this.form.isTraceableEvaluation == '0') {
                this.type = 1;
                this.doEva();
            } else {
                this.$message.error('无法进行评价了，仅能查看评价内容');
                this.dialog = false;
                return false;
            }
        },
        doEva() {
            this.$http
                .post('api/serviceEvaluate/comment', {
                    // page: this.currentPage,
                    // size: this.pageSize,
                    goodScore: this.form.goodScore,
                    serviceScore: this.form.serviceScore,
                    evaluateDes: this.form.evaluateDes,
                    serviceId: this.form.serviceId,
                    orderNo: this.form.orderNo,
                    evaluateId: this.userId,
                    files: this.fileJson,
                    type: this.type
                })
                .then((res) => {
                  debugger;
                    console.log(res);
                    var message = res.data.msg.message;
                    // console.log(message)
                    if (message == '成功') {
                        this.$message.success('评论成功');
                        this.$emit('toQuery');
                        this.dialog = false;
                    } else {
                        this.dialog = false;
                        this.$message.error('评论失败');
                    }
                });
        },
        docheck() {},
        //dialog上传图片
        //上传图片
        //【内容图删除事件】
        handleRemove: function (file, fileList) {
            // console.log(file, fileList);
            console.log(file);
            // console.log(fileList);
            console.log(this.fileJson);
            for (var i = 0; i < this.fileJson.length; i++) {
                if (file.fileUrl == this.fileJson[i].fileUrl) {
                    this.fileJson.splice(i, 1);
                }
            }
            console.log(this.fileJson);
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
            var fd = new FormData();
            fd.append('file', fileList[fileList.length - 1].raw);
            var res = await UserHttp.uploadPic(fd);
            var file = {
                fileType: 1,
                fileUrl: res.data[0].fileUrl,
                // name:res.data[0].fileName
            };
            debugger;
            this.fileJson.push(file);
        },
        //内容图上传前的大小 格式的校验
        handleExceed: function (file) {
            var fileType = file.type;
            var isJpg = false;
            if (fileType == 'image/jpeg' || fileType == 'image/png' || fileType == 'image/bmp') {
                isJpg = true;
            }
            if (!isJpg) {
                this.$message({
                    message: '上传的图标只能是jpg、png、bmp格式!',
                    type: 'warning'
                });
            }
            return isJpg;
        }
        //移除数组中的数据
        // Array.prototype.indexOf = function (val) {
        //     for (var i = 0; i < this.length; i++) {
        //         if (this[i] == val) {
        //             return i;
        //         }
        //     }
        //     return -1;
        // },
        // Array.prototype.remove = function (val) {
        //     var index = this.indexOf(val);
        //     if (index > -1) {
        //         this.splice(index, 1);
        //     }
        // },
        //上传图片
        // async uploadPic(data) {
        //
        //     var result = '';
        //     // await UserHttp.uploadPic(wfForm);
        //     // $.utils.ajax( + '/cmsProductController/uploadPic', {
        //     var res = await UserHttp.uploadPic(data);
        //     // console.log(res.data[0].fileUrl)
        //     this.fileJson.push({ fileType: 1, url: res.data[0].fileUrl });
        //     console.log(this.fileJson);
        //     return result;
        // },
    }
};
</script>

<style scoped>
</style>
