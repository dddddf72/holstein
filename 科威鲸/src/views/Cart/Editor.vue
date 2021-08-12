<template>
<div>
    <!--<editor-bar v-model="goods.detail" :isClear="isClear" @change="change"></editor-bar> -->
    <!--<editor-bar :content="articleContent" :getFullText="changeEditor"  v-bind="editForm.content"></editor-bar> -->
    <editor-bar :content="infoForm.articleContent" :getFullText="changeEditor" 
				v-bind="editForm.content"></editor-bar>
</div>
</template>

<script>
import EditorBar from '../../components/Editor.vue';

export default {
    components: { EditorBar },
    data() {
        return {
            isClear: false,
            articleContent:''
        }
    },  
    methods: {
        change(val) {
            // console.log(val)
            this.goods.detail = val
        },
    }
}
</script>