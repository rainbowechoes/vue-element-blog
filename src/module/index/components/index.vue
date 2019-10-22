<template>
  <div class="blog-container">
    <carousel />

    <div class="index-content">
      <el-row :gutter="24">
        <left></left>
        <right></right>
      </el-row>
    </div>

    <pagination></pagination>
  </div>
</template>

<script>
  import Pagination from '@/components/pagination'
  import Carousel from './components/carousel'
  import Left from './components/left-bar'
  import Right from '../../../components/right-bar'

  export default {
    name: 'index',
    components: {
      Carousel,
      Left,
      Right,
      Pagination
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
</style>
