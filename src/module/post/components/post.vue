<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <el-col :span="15">
        <!-- 帖子具体内容 -->
        <div class="row">
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

          <div class="comments">
            <h3>热门评论</h3>

            <ul id="comments">
              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1-med.png" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                  <div class="comment-meta">
                    <div class="comment-id">sfsdfsd</div>
                    <span><a href="#"><i class="fa fa-reply"></i> Reply</a></span>
                  </div>
                </div>
              </li>

              <li class="sub-comment">
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1-med.png" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                  <div class="comment-meta">
                    <div class="reply-id">dfgsrdf</div>
                    <span><a href="#"><i class="fa fa-reply"></i> Reply</a></span>
                  </div>
                </div>
              </li>

              <li class="sub-comment">
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1-med.png" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                  <div class="comment-meta">
                    <span><a href="#"><i class="fa fa-heart-o"></i> 8</a></span>
                    <span><a href="#"><i class="fa fa-reply"></i> Reply</a></span>
                  </div>
                </div>
              </li>

              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1-med.png" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                  <div class="comment-meta">
                    <span><a href="#"><i class="fa fa-heart-o"></i> 8</a></span>
                    <span><a href="#"><i class="fa fa-reply"></i> Reply</a></span>
                  </div>
                </div>
              </li>

              <li>
                <div class="comment-content">
                  <img src="../../../../static/css/bootstrap-blog/img/avatar/1-med.png" alt="" />

                  <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                  <div class="comment-meta">
                    <span><a href="#"><i class="fa fa-heart-o"></i> 8</a></span>
                    <span><a href="#"><i class="fa fa-reply"></i> Reply</a></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="comment-form" id="comment-form">
            <h5>发表评论</h5>

            <div id="comment-window" class="alert alert-danger alert-dismissible info-window" role="alert" hidden>
              <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Warning!</strong> <span>Better check yourself, you're not looking too good.</span>
            </div>
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="用户名" id="username" autocomplete="off">
              </div>

              <div class="col-md-6">
                <input type="email" placeholder="邮箱" autocomplete="off">
              </div>
            </div>

            <textarea placeholder="评论内容" id="comment-text" autocomplete="off"></textarea>

            <button id="btn-comment">评论</button>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'post'
  }
</script>

<style scoped>
  @import "../../../../static/css/blog/css/blog.css";
  @import "../../../../static/css/blog/css/markdown.css";
  @import "../../../../static/css/blog/css/style.css";
  @import "../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  @import "../../../../static/css/bootstrap-blog/css/animate.css";
  @import "../../../../static/css/bootstrap-blog/css/style.css";
</style>
