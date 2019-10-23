<template>
  <div class="blog-container" style="margin-top: 0">
    <el-row :gutter="24">
      <el-col :span="15">
        <article-detail></article-detail>

        <copy-right></copy-right>

        <related></related>

        <comment></comment>

        <reviewer></reviewer>
      </el-col>
      <right></right>
    </el-row>
  </div>
</template>

<script>
  import Right from '@/components/right-bar'
  import CopyRight from './components/copy-right'
  import ArticleDetail from './components/article-detail'
  import Related from './components/related'
  import Comment from './components/comment'
  import Reviewer from './components/reviewer'

  export default {
    name: 'post',
    data () {
      return {
        activeName: '1'
      }
    },
    components: {
      Right,
      CopyRight,
      ArticleDetail,
      Related,
      Comment,
      Reviewer
    }
  }
</script>

<style scoped>
</style>
