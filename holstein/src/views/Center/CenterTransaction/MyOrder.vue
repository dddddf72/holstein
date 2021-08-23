<template>
    <div style="margin-left:40px;width:970px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin:50px 0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="first">
                <div style="margin-top:20px">
                        <div>
							<!-- 搜索条件 -->
							<div>
								<table border="" cellspacing="" cellpadding="" class="searchCriteria">
									<tr>
										<td class="searchCriteriaExplain">订单号</td>
										<td class="searchCriteriaContent">
											<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
										</td>
										<td class="searchCriteriaExplain">商品名称</td>
										<td class="searchCriteriaContent">
											<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
										</td>
										<td class="searchCriteriaExplain">支付方式</td>
										<td class="searchCriteriaContent">
											<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
											    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
											</el-select>
										</td>
									</tr>
									<tr>
                    <td class="searchCriteriaExplain">订单状态</td>
                    <td class="searchCriteriaContent">
                      <el-select v-model="queryData.status" clearable placeholder="选择订单状态" class="filter-item">
                          <el-option v-for="item in statusOptions" :key="item.key" :label="item.status_name" :value="item.key" />
                      </el-select>
                    </td>
										<td class="searchCriteriaExplain">订单类型</td>
										<td class="searchCriteriaContent">
											<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
											    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
											</el-select>
										</td>
									</tr>
								</table>
							</div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
                                <el-button type="danger" size="mini" icon="el-icon-refresh" @click="refresh">刷新</el-button>
                            </div>
                            <eForm ref="form" @toQuery="toQuery" @toRefresh="refresh" />
                            <eFormf ref="form1" @toQuery="toQuery" />
                            <el-table :data="tableData">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                              <div class="chatOnline"  @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="edit(scope.row)">资金托管</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '竞标中'">
                                            <div class="dispalyFlex" style="cursor:pointer">
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="edit(scope.row)">资金托管</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail" @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="竞标中" name="second">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button size="mini" type="success" icon="el-icon-search" @click="toQuery0">搜索</el-button>
                                <el-button type="danger" size="mini" icon="el-icon-refresh" @click="refresh0">刷新</el-button>
                            </div>
							<!-- 搜索条件 -->
                      <eForm ref="form" @toQuery="toQuery0" @toRefresh="refresh0" />
                            <el-table :data="tableData0">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div>
                                            <div class="dispalyFlex" style="cursor:pointer">
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="edit(scope.row)">资金托管</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange0"
                                    @current-change="handleCurrentChange0"
                                    :current-page.sync="currentPage0"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total0">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="待支付" name="third">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery1">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh1">刷新</el-button>
                            </div>
                            <eForm ref="form" @toQuery="toQuery1" @toRefresh="refresh1" />
                            <el-table :data="tableData1">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                              <div class="chatOnline"  @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                                <div class="payBtn" @click="edit(scope.row)">资金托管</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange1"
                                    @current-change="handleCurrentChange1"
                                    :current-page.sync="currentPage1"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total1">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="待接单" name="fourth">
                    <div style="margin-top:20px">
                        <div>
                           <!-- 搜索条件 -->
                           <div>
                           	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                           		<tr>
                           			<td class="searchCriteriaExplain">订单号</td>
                           			<td class="searchCriteriaContent">
                           				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                           			</td>
                           			<td class="searchCriteriaExplain">商品名称</td>
                           			<td class="searchCriteriaContent">
                           				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                           			</td>
                           			<td class="searchCriteriaExplain">支付方式</td>
                           			<td class="searchCriteriaContent">
                           				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                           				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                           				</el-select>
                           			</td>
                           		</tr>
                           		<tr>
                           			<td class="searchCriteriaExplain">订单类型</td>
                           			<td class="searchCriteriaContent">
                           				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                           				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                           				</el-select>
                           			</td>
                           		</tr>
                           	</table>
                           </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery2">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh2">刷新</el-button>
                            </div>
                            <el-table :data="tableData2">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange2"
                                    @current-change="handleCurrentChange2"
                                    :current-page.sync="currentPage2"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total2">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="进行中" name="fifth">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button size="mini" type="success" icon="el-icon-search" @click="toQuery3">搜索</el-button>
                                <el-button type="danger" size="mini" icon="el-icon-refresh" @click="refresh3">刷新</el-button>
                            </div>
                            <eFormf ref="form1" @toQuery="toQuery3" />
                            <el-table :data="tableData3">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">
                                        <div>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange3"
                                    @current-change="handleCurrentChange3"
                                    :current-page.sync="currentPage3"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total3">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="待验收" name="sixth">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery4">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh4">刷新</el-button>
                            </div>
                            <el-table :data="tableData4">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div >
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange4"
                                    @current-change="handleCurrentChange4"
                                    :current-page.sync="currentPage4"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total4">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="未提现" name="seventh">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery5">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh5">刷新</el-button>
                            </div>
                            <el-table :data="tableData5">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '验收通过'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange5"
                                    @current-change="handleCurrentChange5"
                                    :current-page.sync="currentPage5"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total5">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已完成" name="eighth">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery6">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh6">刷新</el-button>
                            </div>
							 <!-- 搜索条件 -->
                            <el-table :data="tableData6">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange6"
                                    @current-change="handleCurrentChange6"
                                    :current-page.sync="currentPage6"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total6">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="申请退款" name="ninth">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0;cursor:pointer">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery7">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh7">刷新</el-button>
                            </div>
                            <el-table :data="tableData7">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex" style="cursor:pointer">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange7"
                                    @current-change="handleCurrentChange7"
                                    :current-page.sync="currentPage7"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total7">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已退款" name="tenth">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery8">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh8">刷新</el-button>
                            </div>
                            <el-table :data="tableData8">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange8"
                                    @current-change="handleCurrentChange8"
                                    :current-page.sync="currentPage8"
                                    :page-sizes="[10]"  :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total8">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已取消" name="eleventh">
                    <div style="margin-top:20px">
                        <div>
                            <!-- 搜索条件 -->
                            <div>
                            	<table border="" cellspacing="" cellpadding="" class="searchCriteria">
                            		<tr>
                            			<td class="searchCriteriaExplain">订单号</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.orderNo" clearable placeholder="输入搜索订单号" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">商品名称</td>
                            			<td class="searchCriteriaContent">
                            				<el-input v-model="queryData.serviceName" clearable placeholder="输入搜索商品名称" class="filter-item"  />
                            			</td>
                            			<td class="searchCriteriaExplain">支付方式</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.payType" clearable placeholder="选择支付方式" class="filter-item">
                            				    <el-option v-for="item in payTypeOptions" :key="item.key" :label="item.payType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            		<tr>
                            			<td class="searchCriteriaExplain">订单类型</td>
                            			<td class="searchCriteriaContent">
                            				<el-select v-model="queryData.orderType" clearable placeholder="选择订单类型" class="filter-item">
                            				    <el-option v-for="item in orderTypeOptions" :key="item.key" :label="item.orderType_name" :value="item.key" />
                            				</el-select>
                            			</td>
                            		</tr>
                            	</table>
                            </div>
                            <div style="margin:30px 0">
                                <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery9">搜索</el-button>
                                <el-button type="danger" class="filter-item" size="mini" icon="el-icon-refresh" @click="refresh9">刷新</el-button>
                            </div>
                            <el-table :data="tableData9">
                                <el-table-column label="订单详情">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '进行中'||scope.row.statusStr === '待验收'||scope.row.statusStr === '已完成'">
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style="margin:5px 0 5px 0;"><span style="color:#999999">普通商户—</span><span>{{scope.row.username}}</span><span style="color:#333333">接受了需求，正在为您服务</span></div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                        <div v-else>
                                            <div style="color:#666666;">{{scope.row.serviceName}}</div>
                                            <div style=""><span>{{scope.row.orderTime}}</span></div>
                                            <div style="">订单编号：<span>{{scope.row.orderNo}}</span></div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="订单状态">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'">
                                            <div style="color:green">{{scope.row.statusStr}}</div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '已取消'">
                                            <div style="color:red">{{scope.row.statusStr}}</div>
                                            <div class="">我关闭了需求</div>
                                        </div>
                                        <div v-else>
                                            <div style="color:blue">{{scope.row.statusStr}}</div>
                                        </div>
                                    </template>

                                </el-table-column>
                                <el-table-column label="订单金额">
                                    <template scope="scope">
                                        <div v-if="scope.row.statusStr === '已完成'"></div>
                                        <div v-else>
                                            <div v-if="scope.row.orderAmount">总金额：￥{{scope.row.orderAmount}}元</div>
                                            <div v-if="scope.row.receiveAmount">实际托管金额：￥{{scope.row.receiveAmount}}元</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="payTypeStr" label="操作">
                                    <template slot-scope="scope">

                                        <div v-if="scope.row.statusStr === '待支付'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else-if="scope.row.statusStr === '待验收'">
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="dispalyFlex">
<!--                                                <div class="chatOnline" @click="jumpChat(scope.row)">在线沟通</div>-->
                                                <div class="checkOrderDetail"  @click="jumpFundSituation(scope.row.id)">订单详情</div>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div style="margin-top:60px">
                            <el-pagination
                                    @size-change="handleSizeChange9"
                                    @current-change="handleCurrentChange9"
                                    :current-page.sync="currentPage9"
                                    :page-sizes="[10]" :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total9">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import GoodsHttp from '@/model/GoodsHttp'
