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
              <show-more style="margin-top: 20px" :showHeight="showHeight" :content="contentTxt"></show-more>
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
  import ShowMore from './components/show-more'

  export default {
    name: 'post',
    data () {
      return {
        data: '',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        activeName: '1',
        contentTxt: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur distinctio, eaque error eveniet exercitationem hic magni maiores nobis nostrum odio officia porro possimus quae qui quo reprehenderit sed sunt veritatis. Autem dolores labore mollitia natus tempora vel voluptas? Accusantium beatae dolorum explicabo laboriosam, rerum sit. Accusamus distinctio error facere facilis fugiat id impedit ipsa ipsam iure, maxime mollitia necessitatibus nulla obcaecati officia placeat provident quos, saepe sapiente similique, suscipit. Ab delectus dolorem incidunt officia rerum. Accusantium aperiam aspernatur consectetur corporis cupiditate debitis delectus dolores dolorum enim eveniet expedita impedit ipsum labore modi nihil nisi nulla officiis, placeat, quis quisquam reiciendis rem repudiandae ut velit veniam. Ab ad aperiam aut beatae blanditiis deleniti dignissimos dolorem doloribus eligendi enim error est fuga fugiat fugit iusto maxime modi nobis officiis porro quam quasi quia quod repellat, sapiente sint sit suscipit voluptatem? Assumenda culpa, cupiditate deleniti dignissimos illo ipsa mollitia nam omnis, perspiciatis quam quidem quo suscipit tempore? Beatae commodi deleniti dignissimos ea minima modi quidem tenetur, vero? Amet expedita fuga fugiat labore laudantium modi nihil veritatis, voluptatem? Accusamus aliquam animi, aperiam blanditiis commodi consectetur cum deserunt dolor dolore doloremque et exercitationem harum impedit in ipsum iusto laborum magni maiores maxime minus nam necessitatibus nostrum officiis pariatur perferendis placeat provident quasi quisquam, reprehenderit rerum saepe temporibus ullam vel. Aperiam aspernatur commodi consectetur distinctio ducimus ipsa itaque minus nesciunt, officia, veritatis vitae voluptatem. Animi cupiditate dolor et fugiat minima optio perferendis vitae. Blanditiis consequuntur dicta dolore dolorum eligendi eos facere harum id ipsa iusto laboriosam modi odio odit officia optio, praesentium quasi sapiente sequi similique sunt tempore temporibus unde. A aut autem, consectetur eos fuga hic id magni molestias mollitia necessitatibus praesentium quibusdam quos recusandae sint suscipit ut velit veniam? Architecto consequuntur ea eveniet provident quibusdam voluptates. Aut corporis, doloribus eveniet exercitationem expedita, laborum molestiae, necessitatibus perferendis possimus quia quis quisquam quos recusandae similique voluptate. Accusantium ad amet aperiam asperiores corporis deserunt dolor ducimus ea, eius excepturi facilis fuga id in inventore iure labore laboriosam molestiae nobis non obcaecati odit pariatur porro provident quaerat quo quos repellendus sit tempore velit vitae? Ad excepturi minus mollitia nam nulla. Incidunt ipsa maiores quod reiciendis. Accusamus ad alias aliquam autem dicta earum esse exercitationem harum illum in, laborum officiis porro quasi, qui sunt! Quasi quia quis sit tenetur. Cumque expedita facere in sunt. Ad animi asperiores consectetur cupiditate, deserunt dolor ea enim libero natus neque pariatur quos, totam. Animi aperiam aut consectetur consequuntur culpa cumque esse fugit hic incidunt ipsam ipsum labore magnam minima molestias necessitatibus nesciunt nobis non obcaecati optio perferendis quae quis quod repudiandae, saepe sint sit soluta sunt tempora temporibus tenetur ullam unde veniam vero? Dolorem est itaque non nostrum quas. Adipisci atque aut, ea eius eum ex facere fugiat illum modi nihil nostrum perferendis quasi quo reiciendis repudiandae rerum sed sunt tempora vero voluptatem? Impedit optio recusandae unde velit! A adipisci aspernatur assumenda autem deleniti doloribus ea earum eum harum ipsam laborum minus odio optio reiciendis sit, tempora tenetur unde vel velit.\n'
      }
    },
    components: {
      Tinymce,
      Right,
      Pagination,
      ShowMore
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
