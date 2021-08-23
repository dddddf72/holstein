<template>
  <div>
    <div id="main2" style="width: 420px;height:324px;"></div>
    
  </div>
</template>

<script>
import echarts from "echarts";
import GoodsHttp from '@/model/GoodsHttp'

export default {
  data() {
    return {
      userId:19,
      homePageData:{},

      amountlist:[],
      orderMap:[],

      xlist:[],
      ylist:[],
    };
  },
  methods: {
    line() {
      let myChart = echarts.init(document.getElementById("main2"));
      let option = {
        title: {
                    text: '本月订单数', 
                },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data: ['排行榜'] // 区域名称
              },
              xAxis: {   // x 轴
                  type:'category',
                  data: this.xlist
              },
              yAxis: {   // y 轴
                  type: 'value'
              },
              series:[{
                    name: '本月成交额',
                    type: 'line',
                    color: '#82d8d0',
                    data: this.ylist,
                    smooth:true
                }]
      };
      myChart.setOption(option);
    },
    
  },
  async mounted() {
    var result = await GoodsHttp.homePageData(this.userId)
    await this.$nextTick(function (){
      this.orderMap = result.data.biz.orderMap
      this.xlist = result.data.biz.orderMap.xList
      this.ylist = result.data.biz.orderMap.yList
    });
    this.line();
  }
};
</script>

<style>
</style>
