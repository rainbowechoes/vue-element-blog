<template>
  <div class="blog-container">
    <el-row :gutter="12" style="padding-top: 30px">
      <el-col :sm="3" style="font-size: 36px">
        <router-link to="/"><el-link style="font-size: 26px">Echo</el-link></router-link>
      </el-col>
      <el-col :sm="6" :offset="3" style="line-height: 40px">
        Lorem ipsum dolor sit amet.
      </el-col>
      <el-col :sm="9" :offset="3">
        <el-input
          placeholder="查找文章"
          v-model="input"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="24">
      <el-col :sm="8">
        Lorem ipsum dolor sit amet.
      </el-col>
      <el-col :sm="8">
        Lorem ipsum dolor sit amet.
      </el-col>
      <el-col :sm="8">
        Lorem ipsum dolor sit amet.
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20" style="height: 60px;margin-top: 35px;font-size: 12px">
      <el-col :span="24">
        Copyright&nbsp;&copy;&nbsp;2018-2019&nbsp;Echo&nbsp;Blog.&nbsp;All&nbsp;rights&nbsp;reserved.&nbsp;蜀ICP备19007116号-1
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>

</style>
