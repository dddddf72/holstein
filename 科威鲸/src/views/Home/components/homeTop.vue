<template>
  <div class="top">
    <div class="container">
      <!-- <img class="logo" src="@/assets/images/logo.svg" alt /> -->
      <div>
        <span>{{name}}</span>

        <router-link to="/login" v-show="!name">
            <el-button @click="dialogFormVisible">登陆</el-button>
        </router-link>
        <el-button @click="handleLogout">退出</el-button>
        <router-link to="/cart">
          <el-button type="danger" icon="el-icon-shopping-cart-full">购物车</el-button>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
/* 
<el-dialog title="登陆界面" :visible.sync="dialogFormVisible">
      <el-form :model="form" status-icon :rules="rules">
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleLogin">确 定</el-button>
      </div>
    </el-dialog>
*/
// import UserHttp from '@/models/UserHttp.js'
import UserHttp from '../../../model/UserHttp'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",


      name: this.$cookie.get("name")
    };
  },
  mounted(){
    
    var res =this.$cookie.get("name")
    console.log(res)
  },
  methods: {
    /* handleLogin() {
      if (this.form.username && this.form.pass) {
        this.$http({
          url: "/users/login",
          method: "post",
          data: {
            userName: this.form.username,
            userPwd: this.form.pass
          }
        }).then(res => {
          if (res.data.code == 200) {
            this.$message({
              message: res.data.msg,
              duration: 1000,
              type: "success"
            });
            this.successName = res.data.result;
            this.dialogFormVisible = false;
          } else {
            this.$message({
              duration: 1000,
              message: res.data.msg,
              type: "error"
            });
          }
        });
      } else {
        this.$message({
          message: "用户名和密码不能为空",
          duration: 1000,
          type: "error"
        });
      }
    }, */
    async handleLogout() {
      var res = await UserHttp.logout();
      console.log(res.data);
      var {msg} = res.data
      this.$message({
        message:msg
      })
      this.name = ""
    }
  },
};
</script>

<style scoped>
.top {
  background: #fff;
}
.logo {
  width: 50px;
}
.container {
  margin: 0 auto;
  width: 1100px;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
}
.cart {
  font-size: 25px;
  color: #c20c0c;
  margin-left: 20px;
}
</style>