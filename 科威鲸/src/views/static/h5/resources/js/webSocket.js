var ws = null;
var wsUrl = null;
var tt;
var lockReconnect = false;//避免重复连接

var CurrentUser = null;

$(function() {
	createWebSocket();
//	getCurrentUser();
});
function setCurrentUser(data) {
	sessionStorage.setItem('CurrentUser', JSON.stringify(data));
	CurrentUser = data;
	// 创建WebSocket
	createWebSocket();
}
function getUrlParam(name) {
	var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(r[2]); return null;
};
//建立WebSocket连接
function createWebSocket() {
	console.log("开始...");
	//建立webSocket连接
	var host = window.location.host;
	wsUrl = "ws://"+host+"/webSocket?type=APP&userId=1146" ;
//	wsUrl = "ws://localhost:8880/server/websocket?type=APP&userId=" + CurrentUser.userId;
	ws = new WebSocket(wsUrl);
	
	//打开webSokcet连接时，回调该函数
	ws.onopen = function () {      
		console.log("onpen");  
		//心跳检测重置
	    heartCheck.reset().start();
	};
       
	//关闭webSocket连接时，回调该函数
	ws.onclose = function (e) {
		//关闭连接    
		console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
		reconnect(wsUrl);
	};
	
	//接收信息
	ws.onmessage = function (msg) {
		//拿到任何消息都说明当前连接是正常的
	    heartCheck.reset().start();
		var data = JSON.parse(msg.data);
		console.log(data);
		if (data.sendMenu && data.sendMenu == 'zxzx') {
			if (location.href.indexOf('messageOnline.html') != -1) {
				if (data.obj != "") {
					var h = '';
						h+='<div class="message">'
						h+='		<div class="message-options">'
						h+='			<div class="img">'
						h+='				<img src="../resources/img/60x60.gif"/>'
						h+='			</div>'
						h+='			<div class="name">'+data.obj.senderName+'</div>'
						h+='			<div class="times">'+Util.DateTimeFormatter(data.obj.createTime)+'</div>'
						h+='		</div>'
						if(data.obj.contentType == 2){
							h+='<div class="message-wrapper bgImgColor">'
							//h+='		<img onclick="showImg(this)" src='+'http://localhost:8080/static/' + data.obj.content+'/>'
							h+='		<img onclick="showImg(this)" src='+filePath + data.obj.content+'/>'
						}else{
							h+='		<div class="message-wrapper">'
							h+='			'+data.obj.content+''
						}
						h+='		</div>'
						h+='	</div>'
					$('.body-chatt-div').append(h);
					$('.mui-content').animate({scrollTop:$('.body-chatt-div').height() },400);
				}
			}else if(location.href.indexOf('listMessage.html') != -1){
				//location.href = '/static/h5/agriculture/listMessage.html?create_user=' + CurrentUser.userId
				vueObj.apiGetEnterprise();
			}else{
				if (data.obj != "") {
					var msg = data.msg;
					var btnArray = ['否', '是'];
					var title = '在线咨询';
					var content = '您收到一条在线咨询，是否前往查看。';
					mui.confirm(content, title, btnArray, function(e) {
						if (e.index == 1) {
							location.href = '/static/h5/agriculture/messageOnline.html?receiver=' + data.obj.sender 
							+ '&userName=' + CurrentUser.userName+ '&userId=' + CurrentUser.userId+ '&userPhoto=' + CurrentUser.userPhoto;
						} else {
							
						}
					});
				}
			}
			
		} else {
			if (data.msg) {
				console.log(data.msg);
			}
		}
	};
};
  
//发送消息
function send() {
	
};

//强制关闭浏览器  调用ws.close(),进行正常关闭
window.onunload = function() {
	//关闭连接   
	closeWebSocket();    
};

//关闭连接
function closeWebSocket() {
	if (ws != null) {
  		 ws.close();
	}
};

function urlEncode(obj) {
	var _result = [];
	for ( var key in obj) {
		var _val = obj[key];
		_result.push(key + '=' + _val);
	}
	return _result.join('&');
}

//心跳检测
var heartCheck = {
    timeout: 1000,
    timeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
        return this;
    },
    start: function(){
        this.timeoutObj = setTimeout(function(){
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
        	ws.send('{toUser: "One",userId: 123,content: {msg:"ping"}}');
        }, this.timeout);
    }
}
function reconnect(url) {
	if (lockReconnect) {
		return;
	};
	lockReconnect = true;
	//没连接上会一直重连，设置延迟避免请求过多
	tt && clearTimeout(tt);
	tt = setTimeout(function() {
		createWebSocket(url);
		lockReconnect = false;
	},
	5000);
}