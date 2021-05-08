<template>
    <div id="whole">
        <div class="firstNav">
            <div class="navCenter center">
                <div class="logo">
                    <span>LOGO </span>
                    <span>HOLSTEIN</span>
                </div>
                <div class="firstNavR"></div>
            </div>

        </div>
        <div class="secondNav"></div>
        <div class="banner">
            <img class="bannerImg" src="../assets/img/banner.png" alt="">
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
        background: yellow;
        display: flex;
        justify-content: space-between;
    }
    .logo{
        width: 260px;
        height: 21px;
        background: red;
        font-size: 20px;
    }
    .firstNavR{
        
    }
    /*  */
    .secondNav{
        width: 100%;
        height: 108.2px;
        background: #ffffff;
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
</style>