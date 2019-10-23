<template>
  <div id="app">
    <el-backtop target="#app"></el-backtop>
    <el-container>
      <!-- header begin -->
      <el-header :style="headerStyle" class="blog-header" height="100px">
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
      input: '',
      fixStyle: {
        boxShadow: '0 10px 60px -5px #c1c1c5',
        position: 'sticky',
        top: '0',
        zIndex: '999'
      },
      normalStyle: {
        position: 'sticky',
        top: '0',
        zIndex: '999'
      },
      headerStyle: {
        position: 'sticky',
        top: '0',
        zIndex: '999'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  components: {
    Navbar,
    Tailner,
    Page404
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    },
    scrollHandler () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 380) {
        this.headerStyle = this.fixStyle;
      } else {
        this.headerStyle = this.normalStyle;
      }
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
    margin: 0;
  }
  html,body,#app {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0;
    /*外部间距也是如此设置*/
    margin: 0;
    background-color: #f5f8f9;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .blog-header {
    padding: 0;
    background-color: white;
  }
</style>
