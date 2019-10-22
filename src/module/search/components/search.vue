<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <result></result>
      <right></right>
    </el-row>
    <pagination></pagination>
  </div>
</template>

<script>
  import Result from './components/search-result'
  import Right from '@/module/index/components/components/right-bar'
  import Pagination from '@/components/pagination'

  export default {
    name: 'search',
    components: {
      Result,
      Right,
      Pagination
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
