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
        <div v-if="invalidRoute">
          <page404></page404>
        </div>
        <router-view />
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
import Page404 from '@/module/error-page/components/404'

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
    Tailner,
    Page404
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0;
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
