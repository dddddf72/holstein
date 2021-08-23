<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginInfo:{}
      }
    },
    mounted() {
      if(this.getUrlParam("userId")){
              this.$http.post('/api/snailUser/info',{
                      userId:this.getUrlParam("userId")
              }).then((res)=>{
                  debugger
                  var message = res.data.msg.message;
                  this.loginInfo=res.data.biz
                  if(message=="成功"){
                      // console.log(this.loginInfo)
                      this.loginInfo=res.data.biz;
                      this.$cookie.set("loginInfo",JSON.stringify(res.data.biz))
                      // console.log(JSON.parse(this.$cookie.get("loginInfo")))
                      this.$router.push('/');
                  }
              })
          }
    },
  }
</script>

<style scoped>

</style>