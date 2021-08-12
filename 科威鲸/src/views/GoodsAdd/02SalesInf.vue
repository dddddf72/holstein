<template>
    <div class="home">
        <Holstein></Holstein>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div class="addTitle">新增商品</div>
                <!-- <el-steps :active="active" align-center process-status="process" finish-status="success">
                    <el-step title="基本信息填写" ></el-step>
                    <el-step title="售卖信息填写" ></el-step>
                    <el-step title="常见问题与需求" ></el-step>
                    <el-step title="完成注册" ></el-step>
                </el-steps> -->
                <div data-v-270d2505="" class="el-steps el-steps--horizontal" style="height:110px;align-items: center;">
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-success">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <img src="../../assets/images/regist/基本信息/组 15.png" alt="" class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"> -->
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                                <!-- <i class="el-step__icon-inner ">1</i> -->
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-success">基本信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">2</i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-process">售卖信息填写</div>
                            
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;max-width: 25%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 300ms; border-width: 1px; width: 100%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">常见问题与需求</div>
                            
                        </div>
                    </div>
                    
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; max-width: 25%;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line">
                                <i class="el-step__line-inner"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">提交完成</div>
                            
                        </div>
                    </div>
    </div>
                <div class="multiFlex" style="display:flex;justify-content:space-between;align-items:center;margin-top:30px">
                    <div class="addTitle">商品价格定制</div>
                    <el-switch
                        v-model="show3"
                        active-text="多配置"
                        inactive-text="">
                    </el-switch>
                </div>
                <div class="stepsContent1">
                    <div style="margin-top: 20px;">
                        <div class="tableTitle">配置参数</div>
                        <table cellspacing="0" cellpadding="0" border class="el-table__header" style="width: 1280px;">
                            <!-- <colgroup>
                                <col name="el-table_1_column_1" width="320">
                                <col name="el-table_1_column_2" width="320">
                                <col name="el-table_1_column_3" width="320">
                                <col name="el-table_1_column_4" width="320">
                                <col name="gutter" width="0">
                            </colgroup>
                            <thead class="has-gutter">
                                <tr class="">
                                    <th colspan="1" rowspan="1" class="el-table_1_column_1 is-leaf"><div class="cell">商品id</div></th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_2 is-leaf"><div class="cell">基础</div></th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_3 is-leaf"><div class="cell">标准</div></th>
                                    <th colspan="1" rowspan="1" class="el-table_1_column_4 is-leaf"><div class="cell">优质</div></th>
                                    <th class="gutter" style="width: 0px; display: none;"></th>
                                </tr>
                            </thead> -->
                            <tbody  style="text-align:center">
                            <tr class="" style="background:#eeeeee;height:60px;line-height:60px;font-size:16px">
                                <th rowspan="4" style="background:#eeeeee;width:320px;"></th>
                                <!--<th v-for="th in tableTh" :key="th" style="background:#eeeeee;width:320px;height:60px;line-height:60px;font-size:16px">
                                    {{th.title}}
                                </th> -->
                                <th>基础</th>

                            <transition name="slide-fade">
                                <th v-show="show3">标准</th>
                            </transition>
                            <transition name="slide-fade">
                                <th v-show="show3">优质</th>
                            </transition>
                            </tr>
                                <!-- <tr v-for="index in dataList" :key="index">
                                    <td rowspan="1">
                                        为您的fu
                                    </td>
                                    <td rowspan="1" class="el-table_1_column_1 is-leaf"><div class="cell">{{index}}</div></td>
                                    <td v-for="item in dataList" :key="item">{{item.c1}}</td>
                                </tr> -->
                                    <tr style="height:110px;line-height:110px">
                                        <td><div><el-input v-model="input" placeholder="为您的服务器命名"></el-input></div></td>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input v-model="input" placeholder="为您的服务器命名"></el-input></div></td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input v-model="input" placeholder="为您的服务器命名"></el-input></div></td>
                                    </transition>
                                    </tr>
                                    <tr style="height:160px;line-height:10px">
                                        <td><div><el-input type="textarea" v-model="input" placeholder="对服务进行简单的描述"></el-input></div></td>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input type="textarea" v-model="input" placeholder="对服务进行简单的描述"></el-input></div></td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input type="textarea" v-model="input" placeholder="对服务进行简单的描述"></el-input></div></td>
                                    </transition>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <el-select v-model="value" placeholder="交付时间">
                                                    <el-option
                                                    v-for="item in options3"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="交付时间">
                                                    <el-option
                                                    v-for="item in options3"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="交付时间">
                                                    <el-option
                                                    v-for="item in options3"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>
                                    </tr>

                                    <tr>
                                        <td style="text-align:left;">
                                            <p style="margin-left:40px;display:inline-block">可修改次数</p>    
                                        </td>
                                        <td>
                                            <div>
                                                <el-select v-model="value" placeholder="可修改次数">
                                                    <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="可修改次数">
                                                    <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="可修改次数">
                                                    <el-option
                                                    v-for="item in options1"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>

                                    </tr>
                                    <tr>
                                        <td style="text-align:left;">
                                            <p style="margin-left:40px;display:inline-block">商品数量</p>    
                                        </td>
                                        <td>
                                            <div>
                                                <el-select v-model="value" placeholder="商品数量">
                                                    <el-option
                                                    v-for="item in options2"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="商品数量">
                                                    <el-option
                                                    v-for="item in options2"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div>
                                                <el-select v-model="value" placeholder="商品数量">
                                                    <el-option
                                                    v-for="item in options2"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </td>
                                    </transition>
                                    </tr>
                                    <tr>
                                        <td style="text-align:left;">
                                            <p style="margin-left:40px;display:inline-block">
                                                <el-input v-model="input" placeholder="请填写标题" style="width:120px"></el-input>
                                            </p>
                                            <el-switch style="margin-left:2px;display:inline-block"
                                                v-model="showTxt1"
                                                active-text="文本"
                                                inactive-text="">
                                            </el-switch>
                                        </td>
                                        <td>
                                            <div v-if="showTxt1==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt1!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div v-if="showTxt1==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt1!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div v-if="showTxt1==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt1!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    </transition>
                                    </tr>
                                    <tr>
                                        <td style="text-align:left;">
                                            <p style="margin-left:40px;display:inline-block">
                                                <el-input v-model="input" placeholder="请填写标题" style="width:120px"></el-input>
                                            </p>
                                            <el-switch style="margin-left:1px;display:inline-block"
                                                v-model="showTxt2"
                                                active-text="文本"
                                                inactive-text="">
                                            </el-switch>
                                        </td>
                                        <td>
                                            <div v-if="showTxt2==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt2!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div v-if="showTxt2==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt2!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3">
                                            <div v-if="showTxt2==true"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                                            <div v-else-if="showTxt2!==true"><el-checkbox v-model="checked">备选项</el-checkbox></div>
                                        </td>
                                    </transition>
                                    </tr>
                                    
                                    <tr>
                                        <td style="text-align:left;">
                                            <p style="margin-left:40px;">价格</p>
                                        </td>
                                        <td><div><el-input v-model="inputPrice" placeholder="请输入价格"></el-input></div></td>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input v-model="inputPrice" placeholder="请输入价格"></el-input></div></td>
                                    </transition>
                                    <transition name="slide-fade">
                                        <td v-show="show3"><div><el-input v-model="inputPrice" placeholder="请输入价格"></el-input></div></td>
                                    </transition>
                                    </tr>
                            </tbody>
                        </table>
                        <!-- <el-row-transition>
                            <div v-show="show3">
                            </div>
                        </el-row-transition> -->
                    </div>
                    <div style="margin-top: 70px;">
                        <div class="tableTitle">追加服务</div>
                        <div class="expDelivery" style="width: 1280px;border:1px solid #d5d5d5">
                            <div class="fasterDeliveryTitle" style="height:80px;padding:0 40px;display:flex;justify-content:space-between;align-items:center">
                                <div class="fasterL"><el-checkbox v-model="showExp">特快交付</el-checkbox></div>
                                <div class="fasterR" style=""><img src="../../assets/images/goodsAdd/灯泡.png" alt=""></div>
                            </div>
                            <div class="expDeliveryShow" v-show="showExp" style="padding:0 40px;background:#eeeeee">
                                <el-row style="height:80px;line-height:80px">
                                    <el-col :span="12"><div class="grid-content bg-purple">基础</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="value" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in optionsAddiSerTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            额外
                                            <el-select v-model="value" placeholder="请选择金额">
                                                <el-option
                                                v-for="item in optionsAddiSerRmb"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row style="height:80px;line-height:80px" v-show="show3">
                                    <el-col :span="12"><div class="grid-content bg-purple">标准</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="value" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in optionsAddiSerTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            额外
                                            <el-select v-model="value" placeholder="请选择金额">
                                                <el-option
                                                v-for="item in optionsAddiSerRmb"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row style="height:80px;line-height:80px" v-show="show3">
                                    <el-col :span="12"><div class="grid-content bg-purple">优质</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="value" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in optionsAddiSerTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            额外
                                            <el-select v-model="value" placeholder="请选择金额">
                                                <el-option
                                                v-for="item in optionsAddiSerRmb"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="expDeliveryContent">
                                <div class="expDeliveryContain" style="border-bottom:1px solid #d5d5d5">
                                    <el-form ref="form" :model="expDeliveryform" label-width="80px" style="height:300px">
                                        <el-form-item label="标题" style="margin-top:40px">
                                            <el-input v-model="expDeliveryform.title" style="width:320px;margin-left:32px"></el-input>
                                            <span style="margin-left:10px;">0/20最大</span>
                                        </el-form-item>
                                        <div data-v-4be286b1="" class="el-form-item expdeliDesc">
                                            <label class="el-form-item__label" style="width: 80px;">描述</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;">
                                                <div  class="expDesctextarea el-textarea" style="width: 830px; height: 140px; margin-left: 32px;">
                                                    <textarea autocomplete="off" class="el-textarea__inner" style="min-height: 33px;"></textarea><!---->
                                                </div><!---->
                                            </div>
                                        </div>
                                        <div style="display:flex;width:790px;margin-left:112px">
                                            <el-col :span="11">
                                                额外费用
                                                <el-input style="width:190px;"
                                                    placeholder=""
                                                    v-model="inputExpRmb">
                                                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                                                </el-input>
                                            </el-col>
                                            <el-col :span="11">
                                                额外时间
                                                <el-input style="width:190px;"
                                                    placeholder=""
                                                    v-model="inputExpTime">
                                                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                                                </el-input>
                                            </el-col>
                                        </div>
                                    </el-form>
                                </div>
                            </div>
                            <div class="additionalServive" style="padding:0 40px;height:80px;line-height: 80px;font-size:18px;">
                                <i class="el-icon-circle-plus" style="font-size:1em;font-weight:bold"><span style="margin-left:20px">添加追加服务</span> </i>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="nextStepBtn" style="display:flex">
                    <el-button style="margin-top: 20px;" @click="$router.back(-1)">上一步</el-button>
                    <el-button style="margin-top: 20px;color:#fff;background:#81d8d0" @click="next">下一步</el-button>
                </div>
            </div>
        </div>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
