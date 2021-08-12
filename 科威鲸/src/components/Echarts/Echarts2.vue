<template>
  <div class="echarts-container">
    <!-- 1. 为 ECharts 准备一个具备大小（宽高）的画布容器 DOM -->
    <div ref="main" style="width: 420px;height:324px;"></div>
  </div>
</template>

<script>
// 2. 加载 echarts
import echarts from 'echarts'

export default {
  props: {
    numOrder:{
      type:String
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  // 注意：初始化操作 DOM 一定要写到 mounted 钩子函数中
  mounted () {
    // 3. 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main)
    // 4. 指定图表的配置项和数据
    var option = {
      title: {
        text: '本月订单数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['排行榜']
      },
      xAxis: {
          type: 'category',
          data: ['04-01', '04-02', '04-03', '04-06', '04-07', '04-08']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          name:"本月订单数",
          data: [4, 4, 1, 2, 4, 1],
          type: 'line',
          smooth: true,
          color:'#82d8d0'
      }]
    }

    // 5. 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style scoped ></style>