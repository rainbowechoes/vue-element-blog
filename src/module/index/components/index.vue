<template>
  <div class="blog-container">
    <el-row :gutter="24">
      <el-col :sm="24">
        <el-carousel height="350px" indicator-position="outside" class="blog-carousel">
          <el-carousel-item v-for="item in 4" :key="item" height="1000px">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="15">
        <el-card class="box-card" shadow="hover" header="最新文章">
          <div class="articles">
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" style="height: 200px">
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="2">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="3">
                          title
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur eaque enim laborum, minima officiis quam quia repellat! Ad adipisci deleniti deserunt facere optio repudiandae suscipit! Amet est facilis vero.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8">更多</el-col>
                        <el-col :sm="16">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="box-card" shadow="hover" header="最热文章">
          <div class="micro-articles">
            <div class="micro-article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" >
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="24">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8" style="font-size: 10px">更多</el-col>
                        <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="micro-article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" >
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="24">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8" style="font-size: 10px">更多</el-col>
                        <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="micro-article">
              <el-row :gutter="24">
                <el-col :sm="24">
                  <el-row :gutter="24" >
                    <el-col :sm="10">
                      <el-image
                        :src="url"
                        fit="fill">
                      </el-image>
                    </el-col>
                    <el-col :sm="14" >
                      <el-row :gutter="24">
                        <el-col :sm="24">Article</el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="24">
                          Lorem ipsum dolor sit amet, consectetur.
                        </el-col>
                      </el-row>
                      <el-row :gutter="24">
                        <el-col :sm="8" style="font-size: 10px">更多</el-col>
                        <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" shadow="hover" header="排行">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="最受欢迎" name="first">
              <div class="micro-articles">
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="最多评论" name="second">
              <div class="micro-articles">
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="最多阅读" name="third">
              <div class="micro-articles">
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <div class="micro-article">
                  <el-row :gutter="24">
                    <el-col :sm="24">
                      <el-row :gutter="24" >
                        <el-col :sm="10">
                          <el-image
                            :src="url"
                            fit="fill">
                          </el-image>
                        </el-col>
                        <el-col :sm="14" >
                          <el-row :gutter="24">
                            <el-col :sm="24">Article</el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="24">
                              Lorem ipsum dolor sit amet, consectetur.
                            </el-col>
                          </el-row>
                          <el-row :gutter="24">
                            <el-col :sm="8" style="font-size: 10px">更多</el-col>
                            <el-col :sm="16" style="font-size: 10px">by rainbow. 2018-8-15. <i class="el-icon-chat-round">12</i></el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
        <el-card class="box-card" shadow="hover" header="标签">
          <el-tag>java</el-tag>
          <el-tag type="success">python</el-tag>
          <el-tag type="info">javascript</el-tag>
          <el-tag type="warning">springboot</el-tag>
          <el-tag type="danger">springcloud</el-tag>
        </el-card>
        <el-card class="box-card" shadow="hover" header="网站概况">
          <el-row :gutter="24">
            <el-col :sm="10">
              <i class="el-icon-document"> 文章数：1543</i>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :sm="10">
              <i class="el-icon-chat-line-round"> 评论数：1543</i>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :sm="10">
              <i class="el-icon-view"> 访问数：1543</i>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :sm="10">
              <i class="el-icon-price-tag"> 访问数：1543</i>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    /*width: 480px;*/
  }
  .blog-container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .blog-carousel {
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
