<template>
  <div>
    <el-row :gutter="24" style="margin-top: 20px">
      <el-col :sm="8">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'pagination'
  }
</script>

<style scoped>

</style>
