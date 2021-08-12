import Http from './Http'
class GoodsHttp extends Http{
    //获取首页的数据，分页
    static getPagination(offset=0){
        return this.request({
            url:"/api/goods",//api/goods?limit=8&offset=0
            params:{
                offset
            }
        })
    }
    //获取价格区间0-100
    static getPriceRange({min,max}){
        return this.request({
            url:"/api/goods",//api/goods?min=0&max=10
            params:{min,max}
        })
    }
    //价格升降序
    static sortPrice(price){
        return this.request({
            url:"/api/sort",//api/sort?price=1
            params:{price}
        })
    }
    //查询商品分类  商品类目
    static serviceProCategory(price){
        return this.request({
            url:"/api/serviceProduct/category",
            // method:"get"
        })
    }
    //查询商品服务
    static servProCategoryId(categoryId){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                categoryId
            }
        })
    }
    //商品服务page
    static serviceProCatePage({page=0,userId}){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                page,userId
            }
            // method:"get"
        })
    }
    static serviceProCatePage0({page=0}){
        return this.request({
            url:"/api/serviceProduct",
            params:{
                page
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

     //商品收藏
     //http://192.168.2.25:8000/api/serviceProduct/collect?userId=1
    static serviceCollect(id,serviceName,userId){
        return this.request({
            url:"/api/serviceProduct/collect",
            method:"get",
            params:{
                id,serviceName,userId
            }
        })
    }
     //收藏商品
    //  {
    //     "collectId": 0,
    //     "createTime": "2021-07-06T11:34:23.554Z",
    //     "id": 0,
    //     "serviceId": 0
    //   }
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

     //商品浏览
     //http://192.168.2.25:8000/api/serviceProduct/browse?userId=1
    static serviceBrowse(id,serviceName,userId){
        return this.request({
            url:"/api/serviceProduct/browse",
            method:"get",
            params:{
                id,serviceName,userId
            }
        })
    }

    //商品管理
    //http://192.168.2.25:8000/api/serviceProduct
    static serviceProduct(id,serviceName,createUser){
        return this.request({
            url:"/api/serviceProduct",
            method:"get",
            params:{
                id,serviceName,createUser
            }
        })
    }

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

    //竞标管理//查询竞标列表
    static demandBid(orderNo){
        return this.request({
            url:"/api/snailDemand",
            method:"get",
            params:{
                orderNo
            }
        })
    }
    //参与竞标  暂未实现
    // {
    //     "bidder": 0,
    //     "createTime": "2021-07-06T11:18:26.767Z",
    //     "demandId": 0,
    //     "id": 0,
    //     "merchantDesc": "string"
    //   }
    static demandBidParti(orderNo){
        return this.request({
            url:"/api/snailDemand/bid",
            method:"post",
            
        })
    }

    //评论管理
    static serviceEvaluate(userId){
        return this.request({
            url:"/api/serviceEvaluate",
            method:"get",
            params:{
                userId
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
    static productDel(id){
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
    static evaluateReply(id){
        return this.request({
            url:"/api/replyEvaluate/add/"+id,
            method:"post"
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
    static serveDetail(id){
        return this.request({
            url:"/api/serviceProduct",
            params:{id}
        })
    }

}
export default GoodsHttp;