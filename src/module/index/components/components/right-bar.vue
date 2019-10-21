<template>
  <el-col :span="9">
    <el-card class="box-card info-card" shadow="hover" header="最热文章">
      <div class="micro-articles">
        <micro></micro>
        <micro></micro>
        <micro></micro>
      </div>
    </el-card>
    <el-card class="box-card info-card" shadow="hover" header="排行">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="最受欢迎" name="first">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最多评论" name="second">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最多阅读" name="third">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card class="box-card info-card" shadow="hover" header="标签">
      <el-tag>java</el-tag>
      <el-tag type="success">python</el-tag>
      <el-tag type="info">javascript</el-tag>
      <el-tag type="warning">springboot</el-tag>
      <el-tag type="danger">springcloud</el-tag>
    </el-card>
    <el-card class="box-card" shadow="hover" header="网站概况">
      <statistic></statistic>
    </el-card>
  </el-col>
</template>

<script>
  import Micro from './micro-pager'
  import Statistic from './statistic'

  export default {
    name: 'right-bar',
    data () {
      return {
        activeName: 'first'
      }
    },
    components: {
      Micro,
      Statistic
    }
  }
</script>

<style scoped>
  .info-card {
    margin-bottom: 20px;
  }
</style>
