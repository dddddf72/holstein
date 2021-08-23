<template>
    <div class="navMenu" >
        <template v-for="navMenu in navMenus">
            <el-menu-item @change="handleClic(navMenu)"
                v-if="!navMenu.children && navMenu"
                :key="navMenu.id"
                :data="navMenu"
                :index="navMenu.id.toString()"  
            >
                <span slot="title">{{ navMenu.cateName }}</span>
            </el-menu-item>

            <el-submenu v-if="navMenu.children && navMenu" :key="navMenu.cateName"
                :data="navMenu" :index="navMenu.id.toString()">
                <template slot="title">
                    <a v-bind:href="['/scan?keyPath=' + navMenu.id + '&ProId=']"><span slot="title">{{ navMenu.cateName }}</span></a>
                </template>
                <NavMenu :navMenus="navMenu.children"></NavMenu>
            </el-submenu>
        </template>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'

export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
        return {
            
                NavTitle:[],
                NavTitleOne:"",
                NavTitleChild:"",
                ServCateId:[],
                total:20
        };
    },
    methods: {
        // handleSelect1(key, keyPath) {
        //         console.log(key);//2
        //         console.log(keyPath[0]);
        //     },
        
            // //点击一级菜单跳转
            async handleClic(name){
              // debugger
                var keyPath = name.id;
                this.$router.push(`scan?keyPath=${keyPath}`);

                // var res1 = await GoodsHttp.serviceProCategory(ProId)
                // console.log(res1.data.biz.content)
                // res1.data.biz.content.forEach(item=>{
                //     if(item.id == ProId){
                //         // this.NavTitleOne = item
                //         this.NavTitleChild = this.NavTitleOne.children
                //         console.log(this.NavTitleChild)
                //     }
                // })
                // //一二级变化
                // var resSErProId = await GoodsHttp.servProCategoryId(ProId)
                // this.ServCateId = resSErProId.data.biz.list
                // this.total = resSErProId.data.biz.total
                // // console.log(this.ServCateId)
            },
    }
};
</script>

<style scope>
.navMenu a{
      color: #333;
}

    /* 水平样式 */
     .el-menu--horizontal>div>.el-submenu {
        float: left;
    }
    /* 一级菜单的样式 */
    .el-menu--horizontal>div>.el-menu-item {
        float: left;
        height: 60px;
        line-height: 60px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
.el-submenu__title{
    height: 75px;
    line-height: 75px;
}
</style>
