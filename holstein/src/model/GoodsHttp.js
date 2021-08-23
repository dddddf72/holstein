import Http from './Http'
class GoodsHttp extends Http{
    
    static getPriceRange({min,max}){
        return this.request({
            url:"/api/goods",//api/goods?min=0&max=10
            params:{min,max}
        })
    }
    static sortPrice(price){
        return this.request({
            url:"/api/sort",//api/sort?price=1
            params:{price}
        })
    }
    static wnBannerManage(){
        return this.request({
            url:"/api/wnBannerManage",
        })
    }
    static serviceProCategory(){
        return this.request({
            url:"/api/serviceProduct/category",
            // method:"get"
        })
    }
    //能力类目
    static getTop(){
        return this.request({
            url:"/api/serviceProduct/getTopCategorys",
            // method:"get"
        })
    }
    
    static serviceProMenu(){
        return this.request({
            url:"/api/wnQdMenu",
            // method:"get"
        })
    }

  
    //商品服务page
    static serviceProCatePage({page,userId}){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                page,userId
            }
            // method:"get"
        })
    }
    static serviceProCate(page,size,categoryId,userId){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                page,size,categoryId,userId
            }
            // method:"get"
        })
    }
    static serviceProFilter(filterData){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                filterData
            }
            // method:"get"
        })
    }
    static serviceFilterFirst(filterfirst){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                filterfirst
            }
            // method:"get"
        })
    }
    //用户中心 我的收藏
    static myCollect(browse_time,userid,page,size){
        return this.request({
            url:"/api/myCollect/wnUserCollect",
            method:"post",
            params:{
                browse_time,userid,page,size
            }
        })
    }
    
     //商品收藏
     //http://192.168.2.25:8000/api/serviceProduct/collect?userId=1
    static serviceCollect(id,serviceName,categoryId,userId,page,size){
        return this.request({
            url:"/api/serviceProduct/collect",
            // method:"get",
            params:{
                id,serviceName,categoryId,userId,page,size
            }
        })
    }

    static CollectservicePro(){
        return this.request({
            url:"/api/serviceProduct/collect",
            method:"post",
        })
    }
    //收藏服务
    static setCollect({serviceId,collectId}){
        return this.request({
            url:"/api/serviceProduct/collect",
            method:"post",
            data:{
                serviceId,collectId//collectId为userId
            }
        })
    }
    //取消收藏服务
    static unCollect({id,userId}){
        return this.request({
            url:"/api/serviceProduct/collect/cancel",//服务id
            method:"post",
            params:{
                id,userId
            }
        })
    }
    //还查看了服务
    static alsoviewPage(serviceId){
        return this.request({
            url:"/api/serviceProduct/viewOther",//服务id
            params:{
                serviceId//数据在biz里
            }
        })
    }
    //推荐服务
    static recommendPage(serviceId){
        return this.request({
            url:"/api/serviceProduct/recommended",//服务id
            params:{
                serviceId
            }
        })
    }
    //热门服务
    static hotservicePro(){
        return this.request({
            url:"/api/serviceProduct/hotServiceProduct",
        })
    }
    //点击下单
    static dopayPage({level,serviceId}){
        return this.request({
            url:"/api/selectCombo",//服务id
            method:"post",
            params:{
                level,serviceId
            }
        })
    }
    //用户中心
    //我的订单列表
    static myorderlist(orderNo,username,serviceName,payType,status,orderType,userId,page,size){
        return this.request({
            url:"/api/snail/order",
            // method:"get",
            params:{
                orderNo,username,serviceName,payType,status,orderType,userId,page,size
            }
        })
    }
    //未提现
    static Withdrawal(orderNo,username,serviceName,payType,isWithdrawal,orderType,userId,page,size){
        return this.request({
            url:"/api/snail/order",
            // method:"get",
            params:{
                orderNo,username,serviceName,payType,isWithdrawal,orderType,userId,page,size
            }
        })
    }
    //用户中心
    //我的评价  查看评价
    static myEvaluate(orderNo,userId,page,size){
        return this.request({
            url:"/api/serviceEvaluate/list",
            method:"post",
            params:{
                orderNo,userId,page,size
            }
        })
    }
    //我的评价  查看追评评价
    static myEtracevaluate(orderNo,userId,page,size){
        return this.request({
            url:"/api/serviceEvaluate/traceablelList",
            method:"post",
            params:{
                orderNo,userId,page,size
            }
        })
    }
    //我的评价  进行评价
    //evaluateId userId
    static myserviceEvaluate(goodScore,serviceScore,evaluateDes,serviceId,order_no,evaluateId,page,size,type){
        return this.request({
            url:"/api/serviceEvaluate/comment",
            method:"post",
            params:{
                goodScore,serviceScore,evaluateDes,serviceId,order_no,evaluateId,page,size,type
            }
        })
    }


    //浏览记录userId，serviceId//记录
    static postvisited({serviceId,browseId}){
        return this.request({
            url:"/api/serviceProduct/browse",//服务id
            method:"post",
            data:{
                serviceId,browseId//类似于userId
            }
        })
    }

     //商品浏览记录 商家中心的
     //http://192.168.2.25:8000/api/serviceProduct/browse?userId=1
    static serviceBrowse(id,serviceName,categoryId,userId,page,size){
        return this.request({
            url:"/api/serviceProduct/browse",
            // method:"get",
            params:{
                id,serviceName,categoryId,userId,page,size
            }
        })
    }
     //显示用户浏览记录
     //http://192.168.2.25:8000/api/serviceProduct/browse?userId=1
    static userserviceBrowse(userId){
        return this.request({
            url:"/api/serviceProduct/browse",
            // method:"get",
            params:{
                userId
            }
        })
    }
     //清除浏览记录
     //http://192.168.2.25:8000/api/serviceProduct/browse?userId=1
    static delBrowse(userId){
        return this.request({
            url:"/api/serviceProduct/browse/clean",
            method:"post",
            params:{
                userId
            }
        })
    }

    //商品管理
    //http://192.168.2.25:8000/api/serviceProduct
    static serviceProduct(id,serviceName,categoryId,userId,isPutaway,page,size){
        return this.request({
            url:"/api/serviceProduct/list",
            // method:"get",
            params:{
                id,serviceName,categoryId,userId,isPutaway,page,size
            }
        })
    }
    // static serviceProductlist(page,size,isPutaway){
    //     return this.request({
    //         url:"/api/serviceProduct/list",
    //         // method:"get",
    //         params:{
    //             page,size,isPutaway
    //         }
    //     })
    // }

     //判断商品是否存在于进行中的订单   
    static judgeIsPutaway(id){
        return this.request({
            url:"/api/serviceProduct/"+id,
            method:"post"
        })
    }
     //商品上架下架     暂未实现
    static ProPutaway(id){
        return this.request({
            url:"/api/serviceProduct/putaway",
            method:"post"
        })
    }

    //商家首页
    static homePageData(userId){
        return this.request({
            url:"/api/homePageData",
            // method:"get",
            params:{
                userId
            }
        })
    }
    //商家订单列表
    static orderlist(orderNo,username,serviceName,payType,status,merchantId,page,size){
        return this.request({
            url:"/api/snail/order",
            // method:"get",
            params:{
                orderNo,username,serviceName,payType,status,merchantId,page,size
            }
        })
    }
    //商家订单列表接单按钮
    static businessOrder(orderNo,userId){
        return this.request({
            url:"/api/businessOrder/"+orderNo,
            // method:"get",
            params:{
                userId
            }
        })
    }
    //竞标管理//查询竞标列表
    static demandBid(orderNo,categoryId,minAmount,maxAmount,userId,isMy,page,size){
        return this.request({
            url:"/api/snailDemand",
            // method:"get",
            params:{
                orderNo,categoryId,minAmount,maxAmount,userId,isMy,page,size
            }
        })
    }
    //参与竞标  暂未实现
    // {
    //     "bidder": 0,userId
    //     "createTime": "2021-07-06T11:18:26.767Z",
    //     "demandId": 0,订单Id
    //     "id": 0,
    //     "merchantDesc": "string"
    //   }
    static demandBidParti(demandId,bidder,merchantDesc,merchantBudget){
        return this.request({
            url:"/api/bid",
            method:"post",
            data:{
                demandId,bidder,merchantDesc,merchantBudget
            }
        })
    }

    //评论管理
    static serviceEvaluate(userId,page,size){
        return this.request({
            url:"/api/serviceEvaluate",
            // method:"get",
            params:{
                userId,page,size
            }
        })
    }

    //上下架
    static onsale(id,isPutaway){
        return this.request({
            url:"/api/serviceProduct/putaway",
            method:"post",
            params:{
                id,isPutaway
            }
        })
    }

     //删除商品
    static productDel(id){
        return this.request({
            url:"/api/serviceProduct/"+id,
            method:"delete"
        })
    }
     //编辑商品     暂未实现
    static productEdit(id){
        return this.request({
            url:"/api/serviceProduct/update",
            method:"post"
        })
    }
    
     //新增商品     暂未实现
        
