<template>
    <div>
    <el-upload action="aaa"
	:http-request="uploadProductPic"
	accept="image/*"
	list-type="picture-card"
	:on-preview="handleContImgPreview"
	:on-remove="handleContImgRemove"
	:limit="5"
	:on-exceed="exceedTips"
	:file-list="productPicPathList">
<i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogContImgVisible" append-to-body>
<img width="100%" :src="dialogContImgUrl.url" />
</el-dialog>

    </div>
</template>

<script>
import UserHttp from '../../model/UserHttp';
// import UserHttp from '@/model/UserHttp'
    export default {
        props: {
            uploadpics:{
                type:String
            }
        },
        data() {
            return {
                dialogContImgVisible:false,
                dialogContImgUrl:"",
                productPicPathList:[
                    {
                        "name": "food.jpeg", 
                        "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                    }, 
                    {
                        "name": "food2.jpeg", 
                        "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                    }
                ]
            }
        },
        methods: {
             //【内容图删除事件】
                handleContImgRemove: function (file, fileList) {
                    console.log(file, fileList);
                    app.productPicList.remove(file.name);
                },
                
                //内容图数量限制3张
                exceedTips: function () {
                    this.$message.error('最多只能上传五张图片')
                },
                
                //【内容图片预览事件】
                handleContImgPreview: function (file) {
                    this.dialogContImgUrl = file.url;
                    this.dialogContImgVisible = true;
                },
                
                //上传内容图
                uploadProductPic: function (file) {
                    console.log(file)
                    var fd = new FormData();
                    fd.append('file', file.file);
                
                    var content = this.uploadPic(fd);
                    console.log(content)
                    app.productPicList.push(content.attachmentId);
                },
                
                //内容图上传前的大小 格式的校验
                uploadProductPicBefore: function (file) {
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
                },
                
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
                async uploadPic(data) {
                    var result = "";
                    //debugger
                    // await UserHttp.uploadPic(wfForm);
                    // $.utils.ajax( + '/cmsProductController/uploadPic', {
                    var res = await UserHttp.uploadPic(data)
                    console.log(res.data[0].fileUrl)
                    return result;
                }
            
        },      

    }
</script>

<style scoped>

</style>