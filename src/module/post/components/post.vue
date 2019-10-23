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
                <span class="comment" id="commentSize"><i class="el-icon-chat-round"></i> 5</span>
                <span class="views" id="browseCount"><i class="el-icon-view"></i> 682 views</span>
              </div>

              <div class="clearfix"></div>
            </div>

            <div id="context">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aut corporis debitis deserunt dicta distinctio doloremque id in itaque iusto mollitia nihil obcaecati odio, perferendis placeat, quas quis ratione repellendus rerum saepe sunt totam vero! Eaque enim explicabo nihil officiis quae quasi repellat sunt, voluptatem. Ad asperiores deleniti, dignissimos earum eligendi enim error eveniet explicabo illo iste iusto molestiae nam natus necessitatibus nemo, non nulla odit optio quasi quia, ratione recusandae reiciendis repellat repudiandae sed sequi soluta suscipit temporibus unde vel velit vero vitae voluptate? Asperiores at aut deleniti dolorem fugit laudantium magni natus pariatur quos tenetur. At repudiandae sit temporibus vel. Minima, nobis voluptatibus! Ab animi architecto aspernatur at aut blanditiis commodi dicta distinctio doloremque doloribus ducimus et eum explicabo, facilis harum laboriosam laborum libero maiores modi nam natus necessitatibus nemo nesciunt non officiis perspiciatis possimus quae quasi qui quo ratione rem totam voluptate. Ad commodi eius, exercitationem hic maiores quasi sed totam ullam velit? Commodi cum ea et exercitationem magni nobis repellendus sed tempora. Ab accusantium blanditiis corporis eius explicabo hic incidunt iure porro quasi reiciendis! Accusamus animi asperiores at atque corporis dolor ducimus eius error eum explicabo hic id illo ipsa ipsum iste maiores minima molestiae molestias mollitia, nulla omnis quae quaerat quasi quisquam ratione recusandae sed sint velit vero voluptas. Adipisci alias aperiam debitis dignissimos doloremque dolores, explicabo laborum magni nam nisi odio, optio quas quibusdam recusandae reiciendis unde voluptatibus! At autem commodi consequatur corporis dolores dolorum esse est et excepturi, itaque laborum molestias nisi odit praesentium quae repellat sed vitae. Autem commodi cumque delectus doloremque enim expedita illo laboriosam neque odio placeat possimus sapiente sit suscipit, tenetur, vitae. Deleniti dolorem illum omnis placeat similique sunt velit! Eligendi eos inventore itaque labore odit reiciendis temporibus veniam. Ab accusamus accusantium asperiores commodi cum cupiditate, doloribus illum nemo nesciunt, officiis quae rem velit! Ab accusantium amet aperiam asperiores autem debitis eius explicabo libero nostrum obcaecati odio placeat quaerat qui repellat sit, tempore tenetur voluptatem? Asperiores dolorum ducimus ea eligendi eveniet facere minima, nostrum quasi repellendus reprehenderit tempora totam ullam voluptatum? Aperiam blanditiis, consectetur, dignissimos eius error illo in ipsa ipsum iste iure libero non nostrum odit optio quas quidem quis quo ratione repudiandae velit veniam vitae, voluptate. Atque ducimus expedita illum necessitatibus nostrum numquam quae quaerat vel voluptatem, voluptatibus? A amet, aut cum, cumque, dicta est expedita id in libero molestias odio quia quibusdam sit unde veniam.</p>
            </div>

            <div class="clearfix"></div>
          </div>
        </el-card>
        <el-card shadow="hover" class="info-card">
          <el-row :gutter="24">
            <el-col :span="2">
              <el-image :src="src" :fit="fit" class="img-rounded" style="width: 50px; height: 50px;"></el-image>
            </el-col>
            <el-col :span="22">
              <div class="instruction">
                <span class="instruction-title">版权说明：</span>
                <span>
                    个人文章，转载文章请联系作者，注明出处
                  </span>
              </div>
              <div class="instruction">
                <span class="instruction-title">所属分类：</span>
                <router-link to="/">
                  <a href="" class="btn btn-primary btn-lg active btn-xs" role="button">Spring</a>
                </router-link>
              </div>
            </el-col>
          </el-row>
        </el-card>
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
        </el-card>
        <!-- 分页 -->
        <pagination class="info-card"></pagination>
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

  export default {
    name: 'post',
    data () {
      return {
        data: '',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  .instruction {
    margin-left: 10px;
    text-align: left;
    margin-bottom: 8px;
  }
  .instruction-title {
    font-weight: bold;
  }
</style>
