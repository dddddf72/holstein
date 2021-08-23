import Vue from 'vue'
import qrcode from 'vue-qrcode-directive'
Vue.use(qrcode)
let handlenum = num => {
      var data = num.toFixed(2) ;
    return data
  }
let telHide = num => {
    if(num == null){
      var data = num;
    }else if(num){
      var data = num.replace(/(\d{4})\d{3}(\d*)/, "$1***$2")
    }
    return data
  }
  let nameHide = name => {
    if (name.length === 2) {
      return new Array(name.length).join("*") + name.substr(-1);
    } else {
      return (
        name.substr(0, 1) + new Array(name.length - 1).join("*") + name.substr(-1)
      );
    }
  };
  let merchantBudgetZero = name => {
    if (name == null || name == '') {
      var data= 0
    } else if(name){
      var data = name
    }
    return data
  };
  let lengthHide = name => {
    if (name.length>8) {
      var name= name.slice(0,14)+'...'
    } else if(name){
      var name = name
    }
    return name
  };
  let HTMLEncode = str=>{
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
  }
  
  export default {
    handlenum,telHide,nameHide,merchantBudgetZero,HTMLEncode,lengthHide
  };