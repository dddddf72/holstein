<template>
  <div class="app-container" style="position: relative; height: calc(100vh - 117px);">
    <div class="container">

      <el-tabs v-model="status" type="card" @tab-click="handleOrder">
        <el-tab-pane name="-9">
          <span slot="label"><i class="el-icon-s-order"></i> 全部</span>
        </el-tab-pane>
        <el-tab-pane name="0">
          <span slot="label"><i class="el-icon-bank-card"></i>未审核</span>
        </el-tab-pane>
        <el-tab-pane name="1">
          <span slot="label"><i class="el-icon-refrigerator"></i>已审核</span>
        </el-tab-pane>
      </el-tabs>
      <!--工具栏-->
      <div class="head-container">

        <!-- 搜索 -->
        <el-input v-model="query.username" clearable placeholder="输入用户名" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery" />
        <el-input v-model="query.phone" clearable placeholder="输入手机号" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery" />
        <el-select v-model="query.user_type" clearable placeholder="用户类型" class="filter-item" style="width: 130px">
          <el-option v-for="item in userTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-select v-model="audit_status" clearable placeholder="审核状态" class="filter-item" style="width: 130px">
          <el-option
            v-for="item in auditStatusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-model="create_time"
          :default-time="['00:00:00','23:59:59']"
          type="daterange"
          range-separator=":"
          size="small"
          class="date-item"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
        <!-- 新增 -->
        <el-button
          type="danger"
          class="filter-item"
          size="mini"
          icon="el-icon-refresh"
          @click="toQuery"
        >刷新</el-button>
      </div>


      <!--表格渲染-->
      <el-table ref="multipleTable" v-loading="loading" :data="data" size="small" style="width: 100%;" @selection-change="handleSelectionChange">
        <el-table-column :selectable="checkboxT" type="selection" width="50" />
        <el-table-column prop="username" label="用户名" >
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" >
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="idCard" label="身份证号" >
          <template slot-scope="scope">
            <span>{{ scope.row.idCard }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="auditStatus" label="审核状态" >
          <template slot-scope="scope">
            <span>{{ scope.row.auditStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remarks" label="审核意见" >
          <template slot-scope="scope">
            <span>{{ scope.row.remarks }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="intro" label="个人简介" >
          <template slot-scope="scope">
            <span>{{ scope.row.intro }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="操作" width="200" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="authUser(scope.row)"
            >
             审核</el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--添加订单打印及订单导出功能 2020.04.13 changxh-->
    <el-footer class="footer-contains">
      <!--分页组件-->
      <el-pagination
        :total="total"
        :current-page="page + 1"
        style="margin-top: 8px;"
        layout="total, prev, pager, next, sizes"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </el-footer>

   <!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <el-drawer
      title="实名认证审核 !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content" style="margin-left: 50px;">
        <el-form :model="form">
          <el-form-item label="姓名" >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" >
            <el-input v-model="form.sex" ></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" >
            <el-input v-model="form.number" ></el-input>
          </el-form-item>
          <el-form-item label="审核意见" >
            <el-select v-model="form.audit_status"   placeholder="请选择审核意见">
              <el-option label="审核通过" value="0"></el-option>
              <el-option label="审核不通过" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="拒绝原因" >
            <el-input v-model="form.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>

   <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->


  </div>
</template>

<script>
  import checkPermission from '@/utils/permission'
  import initData from '@/mixins/crud'
  import {formatTime} from '@/utils/index'
  import {gett} from '@/api/visits'

  export default {
    mixins: [initData],
    data() {
      return {
        delLoading: false, status: '-9',create_time: '',audit_status:'',
        userTypeOptions: [
          { key: '', display_name: '全部' },
          { key: '1', display_name: '用户' },
          { key: '2', display_name: '商家' },
        ],
        auditStatusOptions: [
          { value: '', label: '全部' },
          { value: '1', label: '审核通过' },
          { value: '2', label: '审核不通过' },
        ]
      }
    },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
    methods: {
      formatTime,
      checkPermission,
      handleOrder(tab, event) {
        this.status = tab.name
        this.toQuery()
      },
      beforeInit() {
        debugger;
        this.url = 'api/auth/findWnUserAuth'
        const sort = 'id,desc'
        this.params = { page: this.page, size: this.size, sort: sort, username: this.username, phone: this.phone, addTime: this.createTime, user_type: this.user_type , audit_status: this.audit_status }
        const query = this.query
        const type = query.type
        const value = query.value
        if (type && value) { this.params[type] = value }
        return true
      },
      handleSelectionChange(val) {
        debugger;
        this.checkList = val;
        let orderPrice = 0, storeNum = 0, orderNum = 0, userNum = 0;
        if(val.length !=0 ){
          this.printChecked = true;
          let user = [];
          val.forEach((item,index)=>{
            orderNum += 1;
            orderPrice += item.totalPrice;
            storeNum += item.totalNum;
            user.push(item.user.account);
          })
          user = Array.from(new Set(user));
        }else {
          this.printChecked = false;
          this.clearCaculateInfo();
        }
      },
      checkboxT(row, rowIndex) {
        return row.id !== 1
      },
      handleClose(done) {
        if (this.loading) {
          return;
        }
        this.$confirm('确定要提交表单吗？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {});
      },
      cancelForm() {
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      },
      authUser(rows) {
        debugger;
        this.form.name = rows.username;
        this.form.number = rows.idCard;
        this.form.sex = rows.sex;
        this.form.remark = rows.intro;
        this.loading = false;
        this.dialog = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    height: calc(100% - 80px);
    position: absolute;
    overflow: auto;
    width: calc(100% - 20px);

    .order-caculate {
      font-size: 14px;
      color: #909399;
      border-top: 1px solid #f0f0f0;
      padding: 20px 10px;
      .caculate-title {
        display: inline-block;
        margin-right: 50px;
      }
      .caculate-num {
        font-size: 20px;
        color: #ff4949;
      }
    }

    .el-table th {
      background-color: #fafafa;
    }
  }

  .footer-contains {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    background-color: #f6f6f6;
    bottom: 0;
    flex-align: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 999;
    padding: 0 20px 0 13px;
  }

  /*打印单样式编辑*/
  .order-list {
    /*  height: 297mm;*/
    margin: 0 auto;
    width: 210mm;

    .order-title {
      height: 16mm;
      line-height: 16mm;
      font-size: 8mm;
      font-weight: bolder;
      text-align: center;
    }
    .order-info {
      span {
        display: inline-block;
        padding: 0 0 10px 0;
        font-size: 3mm;
      }
      span.info {
        width: 60mm;
      }
    }
    .el-table--small th, .el-table--small td {
      padding: 4px 0;
    }
  }
</style>
