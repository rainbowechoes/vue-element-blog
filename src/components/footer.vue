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
        <el-row :gutter="24" class="footer-title">
          <el-col :span="24">座右铭</el-col>
        </el-row>
        <el-row :gutter="24" class="footer-content">
          <el-col :span="24">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, commodi consectetur consequatur ducimus eius explicabo libero molestiae qui voluptatibus.
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="8">
        <el-row :gutter="24" class="footer-title">
          <el-col :span="24">个人简介</el-col>
        </el-row>
        <el-row :gutter="24" class="footer-content">
          <el-col :span="24">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, commodi consectetur consequatur ducimus eius explicabo libero molestiae qui voluptatibus.
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="8">
        <el-row :gutter="24" class="footer-title">
          <el-col :span="24">联系博主</el-col>
        </el-row>
        <el-row :gutter="24" class="footer-content">
          <el-col :sm="12">
            网站维护不易，如果觉得博客内容不错，愿意请博主喝杯咖啡，可以扫描旁边二维码。有问题也可以联系博主，QQ：2714972882
          </el-col>
          <el-col :sm="12">
            <el-image :src="src" :fit="fit" style="width: 80px; height: 80px"></el-image>
          </el-col>
        </el-row>
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
    name: 'footer',
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>

<style scoped>

  .footer-title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .footer-content {
    font-size: 12px;
  }
</style>
