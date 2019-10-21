<template>
  <div class="micro-article">
    <el-row :gutter="24">
      <el-col :sm="24">
        <el-row :gutter="24" >
          <el-col :sm="10">
            <el-image
              :src="url"
              fit="fill">
            </el-image>
          </el-col>
          <el-col :sm="14" >
            <el-row :gutter="24">
              <el-col :sm="24" style="font-size: 13px; font-weight: bold;">Article</el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="24">
                Lorem ipsum dolor sit amet, consectetur.
              </el-col>
            </el-row>
            <el-row :gutter="24" style="margin-top: 5px">
              <el-col :sm="8" style="font-size: 10px">
                <router-link to="/"><el-link style="font-size: 10px" type="primary">More...</el-link></router-link>
              </el-col>
              <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'micro-pager',
    data () {
      return {
        url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      }
    }
  }
</script>

<style scoped>

</style>
