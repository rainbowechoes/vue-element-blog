<template>
  <el-col :span="15">
    <el-card class="box-card info-card" header="留言板" shadow="hover">
      <div v-for="comment in comments" :key="comment" class="text item">
        <el-row :gutter="24">
          <el-col :span="12" style="text-align: left;" v-text="comment.commentContent">
          </el-col>
          <el-col :span="12" style="text-align: right;" v-text="comment.postDate"></el-col>
        </el-row>
        <el-divider class="message-line"></el-divider>
      </div>
      <pagination></pagination>
    </el-card>
    <reviewer></reviewer>
  </el-col>
</template>

<script>
  import Pagination from '@/components/pagination'
  import Reviewer from '../../../../components/reviewer'
  export default {
    name: 'message-board',
    components: {
      Pagination,
      Reviewer
    },
    props: {
      comments: {
        type: Array,
        default: [
          {
            commentContent: 'sdfgdsjhkfsdfsdf',
            postDate: '2018年5月3日 10:26分'
          },
          {
            commentContent: 'sdfgdsjhkfsdfsdf',
            postDate: '2018年5月3日 10:26分'
          },
          {
            commentContent: 'sdfgdsjhkfsdfsdf',
            postDate: '2018年5月3日 10:26分'
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

  /deep/.message-line {
    margin: 10px 0;
  }
</style>
