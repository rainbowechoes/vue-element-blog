<template>
  <div class="micro-article">
    <el-row :gutter="24">
      <el-col :sm="24">
        <el-row :gutter="24" >
          <el-col :sm="10">
            <el-image
              :src="imgUrl"
              fit="fill">
            </el-image>
          </el-col>
          <el-col :sm="14" >
            <el-row :gutter="24">
              <el-col :sm="24" style="font-size: 13px; font-weight: bold;">Article</el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="24" class="micro-title" v-text="title">
              </el-col>
            </el-row>
            <el-row :gutter="24" style="margin-top: 5px">
              <el-col :sm="8" style="font-size: 10px">
                <router-link :to="linkUrl">
                  <el-link style="font-size: 10px" type="primary">More...</el-link>
                </router-link>
              </el-col>
              <el-col :sm="16" style="font-size: 10px">by
                <span v-text="author"></span>.
                <span v-text="postDate"></span>.
                <i class="el-icon-chat-round" v-text="commentCount"></i></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'micro-pager',
  data () {
    return {
    }
  },
  props: {
    imgUrl: {
      type: String,
      default: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    },
    title: {
      type: String,
      default: 'JavaScript-性能优化，函数节流（throttle）与函数去抖（debounce）'
    },
    linkUrl: {
      type: String,
      default: '/post/sdfsd'
    },
    author: {
      type: String,
      default: 'rainbow'
    },
    postDate: {
      type: String,
      default: '几分钟前'
    },
    commentCount: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style lang="scss" scoped>
  .micro-title {
    width: 200px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

</style>
