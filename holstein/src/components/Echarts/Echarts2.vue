<template>
  <div class="echarts-container">
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
  mounted () {
    var myChart = echarts.init(this.$refs.main)
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

    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style scoped ></style>