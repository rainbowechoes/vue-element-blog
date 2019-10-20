<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <el-col :sm="24">
        <el-carousel indicator-position="outside" class="blog-carousel">
          <el-carousel-item v-for="item in 4" :key="item" height="1000px">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">test</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">test</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  .blog-container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .blog-carousel {
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
