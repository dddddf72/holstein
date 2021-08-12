<template>
    <div>
    <header class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-left-nav mui-pull-left"  href="javascript:finishCurrentUi();"></a>
			<h1 class="mui-title">消息列表</h1>
		</header>
		<div class="mui-content" id="vueObj">
			<div class="input-div">
				<div class="mui-input-row mui-search" >
					<input type="search" id="searchText" v-model="searchText"  class="mui-input-clear" placeholder="请输入名称">
				</div>
			</div>
			<div id="lists-div" class="listContents" style="">
				<ul class="mui-table-view" id="list" v-cloak >
					<li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key="index">
						<a @click="goToDetail(item)">
							<span class="mui-icon floatL" >
								<span v-if="item.num>0" class="mui-badge r10">{{item.num}}</span>
								<img  v-if="item.senderPhoto" class="mui-media-object mui-pull-left"  :src="filePath+item.senderPhoto">
								<img  v-if="!item.senderPhoto" class="mui-media-object mui-pull-left"  src="../static/h5/resources/img/defImg.png">
								<span v-if="item.online==1" class="online mui-badge rb"></span>
								<span v-if="item.online==0" class="unonline mui-badge rb"></span>
							</span>
							<div class="mui-media-body">
								{{item.senderName}}<span class="ms-times" >{{dateFormatter(item.create_time)}}</span>
								<p class='mui-ellipsis'>{{contentFormatter(item.lastContent)}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>	
		</div>

    </div>
</template>

<script>
import '../../views/static/h5/resources/css/mui.min.css'
import '../../views/static/h5/resources/js/jquery-1.8.3.min.js'
import '../../views/static/h5/resources/js/mui.min.js'
import '../../views/static/h5/resources/js/common.js'
import '../../views/static/h5/resources/js/vueCommon.js'
import '../../views/static/h5/resources/js/vue.js'
import '../../views/static/h5/resources/js/webSocket.js'

    export default {
        props: {
            list:{
                type:String
            }
        },
        data() {
            return {
                list: [],
				isPage: false,
				userName:'',
				filePath : filePath,
				name:'',
				pagePrompt: '正在加载中...',
				param: {
					receiver:'',
				},
				searchText:'',
				fun:null
            }
        },
        mounted() {
            $(function(){
                document.getElementById("lists-div").addEventListener("scroll", vueObj.debounce(vueObj.scrollData, 200));
                //document.getElementById("searchText").addEventListener("input",vueObj.debounce(vueObj.inputData, 1000));
            }) 
        },  
        created: function() {
            this.param.receiver = this.Common.getUrlParam('create_user');
            this.search(false);
        },
        methods: {
				
				contentFormatter: function(value) {
					
					if(value!=null && value !=""){
						var pic=['bmp','jpg','png','tif','gif','pcx','tga','exif','fpx','svg','psd','cdr','pcd','dxf','ufo','eps','ai','raw','WMF','webp','jpeg'];
						var a=value.split(".");
						let index = pic.indexOf(a[a.length-1]);
						if(index!=-1){
							return '[图片]';
						}else{
							return value;
						}
					}
					return "";
				},
				
				dateFormatter: function(value) {
					if (value != null) {
						var date = new Date(value);
					    var year = date.getFullYear().toString();
					    var month = (date.getMonth() + 1);
					    var day = date.getDate().toString();
					    var hour = date.getHours().toString();
					    var minutes = date.getMinutes().toString();
					    var seconds = date.getSeconds().toString();
					    if (month < 10) {
					        month = "0" + month;
					    }
					    if (day < 10) {
					        day = "0" + day;
					    }
					    if (hour < 10) {
					        hour = "0" + hour;
					    }
					    if (minutes < 10) {
					        minutes = "0" + minutes;
					    }
					    if (seconds < 10) {
					        seconds = "0" + seconds;
					    }
						
					    var str = year + "-" + month + "-" + day
						
						var d = new Date(str.replace(/-/g,"/"));
					    var todaysDate = new Date();
					    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
					    	return hour + ":" + minutes;
					    } else {
					    	return year + "-" + month + "-" + day
					    }
					}
				},
				
				goToDetail: function(o) {
					debugger
		        	var tempUrlParam = {
	        			receiver: '1146',
	        			receiverName: '张三',
						userName: "13689445556",
						userId: '222',
					};
		        	
		        	var Param = {
	        			sender: '1148',
						receiver : '1146',
					};
		        var _this = this;
		        	 _this.Common.Ajax.sendRequest({
							url: '/api/Chat/Online/changeReadStatu',
							param: Param,
							success: function(data) {
							}
						});
			        location.href = 'messageOnline.html?' + this.Common.urlEncode(tempUrlParam);
		        },
		        
				apiGetEnterprise: function(param) {
					debugger
					var p;
					var _this = this;
					if(param){
						p=param;
					}else{
						p=_this.param
					}
					p.receiver ='1146';
					_this.Common.Ajax.sendRequest({
						url: '/api/Chat/Online/listChatRecord',
						param: p,
						success: function(data) {
							if (data.msg.flag == 0) {
								var result=data.biz;
								_this.list=result;
							}
						}
					});
				},
				
				debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    },
				scrollData: function() {
		        	var clientHeigth = $('#list').height();
					var scrollTop = $('#lists-div').scrollTop();
					var conetentHeigth = $('#lists-div').height();
					if(parseInt(clientHeigth - parseInt(scrollTop) + 49) == conetentHeigth ||
							parseInt(clientHeigth - parseInt(scrollTop) + 50) == conetentHeigth ||
							parseInt(clientHeigth - parseInt(scrollTop) + 51) == conetentHeigth) {
						this.search(true);
					}
		        },
			     inputData:function(val) {
			    	 debugger
	    		     // 查询参数
	    			var search_param = {
	    				receiver:'1146',
	    				receiverName: this.searchText
	    			};
	    			this.apiGetEnterprise(search_param);
	    	     },
		        
		        search: function(isPage) {
		        	debugger
		        	this.isPage = true;
					this.pagePrompt = '正在加载中...';
		        	if (!isPage) {
		        		this.param.page = 1;
						this.list = [];
		        	} else {
		        		this.param.page++;
		        	}
					this.apiGetEnterprise();
		        },
			},
			watch: {
				searchText:function(str){
	            	this.debounce(this.inputData,500);
				}
			}
    }
</script>

<style scoped>

			.app-icon img{
				width: 40px;
				height: 40px;
			}
			/*.mui-search input[type=search]{
				margin-bottom: 0;
			}*/
			.mui-input-clear{
				margin-bottom: 0;
			}
			.input-div{
				margin: 10px;
				margin-bottom: 0px;
			}
			body,html,.mui-content{
				width: 100%;
				height: 100%;
			}
			.listContents{
				height: calc(100% - 59px);
				height: -webkit-calc(100% - 59px);
    			overflow: auto;
			}
			.mui-media-object{
				border-radius: 50%;
			}
			.ms-times{
			    position: absolute;
			    right: 15px;
			    font-size: 12px;
			    top: 10px;
			    color:#8f8f94 ;
			}
			.floatL{
				float: left;
				position: relative;
			}
			.r10{
			    right: 5px;
			    left: auto !important;
			    padding: 1px 5px !important;
			}
			[v-cloak] {
				display: none;
			}
			ul,li,ol{padding:0;margin:0}
			.rb{
		        right: 8px;
			    bottom: 0px;
			    left: auto !important;
			    top: auto !important;
			    width: 12px;
			    height: 12px;
			}
			.online{
				background:green !important;
			}
			.unonline{
				background:#afafaf !important;
			}
</style>