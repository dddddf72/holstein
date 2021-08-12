<template>
  <div id="app" v-loading="this.$store.state.isLoading">
    <keep-alive>
      <router-view/>
    </keep-alive> 
</div>
</template>
<script>
export default {
    data() {
        return {
            //判断是否已上传图片
            uuuFront:false,
            uuu:false,
            uuheader:false,
            //
            filesfzFront:"",
            filesfz:"",
            files:"",
        }
    },
//页面跳转到新页面时, 默认在页面顶部
    mounted () {
        this.$router.afterEach(() => {
            window.scrollTo(0, 0)
        })
        // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
        window.onbeforeunload = function (e) {
            var storage = window.localStorage;
            storage.clear();
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(res => {
                console.log(res)
                done();
            })
            .catch(err => {
                console.log(err)
            });
        },
    },
        
}
</script>

<style>
#app{
  margin: 0 auto;
}
a, li {
    list-style: none;
}
a {
    text-decoration: none;
}
.el-menu--collapse {
    width: 80px;
}
    @import './assets/css/font.css';
    .dispalyFlex{
        display:flex;justify-content:space-between;align-items:center;
    }
    /*  */
    .flexTop div{
        margin-left: 10px;
    }
    .checkDiv >div{
        margin: 20px 0;
    }
    .partTop{
        margin: 70px 0;
    }
    /*  */
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
    }
    .overview{
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
    }
    .myOrderProcess{
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
    }
    .boldSimi{
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 300px;
        color: #000000;
    }
    /*  */
    .toReportTel{
        color:#fff;width:100px;height:50px;background:#81d8d0;line-height:50px;text-align:center;margin:30px auto
    }
    .concernBtn{
        color:#fff;width:140px;height:45px;background:#81d8d0;line-height:45px;text-align:center;margin-top:40px;margin-bottom:20px;margin-left:auto;margin-right:auto
    }
    .notconcernBtn{
        color:#999999;width:140px;height:45px;line-height:45px;text-align:center;margin-top:40px;margin-bottom:20px;margin-left:auto;margin-right:auto;border:1px solid #b8b8b8
    }
    .adddReq{
        color:#fff;width:140px;height:45px;background:#81d8d0;line-height:45px;text-align:center;
    }
    .skilllabel{
        color:#fff;width:90px;height:33px;background:#81d8d0;line-height:33px;text-align:center;
    }
    .reqBtn{
        color:#fff;width:90px;height:33px;background:#81d8d0;line-height:33px;text-align:center;margin-top:40px;margin-bottom:20px;margin-left:auto;margin-right:auto
    }
    .closeBtn{
        color:#fff;width:90px;height:33px;background:#81d8d0;line-height:33px;text-align:center;
    }
    .chatOnline{
        color:#fff;width:90px;height:40px;color:#999999;line-height:40px;text-align:center;border:1px dashed #888888;
    }
    .checkOrderDetail{
        color:#fff;width:100px;height:40px;color:#999999;line-height:40px;text-align:center;border:1px dashed #888888
    }
    .payBtn{
        color:#fff;width:90px;height:40px;background:#81d8d0;line-height:40px;text-align:center;
    }
    /*  */
    .recommandCarou,.recommandCarouItem,.recommandGoodsItem{
        height: 390px !important;
    }
    .MarginMerchant{
        background:#FA8687;
        color:#fff;
        width:75px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    .MarginMerchant1{
        background:#81d8d0;
        color:#fff;
        width:55px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    .MarginMerchant2{
        background:#97BFD5;
        color:#fff;
        width:60px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:12px
    }
    /*  */
    .checkBoxs div{
        margin-bottom: 20px;
    }
    .reqDetail>div{
        margin-bottom: 10px;
    }
    .designLeft{
        width: 716px;
    }
    .dotLine{
        margin: 21px 0;
        height: 1px;
        border: 1px dashed #888888;
    }
    .solidLine{
        margin: 20px 0;
        height: 1px;
        border: 1px dashed #f5f5f5;
    }
    .myOrderProcessLine{
        margin: 20px 0;
        height: 1px;
        border: 1px solid #e6e6e6;
    }
    .topCenter div{
        font-weight: bold;
    }
    .loginImg i{
        width:35px;
        height:35px;
        color: #fff;
        line-height: 35px;
        font-size: 24px;
    }
    .loginImg img{
        width:22px;
        height:22px;
        color: #fff;
        line-height: 22px;
    }
    .el-carousel__container button{
        /*margin-top: 90px;*/
        background: #919498;
    }
</style>