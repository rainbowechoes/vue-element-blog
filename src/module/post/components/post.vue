<template>
  <div class="blog-container" style="margin-top: 0">
    <el-row :gutter="24">
      <el-col :span="15">
        <!-- 帖子具体内容 -->
        <el-card shadow="hover" class="info-card">
          <div class="blog-single">
            <h3 class="h1" id="title">Twitter Stock Surges On Disney Takeover Rumor</h3>

            <div class="single-meta">
              <div class="meta pull-left">
                <span class="author" id="author"><img src="../../../../static/css/bootstrap-blog/img/avatar/1.jpg" class="img-circle" alt=""/> by Babs C.</span>
                <span class="date" id="publishDate">on Sep 22,2016</span>
                <span class="comment" id="commentSize"><i class="fa fa-comment-o"></i> 5</span>
                <span class="views" id="browseCount"><i class="fa fa-eye"></i> 682 views</span>
              </div>

              <div class="clearfix"></div>
            </div>

            <div id="context">
              <p>At the first debate between Donald Trump and Hillary Clinton, authenticity proved to be no substitution for preparation. Strong words faded in the face of solid experience. And, in a campaign that has seen norms shattered, there was something comforting about at least one candidate behaving in expected ways — and</p>
            </div>

            <div class="clearfix"></div>
          </div>
        </el-card>
        <el-card class="info-card" shadow="hover" header="热门评论">
          <div class="comments" style="font-size: 10px">
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
        </el-card>
        <pagination class="info-card"></pagination>
        <el-card shadow="hover" header="发表评论">
          <div class="comment-form" id="comment-form" style="padding: 0">

            <div id="comment-window" class="alert alert-danger alert-dismissible info-window" role="alert" hidden>
              <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Warning!</strong> <span>Better check yourself, you're not looking too good.</span>
            </div>
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

  export default {
    name: 'post',
    data () {
      return {
        data: ''
      }
    },
    components: {
      Tinymce,
      Right,
      Pagination
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

  .comments p {
    font-size: 10px;
  }

  .comment-content {
    margin-bottom: 0;
  }
</style>
