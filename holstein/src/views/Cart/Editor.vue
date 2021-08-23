<template>
<div>
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