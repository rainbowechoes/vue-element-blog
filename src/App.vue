<template>
  <div id="app">
    <!--<el-backtop target="#app"></el-backtop>-->
    <!-- 手动结合backTop源码与导航条fix功能 -->
    <transition name="el-fade-in">
      <div
        v-if="visible"
        @click.stop="handleClick"
        :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
        class="el-backtop">
        <slot>
          <el-icon name="caret-top"></el-icon>
        </slot>
      </div>
    </transition>
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

import throttle from 'throttle-debounce/throttle';

export default {
  name: 'App',
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    // 跳转的锚点dom对象
    target: '#app',
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
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
      },
      el: null,
      container: null,
      visible: false
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.scrollHandler);
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener('scroll', this.throttledScrollHandler);
  },
  components: {
    Navbar,
    Tailner,
    Page404,
    throttle
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    },
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      // 处理回到顶部按钮是否可见
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;

      // 处理导航条fix定位并绑定样式
      let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollDistance >= 380) {
        this.headerStyle = this.fixStyle;
      } else {
        this.headerStyle = this.normalStyle;
      }
    },
    handleClick(e) {
      this.scrollToTop();
      this.$emit('click', e);
    },
    scrollToTop() {
      let el = this.el;
      let step = 0;
      let interval = setInterval(() => {
        if (el.scrollTop <= 0) {
          clearInterval(interval);
          return;
        }
        step += 10;
        el.scrollTop -= step;
      }, 20);
    }
  },
  computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0;
    },
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    }
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throttledScrollHandler);
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
