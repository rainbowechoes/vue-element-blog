<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <result></result>
      <right></right>
    </el-row>
  </div>
</template>

<script>
  import Result from './components/search-result'
  import Right from '@/components/right-bar'

  export default {
    name: 'search',
    components: {
      Result,
      Right,
    }
  }
</script>

<style scoped>

</style>
