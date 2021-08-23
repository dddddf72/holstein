import Http from './Http';     
class UserHttp extends Http{
    //商家审核
    static audit(auditStatus,userId){
        //http://192.168.0.101:8000/api/audit?auditStatus=1&userId=9
        return this.request({
            url:"/api/audit",
            method:"post",
            params:{
                auditStatus,userId
            }
        })
    }
    //  1-1.获取验证码
    static code(){
        //http://192.168.0.101:8000/api/code   "biz": "QQzV"
        return this.request({
            url:"/api/code",
            method:"get",
        })
    }
    //系统授权接口 退出登录
    static logout(){
        //http://192.168.0.101:8000/api/logout
        return this.request({
            url:"/api/logout",
            method:"delete",
        })
    }
    //1-2.窝牛登录授权      data
    static login(){
        
        return this.request({
            url:"/api/snailUser/login",
            method:"post",
            // data:{
            //     authUser
            // }
        })
    }
    //2-1获取短信验证码登录
    static msgCodeLogin(mobile){
        //http://192.168.0.101:8000/api/msgCode?mobile=15914166705&msgType=3    1B38
        return this.request({
            url:"/api/msgCode",
            // method:"get",
            params:{
                mobile,msgType:3//1注册 2找回密码 3登录
            }
        })
    }
    //忘记密码
    static msgCodeForgot(mobile){
        //http://192.168.0.101:8000/api/msgCode?mobile=15914166705&msgType=3    1B38
        return this.request({
            url:"/api/msgCode",
            // method:"get",
            params:{
                mobile,msgType:5//1注册 2找回密码 3登录
            }
        })
    }
    //2-2窝牛短信登录授权       data
    static loginMsg(){
        
        return this.request({
            url:"/api/snailUser/msg/login",
            method:"post",
            // data:{
            //     authUser
            // }
        })
    }
    //2-3获取短信验证码注册
    static msgCodeRegist(mobile,msgType=1){
        //http://192.168.0.101:8000/api/msgCode?mobile=15914166705&msgType=1    1B38
        return this.request({
            url:"/api/msgCode",
            // method:"get",
            params:{
                mobile,msgType//1注册 2找回密码 3登录
            }
        })
    }
    //窝牛用户注册
    static register({resources}){
       
        return this.request({
            url:"/api/register",
            method:"post",
            data:{
                resources
            }
        })
    }
    //窝牛商家注册
    static userOrderregister({resources}){
        
        return this.request({
            url:"/api/register",
            method:"post",
            data:{
                resources
            }
        })
    }
    //获取窝牛用户信息
    static snailUserInfo(userId ){
        //http://192.168.0.101:8000/api/snailUser/info?userId=9
        return this.request({
            url:"/api/snailUser/info",
            method:"get",
            params:{
                userId
            }
        })
    }
    //修改密码
    static updatePass(passVo){
        
        return this.request({
            url:"/api/snailUser/updatePass",
            method:"post",
            data:{
                passVo
            }
        })
    }
    //修改个人信息
    static updateUserInfo(modifyVo){
        
        return this.request({
            url:"/api/user/center/updateUserInfo",
            method:"post",
            data:{
                modifyVo
            }
        })
    }
    //3-1忘记密码 验证短信验证码
    static verify(mobile,msgCode){
        //http://192.168.0.101:8000/api/msgCode/verify?mobile=15914166705&msgCode=4828
        return this.request({
            url:"/api/msgCode/verify",
            // method:"get",
            params:{
                mobile,msgCode
            }
        })
    }
    //3-2忘记密码       data
    static forgetPass(username,newPass,confirmPass){
        
        return this.request({
            url:"/api/snailUser/forgetPass",
            method:"post",
            data:{
                username,newPass,confirmPass
            }
        })
    }
    
    //支付宝扫码登录
    static getzfbQRCodeUrl(){
        
        return this.request({
            url:"/api/zfb/getQRCodeUrl",
            methods:"post"
        })
    }
    //微信扫码登录
    static wechatScan(){
        return this.request({
            url:"/api/getQRCodeUrl",
            methods:"post"
        })
    }
    //绑定微信
    static wechatBind(mobile,msgCode){
        
        return this.request({
            url:"/api/weixin/bind",
            // methods:"post",
            data:{
                mobile,msgCode
            }
        })
    }
    //绑定支付宝
    static zfbScan(){
        
        return this.request({
            url:"/api/zfb/bind",
            methods:"post"
        })
    }
    //绑定邮箱发送验证码
    static mailbd(fromEmail){
        
        return this.request({
            url:"api/sendEmail",
            method:"post",
            params:{fromEmail}
        })
    }
    //绑定邮箱
    static mailBind(){
        
        return this.request({
            url:"api/boundEmail",
            method:"post",
            data:{}
        })
    }
    //发送邮件
    static mailSend(){
        
        return this.request({
            url:"api/sendEmail",
            method:"post"
        })
    }
    //修改手机号
    static updateMobile(){
        
        return this.request({
            url:"/api/updateMobile",
            method:"post"
        })
    }
    //上传头像
    static uploadPic(formData){
        
        return UserHttp.request({
            url:"/api/uploadImage",
            method:"post",
            data:formData,
            // dataType: 'json'
        })
    }
    //上传文件
    static uploadDoc(formData){
        return UserHttp.request({
            url:"/api/uploadFile",
            method:"post",
            data:formData,
            // dataType: 'json'
        })
    }
    //上传
    //实名认证提交认证
    static submitcertific(formData){
        return this.request({
            url:"/api/upload",
            method:"post",
            data:{
                userId,sfzFront,sfzReverse,idCard
            }
        })
    }
}
export default UserHttp;