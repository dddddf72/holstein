exports.install = function (Vue) {
    Vue.prototype.getBaseImgUrl = function (productImgUrl){//全局函数1
        // var url = 'http://192.168.2.25:8000'+productImgUrl
        var url = 'http://yshopapi.inroyltd.com'+productImgUrl
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
};