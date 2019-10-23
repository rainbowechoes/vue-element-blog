<template>
  <!-- 评论内容 -->
  <el-card class="info-card" shadow="hover" header="热门评论">
    <div class="comments">
      <ul id="comments">
        <li>
          <div class="comment-content">
            <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

            <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
          </div>
        </li>

        <li class="sub-comment">
          <div class="comment-content">
            <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

            <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
          </div>
        </li>

        <li class="sub-comment">
          <div class="comment-content">
            <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

            <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
          </div>
        </li>

        <li>
          <div class="comment-content">
            <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

            <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

          </div>
        </li>

        <li>
          <div class="comment-content">
            <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

            <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <pagination class="info-card"></pagination>
  </el-card>
</template>

<script>
  import Pagination from '@/components/pagination'
  export default {
    name: 'comment',
    components: {
      Pagination
    }
  }
</script>

<style scoped>
  @import "../../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  @import "../../../../../static/css/bootstrap-blog/css/style.css";
  .comment-content {
    margin-bottom: 0;
  }
  .comments,
  .comments span,
  .comments p {
    font-size: 10px;
  }
  .comments p {
    line-height: 13px;
  }
</style>
