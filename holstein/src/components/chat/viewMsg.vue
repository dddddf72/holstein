<template>
    <el-dialog
        :append-to-body="true"
        :close-on-click-modal="false"
        :before-close="cancel"
        :visible.sync="dialog"
        title="交付文件"
    >
        <el-form
            ref="form1"
            :model="form1"
            :rules="rules"
            size="small"
            label-width=""
            label-position="left"
            style="padding:20px 30px 0px"
        >
            <el-container>
                <section class="wrapper">
                    <header>
                        <button class="tab-switch active notifications">
                            <span class="_1AB8XqH tab-icon" style="width: 14px; height: 14px;"
                                ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M3.5 4C1.6 4 0 5.6 0 7.5C0 9.4 1.6 11 3.5 11H3.6L6.2 15.3C6.6 16 7.5 16.2 8.3 15.8C9 15.4 9.2 14.5 8.8 13.7L7.1 11H9L16 15V0L9 4H3.5Z"
                                        ></path>
                                    </g></svg></span
                            >Notifications (0)</button
                        ><button class="tab-switch conversations">
                            <span class="_1AB8XqH tab-icon" style="width: 14px; height: 14px;"
                                ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 6.83269C16 3.60649 12.4196 1 8 1C3.58036 1 0 3.6156 0 6.83269C0 8.68275 1.17857 10.3323 3.01786 11.3986C2.59821 12.9206 1.95536 13.4674 1.39286 14.1144C1.25893 14.2785 1.10714 14.4152 1.15179 14.643C1.15179 14.643 1.15179 14.643 1.15179 14.6521C1.19643 14.8709 1.38393 15.0167 1.58036 14.9985C1.92857 14.9529 2.27679 14.8891 2.59821 14.798C4.14286 14.397 5.53571 13.6497 6.70536 12.5925C7.125 12.638 7.5625 12.6654 8 12.6654C12.4196 12.6654 16 10.0589 16 6.83269Z"
                                    ></path></svg></span
                            >Inbox (0)
                        </button>
                    </header>
                    <div class="scroll-wrapper">
                        <div class="drawer-empty">
                            <strong>No Notifications</strong>
                            <p>
                                ​Browse our amazing catalog of Gigs or offer your talent on Fiverr.
                            </p>
                        </div>
                    </div>
                    <footer class="drawer-footer">
                        <button class="btn-toggle-sound on"><i></i></button
                        ><a
                            href="/users/jaydaddd/edit/notifications"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-settings"
                        ></a>
                    </footer>
                </section>
            </el-container>
        </el-form>
        <div
            slot="footer"
            class="dialog-footer dispalyFlex"
            style="width:400px;margin:0px auto 20px"
        >
            <el-button @click="cancel" style="background:#81d8d0;color:#fff">取消</el-button>
            <el-button
                :loading="loading"
                @click="publish('form1')"
                style="background:#81d8d0;color:#fff"
                >确认交付</el-button
            >
        </div>
    </el-dialog>
</template>

<script>
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
            userId: '',
            // isAdd:false,
            loading: false,
            dialog: false,
            form1: {
                sender: '',
            },
            records:[],
            fileJsons: [],
            demandFiles: [],
            rules: {
                fileName: [{ required: true, message: '请输入文件名', trigger: 'blur' }],
                fileDesc: [{ required: true, message: '请输入文件描述', trigger: 'blur' }],
                demandFile: [{ required: true, message: '请输入上传交付文件', trigger: 'blur' }],
                fileJson: [{ required: true, message: '请输入上传展示文件', trigger: 'blur' }]
            }
        };
    },
    mounted() {
        this.userId = JSON.parse(this.$cookie.get('loginInfo')).id;
    },
    methods: {
      viewlist(){
        this.$http.post(`/api/Chat/Online/findChatRecordByUser/receiver=${this.userId}&sender=${form.sender}`).then(res=>{
          this.records = res.data.records
        })
      },
        cancel(done) {
            // this.$emit('toQuery');
            this.dialog = false;
            this.form1 = {
                fileDesc: '',
                demandFile: [],
                fileJson: []
            };

            this.fileJsons = [];
            this.demandFiles = [];
        },
        async publish(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let url = '/api/deliveryDoc';
                    this.$http
                        .post(url, {
                            orderId: this.form1.id,
                            fileDesc: this.form1.fileDesc,
                            fileUrl: this.form1.demandFile,
                            fileJson: JSON.stringify(this.form1.fileJson),
                            userId: this.userId
                        })
                        .then((val) => {
                            if (val.data.msg.message == '成功') {
                                this.$message.success('文件交付成功');
                                this.$emit('toQuery');
                                this.dialog = false;
                                return false;
                            }
                        });
                } else {
                    // this.releaseDilaog = false;
                    this.$message.error('请检查文件是否已交付');
                    this.$emit('toQuery');
                    this.dialog = false;
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.el-dialog {
    width: 650px;
    height: auto;
    border-radius: 2%;
}
.el-dialog__title {
    color: white;
}
</style>
