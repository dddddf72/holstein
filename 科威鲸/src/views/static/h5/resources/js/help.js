// 获取url参数
getUrlParam = function (name) {
	var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(r[2]); return null;
};

/**
 * 文本框根据输入内容自适应高度
 * {HTMLElement}   输入框元素
 * {Number}        设置光标与输入框保持的距离(默认0)
 * {Number}        设置最大高度(可选)
 */
var autoTextarea = function (elem, extra, maxHeight) {
    extra = extra || 0;
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
    isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function (type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? 
        function (name) {
            var val = elem.currentStyle[name];
            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top -
                       parseFloat(getStyle('paddingTop')) -
                       parseFloat(getStyle('paddingBottom')) + 'px';       
            };
            return val;
        } : function (name) {
            return getComputedStyle(elem, null)[name];
        },
    minHeight = parseFloat(getStyle('height'));
    elem.style.resize = 'both';//如果不希望使用者可以自由的伸展textarea的高宽可以设置其他值

    var change = function () {
        var scrollTop, height,
            padding = 0,
            style = elem.style;

        if (elem._length === elem.value.length) return;
        elem._length = elem.value.length;

        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        };
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight - padding;
                style.overflowY = 'hidden';
            };
            style.height = height + extra + 'px';
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        };
    };

    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    change();
};
// 这段代码是固定的，必须要放到js中
function setupWebViewJavascriptBridge(callback) {
     if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
     if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
     window.WVJBCallbacks = [callback];
     var WVJBIframe = document.createElement('iframe');
     WVJBIframe.style.display = 'none';
     WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
     document.documentElement.appendChild(WVJBIframe);
     setTimeout(function() { document.documentElement.removeChild(WVJBIframe); }, 0);
}
// 请求app定位
getPosition = function() {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.getPosition();
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('getPosition', '', function responseCallback(responseData) {});
			
			bridge.registerHandler('setPosition', function(data, responseCallback) {
				setPosition(data);
			});
		});
	}
};
// 返回app界面
finishCurrentUi = function() {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.finishCurrentUi();
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('finishCurrentUi', '', function responseCallback(responseData) {});
		});
	}
};
function GetQueryString(name)
 {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
 }
function getCurrentUser() {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.getCurrentUser();
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('getCurrentUser', '', function responseCallback(responseData) {});
			
			bridge.registerHandler('getCurrentUser', function(data, responseCallback) {
				setCurrentUser(data);
			});
		});
	}
};

function goToH5(url) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.goToH5(url);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('goToH5', url, function responseCallback(responseData) {});
		});
	}
}

function setUnReadNum(json) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.setUnReadNum(json);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('setUnReadNum', json, function responseCallback(responseData) {});
		});
	}
}

function startNavigation(json) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.startNavigation(json);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('startNavigation', json, function responseCallback(responseData) {});
		});
	}
}

var helpUtil = {};
/*
 * 发起视频通话
 * userId:被邀请人的ID
 */
helpUtil.sendCheck = function(userId) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.sendCheck(userId);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('sendCheck', userId, function responseCallback(responseData) {});
		});
	}
}
/*
 * 邀请进入房间
 */
helpUtil.sendInvite = function(userId) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.sendInvite(userId);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('sendInvite', userId, function responseCallback(responseData) {});
		});
	}
}
/*
 * 加入房间
 */
helpUtil.enterRoom = function(param) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.enterRoom(param);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('enterRoom', param, function responseCallback(responseData) {});
		});
	}
}

/*
 * 查看监控
 */
helpUtil.lookMonitoring = function(param) {
	var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
	if (isAndroid) {
		android.lookMonitoring(param);
	} else {
		// 与OC交互的所有JS方法都要在这里注册,才能让OC和JS之间相互调用
		setupWebViewJavascriptBridge(function(bridge) {
			/* OC给JS提供公开的API, 在JS中可以手动调用此API, 并且可以接收OC中传过来的参数,同时可回调OC */
			bridge.callHandler('lookMonitoring', param, function responseCallback(responseData) {});
		});
	}
}

Util = {};
Util.HTMLEncode = function(html) {
	var temp = document.createElement("div");
	(temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
	var output = temp.innerHTML;
	temp = null;
	return output;
};
Util.HTMLDecode = function(text) {
	var temp = document.createElement("div"); 
	temp.innerHTML = text;
	var output = temp.innerText || temp.textContent;
	temp = null;
	return output;
};

/**
 * 日期格式转换
 */
Util.DateFormatter = function(value) {
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
};
/**
 * 日期时间格式转换
 */
Util.DateTimeFormatter = function(value) {
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
	    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
	}
};

/**
 * js版uuid
 * @returns
 */
function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
	function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r: (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
};