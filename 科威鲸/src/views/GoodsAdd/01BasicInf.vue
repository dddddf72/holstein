<template>
    <div class="home">
        <Holstein></Holstein>
        <div class="merchantRegist">
            <div class="merchantRegistration">
                <div class="addTitle">{{pageTitle}}</div>
                <el-steps :active="activeIndex - 0" align-center process-status="process" finish-status="success">
                    <el-step title="基本信息填写" ></el-step>
                    <el-step title="售卖信息填写" ></el-step>
                    <el-step title="常见问题与需求" ></el-step>
                    <el-step title="提交完成" ></el-step>
                </el-steps>
                <el-tabs v-model="activeIndex">
                <el-tab-pane label="" name="0">
                    <div class="stepsContent">
                        <div data-v-a72aa574="" class="" style="">
                            <div class="el-card__body" style="">
                                <el-form
                                    data-v-a72aa574=""
                                    class="el-form"
                                    style=""
                                    :model="addform"
                                    :rules="rulesadd"
                                    ref="addform"
                                >
                                    <div
                                        data-v-a72aa574=""
                                        class="el-row"
                                        style="margin-left: -12px; margin-right: -12px"
                                    >
                                        <!-- 商品类目 -->
                                        <el-col :span="12">
                                            <el-form-item
                                                class="el-form-item is-required el-form-item--small"
                                                label="商品类目"
                                                prop="categoryId"
                                            >
                                                <div
                                                    class="el-form-item__content"
                                                    style="margin-left: 130px"
                                                >
                                                    <el-cascader
                                                        v-model="addform.categoryId"
                                                        :props="{
                                                            value: 'id',
                                                            label: 'cateName',
                                                            children: 'children'
                                                        }"
                                                        :options="NavTitle"
                                                        @change="handleChange"
                                                    ></el-cascader>
                                                </div>
                                            </el-form-item>
                                        </el-col>
                                        <!-- 商品名称 -->
                                        <el-col :span="12">
                                            <el-form-item
                                                data-v-a72aa574=""
                                                class="el-form-item is-required el-form-item--small"
                                                label="商品名称"
                                                prop="serviceName"
                                            >
                                                <div
                                                    class="el-form-item__content"
                                                    style="margin-left: 130px"
                                                >
                                                    
                                                       <el-input
                                                        v-model="addform.serviceName"
                                                        placeholder="请输入商品名称"
                                                    ></el-input> 
                                                </div>
                                            </el-form-item>
                                        </el-col>
                                        <!-- 商品排序 -->
                                        <el-col :span="12">
                                            <el-form-item
                                                data-v-a72aa574=""
                                                class="el-form-item is-required el-form-item--small"
                                                label="商品排序"
                                                prop="serviceSort"
                                            >
                                                <div
                                                    class="el-form-item__content"
                                                    style="margin-left: 130px"
                                                >
                                                <el-col :span="10">
                                                <el-input 
                                                    v-model="addform.serviceSort" 
                                                    placeholder="请输入商品排序"
                                                    oninput="if(value>99)value=99;if(value.length>2)value=value.slice(0,2);if(value<1 && value)value=1"></el-input>
                                                </el-col>
                                                </div>
                                            </el-form-item>
                                        </el-col>
                                        <!-- 商品库存 -->
                                        <el-col :span="12">
                                            <el-form-item
                                                data-v-a72aa574=""
                                                class="el-form-item is-required el-form-item--small"
                                                label="可接单量"
                                                prop="orderQuantity"
                                            >
                                                <div
                                                    class="el-form-item__content"
                                                    style="margin-left: 130px"
                                                >
                                                    <el-input
                                                        v-model="addform.orderQuantity"
                                                        type="number"
                                                        oninput="if(value>99999)value=99999;if(value.length>5)value=value.slice(0,5);if(value<1 && value)value=1"
                                                        placeholder="请输入可接单量"
                                                    ></el-input>
                                                </div>
                                            </el-form-item>
                                        </el-col>
                                    </div>
                                    <!-- 商品展示材料 -->
                                    <el-col :span="24">
                                        <el-form-item
                                            data-v-a72aa574=""
                                            class="el-form-item is-required el-form-item--small"
                                            label="商品展示材料（图片/视频）"
                                            prop="filesTwo"
                                        >
                                            <div class="el-form-item__content" style="">
                                                <div
                                                    data-v-a72aa574=""
                                                    class="el-textarea el-input--small"
                                                    style="padding-left: 50px"
                                                >
                                                    <div>注:</div>
                                                    <div>1、商品logo优先级为：视频>第一张图片</div>
                                                    <div>
                                                        2、请务必上传商品图片，默认第一张为封面图；图片最多上传19张，格式为jpg，JPEG，png，
                                                    </div>
                                                    <div>
                                                        3、视频最多上传一个，格式为AM、mov、mvb、rm、FLV、mp4
                                                    </div>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item
                                            data-v-a72aa574=""
                                            class="el-form-item el-form-item--small"
                                            label="上传介绍视频"
                                        >
                                                <el-upload class="avatar-uploader" 
                                                    drag
                                                    action="http://yshopapi.inroyltd.com/api/uploadVideo" 
                                                    :show-file-list="false"
                                                    accept=".mp4,.am,.mov,.mvb,.rm,.flv"
                                                    :on-success="handleVideoSuccess" 
                                                    :before-upload="beforeUploadVideo" 
                                                    :on-progress="uploadVideoProcess">
                                                    <video v-if="addform.Video && videoFlag == false" :src="domain + addform.Video" class="videoBox" controls="controls">您的浏览器不支持视频播放</video>
                                                    <template v-else-if="!addform.Video && videoFlag == false">
                                                        <i class="el-icon-upload"></i>
                                                        <div class="el-upload__text">视频最多上传一个,格式为AM、mov、mvb、rm、FLV、mp4</div>
                                                    </template>
                                                    <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent" style="margin-top:30px;"></el-progress>
                                                </el-upload>
                                                <div class="el-upload__tip" slot="tip">
                                                    只能上传<span style="color: #cc0000"
                                                        >一个MP4</span
                                                    >文件
                                                </div>
                                          
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item
                                            class="el-form-item el-form-item--small"
                                            label="上传介绍图片"
                                            label-width="100px"
                                        >
                                            <div class="el-form-item__content" style="">
                                                <div data-v-1c9bbdc3="" data-v-a72aa574="">
                                                    <el-upload
                                                        action="action"
                                                        list-type="picture-card"
                                                        accept=".jpg,.jpeg,.png"
                                                        :on-preview="handleContImgPreview"
                                                        :on-remove="handleContImgRemove"
                                                        :before-upload="beforeUploadImage" 
                                                        :limit="19"
                                                        :on-exceed="exceedTips"
                                                        :http-request="uploadImage"
                                                        :file-list="addform.imgs2"
                                                    >
                                                        <i class="el-icon-plus"></i>
                                                    </el-upload>
                                                    <el-dialog
                                                        :visible.sync="dialogContImgVisible"
                                                        append-to-body
                                                    >
                                                        <img width="100%" :src="dialogContImgUrl" />
                                                    </el-dialog>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <!-- 商品描述 -->
                                    <el-col :span="24">
                                        <el-form-item
                                            class="el-form-item is-required el-form-item--small"
                                            label="商品描述"
                                            prop="serviceDesc"
                                        >
                                            <span style="color: red; font-size: 14px; line-height: 32px"
                                                >(2000个字)</span
                                            >
                                            <div class="el-form-item__content" style="padding-bottom:50px">
                                                <!--<el-input
                                                    type="textarea"
                                                    v-model="addform.serviceDesc"
                                                ></el-input>-->
                                                <quill-editor v-model="addform.serviceDesc" ref="myQuillEditor" style="height: 300px;" :options="editorOption"> </quill-editor>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                </el-form>
                            </div>
                        </div>
                    </div>
                    <div class="nextStepBtn">
                        <el-button
                            style="margin-top: 12px; color: #fff; background: #81d8d0"
                            @click="submitaddbasic('addform')"
                            >下一步</el-button
                        >
                    </div>
                </el-tab-pane>
                <el-tab-pane label="" name="1">
                    <div class="multiFlex" style="display:flex;justify-content:space-between;align-items:center;margin-top:30px">
                    <div class="addTitle">商品价格定制</div>
                    <el-select v-model="settingValue" placeholder="请选择">
                        <el-option
                        v-for="item in setting"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="stepsContent1">
                    <div style="margin-top: 20px; background-color: #eeeeee">
                        <div class="tableTitle" style="background-color: #fff; margin: 0; padding:40px 0 18px">配置参数</div>
                        <div class="tableInfro">
                            <!-- <table cellspacing="0" cellpadding="0" border class="el-table__header" style="background-color: #fff;width: 1280px">
                                <tbody  style="text-align:center;">
                                    <tr class="" style="background:#eeeeee;height:60px;line-height:60px;font-size:16px">
                                        <th rowspan="1" style="background:#eeeeee;width:320px;"></th>
                                        <th>基础</th>
                                        <th>标准</th>
                                        <th>优质</th>
                                    </tr>
                                </tbody>
                            </table> -->
                            <el-table
                            :data="pricesCustoms">
                                <el-table-column label="" prop="title">
                                    <template slot-scope="scope">
                                        <el-row v-if="scope.$index < 5 || scope.row.title == '价格'">
                                            <p style="margin-left:40px;display:inline-block">{{scope.row.title}}</p>    
                                        </el-row>
                                        <el-row v-else>
                                            <el-row style="display:flex;align-items: center;">
                                                <!-- <div style="margin-left:40px;display:inline-block"> -->
                                                    <el-col :span="12">
                                                         <el-input v-model="scope.row.title" placeholder="请填写配置参数名"></el-input>
                                                    </el-col>
                                                <!-- </div> -->
                                                <el-col :span="12">
                                                    <el-switch style="margin-left:2px;display:inline-block"
                                                        v-model="scope.row.isText"
                                                        :active-value="1"
                                                        :inactive-value="0"
                                                        active-text="文本"
                                                        @change="changeText(scope.row,scope.$index)">
                                                    </el-switch>
                                                </el-col>
                                            </el-row>
                                        </el-row>
                                    </template>
                                </el-table-column>
                                <el-table-column label="基础">
                                    <template slot-scope="scope" >
                                        <el-row v-if="scope.row.title == '交付时间'">
                                            <el-select v-model="scope.row.oneValue" placeholder="请选择交付时间" style="float:left;width:100%">
                                                <el-option
                                                    v-for="item in deliverTime"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"></el-option>
                                            </el-select>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '可修改次数'">
                                            <el-input v-model="scope.row.oneValue" placeholder="请输入可修改次数" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '商品数量'">
                                            <el-input v-model="scope.row.oneValue" placeholder="请输入商品数量" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '价格'">
                                            <el-input v-model="scope.row.oneValue" placeholder="请输入价格" onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                        </el-row>
                                        <el-row v-else>
                                            <template v-if="scope.row.isText > 0">
                                                <el-col :span="16">
                                                    <el-input v-model="scope.row.oneValue" placeholder="请输入服务名"  v-if="scope.row.title == '服务名'"></el-input>
                                                    <el-input v-model="scope.row.oneValue" placeholder="请输入服务描述" v-else-if="scope.row.title == '服务描述'"></el-input>
                                                    <el-input v-model="scope.row.oneValue" placeholder="请输入配置参数" v-else></el-input>
                                                </el-col>
                                            </template>
                                            <template v-else>
                                                <el-col :span="16">
                                                <el-checkbox v-model="scope.row.oneValue" true-label="true"  false-label="false"  style="margin:10px 0 0 15px" ></el-checkbox>
                                                </el-col>
                                            </template>
                                            <el-col :span="6" class="editBtn" v-if="scope.row.customSort > 5 && scope.row.title !== '价格' && settingValue == 1" style="margin-left:10px">
                                                <el-button type="text" @click="addCustomeLine(scope.row,scope.$index)">增加</el-button>
                                                <el-button type="text" @click="delCustomeLine(scope.$index,2)" v-if="scope.$index > 5">删除</el-button>
                                            </el-col>
                                        </el-row>
                                    </template>
                                </el-table-column>
                                <el-table-column label="标准">
                                    <template slot-scope="scope">
                                        <el-row v-if="scope.row.title == '交付时间'">
                                            <el-select v-model="scope.row.secondValue" placeholder="请选择交付时间" style="float:left;width:100%">
                                                <el-option
                                                    v-for="item in deliverTime"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"></el-option>
                                            </el-select>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '可修改次数'">
                                            <el-input v-model="scope.row.secondValue" placeholder="请输入可修改次数" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '商品数量'">
                                            <el-input v-model="scope.row.secondValue" placeholder="请输入商品数量" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '价格'">
                                            <el-input v-model="scope.row.secondValue" placeholder="请输入价格" onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                        </el-row>
                                        <el-row v-else>
                                            <template v-if="scope.row.isText > 0">
                                                <el-col :span="16">
                                                    <el-input v-model="scope.row.secondValue" placeholder="请输入服务名"  v-if="scope.row.title == '服务名'"></el-input>
                                                    <el-input v-model="scope.row.secondValue" placeholder="请输入服务描述" v-else-if="scope.row.title == '服务描述'"></el-input>
                                                    <el-input v-model="scope.row.secondValue" placeholder="请输入配置参数" v-else></el-input>
                                                </el-col>
                                            </template>
                                            <template v-else>
                                                <el-col :span="16">
                                                <el-checkbox v-model="scope.row.secondValue" true-label="true"  false-label="false"  style="margin:10px 0 0 15px" ></el-checkbox>
                                                </el-col>
                                            </template>
                                            <el-col :span="6" class="editBtn" v-if="scope.row.customSort > 5 && scope.row.title !== '价格'  && settingValue == 2" style="margin-left:10px">
                                                <el-button type="text" @click="addCustomeLine(scope.row,scope.$index)">增加</el-button>
                                                <el-button type="text" @click="delCustomeLine(scope.$index,2)" v-if="scope.$index > 5">删除</el-button>
                                            </el-col>
                                        </el-row>
                                    </template>
                                </el-table-column>
                                <el-table-column label="优质" prop="thirdValue">
                                    <template slot-scope="scope" >
                                        <el-row v-if="scope.row.title == '交付时间'">
                                            <el-select v-model="scope.row.thirdValue" placeholder="请选择交付时间" style="float:left;width:100%">
                                                <el-option
                                                    v-for="item in deliverTime"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"></el-option>
                                            </el-select>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '可修改次数'">
                                            <el-input v-model="scope.row.thirdValue" placeholder="请输入可修改次数" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '商品数量'">
                                            <el-input v-model="scope.row.thirdValue" placeholder="请输入商品数量" type="number"></el-input>
                                        </el-row>
                                        <el-row v-else-if="scope.row.title == '价格'">
                                            <el-input v-model="scope.row.thirdValue" placeholder="请输入价格" onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                        </el-row>
                                        <el-row v-else>
                                            <template v-if="scope.row.isText > 0">
                                                <el-col :span="16">
                                                    <el-input v-model="scope.row.thirdValue" placeholder="请输入服务名"  v-if="scope.row.title == '服务名'"></el-input>
                                                    <el-input v-model="scope.row.thirdValue" placeholder="请输入服务描述" v-else-if="scope.row.title == '服务描述'"></el-input>
                                                    <el-input v-model="scope.row.thirdValue" placeholder="请输入配置参数" v-else></el-input>
                                                </el-col>
                                            </template>
                                            <template v-else>
                                                <el-col :span="16">
                                                <el-checkbox v-model="scope.row.thirdValue" true-label="true"  false-label="false"  style="margin:10px 0 0 15px" ></el-checkbox>
                                                </el-col>
                                            </template>
                                            <el-col :span="6" class="editBtn" v-if="scope.row.customSort > 5 && scope.row.title !== '价格'  && settingValue == 3" style="margin-left:10px">
                                                <el-button type="text" @click="addCustomeLine(scope.row,scope.$index)">增加</el-button>
                                                <el-button type="text" @click="delCustomeLine(scope.$index,2)" v-if="scope.$index > 5">删除</el-button>
                                            </el-col>
                                        </el-row>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="layer" :style="'width:' + layerWidth + 'px' " v-if="settingValue < 3">
                                <div>
                                    <p class="p1">此处不可编辑</p>
                                    <p class="p2">请在右上角选择配置方可编辑</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 70px;">
                        <div class="tableTitle">追加服务</div>
                        <div class="expDelivery" style="width: 1280px;border:1px solid #d5d5d5">
                            <div class="fasterDeliveryTitle" style="height:80px;padding:0 40px;display:flex;justify-content:space-between;align-items:center">
                                <div class="fasterL"><el-checkbox v-model="showExp">特快交付</el-checkbox></div>
                                <div class="fasterR" style=""><img src="../../assets/images/goodsAdd/灯泡.png" alt=""></div>
                            </div>
                            <div class="expDeliveryShow" v-if="showExp" style="padding:0 40px;background:#eeeeee">
                                <el-row style="height:80px;line-height:80px">
                                    <el-col :span="12"><div class="grid-content bg-purple">基础</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="expressDeliveries[0].deliveryTime" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in deliverTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"></el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple zjje">
                                            <el-row  style="display:flex; margin-top:20px">
                                                <span>额外</span>
                                                <el-row class="moneyInput">
                                                    ￥<el-input style="width:160px;" placeholder="" v-model="expressDeliveries[0].price"
                                                    onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                </el-row>
                                            </el-row>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row style="height:80px;line-height:80px" v-if="settingValue > 1">
                                    <el-col :span="12"><div class="grid-content bg-purple">标准</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="expressDeliveries[1].deliveryTime" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in deliverTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"></el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple zjje">
                                            <el-row  style="display:flex;margin-top:20px">
                                                <span>额外</span>
                                                <el-row class="moneyInput">
                                                    ￥<el-input style="width:160px;" type="number" placeholder="" v-model="expressDeliveries[1].price"
                                                    onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                </el-row>
                                            </el-row>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row style="height:80px;line-height:80px" v-if="settingValue == 3">
                                    <el-col :span="12"><div class="grid-content bg-purple">优质</div></el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple">
                                            时间
                                            <el-select v-model="expressDeliveries[2].deliveryTime" placeholder="请选择时间">
                                                <el-option
                                                v-for="item in deliverTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"></el-option>
                                            </el-select>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" style="text-align:right">
                                        <div class="grid-content bg-purple zjje">
                                            <el-row  style="display:flex;margin-top:20px">
                                                <span>额外</span>
                                                <el-row class="moneyInput">
                                                    ￥<el-input style="width:160px;" type="number" placeholder="" v-model="expressDeliveries[2].price"
                                                    onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                </el-row>
                                            </el-row>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="expDeliveryContent">
                                <div class="expDeliveryContain">
                                    <div v-for="(item, idx) in addtoServices" :key="idx"  style="border-bottom:1px solid #d5d5d5">
                                        <el-form ref="form" :model="item" label-width="80px" style="padding-bottom: 30px">
                                            <el-form-item label="标题" style="margin-top:40px">
                                                <el-input v-model="item.title" style="width:320px;margin-left:32px" maxlength="20"></el-input>
                                                <span style="margin-left:10px;">0/20最大</span>
                                                <el-button type="text" style="float:right;padding-right:20px" @click="delzjfw(idx)" v-if="idx > 0">删除</el-button>
                                            </el-form-item>
                                            <div data-v-4be286b1="" class="el-form-item expdeliDesc">
                                                <label class="el-form-item__label" style="width: 80px;">描述</label>
                                                <el-input type="textarea" style="width:620px;margin-left:32px" v-model="item.addtoDesc" maxlength="50"></el-input>
                                                <span style="margin-left:10px;">0/50最大</span>
                                            </div>
                                            <div style="display:flex;width:790px;margin-left:112px">
                                                <el-col :span="11"  style="display:flex; align-items: center;">
                                                    额外费用
                                                    <el-row class="moneyInput">
                                                        ￥<el-input style="width:160px;" placeholder="" v-model="item.price" 
                                                        onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"></el-input>
                                                    </el-row>
                                                    
                                                </el-col>
                                                <el-col :span="11">
                                                    额外时间
                                                    <!-- <el-input style="width:190px;"
                                                        placeholder=""
                                                        v-model="item.deliveryTime"
                                                        oninput="if(value>99999)value=99999;if(value.length>5)value=value.slice(0,5);if(value<1 && value)value=1"
                                                        >
                                                    </el-input> -->
                                                    <el-select v-model="item.deliveryTime" placeholder="请选择额外时间">
                                                        <el-option
                                                         v-for="item in deliverTime"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </div>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                            <div class="additionalServive" style="padding:0 40px;height:80px;line-height: 80px;font-size:18px;">
                                <i class="el-icon-circle-plus" style="font-size:1em;font-weight:bold"><span style="margin-left:20px" @click="addserviceBtn">添加追加服务</span> </i>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="nextStepBtn" style="display:flex">
                    <el-button style="margin-top: 20px;" @click="activeIndex = '0'">上一步</el-button>
                    <el-button style="margin-top: 20px;color:#fff;background:#81d8d0" @click="nextStepSecong">下一步</el-button>
                </div>
                </el-tab-pane>
                <el-tab-pane label="" name="2">
                    <div class="multiFlex dispalyFlex" style="margin-top: 30px;" >
                        <div class="addTitle">常见问题解答</div>   
                    </div>
                    <div class="stepsContent1">
                        <div style="margin-top: 20px;" >
                            <div class="alreadyAdded" v-if="faq.length >0">
                                <div class="tableTitle">添加的问题和答案</div>
                                <div class="list"  v-for="(item,idx) in faq" :key="idx">
                                    <div class="item">
                                        <div class="left">{{item.question}}</div>
                                        <div class="right">
                                            <span @click="delFaq(idx)">删除</span>
                                            <span @click="item.show = !item.show">查看详情 ></span>
                                        </div>
                                    </div>
                                    <div class="item-con" v-show="item.show">{{item.answer}}</div>
                                </div>
                            </div>
                            <div class="tableTitle">
                                <span>为您的卖家添加问题和答案</span>
                                <i class="el-icon-circle-plus" style="font-size:1em;font-weight:bold; float:right" v-if="faq.length > 0 && !showAnsForm"><span style="margin-left:5px"  @click="showAnswer">添加常见问题</span> </i>
                            </div>
                            <div v-if="showAnsForm">
                                <el-input v-model="questionText" maxlength="30" placeholder="添加一个问题。例如：你能翻译成英文吗" style=""></el-input>
                                <el-input type="textarea" v-model="answerText" maxlength="300" placeholder="添加一个答案。例如：我能将英文翻译成中文。" style="margin-top:20px"></el-input>
                                <div class="" style="margin:20px auto;width:300px">
                                    <button @click="cancelQ" type="button" class="el-button el-button--default" style="">
                                        <span>取消</span>
                                    </button>
                                    <button @click="addFaq" type="button" class="el-button el-button--default" style="margin-left: 20px; background: rgb(129, 216, 208);color:#fff">
                                        <span>添加</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 70px;">
                            <div class="addTitle">向买家提出要求</div>
                            <div class="" style="color: #666666;margin:28px 0">添加问题以帮助买家为您提供开始处理他们的订单所需的确切信息</div>
                            <el-tag
                                v-for="tag in askfors"
                                :key="tag.id"
                                closable
                                @close="closeTag(tag)">
                                {{tag.content}}
                            </el-tag>
                            <el-button style="background: rgb(129, 216, 208);color:#fff" @click="dialogVisible = true">添加要求</el-button>
                            <el-dialog
                                title="添加要求"
                                :visible.sync="dialogVisible"
                                width="30%"
                                :before-close="handleClose">
                                <div style="">
                                    <el-input type="textarea" v-model="askfors_text" placeholder="索取必要的详细信息，例如尺寸、品牌准则等。" :rows="6"></el-input>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取消</el-button>
                                    <el-button type="primary" @click="addAsk" style="background: rgb(129, 216, 208);color:#fff">添加</el-button>
                                </span>
                            </el-dialog>
                        </div>
                    </div>
                    
                    <div class="nextStepBtn" style="width:300px;margin:30px auto">
                        <el-button style="" @click="activeIndex = '1'">上一步</el-button>
                        <el-button style="margin-left:20px;background: rgb(129, 216, 208);color:#fff"  @click="submitAdd">提交</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="" name="3">
                    <div class="merchantRegist" style="text-align:center">
                        <div class="merchantRegistration">
                            <div class="img">
                                <img src="../../assets/images/goodsAdd/组 13@2x.png" alt="">
                            </div>
                            <div class="submitTitle">提交成功</div>
                            <div class="showDetail">商品提交成功，请前往管理商品列表进行商品的上架吧</div>
                            <div class="autoJump">若10秒后没有自动跳转，请点击<a href="">www.baidu.com</a></div>
                            
                        </div>
                    </div>
                </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>