//   "addServiceIds": [
//     0
//   ],
//   "addtoServices": [
//     {
//       "deliveryTime": "string",
//       "desc": "string",
//       "price": 0,
//       "title": "string"
//     }
//   ],
//   "askforIds": [
//     0
//   ],
//   "askfors": [
//     "string"
//   ],
//   "categoryId": 0,
//   "createUser": 0,
//   "customIds": [
//     0
//   ],
//   "expressDeliveries": [
//     {
//       "deliveryTime": "string",
//       "level": 0,
//       "price": 0
//     }
//   ],
//   "expressDeliveryIds": [
//     0
//   ],
//   "faq": [
//     {
//       "answer": "string",
//       "question": "string"
//     }
//   ],
//   "faqIds": [
//     0
//   ],
//   "fileIds": [
//     0
//   ],
//   "files": [
//     {
//       "fileType": 0, //1、图片；2、音频；3、视频；4、文档'
//       "fileUrl": "string"
//     }
//   ],
//   "isPutaway": 0,
//   "orderQuantity": 0,
//   "pricesCustoms": [
//     {
//       "canUpdateTime": "string",
//       "deliveryTime": "string",
//       "desc": "string",
//       "level": 0,
//       "name": "string",
//       "parameters": [
//         {
//           "isHave": 0,
//           "isText": 0,
//           "textValue": "string",
//           "title": "string"
//         }
//       ],
//       "price": 0,
//       "quantity": 0
//     }
//   ],
//   "serviceDesc": "string",
//   "serviceName": "string",
//   "serviceSort": 0,
//   "serviceStock": 0,
//   "uid": 0

    static productAdd(id){
        return this.request({
            url:"/api/serviceProduct/add",
            method:"post"
        })
    }


    //删除评论
    static evaluateDel(id){
        return this.request({
            url:"/api/serviceEvaluate/"+id,
            method:"delete"
        })
    }
    //回复评论  暂未实现
    // {
    //     "evaluateId": 0,
    //     "fileJson": "string",
    //     "replyDes": "string",
    //     "userId": 0
    //   }
    static evaluateReply(id,evaluateId,fileJson,replyDes){
        return this.request({
            url:"/api/replyEvaluate/add"+id,
            method:"post",
            method:{
                id,evaluateId,fileJson,replyDes
            }
        })
    }

    //发布需求  暂未实现
