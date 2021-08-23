<template>
    <div id="whole">
    <Holstein></Holstein>
                <el-menu class="center"
                    text-color="#000"
                    active-text-color="#81d8d0" 
                    :default-active="activeIndex"
                    mode="horizontal" @select="handleSelect1">
                    <NavMenu :navMenus="NavTitle"></NavMenu>
                </el-menu>
                    <router-view ></router-view>
        <Footer></Footer>
    </div>
</template>
<script>

    import Holstein from '@/components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
import GoodsHttp from '@/model/GoodsHttp'
import NavMenu from '@/components/Dialog/NavMenu.vue';
    export default {
        inject: ['reload'],
        components: {
            NavMenu,
            Footer,
            Holstein
        },
        watch:{
            loginInfo(val){
                this.$forceUpdate()
                return this.loginInfo = val
            }
        },
        data() {
            return {
                NavTitle:[],
                isnav:true,
                isShow:true,    //whatCanWoDoItem和clickSituation样式
                dialogFormVisible: false,
                activeIndex:'1',
                loginInfo:{},
                userId:"",
                username:"",
                user:"",
                phone:"",
                userType:"",
                hotservicePro:[],//热门服务
            }
        },

      created() {
        this.$nextTick(function () {
          window.οnlοad=function(){
            if (location.href.indexOf("?xyz=")<0){
              alert(123);
              location.href=location.href+"?xyz="+Math.random();
            }
          }
        });
      },
        
        async mounted(){
            if (location.href.indexOf("#reloaded") == -1) {
                location.href = location.href + "#reloaded";
                location.reload();
            }
            var res = await GoodsHttp.serviceProCategory()
                this.NavTitle = res.data.biz.content
            var reshotservicePro = await GoodsHttp.hotservicePro()
                this.hotservicePro = reshotservicePro.data.biz
            // if(this.$cookie && this.$cookie.get("loginInfo")){
            //     this.user = JSON.parse(this.$cookie.get("loginInfo"));
            //     this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
            //     this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
            //     this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
            //     if(this.user){
            //             this.userId = this.user.id
            //             this.$http.post('/api/snailUser/info',{
            //                     userId:this.user.id
            //             }).then((res)=>{
            //                 var message = res.data.msg.message;
            //                 this.loginInfo=res.data.biz
            //                 if(message=="查询成功"){
            //                     this.loginInfo=res.data.biz;
            //                     this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
            //                 }else{
            //                     return
            //                 }
            //             })
            //     }
            // }
            
        },
        methods: {
            async handleSelect1(key, keyPath) {
                var ProId = key;
                var keyPathid = keyPath[0];
                console.log(keyPath)
                this.$router.push(`scan?keyPath=${keyPathid}&ProId=${ProId}`);
            },
            becomePracCenter(){
                if(this.$cookie && this.$cookie.get("loginInfo")){
                    
                var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                const userId = userInfo.id
                    if(userInfo.userType= 2){
                        this.$router.push(`/userOrder?userId=${userId}`)
                    }else{
                        this.$router.push('/userRegist')
                    }
                }else{
                    this.$router.push('/userRegist')
                }
            },
            async JumpDetail(id){
                this.$router.push(`detail?serviceId=${id}`);
            },
        },
        
    }
</script>

