<template>
    <div class="navMenu" >
        <template v-for="navMenu in navMenus">
            <el-menu-item 
                v-if="!navMenu.children && navMenu"
                :key="navMenu.id"
                :data="navMenu"
                :index="navMenu.name"
            >
                <span slot="title">{{ navMenu.name }}</span>
            </el-menu-item>

            <el-submenu v-if="navMenu.children && navMenu" :key="navMenu.name"
                :data="navMenu" :index="navMenu.name">
                <template slot="title">
                    <span> {{ navMenu.name }}</span>
                </template>
                <NavMenu :navMenus="navMenu.children"></NavMenu>
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
        return {};
    },
    methods: {}
};
</script>

<style>

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
