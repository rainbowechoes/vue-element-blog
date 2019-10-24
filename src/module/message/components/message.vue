<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <board></board>
      <right></right>
    </el-row>
  </div>
</template>

<script>
  import Right from '@/components/right-bar'
  import Board from './components/message-board'
  export default {
    name: 'message',
    components: {
      Right,
      Board
    }
  }
</script>

<style scoped>

</style>
