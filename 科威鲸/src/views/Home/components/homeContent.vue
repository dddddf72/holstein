<template>
  <div>
    <div class="nav">
      <div class="sort">
        <span>排序:</span>
        <el-button @click="handleDefault">默认</el-button>
        <span >
          价格
          <i @click="handleSort(isTop)" :class="isTop ? 'el-icon-top' : 'el-icon-bottom'">{{(sortFlag==1)?'&#xe62b;':'&#xe62a;'}}</i>
        </span>
      </div>
    </div>
    <el-container>
      <el-aside width="300px" class="price">
        <div>价格区间:</div>
        <div v-for="item of searchPrice" :key="item.id">
          <div @click="handlePrice(item)">{{item.min}}--{{item.max}}</div>
        </div>
      </el-aside>
      <el-container>
        <el-main class="main">
              <cart-item :item="item" v-for="(item,index) in goodsList" :key="index"></cart-item>
        </el-main>
        <el-footer>
          <el-pagination
            @current-change="handleCurrentChange"
            class="page"
            :page-size="pageSize"
            small
            layout="prev, pager, next"
            :total=total
          ></el-pagination>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import GoodsHttp from "../../../model/GoodsHttp";
export default {
  data() {
    return {
      searchPrice: [
        { min: 0, max: 100, id: 1001 },
        { min: 100, max: 500, id: 1002 },
        { min: 500, max: 1000, id: 1003 },
        { min: 1000, max: 5000, id: 1004 },
        { min: 5000, max: 10000, id: 1005 }
      ],
      isTop:true,
      total: 10,
      pageSize:8,
      limit: 8,
      offset: 0,
      goodsList: [],
      sortFlag: 1
    };
  },
  computed: {
    sum() {
      var sum = 0;
      for (var i = 0; i < this.total; i += 8) {
        sum += 10;
      }
      return sum;
    },
  },
  components: {
    CartItem
  },
  async mounted() {
    this.initData();
    
  },
  methods: {
    async handleCurrentChange(page) {
      var offset = (page - 1) * this.limit;//8
      this.initData(offset);
    },
    async initData(offset=0) {
      var result = await GoodsHttp.getPagination(offset)
      // this.$http.get("/api/goods").then(res=>{
      var {res,total} = result.data;
          this.goodsList = res;
          this.pageSize = 8;
          this.total = total
    },
    compareUp(value) {
      return (a, b) => {
        return a[value] - b[value];
      };
    },
    compareDown(value) {
      return (a, b) => {
        return b[value] - a[value];
      };
    },
    async handleSort(isTop) {
      this.sortFlag = this.sortFlag == 1 ? -1 : 1;
      /* if (this.sortFlag == 1) {
        this.goodsList.sort(this.compareUp("salePrice"));
      } else {
        this.goodsList.sort(this.compareDown("salePrice"));
      } */
      this.isTop = !isTop;
      var sort = 0;
      if(this.isTop==true){
          sort = 1
      }else sort = -1
      console.log(sort);
      var res = await GoodsHttp.sortPrice(sort)
      this.goodsList = res.data.res
    },
    async handlePrice(item){
      var result = await GoodsHttp.getPriceRange(item)
        var {res,total} = result.data;
        this.total = total;
        this.pageSize = total;
        this.goodsList = res;
        console.log(result)
        console.log(total)
    },
    async handleDefault(){
        this.initData()
    }
  }
};
</script>

<style scoped>
.page {
  margin: 0 auto;
}
.nav {
  background: #fff;
  height: 60px;
  position: relative;
}
.sort {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.price div{
    margin: 20px auto;
    width: 200px;
    text-align: center;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>