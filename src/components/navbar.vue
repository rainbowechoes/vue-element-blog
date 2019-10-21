<template>
  <div class="blog-container">
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :sm="3" style="margin-top: 20px; ">
        <router-link to="/"><el-link style="font-size: 26px">Echo</el-link></router-link>
      </el-col>
      <el-col :sm="6" :offset="5">
        <el-input
          placeholder="查找文章"
          v-model="input"
          clearable
          style="margin-top: 20px">
        </el-input>
      </el-col>
      <el-col :sm="10">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">编程语言</el-menu-item>
          <el-menu-item index="2">后端开发</el-menu-item>
          <!--<el-submenu index="2">-->
          <!--<template slot="title">我的工作台</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-submenu>-->
          <el-menu-item index="3">学习资源</el-menu-item>
          <el-menu-item index="4">随笔</el-menu-item>
          <el-menu-item index="5">留言板</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>

</style>
