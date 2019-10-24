<template>
  <div>
    <div class="comment-content">
      <img src="../../../../../static/css/bootstrap-blog/img/avatar/1.jpg" alt="" />

      <div class="comment-title">Dan Counsell <span>15 hours ago</span></div>
      <div style="float: right; padding-left: 15px">
        <el-button type="text" size="small" style="padding-top: 0" @click="toPostReview">
          回复
        </el-button>
      </div>

      <div style="float: right;">
        <el-button type="text" size="small" style="padding-top: 0"
                   v-if="hasChild"
                   v-text="toggleContext"
                   @click="handleToggle">
        </el-button>
      </div>

      <div class="clearfix"></div>
      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
    </div>

    <collapse-transition>
      <ul v-show="!isPackUp">
        <li class="sub-comment" v-for="child in childrens">
          <div class="comment-content">
            <img :src="child.imgUrl" alt="" />

            <div class="comment-title" v-text="child.author"></div>
            <div class="comment-date" v-text="child.post"></div>
            <div class="clearfix"></div>
            <p v-text="child.content"></p>
          </div>
        </li>
      </ul>
    </collapse-transition>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/base.css';
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  export default {
    name: 'review',
    data () {
      return {
        // 子评论是否收起
        isPackUp: true
      }
    },
    components: {
      CollapseTransition
    },
    props: {
      childrens: {
        type: Array,
        default: [
          {
            imgUrl: '../../../../../static/css/bootstrap-blog/img/avatar/1.jpg',
            post: '15 hours ago',
            author: 'rainbow',
            content: 'sdfhkuhjhfsds'
          }
        ],
        required: false
      }
    },
    computed: {
      // 展开、收起时，按钮显示不同文本
      toggleContext () {
        if (this.isPackUp) {
          return '展开回复';
        } else {
          return '收起回复';
        }
      },
      // 是否有子评论
      hasChild () {
        return this.childrens.length !== 0;
      }
    },
    methods: {
      // 处理按钮点击
      handleToggle: function () {
        this.isPackUp = !this.isPackUp;
      },
      toPostReview: function () {
        const postReview = document.querySelector('#postReview');
        if (!!postReview) {
          postReview.scrollIntoView(true);
        }
      }
    }
  }
</script>

<style scoped>

  @import "../../../../../static/css/bootstrap-blog/js/bootstrap/bootstrap.min.css";
  @import "../../../../../static/css/bootstrap-blog/css/style.css";
  .comment-content {
    margin-bottom: 0;
  }
  .comments span,
  .comments p {
    font-size: 10px;
  }
  .comments p {
    line-height: 13px;
  }

  .comment-date {
    float: left;
    margin-bottom: 5px;
    margin-left: 10px;
  }
</style>
