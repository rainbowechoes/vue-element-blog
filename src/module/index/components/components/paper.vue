<template>
  <div class="article">
    <el-row :gutter="24">
      <el-col :sm="24">
        <el-row :gutter="24" style="height: 200px">
          <el-col :sm="10">
            <el-image
              :src="imgUrl"
              fit="fill">
            </el-image>
          </el-col>
          <el-col :sm="14" >
            <el-row :gutter="24">
              <el-col :sm="24" style="font-weight: bold">Article</el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="24"
                      class="title-content"
                      v-text="title">
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :sm="24" v-text="simpleContent" class="simple-content">
              </el-col>
            </el-row>
            <el-row :gutter="24" style="font-size: 10px; margin-top: 5px">
              <el-col :sm="4">
                <router-link :to="linkUrl"><el-link style="font-size: 10px" type="primary">More...</el-link></router-link>
              </el-col>
              <el-col :sm="9" :offset="11">
                by <span v-text="author"></span>.
                <span v-text="postDate"></span>.
                <i class="el-icon-chat-round" v-text="commentCount"></i>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'paper',
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
    simpleContent: {
      type: String,
      default: '我在写一个类似百度搜索框的自动提示功能时候，使用了AJAX+keydown事件。调试时候我发现，当在搜索框中输入文字的时候，控制台在不停发送AJAX。这在本地服务器测试还好，如果我把它拿到运行环境，很可能出现提示功能卡顿，甚至没等提示出现用户就输入完毕的现象。毕竟大家现在打字都很快啊。于是我找到了一个新技能，函数节流 & 函数去抖。 \n' +
        'throttle 和 debounce 是解决请求和响应速度不匹配问题的两个方案。二者的差异在于选择不同的策略。'
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
  /deep/.title-content, /deep/.simple-content {
    width: 420px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  /deep/.title-content {
    -webkit-line-clamp: 2;
    font-size: 20px;
    font-weight: bold;
  }
  /deep/.simple-content {
    font-size: 14px;
    -webkit-line-clamp: 4;
  }
</style>