import UserHttp from '@/model/UserHttp'
import eForm from '../merchant/orderFund/fund.vue'
// import eForm1 from '../merchant/orderFund/fund1.vue'
import eFormf from '../../Center/merchant/orderFile/file.vue'

export default {
  components: { eForm,eFormf },
        data() {
            const query={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query0={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query1={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query2={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query3={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query4={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query5={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			isWithdrawal:0,//5
		};
            const query6={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query7={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query8={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
            const query9={
			orderNo:null,//1
            username:'',//2
			serviceName:'',//3

			payType:null,//4
			status:null,//5
		};
        const item = {
			orderNo:"",
            username: '',
			serviceName: '',
			orderAmount:null,
			receiveAmount:null,
			payTypeStr:null,
			statusStr:"",
			createTime:null
		};
            return {
                user:"",
                userId:"",
                activeName: 'first',
                dialogComVisible:false,
                fileList:[],


                //查看竞标详情
                dialogComVisible0:false,
                dialogComVisible1:false,
                dialogComVisible2:false,
                dialogComVisible3:false,
                dialogComVisible4:false,
                dialogComVisible5:false,
                dialogComVisible6:false,
                dialogComVisible7:false,
                dialogComVisible8:false,
                dialogComVisible9:false,

                tableData:[],//全部     status
                tableData0:[],//竞标中       0，    orderType1

                tableData1:[],//待支付       0，    orderType0
                tableData2:[],//代付款
                tableData3:[],//待接单      1   //
                tableData4:[],//进行中      2
                tableData5:[],//待验收  不通过  3
                tableData6:[],//验收  通过    4
                tableData7:[],//已完成    5
                tableData8:[],//申请退款    -1          null
                tableData9:[],//已退款      -2
                tableData10:[],//已取消    6

			    queryData:query,
			    queryData0:query0,
			    queryData1:query1,
			    queryData2:query2,
			    queryData3:query3,
			    queryData4:query4,
			    queryData5:query5,
			    queryData6:query6,
			    queryData7:query7,
			    queryData8:query8,
			    queryData9:query9,
                //搜索订单号
                input2:'',
                //页
                pageSize:4,
                currentPage: 1,
                total:20,
                pageSize0:4,
                currentPage0: 1,
                total0:20,
                pageSize1:4,
                currentPage1: 1,
                total1:20,
                pageSize2:4,
                currentPage2: 1,
                total2:20,
                pageSize3:4,
                currentPage3: 1,
                total3:20,
                pageSize4:4,
                currentPage4: 1,
                total4:20,
                pageSize5:4,
                currentPage5: 1,
                total5:20,
                pageSize6:4,
                currentPage6: 1,
                total6:20,
                pageSize7:4,
                currentPage7: 1,
                total7:20,
                pageSize8:4,
                currentPage8: 1,
                total8:20,
                pageSize9:4,
                currentPage9: 1,
                total9:20,

                payTypeOptions: [
                    { key: 1, payType_name: '微信支付' },
                    { key:2,payType_name:'支付宝支付'}
                ],
                statusOptions: [
                    { key: -1, status_name: '申请退款' },
                    { key:-2,status_name:'已退款'},
                    { key: 0, status_name: '待支付' },
                    { key:1,status_name:'待接单'},
                    { key: 2, status_name: '进行中' },
                    { key:3,status_name:'待验收'},
                    // { key:4,status_name:'验收通过'},
                    { key: 5, status_name: '已完成' },
                    { key:6,status_name:'已取消'}
                ],
                 orderTypeOptions: [
                    { key: null, orderType_name: '所有' },
                    { key:0,orderType_name:'普通订单'},
                    { key: 1, orderType_name: '需求订单' }
                ]
            }
        },
        async mounted() {
            if(this.$cookie && this.$cookie.get("loginInfo")){
                this.user = JSON.parse(this.$cookie.get("loginInfo"));
                // console.log(this.user.id)
                // this.username = JSON.parse(this.$cookie.get("loginInfo")).username;
                // this.phone = JSON.parse(this.$cookie.get("loginInfo")).phone
                // this.userType = JSON.parse(this.$cookie.get("loginInfo")).userType
                if(this.user){
                    this.userId = this.user.id
                }
            }
            // myorderlist
                var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res.data.biz;
                        this.tableData = list;
                        this.pageSize = size;
                        this.total = total
                var res0 = await GoodsHttp.myorderlist(this.queryData0.orderNo,this.queryData0.username,this.queryData0.serviceName,this.queryData0.payType,0,1,this.userId,0,10)
            // console.log(res.data.biz);
                var {list0,total0,size0} = res0.data.biz;
                        this.tableData0 = list0;
                        this.pageSize0 = size0;
                        this.total0 = total0
                var res1 = await GoodsHttp.myorderlist(this.queryData1.orderNo,this.queryData1.username,this.queryData1.serviceName,this.queryData1.payType,0,0,this.userId,0,10)
            // console.log(res.data.biz);
                var {list1,total1,size1} = res1.data.biz;
                        this.tableData1 = list1;
                        this.pageSize1 = size1;
                        this.total1 = total1
            // var {orderNo,username,serviceName,payType,status,userId} = this.queryData;
            // this.$http.post('/api/snail/order',{orderNo,username,serviceName,payType,status,userId}).then((res)=>{
            //     console.log(res.data)
            //     this.tableData=res.data.biz;
            // })
        },
        methods: {
        edit(data) {
                // this.isAdd = false
                const _this = this.$refs.form
                _this.form = {
                    serviceName: data.serviceName,
                    username: data.username,
                    orderTime: data.orderTime,
                    orderNo: data.orderNo,
                    orderAmount:data.orderAmount
                }
                _this.dialog = true
            },
        editf(data) {
                // this.isAdd = false
                const _this = this.$refs.form1
                _this.form1 = {
                    id: data.id,
                }
                _this.dialog = true
            },
        edit1(data) {
                // this.isAdd = false
                const _this = this.$refs.form
                _this.form = {
                    serviceName: data.serviceName,
                    username: data.username,
                    orderTime: data.orderTime,
                    orderNo: data.orderNo,
                    orderAmount:data.orderAmount
                }
                _this.dialog = true
            },
        jumpChat(sco){
// debugger
          var loginInfo = JSON.parse(this.$cookie.get("loginInfo"))
          var userId = loginInfo.id
          var receiver2 =null;
          var buyer1 = sco.buyer
          var accepter = sco.accepter;
          var createUser = sco.createUser;
            if(accepter !=null && accepter !=''){
              receiver2 = accepter;
            }else if(createUser !=null && createUser !=''){
              receiver2 = createUser;
            }else{
              receiver2 = buyer1;
            }
            // var selected_provider = sco.selected_provider;
            var wechatScan = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${userId}&receiver=${receiver2}`;
            // window.location.href = `http://api.woniuskill.com/static/h5/agriculture/chatList.html?userId=${buyer}&receiver=${accepter}`;
            window.open(wechatScan,"_blank")
        },

        //移除
        handleRemove(file, fileList) {
            this.fileList = fileList;
            // return this.$confirm(`确定移除 ${ file.name }？`);
        },

        // 选取文件超过数量提示
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },

        //监控上传文件列表
        async handleChange(file, fileList) {
            this.fileList = fileList;
            var fd = new FormData();
            fd.append('file', fileList[0].raw);
            var res = await UserHttp.uploadPic(fd)
            var file={
                "fileType":1,
                "fileUrl":res.data[0].fileUrl
            }
            this.fileData.push(file);
            console.log(res.data[0].fileUrl)
            console.log(this.fileData);
        },


            async handleClick(tab, event) {
                // console.log(tab.$options.propsData.name);
                // debugger
                if(tab.$options.propsData.name == 'first'){
                    var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res.data.biz;
                        this.tableData = list;
                        this.pageSize = size;
                        this.total = total
                }else if(tab.$options.propsData.name == 'second'){
                    var res0 = await GoodsHttp.myorderlist(this.queryData0.orderNo,this.queryData0.username,this.queryData0.serviceName,this.queryData0.payType,0,1,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res0.data.biz;
                        this.tableData0 = list;
                        this.pageSize0 = size;
                        this.total0 = total
                }else if(tab.$options.propsData.name == 'third'){
                    var res1 = await GoodsHttp.myorderlist(this.queryData1.orderNo,this.queryData1.username,this.queryData1.serviceName,this.queryData1.payType,0,0,this.userId,0,10)
            // console.log(res.data.biz);
                var {list1,total1,size1} = res1.data.biz;
                        this.tableData1 = list1;
                        this.pageSize1 = size1;
                        this.total1 = total1
                }else if(tab.$options.propsData.name == 'fourth'){
                    var res2 = await GoodsHttp.myorderlist(this.queryData2.orderNo,this.queryData2.username,this.queryData2.serviceName,this.queryData2.payType,1,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list2,total2,size2} = res2.data.biz;
                        this.tableData2 = list2;
                        this.pageSize2 = size2;
                        this.total2 = total2
                }else if(tab.$options.propsData.name == 'fifth'){
                    var res3 = await GoodsHttp.myorderlist(this.queryData3.orderNo,this.queryData3.username,this.queryData3.serviceName,this.queryData3.payType,2,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res3.data.biz;
                        this.tableData3 = list;
                        this.pageSize3 = size;
                        this.total3 = total
                }else if(tab.$options.propsData.name == 'sixth'){
                    var res4 = await GoodsHttp.myorderlist(this.queryData4.orderNo,this.queryData4.username,this.queryData4.serviceName,this.queryData4.payType,3,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res4.data.biz;
                        this.tableData4 = list;
                        this.pageSize4 = size;
                        this.total4 = total
                }else if(tab.$options.propsData.name == 'seventh'){
                    var res5 = await GoodsHttp.Withdrawal(this.queryData5.orderNo,this.queryData5.username,this.queryData5.serviceName,this.queryData5.payType,0,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res5.data.biz;
                        this.tableData5 = list;
                        this.pageSize5 = size;
                        this.total5 = total
                }else if(tab.$options.propsData.name == 'eighth'){
                    var res6 = await GoodsHttp.myorderlist(this.queryData6.orderNo,this.queryData6.username,this.queryData6.serviceName,this.queryData6.payType,5,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res6.data.biz;
                        this.tableData6 = list;
                        this.pageSize6 = size;
                        this.total6 = total
                }else if(tab.$options.propsData.name == 'ninth'){
                    var res7 = await GoodsHttp.myorderlist(this.queryData7.orderNo,this.queryData7.username,this.queryData7.serviceName,this.queryData7.payType,-1,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res7.data.biz;
                        this.tableData7 = list;
                        this.pageSize7 = size;
                        this.total7 = total
                }else if(tab.$options.propsData.name == 'tenth'){
                    var res8 = await GoodsHttp.myorderlist(this.queryData8.orderNo,this.queryData8.username,this.queryData8.serviceName,this.queryData8.payType,-2,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res8.data.biz;
                        this.tableData8 = list;
                        this.pageSize8 = size;
                        this.total8 = total
                }
                else if(tab.$options.propsData.name == 'eleventh'){
                    // debugger
                    var res9 = await GoodsHttp.myorderlist(this.queryData9.orderNo,this.queryData9.username,this.queryData9.serviceName,this.queryData9.payType,6,null,this.userId,0,10)
            // console.log(res.data.biz);
                var {list,total,size} = res9.data.biz;
                        this.tableData9 = list;
                        this.pageSize9 = size;
                        this.total9 = total
                }
            },
        ifNull(value, defaultValue) {
			if (value != null && value != undefined) {
				return value;
			}
			return defaultValue;
		},
		// 判断为空字符串
		ifNullStr (value, defaultValue) {
			if (value != null && value != undefined && value != '') {
				return value;
			}
			return defaultValue;
		},
        async refresh(){
			this.queryData.orderNo='';
			this.queryData.username='';
			this.queryData.payType=null;
			this.queryData.serviceName='';
			this.queryData.status=null;
			this.toQuery();
		},
        async refresh0(){
			this.queryData0.orderNo='';
			this.queryData0.username='';
			this.queryData0.payType=null;
			this.queryData0.serviceName='';
			this.queryData0.status=null;
			this.toQuery0();
		},
        async refresh1(){
			this.queryData1.orderNo='';
			this.queryData1.username='';
			this.queryData1.payType=null;
			this.queryData1.serviceName='';
			this.queryData1.status=null;
			this.toQuery1();
		},
        async refresh2(){
			this.queryData2.orderNo='';
			this.queryData2.username='';
			this.queryData2.payType=null;
			this.queryData2.serviceName='';
			this.queryData2.status=null;
			this.toQuery2();
		},
        async refresh3(){
			this.queryData3.orderNo='';
			this.queryData3.username='';
			this.queryData3.payType=null;
			this.queryData3.serviceName='';
			this.queryData3.status=null;
			this.toQuery3();
		},
        async refresh4(){
			this.queryData4.orderNo='';
			this.queryData4.username='';
			this.queryData4.payType=null;
			this.queryData4.serviceName='';
			this.queryData4.status=null;
			this.toQuery4();
		},
        async refresh5(){
			this.queryData5.orderNo='';
			this.queryData5.username='';
			this.queryData5.payType=null;
			this.queryData5.serviceName='';
			this.queryData5.isWithdrawal=0;
			this.toQuery5();
		},
        async refresh6(){
			this.queryData6.orderNo='';
			this.queryData6.username='';
			this.queryData6.payType=null;
			this.queryData6.serviceName='';
			this.queryData6.status=null;
			this.toQuery6();
		},
        async refresh7(){
			this.queryData7.orderNo='';
			this.queryData7.username='';
			this.queryData7.payType=null;
			this.queryData7.serviceName='';
			this.queryData7.status=null;
			this.toQuery7();
		},
        async refresh8(){
			this.queryData8.orderNo='';
			this.queryData8.username='';
			this.queryData8.payType=null;
			this.queryData8.serviceName='';
			this.queryData8.status=null;
			this.toQuery8();
		},
        async refresh9(){
			this.queryData9.orderNo='';
			this.queryData9.username='';
			this.queryData9.payType=null;
			this.queryData9.serviceName='';
			this.queryData9.status=null;
			this.toQuery9();
		},

        async onSale(id,isPutaway){
            if(isPutaway==1){
                var resa =  await GoodsHttp.judgeIsPutaway(id);
                var flag=resa.data.biz;
                if(flag){
                    this.$message.info("该商品存在于正在进行的订单中，不能下架！");
                    return;
                }
            }
                this.$confirm(`确定进行[${status ? '下架' : '上架'}]操作?`, '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                    this.$http.post('/api/serviceProduct/putaway',{uid:id,isPutaway:isPutaway}).then((res)=>{
                        this.$message.success(res.data.msg.message);
                        setTimeout(this.toQuery(),2000)
                    })
                }).catch((err) => {
                    console.log(err)
                })
        },
		async subDelete(id){
            var res=await GoodsHttp.productDel(id);
            this.$message.success(res.data.msg.message);
            this.toQuery();
        },
        async  toQuery() {
            var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,this.queryData.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.total = total
        },
        async  toQuery0() {
            var res = await GoodsHttp.myorderlist(this.queryData0.orderNo,this.queryData0.username,this.queryData0.serviceName,this.queryData0.payType,0,1,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData0 = list;
                    this.pageSize0 = size;
                    this.total0 = total
        },
        async  toQuery1() {
            var res = await GoodsHttp.myorderlist(this.queryData1.orderNo,this.queryData1.username,this.queryData1.serviceName,this.queryData1.payType,0,0,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.total1 = total
        },
        async  toQuery2() {
            var res = await GoodsHttp.myorderlist(this.queryData2.orderNo,this.queryData2.username,this.queryData2.serviceName,this.queryData2.payType,1,this.queryData2.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData2 = list;
                    this.pageSize2 = size;
                    this.total2 = total
        },
        async  toQuery3() {
            var res = await GoodsHttp.myorderlist(this.queryData3.orderNo,this.queryData3.username,this.queryData3.serviceName,this.queryData3.payType,2,this.queryData3.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData3 = list;
                    this.pageSize3 = size;
                    this.total3 = total
        },
        async  toQuery4() {
            var res = await GoodsHttp.myorderlist(this.queryData4.orderNo,this.queryData4.username,this.queryData4.serviceName,this.queryData4.payType,3,this.queryData4.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData4 = list;
                    this.pageSize4 = size;
                    this.total4 = total
        },
        async  toQuery5() {
            var res = await GoodsHttp.Withdrawal(this.queryData5.orderNo,this.queryData5.username,this.queryData5.serviceName,this.queryData5.payType,0,this.queryData5.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData5 = list;
                    this.pageSize5 = size;
                    this.total5 = total
        },
        async  toQuery6() {
            var res = await GoodsHttp.myorderlist(this.queryData6.orderNo,this.queryData6.username,this.queryData6.serviceName,this.queryData6.payType,5,this.queryData6.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData6 = list;
                    this.pageSize6 = size;
                    this.total6 = total
        },
        async  toQuery7() {
            var res = await GoodsHttp.myorderlist(this.queryData7.orderNo,this.queryData7.username,this.queryData7.serviceName,this.queryData7.payType,-1,this.queryData7.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData7 = list;
                    this.pageSize7 = size;
                    this.total7 = total
        },
        async  toQuery8() {
            var res = await GoodsHttp.myorderlist(this.queryData8.orderNo,this.queryData8.username,this.queryData8.serviceName,this.queryData8.payType,-2,this.queryData8.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData8 = list;
                    this.pageSize8 = size;
                    this.total8 = total
        },
        async  toQuery9() {
            var res = await GoodsHttp.myorderlist(this.queryData9.orderNo,this.queryData9.username,this.queryData9.serviceName,this.queryData9.payType,6,this.queryData9.orderType,this.userId,0,10)
        // console.log(res.data.biz);
            var {list,total,size} = res.data.biz;
                    this.tableData9 = list;
                    this.pageSize9 = size;
                    this.total9 = total
        },
        topay(id){
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            // this.$router.push(path)
            console.log(id)
            this.$router.push(`fundSituation?payId=${id}`)

            // JumpDetail(NavTitleOne.id)
            // async JumpDetail(id){
            //     console.log(id)//279
            //     this.$router.push(`detail?serviceId=${id}`);
            // },
        },
        //查看竞标详情
            jumpFundSituation(id){
            // console.log(id)
            // :href="item.link"
            // @click="handletab(index,item.path)"  v-for="(item,index) of tabs"
            // this.$router.push(path)
            this.$router.push(`fundSituation?id=${id}`);
        },
        //分页
        async handleCurrentChange(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData = list;
            },
        async handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData.orderNo,this.queryData.username,this.queryData.serviceName,this.queryData.payType,this.queryData.status,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData = list;
                    this.pageSize = size;
                    this.currentPage = 1
            },
        async handleCurrentChange0(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData0.orderNo,this.queryData0.username,this.queryData0.serviceName,this.queryData0.payType,0,1,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData0 = list;
            },
        async handleSizeChange0(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData0.orderNo,this.queryData0.username,this.queryData0.serviceName,this.queryData0.payType,0,1,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData0 = list;
                    this.pageSize0 = size;
                    this.currentPage0 = 1
            },
        async handleCurrentChange1(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData1.orderNo,this.queryData1.username,this.queryData1.serviceName,this.queryData1.payType,0,0,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData1 = list;
            },
        async handleSizeChange1(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData1.orderNo,this.queryData1.username,this.queryData1.serviceName,this.queryData1.payType,0,0,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData1 = list;
                    this.pageSize1 = size;
                    this.currentPage1 = 1
            },
        async handleCurrentChange2(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData2.orderNo,this.queryData2.username,this.queryData2.serviceName,this.queryData2.payType,1,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData2 = list;
            },
        async handleSizeChange2(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData2.orderNo,this.queryData2.username,this.queryData2.serviceName,this.queryData2.payType,1,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData2 = list;
                    this.pageSize2 = size;
                    this.currentPage2 = 1
            },
        async handleCurrentChange3(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData3.orderNo,this.queryData3.username,this.queryData3.serviceName,this.queryData3.payType,2,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData3 = list;
            },
        async handleSizeChange3(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData3.orderNo,this.queryData3.username,this.queryData3.serviceName,this.queryData3.payType,2,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData3 = list;
                    this.pageSize3 = size;
                    this.currentPage3 = 1
            },
        async handleCurrentChange4(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData4.orderNo,this.queryData4.username,this.queryData4.serviceName,this.queryData4.payType,3,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData4 = list;
            },
        async handleSizeChange4(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData4.orderNo,this.queryData4.username,this.queryData4.serviceName,this.queryData4.payType,3,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData4 = list;
                    this.pageSize4 = size;
                    this.currentPage4 = 1
            },
        async handleCurrentChange5(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.Withdrawal(this.queryData5.orderNo,this.queryData5.username,this.queryData5.serviceName,this.queryData5.payType,0,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData5 = list;
            },
        async handleSizeChange5(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.Withdrawal(this.queryData5.orderNo,this.queryData5.username,this.queryData5.serviceName,this.queryData5.payType,0,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData5 = list;
                    this.pageSize5 = size;
                    this.currentPage5 = 1
            },
        async handleCurrentChange6(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData6.orderNo,this.queryData6.username,this.queryData6.serviceName,this.queryData6.payType,5,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData6 = list;
            },
        async handleSizeChange6(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData6.orderNo,this.queryData6.username,this.queryData6.serviceName,this.queryData6.payType,5,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData6 = list;
                    this.pageSize6 = size;
                    this.currentPage6 = 1
            },
        async handleCurrentChange7(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData7.orderNo,this.queryData7.username,this.queryData7.serviceName,this.queryData7.payType,-1,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData7 = list;
            },
        async handleSizeChange7(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData7.orderNo,this.queryData7.username,this.queryData7.serviceName,this.queryData7.payType,-1,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData7 = list;
                    this.pageSize7 = size;
                    this.currentPage7 = 1
            },
        async handleCurrentChange8(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData8.orderNo,this.queryData8.username,this.queryData8.serviceName,this.queryData8.payType,-2,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData8 = list;
            },
        async handleSizeChange8(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData8.orderNo,this.queryData8.username,this.queryData8.serviceName,this.queryData8.payType,-2,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData8 = list;
                    this.pageSize8 = size;
                    this.currentPage8 = 1
            },
        async handleCurrentChange9(pageIn) {
                console.log(`当前页: ${pageIn}`)
                // var page = (pageIn - 1) * this.limit;//8
                // this.initData(page);
                var res = await GoodsHttp.myorderlist(this.queryData9.orderNo,this.queryData9.username,this.queryData9.serviceName,this.queryData9.payType,6,null,this.userId,`${pageIn}`-1,this.pageSize)
                // console.log(res)
                var {list} = res.data.biz;
                    this.tableData9 = list;
            },
        async handleSizeChange9(val) {
                console.log(`每页 ${val} 条`);
                var res = await GoodsHttp.myorderlist(this.queryData9.orderNo,this.queryData9.username,this.queryData9.serviceName,this.queryData9.payType,6,null,this.userId,0,`${val}`)
                // console.log(res)
                var {list,size} = res.data.biz;
                    this.tableData9 = list;
                    this.pageSize9 = size;
                    this.currentPage9 = 1
            },
        }
    }
</script>

<style scoped>
table{
    border-collapse:collapse;
}
.el-container .el-main{
display: none !important;
}
.el-table_1_column_1,.el-table_957_column_3825{
    width: 340px;
}
.el-table_1_column_2{
    width: 170px;
}
td,th{
    padding:0 10px;
}
tr td{
    height: 50px;
}
th{
    height: 30px;
}
.searchCriteria{
	padding: 0;
	margin: 0;
	border: none;
}

/* 所有样式垂直居中 */
.searchCriteria td{
	border: none;
	display:table-cell;
	vertical-align:middle
}

/* 搜索条件说明样式 */
.searchCriteriaExplain{
	text-align: center;
	width: 100px;
}

/* 搜索条件内容样式 */
.searchCriteriaContent{
	width: 200px;
}

</style>
