<template>
    <div>
        <el-table :data="listData" style="width: 100%" class="abc">
            <el-table-column prop="title" label="package" width="200"></el-table-column>
                <el-table-column v-for="(bcd, index) in bcd" :key="index" :prop="bcd.prop" :label="bcd.label" width="200"> 
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

import docheck from '@/assets/images/icon/已选择.png';
import notcheck from '@/assets/images/icon/选择.png';
export default {
    async mounted() {
        var reslist = this.list; //接口数据来源
        var length = reslist.length;
        var listData = reslist.slice(2, length);
        var titlelength = 1; //几种选择
        var bcd = [];
        for (let i = 0; i < titlelength; i++) {
            if (i == 0) {
            //     bcd[i] = { prop: 'title', label: '包' };
            // } else if (i == 1) {
                bcd[i] = { prop: 'oneValue', label: '基礎版' };
            } else if (i == 1) {
                bcd[i] = { prop: 'secondValue', label: '標準版' };
            } else if (i == 2) {
                bcd[i] = { prop: 'thirdValue', label: '溢價版' };
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let y = 0; y < titlelength; y++) {
                if (y == 0 && reslist[i].title != null) {
                //     bcd[y].label += '\n' + reslist[i].title;
                // } else if (y == 1) {
                    bcd[y].label += '\n' + reslist[i].oneValue;
                } else if (y == 1 && reslist[i].secondValue != null) {
                    bcd[y].label += '\n' + reslist[i].secondValue;
                } else if (y == 2 && reslist[i].thirdValue != null) {
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
"secondValue": null,
"thirdValue": "null",
"customSort": 1
},
{
"isText": true,
"title": "服务描述",
"oneValue": "我将在 24 小时内校对并轻松重写 100 个单词。",
"secondValue": null,
"thirdValue": "null",
"customSort": 2
},
{
"isText": true,
"title": "交付时间",
"oneValue": "5天内",
"secondValue": null,
"thirdValue": null,
"customSort": 3
},
{
"isText": true,
"title": "可修改次数",
"oneValue": "1",
"secondValue": null,
"thirdValue": null,
"customSort": 4
},
{
"isText": true,
"title": "可接单量",
"oneValue": "12",
"secondValue": null,
"thirdValue": null,
"customSort": 5
},
{
"isText": false,
"title": "语法和拼写",
"oneValue": "Y",
"secondValue": null,
"thirdValue": null,
"customSort": 6
},
{
"isText": false,
"title": "内容重写",
"oneValue": "Y",
"secondValue": null,
"thirdValue": null,
"customSort": 7
},
{
"isText": false,
"title": "结构编辑",
"oneValue": "N",
"secondValue": null,
"thirdValue": null,
"customSort": 8
},
{
"isText": false,
"title": "打印布局",
"oneValue": "Y",
"secondValue": null,
"thirdValue": null,
"customSort": 9
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
        edutyped(row2) {
            console.log(row2);
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