</template>
<script>
// import UserHttp from '@/model/UserHttp'
import GoodsHttp from '@/model/GoodsHttp';
// import Editor from "@/components/Editor";
// import EditorBar  from "../../components/Editor";
// import Holstein from '@/components/Nav/Holstein.vue'
import Uploadpics from '@/components/productAddImgs/Uploadimgs.vue';
import UploadAudio from '@/components/productAddAudio/uploadAudio.vue';
import Holstein from '../../components/Nav/Holstein.vue';
import Footer from '@/components/Footer/footer.vue';
import UserHttp from '../../model/UserHttp';

import {
    Quill,
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  //引入font.css 
  import '@/assets/css/font.css'
  // 自定义字体大小
  let Size = Quill.import('attributors/style/size')
  Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
  Quill.register(Size, true)

  // 自定义字体类型
  var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
    '宋体', '黑体'
  ]
  var Font = Quill.import('formats/font')
  Font.whitelist = fonts
  Quill.register(Font, true)


export default {
    components: {
        // EditorBar,
        Holstein,
        Footer,
        Uploadpics,
        UploadAudio,
        quillEditor
    },
    data() {
        var validatesfz = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请完成必填项'));
            } else {
                callback();
            }
        };
        var validateimg = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请上传商品图片，默认第一张为封面图'));
            } else {
                callback();
            }
        };
        return {
            domain: 'http://yshopapi.inroyltd.com',
            NavTitle: [],
            dialogContImgVisible: false,
            dialogContImgUrl: '',
            addform: {
                categoryId: '', //商品类目
                serviceName: '', //商品名称
                serviceSort: '', //商品排序
                orderQuantity: '', //可接单量
                filesTwo: [],
                Video:"",
                imgs: [],
                imgs2: [],
                serviceDesc: '',
                videoUrl: []
            },
            videoFlag: false,
            videoUploadPercent: 0,
            //文本编辑器
            editorOption: {
                placeholder: "请输入"
                // theme: "snow", // or 'bubble' 
                // modules: {
                //     toolbar: {
                //     container: '#toolbar'
                //     }
                // }
            },
            //新增商品 上传视频
            /* 表单验证规则 */
            rulesadd: {
                categoryId: [
                    {
                        required: true,
                        message: '请选择商品类目',
                        validator: validatesfz,
                        trigger: 'blur'
                    }
                ],
                serviceName: [
                    {
                        required: true,
                        message: '请选择商品名称',
                        validator: validatesfz,
                        trigger: 'blur'
                    }
                ],
                serviceSort: [{ required: true, message: '请选择商品排序', trigger: 'blur' }],
                serviceStock: [{ required: true, message: '请选择可接单量', trigger: 'blur' }],
                filesTwo: [{ required: false, message: '请完成上传', trigger: 'blur' }],
                video: [{ required: false, message: '请完成上传', trigger: 'blur' }],
                img: [
                    {
                        required: true,
                        message: '请上传商品图片，默认第一张为封面图',
                        validator: validateimg,
                        trigger: 'blur'
                    }
                ]
            },
            // editor:null,
            activeIndex: '0',
            // 售卖信息填写
            deliveryTimeOptions:[
                {
                    value: '24小时内交付',
                    label: '24小时内交付'
                },
                {
                    value: '3天内交付',
                    label: '3天内交付'
                }, 
                {
                    value: '5天内交付',
                    label: '5天内交付'
                }, 
                {
                    value: '随意。',
                    label: '随意。'
                }
            ],
            showExp:true,
            pricesCustoms: [],
            pricesCustoms1: [],
            pricesCustoms2: [],
            pricesCustoms3: [],
            addtoServices: [
                {
                    deliveryTime: '',
                    title: '',
                    desc: '',
                    price: ''
                }
            ],
            expressDeliveries: [
                {
                    deliveryTime: '',
                    level: 1,
                    price: ''
                },
                {
                    deliveryTime: '',
                    level: 2,
                    price: ''
                },
                {
                    deliveryTime: '',
                    level: 3,
                    price: ''
                }
            ],
            faq: [],
            questionText: '',
            answerText: '',
            dialogVisible: false,
            askfors: [],
            askfors_text: '',
            setting:[
                {
                    value: 1,
                    label: "基础"
                },
                {
                    value: 2,
                    label: "基础,标准"
                },
                {
                    value: 3,
                    label: "基础,标准,优质"
                }
            ],
            settingValue: 0,
            deliverTime: [
                {
                    value: '1',
                    label: '1天'
                },
                {
                    value: '2',
                    label: '2天'
                },
                {
                    value: '3',
                    label: '3天'
                },
                {
                    value: '4',
                    label: '4天'
                },
                {
                    value: '5',
                    label: '5天'
                },
                {
                    value: '6',
                    label: '6天'
                },
                {
                    value: '7',
                    label: '7天'
                },
                {
                    value: '10',
                    label: '10天'
                },
                {
                    value: '14',
                    label: '14天'
                },{
                    value: '21',
                    label: '21天'
                },{
                    value: '30',
                    label: '30天'
                },{
                    value: '60',
                    label: '60天'
                },{
                    value: '90',
                    label: '90天'
                }
            ],
            tableWidth: 640,
            showAnsForm: true,
            id:'',                                        // 商品ID
            layerWidth: 0,
            pageTitle: '新增商品'
        };
    },

    watch: {
        content() {
            this.editor.txt.html(this.content);
        },
        settingValue: {
            handler(newVal, oldVal) {
                if (newVal == 1) {
                    this.layerWidth = 640
                    if (this.expressDeliveries[0].deliveryTime) {
                        this.expressDeliveries = [
                            {
                                deliveryTime:  this.expressDeliveries[0].deliveryTime,
                                level: 1,
                                price: this.expressDeliveries[0].price
                            }
                        ]
                    } else {
                        this.expressDeliveries = [
                            {
                                deliveryTime: '',
                                level: 1,
                                price: ''
                            }
                        ]
                    }
                } else if (newVal == 2){
                    this.layerWidth = 320
                    if (this.expressDeliveries[0].deliveryTime && this.expressDeliveries[1] && this.expressDeliveries[1].deliveryTime) {
                        this.expressDeliveries = [
                                {
                                deliveryTime: this.expressDeliveries[0].deliveryTime,
                                level: 1,
                                price: this.expressDeliveries[0].price
                            },
                                {
                                deliveryTime: this.expressDeliveries[1].deliveryTime,
                                level: 2,
                                price: this.expressDeliveries[1].price
                            }
                        ]
                    } else {
                        this.expressDeliveries = [
                                {
                                deliveryTime: '',
                                level: 1,
                                price: ''
                            },
                                {
                                deliveryTime: '',
                                level: 2,
                                price: ''
                            }
                        ]
                    }
                } else {
                    this.layerWidth = 0
                    this.expressDeliveries = [
                            {
                            deliveryTime: '',
                            level: 1,
                            price: ''
                        },
                            {
                            deliveryTime: '',
                            level: 2,
                            price: ''
                        },
                        {
                            deliveryTime: '',
                            level: 3,
                            price: ''
                        }
                    ]
                }
            },
            deep: true
        },
    },
    async mounted() {
        // this.mountServiceCate()
        var res = await GoodsHttp.serviceProCategory();
        this.NavTitle = res.data.biz.content;
        this.init()
        // 编辑商品时带参数id，新增不带
        if (this.$route.query.id) { 
            this.id = this.$route.query.id;
            this.getDetail();
            this.pageTitle = '编辑商品'
        }
    },
    methods: {
        init() {
            this.settingValue = 3;
            let titleArr = ['服务名','服务描述','交付时间','可修改次数','商品数量','价格']
                let newArr = [];
                for (const i in titleArr) {
                    let obj = {
                        title: titleArr[i],
                        isText: 1,
                        oneValue: '',
                        secondValue: '',
                        thirdValue: '',
                        customSort: parseInt(i) + 1
                    }
                    newArr.push(obj)
                }
                let obj2 = {
                    title: '',
                    isText: 1,
                    oneValue: '',
                    secondValue: '',
                    thirdValue: '',
                    customSort: 6
                }
                newArr.splice(5, 0,obj2)
                newArr.forEach((item,index) => {
                    if (item.title == '价格') {
                        item.customSort = parseInt(index) + 1
                    }
                })
                this.pricesCustoms = newArr
        },
        getDetail() {
            this.$http.get('/api/serviceProduct/' + this.id).then(res => {
                // this.addform = res.data.biz;
                    this.addform.serviceName = res.data.biz.serviceName
                    this.addform.serviceSort = res.data.biz.serviceSort
                    this.addform.orderQuantity = res.data.biz.orderQuantity
                    this.addform.categoryId = res.data.biz.categoryId
                    this.addform.serviceDesc = res.data.biz.serviceDesc
                if (res.data.biz.files.length > 0) {
                    this.addform.imgs = [];
                    // 视频图片处理
                    let imgArr = []
                    let imgArr2 = []
                    res.data.biz.files.forEach(item => {
                        if (item.fileType == 3) {
                            this.addform.Video = item.fileUrl
                            this.addform.videoUrl.push(item)
                        } else {
                            // let obj = {
                            //     name: '',
                            //     url:item.fileUrl,
                            //     fileType: item.fileType,
                            // }
                            let obj2 = {
                                name: '',
                                url:  'http://yshopapi.inroyltd.com' + item.fileUrl,
                            }
                            imgArr.push(item)
                            imgArr2.push(obj2)
                        }
                    })
                    this.addform.imgs2 = imgArr2
                    this.addform.imgs = imgArr
                } else {
                    this.addform.Video = ""
                    this.addform.videoUrl = []
                    this.addform.imgs = []
                }
                    this.settingValue = res.data.biz.pricesCustomsCount;
                    if (res.data.biz.expressDeliveries.length > 0) {
                        this.expressDeliveries = res.data.biz.expressDeliveries;
                    } else {
                        this.showExp = false
                    }
                    if (res.data.biz.addtoServices.length > 0) {
                        this.addtoServices = res.data.biz.addtoServices;
                    }
                    this.faq = res.data.biz.faq;
                    if (res.data.biz.wnAskfors) {
                        this.askfors = res.data.biz.wnAskfors
                    }
                    //配置参数
                    this.pricesCustoms = res.data.biz.pricesCustoms;
                    if (res.data.biz.pricesCustoms.length == 6) { //当编辑时没有选择其他配置参数时，像数组里追加一个空数据
                        let obj = {
                            title: '',
                            isText: 1,
                            oneValue: '',
                            secondValue: '',
                            thirdValue: '',
                            customSort: 6
                        }
                        this.pricesCustoms.splice(5, 0,obj)
                    }
                    // 常见问题
                    let faqArr = res.data.biz.faq
                    faqArr.forEach(item => {
                        item.show = false
                    })
                    this.faq = JSON.parse(JSON.stringify(faqArr))
                
            })
        },
        async submitaddbasic(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.addform)
                    if (this.addform.imgs.length == 0) {
                        this.$message.error('请上传商品图片')
                        return
                    }
                    if (!this.addform.serviceDesc) {
                        this.$message.error('请填写商品描述')
                        return
                    }
                    this.activeIndex = '1';
                } else {
                    this.$message.error('请完成新增商品基本信息填写');
                    return false;
                }
            });
        },
        handleChange(cateId) {
            this.addform.categoryId = cateId[cateId.length - 1];
        },
        //上传图片
        //【内容图删除事件】
        handleContImgRemove: function (file, fileList) {
            console.log(file.url)
            let link = file.url.replace('http://yshopapi.inroyltd.com', '')
            this.addform.imgs.forEach((item,idx) => {
                if (item.fileUrl == link) {
                    this.addform.imgs.splice(idx, 1)
                }
            })
            console.log(this.addform.imgs)
            // this.addform.imgs.splice(0, this.addform.imgs.length, ...fileList);
        },
        handleAvatarSuccess(res) {
            this.addform.imgs.push({
                fileType:1,
                fileUrl: res[0].fileUrl,
                createTime: '',
                fileId: ''
                });
        },
        beforeUploadVideo(file) {
            console.log(file)
            const isLt10M = file.size / 1024 / 1024  < 10;
            if (['video/am', 'video/mov','video/mvb','video/rm','video/flv','video/mp4'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的视频格式');
                return false;
            }
            if (!isLt10M) {
                this.$message.error('上传视频大小不能超过200MB哦!');
                return false;
            }
        },
        beforeUploadImage(file) {
            if (['image/png', 'image/jpg','image/jpeg'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的图片格式');
                return false;
            }
        },
        uploadImage(params) {
            let form = new FormData();
            form.append('image', params.file);
            this.$http.post('http://yshopapi.inroyltd.com/api/uploadImage',form).then(res => {
                this.addform.imgs.push({
                    fileId: '',
                    fileType:1, 
                    fileUrl: res.data[0].fileUrl,
                    createTime: ''
                });
            });
        },
        //内容图数量限制3张
        exceedTips: function () {
            this.$message.error('最多只能上传19张图片');
        },

        //【内容图片预览事件】
        handleContImgPreview: function (file) {
            this.dialogContImgUrl = file.url;
            this.dialogContImgVisible = true;
        },
        // 点击添加追加服务
        addserviceBtn() {
            let obj = {
                title: '',
                addtoDesc: '',
                price: '',
                deliveryTime: ''
            };
            this.addtoServices.push(obj)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(function()  {
                done();
            })
            .catch(function()  {});
        },
        // 提交信息
        submitAdd() {
            let dt = {
                addtoServices: this.addtoServices,
                askfors: this.askfors,
                categoryId: this.addform.categoryId,
                createUser: 19,
                faq: this.faq,
                files: this.addform.videoUrl.concat(this.addform.imgs),
                serviceName: this.addform.serviceName,
                serviceSort: this.addform.serviceSort,
                serviceDesc: this.addform.serviceDesc,
                orderQuantity: this.addform.orderQuantity
                // pricesCustoms: this.pricesCustoms
            }
            if (!this.addtoServices[0].price) {
                dt.addtoServices = [];
            }
            // 特快交付
            if (this.showExp) {
                dt.expressDeliveries = this.expressDeliveries
            }
            // 配置参数
            let arr = this.pricesCustoms;
            console.log(this.settingValue)
            if (this.settingValue == 1) {
                arr.forEach(item => {
                    item.secondValue = ''
                    item.thirdValue = ''
                })
            }
            if (this.settingValue == 2) {
                arr.forEach(item => {
                    item.thirdValue = ''
                })
            }
            arr.forEach((item,index) => {
                if (item.title == '') {
                    arr.splice(index, 1)
                }
            })
            dt.pricesCustoms = arr
            let url = '/api/serviceProduct/add'
            if (this.id) { // 编辑商品
                url = '/api/serviceProduct/update';
                dt.uid = this.id
            }   
            this.$http.post(url, dt).then(() => {
                if (this.id) { // 编辑商品
                    this.$message.success('商品修改成功');
                } else {
                    this.$message.success('商品添加成功');
                }
                this.activeIndex = "3"
            })
        },
        addAsk() {
            if (!this.askfors_text) {
                this.$message.error('请输入要求')
                return
            }
            let obj = {
                id: '',
                content: this.askfors_text
            }
            this.askfors.push(obj);
            console.log(this.askfors)
            this.dialogVisible = false;
            this.askfors_text = ''
        },
        addCustomeLine(val,index) {
            if (this.settingValue == 1) {
                if (val.isText && !val.oneValue || !val.title) {
                    this.$message.error('请填写信息')
                    return
                }
            } else if (this.settingValue == 2){
                if (val.isText && (!val.oneValue || !val.secondValue) || !val.title) {
                    this.$message.error('请填写信息')
                    return
                }
            } else {
                if (val.isText && (!val.oneValue || !val.secondValue || !val.thirdValue) || !val.title) {
                    this.$message.error('请填写信息')
                    return
                }
            }
            let obj = {
                title: '',
                isText: 1,
                oneValue: '',
                secondValue: '',
                thirdValue: '',
                customSort: index + 1
            }
            this.pricesCustoms.splice(index + 1, 0, obj)
        },
        delCustomeLine(index, type) {
            this.pricesCustoms.splice(index, 1)
        },
        delzjfw(idx) {
            this.addtoServices.splice(idx, 1)
        },
        addFaq() {
            if (this.questionText && this.answerText) {
                let obj = {
                    question: this.questionText,
                    answer: this.answerText,
                    show: false
                }
                this.faq.push(obj)
                this.questionText = "";
                this.answerText = "";
                this.showAnsForm = false
            } else {
                this.$message.error('请输入问题和答案')
            }
        },
        delFaq(idx) {
            this.faq.splice(idx, 1);
            if (this.faq.length == 0) {
                this.showAnsForm = true
            }
        },
        cancelQ() {
            this.questionText = '';
            this.answerText = ''
        },
        closeTag(tag) {
            this.askfors.splice(this.askfors.indexOf(tag), 1);
        },
        changeText(e,idx) {
            console.log(e)
            console.log(idx)
            let arr = this.pricesCustoms[idx];
            arr.isText = e.isText
        },
        nextStepSecong() {
            if (this.settingValue == 1) {
                let arr = this.pricesCustoms;
                for (const i in arr) {
                    if (arr[i].isText && arr[i].title && !arr[i].oneValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                }
                if (this.showExp) {
                    if (!this.expressDeliveries[0].deliveryTime || !this.expressDeliveries[0].price) {
                        this.$message.error('请填写特快交付信息')
                        return false
                    }
                }
            } else if (this.settingValue == 2) {
                let arr = this.pricesCustoms;
                for (const i in arr) {
                    if (arr[i].isText && arr[i].title && !arr[i].oneValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                }
                for (const i in arr) {
                    if (arr[i].isText && arr[i].title && !arr[i].secondValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                }
                if (this.showExp) {
                    for (const i in this.expressDeliveries) {
                        let arr = this.expressDeliveries
                        if (!arr[i].deliveryTime  || !arr[i].price) {
                            this.$message.error('请填写特快交付信息')
                            return false
                        }
                    }
                }
            } else {
                let arr = this.pricesCustoms;
                for (const i in arr) {
                    if (arr[i].isText && arr[i].title && !arr[i].oneValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                    if (arr[i].isText && arr[i].title && !arr[i].secondValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                    if (arr[i].isText && arr[i].title && !arr[i].thirdValue) {
                        this.$message.error('请填写' +arr[i].title)
                        return false
                    }
                }
                 if (this.showExp) {
                     for (const i in this.expressDeliveries) {
                        let arr = this.expressDeliveries
                        if (!arr[i].deliveryTime  || !arr[i].price) {
                            this.$message.error('请填写特快交付信息')
                            return false
                        }
                    }
                }
            }
            this.activeIndex = '2'
        },
        checkNum(e) {
            if (e < 1) {
                this.addform.serviceStock = 1;
            } else if (e > 99999) {
                this.addform.serviceStock = 99999;
            }
        },
        uploadVideoProcess(event, file, fileList){
            this.videoFlag = true;
            this.videoUploadPercent = file.percentage;
        },
        handleVideoSuccess(res, file) {                               //获取上传图片地址
            this.videoFlag = false;
            this.videoUploadPercent = 0;
            if(res){
                this.addform.videoUrl = [];
                this.addform.Video = res[0].fileUrl;
                this.addform.videoUrl.push({ 
                    fileType: 3, 
                    fileUrl:res[0].fileUrl,
                    fileId:'',
                    createTime:'' });
            }else{
                this.$message.error('视频上传失败，请重新上传！');
            }
        },
        showAnswer () {
            if (this.faq.length == 10) {
                this.$message.warning('最多添加十个问题哦~');
                return false
            }
            this.showAnsForm = true; 
        }
    }

};
</script>
<style >
/* 隐藏el-tals标签头部 */
.merchantRegistration .el-tabs__header {
    display: none !important;
}
.merchantRegistration  .el-steps {
    margin-top: 20px;
}
.moneyInput {
        width: 200px;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding-left: 5px;
        margin-left: 5px;
    }
.moneyInput .el-input__inner {
        border: none;
    }
    .zjje {
        height: 40px;
        line-height: 40px;
        float: right;
    }
    .zjje .moneyInput {
        width: 220px;
        background-color: #fff;
    }
    .zjje  .moneyInput .el-input__inner {
        width: 200px;
    }
    .upload-demo {
        width: 360px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    input[type="number"]{
    -moz-appearance: textfield;
    }
    .stepsContent1 .el-select .el-input__inner {
        text-align: left;
    }
    /* .el-select-dropdown__item {
        text-align: center;
    } */
</style>
<style scoped>
.home {
    width: 100%;
}
.center {
    margin: 0 320px;
}

/*  */
.addTitle {
    height: 29px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #000000;
    line-height: 24px;
}
.merchantRegist {
    width: 100%;
}
.merchantRegistration {
    width: 1280px;
    margin: 50px auto;
}
.stepsContent {
    margin: 20px 0;
}
.el-step__head.is-process {
    color: #303133 !important;
    border-color: #303133 !important;
}
.el-step__head.is-success,
.el-step__title.is-success {
    color: #81d8d0 !important;
    border-color: #81d8d0 !important;
}
.el-card__body > div {
    margin: 10px 0;
}
/*  */
.boldLabel {
    color: #000000;
    font-size: 18px;
    font-weight: bold;
}
/*  */
.upload-demo /deep/ ul,
.upload-demo /deep/ .el-upload-list {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}
.upload-demo /deep/ .el-upload-list__item {
    width: 120px !important;
}
.el-upload-list--picture /deep/ .el-upload-list__item {
    width: 120px !important;
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
    .el-tag {
        margin-right: 10px;
    }
    .alreadyAdded .list {
         border-bottom: 1px solid #dddddd;
    }
    .alreadyAdded .list .item{
        line-height: 30px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
    }
    .alreadyAdded .list .item-con {
        padding: 10px 0;
    }
    .alreadyAdded .list .item span {
        margin-left: 20px;
    }
    .alreadyAdded .list .item span:hover {
        color: rgb(129, 216, 208);
    }
    
</style>
<style lang="scss">
    .tableCon {
        display: flex;
        .leftTitle {
            width: 320px;
            .item {
                width: 100%;
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #d8d8d8;
                input {
                    border: none;
                    background-color: rgb(238, 238, 238);
                    width: 140px;
                    padding-left: 0;
                }
            }
        }
        .valueBox {
            width: 320px;
            .item {
                position: relative;
                width: 100%;
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #d8d8d8;
                border-right: 1px solid #d8d8d8;
                background-color: #fff;
                input {
                    border: none;
                }
            }
            .editBtn {
                position: absolute;
                right: 10px;
                top: 0;
            }
        }
    }
    .tableInfro {
        position: relative;
        .layer {
            position: absolute;
            right: 0;
            top: 0;
            width: 0;
            height: 100%;
            background-color: rgba(238, 238, 238,0.8);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            
            .p1 {
                font-size: 34px;
            }
            .p2 {
                font-size: 14px;
                color: red;
            }
        }
        .el-input__inner {
            border: none;
        }
    }
    .videoBox {
        width: 360px;
        height: 180px;
    }
</style>