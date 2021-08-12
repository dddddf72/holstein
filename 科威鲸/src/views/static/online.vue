<template>
    <div>
    
	<header class="mui-bar mui-bar-nav">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title" id="receiverNames">在线咨询</h1>
	</header>
	<div class="mui-content">
		<div class="body-chatt-div" id="scrollBody">
			 <div class="history"><span class="mui-spinner"></span></div>
		</div>
		<div class="bottom-input">
			<div class="bottom-option">
				<img src="../static/h5/resources/img/upload.png"/>
				<input class="uploadClass" type="file" accept="image/*" id="uploadImg" onchange="fileChange(this)" />
			</div>
			<textarea class="textareaVal" placeholder="请输入您的问题" />
			<span class="send">发送</span>
		</div>
	</div>
	
	<div class="scalcImg">
		<img src="" />
	</div>

    </div>
</template>

<script>
import '../static/h5/resources/css/mui.min.css'
import '../static/h5/resources/css/diycss.css'
import '../static/h5/resources/js/jquery-1.8.3.min.js'
import '../static/h5/resources/js/mui.min.js'
import '../static/h5/resources/js/common.js'
import '../static/h5/resources/js/help.js'
import '../static/h5/resources/js/webSocket.js'

    export default {
        props: {
            online:{
                type:String
            }
        },
        mounted() {
            
        var receiver = getUrlParam("receiver");
            var receiverName = getUrlParam("receiverName");
            var sender = getUrlParam("userId");
            var senderName = getUrlParam("userName");
            var userPhoto="";
            
            var page = 1;
            var rows = 10;
            
            $('.scalcImg').click(function(){
                $('.scalcImg').hide();
                
            })
            $('.mui-content').scroll(function(e){
                var scroH = $('.mui-content').scrollTop();  //滚动高度
                var viewH = $('.mui-content').height();  //可见高度 
                var contentH = $('.body-chatt-div').height();  //内容高度
                if(scroH == 0){
                    page++;
                    
                    $.ajax({
                        type: 'post',
                        dataType: 'json',
                        url:'/api/Chat/Online/findChatRecordByUser',
                        data: {
                            receiver : receiver,
                            sender : sender,
                        },
                        beforeSend: function(){
                            $(".history").show();
                        },
                        success:function(data){
                            if (data.code = '200') {
                                $(".history").hide();
                                var h = '';
                                if(data!=null){
                                    var result = data.biz;
                                    if (result.length>0) {
                                        for(var i = result.length -1; i>=0;i--){
                                            if(result[i].sender == sender){
                                                h+='<div class="message self">'
                                            }else{
                                                h+='<div class="message">'
                                            }
                                            h+='	<div class="message-options">'
                                            h+='		<div class="img">'
                                            if(result[i].senderPhoto!=null && result[i].senderPhoto!=""){
                                                h+='			<img src="'+filePath+result[i].senderPhoto+'"/>'
                                            }else{
                                                h+='			<img src="../resources/img/60x60.gif"/>'
                                            }
                                            h+='		</div>'
                                            h+='	<div class="name">'+result[i].senderName+'</div>'
                                            h+='	<div class="times">'+result[i].createTime+'</div>'
                                            h+='	</div>'
                                            if(result[i].contentType == 2){
                                                h+='<div class="message-wrapper bgImgColor">'
                                                //h+='		<img onclick="showImg(this)" src='+'http://localhost:8080/static/' + result[i].content+'/>'
                                                h+='		<img onclick="showImg(this)" src='+filePath + result[i].content+'/>'
                                            }else{
                                                h+='<div class="message-wrapper">'
                                                h+='			'+result[i].content+''
                                            }
                                            h+='</div>'
                                            h+='</div>'
                                        }
                                        var beforehigh=$("#scrollBody").height();
                                        $('.body-chatt-div').prepend(h);
                                        var afterhigh=$("#scrollBody").height();
                                        $(".mui-content").scrollTop(afterhigh-beforehigh);
                                    } 
                                }
                            }
                        }
                    });
                }
            })	
            
            $('.send').click(function(){
                var textVal = $('.textareaVal').val();
                if(textVal!=''){
                    var h = '';
                    h+='<div class="message self">'
                    h+='		<div class="message-options">'
                    h+='			<div class="img">'
                    if(userPhoto!=null&&userPhoto!=""){
                        h+='				<img src="'+filePath+userPhoto+'"/>'
                    }else{
                        h+='				<img src="../resources/img/60x60.gif"/>'
                    }
                    h+='			</div>'
                    h+='			<div class="name">'+senderName+'</div>'
                    h+='			<div class="times">'+Util.DateTimeFormatter(new Date())+'</div>'
                    h+='		</div>'
                    h+='		<div class="message-wrapper">'
                    h+='			'+textVal+''
                    h+='		</div>'
                    h+='	</div>'
                    $('.body-chatt-div').append(h);
                    sendMsg(textVal,1);
                    $('.mui-content').animate({scrollTop:$('.body-chatt-div').height() },400);
                    $('.textareaVal').val('')
                }
                setTimeout(function(){
                    //这里发送一个心跳，后端收到后，返回一个心跳消息，
                    //onmessage拿到返回的心跳就说明连接正常
        //        	ws.send('{toUser: "One",userId: 123,content: {msg:"ping"}}');
                    location.reload();
                }, 1000);
            })
            $('.textareaVal').focus(function(){
                //$('.mui-content').animate({scrollTop:$('.body-chatt-div').height() },400)
            })
            
            function sendMsg(textVal,contentType){
                $.ajax({
                    type: 'post',
                    dataType: 'json',
                    url: "/api/Chat/Online/sendMsg",
                    data: {
                        receiver : receiver,
                        sender : sender,
                        senderName : senderName,
                        content : textVal,
                        contentType : contentType
                    },
                    success: function(d) {	
                        if (d.msg.flag == 0) {
                        }
                    }
                });
            }
            
            $(function() {
                // 加载列表
                init({
                    'receiver' : getUrlParam("receiver"),
                    'sender' : getUrlParam("userId"),
                });
                $("#receiverNames").html(receiverName);
            });
            
            //加载列表
            function init(param) {
                $.ajax({
                    type:'post',
                    url:'/api/Chat/Online/findChatRecordByUser',
                    data:param,
                    dataType: 'json',
                    beforeSend:function(xhr) {
                        $('.loading-text').text('正在加载中...');
                    },
                    success:function(data){
                        if (data.msg.flag = '0') {
                            var h = '';
                            if(data!=null){
                                var result = data.biz;
                                if (result.length>0) {
                                    for(var i = result.length -1; i>=0;i--){
                                        if(result[i].sender == sender){
                                            h+='<div class="message self">'
                                        }else{
                                            h+='<div class="message">'
                                        }
                                        h+='	<div class="message-options">'
                                        h+='		<div class="img">'
                                        if(result[i].senderPhoto!=null && result[i].senderPhoto!=""){
                                            h+='			<img src="'+filePath+result[i].senderPhoto+'"/>'
                                        }else{
                                            h+='			<img src="../resources/img/60x60.gif"/>'
                                        }
                                        h+='		</div>'
                                        h+='	<div class="name">'+result[i].senderName+'</div>'
                                        h+='	<div class="times">'+Util.DateTimeFormatter(result[i].createTime)+'</div>'
                                        h+='	</div>'
                                        if(result[i].contentType == 2){
                                            h+='<div class="message-wrapper bgImgColor">'
                                            //h+='		<img onclick="showImg(this)" src='+'http://localhost:8080/static/' + result[i].content+'/>'
                                            h+='		<img onclick="showImg(this)" src='+filePath + result[i].content+'/>'
                                        }else{
                                            h+='<div class="message-wrapper">'
                                            h+='			'+result[i].content+''
                                        }
                                        h+='</div>'
                                        h+='</div>'
                                    }
                                    $('.body-chatt-div').append(h);
                                    $('.mui-content').animate({scrollTop:$('.body-chatt-div').height() },400);
                                } else {
                                    $('.loading-text').text('没有更多数据').show();
                                }
                            }
                        }
                    }
                })
            }
            function showImg(_this){
                $('.scalcImg').find('img').attr("src",_this.src);
                $('.scalcImg').show();
            }
            
            mui(".mui-input-row.mui-search").on("tap", ".mui-icon-clear", function() {
                $('#list').html('');
                // 加载列表
                init({
                    'receiver' : getUrlParam("receiver"),
                    'sender' : getUrlParam("userId"),
                });
            });
            
            function fileChange(_this) {
                var file = $("#uploadImg")[0].files[0];
                
                var formData = new FormData();
                formData.append('file', file);
                
                //调用后台action方法，将form数据传递给后台处理。contentType必须设置为false,否则chrome和firefox不兼容
                $.ajax({
                    url : '/api/auth/upload/uploadFile.gx', // 上传文件的路径
                    type: 'POST',
                    dataType : "JSON",
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false, // 告诉jQuery不要去设置Content-Type请求头
                    processData: false, // 告诉jQuery不要去处理发送的数据
                    success : function (data) {
                        if (data.code == 200) {
                            var h = '';
                                h+='<div class="message self">'
                                h+='		<div class="message-options">'
                                h+='			<div class="img">'
                                if(userPhoto!=null&&userPhoto!=""){
                                    h+='				<img src="'+filePath+userPhoto+'"/>'
                                }else{
                                    h+='				<img src="../resources/img/60x60.gif"/>'
                                }
                                h+='			</div>'
                                h+='			<div class="name">'+senderName+'</div>'
                                h+='			<div class="times">'+Util.DateTimeFormatter(new Date())+'</div>'
                                h+='		</div>'
                                h+='<div class="message-wrapper bgImgColor">'
                                h+='		<img onclick="showImg(this)" src='+filePath + data.data[0].fileUrl+'/>'
                                h+='		</div>'
                                h+='	</div>'
                            $('.body-chatt-div').append(h);
                            $('.mui-content').animate({scrollTop:$('.body-chatt-div').height() },400)
                            sendMsg(data.data[0].fileUrl,2);
                        } else {
                        }
                        return "";
                    }
                });
            };
        },
    }
