<template>
  <div class="blog-container">
    <carousel />

    <div class="index-content">
      <el-row :gutter="24">
        <left></left>
        <right></right>
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
  import Carousel from './components/carousel'
  import Left from './components/left-bar'
  import Right from './components/right-bar'

  export default {
    name: 'index',
    components: {
      Carousel,
      Left,
      Right
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
