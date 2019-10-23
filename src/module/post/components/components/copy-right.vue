<template>
  <!-- 版权说明 -->
  <el-card shadow="hover" class="info-card">
    <el-row :gutter="24">
      <el-col :span="2">
        <el-avatar :src="src" :size="50"></el-avatar>
      </el-col>
      <el-col :span="22">
        <div class="instruction">
          <span class="instruction-title">版权说明：</span>
          <span>
            个人文章，转载文章请联系作者，注明出处
          </span>
        </div>
        <div class="instruction">
          <span class="instruction-title">所属分类：</span>
          <router-link to="/">
            <a href="" class="btn btn-primary btn-lg active btn-xs" role="button">Spring</a>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'copy-right',
    data () {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>

<style scoped>
  @import "../../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  .instruction {
    margin-left: 10px;
    text-align: left;
    margin-bottom: 8px;
  }
  .instruction-title {
    font-weight: bold;
  }
</style>
