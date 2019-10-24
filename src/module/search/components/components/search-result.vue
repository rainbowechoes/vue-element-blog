<template>
  <el-col :span="15">
    <el-card class="box-card" header="查找结果" shadow="hover">
      <div v-for="it in result" :key="it" class="text item">
        <el-row :gutter="24">
          <el-col :span="12" style="text-align: left;">
            <router-link :to="it.url">
              <el-link :underline="false" v-text="it.title"></el-link>
            </router-link>
          </el-col>
          <el-col :span="12" style="text-align: right;" v-text="it.date"></el-col>
        </el-row>
        <el-divider class="search-line"></el-divider>
      </div>
      <pagination></pagination>
    </el-card>
  </el-col>
</template>

<script>
  import Pagination from '@/components/pagination'

  export default {
    name: 'search-result',
    components: {
      Pagination
    },
    data () {
      return {
        result: [
          {
            url: '/',
            title: 'fsdhjfgdjkdhndkghdkjfghdflkgjdfdgfgdfgfg',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'fsdhjfgdjkdhndkghdkjfghdflkgjdfdgfgdfgfg',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'fsdhjfgdjkdhndkghdkjfghdflkgjdfdgfgdfgfg',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'fsdhjfgdjkdhndkghdkjfghdflkgjdfdgfgdfgfg',
            date: '2018年9月5日'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  /deep/.search-line {
    margin: 10px 0;
  }
</style>