<style scoped>
    #whole{
        width: 100%;

    }
    .center{
        margin: 0 320px;
    }
    /*  */
    .firstNav{
        width: 100%;
        height: 55px;
        background-color: #81d8d0;
    }
    .navCenter{
        width: 1280px;
        height: 55px;
        position: relative;
    }
    .logo{
        width: 260px;
        height: 55px;
        line-height: 55px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
    .search-form a{
        position: absolute;
        width: 30px;
        height: 30px;
        display: block;
        text-align: center;
        font-size: 14px;
        background-image: url('../assets/images/pageIndex/搜索 (2).png');
        background-repeat: no-repeat;
        top: 7px;
        left: 170px;
    }
    input::-webkit-input-placeholder{
        color: #fff;
    }
    /*
    .firstNavR1{
        display: flex;
        position: absolute;
        top: 13px;
        right: 0;
    }*/
    .firstNavR div{
        margin: 0 14px;
    }
    /*
    .businessCenter{
        width: 76px;
        height: 28px;
        text-align: center;
        line-height: 27px;
        background: url('../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
        font-size: 14px;
        color: #FFFFFF;
    }*/
    .shortLine{
        width: 1px;
        height: 9px;
    }
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
    }
    /*  */
    .el-menu.el-menu--horizontal{
        border: none;
    }
    /* hover颜色改变 */
    .el-menu>>>.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        color: rgb(102, 97, 97);
    }
    /* 消除动态添加的三角 */
    .el-menu>>>.el-icon-arrow-down:before{
        content: none;
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 3px solid #81d8d0 !important;
        color: #303133;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: 3px solid #81d8d0 !important;
        color: #303133;
    }
    .el-menu-item.is-active {
        color: #81d8d0 !important;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: 3px solid #81d8d0 !important;
        color: #303133;
    }
    .el-submenu.is-active .el-submenu__title {
        border-bottom-color: #81d8d0 !important;
    }
    /*  */
    .banner{
        width: 100%;
        height: 705px;
        position: relative;
    }
    .bannerImg{
        width: 100%;
        height: 100%;
    }
    .bannerTxt{
        width: 570px;
        color: #ffffff;
        position: absolute;
        top: 273px;
    }
    .free{
        font-size: 50px;
    }
    .slogan{
        margin-top: 18px;
    }
    .sloganOne{
        font-size: 20px;
    }
    .sloganTwo{
        font-size: 14px;
    }
    .loginBtn{
        font-size: 16px;
        display: flex;
        margin-top: 35px;
    }
    .loginBtn div{
        width: 160px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .employment{
        background: url('../assets/images/pageIndex/圆角矩形 2.png') no-repeat;
    }
    .practitioners{
        margin-left: 21px;
        background: url('../assets/images/pageIndex/圆角矩形 2 拷贝.png') no-repeat;
    }
    /*  */
    .navTitle{
        color: #000000;
        font-size: 40px;
        font-weight: bold;
    }
    .hotService{
        height: 874px;
        background: url('../assets/images/pageIndex/图层 16.png');
        position: relative;
    }
    .hotServiceNav{
        width: 1280px;
        height: 104px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 98px;
    }
    .hotServiceNavL::after{
        content: '';
        display: table;
        clear: both;
    }
    .hotServiceNavL div,.hotServiceNavR div{
        line-height: 104px;
    }
    .hotServiceNavL{
        width: 400px;
        display: flex;
    }
    .hotImg{
        margin-left: 12px;
        width: 22px;
        /*height: 25px;*/
    }
    .navTitleContext{
        /*width: 180px;*/
        /*height: 18px;*/
        margin: 10px 0 0 10px;
        font-weight: bold;
        font-size: 24px;
    }

    .navTitleContext .capa{
        color: #97BFD5;
    }
    .navTitleContext>span{
        color: #DA0202;
    }
    .navTitleContext span:nth-child(2){
        color: #999999;
    }
    .hotServiceNavR{
        display: flex;
    }
    .seeMore{
        width: 112px;
        /*height: 15px;*/
        font-size: 14px;
        color: #999999;
    }
    .moreServiceImg{
        margin-left: 10px;
        width: 25px;
        /*height: 25px;*/
    }
    /*   */
    .hotServiceContainer{
        width: 1280px;
        height: 466px;
        position: absolute;
        top: 216px;
    }
    .hotContainItem{
        width: 415px;
        height: 466px;
        position: relative;
        color: #FFFFFF;
    }
    .hotContainItem .containerimg{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.7;
    }
    .hotContent{
        position: relative;
        width: 415px;
        height: 466px;
    }
    .avatar{
        margin-top: 17px;
        margin-left: 17px;
        height: 45px;
        display: flex;
        line-height: 45px;
    }
    .avatar div{
        margin-left: 12px;
    }
    .hotCenter{
        position: absolute;
        text-align: center;
        margin-top: 193px;
        margin-left: 156px;
    }
    .hotCenter p:nth-child(2){
        font-size: 24px;
        margin: 12px 0 20px 0;
    }
    /*  */
    .capabilityCate{
        height: 467px;
        position: relative;
    }
    .capabilityNav{
        width: 1280px;
        height: 104px;
        display: flex;
        position: absolute;
        top: 98px;
        line-height: 104px;
    }
    .capaContainer{
        width: 1280px;
        height: 380px;
        /*
        background: #81d8d0;
        */
        position: absolute;
        top: 243px;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        
    }
    .capaContainerItem{
        display: flex;
        justify-content: space-between;
        /*
        background: yellow;
        */
        font-size: 16px;
        /*260 120*/
        /*117 40*/
        height: 40px;
        width: 140px;
    }
    .capaContainer >.capaContainerItem:not(:nth-child(4n+4)){
        margin-right: 200px;
    }
    .capaContainerItem div:nth-child(2){
        margin: 13px 0 11px 9px;
        width: 84px;
        height: 16px;
    }
    .capaImg{
        width: 44px;
        height: 40px;
    }
    .capaImg img{
        width: 44px;
        height: 40px;
    }
    /*  */
    .whatCanWeDo{
        position: relative;
        margin-top: 140px;
        height: 1306px;
        background: url('../assets/images/pageIndex/组 11(1).png') no-repeat;
    }
    .whatCanWedoNav{
        width: 1280px;
        height: 104px;
        position: absolute;
        top: 276px;
        line-height: 104px;
    }
    /*  */
    
    .whatCanWedoNav{
        color: #FFFFFF;
        font-weight: bold;
        height: 40px;
    }
    /*
    .whatCanWedoNav{
        content: '';
        display: table;
        clear: both;
    }
    */
    .whatCanWedoNav div:first-child{
        font-size: 40px;
        float: left;
    }
    .whatCanWedoNav div:nth-child(2){
        font-size: 24px;
        margin: 10px 0 0 300px;
    }
    .whatCanWoDoContainer{
        width: 1278px;
        height: 560px;
        position: absolute;
        top: 430px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

    }
    .whatCanWoDoItem{
        width: 426px;
        height: 280px;
        background: url('../assets/images/pageIndex/矩形 3 拷贝.png') no-repeat;
    }
    .whatCanWeDoList{
        width: 255px;
        margin: 60px auto;
        position: relative;
    }
    .whatCanWedoItemImg{
        width: 60px;
        height: 57px;
    }
    .whatCanWedoItemImg img{
        width: 60px;
        height: 57px;
    }
    .whatWeCanDoTitle{
        font-size: 20px;margin: 20px 0;color: #333333;
    }
    .whatWeCanDoSlogan{
        font-size: 16px;color: #999999;
    }
    /*  */
    .cooperative{
        display: flex;
        width: 1280px;
        height: 80px;
        line-height: 40px;
        position: absolute;
        top: 1280px;
        font-size: 20px;
        color: #999999;

    }
    .cooperative>div:first-child{
        width: 170px;
    }
    .partnerImgs{
        width:1110px;
        display: flex;
        justify-content: space-between;
    }
    .partnerImgs div{
        width: 130px;
        height: 55px;
    }
    /*  */
    
    .guideBook{
        margin-top: 115px;
        position: relative;
        height: 900px;
    }
    .guideBookNav{
        display: flex;
    }
    .GuidenavTitleContext{
        margin: 19px 0 0 12px;
    }
    .guideBookContainer{
        /*position: relative;*/
        width: 1278px;
        height: 660px;
        position: absolute;
        top: 135px;
        line-height: 104px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .guideBookItem{
        width: 426px;
        height: 330px;
        background: url('../assets/images/pageIndex/矩形 5 拷贝.png') no-repeat;
    }
    .guideBookFirst{
        width: 426px;
        height: 330px;
        background: url('../assets/images/pageIndex/矩形 3.png');
    }
    .guideBookFirst p{
        color: #FFFFFF;
    }
    .guideList{
        width: 250px;
        margin: auto auto;
        position: relative;
    }
    .guideItemImg{
        width: 185px;
        height: 131px;
    }
    .guideItemImg img{
        width: 185px;
        height: 131px;
    }
    .guideTitle{
        color: #333333;
        font-size: 22px;
    }
    .guideSlogan{
        color: #999999;
        font-size: 16px;
    }
</style>