</script>

<style scoped>

    	.message{
    		position: relative;
    		padding: 10px;
    		overflow: hidden;
    		min-height: 100px;
    	}
    	.message.self .message-options{
    		display: inline-block;
		    width: 100%;
		    position: absolute;
		    left: 0px;
		    top: 20px;
		    text-align: right;
    	}
    	.message.self .message-options .img{
		    position: absolute;
    		right: 0;
    	}
    	.message.self .message-wrapper{
    		background-color: #665dfe;
    		color: #fff;
    		float: right;
    	}
    	.message .message-options{
    		display: inline-block;
		    width: 100%;
		    position: absolute;
		    left: 0px;
		    top: 20px;
    	}
    	.message .message-options .img{
    		width: 40px;
    		height: 40px;
    		border-radius: 50%;
    		box-shadow: 0 0 0 5px #fff;
    		float: left;
    		overflow: hidden;
    	}
    	.message .message-options .img img{
    		width: 100%;
    		height: 100%;
    	}
    	.message .message-options .name,.message .message-options .times{
    		font-size: 12px;
		    float: left;
		    width: calc(100% - 50px );
		    text-indent: 10px;
		    line-height: 18px;
		    color: #adb5bd;
    	}
    	.message .message-options .name{
    		color: #000000;
    	}
    	body,html, .mui-content{
    		width: 100%;
    		height: 100%;
    	}
    	.message .message-wrapper{
    		border-radius: 10px;
    		background-color: #f5f6fa;
    		color: #8094ae;
    		display: inline-block;
    		padding: 10px 20px;
    		word-break: break-all;
    		margin-top: 45px;
    		font-size: 14px;
    	}
    	.message-wrapper img{
    		text-align: center;
		    display: inherit;
		    max-width: 100px;
    	}
    	.body-chatt-div{
    		padding: 0 10px;
   		    position: relative;
    	}
    	 .mui-content{
    	 	padding-bottom: 44px !important;
    	 	overflow: auto;
    	 }
    	 .bottom-input{
		    position: fixed;
		    bottom: 0;
		    width: 100%;
		    height: 44px;
		    border-top: 1px solid #e5e9f2;
		    background: #ffff;
		    display: inline-flex;
		    
    	 }
    	 .bottom-input textarea{
	 	    margin: 0;
		    width: calc(100% - 100px);
		    display: inline-block;
		    height: 38px;
		    border: none;
		    font-size: 12px;
		    line-height: 1;
		    padding: 11px 0px;
		    margin-top: 4px;

    	 }
    	 .bottom-input .send{
    	 	width: 42px;
		    text-align: center;
		    line-height: 42px;
		    border-radius: 50%;
		    background: #665dfe;
		    height: 42px;
		    color: white;
		    font-size: 12px;
    	 }
    	 .bottom-option{
    	 	width: 50px;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    position: relative;
    	 	
    	 }
    	  .bottom-option input{
    	  	    position: absolute;
			    width: 100%;
			    height: 100%;
			    opacity: 0;
			    top:0;
			    left:0;
    	  }
    	 .history{
    	 	display:none;
   	 	    position: absolute;
    		padding: 1px 4px;
		    border-radius: 10px;
		    font-size: 12px;
		    transform: translateX(-50%);
		    left: 50%;
		    top:2px
    	 }
    	 .scalcImg{
   	 	    position: absolute;
		    left: 50%;
		    top: 50%;
		    transform: translate(-50%,-50%);
		    max-width: 100%;
		    width: 100%;
		    background: rgb(0 0 0 / 0.4);
		    height: 100%;
		    display:none;
    	 }
    	  .scalcImg img{
    	  	max-width: 100%;
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%,-50%);
		    background-color: white;
    	  }
    	  .bgImgColor{
    	  	background-color:transparent !important;
    	  }
</style>