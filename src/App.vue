<template>
  <div id="app">
    <el-backtop target="#app"></el-backtop>
    <el-container>
      <!-- header begin -->
      <el-header class="blog-header" height="100px">
        <navbar></navbar>
      </el-header>
      <!-- header end -->
      <!--<router-view/>-->
      <el-main>
        <router-view />
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
      </el-main>
      <!-- footer begin -->
      <el-footer height="100%" class="blog-header">
        <tailner></tailner>
      </el-footer>
      <!-- footer end -->
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Tailner from '@/components/footer'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: ''
    };
  },
  components: {
    Navbar,
    Tailner
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f8f9;
    margin: 0;
    overflow: hidden;
    overflow-y: scroll;
  }
  html,body,#app {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0;
    /*外部间距也是如此设置*/
    margin: 0;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .blog-header {
    padding: 0;
    background-color: white;
  }
  .blog-container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
