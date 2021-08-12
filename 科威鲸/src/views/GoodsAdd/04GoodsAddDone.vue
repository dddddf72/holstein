<template>
    <div class="home">
        <Holstein></Holstein>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div class="img">
                    <img src="../../assets/images/goodsAdd/组 13@2x.png" alt="">
                </div>
                <div class="submitTitle">提交成功</div>
                <div class="showDetail">商品提交成功，请前往管理商品列表进行商品的上架吧</div>
                <div class="autoJump">若10秒后没有自动跳转，请点击<a href="">www.baidu.com</a></div>
                
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
            input:'',
            input2:'',
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
        handleClick(){
            console.log(1)
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
        margin: 200px auto;
        text-align: center;
    }
    .merchantRegistration div{
        text-align: center;
        margin: 35px auto 10px auto;
        font-weight: bold;
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
    .submitTitle{
        width: 150px;
        height: 35px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        line-height: 24px;
    }
    .showDetail{
        width: 580px;
        height: 24px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #000000;
        line-height: 24px;
    }
    .autoJump{
        width: 299px;
        height: 15px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #666666;
        line-height: 24px;
    }
</style>