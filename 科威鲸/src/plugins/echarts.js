import * as echarts from 'echarts/core';
import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
);

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//     title: {
//         text: '某楼盘销售情况',
//         subtext: '纯属虚构'
//     },
//     tooltip: {
//         trigger: 'axis'
//     },
//     // legend: {
//     //     data:['意向','预购','成交']
//     // },
//     toolbox: {
//         show: true,
//         feature: {
//             magicType: {show: true, type: ['stack', 'tiled']},
//             saveAsImage: {show: true}
//         }
//     },
//         xAxis: {
//             type: 'category',
//             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             data: [820, 932, 901, 934, 1290, 1330, 1320],
//             type: 'line',
//             smooth: true
//         }]
// };

// option && myChart.setOption(option);
