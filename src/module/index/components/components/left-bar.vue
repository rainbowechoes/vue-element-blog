<template>
  <el-col :span="15">
    <el-card class="box-card" shadow="hover" header="最新文章">
      <div class="articles">
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
      </div>
    </el-card>
  </el-col>
</template>

<script>
  import Paper from './paper'
  import Micro from './micro-pager'

  export default {
    name: 'left-bar',
    components: {
      Paper,
      Micro
    }
  }
</script>

<style scoped>

</style>
