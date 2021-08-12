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
        // http://192.168.0.101:8000/api/snailUser/login
        // {
        //     "username": "15914166705",
        //     "password": "123",
        //     "code": "ffff"
        // }
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
                mobile,msgType:2//1注册 2找回密码 3登录
            }
        })
    }
    //2-2窝牛短信登录授权       data
    static loginMsg(){
        //http://192.168.0.101:8000/api/snailUser/msg/login
        // {
        //     "username": "17727957483",15826750624
        //     "code": "U8Q2"
        // }
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
        //          msgType//注册 2找回密码 3登录
        //http://192.168.0.101:8000/api/register?username=15914166705
        // {
        //     "username": "17821146273",
        //     "password": "123",
        //     "userType": 1        //用户，聘用人才
        //      "code":"49N5"
        // }
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
        //          msgType//注册 2找回密码 3登录
        //http://192.168.0.101:8000/api/register?username=15914166705
        // {
            // "bailAmount": 0,         //保证金
            // "code": "string",        //验证码
            
            // "headPhoto": "string",   //头像
            // "idCard": "string",      //身份证号
            // "intro": "string",       //个人简介
            // "name": "string",        //名称,用户名
            // "openId": "string",      //微信id
            // "password": "string",    //密码

            // "sfzFront": "string",
            // "sfzReverse": "string",

            // "userId": 0,             //用户id

            // "userSkillParams": [
            //     {
            //     "id": 0,             //可不传
            //     "skill": "string",   //技能名称
            //     "skillLevel": 0      //技能等级:1、初级2、中级3、高级
            //     }
            // ],

            // "userType": 0,   //1、聘用人才2、成为自由从业者
            // "username": "string",
            // "zfbId": "string"
        // }
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
        //http://192.168.0.101:8000/api/snailUser/updatePass
        // {
        //     "username":"15914166705",
        //     "oldPass":"123",
        //     "newPass":"456"
        // }
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
        //http://192.168.0.101:8000/api/user/center/updateUserInfo
        // {
        //     "username":"13667439923",
        //     "oldPass":"123",
        //     "newPass":"456",
        //  avatar_id: ,
        //  username: ,
        //  password: ,
        //  name: ,
        //  phone: ,
        //  open_id: ,
        //  zfb_id:,
        //  intro:
        // }
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
        //http://192.168.0.101:8000/api/snailUser/forgetPass
        // {
        //     "username":"15914166705",
        //     "newPass":"456",
        //     "confirmPass":"456"
        // }
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
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":"15914166705",
        // }
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
        //http://192.168.2.25:8000/api/weixin/bind?mobile=15914166705&msgCode=t66t
        // {
        //     "mobile":"13667439923",
        //      "msgCode":""
        // }
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
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":"15914166705",
        // }
        return this.request({
            url:"/api/zfb/bind",
            methods:"post"
        })
    }
    //绑定邮箱
    static mailBind(){
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":"15914166705",
        //     "userId":"456",
        //     "code":"456"
        // }
        return this.request({
            url:"api/boundEmail",
            method:"post"
        })
    }
    //发送邮件
    static mailSend(){
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":"15914166705",
        //     "fromEmail ":"456",
        // }
        return this.request({
            url:"api/sendEmail",
            method:"post"
        })
    }
    //修改手机号
    static updateMobile(){
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":""17727957483"",
        //     "userId":"15",
        //     "code":""17727957483""
        // }
        return this.request({
            url:"/api/updateMobile",
            method:"post"
        })
    }
    //上传头像
    static uploadPic(formData){
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":""17727957483"",
        //     "userId":"15",
        //     "code":""17727957483""
        // }
        return UserHttp.request({
            url:"/api/uploadImage",
            method:"post",
            data:formData,
            // dataType: 'json'
        })
    }
    //上传文件
    static uploadDoc(formData){
        //http://192.168.0.101:8000/api/updateMobile//暂未实现
        // {
        //     "username":""17727957483"",
        //     "userId":"15",
        //     "code":""17727957483""
        // }
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
    static getorderDetail(serviceId ){
        return this.request({
            url:"/api/orderPageInfo",
            method:"get",
            params:{
                serviceId
            }
        })
    }
}
export default UserHttp;