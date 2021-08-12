<template>
    <el-container style="margin:70px auto;width:1280px">
        <el-aside width="300px" style="background:red">
            <list></list>
        </el-aside>
        <el-main style="background:yellow">
            <online></online>
        </el-main>
    </el-container>
</template>

<script>
import list from '../../views/static/list.vue'
import online from '../../views/static/online.vue'
    export default {
        components: {
            list,online
        },
    }
</script>

<style scoped>

</style>