<template>
    <div>
        <div class="logoFooter">
            <div class="logo">
                <img class="logoImg" src="../../assets/images/pageIndex/LOGO holstern.png" alt="">
            </div>
        </div>
        <div class="footer">
            <div class="footer1">
                <div class="footer1_left">
                    <div class="footer1_xun">
                        <p><i class="el-icon-question"></i><strong>帮助与支持</strong></p>
                    </div>
                    <div class="footer1_xun">
                        <p><strong>类目</strong></p>
                        <div class="coll_body" v-for="(item,index) of NavTitle" :key="index">
                            <a  @click="handleSelect1(item.id,item.id)">{{item.cateName}}</a>
                        </div>
                    </div>
                    <div class="footer1_xun">
                        <p><strong>关于</strong></p>
                        <div class="coll_body">
                            <a href="" data-cl-id="314135581">关于我们</a>
                            <a href="" class="yjy_a" data-cl-id="425956241">合作伙伴</a>
                            <a href="" class="yjy_a" data-cl-id="2753167703">新闻</a>
                            <a href="" class="yjy_a" data-cl-id="2753167703">安全</a>
                            <a href="" class="yjy_a" data-cl-id="2753167703">如何运作</a>
                            <a href="" class="yjy_a" data-cl-id="819975396">投资者</a>
                        </div>
                    </div>
                    <div class="footer1_xun">
                        <p><strong>条款</strong></p>
                            <div class="coll_body">
                                <a href="" data-cl-id="3677498327">隐私政策</a>
                                <a href="" data-cl-id="3312753667">条款和条件</a>
                                <a href="" data-cl-id="876889514">版权政策</a>
                                <a href="" data-cl-id="600398964">行为准则</a>
                                <a href="" data-cl-id="1158550858">费用和政策</a>
                            </div>
                    </div>
                </div>
                
                <div class="footrt1_right">
                        <div class="footer1_xun2">
                            <div class="footer1_xun2_erweima" style="width:120px;height:120px;background: #DFE6EC;"></div>
                            <div class="footer1_xun2_title">官方微信 </div>
                            <div class="clear"></div>
                        </div>
                        <div class="footer1_xun2">
                                        <div class="footer1_xun2_erweima" style="width:120px;height:120px;background: #DFE6EC;"></div>
                                        <div class="footer1_xun2_title">服务号 </div>
                                        <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="footer2">
                    <div class="f_gl">
                    <a href="https://www.yuanian.com/" target="_blank" rel="nofollow" data-cl-id="1743566555">Freelancer @ is a registered Trademark of FreelancerTechnology Pty Limited (ACN 141959 042)</a> 
                    </div>
                    <div>
                        <span><a href="https://www.yuanian.com/gyyn/danye/88.html" target="_blank" data-cl-id="2720347703">copyright c 2021 FreelancerTechnology Pty Limited (ACN 141959 042)</a></span>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'
    export default {
        props: {
            footer:{
                type:String
            }
        },
        data() {
            return {
                NavTitle:[]
            }
        },
        async mounted() {
            var res = await GoodsHttp.serviceProCategory()
            this.NavTitle = res.data.biz.content
        },
        methods: {
          async handleSelect1(key, keyPath) {
                var ProId = key;
                var keyPathid = keyPath;
                this.$router.push(`scan?keyPath=${ProId}&ProId=${keyPathid}`);
            },
        },
    }
</script>

<style scoped>
/*  */
    
    .logoFooter{
        background-color: #99bed8;
        height: 100px;
        margin-bottom: 30px;
    }
    .logoFooter .logo{
        width: 260px;
        height: 100px;
        display: block;
        text-align: center;
        line-height: 100px;
        margin: 0 auto;
    }
    .logoFooter .logo img{
        width: 260px;
        height: 21px;
    }
    .footer {
        width: 100%;
        max-width: 100%;
        background: #fff;
        overflow-x: hidden;
    }
    .footer1 {
        width: 96%;
        max-width: 1185px;
        margin: 0 auto;
        padding: 50px 0 30px 0;
    }
    .footer1 .footer1_left {
        float: left;
    }
    .footer1 .footer1_left .footer1_xun {
        width: 160px;
        float: left;
    }
    .footer1 .footer1_left .footer1_xun p {
        float: left;
        width: 100%;
        font-size: 14px;
        color: #373d41;
        line-height: 50px;
    }
    .footer1 .footer1_left .footer1_xun a {
        float: left;
        width: 100%;
        font-size: 12px;
        color: #6b727c;
        line-height: 28px;
        font-weight: 500;
    }
    /*  */
    .footer1 .footrt1_right {
        float: right;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima {
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_erweima img{
        width: 120px;
        height: 120px;
    }
    .footer1 .footrt1_right .footer1_xun2 .footer1_xun2_title {
        font-size: 14px;
        line-height: 30px;
        width: 100%;
        text-align: center;
        color: #373d41;
    }
    .clear {
        clear: both;
    }
    .footer1 .footrt1_right .footer1_xun2 {
        float: left;
        width: 120px;
        margin-left: 42px;
    }
    .footer2 {
        width: 100%;
        text-align: center;
        overflow: hidden;
        font-size: 12px;
        color: #a5aec1;
        border-top: #ececee solid 1px;
        padding-top: 15px;
    }
    .footer2 a {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
        line-height: 34px;
    }
    .footer2 span {
        font-size: 12px;
        color: #8e95a0;
        margin: 0 10px;
    }

</style>