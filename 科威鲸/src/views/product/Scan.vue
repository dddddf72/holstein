<template>
    <div id="whole">
        <Holstein></Holstein>
        
        <div class="secondNav">
            <el-menu :default-active="activeIndex" class="el-menu-demo center" mode="horizontal" @select="handleSelect" background-color="#ffffff"
            text-color="#33333"
            active-text-color="#81d8d0">
                    <el-menu-item v-for="item in NavTitle" :key="item.pic" >{{item.cateName}}</el-menu-item>
            </el-menu>
        </div>
        <!--<sidebar class="sidebar-container" />-->

        <ScanItem></ScanItem>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'
    import ScanItem from '@/components/ScanItem/ScanItem.vue'
    import Holstein from '../../components/Nav/Holstein.vue'
    import Footer from '@/components/Footer/footer.vue'
    // import UserHttp from '@/model/UserHttp'
    export default {
        components: {
            Holstein,Footer,ScanItem
        },
        data() {
            return {
                /* 一级标题 */
                NavTitle:[],
                NavTitleOne:"",
                /* 二级标题 */
                NavTitleChild:"",
                //
                zfbTrust:"",
                activeIndex:'1',
                isShow:true,    //whatCanWoDoItem和clickSituation样式
                backrgound:'#81d8d0',
                // checked:"",
                //卖方资质
                checkedHighCom:"",//评价最高的卖家（284）
                checkedFirstSale:"",//一级卖家
                checkedBail:"",//保证金商户（5
                checkedSecondSale:"",
                checkedNotSale:"",//非卖家（131
                checkedNotBail:"",//非保证金商户（5
                //交货时间
                checkedOneDay:"",//24小时内交付
                checkedThreeDay:"",//3天内交付
                checkedFiveDay:"",//5天内交付
                checkedRandom:"",//随意
                //售卖金额
                inputMinRmb:"",//最小金额
                inputMaxRmb:"",//最大金额
                input2:"",
                currentPage3: 5,
                //发布需求
                input2demandpre:"",
                //选择需求
                optionsdemand: [{
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
                valuedemand: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                /*  */
                //浏览记录 全部清除
                clearVisitedShow:true,
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
                    //轮播图
                    num:0, //数据下标遍历值
                    picArr:[
                        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                    ],  //将图片路径放入数组
            }
        },
        async mounted() {
            var res = await GoodsHttp.serviceProCategory()
            // console.log(res.data.biz.content[0])
            this.NavTitle = res.data.biz.content
            this.NavTitleOne = res.data.biz.content[0]
            this.NavTitleChild = res.data.biz.content[0].children
        },
        methods: {
            clearsellquali(){
                this.checkedHighCom = false,//评价最高的卖家（284）
                this.checkedFirstSale = false,//一级卖家
                this.checkedBail = false,//保证金商户（5
                this.checkedSecondSale = false,
                this.checkedNotSale = false,//非卖家（131
                this.checkedNotBail = false
            },
            clearSaleamount(){
                this.inputMinRmb = "",//最小金额
                this.inputMaxRmb = ""
            },
            cleartimeDelivery(){
                this.checkedOneDay= false,//24小时内交付
                this.checkedThreeDay= false,//3天内交付
                this.checkedFiveDay= false,//5天内交付
                this.checkedRandom = false
            },
            ////浏览记录 全部清除
            clearVisited(){
                this.clearVisitedShow = false
            },

            handleSelect(){
                console.log("select")
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(){
                console.log("handleClick")
            },
            JumpDetail(){
                this.$router.push({name:'detail'});
            },
            launchBidding(){
                this.$router.push({name:'biddingSerProvide'});
            },
            clickLeft:function(){
                this.num--
                if(this.num<0){ // 当下标小于0则下标更改为图片数组最后一个下标值
                    this.num= this.picArr.length-1
                }
            },
            clickRit(){  //函数ES6简写，去掉":function"
                this.num++
                if(this.num>this.picArr.length-1){ // 当下标大于图片数组最后一个下标值则改为0
                    this.num=0
                }
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
    /*.navCenter{
        width: 1280px;
        height: 55px;
        position: relative;
    }*/
    .navCenter{
        width: 1280px;
        height: 55px;
    }
    .logo{
        width: 260px;
        height: 55px;
        /*display: table-cell;*/
        vertical-align: middle;
        text-align: center;
    }
    .logo img{
        width: 260px;
        height: 21px;
    }
    /*.search-form a{
        position: absolute;
        width: 30px;
        height: 30px;
        display: block;
        text-align: center;
        font-size: 14px;
        background-image: url('../../assets/images/pageIndex/搜索 (2).png');
        background-repeat: no-repeat;
        top: 16px;
        left: 6px;
    }*/
    /*.firstNavR{
        display: flex;
        position: absolute;
        top: 13px;
        right: 0;
    }*/
    .firstNavR{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .firstNavR>div{
        margin: 0 15px;
    }
    .businessCenter{
        width: 90px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
    }
    /*
    .businessCenter{
        width: 76px;
        height: 28px;
        text-align: center;
        line-height: 27px;
        background: url('../../assets/images/pageIndex/圆角矩形 3.png') no-repeat;
        font-size: 14px;
        color: #FFFFFF;
    }*/
    .shortLine img{
        width: 1px;
        height: 24px;
    }
    .loginImg i{
        width:35px;
        height:35px;
        color: #fff;
        line-height: 35px;
        font-size: 24px;
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
    .employment{
        background: url('../../assets/images/pageIndex/圆角矩形 2.png') no-repeat;
    }
    .practitioners{
        margin-left: 21px;
        background: url('../../assets/images/pageIndex/圆角矩形 2 拷贝.png') no-repeat;
    }
    /*  */
    .navTitle{
        color: #000000;
        font-size: 40px;
        font-weight: bold;
    }
    /* */
    .addTitle{
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
        margin:30px 0;
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 60px auto;
    }
    .partTop{
        margin: 70px 0;
    }
    .dotLine{
        margin: 21px 0;
        height: 1px;
        border: 1px dashed #888888;
    }
    /*  */
    .dropdownMenu >div{
        width:270px
    }
    
    .checkBoxs div{
        margin-bottom: 20px;
    }
    /*  */
    .playWith >div{
        width:310px;
        height:153px
    }
    .playWith >div:first-child{
        background-image: url('../../assets/images/scan/圆角矩形 1.png');
    }
    .playWith >div:nth-child(2){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝.png');
    }
    .playWith >div:nth-child(3){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝 2.png');
    }
    .playWith >div:nth-child(4){
        background-image: url('../../assets/images/scan/圆角矩形 1 拷贝 2(1).png');
    }
    
    /*  */
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
    /*  */

    /*  
    .recommandCarou,.recommandCarouItem,.recommandGoodsItem{
        height: 390px;
    }*/
    .recommandGoods >div{
        background: #e4f0ee;
    }
    .recommandGoods >div:nth-child(n+5){
        background: #e4f0ee;
        margin-top: 20px;
    }


    .out{ width:590px; height: 470px; margin:100px auto; border:1px solid #ccc; position: relative; user-select: none;}
        .out .btn{ position:absolute; width:30px; height: 60px; background:rgba(0,0,0,0.3); color:#fff; font-size: 30px; text-align: center; line-height: 60px; font-family: "宋体"; top:calc(50% - 30px); cursor: pointer; transition: background 0.5s;}
        .out .btn:hover{ background:rgba(0,0,0,0.6)}
        .out .btnLeft{ left: 0;}
        .out .btnRit{ right:0;}
        .out .pic{ width:590px; height: 470px;}

</style>