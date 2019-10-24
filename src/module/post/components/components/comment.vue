<template>
  <!-- 评论内容 -->
  <el-card class="info-card" shadow="hover" header="热门评论">
    <div class="comments">
      <ul id="comments">
        <li>
          <review></review>
        </li>


        <li>
          <review></review>
        </li>

        <li>
          <review></review>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <pagination class="info-card"></pagination>
  </el-card>
</template>

<script>
  import Pagination from '@/components/pagination'
  import Review from './review'
  export default {
    name: 'comment',
    components: {
      Pagination,
      Review
    }
  }
</script>

<style scoped>
  @import "../../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  @import "../../../../../static/css/bootstrap-blog/css/style.css";

  .comments,
  .comments span,
  .comments p {
    font-size: 10px;
  }
  .comments p {
    line-height: 13px;
  }
</style>
