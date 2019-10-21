<template>
  <div>
    <el-row :gutter="24">
      <el-col :sm="10" class="info-col">
        <i class="el-icon-document"><span class="statistic-title"> 文章数</span>：1543</i>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :sm="10" class="info-col">
        <i class="el-icon-chat-line-round"> <span class="statistic-title"> 评论数</span>：1543</i>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :sm="10" class="info-col">
        <i class="el-icon-view"> <span class="statistic-title"> 访问数</span>：1543</i>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :sm="10" class="info-col">
        <i class="el-icon-price-tag"> <span class="statistic-title"> 标签数</span>：1543</i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'statistic'
}
</script>

<style scoped>
  .statistic-title {
    color: #1482f0;
  }
  .info-col {
    margin: 2px 0;
  }
</style>
