<template>
  <div class="blog-container">
    <carousel />
    <div class="index-content">
      <el-row :gutter="24">
        <el-col :span="15">
          <el-card class="box-card" shadow="hover" header="最新文章">
            <div class="articles">
              <paper></paper>
              <paper></paper>
              <paper></paper>
              <paper></paper>
              <paper></paper>
              <paper></paper>
              <paper></paper>
            </div>
          </el-card>
        </el-col>
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
      </el-row>
    </div>
    <div class="blog-container">
      <el-row :gutter="24" style="margin-top: 20px">
        <el-col :sm="8">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Paper from './components/paper'
  import Carousel from './components/carousel'
  import Micro from './components/micro-pager'
  import Statistic from './components/statistic'

  export default {
    name: 'index',
    data () {
      return {
        activeName: 'first'
      }
    },
    components: {
      Carousel,
      Paper,
      Statistic,
      Micro
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .blog-container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .info-card {
    margin-bottom: 20px;
  }
</style>
