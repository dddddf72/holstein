<template>
  <div id="app" v-loading="this.$store.state.isLoading">
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
</div>
</template>
<script>
export default {
        provide () {
            return {
                reload: this.reload
            }
        },
    data() {
        return {
            //判断是否已上传图片
            uuuFront:false,
            uuu:false,
            uuheader:false,
            filesfzFront:"",
            filesfz:"",
            files:"",
            //登录后刷新
            userId:'',
                isRouterAlive:true,
        }
    },
    beforeRouteEnter(to, from, next) {
      next();
      if(from.fullPath != "/"){
        location.reload()
      }
	  },

//页面跳转到新页面时, 默认在页面顶部
    mounted () {
        // if(!!window.ActiveVObject || 'ActiveVObject' in window){
        //     window.addEventListener('hashchange', ()=>{
        //         let currentPath = window.location.hash.slice(1)
        //         if (this.$route.path !== currentPath) {
        //             this.$router.push(currentPath)
        //         }
        //     }, false)
        // }
        this.$router.afterEach(() => {
            window.scrollTo(0, 0)
        })
        // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
        window.onbeforeunload = function (e) {
            var storage = window.localStorage;
            storage.clear();
        };
        // if(this.$cookie && this.$cookie.get("loginInfo")){
        //     this.userId = JSON.parse(this.$cookie.get("loginInfo")).id
        //     this.createWebSocket(this.userId)
        // }
    },
        // beforeUpdate() {
        //     window.οnlοad=function(){
        //         if (location.href.indexOf("?xyz=")<0){
        //             alert(123);
        //             location.href=location.href+"?xyz="+Math.random();
        //         }
        //     }
        // },
        // updated() {
        //     window.οnlοad=function(){
        //         if (location.href.indexOf("?xyz=")<0){
        //             alert(123);
        //             location.href=location.href+"?xyz="+Math.random();
        //         }
        //     }
        // },
        created() {
            this.$nextTick(function () {
            window.οnlοad=function(){
                if (location.href.indexOf("?xyz=")<0){
                //   alert(123);
                location.href=location.href+"?xyz="+Math.random();
                }
            }
            });
        },

    methods: {

            reload () {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            },
        getImgUrl(productImgUrl){
            return this.getBaseImgUrl(productImgUrl)
        },
    },

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app{
  margin: 0 auto;
}
.color0 a{
  color: #000000;
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
	
.MerchantLabel{
	width:230px;
}

.MerchantLabel div{
	height: 22px;
	line-height: 22px;
	text-align: center;
	font-size: 12px;
	margin-right: 2px;
}

/* 商家类型 */
.sellerTypeStr {
	width: 70px;
    background-color: #ecf5ff;
	border:1px solid #d9ecff;
    color: #409eff;
	margin: 1px 3px 1px 3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	overflow: hidden;
}

/* 保证金商户 */
.bailAmountStr {
	width: 80px;
    background-color: #fdf6ec;
	border:1px solid #faecd8;
    color: #e6a23c;
	margin: 1px 3px 1px 3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	overflow: hidden;
	/* width: 75px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 12px; */
}

/* 是否新卖家 */
.isNewSellerStr {
	width: 55px;
	border:1px solid #fde2e2;
    background: #fef0f0;
    color: #f56c6c;
	margin: 1px 3px 1px 3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	overflow: hidden;
}

/* 是否评价最高的卖家 */
.isPjzgStr{
	width: 115px;
	border:1px solid #71C671;
	background: #9BCD9B;
	color: #339933;
	margin: 1px 3px 1px 3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	overflow: hidden;
}

/* 弹窗样式 */

.el-carousel__container button{
	opacity: 0.5;
	height: 45px;
	width: 45px;
}

.el-upload-dragger{
	width: 420px;
}

.el-dialog .el-dialog__header{
	background-color: #81d8d0;
	border-top-left-radius: 3%;
	border-top-right-radius: 3%;
}

.rightAlign label{
	padding-left: 10px;
}
/* 弹窗样式 */

/* 区号样式 */
.selectorCountry{
  height:40px;
  width:30%;
  display:inline-block
}

/* 区号后手机号码样式 */
.CountryPhone{
  width:70%;
  display:inline-block
}
.searchCriteriaContent .el-input__inner {
  width: 185px!important;
  height: 40px!important;
}
.el-pagination__jump .el-input__inner {
  width: 50px!important;
  height: 28px!important;
}
.el-pagination__sizes .el-input__inner {
  width: 100px!important;
  height: 28px!important;
}
</style>
