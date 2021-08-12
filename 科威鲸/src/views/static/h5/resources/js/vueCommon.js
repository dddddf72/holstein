var Common = {};

Common.install = function(Vue, options) {
	var Tool = {
		
		// 判断为空字符串
		ifNullStr : function(value, defaultValue) {
			if (value != null && value != undefined && value != '') {
				return value;
			}
			return defaultValue;
		},
		
		// 判断为空
		ifNull : function(value, defaultValue) {
			if (value != null && value != undefined) {
				return value;
			}
			return defaultValue;
		},
		
		// 获取url参数
		getUrlParam : function(name) {
			var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
		    var r = window.location.search.substr(1).match(reg);
		    if(r!=null)return decodeURI(r[2]); return null;
		},
		
		// 对象转url参数
		urlEncode : function(obj) {
			var _result = [];
			for ( var key in obj) {
				var _val = obj[key];
				_result.push(key + '=' + _val);
			}
			return _result.join('&');
		},
		
		// 数组对象转tree 支持二级
		toTree: function(options) {
			options.data = this.ifNull(options.data, []);
			options.codeLength = this.ifNull(options.codeLength, 3);
			options.code = this.ifNullStr(options.code, 'code');
			options.parentCode = this.ifNullStr(options.parentCode, 'parentCode');
			options.name = this.ifNullStr(options.name, 'name');
			options.isParent = this.ifNull(options.isParent, false);
			
			var tempTree = [];
			options.data.forEach(function(item, index) {
				var _tree = null;
				if (item[options.code].length == options.codeLength) {
					_tree = item;
					_tree.value = item[options.code];
					_tree.text = item[options.name];
					_tree.children = [];
					if (options.isParent == true) {
						_tree.children.push(_tree);
					}
					options.data.forEach(function(o, i) {
						if (item[options.code] == o[options.parentCode]) {
							o.value = o[options.code];
							o.text = o[options.name];
							_tree.children.push(o);
						}
					});
					tempTree.push(_tree);
				}
			});
			return tempTree;
		},
		
		// 获取this
		getTool: function() {
			return this;
		},
		
	};
	
	Tool.DateUtil = {
		parent: Tool.getTool(), // 获取父级this
		startTime : ' 00:00:00', // 开始时分秒
		endTime : ' 23:59:59', // 结束时分秒
		
		// 获取年月日
		DateFormatter : function(value) {
			if (value != null) {
				var date = new Date(value);
			    var year = date.getFullYear().toString();
			    var month = (date.getMonth() + 1);
			    var day = date.getDate().toString();
			    if (month < 10) {
			        month = "0" + month;
			    }
			    if (day < 10) {
			        day = "0" + day;
			    }
			    return year + "-" + month + "-" + day;
			}
		},
		
		// 获取时分秒
		TimeFormatter : function(value) {
			if (value != null) {
				var date = new Date(value);
			    var hour = date.getHours().toString();
			    var minutes = date.getMinutes().toString();
			    var seconds = date.getSeconds().toString();
			    if (hour < 10) {
			        hour = "0" + hour;
			    }
			    if (minutes < 10) {
			        minutes = "0" + minutes;
			    }
			    if (seconds < 10) {
			        seconds = "0" + seconds;
			    }
			    return hour + ":" + minutes + ":" + seconds;
			}
		    
		},
		
		// 获取年月日时分秒
		DateTimeFormatter: function(date) {
			return this.DateFormatter(date) + ' ' + 
				this.TimeFormatter(date);
		},
		
		// 当前月份第一
		CurrentMonthFirst : function() {
			var _this = this;
			var currentDate = new Date();
			currentDate.setDate(1);
			return _this.DateFormatter(currentDate) + _this.startTime;
		},
		
		// 当前月份最后一天
		CurrentMonthLast : function() {
			var _this = this;
			var currentDate = new Date();
			var currentMonth = currentDate.getMonth();
			var nextMonth = ++currentMonth;
			var nextMonthFirstDay = new Date(currentDate.getFullYear(), nextMonth, 1);
			var oneDay = 1000 * 60 * 60 * 24;
			return _this.DateFormatter(new Date(nextMonthFirstDay - oneDay)) + _this.endTime;
		},

		// 指定月份最后一天
		MonthLast : function(dateMonth) {
			var _this = this;
			var dateMonthArray = dateMonth.split('-');
			return _this.DateFormatter(new Date(dateMonthArray[0], dateMonthArray[1], 0)) + _this.endTime;
		},
		
	};
	
	Tool.Ajax = {
		parent: Tool.getTool(), // 获取父级this
		
		// 发送请求
		sendRequest: function(ea) {
			var _this = this.parent;
			var tempObj = {};
			tempObj.url = ea.url;
			tempObj.data = _this.ifNull(ea.param, {});
			tempObj.type = _this.ifNullStr(ea.type, 'POST');
			tempObj.dataType = _this.ifNullStr(ea.dataType, 'json');
			tempObj.async = _this.ifNull(ea.async, true);
			tempObj.success = function(data) {
				_this.ifNull(ea.success, function(data) {}).apply(_this, [ data ]);
			};
			$.ajax(tempObj);
		},
		
	};
	
	Tool.File = {
		parent: Tool.getTool(), // 获取父级this
		
		initFile: function(options) {
			var own = this;
			var _this = this.parent;
			
			var tempObj = {};
			
			var target = options.event.target;
			
			var file = target.files[0];
			if (target.accept) {
				tempObj.fileType = target.accept.split('/')[0];
			}
			tempObj.imgId = new Date().getTime();
			tempObj.name = target.name;
			
			var formData = new FormData();
			formData.append('file', file);
			
			var reader = new FileReader();
			reader.readAsDataURL(file);
			
			reader.onload = function(e) {
				tempObj.result = e.target.result;
				
				own.initFileView(tempObj, options);
				
				$.ajax({
					type: 'post',
					url: options.url,
					data: formData,
					dataType: 'json',
					processData: false, // 不处理数据
					contentType: false, // 不设置内容类型
					xhr: function() { //ajax进度条
						var xhr = $.ajaxSettings.xhr();
						if(xhr.upload) {
							xhr.upload.addEventListener("progress", function(evt) {
								var loaded = evt.loaded; //已经上传大小情况
								var tot = evt.total; //附件总大小
								var per = Math.floor(100 * loaded / tot); //已经上传的百分比
								
								own.progress(tempObj.imgId, per);
							}, false);
							return xhr;
						}
					},
					success: function(data) {
						tempObj.code = data.code;
						tempObj.msg = data.msg;
						if (data.code = 200) {
							tempObj.fileName = data.data[0].fileName;
							tempObj.fileUrl = data.data[0].fileUrl;
							
							options.success.apply(_this, [ tempObj, options ]);
						} else {
							options.error.apply(_this, [tempObj, options ]);
						}
					}
				});
			};
			
		},
		
		initFileView: function(tempObj, options) {
			var _this = this.parent;
			var tempHTML = '';
			tempHTML += '<div class="ulload-common" data-id="' + tempObj.imgId + '">';
			tempHTML += '<span class="ulload-common-close" data-name="' + tempObj.name + '">X</span>';
			if (tempObj.fileType == 'video') {
				tempHTML += '<video data-id="' + tempObj.imgId + '" data-type="' + tempObj.fileType + '" src="' + tempObj.result + '" style="width:100%;height:100%;"/>';
			} else if (tempObj.fileType == 'image') {
				tempHTML += '<img data-id="' + tempObj.imgId + '"  data-type="' + tempObj.fileType + '" src="' + tempObj.result + '" style="width:100%;height:100%;"/>';
			} else {
				tempHTML += '<span>文件</span>';
			}
			tempHTML += '<div class="jdt" ' + (tempObj.fileType == 'application' ? 'style="top:85%"' : '') + '><span class="jdt-contents"></span><span class="jdt-precents"></span><span class="jdt-text">10%</span></div>';
			tempHTML += '</div>';
			$('#' + options.viewEl).append(tempHTML);
			
			$('.ulload-common[data-id="' + tempObj.imgId + '"] .ulload-common-close').click(function() {
				var item = $(this).parent('.ulload-common');
				
				item.remove();
				
				var imgId = item.attr('data-id');
				var name = $(this).attr('data-name');
				
				options.remove.apply(_this, [ imgId, name ]);
			});
			
			$('video[data-id="' + tempObj.imgId + '"],img[data-id="' + tempObj.imgId + '"]').click(function() {
				var item = $(this);

				var _type = item.attr('data-type');
				var _url = item.attr('src');
				
				if (_type == 'video') { //视频
					$('.dialog-shadow-img .dialog-content img').attr('src', _url).hide();
					$('.dialog-shadow-img .dialog-content video').attr('src', _url).show();
					$('.dialog-shadow-img .dialog-content audio').attr('src', _url).hide();
				} else if(_type == 'image') { //图片
					$('.dialog-shadow-img .dialog-content img').attr('src', _url).show();
					$('.dialog-shadow-img .dialog-content video').attr('src', _url).hide();
					$('.dialog-shadow-img .dialog-content audio').attr('src', _url).hide();
				}
				$('.dialog-shadow-img').show();
			});
		},
		
		progress: function(imgId, per) {
			$('.ulload-common[data-id="' + imgId + '"] .jdt .jdt-precents').css('width', per + '%');
			$('.ulload-common[data-id="' + imgId + '"] .jdt .jdt-text').text(per + '%');
		},
		
	};
	
	Tool.Cache = {
		parent: Tool.getTool(), // 获取父级this
		
		paramKey: 'param',
		
		setParam: function(object) {
			sessionStorage.setItem(this.paramKey, JSON.stringify(object));
		},
		
		getParam: function() {
			return JSON.parse(sessionStorage.getItem(this.paramKey));
		},
		
		setCacheObject: function(key, value) {
			sessionStorage.setItem(key, JSON.stringify(value));
		},
		
		getCacheObject: function(key) {
			var value = sessionStorage.getItem(key);
			return JSON.parse(value);
		},
		
		removeCacheObject: function(key) {
			sessionStorage.removeItem(key);
		},
		
	};
	
	// 必须引入 mui.min.js
	Tool.Mui = {
		parent: Tool.getTool(), // 获取父级this
		
		isInit: false,
		
		initMui: function() {
			if (!this.isInit) {
				mui.init();
				this.isInit = true;
			}
		},
		
		// 必须引入 mui.picker.min.js
		initSelectPicker: function(options) {
			var _this = this.parent;
			
			options.layer = _this.ifNull(options.layer, 2);
			options.elementId = _this.ifNullStr(options.elementId, '');
			options.data = _this.ifNull(options.data, []);
			
			this.initMui();
			mui.ready(function() {
				var picker = new mui.PopPicker({
					layer: options.layer
				});
				picker.setData(options.data);
				var element = document.getElementById(options.elementId);
				element.addEventListener('tap', function(event) {
					picker.show(function(items) {
						_this.ifNull(options.onSelect, function(data) {}).apply(_this, [ items ]);
					});
				}, false);
			});
		},
		
		initDatePicker: function(options) {
			var _this = this.parent;
			
			options.elementId = _this.ifNullStr(options.elementId, '');
			
			this.initMui();
			mui.ready(function() {
				var element = document.getElementById(options.elementId);
				element.addEventListener('tap', function(event) {
					var _self = this;
					if(_self.picker) {
						_self.picker.show(function (rs) {
							_this.ifNull(options.onSelect, function(value) {}).apply(_this, [ rs.text ]);
							_self.picker.dispose();
							_self.picker = null;
						});
					} else {
						var optionsJson = this.getAttribute('data-options') || '{}';
						var optionsData = JSON.parse(optionsJson);
						var id = this.getAttribute('id');
						_self.picker = new mui.DtPicker(optionsData);
						_self.picker.show(function(rs) {
							_this.ifNull(options.onSelect, function(value) {}).apply(_this, [ rs.text ]);
							_self.picker.dispose();
							_self.picker = null;
						});
					}
				}, false);
			});
		}
		
	};
	Vue.prototype.Common = Tool;
	
};