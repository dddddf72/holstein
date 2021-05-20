<template>
    <div id="whole">
        <div class="firstNav">
            <div class="navCenter center">
                <div class="logo">
                    <img class="logoImg" src="../assets/images/pageIndex/LOGO holstern.png" alt="">
                </div>
                <div class="firstNavR">
                    <div class="businessCenter">商家中心</div>
                    <div class="shortLine">
                        <img src="../assets/images/pageIndex/形状 6 拷贝.png" alt="">
                    </div>
                    <div class="searchImg">
                        <img src="../assets/images/pageIndex/搜索 (2).png" alt="">
                    </div>
                    <div class="shortLine">
                        <img src="../assets/images/pageIndex/形状 6.png" alt="">
                    </div>
                    <div class="loginImg">
                        <img src="../assets/images/pageIndex/登录.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="secondNav">
            <el-menu :default-active="activeIndex" class="el-menu-demo center" mode="horizontal" @select="handleSelect" background-color="#ffffff"
            text-color="#33333"
            active-text-color="#81d8d0">
                    <el-menu-item index="1">游戏服务</el-menu-item>
                    <el-menu-item index="2">音乐和音频</el-menu-item>
                    <el-menu-item index="3">文档编辑和设计</el-menu-item>
                    <el-menu-item index="4"><a href="" target="_blank">品牌设计</a></el-menu-item>
                    <el-menu-item index="5"><a href="" target="_blank">科技服务</a></el-menu-item>
                    <el-menu-item index="6"><a href="" target="_blank">工商财税</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="banner">
            <img class="bannerImg" src="../assets/images/pageIndex/组 11.png" alt="">
            <div class="bannerTxt center" >
                <div class="free">自由的生活，自由的职业</div>
                <div class="slogan">
                    <span class="sloganOne">自己的时间，由自己掌握</span>
                    <span class="sloganTwo">（我们不收取任何手续费）</span>
                </div>
                <div class="loginBtn">
                    <div class="employment">
                        聘用人才
                    </div>
                    <div class="practitioners">
                        成为自由从业者
                    </div>
                </div>

            </div>
        </div>
        <div class="hotService">
            <div class="hotServiceNav center">
                <div class="hotServiceNavL">
                    <div class="navTitle">热门服务</div>
                    <div class="hotImg">
                        <img src="../assets/images/pageIndex/火.png" alt="">
                    </div>
                    <div class="navTitleContext">
                        <span>HOT </span>
                        <span>SERVICES</span>
                    </div>
                </div>
                <div class="hotServiceNavR">
                    <div class="seeMore">查看更多热门服务</div>
                    <div class="moreServiceImg">
                        <img src="../assets/images/pageIndex/组 11(3).png" alt="">
                    </div>
                </div>
            </div>
            <div class="hotServiceContainer center">
                <div class="hotContainItem">
                    <div class="containerimg">
                        <img src="../assets/images/pageIndex/组 11(4).png" alt="">
                    </div>
                    <div class="hotContent">
                        <div class="avatar">
                            <img src="../assets/images/pageIndex/组 11(5).png" alt="">
                            <div>由skydesigner发布</div>
                        </div>
                        
                        <div class="hotCenter">
                            <p>Play with</p>
                            <p>游戏陪玩</p>
                            <div>
                                <img src="../assets/images/pageIndex/组 11(6).png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotContainItem">
                    <div class="containerimg">
                        <img src="../assets/images/pageIndex/组 11(4).png" alt="">
                    </div>
                    <div class="hotContent">
                        <div class="avatar">
                            <img src="../assets/images/pageIndex/组 11(5).png" alt="">
                            <div>由skydesigner发布</div>
                        </div>
                        
                        <div class="hotCenter">
                            <p>Play with</p>
                            <p>游戏陪玩</p>
                            <div>
                                <img src="../assets/images/pageIndex/组 11(6).png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hotContainItem">
                    <div class="containerimg">
                        <img src="../assets/images/pageIndex/组 11(4).png" alt="">
                    </div>
                    <div class="hotContent">
                        <div class="avatar">
                            <img src="../assets/images/pageIndex/组 11(5).png" alt="">
                            <div>由skydesigner发布</div>
                        </div>
                        
                        <div class="hotCenter">
                            <p>Play with</p>
                            <p>游戏陪玩</p>
                            <div>
                                <img src="../assets/images/pageIndex/组 11(6).png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="capabilityCate">
            <div class="capabilityNav center">
                <div class="navTitle">能力类目</div>
                <div class="navTitleContext">
                    <span class="capa">CAPABILITY  </span>
                    <span>CATEGORY</span>
                </div>
            </div>
            <div class="capaContainer center">

                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 17.png" alt="">
                    </div>
                    <div>数据分析</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 19.png" alt="">
                    </div>
                    <div>工商注册</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 21.png" alt="">
                    </div>
                    <div>法律顾问</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 23.png" alt="">
                    </div>
                    <div>书籍编写</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/矩形 6 拷贝.png" alt="">
                    </div>
                    <div>数据库维护</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 28.png" alt="">
                    </div>
                    <div>网页制作</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 30.png" alt="">
                    </div>
                    <div>PPT设计</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/音频.png" alt="">
                    </div>
                    <div>音频剪辑</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 32.png" alt="">
                    </div>
                    <div>视频剪辑</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 34.png" alt="">
                    </div>
                    <div>游戏教学</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 37.png" alt="">
                    </div>
                    <div>注册商标</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/游戏 (1).png" alt="">
                    </div>
                    <div>游戏陪玩</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 39.png" alt="">
                    </div>
                    <div>文案设计</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/椭圆 4 拷贝 2.png" alt="">
                    </div>
                    <div>图片w修改</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 43.png" alt="">
                    </div>
                    <div>电子商务</div>
                </div>
                <div class="capaContainerItem">
                    <div class="capaImg">
                        <img src="../assets/images/pageIndex/图层 45.png" alt="">
                    </div>
                    <div>查看更多</div>
                </div>

            </div>
        </div>
        <div class="whatCanWeDo">
            <div class="whatCanWedoNav center">
                <div class="whatNavTitle">我们能够做什么</div>
                <div class="whatNavTitleContext">
                    <span>WHAT CAN WE DO</span>
                </div>
            </div>
            <div class="whatCanWoDoContainer center">
                <!--<div :class="['whatCanWoDoItem',isShow?'clickSituation':'']">   -->
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/组 11@2x(2).png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">浏览作品集</p>
                        <p class="whatWeCanDoSlogan">通过浏览历史作品和个人简历来找到值得信任的专业人士</p>
                    </div>
                </div>
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/组 11@2x(2).png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">发布竞标需求</p>
                        <p class="whatWeCanDoSlogan">通过发布竞标需求，让人才自己找上门</p>
                    </div>
                </div>
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/图层 14.png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">在线聊天</p>
                        <p class="whatWeCanDoSlogan">您可以和您的威客在线交流，以同步工作的最新进度</p>
                    </div>
                </div>
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/矩形 6 拷贝.png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">资金托管</p>
                        <p class="whatWeCanDoSlogan">当工作完成且您的满意度达到100%时支付费用</p>
                    </div>
                </div>
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/椭圆 4 拷贝 2.png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">跟踪进度</p>
                        <p class="whatWeCanDoSlogan">用我们的时间追踪器和移动应用程序来保持最新进度和活跃度</p>
                    </div>
                </div>
                <div class="whatCanWoDoItem">
                    <div class="whatCanWeDoList">
                        <div class="whatCanWedoItemImg">
                            <img src="../assets/images/pageIndex/客服.png" alt="">
                        </div>
                        <p class="whatWeCanDoTitle">24/7客服</p>
                        <p class="whatWeCanDoSlogan">我们的全天候支持团队可随时随地为您提供帮助</p>
                    </div>
                </div>
            </div>
            <div class="cooperative center">
                <div>合作伙伴</div>
                <div class="partnerImgs">
                    <div class="wechat">
                        <img src="../assets/images/pageIndex/微信.png" alt="">
                    </div>
                    <div class="master">
                        <img src="../assets/images/pageIndex/f2deb48f8c5494eedd4e612e21f5e0fe99257e9c.png" alt="">
                    </div>
                    <div class="visa">
                        <img src="../assets/images/pageIndex/src=http___au.toluna.com_dpolls_images_2018_01_18_fae4f20c-880a-4ae1-9c2f-1dfd6ff9a9b8.jpg&refer=http___au.toluna.png" alt="">
                    </div>
                    <div class="alipay">
                        <img src="../assets/images/pageIndex/支付宝.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="guideBook">
            <div class="guideBookNav center">
                <div class="navTitle">Holstein指南</div>
                <div class="GuidenavTitleContext navTitleContext">
                    <span class="capa">HOLSTEIN  </span>
                    <span>GUIDE</span>
                </div>
            </div>
            <div class="guideBookContainer center">
                <!--<div :class="['whatCanWoDoItem',isShow?'clickSituation':'']">   -->
                <div class="guideBookItem">
                    <img src="../assets/images/pageIndex/组 12.png" alt="">
                </div>
                <div class="guideBookItem">
                    <div class="guideList">
                        <div class="guideItemImg">
                            <img src="../assets/images/pageIndex/02.png" alt="">
                        </div>
                        <p class="guideTitle">提出你的需求</p>
                        <p class="guideSlogan">让专业人士主动找上门</p>
                        <div class="arrow">
                            <!--<img src="../assets/images/pageIndex/组 11(6).png" alt="">-->
                        </div>
                    </div>
                </div>
                <div class="guideBookItem">
                    <img src="../assets/images/pageIndex//组 12(1).png" alt="">
                </div>
                <div class="guideBookItem guideBookFirst">
                    <div class="guideList">
                        <div class="guideItemImg">
                            <img src="../assets/images/pageIndex/01.png" alt="">
                        </div>
                        <p class="guideTitle">聘用人才来完成你的任务</p>
                        <p class="guideSlogan">寻找专业的人才</p>
                        <div class="arrow">
                            <!--<img src="../assets/images/pageIndex/组 11(6).png" alt="">-->
                        </div>
                    </div>
                </div>
                <div class="guideBookItem">
                    <img src="../assets/images/pageIndex/组 12(3).png" alt="">
                </div>
                <div class="guideBookItem">
                    <div class="guideList">
                        <div class="guideItemImg">
                            <img src="../assets/images/pageIndex/03.png" alt="">
                        </div>
                        <p class="guideTitle">成为自由从业者</p>
                        <p class="guideSlogan">展示自己的能力，发挥自己的才能</p>
                        <div class="arrow">
                            <!--<img src="../assets/images/pageIndex/组 11(6).png" alt="">-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:true,    //whatCanWoDoItem和clickSituation样式
            }
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
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
    .firstNavR{
        display: flex;
        position: absolute;
        top: 13px;
        right: 0;
    }
    .firstNavR div{
        margin: 0 14px;
    }
    .businessCenter{
        width: 76px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        background: url('../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
        font-size: 14px;
        color: #FFFFFF;
    }
    .shortLine{
        width: 1px;
        height: 9px;
    }
    .searchImg .loginImg{
        width: 20px;
        height: 20px;
    }
    /*  */
    .secondNav{
        width: 100%;
        height: 94.2px;
        background: #ffffff;
        font-size: 15px;
    }
    .el-menu-item{
        height: 94.2px;
        line-height: 94.2px;
    }
    .el-menu--horizontal>.is-active{
        border-bottom: 5px solid #81d8d0;
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
        display: flex;
        justify-content: space-between;
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
        background: url('../assets/images/pageIndex/组 11(1).png');
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
        font-size: 20px;
        margin: 20px 0;
        color: #333333;
    }
    .whatWeCanDoSlogan{
        font-size: 16px;
        width: 255px;
        height: 40px;
        color: #999999;
    }
    .whatCanWoDoItem :hover{
        background: url('../assets/images/pageIndex/矩形 3.png') no-repeat;
        color: #FFFFFF;
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
        background-color: #9999;
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