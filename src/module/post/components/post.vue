<template>
  <div class="blog-container" style="margin-top: 0">
    <el-row :gutter="24">
      <el-col :span="15">
        <article-detail></article-detail>

        <copy-right></copy-right>

        <related></related>

        <!-- 评论内容 -->
        <el-card class="info-card" shadow="hover" header="热门评论">
          <div class="comments">
            <ul id="comments">
              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                </div>
              </li>

              <li class="sub-comment">
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                </div>
              </li>

              <li class="sub-comment">
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                </div>
              </li>

              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                </div>
              </li>

              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                </div>
              </li>
            </ul>
          </div>
          <!-- 分页 -->
          <pagination class="info-card"></pagination>
        </el-card>

        <!-- 评论发表 -->
        <el-card shadow="hover" header="发表评论">
          <div class="comment-form" id="comment-form" style="padding: 0">
            <tinymce id="d1" v-model="data"></tinymce>
            <button id="btn-comment" style="margin-top: 10px">评论</button>
          </div>
        </el-card>
      </el-col>
      <right></right>
    </el-row>
  </div>
</template>

<script>
  import Tinymce from 'vue-tinymce-editor'
  import '../../../../static/tinymce/zh_CN'
  import Pagination from '@/components/pagination'
  import Right from '@/components/right-bar'
  import CopyRight from './components/copy-right'
  import ArticleDetail from './components/article-detail'
  import Related from './components/related'

  export default {
    name: 'post',
    data () {
      return {
        data: '',
        activeName: '1'
      }
    },
    components: {
      Tinymce,
      Right,
      Pagination,
      CopyRight,
      ArticleDetail,
      Related
    }
  }
</script>

<style scoped>
  @import "../../../../static/css/blog/css/blog.css";
  @import "../../../../static/css/blog/css/markdown.css";
  @import "../../../../static/css/blog/css/style.css";
  @import "../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  @import "../../../../static/css/bootstrap-blog/css/animate.css";
  @import "../../../../static/css/bootstrap-blog/css/style.css";

  .comments,
  .comments span,
  .comments p {
    font-size: 10px;
  }

  .comments p {
    line-height: 13px;
  }

  .comment-content {
    margin-bottom: 0;
  }

</style>
