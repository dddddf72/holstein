<template>
    <div>
        <div class="album albumvideo">
            <div>
                <!--<p class="type_title">
                    <el-button slot="trigger" size="small" type="primary">上传视频</el-button>
                </p>  -->
                <div class="pic_img">
                    <div class="pic_img_box">
                        <el-upload class="avatar-uploader"
                                action="上传地址"
                                v-bind:data="{FoldPath:'上传目录',SecretKey:'安全验证'}"
                                v-bind:on-progress="uploadVideoProcess"
                                v-bind:on-success="handleVideoSuccess"
                                v-bind:before-upload="beforeUploadVideo"
                                v-bind:show-file-list="false">
                            <el-button slot="trigger" size="small" type="primary" >上传视频</el-button>
                            <video v-if="videoForm.showVideoPath !='' && !videoFlag"
                                v-bind:src="videoForm.showVideoPath"
                                class="avatar video-avatar"
                                controls="controls">
                                您的浏览器不支持视频播放
                            </video>
                            <div v-else-if="videoForm.showVideoPath =='' && !videoFlag" data-v-1c9bbdc3="" tabindex="0" class="el-upload el-upload--picture-card" style="width: 150px; height: 150px;margin-left:50px;line-height: 150px;">
                                <i data-v-1c9bbdc3="" class="el-icon-plus"></i>
                            </div> 
                            <!-- <i v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                            class="el-icon-plus avatar-uploader-icon"></i> -->
                            <el-progress v-if="videoFlag == true"
                                        type="circle"
                                        v-bind:percentage="videoUploadPercent"
                                        style="margin-top:7px;"></el-progress>
                        </el-upload>
                    </div>
                </div>
            </div>
            <!--<p class="Upload_pictures" v-if="isShowUploadVideo">
                <span></span>
                <span>最多可以上传1个视频，建议大小100M，推荐格式mp4</span>
            </p>  -->
        </div>
        <div data-v-c9248516="" class="el-dialog__wrapper" style="display: none;">
            <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 35%;">
                <div class="el-dialog__header">
                    <span class="el-dialog__title"></span>
                    <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                        <i class="el-dialog__close el-icon el-icon-close"></i>
                    </button>
                </div>
            </div>
        </div> 
        <!--<div data-v-c9248516="" class="el-dialog__wrapper" style="display: none;">
            <div role="dialog" aria-modal="true" aria-label="图片素材库" class="el-dialog" style="margin-top: 15vh; width: 70%;">
                <div class="el-dialog__header">
                    <span class="el-dialog__title">图片素材库</span>
                    <button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                </div>
                <div class="el-dialog__footer">
                    <span data-v-c9248516="" class="dialog-footer">
                        <button data-v-c9248516="" type="button" class="el-button el-button--default el-button--small">
                        <span>取 消</span>
                        </button> 
                        <button data-v-c9248516="" type="button" class="el-button el-button--primary el-button--small">
                            <span>确 定</span>
                        </button>
                    </span>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        props:{
            content:{
                type:String,
                required:false
            }
        },
        data() {
            return {
                /* 上传视频 */
                videoFlag: false,
                //是否显示进度条
                videoUploadPercent: "",
                //进度条的进度，
                isShowUploadVideo: false,
                //显示上传按钮
                videoForm: {
                    showVideoPath: ''
                },
            }
        },
        methods: {
            //上传前回调
            beforeUploadVideo(file) {
                var fileSize = file.size / 1024 / 1024 < 100;
                if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
                    this.msg("请上传正确的视频格式");
                    return false;
                }
                if (!fileSize) {
                    this.msg("视频大小不能超过100MB");
                    return false;
                }
                this.isShowUploadVideo = false;
            },
            //进度条
            // uploadVideoProcess(event, file, fileList) {
            uploadVideoProcess(file) {
                this.videoFlag = true;
                this.videoUploadPercent = file.percentage.toFixed(0) * 1;
            },
            //上传成功回调
            // handleVideoSuccess(res, file) {
            handleVideoSuccess(res) {
                this.isShowUploadVideo = true;
                this.videoFlag = false;
                this.videoUploadPercent = 0;
                
                //前台上传地址
                //if (file.status == 'success' ) {
                //    this.videoForm.showVideoPath = file.url;
                //} else {
                //     this.msg("上传失败，请重新上传");
                //}

                //后台上传地址
                if (res.Code == 0) {
                    this.videoForm.showVideoPath = res.Data;
                } else {
                    this.msg(res.Message);
                }
            },
        },
    }
</script>

<style scoped>

</style>