<template>
  <el-col :md="9">
    <el-card class="info-card" shadow="hover" header="最热文章">
      <div class="micro-articles">
        <micro></micro>
        <micro></micro>
        <micro></micro>
      </div>
    </el-card>
    <el-card class="info-card" shadow="hover" header="排行">
      <el-tabs v-model="listActiveName" type="card">
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
    <el-card class="info-card" shadow="hover" header="标签">
      <router-link to="/post/dfsd">
        <el-tag>java</el-tag>
      </router-link>
      <router-link to="/post/fsdf">
        <el-tag type="success">python</el-tag>
      </router-link>
    </el-card>
    <el-card shadow="hover" header="网站概况">
      <statistic></statistic>
    </el-card>
  </el-col>
</template>

<script>
  import Micro from '../module/index/components/components/micro-pager'
  import Statistic from '../module/index/components/components/statistic'

  export default {
    name: 'right-bar',
    data () {
      return {
        listActiveName: 'first'
      }
    },
    methods: {
    },
    components: {
      Micro,
      Statistic
    }
  }
</script>

<style scoped>
</style>