// import Editor from "@/components/Editor";
// import EditorBar  from "../../components/Editor";
// import Holstein from '@/components/Nav/Holstein.vue'
import Holstein from '../../components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
export default {
    components: {
        // EditorBar,
        Holstein,Footer
        },
    data() {
        return {
            show3: true,
            orderBy: ["c1", "c2"], //可以控制字段的先后顺序，想调整列的先后顺序，改这个数组就行，可以做个性化设置
            tableTh: {//表头的描述信息
                c1: {
                title: "基础", //还可以增加其他描述，比如width等
                align: "left"
                },
                c2: {
                title: "标准",
                align: "center"
                },
                c3: {
                title: "优质",
                align: "right"
                },
            },
            dataList: [
                {
                //数据包，字段名作为关键字，便于列的调整先后顺序
                c1: "为您的服务命名",
                c2: "123123123"
                },
                {
                c1: "企鹅2",
                c2: "7897899787"
                },
                {
                c1: "阿里爸爸2",
                c2: "456456456"
                },
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            options: [{
            value: '选项1',
            label: '1次'
            }, {
            value: '选项2',
            label: '2次'
            }, {
            value: '选项3',
            label: '3次'
            }, {
            value: '选项4',
            label: '4次'
            }, {
            value: '选项5',
            label: '5次'
            }],
            input:'',
            input2:'',
            inputExpRmb:'',
            inputExpTime:'',
            options1:'',
            options2:[{
                value: '选项1',
                label: '10个'
                }, {
                value: '选项2',
                label: '20个'
                }, {
                value: '选项3',
                label: '30个'
                }, {
                value: '选项4',
                label: '40个'
                }, {
                value: '选项5',
                label: '50个'
                }],
            options3:[
                {
                value: '选项1',
                label: '1天'
                }, {
                value: '选项2',
                label: '2天'
                }, {
                value: '选项3',
                label: '3天'
                }
            ],
            optionsAddiSerTime:[
                {
                value: '选项1',
                label: '1天'
                }, {
                value: '选项2',
                label: '2天'
                }, {
                value: '选项3',
                label: '3天'
                }
            ],
            optionsAddiSerRmb:[
                {value: '选项1',"label": "三全鲜食（北新泾店）"},
                {value: '选项2',"label": "新旺角茶餐厅"},
                {value: '选项3',"label": "泷千家(天山西路店)"},
                {value: '选项4',"label": "十二泷町"}
            ],
            value:'',
            checked:'',
            showTxt1:true,
            showTxt2:false,
            inputPrice:'',
            showExp:true,
            expDeliveryform:{
                title:'',
                desc:''
            }
        }
    },
    
    methods: {
        back(){
            this.$router.push({name:'03CommonPro'})
        },
        next(){
            this.$router.push({name:'03CommonPro'})
        },
        handleClick(){
            console.log(1)
        },
        objectSpanMethod({ rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 2 === 0) {
                    return {
                    rowspan: 2,
                    colspan: 1
                    };
                } else {
                    return {
                    rowspan: 0,
                    colspan: 0
                    };
                }
            }
        }

    },
    
}
</script>
<style scoped>
.home{
    width: 100%;
}
.center{
    margin: 0 320px;
}
    /*  */
    .addTitle{
        width: 180px;
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #000000;
    }
    .merchantRegist{
        width: 100%;
        /*height: 2000px;*/
    }
    .merchantRegistration{
        width: 1280px;
        margin: 50px auto;
    }
    .el-steps{
        margin: 40px 0 0 0;
    }
    .el-step__head.is-process {
        color: #303133 !important;
        border-color: #303133 !important;
    }
    .el-step__head.is-success,.el-step__title.is-success {
        color: #81d8d0 !important;
        border-color: #81d8d0 !important;
    }
    /*  */
    .tableTitle{
        font-size: 18px;
        color: #000000;
        font-weight: bold;
        margin: 41px 0 18px 0;
    }
    table{
        border-collapse:collapse;
        border: 1px solid #d8d8d8;
        }
    .el-table__header td,th{
        border: 1px solid #d8d8d8;
    }
    tbody tr {
        height:70px;
        line-height: 70px;
        /* text-align: center; */
    }
    tbody tr >>>.el-textarea__inner{
        height: 160px;
    }
    tbody tr >>>.el-textarea__inner,
    tbody tr >>>.el-input__inner{
        border: none;
    }
    .slide-fade-enter-active {
    transition: all .8s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
    /*  */
    .expdeliDesc .expDesctextarea .el-textarea__inner{
        height:140px !important;
    }
</style>