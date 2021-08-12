var DateUtil = {
		
	startTime : ' 00:00:00',
	
	endTime : ' 23:59:59',
	
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
	
	// 当前月份第一
	CurrentMonthFirst : function() {
		var _this = this;
		var currentDate = new Date();
		currentDate.setDate(1);
		return _this.DateFormatter(currentDate) + DateUtil.startTime;
	},
	
	// 当前月份最后一天
	CurrentMonthLast : function() {
		var _this = this;
		var currentDate = new Date();
		var currentMonth = currentDate.getMonth();
		var nextMonth = ++currentMonth;
		var nextMonthFirstDay = new Date(currentDate.getFullYear(), nextMonth, 1);
		var oneDay = 1000 * 60 * 60 * 24;
		return _this.DateFormatter(new Date(nextMonthFirstDay - oneDay)) + DateUtil.endTime;
	},

	// 指定月份最后一天
	MonthLast : function(dateMonth) {
		var _this = this;
		var dateMonthArray = dateMonth.split('-');
		return _this.DateFormatter(new Date(dateMonthArray[0], dateMonthArray[1], 0)) + DateUtil.endTime;
	},
	
};

var Ajax = {
	
	common : function(ea) {
		var _this = this;
		var tempObj = {};
		tempObj.url = ea.url;
		tempObj.data = Common.ifNull(ea.param, {});
		tempObj.type = Common.ifNullStr(ea.type, 'POST');
		tempObj.dataType = Common.ifNullStr(ea.dataType, 'json');
		tempObj.async = Common.ifNull(ea.async, true);
		tempObj.success = function(data) {
			Common.ifNull(ea.success, function(data) {}).apply(_this, [ data ]);
		};
		$.ajax(tempObj);
	},
	
};

var Common = {
		
	ifNullStr : function(value, defaultValue) {
		if (value != null && value != undefined && value != '') {
			return value;
		}
		return defaultValue;
	},
	
	ifNull : function(value, defaultValue) {
		if (value != null && value != undefined) {
			return value;
		}
		return defaultValue;
	},
	
	getUrlParam : function(name) {
		var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return decodeURI(r[2]); return null;
	},

	urlEncode : function(obj) {
		var _result = [];
		for ( var key in obj) {
			var _val = obj[key];
			_result.push(key + '=' + _val);
		}
		return _result.join('&');
	},
	
};