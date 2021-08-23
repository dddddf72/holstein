<template>
    <div>
        <el-table :data="listData" style="width: 100%" class="abc">
                <el-table-column v-for="(bcd, index) in bcd" :key="index" 
                :prop="bcd.prop" :label="bcd.label" width="200" 
      > 
                  <template slot-scope="scope">
                    <div v-if="scope.row[bcd.prop]==='Y'">
                                        <img style="width:15px;height:15px" :src="docheck" alt="">
                    </div>
                    <div v-else-if="scope.row[bcd.prop]==='N'">
                                        <img style="width:15px;height:15px" :src="notcheck" alt="">
                    </div>
                    <div v-else>
                      {{scope.row[bcd.prop]}}
                    </div>
                  </template>
                
                </el-table-column>
        </el-table>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp';

import docheck from '@/assets/images/icon/已选择.png';
import notcheck from '@/assets/images/icon/选择.png';
export default {
    async mounted() {
        var reslist = this.list; //接口数据来源
        var length = reslist.length;
        var listData = reslist.slice(2, length);
        var titlelength = 3; //几种选择
        var bcd = [];
        for (let i = 0; i <= titlelength; i++) {
            if (i == 0) {
                bcd[i] = { prop: 'title', label: '包' };
            } else if (i == 1) {
                bcd[i] = { prop: 'oneValue', label: 'basic' };
            } else if (i == 2) {
                bcd[i] = { prop: 'secondValue', label: 'Standard' };
            } else if (i == 3) {
                bcd[i] = { prop: 'thirdValue', label: 'Premium' };
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let y = 0; y <= titlelength; y++) {
                // debugger;
                if (y == 0 && reslist[i].title != null) {
                    bcd[y].label += '\n' + reslist[i].title;
                } else if (y == 1) {
                    bcd[y].label += '\n' + reslist[i].oneValue;
                } else if (y == 2 && reslist[i].secondValue != null) {
                    bcd[y].label += '\n' + reslist[i].secondValue;
                } else if (y == 3 && reslist[i].thirdValue != null) {
                    bcd[y].label += '\n' + reslist[i].thirdValue;
                }
            }
        }
        this.bcd = bcd;
        this.listData = listData;
    },
    data() {
        return {
            docheck,
            notcheck,

            list: [
                {
"isText": true,
"title": "服务名",
"oneValue": "基本复印护理",
"secondValue": "高级复印护理",
"thirdValue": "专家副本关怀",
"customSort": 1
},
{
"isText": true,
"title": "服务描述",
"oneValue": "我将在 24 小时内校对并轻松重写 100 个单词。",
"secondValue": "我将在 24 小时内校对并轻松重写 100 个单词。",
"thirdValue": "我将在 24 小时内校对并轻松重写 100 个单词。",
"customSort": 2
},
{
"isText": true,
"title": "交付时间",
"oneValue": "5天内",
"secondValue": "4天内",
"thirdValue": "3天内",
"customSort": 3
},
{
"isText": true,
"title": "可修改次数",
"oneValue": "1",
"secondValue": "2",
"thirdValue": "无限次",
"customSort": 4
},
{
"isText": true,
"title": "可接单量",
"oneValue": "12",
"secondValue": "13",
"thirdValue": "12",
"customSort": 5
},
{
"isText": false,
"title": "语法和拼写",
"oneValue": "Y",
"secondValue": "Y",
"thirdValue": "Y",
"customSort": 6
},
{
"isText": false,
"title": "内容重写",
"oneValue": "Y",
"secondValue": "Y",
"thirdValue": "Y",
"customSort": 7
},
{
"isText": false,
"title": "结构编辑",
"oneValue": "N",
"secondValue": "Y",
"thirdValue": "Y",
"customSort": 8
},
{
"isText": false,
"title": "打印布局",
"oneValue": "Y",
"secondValue": "Y",
"thirdValue": "Y",
"customSort": 9
},
{
"isText": false,
"title": "反馈",
"oneValue": "N",
"secondValue": "Y",
"thirdValue": "Y",
"customSort": 10
},
{
"isText": true,
"title": "包含的单词",
"oneValue": "150",
"secondValue": "1000",
"thirdValue": "2500",
"customSort": 11
},
{
"isText": true,
"title": "价格",
"oneValue": "50",
"secondValue": "100",
"thirdValue": "150",
"customSort": 12
}
            ],
            // bcd: [{prop:包,label:'包 + \n + name + \n + customDesc'}],
            bcd: [],
            listData: []
        };
    },
    methods: {
        edutype(row) {
            console.log(row);
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },

        //合计
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map((item) => Number(item[column.property]));
                if (!values.every((value) => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
            });

            return sums;
        }
    }
};
</script>

<style scope>
.abc .cell {
    white-space: pre-line !important;
}
</style>