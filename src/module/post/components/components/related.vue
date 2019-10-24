<template>
  <!-- 相关及最新 -->
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="相关文章">
        <div v-for="i in 4" :key="i">
          <router-link to="/" class="article-route">
            <el-link icon="el-icon-arrow-right" :underline="false" class="article-link">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, nihil!
            </el-link>
          </router-link>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="最新文章">
        <div v-for="i in 4" :key="i">
          <router-link to="/" class="article-route">
            <el-link icon="el-icon-arrow-right" :underline="false" class="article-link">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi illo in odit placeat quae quasi quis quos rerum similique tempore.
            </el-link>
          </router-link>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'related'
  }
</script>

<style scoped>
  .article-route {
    float: left;
  }

  .article-route .article-link {
    width: 300px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .article-link-card {
    padding-bottom: 20px;
  }
</style>
