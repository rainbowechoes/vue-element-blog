<template>
  <!-- 评论发表 -->
  <el-card shadow="hover" header="发表评论">
    <div style="padding: 0">
      <tinymce id="d1" v-model="data"></tinymce>
      <el-button style="margin-top: 10px" type="primary" plain>提交评论</el-button>
    </div>
  </el-card>
</template>

<script>
  import Tinymce from 'vue-tinymce-editor'
  import '../../../../../static/tinymce/zh_CN'
  export default {
    name: 'reviewer',
    data () {
      return {
        data: ''
      }
    },
    components: {
      Tinymce
    }
  }
</script>

<style scoped>

</style>
