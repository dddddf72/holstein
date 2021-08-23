exports.install = function (Vue) {
    Vue.prototype.getBaseImgUrl = function (productImgUrl){//全局函数1
        // var url = 'http://192.168.2.25:8000'+productImgUrl
        // var url = 'http://api.woniuskill.com'+productImgUrl
        var url = 'http://api.woniuskill.com'+productImgUrl
        // console.log(url)
        return url
    };
    
    Vue.prototype.getUrlParam = function (name){//全局函数1
        // 获取url参数
        var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return decodeURI(r[2]); return null;
    };

    Vue.prototype.delCookie= function (userInfo){
        var b = new Date(0).toGMTString();
        document.cookie = userInfo + "=;expires=" + b + ";path=/";
    };
    Vue.prototype.HTMLEncode= function (str){
        // var temp = document.createElement("div");
        // (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        // var output = temp.innerHTML;
        // temp = null;

        // var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
        // return output.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){
        //     return arrEntities[t];
        // }); 

        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
            str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
            //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
            str=str.replace(/ /ig,'');//去掉 
            return str;
        
    };
    Vue.prototype.createWebSocket= function (userId){
         // 与websocket服务器创建连接
            // 注意这里的端口号是后端服务的端口号，后面的是后端正常请求的路径，ziyuan是我的项目名，最后面的是我放在cookie中的当前登陆用户
             let websocket = new WebSocket('ws://api.woniuskill.com/webSocket?type=APP&userId='+userId)
            //  let websocket = new WebSocket('ws://yshopapi.inroyltd.com/webSocket?type=APP&userId='+userId)
            //  let websocket = new WebSocket('ws://192.168.2.25:8000/webSocket?type=APP&userId='+userId)
            // 连接成功时
            websocket.onopen = () => {
                // websocket.send('hello')
                console.log('连接了')
            }
            websocket.onmessage = event => {
                // 后端发送的消息在event.data中
                var obj = JSON.parse(event.data);
                console.log(obj.userId);
                if(obj.type=='message'){
                    if(obj.userId=userId){
                        // alert(obj.msg);
                        this.$notify.info({
                            title: '消息',
                            message: obj.msg
                        });
                    }
                }
            }
            websocket.onclose = function () {
                console.log('关闭了')
            }
            // 路由跳转时结束websocket链接
            this.$router.afterEach(function () {
                websocket.close()
            })
            // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常
            window.onbeforeunload = function () {
                websocket.close()
            }
    };
};