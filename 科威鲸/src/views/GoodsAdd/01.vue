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
                        <div class="el-step__head is-process">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <!-- <i class="el-step__icon-inner is-status el-icon-check"></i> -->
                                <i class="el-step__icon-inner ">1</i>
                            </div>
                        </div>
                        <div class="el-step__main" style="">
                            <div class="el-step__title is-process">基本信息填写</div>
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
                        <div class="el-step__head is-wait">
                            <div class="el-step__line" style="margin-right: 0px;">
                                <i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; width: 0%;"></i>
                            </div>
                            <div class="el-step__icon is-text">
                                <i class="el-step__icon-inner is-status el-icon-check"></i>
                            </div>
                        </div>
                        <div class="el-step__main">
                            <div class="el-step__title is-wait">售卖信息填写</div>
                        </div>
                    </div>
                    <div data-v-270d2505="" class="el-step is-horizontal is-center" style="flex-basis: 25%; margin-right: 0px;">
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
                <div class="stepsContent">

                    <div data-v-a72aa574="" class="el-card is-always-shadow" style="">
                    
                        <div class="el-card__body" style="">
                            <el-form data-v-a72aa574="" class="el-form" style="" :model="addform" :rules="rulesadd" ref="addform">
                                <div data-v-a72aa574="" class="el-row" style="margin-left: -12px; margin-right: -12px;">
                                    <!-- 商品类目 -->
                                    <el-col :span="12">
                                        <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="商品类目" prop="categoryId">
                                            <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <el-cascader
                                                                v-model="addform.categoryId"
                                                                :props="{value:'id',label:'cateName',children:'children'}" 
                                                                :options="NavTitle"
                                                                @change="handleChange"></el-cascader>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <!-- 商品名称 -->
                                    <el-col :span="12">
                                        <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="商品名称" prop="serviceName">
                                                <div class="el-form-item__content" style="margin-left: 130px;">
                                                    <el-input v-model="addform.serviceName" placeholder="请输入商品名称"></el-input>
                                                </div>
                                        </el-form-item>
                                    </el-col> 
                                    <!-- 商品排序 -->
                                    <el-col :span="12">
                                            <!-- <el-select v-model="form.name" is-required placeholder="请选择">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select> -->
                                            <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="商品排序" prop="serviceSort">
                                                <div class="el-form-item__content" style="margin-left: 130px;">
                                                        <el-select v-model="addform.serviceSort" placeholder="请选择商品排序">
                                                            <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                </div>
                                            </el-form-item>
                                    </el-col> 
                                    <!-- 商品库存 -->
                                    <el-col :span="12">
                                        <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="可接单量" prop="serviceStock">
                                                <div class="el-form-item__content" style="margin-left: 130px;">
                                                    <el-input v-model="addform.serviceStock" placeholder="请输入可接单量"></el-input>
                                                </div>
                                        </el-form-item>
                                    </el-col> 
                                    
                                </div>
                            <!-- 商品展示材料 -->
                            <el-col :span="24">
                                <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="商品展示材料（图片/视频）" prop="filesTwo">
                                    <div class="el-form-item__content" style="">
                                        <div data-v-a72aa574="" class="el-textarea el-input--small" style="padding-left: 50px;">
                                            <div>注:</div>
                                            <div>1、商品logo优先级为：视频>第一张图片</div>
                                            <div>2、请务必上传商品图片，默认第一张为封面图；图片最多上传6张，格式为jpg，JPEG，png，</div>
                                            <div>3、视频最多上传一个，格式为AM、mov、mvb、rm、FLV、mp4</div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-col>
                                    <el-col :span="24">
                                        <el-form-item data-v-a72aa574="" class="el-form-item el-form-item--small" label="上传介绍视频" prop="video">
                                            <div class="el-form-item__content" style="">
                                                <div data-v-c9248516="" data-v-a72aa574="">
                                                    <!--<UploadAudio v-model="addform.files[0].fileUrl"></UploadAudio>-->
                                                    <el-upload drag v-model="addform.video.fileUrl"
                                                        :action="UploadUrl()" 
                                                        :limit="1" 
                                                        :auto-upload="false"
                                                        accept=".MP4 ,.mp4, "  
                                                        :on-change="fileChange">
                                                            <i class="el-icon-upload"></i>
                                                            <div class="el-upload__text">视频最多上传一个，格式为AM、mov、mvb、rm、FLV、mp4</div>
                                                            <div class="el-upload__tip" slot="tip">只能上传<span style="color: #cc0000">一个MP4</span>文件</div>
                                                        </el-upload>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item data-v-a72aa574="" class="el-form-item el-form-item--small" label="上传介绍图片" prop="imgs">
                                            <div class="el-form-item__content" style="">
                                                <div data-v-1c9bbdc3="" data-v-a72aa574=""> 
                                                    <!-- <div data-v-1c9bbdc3="" tabindex="0" class="el-upload el-upload--picture-card" style="width: 150px; height: 150px; line-height: 150px;"><i data-v-1c9bbdc3="" class="el-icon-plus"></i></div>  -->
                                                    <!-- multiple="true" show-file-list="true" limit="6" -->
                                                    <!--<Uploadpics v-model="addform.imgs"></Uploadpics>-->
                                                    <el-upload action="aaa"
                                                        :http-request="uploadProductPic"
                                                        accept="image/*"
                                                        list-type="picture-card"
                                                        :on-preview="handleContImgPreview"
                                                        :on-remove="handleContImgRemove"
                                                        :limit="5"
                                                        :on-exceed="exceedTips"
                                                        :file-list="addform.imgs">
                                                    <i class="el-icon-plus"></i>
                                                    </el-upload>
                                                    <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
                                                    <img width="100%" :src="dialogContImgUrl.url" />
                                                    </el-dialog>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-col> 
                                <!-- 商品描述 -->
                                <el-col :span="24">
                                    <el-form-item data-v-a72aa574="" class="el-form-item is-required el-form-item--small" label="商品描述" prop="serviceDesc">
                                        <span style="color:red;font-size:14px;line-height:32px">(2000个字)</span>
                                        <div class="el-form-item__content" style="">
                                                <el-input type="textarea" v-model="addform.serviceDesc"></el-input>
                                        </div>
                                    </el-form-item>
                                </el-col> 
                            </el-form>
                        </div>
                    </div>
                                <!-- <Editor v-bind:content="editForm.content"></Editor>  -->
                                <!-- <Editor v-bind:content="editForm.content"></Editor> -->
                                <!-- <editor :catchData="catchData" :content="ruleForm.info.description"></editor> -->
                                <!-- <editor-bar v-model="goods.detail" :isClear="isClear" @change="change"></editor-bar> -->
                                <!-- <EditorBar v-model="goods.detail" :isClear="isClear" @change="change"></EditorBar> -->
                            <!-- <div class="el-form-item__content" style="margin-left: 130px;">
                                <div data-v-a72aa574="" style="width: 90%;">
                                    <div id="editor_5cef03" class="edui-default" style="">
                                        <div id="edui1" class="edui-editor  edui-default" style="width: 100%; z-index: 999;">
                                            <div id="edui1_toolbarbox" class="edui-editor-toolbarbox edui-default" style="">
                                                <div id="edui1_toolbarboxouter" class="edui-editor-toolbarboxouter edui-default">
                                                    <div class="edui-editor-toolbarboxinner edui-default">
                                                        <div id="edui2" class="edui-toolbar   edui-default" onselectstart="return false;" onmousedown="return $EDITORUI[&quot;edui2&quot;]._onMouseDown(event, this);" style="user-select: none;">
                                                            <div id="edui106" class="edui-box edui-button edui-for-fullscreen edui-default">
                                                                <div id="edui106_state" onmousedown="$EDITORUI[&quot;edui106&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui106&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui106&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui106&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui106_body" unselectable="on" title="全屏" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui106&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui106&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui3" class="edui-box edui-button edui-for-source edui-default">
                                                                <div id="edui3_state" onmousedown="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui3_body" unselectable="on" title="源代码" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui3&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui3&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui4" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui5" class="edui-box edui-button edui-for-undo edui-default">
                                                                <div id="edui5_state" onmousedown="$EDITORUI[&quot;edui5&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui5&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui5&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui5&quot;].Stateful_onMouseOut(event, this);" class="edui-default edui-state-disabled">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui5_body" unselectable="on" title="撤销" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui5&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui5&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui6" class="edui-box edui-button edui-for-redo edui-default">
                                                                <div id="edui6_state" onmousedown="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseOut(event, this);" class="edui-default edui-state-disabled">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui6_body" unselectable="on" title="重做" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui6&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui6&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui7" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui8" class="edui-box edui-button edui-for-bold edui-default">
                                                                <div id="edui8_state" onmousedown="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui8_body" unselectable="on" title="加粗" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui8&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui8&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui9" class="edui-box edui-button edui-for-italic edui-default">
                                                                <div id="edui9_state" onmousedown="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default"><div id="edui9_body" unselectable="on" title="斜体" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui9&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui9&quot;]._onClick(event, this);">
                                                                        <div class="edui-box edui-icon edui-default"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div id="edui10" class="edui-box edui-button edui-for-underline edui-default">
                                                                <div id="edui10_state" onmousedown="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui10_body" unselectable="on" title="下划线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui10&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui10&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui11" class="edui-box edui-button edui-for-strikethrough edui-default">
                                                                <div id="edui11_state" onmousedown="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui11_body" unselectable="on" title="删除线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui11&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui11&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui12" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui13" class="edui-box edui-button edui-for-superscript edui-default">
                                                                <div id="edui13_state" onmousedown="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui13_body" unselectable="on" title="上标" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui13&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui13&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui14" class="edui-box edui-button edui-for-subscript edui-default">
                                                                <div id="edui14_state" onmousedown="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui14_body" unselectable="on" title="下标" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui14&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui14&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui15" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui16" class="edui-box edui-splitbutton edui-for-forecolor edui-default edui-colorbutton">
                                                                <div title="字体颜色" id="edui16_state" onmousedown="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-splitbutton-body edui-default">
                                                                        <div id="edui16_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui16&quot;]._onButtonClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div id="edui16_colorlump" class="edui-colorlump"></div>
                                                                        </div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui16&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui19" class="edui-box edui-splitbutton edui-for-backcolor edui-default edui-colorbutton">
                                                                <div title="背景色" id="edui19_state" onmousedown="$EDITORUI[&quot;edui19&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui19&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui19&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui19&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-splitbutton-body edui-default">
                                                                        <div id="edui19_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui19&quot;]._onButtonClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div id="edui19_colorlump" class="edui-colorlump"></div>
                                                                        </div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui19&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui22" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui23" class="edui-box edui-button edui-for-removeformat edui-default">
                                                                <div id="edui23_state" onmousedown="$EDITORUI[&quot;edui23&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui23&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui23&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui23&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui23_body" unselectable="on" title="清除格式" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui23&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui23&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui24" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui25" class="edui-box edui-menubutton edui-for-insertorderedlist edui-default">
                                                                <div title="有序列表" id="edui25_state" onmousedown="$EDITORUI[&quot;edui25&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui25&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui25&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui25&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-menubutton-body edui-default">
                                                                        <div id="edui25_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui25&quot;]._onButtonClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui25&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui38" class="edui-box edui-menubutton edui-for-insertunorderedlist edui-default">
                                                                <div title="无序列表" id="edui38_state" onmousedown="$EDITORUI[&quot;edui38&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui38&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui38&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui38&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-menubutton-body edui-default">
                                                                        <div id="edui38_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui38&quot;]._onButtonClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui38&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui45" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui46" class="edui-box edui-button edui-for-selectall edui-default">
                                                                <div id="edui46_state" onmousedown="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui46_body" unselectable="on" title="全选" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui46&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui46&quot;]._onClick(event, this);">
                                                                        <div class="edui-box edui-icon edui-default"></div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui47" class="edui-box edui-button edui-for-cleardoc edui-default">
                                                                <div id="edui47_state" onmousedown="$EDITORUI[&quot;edui47&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui47&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui47&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui47&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui47_body" unselectable="on" title="清空文档" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui47&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui47&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui48" class="edui-box edui-combox edui-for-paragraph edui-default">
                                                                <div title="段落格式" id="edui48_state" onmousedown="$EDITORUI[&quot;edui48&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui48&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui48&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui48&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-combox-body edui-default">
                                                                        <div id="edui48_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui48&quot;]._onButtonClick(event, this);">段落</div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui48&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui57" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui58" class="edui-box edui-combox edui-for-fontfamily edui-default">
                                                                <div title="字体" id="edui58_state" onmousedown="$EDITORUI[&quot;edui58&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui58&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui58&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui58&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-combox-body edui-default">
                                                                        <div id="edui58_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui58&quot;]._onButtonClick(event, this);">arial</div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui58&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui71" class="edui-box edui-combox edui-for-fontsize edui-default">
                                                                <div title="字号" id="edui71_state" onmousedown="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-combox-body edui-default">
                                                                        <div id="edui71_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui71&quot;]._onButtonClick(event, this);">16px</div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui71&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui82" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui83" class="edui-box edui-button edui-for-justifyleft edui-default">
                                                                <div id="edui83_state" onmousedown="$EDITORUI[&quot;edui83&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui83&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui83&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui83&quot;].Stateful_onMouseOut(event, this);" class="edui-default edui-state-checked">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui83_body" unselectable="on" title="居左对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui83&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui83&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui84" class="edui-box edui-button edui-for-justifycenter edui-default">
                                                                <div id="edui84_state" onmousedown="$EDITORUI[&quot;edui84&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui84&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui84&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui84&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui84_body" unselectable="on" title="居中对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui84&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui84&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui85" class="edui-box edui-button edui-for-justifyright edui-default">
                                                                <div id="edui85_state" onmousedown="$EDITORUI[&quot;edui85&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui85&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui85&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui85&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui85_body" unselectable="on" title="居右对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui85&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui85&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui86" class="edui-box edui-button edui-for-justifyjustify edui-default">
                                                                <div id="edui86_state" onmousedown="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui86_body" unselectable="on" title="两端对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui86&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui86&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui87" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui94" class="edui-box edui-button edui-for-link edui-default">
                                                                <div id="edui94_state" onmousedown="$EDITORUI[&quot;edui94&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui94&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui94&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui94&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui94_body" unselectable="on" title="超链接" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui94&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui94&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui95" class="edui-box edui-button edui-for-unlink edui-default">
                                                                <div id="edui95_state" onmousedown="$EDITORUI[&quot;edui95&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui95&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui95&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui95&quot;].Stateful_onMouseOut(event, this);" class="edui-default edui-state-disabled">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui95_body" unselectable="on" title="取消链接" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui95&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui95&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui96" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui110" class="edui-box edui-button edui-for-dialog-button edui-default">
                                                                <div id="edui110_state" onmousedown="$EDITORUI[&quot;edui110&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui110&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui110&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui110&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui110_body" unselectable="on" title="上传图片" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui110&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui110&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui97" class="edui-box edui-splitbutton edui-for-emotion edui-default">
                                                                <div title="表情" id="edui97_state" onmousedown="$EDITORUI[&quot;edui97&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui97&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui97&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui97&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-splitbutton-body edui-default">
                                                                        <div id="edui97_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui97&quot;]._onButtonClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                        <div class="edui-box edui-splitborder edui-default"></div>
                                                                        <div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui97&quot;]._onArrowClick();"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui99" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui100" class="edui-box edui-separator  edui-default"></div>
                                                            <div id="edui101" class="edui-box edui-button edui-for-horizontal edui-default">
                                                                <div id="edui101_state" onmousedown="$EDITORUI[&quot;edui101&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui101&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui101&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui101&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui101_body" unselectable="on" title="分隔线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui101&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui101&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui102" class="edui-box edui-button edui-for-print edui-default">
                                                                <div id="edui102_state" onmousedown="$EDITORUI[&quot;edui102&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui102&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui102&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui102&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui102_body" unselectable="on" title="打印" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui102&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui102&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui105" class="edui-box edui-button edui-for-preview edui-default">
                                                                <div id="edui105_state" onmousedown="$EDITORUI[&quot;edui105&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui105&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui105&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui105&quot;].Stateful_onMouseOut(event, this);" class="edui-default">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui105_body" unselectable="on" title="预览" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui105&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui105&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                            <div class="edui-box edui-label edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="edui107" class="edui-box edui-button edui-for-drafts edui-default">
                                                                <div id="edui107_state" onmousedown="$EDITORUI[&quot;edui107&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui107&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui107&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui107&quot;].Stateful_onMouseOut(event, this);" class="edui-default edui-state-disabled">
                                                                    <div class="edui-button-wrap edui-default">
                                                                        <div id="edui107_body" unselectable="on" title="从草稿箱加载" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui107&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui107&quot;]._onClick(event, this);">
                                                                            <div class="edui-box edui-icon edui-default"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="edui1_toolbarmsg" class="edui-editor-toolbarmsg edui-default" style="display:none;">
                                                    <div id="edui1_upload_dialog" class="edui-editor-toolbarmsg-upload edui-default" onclick="$EDITORUI[&quot;edui1&quot;].showWordImageDialog();">点击上传</div>
                                                    <div class="edui-editor-toolbarmsg-close edui-default" onclick="$EDITORUI[&quot;edui1&quot;].hideToolbarMsg();">x</div>
                                                    <div id="edui1_toolbarmsg_label" class="edui-editor-toolbarmsg-label edui-default"></div>
                                                    <div style="height:0;overflow:hidden;clear:both;" class="edui-default"></div>
                                                </div>
                                                <div id="edui1_message_holder" class="edui-editor-messageholder edui-default" style="top: 46px; z-index: 1000;"></div>
                                            </div>
                                            <div id="edui1_iframeholder" class="edui-editor-iframeholder edui-default" style="width: 100%; height: 500px; z-index: 999; overflow: hidden;">
                                                <iframe id="ueditor_0" width="100%" height="100%" frameborder="0" src="javascript:void(function(){document.open();document.write(&quot;
                                                    <!DOCTYPE html><html xmlns='http://www.w3.org/1999/xhtml' class='view' >
                                                        <head>
                                                            <style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}
                                body{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>
                                                            <link rel='stylesheet' type='text/css' href='/UEditor/themes/iframe.css'/>
                                                        </head>
                                                        <body class='view' ></body>
                                                        <script type='text/javascript'  id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant0'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>&quot;);document.close();}())">
                                                </iframe>
                                            </div>
                                            <div id="edui1_bottombar" class="edui-editor-bottomContainer edui-default">
                                                <table class="edui-default">
                                                    <tbody class="edui-default">
                                                        <tr class="edui-default">
                                                            <td id="edui1_elementpath" class="edui-editor-bottombar edui-default">
                                                                <div class="edui-editor-breadcrumb" onmousedown="return false;">元素路径: <span unselectable="on" onclick="$EDITORUI[&quot;edui1&quot;].editor.execCommand(&quot;elementpath&quot;, &quot;0&quot;);">body</span> &gt; <span unselectable="on" onclick="$EDITORUI[&quot;edui1&quot;].editor.execCommand(&quot;elementpath&quot;, &quot;1&quot;);">p</span> &gt; <span unselectable="on" onclick="$EDITORUI[&quot;edui1&quot;].editor.execCommand(&quot;elementpath&quot;, &quot;2&quot;);">br</span>
                                                                </div>
                                                            </td>
                                                            <td id="edui1_wordcount" class="edui-editor-wordcount edui-default">当前已输入0个字符, 您还可以输入10000个字符。 </td>
                                                            <td id="edui1_scale" class="edui-editor-scale edui-default" style="display: none;"><div class="edui-editor-icon edui-default"></div></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div id="edui1_scalelayer" class="edui-default"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                <div class="nextStepBtn">
                    <el-button style="margin-top: 12px;color:#fff;background:#81d8d0" @click="submitaddbasic('addform')">下一步</el-button>
                </div>
            </div>
        </div>
        
        <!-- footer部分开始 -->
        <Footer></Footer>
    </div>

</template>
<script>
// import UserHttp from '@/model/UserHttp'
import GoodsHttp from '@/model/GoodsHttp'
// import Editor from "@/components/Editor";
// import EditorBar  from "../../components/Editor";
// import Holstein from '@/components/Nav/Holstein.vue'
import Uploadpics from '@/components/productAddImgs/Uploadimgs.vue'
import UploadAudio from '@/components/productAddAudio/uploadAudio.vue'
import Holstein from '../../components/Nav/Holstein.vue'
import Footer from '@/components/Footer/footer.vue'
import UserHttp from '../../model/UserHttp';

export default {
    components: {
        // EditorBar,
        Holstein,Footer,Uploadpics,UploadAudio
        },
    data() {
        var validatesfz = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请完成必填项"))
            } else {
                callback();
            }
        }
        var validateimg = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请上传商品图片，默认第一张为封面图"))
            } else {
                callback();
            }
        }
        return {
            NavTitle:"",
            dialogContImgVisible:false,
            dialogContImgUrl:"",
            addform: {
                categoryId: '',//商品类目
                serviceName: '',//商品名称
                serviceSort: '',//商品排序
                serviceStock: '',//可接单量
                filesTwo: [],
                video: {
                    "fileType":3,
                    "url":""
                },
                imgs: [
                    {
                        "fileType":1, 
                        "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                    }, 
                    {
                        "fileType":1, 
                        "url": "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                    }
                ],
                files: [
                    {"fileType":3,"fileUrl":''},//视频
                    {"fileType":1,"fileUrl":''}//图片
                ],
                serviceDesc: '',
            },
            //新增商品 上传视频
            /* 表单验证规则 */
            rulesadd: {
                categoryId: [
                        { required: true, message: "请选择商品类目",validator: validatesfz, trigger: "blur" },
                ],
                serviceName: [
                        { required: true, message: "请选择商品名称",validator: validatesfz, trigger: "blur" },
                ],
                serviceSort: [
                        { required: true, message: "请选择商品排序", trigger: "blur" },
                ],
                serviceStock: [
                        { required: true, message: "请选择可接单量", trigger: "blur" },
                ],
                filesTwo: [
                        { required: false, message: "请完成上传", trigger: "blur" },
                ],
                video: [
                        { required: false, message: "请完成上传", trigger: "blur" },
                ],
                img: [
                        { required: true, message: "请上传商品图片，默认第一张为封面图",validator: validateimg, trigger: "blur" },
                ],
                
            },
            options: [{
                value: '1',
                label: '1'
                }, {
                value: '2',
                label: '2'
                }, {
                value: '3',
                label: '3'
                }, {
                value: '4',
                label: '4'
                }, {
                value: '5',
                label: '5'
            }],
        value: '',
            fileList: [
                {name: 'food.jpeg', url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'},
            ],
            // editor:null,
            editorContent:'',
            isClear: false,
        }
    },
    
    watch:{
        content(){
            this.editor.txt.html(this.content)
        }
    },
    async mounted() {
        // this.mountServiceCate()
        var res = await GoodsHttp.serviceProCategory();
        this.NavTitle = res.data.biz.content
    },
    methods: {
        // async mountServiceCate(){
        //     var res = await UserHttp.serviceProCategory();
        //     console.log(res.data.biz.content)
        //     this.optionsservicePro = res.data.biz.content
        // },
            async submitaddbasic(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // var userInfo = JSON.parse(this.$cookie.get("loginInfo"))
                        // console.log(userInfo.id)
                        this.$http.post('/api/serviceProduct/add',{
                            // status:0,
                            createUser:JSON.parse(this.$cookie.get("loginInfo")).id,
                            // userId:JSON.parse(this.$cookie.get("loginInfo")).id,
                            categoryId:this.addform.categoryId,
                            serviceName:this.addform.serviceName,
                            serviceSort:this.addform.serviceSort,
                            serviceStock:this.addform.serviceStock,
                            files:this.addform.files,
                            serviceDesc:this.addform.serviceDesc,
                        }).then((res)=>{
                            console.log(res)
                            var message = res.data.msg.message;
                            // console.log(res.data.biz)
                            if(message=="成功"){
                                // this.$store.commit('setUserName',this.ruleForm2new.username)
                                // this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                                this.$message.success('成功发布需求')
                                this.$router.push({name:'02SalesInf'})
                            }else{
                                this.$message.error("请完成新增商品");
                                return false
                            }
                        })
                    }else{
                        // console.log('error submit!!');
                        this.$message.error("请完成新增商品");
                        return false;
                    }
                })
            },
        //上传图片
        //【内容图删除事件】
                handleContImgRemove: function (file, fileList) {
                    console.log(file);
                    console.log(fileList);
                    console.log(this.addform.imgs)
                    this.addform.imgs.remove(file.url);
                },
                
                //【内容图片预览事件】
                handleContImgPreview: function (file) {
                    this.dialogContImgUrl = file.url;
                    this.dialogContImgVisible = true;
                },
                
                //上传内容图
                uploadProductPic: function (file) {
                    var fd = new FormData();
                    fd.append('file', file.file);
                
                    var content = this.uploadPic(fd);
                    console.log(content)
                    app.productPicList.push(content.attachmentId);
                    this.addform.imgs.push(content.attachmentId);
                    this.addform.imgs.push({"fileType":1,"url":'content.data[0].fileUrl'})
                },
                
                //上传图片
                async uploadPic(data) {
                    var result = "";
                    // await UserHttp.uploadPic(wfForm);
                    // $.utils.ajax( + '/cmsProductController/uploadPic', {
                    var res = await UserHttp.uploadPic(data)
                    console.log(res.data[0].fileUrl)
                    this.addform.imgs.push({"fileType":1,"url":'res.data[0].fileUrl'})
                    console.log(this.addform.imgs)
                    return res;
                }
    },
    
}
</script>