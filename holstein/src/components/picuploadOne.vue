<template>
    <div>

    <el-upload
        action="action"
        list-type="picture-card"
        accept=".jpg,.jpeg,.png"
        :class="{ hide: hideUpload }"
        :on-preview="handleContImgPreview"
        :on-remove="handleContImgRemove"
        :before-upload="beforeUploadImage"
        :limit="1"
        :on-exceed="exceedTips"
        :http-request="uploadImage"
        :file-list="imageList"
        :on-change="aab"
    >
        <!-- <i class="el-icon-plus"></i> -->
        <img
            v-if="
                businessInf.headPhoto === '' ||
                businessInf.headPhoto === null
            "
            src="@/assets/images/regist/商家信息/组 14(1).png"
            width="150px"
            height="150px"
        />
        <img
            v-else
            :src="getImgUrl(businessInf.headPhoto)"
            width="150px"
            height="150px"
        />
    </el-upload>
    <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
        <img width="300px" height="300px" :src="dialogContImgUrl" />
    </el-dialog>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                //上传头像
            hideUpload: false,
            imageList: [],
            dialogContImgVisible: false,
            dialogContImgUrl: '',
            //
            }
        },
        methods: {
            //上传头像
                aab: function (file, fileList) {
                   // debugger;
                    // var url = file.url;
                    // this.businessInf.headPhoto = file.url.split(9000)[1];
                    this.hideUpload = fileList.length >= 0;
                },
                //【图片删除事件】
                handleContImgRemove: function (file, fileList) {
                    this.hideUpload = fileList.length >= 1;
                    this.businessInf.headPhoto = null;
                },
                //【判断图片格式】
                beforeUploadImage(file) {
                    if (['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.type) == -1) {
                        this.$message.error('请上传正确的图片格式');
                        return false;
                    }
                },
                //上传头像
                uploadImage(params) {
                    //debugger;
                    let form = new FormData();
                    form.append('image', params.file);
                    this.$http.post('http://api.woniuskill.com/api/uploadImage', form).then((res) => {
                       // debugger;
                        this.businessInf.headPhoto = res.data[0].fileUrl;
                    });
                },
                //控制图片张数
                exceedTips: function () {
                    this.$message.error('最多只能上传1张图片');
                },
                //【内容图片预览事件】
                handleContImgPreview: function (file) {
                    this.dialogContImgUrl = file.url;
                    this.dialogContImgVisible = true;
                },
        },  
    }
</script>

<style scoped>

</style>