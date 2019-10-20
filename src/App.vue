<template>
  <div id="app">
    <el-container>
      <!-- header begin -->
      <el-header class="blog-header" height="100px">
        <div class="blog-container">
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :sm="3" style="margin-top: 20px; "><el-link href="/" style="font-size: 26px">Echo</el-link></el-col>
            <el-col :sm="3" :offset="8">
              <el-input
                placeholder="查找文章"
                v-model="input"
                clearable
                style="margin-top: 20px">
              </el-input>
            </el-col>
            <el-col :sm="10">
              <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <!-- header end -->
      <!--<router-view/>-->
      <el-main>
        <router-view />
      </el-main>
      <!-- footer begin -->
      <el-footer>footer</el-footer>
      <!-- footer end -->
    </el-container>
  </div>
</template>

<script>
import Header from '@/module/header/components/header'
import Footer from '@/module/footer/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
    /*padding: 0px;*/
    margin: 0px;
  }
  html,body,#app {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .blog-header {
    padding: 0px;
    background-color: white;
  }
  .blog-container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
