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
          <el-card class="box-card" shadow="hover" header="最热文章">
            <div class="micro-articles">
              <micro></micro>
              <micro></micro>
              <micro></micro>
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover" header="排行">
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
          <el-card class="box-card" shadow="hover" header="标签">
            <el-tag>java</el-tag>
            <el-tag type="success">python</el-tag>
            <el-tag type="info">javascript</el-tag>
            <el-tag type="warning">springboot</el-tag>
            <el-tag type="danger">springcloud</el-tag>
          </el-card>
          <el-card class="box-card" shadow="hover" header="网站概况">
            <el-row :gutter="24">
              <el-col :sm="10">
                <i class="el-icon-document"> 文章数：1543</i>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="10">
                <i class="el-icon-chat-line-round"> 评论数：1543</i>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="10">
                <i class="el-icon-view"> 访问数：1543</i>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="10">
                <i class="el-icon-price-tag"> 访问数：1543</i>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Paper from './components/paper'
  import Carousel from './components/carousel'
  import Micro from './components/micro-pager'

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

</style>
