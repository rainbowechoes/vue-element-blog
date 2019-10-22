<template>
  <el-col :span="15">
    <el-card class="box-card" header="查找结果" shadow="hover">
      <div v-for="it in result" :key="it" class="text item">
        <el-row :gutter="24">
          <el-col :span="12" style="text-align: left;">{{ it }}</el-col>
          <el-col :span="12" style="text-align: right">2019年8月9日</el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    name: 'search-result',
    data () {
      return {
        result: [
          'sffsdkjfhsdkfkjdfnsdlnfklshdn',
          'fsdsdffghjkhkhghfd',
          'hjkfdgcsdfjsegsg',
          'yusehdrfjkhkjgdfgdfdkhjtfiostkdn'
        ]
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }
</style>
