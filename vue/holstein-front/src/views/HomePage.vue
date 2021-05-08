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

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
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
        font-family: 'SourceHanSansCN-Light';
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
    }
    .bannerImg{
        width: 100%;
        height: 100%;
    }
    .bannerTxt{
        
    }
</style>