<template>
  <div class="echarts-container">
    <div ref="main" style="width: 420px;height:324px;"></div>
  </div>
</template>

<script>
// 2. 加载 echarts
// import Vue from 'vue'
// import {Component,Prop} from 'vue-property-decorator'
import echarts from 'echarts'
// import EChartOption = echarts.EChartOption

// @Component 
// export default class Echarts extends Vue {
//   @Prop() option ?:EChartOption;
// }

//在 echarts.vue 中
// 引入基本模板
// let echarts = require('echarts/lib/echarts')
// // 引入柱状图组件
// require('echarts/lib/chart/line')
// // 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')

export default {
  props: {
      // 
      
      
      
      opinion: {    //区域名称 - 1
        type: Array,
        default() {
          return []
        }
      },
      
      
      x: {  // x 轴
        type: Array,
        default() {
          return []
        }
      },
    zuotODYNumber: {   // 区域数据 - 1
      type: Array,
      default() {
        return []
      }
    },
  },
  data () {
    return {}
  },
  mounted () {
    var myChart = echarts.init(this.$refs.main)
    myChart.setOption(this.option)
  },
  methods: {}
}
</script>

<style scoped ></style>