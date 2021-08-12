var ToolFile = {
	
	fileData: {},
	
	init: function() {
		$(document).on('click', '.dialog-shadow-img', function() {
			$(this).hide();
		});
	},
	
	initFile: function(options) {
		var _this = this;
		
		if (options.name && !_this.fileData[options.name]) {
			_this.fileData[options.name] = { name: options.name, fileType: '', data: [] };
		}
		
		if (options.fileType) {
			_this.fileData[options.name].fileType = options.fileType;
		}
		
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
			
			_this.initFileView(tempObj, options);
			
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
							
							_this.progress(tempObj.imgId, per);
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
						
						_this.success(tempObj, options);
						
						if (options.success) {
							options.success.apply(_this, [ data, tempObj, options ]);
						}
					} else {
						_this.error(tempObj, options);
						
						if (options.error) {
							options.error.apply(_this, [ data, tempObj, options ]);
						}
					}
				}
			});
		};
		
	},
	
	success: function(tempObj, options) {
		var _this = this;
		if (options.name) {
			_this.fileData[options.name].data.push(tempObj);
		}
	},
	
	error: function(tempObj, options) {
		if (options.viewEl) {
			$('#' + options.viewEl).find('div:last()').remove();
		}
	},
	
	remove: function(imgId, name, options) {
		var _this = this;
		if (options.name) {
			var delIndex = -1;
			_this.fileData[options.name].data.forEach(function(item, index) {
				if (item.imgId == imgId) {
					delIndex = index;
				}
			});
			if (delIndex != -1) {
				_this.fileData[options.name].data.splice(delIndex, 1);
			}
		}
	},
	
	clear: function(name, viewEl) {
		this.fileData[name] = { name: name, fileType: '', data: [] };
		$('#' + viewEl).html('');
	},
	
	initFileView: function(tempObj, options) {
		var _this = this;
		var tempHTML = '';
		tempHTML += '<div class="ulload-common" data-id="' + tempObj.imgId + '">';
		tempHTML += '<span class="ulload-common-close" data-name="' + tempObj.name + '">X</span>';
		if (tempObj.fileType == 'video') {
			tempHTML += '<video data-id="' + tempObj.imgId + '" poster="/static/'+tempObj.firstFrame+'" data-type="' + tempObj.fileType + '" src="' + tempObj.result + '" style="width:100%;height:100%;"/>';
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
			
			_this.remove(imgId, name, options);
			
			if (options.remove) {
				options.remove.apply(_this, [ imgId, name ]);
			}
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
	
	setFileData: function(options) {
		var _this = this;
		
		options.forEach(function(item, index) {
			_this.fileData[item.name] = {
				name: item.name,
				fileType: item.fileType,
				data: item.data
			};
			_this.fileData[item.name].data.forEach(function(_item, index) {
				_this.initFileView(_item, {
					name: item.name,
					viewEl: item.viewEl,
				});
				_this.progress(_item.imgId, 100);
			});
		});
	},
	
	initFileViewByReadOnly: function(options) {
		var _this = this;
		
		var data = options.data;
		var viewEl = options.viewEl;
		
		var tempHTML = '';
		tempHTML += '<div class="ulload-common">';
		if (data.fileType == 'video') {
			tempHTML += '<video poster="'+data.firstFrame+'" data-id="' + data.imgId + '" data-type="' + data.fileType + '" src="' + data.result + '" style="width:100%;height:100%;"/>';
		} else if (data.fileType == 'image') {
			tempHTML += '<img data-id="' + data.imgId + '" data-type="' + data.fileType + '" src="' + data.result + '" style="width:100%;height:100%;"/>';
		} else {
			//tempHTML += '<span>文件</span>';
			tempHTML += " <a href='" + ccEnv.filePath + data.result + "' download='filePath'>" + data.name + "</a>";
		}
		tempHTML += '</div>';
		$('#' + viewEl).append(tempHTML);
		
		$('video[data-id="' + data.imgId + '"],img[data-id="' + data.imgId + '"]').click(function() {
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
	}
	
};