//   "amount": 0,//必传
//   "cateId": 0,//必传
//   "demandDesc": "string",
//   "demandFile": "string",
//   "publisher": 0,//userId
//   "status": 0,//写死
// }
    static publish(){
        return this.request({
            url:"/api/snailDemand/publish",
            method:"post"
        })
    }

    //服务点赞管理  暂未实现
    // {
    //     "createTime": "2021-07-06T11:25:27.331Z",
    //     "praiseId": {
    //       "debugEnabled": true,
    //       "errorEnabled": true,
    //       "infoEnabled": true,
    //       "name": "string",
    //       "traceEnabled": true,
    //       "warnEnabled": true
    //     },
    //     "serviceId": 0,
    //     "uid": 0
    //   }
    static publish(){
        return this.request({
            url:"/api/servicePraise/add",
            method:"post"
        })
    }

    //取消点赞
    static publish(){
        return this.request({
            url:"/api/servicePraise/unPraise",
            method:"delete"
        })
    }
    //资金托管
    // this.$http.post('/api/zfb/trusteeship',{
    //     "userId":15,
    //     "serviceId":1,
    //     "amount":0.01
    // }).then
    static fundtrusteeship(){
        return this.request({
            url:"/api/zfb/trusteeship",
            method:"post"
        })
    }
    static fundtrusteeshipwx(){
        return this.request({
            url:"/api/wx/trusteeship",
            method:"post"
        })
    }
    //商品详情
    static serveDetail(serviceId){
        return this.request({
            url:"/api/serviceProduct/detail",
            params:{serviceId}
        })
    }
    //商品查看评论详情
    // static serviceEvaluateview(serviceId){
    //     return this.request({
    //         url:"/api/serviceEvaluate/"+serviceId,
    //         params:{serviceId}
    //     })
    // }
    //商品详情评论点赞
    static serviceEvapra(evaluateId,praiseId){
        return this.request({
            url:"/api/serviceProduct/praiseDiscuss",
            method:"post",
            data:{
                evaluateId,praiseId
            }
        })
    }
    //评论取消点赞
    static serviceEvacanpra(evaluateId,userId){
        return this.request({
            url:"/api/serviceProduct/praiseDiscuss/cancel",
            method:"post",
            params:{evaluateId,userId}
        })
    }
    //商品详情评论踩
    static serviceEvatread(evaluateId,treadId){
        return this.request({
            url:"/api/serviceProduct/treadDiscuss",
            method:"post",
            data:{evaluateId,treadId}
        })
    }
    //评论取消踩
    static serviceEvacantread(evaluateId,userId){
        return this.request({
            url:"/api/serviceProduct/treadDiscuss/cancel",
            method:"post",
            params:{
                evaluateId,userId
            }
        })
    }
    //消息列表
    static messageList(userId,page,size){
        return this.request({
            url:"/api/message/get/"+userId,
            // method:"get"
            params:{page,size}
        })
    }
    //未读消息数字
    static findNoRead(userId){
        return this.request({
            url:"/api/findNoRead",
            // method:"get"
            params:{userId}
        })
    }
    //设置消息已读
    static setRead(userId){
        return this.request({
            url:"/api/setRead",
            method:"post",
            params:{userId}
        })
    }
    //订单详情审核通过
    static setpass(orderId,isPass){
        return this.request({
            url:"/api/acceptance",
            method:"post",
            params:{
                orderId,isPass
            }
        })
    }
    //商家订单列表确认退款
    static confirmRefu(orderId){
        return this.request({
            url:"/api/confirmRefund/"+orderId,
            method:"post",
            params:{
                orderId
            }
        })
    }

    

}
export default GoodsHttp;